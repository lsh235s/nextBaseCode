import React from 'react';
import TechStackList from '@/components/home/TechStackList';
import Title from '@/components/common/Title';
import { CommonLayout } from '@/components/common/CommonLayout';

function TechStack({ id }: { id?: string }) {
  return (
    <CommonLayout.MainSection id={id}>
      <Title highlightIndices={[0, 6]} defaultColor='black'>
        TECH STACK
      </Title>
      <TechStackList />
    </CommonLayout.MainSection>
  );
}

export default TechStack;
