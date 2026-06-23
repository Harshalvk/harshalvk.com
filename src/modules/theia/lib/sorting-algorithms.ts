import type { ArrayStep, StepStatus } from '@/modules/theia/types/algorithm';

function snap(
  arr: number[],
  highlights: Record<number, StepStatus>,
  description: string,
  comparisons: number,
  swaps: number
): ArrayStep {
  return { array: [...arr], highlights: { ...highlights }, description, comparisons, swaps };
}

export function bubbleSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  steps.push(snap(arr, {}, 'Start: unsorted array.', 0, 0));

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      steps.push(
        snap(
          arr,
          { [j]: 'comparing', [j + 1]: 'comparing' },
          `Comparing index ${j} (${arr[j]}) with index ${j + 1} (${arr[j + 1]}).`,
          comparisons,
          swaps
        )
      );

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaps++;
        steps.push(
          snap(
            arr,
            { [j]: 'swapping', [j + 1]: 'swapping' },
            `${arr[j + 1]} > ${arr[j]} is false now — swapped, since left was bigger.`,
            comparisons,
            swaps
          )
        );
      }
    }
    steps.push(
      snap(
        arr,
        { [n - 1 - i]: 'sorted' },
        `Index ${n - 1 - i} is now in its final sorted position.`,
        comparisons,
        swaps
      )
    );
  }

  const sortedAll: Record<number, StepStatus> = {};
  arr.forEach((_, idx) => (sortedAll[idx] = 'sorted'));
  steps.push(snap(arr, sortedAll, 'Array fully sorted.', comparisons, swaps));

  return steps;
}

export function selectionSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  steps.push(snap(arr, {}, 'Start: unsorted array.', 0, 0));

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    steps.push(
      snap(
        arr,
        { [i]: 'active' },
        `Assume index ${i} (${arr[i]}) is the smallest in the remaining unsorted part.`,
        comparisons,
        swaps
      )
    );

    for (let j = i + 1; j < n; j++) {
      comparisons++;
      steps.push(
        snap(
          arr,
          { [minIdx]: 'pivot', [j]: 'comparing' },
          `Comparing current minimum (${arr[minIdx]}) with index ${j} (${arr[j]}).`,
          comparisons,
          swaps
        )
      );

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        steps.push(
          snap(
            arr,
            { [minIdx]: 'pivot' },
            `New minimum found: index ${minIdx} (${arr[minIdx]}).`,
            comparisons,
            swaps
          )
        );
      }
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      swaps++;
      steps.push(
        snap(
          arr,
          { [i]: 'swapping', [minIdx]: 'swapping' },
          `Swapping index ${i} with index ${minIdx} to place smallest value.`,
          comparisons,
          swaps
        )
      );
    }

    steps.push(snap(arr, { [i]: 'sorted' }, `Index ${i} locked in as sorted.`, comparisons, swaps));
  }

  const sortedAll: Record<number, StepStatus> = {};
  arr.forEach((_, idx) => (sortedAll[idx] = 'sorted'));
  steps.push(snap(arr, sortedAll, 'Array fully sorted.', comparisons, swaps));

  return steps;
}

export function insertionSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  steps.push(snap(arr, { 0: 'sorted' }, 'Start: first element treated as sorted.', 0, 0));

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    steps.push(
      snap(
        arr,
        { [i]: 'active' },
        `Picking index ${i} (${key}) to insert into sorted part.`,
        comparisons,
        swaps
      )
    );

    while (j >= 0 && arr[j] > key) {
      comparisons++;
      steps.push(
        snap(
          arr,
          { [j]: 'comparing', [j + 1]: 'comparing' },
          `${arr[j]} > ${key}, shifting ${arr[j]} one step right.`,
          comparisons,
          swaps
        )
      );
      arr[j + 1] = arr[j];
      swaps++;
      j--;
    }
    arr[j + 1] = key;

    const sortedSoFar: Record<number, StepStatus> = {};
    for (let k = 0; k <= i; k++) sortedSoFar[k] = 'sorted';
    steps.push(snap(arr, sortedSoFar, `${key} inserted at index ${j + 1}.`, comparisons, swaps));
  }

  return steps;
}

