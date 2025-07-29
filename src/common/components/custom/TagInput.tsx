import { Input } from '@/common/components/ui/input';
import { Badge } from '@/common/components/ui/badge';
import { KeyboardEventHandler, useState } from 'react';
import { useController } from 'react-hook-form';
import { AnimatePresence, motion } from 'motion/react';

const MotionBadge = motion.create(Badge);
export default function Taginput({ control, name = 'tags', placeholder }) {
  const {
    field: { onChange, value: formValue },
  } = useController({ name, control, defaultValue: [] });

  const handleEnter = function (value: string) {
    if (!formValue.some((val: string) => val.toLowerCase() === value.toLowerCase())) {
      const newFormValue = [...formValue, value];
      onChange(newFormValue);
    }
  };

  return (
    <>
      <CustomInput onEnter={handleEnter} defaultValue='' placeholder={placeholder} />

      <div className='flex flex-wrap  gap-2 w-full py-5'>
        <AnimatePresence>
          {formValue.map((tgs) => (
            <MotionBadge
              key={tgs}
              className='flex items-center gap-2 px-3 py-1 bg-slate-400 text-white rounded-full text-sm font-medium'
              initial={{ scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 10 }}
            >
              <span>{tgs}</span>
              <button
                type='button'
                className='hover:text-red-600 focus:outline-none transition-colors'
                onClick={() => onChange(formValue.filter((tag) => tag !== tgs))}
              >
                ×
              </button>
            </MotionBadge>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

function CustomInput({ defaultValue = '', onEnter, placeholder }) {
  const [value, setValue] = useState(defaultValue);

  const handleAddItem: KeyboardEventHandler = function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (value.length > 0) {
        onEnter(value);
        setValue('');
      }
    }
  };

  return (
    <Input
      onKeyDown={handleAddItem}
      onChange={(e) => setValue(e.target.value.toLowerCase())}
      value={value}
      placeholder={placeholder}
    />
  );
}
