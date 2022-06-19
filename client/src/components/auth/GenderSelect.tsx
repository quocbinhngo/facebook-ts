import * as React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

import AuthRadioButton from "../inputs/AuthRadioButton";

export interface GenderSelectProps {
  onChange: any;
  value: string;
  genderError: string;
}

export default function GenderSelect({
  onChange,
  genderError,
}: GenderSelectProps) {
  return (
    <>
      {genderError && (
        <div className="text-white bg-red-600 py-3 rounded-lg text-center relative">
          {genderError}
          <div className="h-4 w-4 bg-red-600 absolute rotate-45 bottom-[-4px] left-4"></div>
        </div>
      )}
      <div onChange={onChange}>
        <label className="flex items-center gap-1 text-xs text-gray-500 mb-1">
          Gender <AiFillQuestionCircle />
        </label>
        <div className="w-full flex space-x-2">
          <AuthRadioButton
            label="Male"
            name="gender"
            value="male"
            onChange={onChange}
          />
          <AuthRadioButton
            label="Female"
            name="gender"
            value="female"
            onChange={onChange}
          />
          <AuthRadioButton
            label="Other"
            name="gender"
            value="other"
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}