export function mergeSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  let comparisons = 0;

  steps.push(snap(arr, {}, 'Start: unsorted array.', 0, 0));

  function merge(lo: number, mid: number, hi: number) {
    const left = arr.slice(lo, mid + 1);
    const right = arr.slice(mid + 1, hi + 1);
    let i = 0,
      j = 0,
      k = lo;

    steps.push(
      snap(
        arr,
        rangeHighlight(lo, hi, 'active'),
        `Merging sub-arrays [${lo}..${mid}] and [${mid + 1}..${hi}].`,
        comparisons,
        0
      )
    );

    while (i < left.length && j < right.length) {
      comparisons++;
      steps.push(
        snap(arr, { [k]: 'comparing' }, `Comparing ${left[i]} and ${right[j]}.`, comparisons, 0)
      );
      if (left[i] <= right[j]) arr[k++] = left[i++];
      else arr[k++] = right[j++];
      steps.push(
        snap(
          arr,
          { [k - 1]: 'swapping' },
          `Placed ${arr[k - 1]} at index ${k - 1}.`,
          comparisons,
          0
        )
      );
    }
    while (i < left.length) {
      arr[k++] = left[i++];
      steps.push(
        snap(
          arr,
          { [k - 1]: 'swapping' },
          `Copying remaining left value ${arr[k - 1]}.`,
          comparisons,
          0
        )
      );
    }
    while (j < right.length) {
      arr[k++] = right[j++];
      steps.push(
        snap(
          arr,
          { [k - 1]: 'swapping' },
          `Copying remaining right value ${arr[k - 1]}.`,
          comparisons,
          0
        )
      );
    }
    steps.push(
      snap(arr, rangeHighlight(lo, hi, 'sorted'), `Range [${lo}..${hi}] sorted.`, comparisons, 0)
    );
  }

  function sort(lo: number, hi: number) {
    if (lo >= hi) return;
    const mid = Math.floor((lo + hi) / 2);
    sort(lo, mid);
    sort(mid + 1, hi);
    merge(lo, mid, hi);
  }

  sort(0, arr.length - 1);
  return steps;
}

export function quickSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  let comparisons = 0;
  let swaps = 0;

  steps.push(snap(arr, {}, 'Start: unsorted array.', 0, 0));

  function partition(lo: number, hi: number) {
    const pivot = arr[hi];
    steps.push(
      snap(arr, { [hi]: 'pivot' }, `Pivot chosen: index ${hi} (${pivot}).`, comparisons, swaps)
    );
    let i = lo - 1;

    for (let j = lo; j < hi; j++) {
      comparisons++;
      steps.push(
        snap(
          arr,
          { [j]: 'comparing', [hi]: 'pivot' },
          `Comparing ${arr[j]} with pivot ${pivot}.`,
          comparisons,
          swaps
        )
      );
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swaps++;
        steps.push(
          snap(
            arr,
            { [i]: 'swapping', [j]: 'swapping' },
            `${arr[j]} < pivot, swapping into place.`,
            comparisons,
            swaps
          )
        );
      }
    }
    [arr[i + 1], arr[hi]] = [arr[hi], arr[i + 1]];
    swaps++;
    steps.push(
      snap(
        arr,
        { [i + 1]: 'sorted' },
        `Pivot placed at its correct position: index ${i + 1}.`,
        comparisons,
        swaps
      )
    );
    return i + 1;
  }

  function sort(lo: number, hi: number) {
    if (lo < hi) {
      const p = partition(lo, hi);
      sort(lo, p - 1);
      sort(p + 1, hi);
    }
  }

  sort(0, arr.length - 1);

  const sortedAll: Record<number, StepStatus> = {};
  arr.forEach((_, idx) => (sortedAll[idx] = 'sorted'));
  steps.push(snap(arr, sortedAll, 'Array fully sorted.', comparisons, swaps));

  return steps;
}

function rangeHighlight(lo: number, hi: number, status: StepStatus) {
  const h: Record<number, StepStatus> = {};
  for (let k = lo; k <= hi; k++) h[k] = status;
  return h;
}

// ── Heap Sort ──────────────────────────────────────────────────────────────

