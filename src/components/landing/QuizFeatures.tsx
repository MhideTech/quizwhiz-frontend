import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaEdit, FaGamepad, FaChartLine, FaUsers, FaRocket } from 'react-icons/fa';

const QuizFeatures = () => {
  const features = [
    {
      icon: <FaEdit className='text-3xl' />,
      title: 'Create Quizzes',
      desc: 'Build custom quizzes with multiple question types, images, and videos. Set time limits and scoring rules.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <FaGamepad className='text-3xl' />,
      title: 'Join Live Games',
      desc: 'Jump into live quiz sessions with a simple code. Compete with friends and see real-time leaderboards.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: <FaChartLine className='text-3xl' />,
      title: 'Track Scores',
      desc: 'Review detailed analytics and performance metrics. Monitor progress over time with beautiful charts.',
      color: 'from-amber-400 to-orange-500',
    },
  ];

  return (
    <section className='relative py-24 bg-white'>
      {/* ✨ Subtle floating dots (for depth) */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full bg-gray-100'
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 1200,
              opacity: 0.3,
            }}
            animate={{
              x: Math.random() * 1200,
              y: Math.random() * 1200,
              transition: {
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* 🎯 Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Everything You Need for <br />
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
              Interactive Learning
            </span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            QuizWhizz provides all the tools needed to create engaging quizzes and facilitate
            interactive learning experiences.
          </p>
        </motion.div>

        {/* 🏆 3D Cards with Subtle Lift Effect */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className='relative group'
            >
              <div className='absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -m-1 z-0' />
              <div className='relative bg-white rounded-xl p-8 h-full border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 z-10'>
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} mx-auto mb-6 text-white`}
                >
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{feature.title}</h3>
                <p className='text-gray-600 mb-6'>{feature.desc}</p>
                <button className='px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all flex items-center'>
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default QuizFeatures;
