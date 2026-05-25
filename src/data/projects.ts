export type Project = {
  id: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  notes?: string[];
};

export const projects: Project[] = [
  {
    id: '01',
    title: 'Bolt-on Attention Module for Improved Mamba Recall',
    description:
      'Built a lightweight memory module for Mamba that caches key hidden states from long inputs, improving BABILong recall accuracy from 24% to 54% while using far fewer trainable parameters than standard fine-tuning methods.',
    href: '/papers/cos484_final.pdf',
    linkLabel: 'paper',
  },
  {
    id: '02',
    title: 'Natural Language Circuit Component Selector',
    description:
      'Built a multi-agent LLM system that turns hardware requirements into PCB component recommendations, reducing an electrical engineering bottleneck from days to minutes.',
    href: 'https://github.com/phuhduong/Jigsaw',
    linkLabel: 'repo',
  },
  {
    id: '03',
    title: 'Biometric-Controlled Melatonin Patch',
    description:
      'Built a melatonin patch that uses Google Health biometrics to predict overnight wake risk and optimize release rates for improved sleep continuity.',
    href: 'https://github.com/phuhduong/sleepsync',
    linkLabel: 'repo',
  },
];