export function heapSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  steps.push(snap(arr, {}, 'Start: building a max heap from the array.', 0, 0));

  function heapify(size: number, i: number) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < size) {
      comparisons++;
      steps.push(
        snap(
          arr,
          { [largest]: 'pivot', [left]: 'comparing' },
          `Comparing node ${arr[largest]} with left child ${arr[left]}.`,
          comparisons,
          swaps
        )
      );
      if (arr[left] > arr[largest]) largest = left;
    }
    if (right < size) {
      comparisons++;
      steps.push(
        snap(
          arr,
          { [largest]: 'pivot', [right]: 'comparing' },
          `Comparing current largest ${arr[largest]} with right child ${arr[right]}.`,
          comparisons,
          swaps
        )
      );
      if (arr[right] > arr[largest]) largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      swaps++;
      steps.push(
        snap(
          arr,
          { [i]: 'swapping', [largest]: 'swapping' },
          `Swapping ${arr[largest]} up to maintain max-heap property.`,
          comparisons,
          swaps
        )
      );
      heapify(size, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }
  steps.push(snap(arr, {}, 'Max heap built. Largest element now at root.', comparisons, swaps));

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    swaps++;
    steps.push(
      snap(
        arr,
        { 0: 'swapping', [i]: 'sorted' },
        `Moving largest element (${arr[i]}) to end of array, index ${i}.`,
        comparisons,
        swaps
      )
    );
    heapify(i, 0);
  }

  const sortedAll: Record<number, StepStatus> = {};
  arr.forEach((_, idx) => (sortedAll[idx] = 'sorted'));
  steps.push(snap(arr, sortedAll, 'Array fully sorted.', comparisons, swaps));

  return steps;
}

// ── Counting Sort ────────────────────────────────────────────────────────────

export function countingSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  const n = arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const count = new Array(range).fill(0);
  const output = new Array(n).fill(0);

  steps.push(snap(arr, {}, `Start: counting frequency of each value (range ${min}-${max}).`, 0, 0));

  for (let i = 0; i < n; i++) {
    count[arr[i] - min]++;
    steps.push(snap(arr, { [i]: 'comparing' }, `Counting occurrence of ${arr[i]}.`, 0, 0));
  }

  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }
  steps.push(
    snap(arr, {}, 'Computed cumulative counts — tells final position of each value.', 0, 0)
  );

  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
    const placed: Record<number, StepStatus> = {};
    for (let k = 0; k <= i; k++) placed[k] = 'sorted';
    steps.push(
      snap(arr, placed, `Placing ${arr[i]} at index ${i} based on counted position.`, 0, 0)
    );
  }

  return steps;
}

// ── Radix Sort ───────────────────────────────────────────────────────────────

export function radixSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  const max = Math.max(...arr);

  steps.push(
    snap(arr, {}, 'Start: sorting digit by digit, starting from least significant.', 0, 0)
  );

  function countingSortByDigit(exp: number) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      count[digit]++;
    }
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];

    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }

    for (let i = 0; i < n; i++) arr[i] = output[i];

    steps.push(
      snap(
        arr,
        {},
        `Sorted by digit at place value ${exp} (${exp === 1 ? 'ones' : exp === 10 ? 'tens' : `10^${Math.log10(exp)}`}).`,
        0,
        0
      )
    );
  }

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortByDigit(exp);
  }

  const sortedAll: Record<number, StepStatus> = {};
  arr.forEach((_, idx) => (sortedAll[idx] = 'sorted'));
  steps.push(snap(arr, sortedAll, 'Array fully sorted after processing all digit places.', 0, 0));

  return steps;
}

// ── Shell Sort ───────────────────────────────────────────────────────────────

export function shellSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  steps.push(snap(arr, {}, 'Start: will sort using shrinking gap sequence.', 0, 0));

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    steps.push(
      snap(
        arr,
        {},
        `New gap size: ${gap}. Comparing elements that are ${gap} apart.`,
        comparisons,
        swaps
      )
    );

    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;

      while (j >= gap) {
        comparisons++;
        steps.push(
          snap(
            arr,
            { [j - gap]: 'comparing', [j]: 'comparing' },
            `Comparing index ${j - gap} (${arr[j - gap]}) with index ${j} (${temp}).`,
            comparisons,
            swaps
          )
        );

        if (arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          swaps++;
          steps.push(
            snap(
              arr,
              { [j]: 'swapping' },
              `${arr[j]} > ${temp}, shifting it forward by gap ${gap}.`,
              comparisons,
              swaps
            )
          );
          j -= gap;
        } else {
          break;
        }
      }
      arr[j] = temp;
    }
  }

  const sortedAll: Record<number, StepStatus> = {};
  arr.forEach((_, idx) => (sortedAll[idx] = 'sorted'));
  steps.push(
    snap(
      arr,
      sortedAll,
      'Array fully sorted — gap reduced to 1 and final pass complete.',
      comparisons,
      swaps
    )
  );

  return steps;
}

// ── Bucket Sort ──────────────────────────────────────────────────────────────

