export type Project = {
  id: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    id: '01',
    title: 'Lightweight Cross-Attention Memory Adapter for Mamba (PyTorch)',
    description:
      'Engineered a lightweight cross-attention memory adapter for a Mamba-based LLM, storing high-loss token hidden states in a bounded KV cache to address the long-context recall bottleneck in state-space models. Improved mean accuracy on BABILong, a long-context entity-recall benchmark, from 24.3% to 54.4% while preserving the linear-time inference advantage of state-space models over Transformers.',
    href: '/papers/cos484_final.pdf',
    linkLabel: 'paper',
  },
  {
    id: '02',
    title: 'Multi-Agent Circuit Component Sourcing System (TypeScript, Python)',
    description:
      'Developed a multi-agent LLM system that translates natural language circuit requirements into sourced and priced PCB component lists, reducing an industry-wide hardware selection bottleneck from days to minutes. Won Best Business and Enterprise Hack at HackPrinceton out of 194 projects and 600+ participants.',
    href: 'https://github.com/phuhduong/Jigsaw',
    linkLabel: 'repo',
  },
  {
    id: '03',
    title: 'Predictive Melatonin Dosing System (TypeScript, Python, C++)',
    description:
      'Developed a sleep optimization system to mitigate nocturnal awakenings, applying a logistic model to time-series Google Health biometric data to predict wake risk and deriving a personalized melatonin release curve via SLSQP constrained optimization. Achieved 2nd Best Hardware Hack at HackPrinceton, out of 87 projects and 250+ participants.',
    href: 'https://github.com/phuhduong/sleepsync',
    linkLabel: 'repo',
  },
];
