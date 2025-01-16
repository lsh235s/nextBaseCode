import React from 'react';

function PlusIcon() {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.5 12.5H19.5'
        stroke='url(#paint0_linear_49_1240)'
        strokeOpacity='0.57'
        strokeWidth='5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 5.5V19.5'
        stroke='url(#paint1_linear_49_1240)'
        strokeOpacity='0.57'
        strokeWidth='5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_49_1240'
          x1='12.5'
          y1='12.5'
          x2='12.5'
          y2='13.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#00AAFF' />
          <stop offset='0.355' stopColor='#206FFF' />
          <stop offset='1' stopColor='#5B02FF' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_49_1240'
          x1='13'
          y1='5.5'
          x2='13'
          y2='19.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#00AAFF' />
          <stop offset='0.355' stopColor='#206FFF' />
          <stop offset='1' stopColor='#5B02FF' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default PlusIcon;
