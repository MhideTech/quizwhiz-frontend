import { motion } from 'framer-motion';
import { FaBrain, FaLightbulb, FaMedal, FaChartBar, FaPlayCircle } from 'react-icons/fa';

const QuizHeroV2 = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white'>
      {/* Floating abstract shapes */}
      <div className='absolute inset-0 overflow-hidden opacity-20'>
        <div className='absolute -left-20 -top-20 w-96 h-96 rounded-full bg-teal-400 mix-blend-screen filter blur-3xl'></div>
        <div className='absolute -right-20 bottom-0 w-80 h-80 rounded-full bg-emerald-400 mix-blend-screen filter blur-3xl'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left content */}
          <div className='space-y-8 z-10'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight'
            >
              <span className='block'>Test Your Knowledge</span>
              <span className='block bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-400'>
                Challenge Your Friends
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-xl text-emerald-100 max-w-lg'
            >
              Join millions of users in thrilling quiz battles. Create custom quizzes or play
              existing ones - learning was never this exciting!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex-wrap gap-4'
            >
              <button className='px-8 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full font-bold text-gray-900 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center'>
                <FaPlayCircle className='mr-2' /> Play Now
              </button>
              <button className='px-8 py-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full font-bold hover:bg-opacity-20 border border-white border-opacity-20 transition-all duration-300 flex items-center'>
                <FaLightbulb className='mr-2' /> Create Quiz
              </button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='grid grid-cols-2 gap-4 pt-8'
            >
              {[
                {
                  icon: <FaBrain className='text-2xl text-emerald-300' />,
                  text: 'Boost Memory',
                },
                {
                  icon: <FaMedal className='text-2xl text-teal-300' />,
                  text: 'Win Badges',
                },
                {
                  icon: <FaChartBar className='text-2xl text-green-300' />,
                  text: 'Track Progress',
                },
                {
                  icon: <FaLightbulb className='text-2xl text-white' />,
                  text: 'Learn Daily',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center space-x-3 bg-white bg-opacity-5 backdrop-blur-sm p-3 rounded-lg'
                >
                  <div className='shrink-0'>{feature.icon}</div>
                  <span className='font-medium text-emerald-50'>{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - floating quiz cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='relative hidden lg:block h-96'
          >
            {/* Main floating card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='absolute w-64 h-80 bg-white rounded-2xl shadow-2xl z-10 top-10 left-1/3 p-6 text-gray-800'
            >
              <div className='bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg p-3 text-white text-center'>
                <h3 className='font-bold'>Science Quiz</h3>
                <p className='text-xs opacity-80'>10 questions • 5 min</p>
              </div>

              <div className='mt-4'>
                <div className='h-32 bg-gradient-to-br from-teal-50 to-emerald-100 rounded-lg flex items-center justify-center'>
                  <div className='text-center p-4'>
                    <div className='text-4xl'>🧪</div>
                    <p className='text-xs font-medium mt-2'>Can you score 100%?</p>
                  </div>
                </div>

                <div className='flex justify-between items-center mt-6'>
                  <div className='flex space-x-1'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className='text-yellow-400'>
                        ★
                      </span>
                    ))}
                  </div>
                  <button className='bg-emerald-500 text-white px-4 py-1 rounded-full text-sm'>
                    Play
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Secondary floating card */}
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className='absolute w-56 h-72 bg-emerald-50 rounded-xl shadow-lg z-0 top-20 left-0 p-5 border border-emerald-100'
            >
              <div className='h-24 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center'>
                <span className='text-3xl'>📚</span>
              </div>
              <div className='mt-3'>
                <h4 className='font-bold text-sm'>History Buff</h4>
                <p className='text-xs text-gray-600 mt-1'>8 questions</p>
              </div>
            </motion.div>

            {/* Third floating card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className='absolute w-52 h-64 bg-white rounded-xl shadow-lg z-0 bottom-0 right-0 p-5'
            >
              <div className='h-20 bg-gradient-to-r from-teal-300 to-emerald-400 rounded-lg flex items-center justify-center'>
                <span className='text-2xl'>🎵</span>
              </div>
              <div className='mt-3'>
                <h4 className='font-bold text-sm'>Music Trivia</h4>
                <p className='text-xs text-gray-600 mt-1'>12 questions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating animated emojis */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {['🧠', '🌟', '🏆', '💡', '📚', '🎯'].map((emoji, i) => (
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
              opacity: 0.6,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuizHeroV2;
