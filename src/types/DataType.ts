import { StaticImageData } from 'next/image';

export interface GalleryType {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  width: number;
  height: number;
}

export interface TechStackType {
  id: number;
  icon?: string;
  title: string;
}

export interface FAQItemType {
  id: number;
  question: string;
  answer: string;
  indices: number[];
}




export interface ApplyCheckBoxType {
  id: number;
  label: string;
  additional?: boolean;
}


export interface ColumnDataType {
  accessor: string;
  Header: string;
}
