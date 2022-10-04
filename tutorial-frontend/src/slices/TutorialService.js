import http from '../http-common';

const getAll = () => {
  return http.get('/tutorials');
};

const get = (id) => {
  return http.get(`/tutorials/${id}`);
};

const create = (data) => {
  return http.post('/tutorials', data);
};

const TutorialService = {
  getAll,
  get,
  create,
};

export default TutorialService;
