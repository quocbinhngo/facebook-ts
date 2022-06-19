import { ChangeEvent, ChangeEventHandler } from "react";
import AuthSelect from "../selects/AuthSelect";
import { AiFillQuestionCircle } from "react-icons/ai";

export interface DateOfBirthSelectProps {
  birthDay: number;
  birthMonth: number;
  birthYear: number;
  birthDateError: string;
  onChange: any;
}

export default function DateOfBirthSelect({
  birthDay,
  birthMonth,
  birthYear,
  onChange,
  birthDateError,
}: DateOfBirthSelectProps) {
  const getDays = () => {
    return new Date(birthYear, birthMonth, 0).getDate();
  };
  const curYear = new Date().getFullYear();
  const dayList = Array.from(
    new Array(getDays()),
    (_: any, idx: number) => 1 + idx
  );
  const monthList = Array.from(new Array(12), (_: any, idx: number) => 1 + idx);
  const yearList = Array.from(
    new Array(108),
    (_: any, idx: number) => curYear - idx
  );

  return (
    <>
      {birthDateError && (
        <div className="text-white bg-red-600 py-3 rounded-lg text-center relative">
          {birthDateError}
          <div className="h-4 w-4 bg-red-600 absolute rotate-45 bottom-[-4px] left-4"></div>
        </div>
      )}
      <div>
        <label className="flex items-center gap-1 text-xs text-gray-500 mb-1">
          Date of birth <AiFillQuestionCircle />
        </label>
        <div className="w-full flex space-x-2">
          <AuthSelect
            name="birthDay"
            value={birthDay}
            onChange={onChange}
            valueList={dayList}
          />
          <AuthSelect
            name="birthMonth"
            value={birthMonth}
            onChange={onChange}
            valueList={monthList}
          />
          <AuthSelect
            name="birthYear"
            value={birthYear}
            onChange={onChange}
            valueList={yearList}
          />
        </div>
      </div>
    </>
  );
}
