import axios from 'axios';
import queryString from 'query-string';
import { CurrentAffairsInterface, CurrentAffairsGetQueryInterface } from 'interfaces/current-affairs';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCurrentAffairs = async (
  query?: CurrentAffairsGetQueryInterface,
): Promise<PaginatedInterface<CurrentAffairsInterface>> => {
  const response = await axios.get('/api/current-affairs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCurrentAffairs = async (currentAffairs: CurrentAffairsInterface) => {
  const response = await axios.post('/api/current-affairs', currentAffairs);
  return response.data;
};

export const updateCurrentAffairsById = async (id: string, currentAffairs: CurrentAffairsInterface) => {
  const response = await axios.put(`/api/current-affairs/${id}`, currentAffairs);
  return response.data;
};

export const getCurrentAffairsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/current-affairs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCurrentAffairsById = async (id: string) => {
  const response = await axios.delete(`/api/current-affairs/${id}`);
  return response.data;
};
