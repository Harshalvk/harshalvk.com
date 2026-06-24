'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { AlgorithmMeta } from '@/modules/theia/types/algorithm';
import { ArrayBars } from './array-bars';
import { VisualizerControls } from './visualizer-controls';
import { StepExplanation } from './step-explanation';
import { generators } from '@/modules/theia/lib/sorting-algorithms';

function randomArray(size: number) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10);
}

export function AlgorithmVisualizer({ algorithm }: { algorithm: AlgorithmMeta }) {
  const [arraySize, setArraySize] = useState(15);
  const [baseArray, setBaseArray] = useState<number[]>(() => randomArray(15));
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(5);

  const generator = generators[algorithm.slug as keyof typeof generators];

  const steps = useMemo(() => generator(baseArray), [baseArray, generator]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleShuffle = useCallback(() => {
    setIsPlaying(false);
    setCurrentStep(0);
    setBaseArray(randomArray(arraySize));
  }, [arraySize]);

  const handleArraySizeChange = useCallback((size: number) => {
    setArraySize(size);
    setIsPlaying(false);
    setCurrentStep(0);
    setBaseArray(randomArray(size));
  }, []);

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setCurrentStep(0);
  }, []);

  const handleStepSelect = useCallback((index: number) => {
    setIsPlaying(false);
    setCurrentStep(index);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    if (currentStep >= steps.length - 1) {
      setIsPlaying(false);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1000 / speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, speed, steps.length, currentStep]);

  // algorithm changed -> reset
  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, [algorithm.slug]);

  const step = steps[currentStep];

  return (
    <div className="flex flex-col gap-4">
      <ArrayBars step={step} />
      <StepExplanation
        steps={steps}
        currentStep={currentStep}
        totalSteps={steps.length}
        onStepSelect={handleStepSelect}
      />
      <VisualizerControls
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying((p) => !p)}
        onStepBack={() => setCurrentStep((s) => Math.max(0, s - 1))}
        onStepForward={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))}
        onReset={handleReset}
        onShuffle={handleShuffle}
        speed={speed}
        onSpeedChange={setSpeed}
        arraySize={arraySize}
        onArraySizeChange={handleArraySizeChange}
        currentStep={currentStep}
        totalSteps={steps.length}
      />
    </div>
  );
}
