import type { SocialLink } from '../types/social-links';
import { XformerlyTwitter, Discord, LinkedIn, dailydev, GitHub } from '@/components/icons';

/** @deprecated */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: XformerlyTwitter,
    title: 'X',
    subtitle: '@iamncdai',
    href: 'https://x.com/harshalvk',
  },
  {
    icon: GitHub,
    title: 'GitHub',
    subtitle: 'ncdai',
    href: 'https://github.com/harshalvk',
  },
  {
    icon: LinkedIn,
    title: 'LinkedIn',
    subtitle: 'ncdai',
    href: 'https://linkedin.com/in/harshalvk',
  },
  {
    icon: dailydev,
    title: 'daily.dev',
    subtitle: '@ncdai',
    href: 'https://app.daily.dev/harshalvk',
  },
  {
    icon: Discord,
    title: 'Discord',
    subtitle: 'ncdai',
    href: 'https://discord.com/users/',
  },
];
