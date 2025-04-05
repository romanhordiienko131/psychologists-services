import PasswordInput from './PasswordInput.tsx';
import Input from './Input.tsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '../validation/schemas.ts';
import { RegistrationFormData } from '../validation/types.ts';

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <p className="-tracking-2 mb-5 text-[2.5rem] leading-12 font-medium">
        Registration
      </p>
      <p className="mb-10 leading-5 text-black/50">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <div className="mb-10 flex flex-col gap-4.5">
        <Input<RegistrationFormData>
          type="text"
          placeholder="Name"
          fieldName="name"
          register={register}
          error={errors.name && errors.name.message}
        />
        <Input<RegistrationFormData>
          type="email"
          placeholder="Email"
          fieldName="email"
          register={register}
          error={errors.email && errors.email.message}
        />
        <PasswordInput<RegistrationFormData>
          placeholder="Password"
          fieldName="password"
          register={register}
          error={errors.password && errors.password.message}
        />
      </div>
      <button
        type="submit"
        className="bg-green -tracking-1 w-full rounded-4xl p-4 leading-5 font-medium text-white"
      >
        Sign Up
      </button>
    </form>
  );
}

export default RegistrationForm;
