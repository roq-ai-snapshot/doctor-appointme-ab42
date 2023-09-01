import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsurancePolicyInterface {
  id?: string;
  organization_id: string;
  insurance_provider_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InsurancePolicyGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
  insurance_provider_id?: string;
}
