import { Publication, Project, NewsItem } from './types';

export const SITE_CONFIG = {
  name: "Alex Chen",
  role: "PhD Candidate in Computer Science",
  university: "Stanford University",
  email: "alex.chen@example.stanford.edu",
  twitter: "https://twitter.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  scholar: "https://scholar.google.com",
  about: `I am a final-year PhD candidate at the Stanford Artificial Intelligence Laboratory (SAIL), advised by Prof. Jane Doe. 

  My research interests lie at the intersection of Computer Vision and Robot Learning. Specifically, I am interested in how we can leverage large-scale foundation models to enable robots to generalize to unseen environments.
  
  Prior to my PhD, I received my B.S. in EECS from UC Berkeley.`
};

export const NEWS: NewsItem[] = [
  { id: '1', date: 'Sep 2024', content: 'One paper accepted to NeurIPS 2024!' },
  { id: '2', date: 'Jun 2024', content: 'Started internship at Google DeepMind.' },
  { id: '3', date: 'May 2024', content: 'Successfully passed my qualifying exam.' },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: "Learning to Manipulate Deformable Objects with Visual Feedback",
    authors: ["Alex Chen", "Sarah Johnson", "Jane Doe"],
    venue: "NeurIPS 2024",
    year: 2024,
    paperUrl: "#",
    codeUrl: "#",
    abstract: "We propose a novel method for manipulating deformable objects using a visual feedback loop that adapts to changing material properties in real-time."
  },
  {
    id: 'p2',
    title: "Vision-Language Models as Zero-Shot Planners",
    authors: ["Alex Chen", "Michael Brown", "Jane Doe"],
    venue: "CVPR 2023 (Oral)",
    year: 2023,
    paperUrl: "#",
    codeUrl: "#",
    abstract: "This paper explores the capabilities of large vision-language models to act as high-level planners for embodied agents without any fine-tuning."
  },
  {
    id: 'p3',
    title: "Robust Sim-to-Real Transfer via Domain Randomization",
    authors: ["Emily White", "Alex Chen", "David Lee"],
    venue: "ICRA 2023",
    year: 2023,
    paperUrl: "#",
    abstract: "A system for improving sim-to-real transfer in robotic grasping tasks using extensive domain randomization techniques."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'pr1',
    title: "RobotGPT",
    description: "A foundation model for general-purpose robotic control trained on 1M+ trajectories.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["Robotics", "LLMs", "Python"]
  },
  {
    id: 'pr2',
    title: "NeRF-Nav",
    description: "Using Neural Radiance Fields for autonomous navigation in complex indoor environments.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["NeRF", "Navigation", "C++"]
  }
];
