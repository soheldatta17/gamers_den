import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface ReviewScoreProps {
  score: number;
  maxScore?: number;
}

const ReviewScore: React.FC<ReviewScoreProps> = ({ score, maxScore = 10 }) => {
  const percentage = (score / maxScore) * 100;
  const color = percentage >= 80 ? 'text-green-500' : 
                percentage >= 60 ? 'text-yellow-500' : 
                'text-red-500';

  return (
    <div className="flex items-center space-x-2">
      <div className={`text-2xl font-bold ${color}`}>
        {score.toFixed(1)}
      </div>
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          const starValue = (i + 1) * 2;
          if (score >= starValue) {
            return <Star key={i} className={`w-5 h-5 ${color}`} fill="currentColor" />;
          } else if (score >= starValue - 1) {
            return <StarHalf key={i} className={`w-5 h-5 ${color}`} fill="currentColor" />;
          }
          return <Star key={i} className="w-5 h-5 text-gray-600" />;
        })}
      </div>
    </div>
  );
};

export default ReviewScore;