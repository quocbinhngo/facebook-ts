import { ErrorMessage, FieldHookConfig, useField } from "formik";
import { ChangeEvent, ChangeEventHandler } from "react";

export interface AuthInputProps {
  type: string;
  name: string;
  placeholder: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEventHandler<HTMLSelectElement>
  ) => void;
  [x: string]: string | FieldHookConfig<any>;
}

export default function AuthInput({
  type,
  placeholder,
  onChange,
  ...props
}: AuthInputProps) {
  const [field, meta] = useField(props as any);

  return (
    <>
      {meta.touched && meta.error && (
        <>
          <div className="text-white bg-red-600 py-3 rounded-lg text-center relative">
            {<ErrorMessage name={field.name} />}{" "}
            <div className="h-4 w-4 bg-red-600 absolute rotate-45 bottom-[-4px] left-4"></div>
          </div>
        </>
      )}
      <input
        className={`border-[0.5px] border-gray-100 ${
          meta.touched && meta.error && "border-red-600"
        } focus:border-blue-500 outline-none p-3 rounded-lg placeholder-gray-500 w-full`}
        type={type}
        placeholder={placeholder}
        {...field}
        {...props}
        onChange={onChange}
      />
    </>
  );
}
