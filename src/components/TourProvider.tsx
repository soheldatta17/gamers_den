import React, { useState, useEffect } from 'react';
import Joyride, { CallBackProps, STATUS } from 'react-joyride';
import { useLocation } from 'react-router-dom';

const steps = [
  {
    target: '.logo',
    content: 'Welcome to GamersDen! Your ultimate destination for gaming news and reviews.',
    disableBeacon: true,
  },
  {
    target: '.news-link',
    content: 'Stay updated with the latest gaming news and announcements.',
  },
  {
    target: '.reviews-link',
    content: 'Check out our in-depth game reviews and ratings.',
  },
  {
    target: '.profile-link',
    content: 'View your profile, track your activity, and manage your preferences.',
  },
  {
    target: '.upcoming-games',
    content: 'Discover upcoming game releases and watch their trailers.',
  },
  {
    target: '.featured-articles',
    content: 'Read our featured articles and trending stories.',
  },
];

const TourProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [run, setRun] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');
    if (!hasSeenTour && location.pathname === '/') {
      setRun(true);
    }
  }, [location]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false);
      localStorage.setItem('hasSeenTour', 'true');
    }
  };

  return (
    <>
      <Joyride
        steps={steps}
        run={run}
        continuous
        showProgress
        showSkipButton
        callback={handleJoyrideCallback}
        styles={{
          options: {
            primaryColor: '#06b6d4', // Tailwind cyan-500
            textColor: '#fff',
            backgroundColor: '#1f2937', // Tailwind gray-800
            arrowColor: '#1f2937',
            overlayColor: 'rgba(0, 0, 0, 0.85)',
          },
          tooltip: {
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          },
          buttonNext: {
            backgroundColor: '#06b6d4',
            borderRadius: '9999px',
            padding: '0.5rem 1rem',
          },
          buttonBack: {
            color: '#06b6d4',
            marginRight: '0.5rem',
          },
          buttonSkip: {
            color: '#9ca3af', // Tailwind gray-400
          },
        }}
      />
      {children}
    </>
  );
}
export default TourProvider;