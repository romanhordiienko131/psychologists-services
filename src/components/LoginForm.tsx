import PasswordInput from './PasswordInput.tsx';
import Input from './Input.tsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../validation/schemas.ts';
import { LoginFormData } from '../validation/types.ts';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <p className="-tracking-2 mb-5 text-[2.5rem] leading-12 font-medium">
        Log In
      </p>
      <p className="mb-10 leading-5 text-black/50">
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <div className="mb-10 flex flex-col gap-4.5">
        <Input<LoginFormData>
          type="email"
          placeholder="Email"
          fieldName="email"
          register={register}
          error={errors.email && errors.email.message}
        />
        <PasswordInput<LoginFormData>
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
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
