'use client';

import ReactMarkdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export function MarkdownClient({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: 'nofollow noopener',
          },
        ],
      ]}
    >
      {children}
    </ReactMarkdown>
  );
}
