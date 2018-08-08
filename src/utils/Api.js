import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const request = async (method, url, data, token) => {
  try {
    let response;

    const headers = {
      Authorization: 'Client-ID 2bf0247bf4150dbe459038cb0afefd61ec3dbf7866a8a376cae56d051383ff78',
    };

    // if (token || localStorage.accessToken) {
    //   const authToken = token || localStorage.accessToken;
    //   headers = {
    //     Authorization: `Bearer ${authToken}`,
    //   };
    // }

    if (method === 'get') {
      response = await instance.request({
        url,
        method,
        params: data,
        validateStatus: status => status >= 200 && status < 500,
        headers,
      });
    } else {
      response = await instance.request({
        url,
        method,
        data,
        validateStatus: status => status >= 200 && status < 500,
        headers,
      });
    }

    return response;
  } catch (err) {
    return err;
  }
};

export default {
  get: (endpoint, data, token) => request('get', endpoint, data, token),
  post: (endpoint, data, token) => request('post', endpoint, data, token),
  put: (endpoint, data, token) => request('put', endpoint, data, token),
  del: (endpoint, data, token) => request('delete', endpoint, data, token),
};
