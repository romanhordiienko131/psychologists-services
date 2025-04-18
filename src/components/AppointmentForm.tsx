import { Psychologist } from '../firebase/types.ts';
import Input from './Input.tsx';
import { Controller, Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppointmentFormData } from '../validation/types.ts';
import { appointmentSchema } from '../validation/schemas.ts';
import Textarea from './Textarea.tsx';
import MeetingTimePicker from './MeetingTimePicker.tsx';

interface Props {
  psychologist: Psychologist;
}

function AppointmentForm({ psychologist: { avatar_url, name } }: Props) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: yupResolver(appointmentSchema) as Resolver<AppointmentFormData>,
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <h2 className="-tracking-2 mb-5 text-[2.5rem] leading-12 font-medium">
        Make an appointment with a psychologists
      </h2>
      <p className="mb-10 leading-5 text-black/50">
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </p>
      <div className="mb-10 flex gap-3.5">
        <img
          className="rounded-[0.938rem]"
          src={avatar_url}
          alt={name}
          width={44}
          height={44}
        />
        <div>
          <div className="mb-1 text-[0.75rem] leading-4 font-medium text-[#8a8a89]">
            Your psychologists
          </div>
          <h3 className="leading-6 font-medium">{name}</h3>
        </div>
      </div>
      <div className="mb-10 flex flex-col gap-4">
        <Input<AppointmentFormData>
          register={register}
          fieldName="name"
          placeholder="Name"
          type="text"
          error={errors.name?.message}
        />
        <div className="flex gap-2">
          <Input<AppointmentFormData>
            register={register}
            fieldName="phoneNumber"
            placeholder="+380"
            type="text"
            error={errors.phoneNumber?.message}
          />
          <Controller
            name="meetingTime"
            control={control}
            render={({ field, fieldState }) => (
              <MeetingTimePicker
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />
        </div>
        <Input<AppointmentFormData>
          register={register}
          fieldName="email"
          placeholder="Email"
          type="email"
          error={errors.email?.message}
        />
        <Textarea<AppointmentFormData>
          register={register}
          fieldName="comment"
          placeholder="Comment"
        />
      </div>
      <button
        type="submit"
        className="bg-green -tracking-1 block w-full rounded-4xl p-4 leading-5 font-medium text-white"
      >
        Send
      </button>
    </form>
  );
}

export default AppointmentForm;
