import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface McqInterface {
  id?: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  answer: string;
  subject: string;
  book: string;
  chapter: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface McqGetQueryInterface extends GetQueryInterface {
  id?: string;
  question?: string;
  option_a?: string;
  option_b?: string;
  option_c?: string;
  option_d?: string;
  answer?: string;
  subject?: string;
  book?: string;
  chapter?: string;
  user_id?: string;
}
