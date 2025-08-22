import QuizHero from '@/components/landing/QuizHero';
// import QuizHeroV2 from './QuizHeroV2;
// import FeaturesSection from '../pages/FeaturesSection';
import QuizFeatures from '@/components/landing/QuizFeatures';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import CleanCTA from '@/components/landing/CleanCTA';

const Landing = () => {
  return (
    <>
      <QuizHero />
      <QuizFeatures />
      <HowItWorks />
      <Testimonials />
      <CleanCTA />
    </>
  );
};

export default Landing;
