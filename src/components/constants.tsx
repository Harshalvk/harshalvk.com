import {
  Ollama,
  HuggingFace,
  Auth0,
  BetterAuth,
  GitHub,
  JWT,
  Ethereum,
  MetaMask,
  Solana,
  MySQL,
  PostgreSQL,
  Redis,
  MongoDB,
  Supabase,
  DrizzleORM,
  Prisma,
  Expressjs,
  Nextjs,
  ReactQuery,
  T3Stack,
  TailwindCSS,
  tRPC as TRPC,
  AmazonWebServices,
  Socketio,
  JavaScript,
  Rust,
  Solidity,
  Bash,
  CSS,
  HTML5,
  ReactLogo,
  shadcnui as Shadcnui,
  Turborepo,
  Zod,
  TanStack,
  SWR,
  ReactRouter,
  CloudflareWorkers,
  Docker,
  Linux,
  Hono,
  Kubernetes,
  TypeScript,
} from '@/components/logos';

export const projects = [
  {
    title: 'CodePost',
    description:
      'A minimal, distraction-free platform for sharing ideas, stories, and thoughts built for clarity, speed, and effortless publishing.',
    imageSrc: '/codepost.png',
    techBadge: [
      {
        name: 'NextJS',
        item: <Nextjs className="h-5 w-5" />,
      },
      {
        name: 'Prisma',
        item: <Prisma className="h-5 w-5" />,
      },
      {
        name: 'ShadcnUI',
        item: <Shadcnui className="h-5 w-5" />,
      },
      {
        name: 'React',
        item: <ReactLogo className="h-5 w-5" />,
      },
      {
        name: 'PostgreSQL',
        item: <PostgreSQL className="h-5 w-5" />,
      },
    ],
    link: 'https://codepost.vercel.app/',
    code: 'https://github.com/Harshalvk/CodePost',
  },
  {
    title: 'Remindo',
    description:
      'It appears to be a minimalistic application designed to help users manage tasks and reminders efficiently.',
    imageSrc: '/remindo.png',
    techBadge: [
      {
        name: 'NextJS',
        item: <Nextjs className="h-5 w-5" />,
      },
      {
        name: 'Prisma',
        item: <Prisma className="h-5 w-5" />,
      },
      {
        name: 'ShadcnUI',
        item: <Shadcnui className="h-5 w-5" />,
      },
      {
        name: 'React',
        item: <ReactLogo className="h-5 w-5" />,
      },
      {
        name: 'PostgreSQL',
        item: <PostgreSQL className="h-5 w-5" />,
      },
      {
        name: 'TypeScript',
        item: <TypeScript className="h-5 w-5" />,
      },
    ],
    link: 'https://remindo-three.vercel.app/',
    code: 'https://github.com/Harshalvk/Remindo',
  },
];

export type myTechLogosType = {
  name: string;
  item: React.ReactNode;
};

export const testAni: myTechLogosType[] = [
  {
    name: 'Ollama',
    item: <Ollama className="h-5 w-5" />,
  },
  {
    name: 'GitHub',
    item: <GitHub className="h-5 w-5" />,
  },
  {
    name: 'Hugging Face',
    item: <HuggingFace className="h-5 w-5" />,
  },
  {
    name: 'Auth0',
    item: <Auth0 className="h-5 w-5" />,
  },
  {
    name: 'BetterAuth',
    item: <BetterAuth className="h-5 w-5 rounded" />,
  },
  {
    name: 'JWT',
    item: <JWT className="h-5 w-5" />,
  },
  {
    name: 'Ethereum',
    item: <Ethereum className="h-5 w-5" />,
  },
  {
    name: 'MetaMask',
    item: <MetaMask className="h-5 w-5" />,
  },
];

