import { GalleryProps } from '@/types/props/GalleryProps';
import React from 'react';
import GradientImageWrap from '../common/GradientImageWrap';

function CampGallery({ galleryData }: GalleryProps) {
  return (
    <ul className='flex flex-col md:flex-row gap-4 items-center justify-center mx-auto w-full md:w-[90%] lg:w-[80%] xl:w-[65%] px-[1.4rem] lg:px-0'>
      {galleryData.map((gallery) => (
        <GradientImageWrap key={gallery.id} data={gallery} />
      ))}
    </ul>
  );
}

export default CampGallery;
