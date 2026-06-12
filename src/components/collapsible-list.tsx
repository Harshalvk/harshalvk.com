'use client';

import React from 'react';

export function CollapsibleList<T>({
  items,
  max = items.length,
  keyExtractor,
  renderItem,
}: {
  items: T[];
  max?: number;
  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <div>
      {items.slice(0, max).map((item, index) => (
        <div key={keyExtractor ? keyExtractor(item) : index}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
