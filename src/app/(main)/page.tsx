import { CommonLayout } from '@/components/common/CommonLayout';
import CampLocation from '@/components/home/CampLocation';
import Faq from '@/components/home/Faq';
import TechStack from '@/components/home/TechStack';

export default function Home() {
  return (
    <CommonLayout.MainContainer>
      <TechStack id={'techStack'}  />
      <Faq id={'faq'} />
      <CampLocation />
    </CommonLayout.MainContainer>
  );
}
