import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  healthcare_provider_id: yup.string().nullable().required(),
  guest_id: yup.string().nullable().required(),
});
