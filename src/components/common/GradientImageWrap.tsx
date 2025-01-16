import React from 'react';
import Image from 'next/image';
import { GalleryType } from '@/types/DataType';

function GradientImageWrap({ data }: { data: GalleryType }) {
  return (
    <li
      key={data.id}
      className='flex flex-col items-center justify-center gap-4'
    >
      <div
        className='overflow-hidden rounded-lg relative hover:shadow-2xl transition-all duration-300 h-auto'
        style={{ width: '100%' }}
      >
        {/* 반응형 이미지 */}
        <Image
          src={data.image}
          alt={data.description}
          // layout='responsive'
          // objectFit='cover'
          sizes='(max-width: 640px) 100vw, /* sm */
                 (max-width: 768px) 50vw, /* md */
                 (max-width: 1024px) 33vw, /* lg */
                 25vw' /* xl 이상 */
        />
        {/* 반응형 Border */}
        <div className='absolute w-full gradient-border-nobg rounded-lg top-0 left-0 overflow-hidden h-full'></div>
      </div>
      {/* 제목 및 설명 */}
      <p className='text-center font-bold'>
        <span className='text-primary'>{data.title}</span>
        <br />
        {data.description}
      </p>
    </li>
  );
}

export default GradientImageWrap;
