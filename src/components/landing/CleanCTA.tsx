import { motion } from 'framer-motion';
import { FaRocket, FaUsers } from 'react-icons/fa';
const CleanCTA = () => {
  return (
    <section className='py-16 bg-gray-50 w-full'>
      <div className='w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='w-full bg-white py-12 px-4 sm:px-6 border-t border-b border-gray-200'
        >
          <div className='max-w-4xl mx-auto text-center'>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
              Ready to Engage Your Audience?
            </h3>
            <p className='text-gray-600 mb-8 max-w-2xl mx-auto text-lg'>
              Join thousands of educators creating interactive quizzes today.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className='px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all flex items-center justify-center'
              >
                <FaRocket className='mr-2' /> Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className='px-8 py-3 bg-white text-gray-900 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center'
              >
                <FaUsers className='mr-2' /> See Examples
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CleanCTA;
