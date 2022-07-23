import CONFIG from '../globals/config.js';

const TodoData = {
  endpoint        : `${CONFIG.API_BASE_URL}/to-do-list`,

  async get() {
    const options     = {}
    const request     = new Request(this.endpoint, options);
    const response    = await fetch(request);
    const resJson     = await response.json();

    return resJson;
  },
};

export default TodoData;