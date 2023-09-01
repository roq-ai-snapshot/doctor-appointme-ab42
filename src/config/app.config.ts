interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Insurance Provider'],
  tenantName: 'Organization',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View available appointment slots.',
    'Book an appointment with a Healthcare Provider.',
    'Cancel an appointment.',
  ],
  ownerAbilities: [
    'Manage Organizations',
    'Invite Healthcare Providers, Medical Staff, and Insurance Providers to join the Organization',
    'Remove Healthcare Providers, Medical Staff, and Insurance Providers from the Organization',
  ],
};
