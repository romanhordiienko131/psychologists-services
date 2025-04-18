import * as yup from 'yup';

export const registrationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character (@$!%*?&)',
    ),
});

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const appointmentSchema = yup.object({
  name: yup.string().required('Name is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  meetingTime: yup.string().required('Meeting time is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  comment: yup.string(),
});
