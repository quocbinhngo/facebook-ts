export interface AuthSelectProps {
  name: string;
  value: number;
  onChange: any;
  valueList: Array<number>;
}

export default function AuthSelect({
  name,
  value,
  onChange,
  valueList,
}: AuthSelectProps) {
  return (
    <select
      className="w-full border-[1px] border-gray-500 rounded-md p-1"
      name={name}
      value={value}
      onChange={onChange}
    >
      {valueList.map((value: number) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
