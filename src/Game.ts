export interface Game {
    id: string;
    title: string;
    excerpt: string;
    keywords: string[];
    comparisons: string[];
    content: string;
    image: string;
    date: string;
    likes: number;
    category: string;
    score: number;
    author: {
      name: string;
      avatar: string;
    };
    readTime: string;
    discussions: string[];
    recommendedRequirements: {
      minimum: {
        os: string;
        cpu: string;
        ram: string;
        gpu: string;
        storage: string;
      };
      recommended: {
        os: string;
        cpu: string;
        ram: string;
        gpu: string;
        storage: string;
      };
    };
  }