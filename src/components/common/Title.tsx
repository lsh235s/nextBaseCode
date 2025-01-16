import { cn } from '@/lib/utils';
import { TitleProps } from '@/types/props/TitleTextProps';
import React from 'react';

function Title({
  children,
  subtext,
  subtextClassName,
  highlightIndices,
  highlightColors = '#00AAFF',
  defaultColor = 'white',
  className,
}: TitleProps) {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex justify-center'>
        {children.split('').map((char, index) => {
          // 해당 인덱스가 highlightIndices 배열에 포함되어 있는지 확인
          const highlightIndex = highlightIndices.indexOf(index);

          return (
            <h1
              key={index}
              style={{
                color:
                  highlightIndex !== -1
                    ? highlightColors // 색상이 있으면 사용, 없으면 기본 강조색
                    : defaultColor, // 기본 텍스트 색상
              }}
              className={cn(className, 'whitespace-pre', 'text-3xl font-bold')}
            >
              {char}
            </h1>
          );
        })}
      </div>
      <span className={subtextClassName}>{subtext}</span>
      {<hr className='w-14 h-[0.5px] bg-[#00AAFF] border-0' />}
    </div>
  );
}

export default Title;
