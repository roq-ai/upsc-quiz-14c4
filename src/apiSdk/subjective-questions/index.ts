import axios from 'axios';
import queryString from 'query-string';
import { SubjectiveQuestionInterface, SubjectiveQuestionGetQueryInterface } from 'interfaces/subjective-question';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSubjectiveQuestions = async (
  query?: SubjectiveQuestionGetQueryInterface,
): Promise<PaginatedInterface<SubjectiveQuestionInterface>> => {
  const response = await axios.get('/api/subjective-questions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSubjectiveQuestion = async (subjectiveQuestion: SubjectiveQuestionInterface) => {
  const response = await axios.post('/api/subjective-questions', subjectiveQuestion);
  return response.data;
};

export const updateSubjectiveQuestionById = async (id: string, subjectiveQuestion: SubjectiveQuestionInterface) => {
  const response = await axios.put(`/api/subjective-questions/${id}`, subjectiveQuestion);
  return response.data;
};

export const getSubjectiveQuestionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/subjective-questions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSubjectiveQuestionById = async (id: string) => {
  const response = await axios.delete(`/api/subjective-questions/${id}`);
  return response.data;
};
