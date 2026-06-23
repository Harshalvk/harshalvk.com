export type StepStatus = 'default' | 'comparing' | 'swapping' | 'sorted' | 'pivot' | 'active';

export type ArrayStep = {
  array: number[];
  highlights: Record<number, StepStatus>;
  description: string;
  comparisons?: number;
  swaps?: number;
};

export type ComplexityInfo = {
  best: string;
  average: string;
  worst: string;
};

export type AlgorithmCategoryMeta = {
  slug: string;
  title: string;
  description: string;
};

export type AlgorithmMeta = {
  slug: string;
  category: string;
  title: string;
  description: string;
  timeComplexity: ComplexityInfo;
  spaceComplexity: string;
  // generator: (input: number[]) => ArrayStep[];
};
