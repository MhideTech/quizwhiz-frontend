import { motion } from 'motion/react';
import { FaRocket, FaGamepad, FaUsers, FaChartLine, FaTrophy } from 'react-icons/fa';

const QuizHero = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full bg-white bg-opacity-10'
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
          />
        ))}
      </div>

      <div className='relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left content */}
          <div className='space-y-8'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight'
            >
              <span className='block'>Make Learning</span>
              <span className='block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400'>
                Fun & Competitive
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-xl text-gray-300 max-w-lg'
            >
              Create, join, and play interactive quizzes in real-time with friends, students, or
              colleagues. Perfect for classrooms, training, or just for fun!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex-wrap gap-4'
            >
              <button className='px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full font-bold text-gray-900 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center'>
                <FaRocket className='mr-2' /> Get Started
              </button>
              <button className='px-8 py-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full font-bold hover:bg-opacity-20 border border-white border-opacity-20 transition-all duration-300 flex items-center'>
                <FaGamepad className='mr-2' /> Create Quiz
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='grid grid-cols-3 gap-4 pt-8'
            >
              {[
                {
                  value: '100K+',
                  label: 'Active Users',
                  icon: <FaUsers className='text-yellow-400' />,
                },
                {
                  value: '500K+',
                  label: 'Quizzes Created',
                  icon: <FaChartLine className='text-pink-400' />,
                },
                {
                  value: '10M+',
                  label: 'Questions Answered',
                  icon: <FaTrophy className='text-purple-400' />,
                },
              ].map((stat, index) => (
                <div key={index} className='bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl'>
                  <div className='flex items-center space-x-2'>
                    <div className='text-2xl'>{stat.icon}</div>
                    <div>
                      <div className='text-2xl font-bold'>{stat.value}</div>
                      <div className='text-sm text-gray-300'>{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - 3D quiz card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='relative hidden lg:block'
          >
            <div className='relative w-full h-96'>
              {/* Main quiz card */}
              <div className='absolute w-64 h-80 bg-white rounded-2xl shadow-2xl transform rotate-3 z-10 top-0 left-1/4 p-6 text-gray-800'>
                <div className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3 text-white text-center'>
                  <h3 className='font-bold'>Geography Quiz</h3>
                  <p className='text-xs opacity-80'>5 questions • 3 min</p>
                </div>

                <div className='mt-4 space-y-4'>
                  <div className='bg-gray-100 rounded-lg p-3'>
                    <p className='text-sm font-medium'>What's the capital of France?</p>
                    <div className='mt-2 space-y-2'>
                      {['Berlin', 'Madrid', 'Paris', 'Rome'].map((option, i) => (
                        <div
                          key={i}
                          className={`px-3 py-1 text-sm rounded ${
                            i === 2 ? 'bg-blue-100 border border-blue-300' : 'bg-gray-200'
                          }`}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='flex justify-between items-center mt-6'>
                    <span className='text-xs text-gray-500'>Question 1/5</span>
                    <button className='bg-blue-500 text-white px-4 py-1 rounded-full text-sm'>
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* Card behind */}
              <div className='absolute w-64 h-80 bg-indigo-100 rounded-2xl shadow-lg transform -rotate-6 z-0 top-4 left-1/5'></div>

              {/* Floating elements */}
              <div className='absolute -bottom-10 right-0 bg-yellow-400 w-24 h-24 rounded-full blur-xl opacity-30'></div>
              <div className='absolute -top-10 left-0 bg-pink-400 w-32 h-32 rounded-full blur-xl opacity-20'></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating animated confetti */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {['🎯', '🧠', '🏆', '⭐', '📚', '🎲'].map((emoji, i) => (
          <motion.div
            key={i}
            className='absolute text-2xl'
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 500,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 360,
              transition: {
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
            style={{
              opacity: 0.7,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuizHero;
