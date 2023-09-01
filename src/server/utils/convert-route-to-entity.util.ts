const mapping: Record<string, string> = {
  appointments: 'appointment',
  'insurance-policies': 'insurance_policy',
  organizations: 'organization',
  'patient-records': 'patient_record',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
