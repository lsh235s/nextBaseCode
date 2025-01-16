import { cn } from '@/lib/utils';
import { TitleProps } from '@/types/props/TitleTextProps';
import React from 'react';

function FaqTitle({
  children,
  highlightIndices,
  highlightColors = '#00AAFF',
  defaultColor = 'black',
  className,
}: TitleProps) {
  return (
    <div className='flex flex-wrap justify-start'>
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
            className={cn(className, 'whitespace-pre')}
          >
            {char}
          </h1>
        );
      })}
    </div>
  );
}

export default FaqTitle;
