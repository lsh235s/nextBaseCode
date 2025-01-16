import React from 'react';
import { CommonLayout } from '@/components/common/CommonLayout';
import { GalleryData } from '@/data/DummyData';
import CampGallery from '@/components/home/CampGallery';
import Title from '@/components/common/Title';

function CampLocation() {
  return (
    <CommonLayout.MainSection className='bg-[#FBFBFB]'>
      <Title highlightIndices={[0, 1]} defaultColor='black'>
        교육장소
      </Title>
      <CampGallery galleryData={GalleryData} />
    </CommonLayout.MainSection>
  );
}

export default CampLocation;
