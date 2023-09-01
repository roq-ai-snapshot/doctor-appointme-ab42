import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  healthcare_provider_id: string;
  guest_id: string;
  created_at?: any;
  updated_at?: any;

  user_appointment_healthcare_provider_idTouser?: UserInterface;
  user_appointment_guest_idTouser?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  healthcare_provider_id?: string;
  guest_id?: string;
}
