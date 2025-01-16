import React from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ApplyProps } from '@/types/props/ApplyProps';

function LabelSelect({
  type,
  label,
  placeholder,
  required,
  subtext,
}: ApplyProps) {
  return (
    <div className='space-y-1'>
      <div>
        <Label
          htmlFor={type}
          className='text-sm md:text-[0.9rem] text-slate-400 font-bold'
        >
          {label}
        </Label>
        {required && <span className='text-red-500 text-xl'>*</span>}
        <br />
        {subtext && (
          <span className='text-xs lg:text-sm xl:text-base text-gray-500'>
            {subtext}
          </span>
        )}
      </div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>선택1</SelectItem>
          <SelectItem value='2'>선택2</SelectItem>
          <SelectItem value='3'>선택3</SelectItem>
          <SelectItem value='4'>선택4</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default LabelSelect;
