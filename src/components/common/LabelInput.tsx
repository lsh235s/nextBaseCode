import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ApplyProps } from '@/types/props/ApplyProps';

function LabelInput({
  type,
  label,
  placeholder,
  required,
  subtext,
}: ApplyProps) {
  return (
    <div className='space-y-2'>
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
      <Input type='text' placeholder={placeholder} />
    </div>
  );
}

export default LabelInput;
