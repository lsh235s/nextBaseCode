import {
  GalleryType,
  FAQItemType,
  ApplyCheckBoxType,
} from '@/types/DataType';

import item01 from '@/../public/images/gallery01.png';
import item02 from '@/../public/images/gallery02.png';
import item03 from '@/../public/images/gallery03.png';


export const GalleryData: GalleryType[] = [
  {
    id: 1,
    image: item01,
    title: '정규교과 ',
    description: '메타버스 강의장',
    width: 455,
    height: 340,
  },
  {
    id: 2,
    image: item02,
    title: '정규교과 ',
    description: '메타버스 강의장',
    width: 265,
    height: 340,
  },
  {
    id: 3,
    image: item03,
    title: '정규교과 ',
    description: '메타버스 강의장',
    width: 455,
    height: 340,
  },
];


export const TechStackData = [
  {
    id: 1,
    icon: '/icons/python.svg',
    title: 'Python',
  },
  {
    id: 2,
    icon: '/icons/tensorflow.svg',
    title: 'TensorFlow',
  },
  {
    id: 3,
    icon: '/icons/pytorch.svg',
    title: 'Pytorch',
  },
  {
    id: 4,
    icon: '/icons/html.svg',
    title: 'HTML',
  },
  {
    id: 5,
    icon: '/icons/css.svg',
    title: 'CSS',
  },
  {
    id: 6,
    icon: '/icons/javascript.svg',
    title: 'JavaScript',
  },
  {
    id: 7,
    icon: '/icons/react.svg',
    title: 'React',
  },
  {
    id: 8,
    icon: '/icons/mariadb.svg',
    title: 'MariaDB',
  },
  {
    id: 9,
    icon: '/icons/mongodb.svg',
    title: 'MongoDB',
  },
  {
    id: 10,
    icon: '/icons/java.svg',
    title: 'Java',
  },
  {
    id: 11,
    icon: '/icons/git.svg',
    title: 'Git',
  },
  {
    id: 12,
    icon: '/icons/springboot.svg',
    title: 'Spring Boot',
  },
  {
    id: 13,
    icon: '/icons/springcloud.svg',
    title: 'Spring Cloud',
  },
  {
    id: 14,
    icon: '/icons/docker.svg',
    title: 'Docker',
  },
  {
    id: 15,
    icon: '/icons/elasticsearch.svg',
    title: 'ElasticSearch',
  },
  {
    id: 16,
    title: 'Gen AI',
  },
  {
    id: 17,
    title: 'Hugging Face',
  },
  {
    id: 18,
    title: 'LangChain',
  },
  {
    id: 19,
    title: 'RAG',
  },
  {
    id: 20,
    icon: '/icons/aws.svg',
    title: 'AWS',
  },
  {
    id: 21,
    icon: '/icons/kafka.svg',
    title: 'Kafka',
  },
];

export const faqData: FAQItemType[] = [
  {
    id: 1,
    question: '지원자격이 어떻게 되나요?',
    answer:
      '내일배움카드 발급이 가능하며, 국내외 대학 3학년 이상 및 미취업자라면 모두 지원할 수 있습니다.\n 나이, 학력 및 전공 제한없이 모두 지원 가능합니다.',
    indices: [0, 1, 2, 3],
  },
  {
    id: 2,
    question: '내일배움카드가 있어야 교육을 받을 수 있나요?',
    answer:
      '해당 교육과정 KDT 과정으로 교육 입과 전 내일배움카드를 발급 받으셔야 수강이 가능합니다.\n자세한 발급 방법은 고용노동부(1350) 또는 직업훈련포털(www.work24.go.kr)에서 확인해 주세요.',
    indices: [0, 1, 2, 3, 4, 5],
  },
  {
    id: 3,
    question: '비전공자도 지원 가능할까요?',
    answer:
      '프로그래밍 관련 경험이 있다면 좋지만, 없더라도 교육에 대한 적극적인 의지가 있다면 지원 가능합니다.\n교육에 대한 의지와 성장 가능성 있는 지원자를 선발하므로 지원서에 상세히 기입해주시기 바랍니다.',
    indices: [0, 1, 2, 3],
  },
  {
    id: 4,
    question: '국민취업지원제도와 병행 가능한가요?',
    answer:
      '국민취업지원제도와 KDT 과정은 병행 가능합니다.\n고용센터 담당자와 상담 후 신청수강 신청 가능하므로 빠른 신청을 권장합니다.',
    indices: [0, 1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 5,
    question: '개인 노트북이 있어야 지원 가능한가요?',
    answer: '교육에 집중할 수 있도록 LG 노트북을 대여 해드립니다.',
    indices: [0, 1, 2, 3, 4, 5],
  },
  {
    id: 6,
    question: 'KDT 과정을 이전에 수강한 적이 있는데 지원 가능한가요?',
    answer:
      'KDT 과정 수강 경험이 있는 분들은 개별적으로 고용센터에 문의하여 수강여부를 확인해주세요.',
    indices: [0, 1, 2, 3, 4, 5],
  },
];


export const SupportPathData: ApplyCheckBoxType[] = [
  {
    id: 1,
    label: '선택지1',
  },
  {
    id: 2,
    label: '선택지2',
  },
  {
    id: 3,
    label: '선택지3',
  },
  {
    id: 4,
    label: '선택지4',
  },
  {
    id: 5,
    label: '입력조건 포함',
    additional: true,
  },
];



export const GenderData: ApplyCheckBoxType[] = [
  {
    id: 1,
    label: '선택지1',
  },
  {
    id: 2,
    label: '선택지2',
  },
];


