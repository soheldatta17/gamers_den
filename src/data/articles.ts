export const articles = [
  {
    id: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    excerpt: "Larian Studios' epic RPG brings D&D to life with unprecedented freedom and stunning presentation.",
    keywords: ["RPG", "Fantasy", "Turn-based", "D&D", "Choice-driven", "Multiplayer"],
    comparisons: ["Divinity: Original Sin 2", "Pillars of Eternity", "Solasta"],
    content: `[Previous content remains the same]`,
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "August 2023",
    likes: 15287,
    category: "RPG",
    score: 9.5,
    author: {
      name: "Chris Roberts",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    readTime: "12 min read",
    discussions: [
      {
        id: 1,
        user: "RPGMaster",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        comment: "The attention to D&D rules is incredible!",
        likes: 234,
        replies: 45,
        date: "1 day ago"
      }
    ]
  },
  {
    id: 'starfield',
    title: "Starfield",
    excerpt: "Bethesda's ambitious space RPG offers unprecedented exploration across 1000 planets.",
    keywords: ["RPG", "Space", "Exploration", "Sci-fi", "Open World", "Bethesda"],
    comparisons: ["No Man's Sky", "Mass Effect", "The Outer Worlds"],
    content: `[Previous content remains the same]`,
    image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "September 2023",
    likes: 12456,
    category: "RPG",
    score: 8.8,
    author: {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    readTime: "15 min read",
    discussions: [
      {
        id: 1,
        user: "SpaceExplorer",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        comment: "The ship building system is incredibly detailed!",
        likes: 156,
        replies: 28,
        date: "3 days ago"
      }
    ]
  },
  {
    id: 'spiderman-remastered',
    title: "Marvel's Spider-Man Remastered",
    excerpt: "Insomniac's masterpiece swings onto PC with enhanced graphics and all DLC included.",
    content: `Marvel's Spider-Man Remastered is the definitive version of an already exceptional game. The PC port brings stunning ray-traced reflections, improved shadow quality, and unlocked framerates that make web-swinging through Manhattan more exhilarating than ever.

The core story remains a masterpiece of superhero storytelling, balancing Peter Parker's personal life with his responsibilities as Spider-Man. Character performances are top-notch, delivering emotional weight to every scene.

Combat is a highlight, offering fluid animations and countless creative ways to approach encounters. The progression system keeps things fresh throughout the 20+ hour campaign, while side activities provide meaningful diversions.

The inclusion of all DLC episodes in "The City That Never Sleeps" expansion adds substantial value, making this the most complete Spider-Man package available.

System Requirements:

Minimum:
- OS: Windows 10 64-bit
- CPU: Intel Core i3-4160 or AMD equivalent
- RAM: 16 GB
- GPU: NVIDIA GTX 950 or AMD Radeon RX 470
- Storage: 75 GB

Recommended:
- OS: Windows 10 64-bit
- CPU: Intel Core i5-4670 or AMD Ryzen 5 1600
- RAM: 16 GB
- GPU: NVIDIA GTX 1060 6GB or AMD Radeon RX 580
- Storage: 75 GB SSD

Ray Tracing:
- CPU: Intel Core i5-8600 or AMD Ryzen 5 3600
- GPU: NVIDIA RTX 3070 or AMD Radeon RX 6800 XT
- RAM: 16 GB
- Storage: 75 GB NVMe SSD`,
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUaXbOtn9e_MpJEQpce_B4wVIudectv-eCSjxIG-BCGBXxku56",
    date: "1 week ago",
    likes: 4187,
    category: "Action",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    readTime: "10 min read"
  },

];

export const allgames = [
  {
    id: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    excerpt: "Larian Studios' epic RPG brings D&D to life with unprecedented freedom and stunning presentation.",
    keywords: ["RPG", "Fantasy", "Turn-based", "D&D", "Choice-driven", "Multiplayer"],
    comparisons: ["Divinity: Original Sin 2", "Pillars of Eternity", "Solasta"],
    content: `[Previous content remains the same]`,
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "August 2023",
    likes: 15287,
    category: "RPG",
    score: 9.5,
    author: {
      name: "Chris Roberts",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    readTime: "12 min read",
    discussions: [
      {
        id: 1,
        user: "RPGMaster",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        comment: "The attention to D&D rules is incredible!",
        likes: 234,
        replies: 45,
        date: "1 day ago"
      }
    ],
    recommendedRequirements: {
      minimum: {
        os: "Windows 7 SP1, Windows 8.1, Windows 10 (64-bit versions only)",
        cpu: "Intel Core i5-2400 or AMD FX-6300",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 670 or AMD R9 270",
        storage: "40 GB"
      },
      recommended: {
        os: "Windows 10 (64-bit version only)",
        cpu: "Intel Core i7-4770 or AMD Ryzen 5 1600",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 970 or AMD R9 290X",
        storage: "40 GB SSD"
      }
    }
  },
  {
    id: 'starfield',
    title: "Starfield",
    excerpt: "Bethesda's ambitious space RPG offers unprecedented exploration across 1000 planets.",
    keywords: ["RPG", "Space", "Exploration", "Sci-fi", "Open World", "Bethesda"],
    comparisons: ["No Man's Sky", "Mass Effect", "The Outer Worlds"],
    content: `[Previous content remains the same]`,
    image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "September 2023",
    likes: 12456,
    category: "RPG",
    score: 8.8,
    author: {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    readTime: "15 min read",
    discussions: [
      {
        id: 1,
        user: "SpaceExplorer",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        comment: "The ship building system is incredibly detailed!",
        likes: 156,
        replies: 28,
        date: "3 days ago"
      }
    ],
    recommendedRequirements: {
      minimum: {
        os: "Windows 7 SP1, Windows 8.1, Windows 10 (64-bit versions only)",
        cpu: "Intel Core i5-2400 or AMD FX-6300",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 670 or AMD R9 270",
        storage: "40 GB"
      },
      recommended: {
        os: "Windows 10 (64-bit version only)",
        cpu: "Intel Core i7-4770 or AMD Ryzen 5 1600",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 970 or AMD R9 290X",
        storage: "40 GB SSD"
      }
    }
  },
  {
    id: 'fifa-23',
    title: "FIFA 23",
    excerpt: "EA Sports' latest football simulation brings revolutionary HyperMotion2 technology and women's club football.",
    keywords: ["Sports", "Football", "Simulation", "Multiplayer", "Realism"],
    comparisons: ["PES 2023", "Football Manager 2023", "Rocket League"],
    content: `FIFA 23 marks a significant step forward for EA Sports' football franchise...`,
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "3 days ago",
    likes: 3241,
    category: "Sports",
    score: 9.0,
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    readTime: "8 min read",
    discussions: [],
    recommendedRequirements: {
      minimum: {
        os: "Windows 7 SP1, Windows 8.1, Windows 10 (64-bit versions only)",
        cpu: "Intel Core i5-2400 or AMD FX-6300",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 670 or AMD R9 270",
        storage: "40 GB"
      },
      recommended: {
        os: "Windows 10 (64-bit version only)",
        cpu: "Intel Core i7-4770 or AMD Ryzen 5 1600",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 970 or AMD R9 290X",
        storage: "40 GB SSD"
      }
    }
  },
  {
    id: 'spiderman-remastered',
    title: "Marvel's Spider-Man Remastered",
    excerpt: "Insomniac's masterpiece swings onto PC with enhanced graphics and all DLC included.",
    keywords: ["Action", "Superhero", "Open World", "Combat", "Story-driven"],
    comparisons: ["Batman: Arkham Knight", "The Amazing Spider-Man", "Horizon Zero Dawn"],
    content: `Marvel's Spider-Man Remastered is the definitive version...`,
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUaXbOtn9e_MpJEQpce_B4wVIudectv-eCSjxIG-BCGBXxku56",
    date: "1 week ago",
    likes: 4187,
    category: "Action",
    score: 9.3,
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    readTime: "10 min read",
    discussions: [],
    recommendedRequirements: {
      minimum: {
        os: "Windows 7 SP1, Windows 8.1, Windows 10 (64-bit versions only)",
        cpu: "Intel Core i5-2400 or AMD FX-6300",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 670 or AMD R9 270",
        storage: "40 GB"
      },
      recommended: {
        os: "Windows 10 (64-bit version only)",
        cpu: "Intel Core i7-4770 or AMD Ryzen 5 1600",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 970 or AMD R9 290X",
        storage: "40 GB SSD"
      }
    }
  },
  {
    id: 'far-cry-5',
    title: "Far Cry 5",
    excerpt: "Ubisoft's open-world FPS takes players to the heart of Montana in a fight against a dangerous cult.",
    keywords: ["FPS", "Open World", "Action", "Story-driven", "Co-op"],
    comparisons: ["Far Cry 4", "Just Cause 3", "Red Dead Redemption 2"],
    content: `Far Cry 5 successfully transplants the series' signature chaos...`,
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2 weeks ago",
    likes: 3521,
    category: "FPS",
    score: 8.5,
    author: {
      name: "Mike Thompson",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    readTime: "7 min read",
    discussions: [],
    recommendedRequirements: {
      minimum: {
        os: "Windows 7 SP1, Windows 8.1, Windows 10 (64-bit versions only)",
        cpu: "Intel Core i5-2400 or AMD FX-6300",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 670 or AMD R9 270",
        storage: "40 GB"
      },
      recommended: {
        os: "Windows 10 (64-bit version only)",
        cpu: "Intel Core i7-4770 or AMD Ryzen 5 1600",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 970 or AMD R9 290X",
        storage: "40 GB SSD"
      }
    }
  }
];
