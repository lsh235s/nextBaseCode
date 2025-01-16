export interface TitleProps {
  children: string;
  subtext?: string; // 부제목
  subtextClassName?: string; // 부제목 색상
  highlightIndices: number[]; // 강조할 인덱스 배열
  highlightColors?: string; // 각 인덱스마다 다른 색상을 지정하는 배열
  defaultColor?: string; // 기본 텍스트 색상
  className?: string; // 추가 클래스
}
