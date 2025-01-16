'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItemType } from '@/types/DataType';
import Image from 'next/image';
import HelpIcon from '@/../public/icons/helpIcon.svg';
import PlusIcon from '@/../public/icons/plusIcon.svg';
import MinusIcon from '@/../public/icons/minusIcon.svg';
import CornerDown from '@/../public/icons/CornerDown.svg';

import FaqTitle from '../common/FaqTitle';

function FaqItem({ faqData }: { faqData: FAQItemType[] }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSize(20);
    } else {
      setSize(34);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setSize(20);
      } else {
        setSize(34);
      }
    });
  }, []);

  return (
    <div className='container w-full px-4 md:w-[90%] lg:w-[75%] py-[3rem] md:px-[2.5rem] bg-[#FBFBFB] rounded-lg'>
      {faqData.map((item) => (
        <div key={item.id} className='border-b border-gray-300 last:border-0'>
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className='flex items-center justify-between w-full py-4 text-left'
            aria-expanded={openId === item.id}
          >
            <div className='flex w-full items-center gap-1 md:gap-3 py-2'>
              <Image
                src={HelpIcon}
                alt='icon'
                width={size}
                height={size}
                className='rounded-full'
              />
              <FaqTitle
                className='text-sm md:text-[1rem] lg:text-lg font-bold overflow-hidden'
                highlightIndices={item.indices}
                highlightColors='#00AAFF'
              >
                {item.question}
              </FaqTitle>
            </div>
            <motion.div
              className={cn(
                'flex items-center justify-center w-6 h-6 rounded-full z-10',
                openId === item.id ? 'bg-blue-50' : 'bg-gray-50'
              )}
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openId === item.id ? (
                <Image
                  src={MinusIcon}
                  alt='icon'
                  width={size - 4}
                  height={size - 4}
                  className='rounded-full'
                />
              ) : (
                <Image
                  src={PlusIcon}
                  alt='icon'
                  width={size - 4}
                  height={size - 4}
                  className='rounded-full'
                />
              )}
            </motion.div>
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='overflow-hidden'
              >
                <div className='pb-8 pl-8 pr-8 text-gray-600 flex items-start justify-start gap-3 text-xs md:text-[0.8rem] lg:text-[1rem] font-bold'>
                  <Image
                    src={CornerDown}
                    alt='icon'
                    width={size - 6}
                    height={size - 6}
                    className='rounded-full'
                  />
                  <p className='pt-1 leading-normal md:whitespace-pre-line'>
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default FaqItem;
