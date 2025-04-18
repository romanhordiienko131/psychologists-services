import * as yup from 'yup';
import {
  appointmentSchema,
  loginSchema,
  registrationSchema,
} from './schemas.ts';

export type RegistrationFormData = yup.InferType<typeof registrationSchema>;

export type LoginFormData = yup.InferType<typeof loginSchema>;

export type AppointmentFormData = yup.InferType<typeof appointmentSchema>;
