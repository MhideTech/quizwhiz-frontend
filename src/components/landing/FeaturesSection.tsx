import { motion } from 'framer-motion';
import {
  FaRocket,
  FaBrain,
  FaUsers,
  FaTrophy,
  FaClock,
  FaChartBar,
  FaGamepad,
} from 'react-icons/fa';
// import { FaBrain, FaUsers, FaTrophy, FaClock, FaChartBar, FaGamepad } from 'react-icons/fa';
import { GiPodiumWinner } from 'react-icons/gi';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaBrain className='h-8 w-8' />,
      title: 'Create Quizzes',
      description:
        'Build custom quizzes with multiple question types, images, and videos. Set time limits and scoring rules.',
      color: 'from-purple-500 to-indigo-600',
      delay: 0.1,
    },
    {
      icon: <FaUsers className='h-8 w-8' />,
      title: 'Join Live Games',
      description:
        'Jump into live quiz sessions with a simple code. Compete with friends and see real-time leaderboards.',
      color: 'from-blue-500 to-teal-500',
      delay: 0.2,
    },
    {
      icon: <FaTrophy className='h-8 w-8' />,
      title: 'Track Scores',
      description:
        'Review detailed analytics and performance metrics. Monitor progress over time with beautiful charts.',
      color: 'from-amber-500 to-pink-600',
      delay: 0.3,
    },
    {
      icon: <FaClock className='h-8 w-8' />,
      title: 'Time Challenges',
      description: 'Test knowledge against the clock with our adrenaline-pumping timed quiz modes.',
      color: 'from-emerald-500 to-cyan-600',
      delay: 0.4,
    },
    {
      icon: <FaChartBar className='h-8 w-8' />,
      title: 'Detailed Analytics',
      description:
        'Get insights into your strengths and weaknesses with our comprehensive analytics dashboard.',
      color: 'from-red-500 to-orange-500',
      delay: 0.5,
    },
    {
      icon: <GiPodiumWinner className='h-8 w-8' />,
      title: 'Tournaments',
      description:
        'Compete in weekly tournaments and climb the global leaderboard to prove your knowledge mastery.',
      color: 'from-yellow-500 to-amber-500',
      delay: 0.6,
    },
  ];

  return (
    <section className='relative py-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden'>
      {/* Floating quiz elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-lg bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-10'
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 1200,
              rotate: Math.random() * 360,
              scale: 0.8 + Math.random() * 0.4,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              rotate: [0, Math.random() * 20 - 10, 0],
              transition: {
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
            }}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 60 + 30}px`,
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className='max-w-4xl mx-auto text-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600'>
            Elevate Your Quiz Experience
          </h2>
          <p className='text-xl text-gray-600 md:px-16'>
            QuizWhizz isn't just another quiz platform - it's an immersive learning adventure packed
            with
            <span className='font-semibold text-purple-600'> game-changing features</span> that make
            knowledge addictive.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -10 }}
              className='relative group'
            >
              <div className='absolute inset-0 bg-gradient-to-br rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0' />
              <div className='relative bg-white rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 h-full flex flex-col z-10 border border-gray-100'>
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} mx-auto mb-6 text-white text-2xl`}
                >
                  {feature.icon}
                </div>
                <h3 className='text-2xl font-bold mb-4 text-gray-800'>{feature.title}</h3>
                <p className='text-gray-600 mb-6 flex-grow'>{feature.description}</p>
                <div className='mt-auto'>
                  <button className='px-6 py-2 bg-gray-100 rounded-full font-medium text-gray-700 group-hover:bg-gradient-to-r group-hover:text-white group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300 flex items-center mx-auto'>
                    <FaGamepad className='mr-2' /> Try it
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className='mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-10 text-center shadow-xl relative overflow-hidden'
        >
          <div className='absolute -top-20 -right-20 w-64 h-64 bg-white bg-opacity-10 rounded-full blur-xl'></div>
          <div className='absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500 bg-opacity-10 rounded-full blur-xl'></div>

          <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
            Ready to Transform Learning?
          </h3>
          <p className='text-lg text-purple-100 mb-8 max-w-2xl mx-auto'>
            Join thousands of educators and learners who are making knowledge exciting with
            QuizWhizz.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <button className='px-8 py-3 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center'>
              <FaGamepad className='mr-2' /> Start Free Trial
            </button>
            <button className='px-8 py-3 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full font-bold hover:bg-opacity-30 border border-white border-opacity-30 transition-all duration-300 flex items-center justify-center'>
              <FaUsers className='mr-2' /> See Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
