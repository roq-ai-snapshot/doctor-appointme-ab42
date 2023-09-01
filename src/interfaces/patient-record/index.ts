import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PatientRecordInterface {
  id?: string;
  medical_staff_id: string;
  guest_id: string;
  created_at?: any;
  updated_at?: any;

  user_patient_record_medical_staff_idTouser?: UserInterface;
  user_patient_record_guest_idTouser?: UserInterface;
  _count?: {};
}

export interface PatientRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  medical_staff_id?: string;
  guest_id?: string;
}
