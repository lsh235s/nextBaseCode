import { CommonLayout } from '@/components/common/CommonLayout';
import ApplyForm from '@/components/home/ApplyForm';
import React from 'react';

function page() {
  return (
    <CommonLayout.MainContainer>
      <ApplyForm />
    </CommonLayout.MainContainer>
  );
}

export default page;
