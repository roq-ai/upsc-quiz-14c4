import axios from 'axios';
import queryString from 'query-string';
import { TestSeriesInterface, TestSeriesGetQueryInterface } from 'interfaces/test-series';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTestSeries = async (
  query?: TestSeriesGetQueryInterface,
): Promise<PaginatedInterface<TestSeriesInterface>> => {
  const response = await axios.get('/api/test-series', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTestSeries = async (testSeries: TestSeriesInterface) => {
  const response = await axios.post('/api/test-series', testSeries);
  return response.data;
};

export const updateTestSeriesById = async (id: string, testSeries: TestSeriesInterface) => {
  const response = await axios.put(`/api/test-series/${id}`, testSeries);
  return response.data;
};

export const getTestSeriesById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/test-series/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTestSeriesById = async (id: string) => {
  const response = await axios.delete(`/api/test-series/${id}`);
  return response.data;
};
