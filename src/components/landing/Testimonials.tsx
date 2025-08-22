import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'QuizWhizz has transformed how I engage with my students. The real-time feedback and competitive elements keep everyone motivated and excited to learn.',
      name: 'Sarah Johnson',
      role: 'High School Teacher',
    },
    {
      quote:
        "As a corporate trainer, I've tried many quiz platforms, but QuizWhizz stands out with its intuitive design and powerful analytics. My team loves the interactive sessions.",
      name: 'Michael Rodriguez',
      role: 'Corporate Trainer',
    },
    {
      quote:
        "I use QuizWhizz for our weekly team building activities. It's so simple to create custom quizzes and the multiplayer aspect makes it incredibly fun for everyone.",
      name: 'Emily Chang',
      role: 'Team Lead, Tech Startup',
    },
  ];

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>What Our Users Say</h2>
          <p className='text-xl text-gray-600'>
            Thousands of educators and trainers trust QuizWhizz
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow'
            >
              <div className='text-blue-500 mb-4'>
                <FaQuoteLeft className='h-6 w-6 opacity-70' />
              </div>
              <p className='text-gray-600 mb-6 italic'>"{testimonial.quote}"</p>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-gray-500 font-medium'>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className='font-semibold text-gray-900'>{testimonial.name}</p>
                  <p className='text-sm text-gray-500'>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
