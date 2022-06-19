export interface AuthRadioButtonProps {
  label: string;
  name: string;
  value: string;
  onChange: any;
  checked?: boolean;
}

export default function AuthRadioButton({
  label,
  name,
  value,
  onChange,
  checked,
}: AuthRadioButtonProps) {
  return (
    <label className="w-full border-[1px] border-gray-500 rounded-md p-1 flex items-center justify-between">
      <span>{label}</span>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </label>
  );
}