export const myTechLogos: myTechLogosType[] = [
  {
    name: 'Ollama',
    item: <Ollama className="h-5 w-5" />,
  },
  {
    name: 'GitHub',
    item: <GitHub className="h-5 w-5" />,
  },
  {
    name: 'Hugging Face',
    item: <HuggingFace className="h-5 w-5" />,
  },
  {
    name: 'Auth0',
    item: <Auth0 className="h-5 w-5" />,
  },
  {
    name: 'BetterAuth',
    item: <BetterAuth className="h-5 w-5 rounded" />,
  },
  {
    name: 'JWT',
    item: <JWT className="h-5 w-5" />,
  },
  {
    name: 'Ethereum',
    item: <Ethereum className="h-5 w-5" />,
  },
  {
    name: 'MetaMask',
    item: <MetaMask className="h-5 w-5" />,
  },
  {
    name: 'Solana',
    item: <Solana className="h-5 w-5" />,
  },
  {
    name: 'MySQL',
    item: <MySQL className="h-5 w-5" />,
  },
  {
    name: 'PostgreSQL',
    item: <PostgreSQL className="h-5 w-5" />,
  },
  {
    name: 'Redis',
    item: <Redis className="h-5 w-5" />,
  },
  {
    name: 'MongoDB',
    item: <MongoDB className="h-5 w-5" />,
  },
  {
    name: 'Supabase',
    item: <Supabase className="h-5 w-5" />,
  },
  {
    name: 'DrizzleORM',
    item: <DrizzleORM className="h-5 w-5" />,
  },
  {
    name: 'Prisma',
    item: <Prisma className="h-5 w-5" />,
  },
  {
    name: 'ExpressJS',
    item: <Expressjs className="h-5 w-5" />,
  },
  {
    name: 'NextJS',
    item: <Nextjs className="h-5 w-5" />,
  },
  {
    name: 'ReactQuery',
    item: <ReactQuery className="h-5 w-5" />,
  },
  {
    name: 'TanStack',
    item: <TanStack className="h-5 w-5" />,
  },
  {
    name: 'T3Stack',
    item: <T3Stack className="h-5 w-5" />,
  },
  {
    name: 'TailwindCSS',
    item: <TailwindCSS className="h-5 w-5" />,
  },
  {
    name: 'tRPC',
    item: <TRPC className="h-5 w-5" />,
  },
  {
    name: 'AWS',
    item: <AmazonWebServices className="h-5 w-5" />,
  },
  {
    name: 'Socketio',
    item: <Socketio className="h-5 w-5" />,
  },
  {
    name: 'JavaScript',
    item: <JavaScript className="h-5 w-5 rounded" />,
  },
  {
    name: 'TypeScript',
    item: <TypeScript className="h-5 w-5 rounded" />,
  },
  {
    name: 'Rust',
    item: <Rust className="h-5 w-5" />,
  },
  {
    name: 'Solidity',
    item: <Solidity className="h-5 w-5" />,
  },
  {
    name: 'HTML5',
    item: <HTML5 className="h-5 w-5" />,
  },
  {
    name: 'CSS',
    item: <CSS className="h-5 w-5" />,
  },
  {
    name: 'React',
    item: <ReactLogo className="h-5 w-5" />,
  },
  {
    name: 'ShadcnUI',
    item: <Shadcnui className="h-5 w-5" />,
  },
  {
    name: 'Turborepo',
    item: <Turborepo className="h-5 w-5" />,
  },
  {
    name: 'Zod',
    item: <Zod className="h-5 w-5" />,
  },
  {
    name: 'SWR',
    item: <SWR className="h-5 w-5" />,
  },
  {
    name: 'ReactRouter',
    item: <ReactRouter className="h-5 w-5" />,
  },
  {
    name: 'Cloudflare Workers',
    item: <CloudflareWorkers className="h-5 w-5" />,
  },
  {
    name: 'Hono',
    item: <Hono className="h-5 w-5" />,
  },
  {
    name: 'Kubernetes',
    item: <Kubernetes className="h-5 w-5" />,
  },
  {
    name: 'Docker',
    item: <Docker className="h-5 w-5" />,
  },
  {
    name: 'Linux',
    item: <Linux className="h-5 w-5" />,
  },
  {
    name: 'Bash',
    item: <Bash className="h-5 w-5" />,
  },
];

