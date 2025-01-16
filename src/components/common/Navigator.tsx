import { NavigatorType } from '@/types/NavigatorType';
import React, { useEffect, useMemo, useState } from 'react';

function Navigator() {
  const [activeRoute, setActiveRoute] = useState<string>('#camp');

  const routes: NavigatorType[] = useMemo(() => {
    return [
      {
        lable: 'techStack',
        isActive: true,
        href: '#techStack',
        hilightsIndex: [0, 3],
      },
      { lable: 'FAQ', isActive: false, href: '#faq', hilightsIndex: [0] },
    ];
  }, []);
  // const router = useRouter();
  const handleRouteChange = (route: string) => {
    const target = document.querySelector(route);
    if (target) {
      const yOffset = -100; // 오프셋 조정
      const yPosition =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });

      setActiveRoute(route); // 클릭 시 활성화 상태 업데이트
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      routes.forEach((route) => {
        const target = document.querySelector(route.href);
        if (target) {
          const rect = target.getBoundingClientRect();
          if (rect.top <= 110 && rect.bottom >= 110) {
            // 스크롤 위치가 섹션 내부일 때
            setActiveRoute(route.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [routes]);

  return (
    <nav className='max-[890px]:hidden block z-[20]'>
      <ul className='flex lg:gap-8 font-bold md:text-xs lg:text-[0.9rem] md:gap-2 gap-2'>
        {routes.map((route) => (
          <li
            key={route.lable}
            className={`cursor-pointer transition-all ${
              activeRoute === route.href
                ? 'text-primary font-extrabold' // 활성화 상태 스타일
                : 'hover:text-primary'
            }`}
            onClick={() => handleRouteChange(route.href)}
          >
            {route.lable}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigator;
