'use client';

import React from 'react';
import { CommonLayout } from '@/components/common/CommonLayout';
import LabelInput from '@/components/common/LabelInput';
import LabelSelect from '@/components/common/LabelSelect';
import LabelCheckBox from '@/components/common/LabelCheckBox';
import {
  GenderData,
  SupportPathData,
} from '@/data/DummyData';
import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';

function Apply() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <CommonLayout.MainSection>
      <Title
        highlightIndices={[0, 1, 2]}
        defaultColor='black'
        subtext='*표시는 필수 입력사항입니다.'
        subtextClassName='text-red-500 text-[0.8rem]'
      >
        입력 항목
      </Title>
      <form
        onSubmit={onSubmit}
        className='space-y-8 container max-w-[960px] mx-auto px-4'
      >
        <LabelInput
          type='name'
          label='이름'
          placeholder='이름을 작성해 주세요.'
          required
        />
        <LabelCheckBox
          type='gender'
          label='성별'
          checkBoxData={GenderData}
          required
        />
        <LabelCheckBox
          type='supportPath'
          label='복수선택'
          checkBoxData={SupportPathData}
          multiple
          required
          subtext='(최소 1개 선택, 복수 선택 가능합니다.)'
        />
        <LabelSelect
          type='schoolStatus'
          label='selectBox'
          placeholder='선택해주세요.'
          required
        />
        
        <Button
          type='submit'
          className='gradient-button-border font-bold z-[20] rounded-[41px] flex justify-center items-center gap-1 mx-auto 
          h-[50px] w-[160px] text-base xl:h-[60px] xl:w-[180px] xl:text-lg 2xl:h-[65px] 2xl:w-[220px] 2xl:text-xl text-white'
        >
          Apply
        </Button>
      </form>
    </CommonLayout.MainSection>
  );
}

export default Apply;