export const frameworksAndLibraries: myTechLogosType[] = [
  { name: 'NextJS', item: <Nextjs className="h-5 w-5" /> },
  { name: 'React', item: <ReactLogo className="h-5 w-5" /> },
  { name: 'ReactQuery', item: <ReactQuery className="h-5 w-5" /> },
  { name: 'TanStack', item: <TanStack className="h-5 w-5" /> },
  { name: 'T3Stack', item: <T3Stack className="h-5 w-5" /> },
  { name: 'TailwindCSS', item: <TailwindCSS className="h-5 w-5" /> },
  { name: 'ShadcnUI', item: <Shadcnui className="h-5 w-5" /> },
  { name: 'tRPC', item: <TRPC className="h-5 w-5" /> },
  { name: 'SWR', item: <SWR className="h-5 w-5" /> },
  { name: 'ReactRouter', item: <ReactRouter className="h-5 w-5" /> },
  { name: 'Hono', item: <Hono className="h-5 w-5" /> },
];

export const backendAndDatabases: myTechLogosType[] = [
  { name: 'ExpressJS', item: <Expressjs className="h-5 w-5" /> },
  { name: 'Prisma', item: <Prisma className="h-5 w-5" /> },
  { name: 'DrizzleORM', item: <DrizzleORM className="h-5 w-5" /> },
  { name: 'MySQL', item: <MySQL className="h-5 w-5" /> },
  { name: 'PostgreSQL', item: <PostgreSQL className="h-5 w-5" /> },
  { name: 'Redis', item: <Redis className="h-5 w-5" /> },
  { name: 'MongoDB', item: <MongoDB className="h-5 w-5" /> },
  { name: 'Supabase', item: <Supabase className="h-5 w-5" /> },
  { name: 'Auth0', item: <Auth0 className="h-5 w-5" /> },
  { name: 'BetterAuth', item: <BetterAuth className="h-5 w-5 rounded" /> },
  { name: 'Socketio', item: <Socketio className="h-5 w-5" /> },
];

export const devopsAndCloud: myTechLogosType[] = [
  { name: 'AWS', item: <AmazonWebServices className="h-5 w-5" /> },
  {
    name: 'Cloudflare Workers',
    item: <CloudflareWorkers className="h-5 w-5" />,
  },
  { name: 'Docker', item: <Docker className="h-5 w-5" /> },
  { name: 'Kubernetes', item: <Kubernetes className="h-5 w-5" /> },
  { name: 'Linux', item: <Linux className="h-5 w-5" /> },
  { name: 'Bash', item: <Bash className="h-5 w-5" /> },
  { name: 'Turborepo', item: <Turborepo className="h-5 w-5" /> },
];

export const programmingLanguagesAndOthers: myTechLogosType[] = [
  { name: 'JavaScript', item: <JavaScript className="h-5 w-5 rounded" /> },
  { name: 'TypeScript', item: <TypeScript className="h-5 w-5 rounded" /> },
  { name: 'Rust', item: <Rust className="h-5 w-5" /> },
  { name: 'Solidity', item: <Solidity className="h-5 w-5" /> },
  { name: 'Ethereum', item: <Ethereum className="h-5 w-5" /> },
  { name: 'MetaMask', item: <MetaMask className="h-5 w-5" /> },
  { name: 'Solana', item: <Solana className="h-5 w-5" /> },
  { name: 'JWT', item: <JWT className="h-5 w-5" /> },
  { name: 'HTML5', item: <HTML5 className="h-5 w-5" /> },
  { name: 'CSS', item: <CSS className="h-5 w-5" /> },
  { name: 'Ollama', item: <Ollama className="h-5 w-5" /> },
  { name: 'Hugging Face', item: <HuggingFace className="h-5 w-5" /> },
  { name: 'GitHub', item: <GitHub className="h-5 w-5" /> },
  { name: 'Zod', item: <Zod className="h-5 w-5" /> },
];
