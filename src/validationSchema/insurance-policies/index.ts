import * as yup from 'yup';

export const insurancePolicyValidationSchema = yup.object().shape({
  organization_id: yup.string().nullable().required(),
  insurance_provider_id: yup.string().nullable().required(),
});
