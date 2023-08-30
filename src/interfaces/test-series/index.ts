import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TestSeriesInterface {
  id?: string;
  name: string;
  description?: string;
  start_date: any;
  end_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TestSeriesGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
}
