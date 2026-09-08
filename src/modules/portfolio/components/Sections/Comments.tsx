'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export function Comments() {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) return null;

  return (
    <Giscus
      id="comments"
      repo="harshalvk/harshalvk.com"
      repoId="R_kgDOOUjlhw"
      category="Comments"
      categoryId="DIC_kwDOOUjlh84DFG3Q"
      mapping="pathname"
      strict="0"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  );
}
