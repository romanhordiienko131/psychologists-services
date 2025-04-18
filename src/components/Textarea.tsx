import { TextareaHTMLAttributes } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  fieldName: Path<T>;
  register: UseFormRegister<T>;
}

function Textarea<T extends FieldValues>({
  fieldName,
  register,
  ...rest
}: Props<T>) {
  return (
    <textarea
      {...register(fieldName)}
      {...rest}
      className="h-[7.25rem] resize-none rounded-xl border border-black/10 px-4.5 py-4 leading-5 placeholder:leading-5 placeholder:text-black"
    ></textarea>
  );
}

export default Textarea;