export function bucketSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  const n = arr.length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const bucketCount = Math.max(1, Math.floor(Math.sqrt(n)));
  const bucketSize = (max - min + 1) / bucketCount;
  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  steps.push(snap(arr, {}, `Start: distributing ${n} elements into ${bucketCount} buckets.`, 0, 0));

  for (let i = 0; i < n; i++) {
    const idx = Math.min(bucketCount - 1, Math.floor((arr[i] - min) / bucketSize));
    buckets[idx].push(arr[i]);
    steps.push(snap(arr, { [i]: 'comparing' }, `Placing ${arr[i]} into bucket ${idx}.`, 0, 0));
  }

  buckets.forEach((bucket) => bucket.sort((a, b) => a - b));
  steps.push(snap(arr, {}, 'Each bucket sorted individually.', 0, 0));

  let k = 0;
  for (const bucket of buckets) {
    for (const val of bucket) {
      arr[k] = val;
      const placed: Record<number, StepStatus> = {};
      for (let i = 0; i <= k; i++) placed[i] = 'sorted';
      steps.push(snap(arr, placed, `Placing ${val} from bucket into final position ${k}.`, 0, 0));
      k++;
    }
  }

  return steps;
}

// ── Tim Sort (simplified: insertion sort on runs + merge) ───────────────────

export function timSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  const n = arr.length;
  const RUN = 8;

  steps.push(
    snap(
      arr,
      {},
      `Start: dividing array into runs of size ${RUN}, sorting each with insertion sort.`,
      0,
      0
    )
  );

  function insertionSortRange(lo: number, hi: number) {
    for (let i = lo + 1; i <= hi; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= lo && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    steps.push(
      snap(
        arr,
        rangeHighlight(lo, hi, 'sorted'),
        `Run [${lo}..${hi}] sorted via insertion sort.`,
        0,
        0
      )
    );
  }

  for (let i = 0; i < n; i += RUN) {
    insertionSortRange(i, Math.min(i + RUN - 1, n - 1));
  }

  function merge(lo: number, mid: number, hi: number) {
    const left = arr.slice(lo, mid + 1);
    const right = arr.slice(mid + 1, hi + 1);
    let i = 0,
      j = 0,
      k = lo;

    steps.push(
      snap(
        arr,
        rangeHighlight(lo, hi, 'active'),
        `Merging runs [${lo}..${mid}] and [${mid + 1}..${hi}].`,
        0,
        0
      )
    );

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) arr[k++] = left[i++];
      else arr[k++] = right[j++];
    }
    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];

    steps.push(
      snap(arr, rangeHighlight(lo, hi, 'sorted'), `Range [${lo}..${hi}] merged and sorted.`, 0, 0)
    );
  }

  let size = RUN;
  while (size < n) {
    for (let lo = 0; lo < n; lo += 2 * size) {
      const mid = Math.min(lo + size - 1, n - 1);
      const hi = Math.min(lo + 2 * size - 1, n - 1);
      if (mid < hi) merge(lo, mid, hi);
    }
    size *= 2;
  }

  return steps;
}

// ── Intro Sort (simplified: quicksort with insertion-sort fallback for small ranges) ─

export function introSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  let comparisons = 0;
  let swaps = 0;
  const SIZE_THRESHOLD = 8;

  steps.push(
    snap(arr, {}, 'Start: using quicksort, falling back to insertion sort on small ranges.', 0, 0)
  );

  function insertionSortRange(lo: number, hi: number) {
    for (let i = lo + 1; i <= hi; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= lo && arr[j] > key) {
        comparisons++;
        arr[j + 1] = arr[j];
        swaps++;
        j--;
      }
      arr[j + 1] = key;
    }
    steps.push(
      snap(
        arr,
        rangeHighlight(lo, hi, 'sorted'),
        `Small range [${lo}..${hi}] (size ≤ ${SIZE_THRESHOLD}) sorted via insertion sort.`,
        comparisons,
        swaps
      )
    );
  }

  function partition(lo: number, hi: number) {
    const pivot = arr[hi];
    steps.push(
      snap(arr, { [hi]: 'pivot' }, `Pivot chosen: index ${hi} (${pivot}).`, comparisons, swaps)
    );
    let i = lo - 1;

    for (let j = lo; j < hi; j++) {
      comparisons++;
      steps.push(
        snap(
          arr,
          { [j]: 'comparing', [hi]: 'pivot' },
          `Comparing ${arr[j]} with pivot ${pivot}.`,
          comparisons,
          swaps
        )
      );
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swaps++;
        steps.push(
          snap(
            arr,
            { [i]: 'swapping', [j]: 'swapping' },
            `${arr[j]} < pivot, swapping into place.`,
            comparisons,
            swaps
          )
        );
      }
    }
    [arr[i + 1], arr[hi]] = [arr[hi], arr[i + 1]];
    swaps++;
    steps.push(
      snap(
        arr,
        { [i + 1]: 'sorted' },
        `Pivot placed at correct position: index ${i + 1}.`,
        comparisons,
        swaps
      )
    );
    return i + 1;
  }

  function sort(lo: number, hi: number) {
    if (lo >= hi) return;

    if (hi - lo + 1 <= SIZE_THRESHOLD) {
      insertionSortRange(lo, hi);
      return;
    }

    const p = partition(lo, hi);
    sort(lo, p - 1);
    sort(p + 1, hi);
  }

  sort(0, arr.length - 1);

  const sortedAll: Record<number, StepStatus> = {};
  arr.forEach((_, idx) => (sortedAll[idx] = 'sorted'));
  steps.push(snap(arr, sortedAll, 'Array fully sorted.', comparisons, swaps));

  return steps;
}

