import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SubjectiveQuestionInterface {
  id?: string;
  question: string;
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

export interface SubjectiveQuestionGetQueryInterface extends GetQueryInterface {
  id?: string;
  question?: string;
  answer?: string;
  subject?: string;
  book?: string;
  chapter?: string;
  user_id?: string;
}
