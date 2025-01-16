import React from 'react';
import FaqItem from './FaqItem';
import { faqData } from '@/data/DummyData';
import { CommonLayout } from '../common/CommonLayout';
import Title from '../common/Title';

function Faq({ id }: { id?: string }) {
  return (
    <CommonLayout.MainSection id={id}>
      <Title highlightIndices={[0]} defaultColor='black'>
        FAQ
      </Title>
      <FaqItem faqData={faqData} />
    </CommonLayout.MainSection>
  );
}

export default Faq;
