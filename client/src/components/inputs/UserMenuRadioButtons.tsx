import * as React from "react";

export interface UserMenuRadioButtonsProps {
  values: Array<string>;
}

export default function UserMenuRadioButtons({
  values,
}: UserMenuRadioButtonsProps) {
  const [checked, setChecked] = React.useState(values[0]);

  return (
    <>
      {values.map((value) => (
        <div className="w-full" key={value} onClick={() => setChecked(value)}>
          <label className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <span className="font-semibold text-lg">{value}</span>
            <input
              className="scale-150"
              type="radio"
              checked={checked === value}
            />
          </label>
        </div>
      ))}
    </>
  );
}
