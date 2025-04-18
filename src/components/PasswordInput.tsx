import { InputHTMLAttributes, useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
}

function PasswordInput<T extends FieldValues>({
  fieldName,
  register,
  error,
  ...rest
}: Props<T>) {
  const [passVisible, setPassVisible] = useState(false);

  return (
    <div className="relative">
      <input
        {...register(fieldName)}
        {...rest}
        type={passVisible ? 'text' : 'password'}
        className="w-full rounded-xl border border-black/10 py-4 pr-11 pl-4.5 leading-5 placeholder-black"
      />
      {error && <p className="text-red-400">{error}</p>}
      <button
        type="button"
        onClick={() => setPassVisible((prev) => !prev)}
        className="absolute top-4 right-4.5"
      >
        <img
          src={passVisible ? '/icons/eye.svg' : '/icons/eye-off.svg'}
          alt={passVisible ? 'Hide password' : 'Show password'}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}

export default PasswordInput;
