import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Create an Account',
      description: 'Sign up for free and set up your profile',
      icon: '👤',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      number: 2,
      title: 'Build Your Quiz',
      description: 'Add questions, media, and customize settings',
      icon: '🛠️',
      color: 'from-purple-400 to-fuchsia-500',
    },
    {
      number: 3,
      title: 'Play & Share',
      description: 'Start a live session and invite participants',
      icon: '🎮',
      color: 'from-amber-400 to-orange-500',
    },
  ];

  return (
    <section className='relative py-24 bg-gradient-to-br from-gray-50 to-white'>
      {/* Floating bubble background */}
      <div className='absolute inset-0 overflow-hidden opacity-20'>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full bg-indigo-100'
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              transition: {
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-3xl mx-auto text-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='block text-gray-900'>How QuizWhizz</span>
            <span className='block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
              Works
            </span>
          </h2>
          <p className='text-xl text-gray-600'>Get started in minutes with these simple steps</p>
        </motion.div>

        <div className='relative'>
          {/* Progress line */}
          <div className='hidden md:block absolute h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 rounded-full w-full top-1/2 left-0 -translate-y-1/2'></div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className='relative z-10'
              >
                <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col items-center text-center'>
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6 bg-gradient-to-br ${step.color} text-white font-bold`}
                  >
                    {step.number}
                  </div>
                  <div className='w-16 h-16 -mt-14 mb-4 bg-white rounded-full flex items-center justify-center text-3xl border-4 border-white shadow-md'>
                    {step.icon}
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-3'>{step.title}</h3>
                  <p className='text-gray-600 mb-6'>{step.description}</p>
                  <div className='mt-auto w-full'>
                    <div className='h-1.5 bg-gray-100 rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${step.color}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
