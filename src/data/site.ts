export const site = {
  name: 'Phu Duong',
  email: 'phu.duong@princeton.edu',
  github: 'https://github.com/phuhduong',
  location: 'NJ',
  description:
    'Undergraduate at Princeton. Distributed systems, ML infrastructure, low-latency software.',
} as const;

export const nav = [
  { label: 'about', href: '/' },
  { label: 'projects', href: '/projects/' },
  { label: 'contact', href: '/contact/' },
] as const;

export const about = [
  'I am an undergraduate at Princeton studying computer science, with a minor in statistics and machine learning. I am broadly interested in distributed systems, scalable training and inference infrastructure, and low-latency software.',
  'This summer, I will be joining Amazon to work on distributed low-latency infrastructure for Alexa firmware.',
  'Previously, I was a Software Engineer Intern at NashTech, where I worked with The Open University. Before that, I explored quantitative trading and engineering at Jane Street.',
  'On campus, I am a teaching assistant for Algorithms and Data Structures and Introduction to Programming Systems.',
  'Outside of school and work, I enjoy basketball and strategy games with friends.',
] as const;
