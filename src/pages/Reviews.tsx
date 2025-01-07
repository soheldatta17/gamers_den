import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ReviewScore from '../components/ReviewScore';

const reviews = [
  {
    id: 'fifa-23',
    title: "FIFA 23",
    excerpt: "EA Sports' latest football simulation brings revolutionary HyperMotion2 technology and women's club football.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "3 days ago",
    likes: 3241,
    category: "Sports",
    score: 8.5,
    content: `FIFA 23 marks a significant step forward for EA Sports' football franchise. The implementation of HyperMotion2 technology brings unprecedented realism to player movements and interactions on the pitch. Every tackle, sprint, and shot feels more authentic than ever before.

The inclusion of women's club football is a welcome addition, expanding the game's scope and representation. The gameplay mechanics have been refined, with a particular emphasis on set-pieces and power shots, adding new tactical layers to matches.

Ultimate Team remains the centerpiece of FIFA 23, with meaningful improvements to chemistry systems and squad building. Career Mode has received substantial updates, making it more immersive for long-term players.

However, some legacy issues persist, particularly in terms of AI behavior in certain situations. Despite these minor drawbacks, FIFA 23 delivers an engaging and polished football experience that fans will appreciate.`
  },
  {
    id: 'spiderman-remastered',
    title: "Marvel's Spider-Man Remastered",
    excerpt: "Insomniac's masterpiece swings onto PC with enhanced graphics and all DLC included.",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "1 week ago",
    likes: 4187,
    category: "Action",
    score: 9.5,
    content: `Marvel's Spider-Man Remastered is the definitive version of an already exceptional game. The PC port brings stunning ray-traced reflections, improved shadow quality, and unlocked framerates that make web-swinging through Manhattan more exhilarating than ever.

The core story remains a masterpiece of superhero storytelling, balancing Peter Parker's personal life with his responsibilities as Spider-Man. Character performances are top-notch, delivering emotional weight to every scene.

Combat is a highlight, offering fluid animations and countless creative ways to approach encounters. The progression system keeps things fresh throughout the 20+ hour campaign, while side activities provide meaningful diversions.

The inclusion of all DLC episodes in "The City That Never Sleeps" expansion adds substantial value, making this the most complete Spider-Man package available.`
  },
  {
    id: 'far-cry-5',
    title: "Far Cry 5",
    excerpt: "Ubisoft's open-world FPS takes players to the heart of Montana in a fight against a dangerous cult.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2 weeks ago",
    likes: 3521,
    category: "FPS",
    score: 8.8,
    content: `Far Cry 5 successfully transplants the series' signature chaos into America's heartland. Hope County, Montana, serves as an excellent backdrop for this story of resistance against a fanatical doomsday cult.

The game shines in its moment-to-moment gameplay, offering players unprecedented freedom in approaching objectives. Whether you prefer stealthy takedowns or explosive assaults, the robust arsenal and companion system support various playstyles.

The antagonist, Joseph Seed, and his family of zealots make for compelling villains, though the narrative occasionally struggles with tonal consistency. Side missions provide welcome variety, from hunting dangerous wildlife to participating in demolition derbies.

Co-op play adds another layer of enjoyment, allowing friends to experience the entire campaign together. While some may find the formula familiar, Far Cry 5's refined mechanics and engaging world make it a worthy entry in the series.`
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <PageHeader
        title="Game Reviews"
        subtitle="In-depth analysis of the latest and greatest games"
        image="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <Link to={`/article/${review.id}`} key={review.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
              >
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{review.title}</h3>
                    <ReviewScore score={review.score} />
                  </div>
                  <p className="text-gray-300 mb-4">{review.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{review.date}</span>
                    <span>{review.category}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;