const mapping: Record<string, string> = {
  'current-affairs': 'current_affairs',
  mcqs: 'mcq',
  organizations: 'organization',
  'subjective-questions': 'subjective_question',
  'test-series': 'test_series',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
