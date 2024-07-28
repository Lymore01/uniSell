export type InputFieldProps = {
  prodName: string;
  label: string;
  type: string;
  placeholder: string;
};

const InputField = ({
  prodName,
  label,
  type,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className="mt-4 w-full flex flex-col gap-[5px]">
      <label htmlFor={prodName} className="text-sm md:text-base">
        {label}
      </label>
      <input
        id={prodName}
        name={prodName}
        type={type}
        autoComplete="off"
        className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[grey]/20 placeholder-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
