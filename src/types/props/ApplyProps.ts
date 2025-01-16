import { ApplyCheckBoxType } from '../DataType';

export interface ApplyProps {
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  subtext?: string;
}

export interface CheckBoxType {
  type: string;
  label: string;
  checkBoxData: ApplyCheckBoxType[];
  multiple?: boolean;
  required?: boolean;
  subtext?: string;
}
