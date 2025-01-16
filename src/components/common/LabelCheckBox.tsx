import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckBoxType } from '@/types/props/ApplyProps';
import { ApplyCheckBoxType } from '@/types/DataType';
import { Input } from '@/components/ui/input';

function LabelCheckBox({
  type,
  label,
  checkBoxData,
  multiple,
  required,
  subtext,
}: CheckBoxType) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [additional, setAdditional] = useState<boolean>(false);
  const handleCheckboxChange = (id: number, add?: boolean) => {
    if (add) {
      setAdditional(!additional);
    }

    if (multiple) {
      setSelectedIds((prev) =>
        prev.includes(id)
          ? prev.filter((prevId) => prevId !== id)
          : [...prev, id]
      );
      return;
    }

    setSelectedId((prev) => (prev === id ? null : id));
  };
  return (
    <div className='space-y-2'>
      <div>
        <Label
          htmlFor={type}
          className='text-sm md:text-[0.9rem] text-slate-400 font-bold mb-2'
        >
          {label}
        </Label>
        {required && <span className='text-red-500 text-xl'>*</span>}
        <br />
        {subtext && <span className='text-sm text-primary'>{subtext}</span>}
      </div>
      <hr className='border-0.5 border-gray-200' />
      <fieldset
        className={`flex ${
          checkBoxData.length > 2
            ? 'flex-col items-start justify-center'
            : 'flex-row items-center'
        } gap-4 pt-4`}
      >
        {checkBoxData.map((data: ApplyCheckBoxType) => (
          <div
            key={data.id}
            className={`space-y-4 ${checkBoxData.length > 2 && 'w-full'} `}
          >
            <div className='flex items-center gap-3'>
              <Checkbox
                id={data.label}
                checked={
                  !multiple
                    ? selectedId === data.id
                    : selectedIds.includes(data.id)
                }
                onClick={() => handleCheckboxChange(data.id, data.additional)}
              />
              <label
                htmlFor={data.label}
                className='font-medium text-md lg:text-[1rem] xl:text-[1.1rem]'
              >
                {data.label}
              </label>
            </div>
            {data.additional && additional && (
              <Input
                type='text'
                placeholder='지원 경로를 입력해주세요.'
                className='border-b-2 border-gray-300 focus:outline-none focus:border-primary'
              />
            )}
          </div>
        ))}
      </fieldset>
    </div>
  );
}

export default LabelCheckBox;
