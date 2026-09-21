import type { Publication } from './types';

// Source: ../李嘉兴_简历/main_en.tex and main.tex, reviewed 2026-09-21.
// Status is supplied by the author's CV, not inferred from a venue/year.
export const SITE_CONFIG = {
  name: 'Jiaxing Li', chineseName: '李嘉兴', role: 'Ph.D. Student',
  university: 'Southeast University', school: 'School of Computer Science and Engineering',
  email: 'leejiaxing618@gmail.com', github: 'https://github.com/Leejiaxing',
  scholar: 'https://scholar.google.com/citations?user=zonQxC0AAAAJ', updated: 'September 2026',
};
export const PUBLICATIONS: Publication[] = [
  {
    id: 'unified-reweighting',
    title: 'Generalizing on Diverse Shifts: A Unified Topology-Aware Reweighting Algorithm for Graphs',
    authors: ['Jiaxing Li', 'Jiashuo Liu', 'Weihuang Zheng', 'Jiayun Wu', 'Peng Cui', 'Youyong Kong'],
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    venueShort: 'TPAMI', status: 'In press', firstAuthor: true,
  },
  {
    id: 'atc-bench',
    title: 'ATC-Bench: A Simulation-Grounded Benchmark for Evaluating LLM-Generated Air Traffic Control Instructions',
    authors: ['Jinjun Cai', 'Jiaxing Li', 'Xingyue Wang', 'Weihuang Zheng', 'Youyong Kong', 'Hui Ding'],
    venue: 'Conference on Empirical Methods in Natural Language Processing',
    venueShort: 'EMNLP', year: 2026, status: 'Accepted',
  },
  {
    id: 'neighbor-shift', title: 'Let Invariant Learning Inspire Neighbor-Shift Generalization on Graphs',
    authors: ['Jiaxing Li', 'Jiayi Gao', 'Binhao Gu', 'Youyong Kong'],
    venue: 'IEEE Transactions on Artificial Intelligence', venueShort: 'TAI',
    year: 2026, status: 'Published', details: '7(3): 1690–1701', firstAuthor: true,
  },
  {
    id: 'cold-start', title: 'Embedding uncertainty modeling for cold-start item recommendation',
    authors: ['Jiaxing Li', 'Youyong Kong'], venue: 'Neurocomputing', venueShort: 'Neurocomputing',
    year: 2026, status: 'Published', details: '665: 132144', firstAuthor: true,
  },
  {
    id: 'ego-attention', title: 'Ego Attention Network: Local Awareness Boosts Graph Attention for Graph Representation Learning',
    authors: ['Jiaxing Li', 'Hui Ding', 'Ke Zhang', 'Youyong Kong'],
    venue: 'IEEE Transactions on Signal and Information Processing over Networks', venueShort: 'TSIPN',
    year: 2026, status: 'Published', details: '12: 299–310', firstAuthor: true,
  },
  {
    id: 'sarl', title: 'SARL: Structure-Aligned Reinforcement Learning for Bridging the Perception-Action Gap in Airspace',
    authors: ['Binhao Gu', 'Jinjun Cai', 'Weihuang Zheng', 'Jiaxing Li', 'Youyong Kong', 'Hui Ding'],
    venue: 'International Conference on Machine Learning', venueShort: 'ICML',
    year: 2026, status: 'Published',
  },
  {
    id: 'm3d-bfs', title: 'M3D-BFS: a Multi-stage Dynamic Fusion Strategy for Sample-Adaptive Multi-Modal Brain Network Analysis',
    authors: ['Rui Dong', 'Xiaotong Zhang', 'Jiaxing Li', 'Yueying Li', 'Jiayin Wei', 'Youyong Kong'],
    venue: 'Findings of the Computer Vision and Pattern Recognition Conference', venueShort: 'CVPR Findings',
    year: 2026, status: 'Published',
  },
  {
    id: 'bleg', title: 'BLEG: LLM Functions as Powerful fMRI Graph-Enhancer for Brain Network Analysis',
    authors: ['Rui Dong', 'Zitong Wang', 'Jiaxing Li', 'Weihuang Zheng', 'Youyong Kong'],
    venue: 'Findings of the Computer Vision and Pattern Recognition Conference', venueShort: 'CVPR Findings',
    year: 2026, status: 'Published',
  },
  {
    id: 'dynamic-reweighting', title: 'Topology-Aware Dynamic Reweighting for Distribution Shifts on Graph',
    authors: ['Weihuang Zheng', 'Jiashuo Liu', 'Jiaxing Li', 'Jiayun Wu', 'Peng Cui', 'Youyong Kong'],
    venue: 'International Conference on Machine Learning', venueShort: 'ICML',
    year: 2025, status: 'Published', details: 'PMLR 267: 78221–78259',
  },
  {
    id: 'rationale-learning', title: 'Exploring Rationale Learning for Continual Graph Learning',
    authors: ['Lei Song', 'Jiaxing Li', 'Qinghua Si', 'Shihan Guan', 'Youyong Kong'],
    venue: 'AAAI Conference on Artificial Intelligence', venueShort: 'AAAI',
    year: 2025, status: 'Published', details: '39(19): 20540–20548',
  },
  {
    id: 'node-pair', title: 'Suit the Node Pair to the Case: A Multi-Scale Node Pair Grouping Strategy for Graph-MLP Distillation',
    authors: ['Rui Dong', 'Jiaxing Li', 'Weihuang Zheng', 'Youyong Kong'],
    venue: 'International Joint Conference on Artificial Intelligence', venueShort: 'IJCAI',
    year: 2025, status: 'Published', details: '2775–2783',
  },
  {
    id: 'hepa', title: 'HePa: Heterogeneous Graph Prompting for All-Level Classification Tasks',
    authors: ['Jinghong Jia', 'Lei Song', 'Jiaxing Li', 'Youyong Kong'],
    venue: 'AAAI Conference on Artificial Intelligence', venueShort: 'AAAI',
    year: 2025, status: 'Published', details: '39(11): 11915–11923',
  },

];
export const EDUCATION = [
  { degree: 'Ph.D. in Software Engineering', period: '2024 — 2027 (expected)', detail: 'School of Computer Science and Engineering', current: true },
  { degree: 'Master’s in Computer Science and Technology', period: '2020 — 2023', detail: 'School of Computer Science and Engineering' },
  { degree: 'Bachelor’s in Software Engineering', period: '2016 — 2020', detail: 'School of Software Engineering' },
];
