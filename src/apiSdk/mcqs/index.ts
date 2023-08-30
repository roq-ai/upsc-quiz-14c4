import axios from 'axios';
import queryString from 'query-string';
import { McqInterface, McqGetQueryInterface } from 'interfaces/mcq';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMcqs = async (query?: McqGetQueryInterface): Promise<PaginatedInterface<McqInterface>> => {
  const response = await axios.get('/api/mcqs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMcq = async (mcq: McqInterface) => {
  const response = await axios.post('/api/mcqs', mcq);
  return response.data;
};

export const updateMcqById = async (id: string, mcq: McqInterface) => {
  const response = await axios.put(`/api/mcqs/${id}`, mcq);
  return response.data;
};

export const getMcqById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/mcqs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMcqById = async (id: string) => {
  const response = await axios.delete(`/api/mcqs/${id}`);
  return response.data;
};
