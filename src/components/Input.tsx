import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';

interface Props<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
}

function Input<T extends FieldValues>({
  fieldName,
  register,
  error,
  ...rest
}: Props<T>) {
  return (
    <div>
      <input
        {...register(fieldName)}
        {...rest}
        className="w-full rounded-xl border border-black/10 px-4.5 py-4 leading-5 placeholder-black"
      />
      {error && <div className="text-red-400">{error}</div>}
    </div>
  );
}

export default Input;