// ── Bitonic Sort (works cleanly on power-of-2 length; pads if needed) ───────

export function bitonicSortSteps(input: number[]): ArrayStep[] {
  let arr = [...input];
  const steps: ArrayStep[] = [];
  const originalLength = arr.length;

  // pad to next power of 2 with +Infinity sentinels (kept out of view via description)
  let n = 1;
  while (n < arr.length) n *= 2;
  const padded = n !== arr.length;
  while (arr.length < n) arr.push(Infinity);

  steps.push(
    snap(
      arr.map((v) => (v === Infinity ? 0 : v)),
      {},
      padded
        ? `Start: padding array to power-of-2 length (${n}) required by bitonic sort.`
        : 'Start: building bitonic sequences and merging.',
      0,
      0
    )
  );

  function compareAndSwap(i: number, j: number, dir: boolean) {
    const shouldSwap = dir ? arr[i] > arr[j] : arr[i] < arr[j];
    steps.push(
      snap(
        arr.map((v) => (v === Infinity ? 0 : v)),
        { [i]: 'comparing', [j]: 'comparing' },
        `Comparing index ${i} and ${j} (direction: ${dir ? 'ascending' : 'descending'}).`,
        0,
        0
      )
    );

    if (shouldSwap) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      steps.push(
        snap(
          arr.map((v) => (v === Infinity ? 0 : v)),
          { [i]: 'swapping', [j]: 'swapping' },
          `Swapped index ${i} and ${j} to maintain bitonic order.`,
          0,
          0
        )
      );
    }
  }

  function merge(lo: number, cnt: number, dir: boolean) {
    if (cnt > 1) {
      const k = Math.floor(cnt / 2);
      for (let i = lo; i < lo + k; i++) {
        compareAndSwap(i, i + k, dir);
      }
      merge(lo, k, dir);
      merge(lo + k, k, dir);
    }
  }

  function bitonicSort(lo: number, cnt: number, dir: boolean) {
    if (cnt > 1) {
      const k = Math.floor(cnt / 2);
      bitonicSort(lo, k, true);
      bitonicSort(lo + k, k, false);
      merge(lo, cnt, dir);
      steps.push(
        snap(
          arr.map((v) => (v === Infinity ? 0 : v)),
          rangeHighlight(lo, lo + cnt - 1, 'active'),
          `Merged bitonic block [${lo}..${lo + cnt - 1}].`,
          0,
          0
        )
      );
    }
  }

  bitonicSort(0, n, true);

  const finalArr = arr.slice(0, originalLength);
  const sortedAll: Record<number, StepStatus> = {};
  finalArr.forEach((_, idx) => (sortedAll[idx] = 'sorted'));
  steps.push(snap(finalArr, sortedAll, 'Array fully sorted (padding removed).', 0, 0));

  return steps;
}

export const generators = {
  'bubble-sort': bubbleSortSteps,
  'selection-sort': selectionSortSteps,
  'insertion-sort': insertionSortSteps,
  'merge-sort': mergeSortSteps,
  'quick-sort': quickSortSteps,
  'heap-sort': heapSortSteps,
  'counting-sort': countingSortSteps,
  'radix-sort': radixSortSteps,
  'shell-sort': shellSortSteps,
  'bucket-sort': bubbleSortSteps,
  'tim-sort': timSortSteps,
  'intro-sort': introSortSteps,
  'bitonic-sort': bitonicSortSteps,
};
