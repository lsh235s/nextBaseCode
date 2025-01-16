import { cn } from '@/lib/utils';
import { useEffect, useMemo } from 'react';
import { NavigatorType } from '@/types/NavigatorType';
import { XIcon } from 'lucide-react';
import Button from '@/components/common/Button';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  const handleRoute = (route: string) => {
    onClose();
    const target = document.querySelector(route);
    if (target) {
      const yOffset = -100;
      const yPosition =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside
      className={cn(
        'absolute z-[9999] size-full p-[2rem] transition-all overflow-hidden',
        'flex flex-col justify-between',
        open ? 'translate-x' : '-translate-x-full'
      )}
      style={{
        animation: 'gradient-bg 3s infinite',
        background: 'linear-gradient(35deg, #000000, #000000)',
        backgroundSize: '200% 100%',
      }}
    >
      <button
        onClick={onClose}
        className='absolute top-[2.4rem] right-[2rem] text-white'
      >
        <XIcon
          size={30}
          color='white'
          strokeWidth={3}
          className=' opacity-75'
        />
      </button>
      <ul className='flex flex-col gap-8 py-[1rem] px-3'>
        <li className='mb-10'>
          <div>이미지위치</div>
        </li>
        {routes.map((route, idx) => (
          <li
            key={idx}
            className='text-lg font-extrabold flex items-center justify-start gap-2 text-white opacity-60'
            onClick={() => handleRoute(route.href)}
          >
            {route.lable}
          </li>
        ))}
        <Button
          size='md'
          bgColorClassName='gradient font-bold z-[20] text-white absolute bottom-[3rem]'
          arrow={false}
        >
          apply
        </Button>
      </ul>
    </aside>
  );
}
