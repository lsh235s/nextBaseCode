import React from 'react';

function Footer() {
  return (
    <footer className='w-full bg-[#4A4A4A20] py-10'>
      <p className='mx-auto max-w-fit text-start lg:text-center lg:bg-[#4E4E4E] lg:rounded-full text-black lg:text-white text-sm lg:text-[0.7rem] py-1 px-4'>
        본 과정은 고용노동부가 지원하는 청년 인재 양성을 위한 K-Digital Training
        선도기업 아카데미로, 더존비즈온이 주관하고 위랩스페이스가 운영 지원하는
        교육 프로그램입니다.
      </p>
      <p className='w-fix text-xs text-start lg:text-center py-1 px-4 mt-4'>
        Copyright © 2024. All Rights Reserved | 더존비즈온,
        위랩스페이스,고용노동부
      </p>
    </footer>
  );
}

export default Footer;
