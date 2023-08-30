import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CurrentAffairsInterface {
  id?: string;
  title: string;
  content: string;
  paper: string;
  subject: string;
  topic: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CurrentAffairsGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  paper?: string;
  subject?: string;
  topic?: string;
  user_id?: string;
}
