import * as yup from 'yup';

export const patientRecordValidationSchema = yup.object().shape({
  medical_staff_id: yup.string().nullable().required(),
  guest_id: yup.string().nullable().required(),
});
