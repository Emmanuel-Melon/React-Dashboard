import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://us-central1-yonja-777.cloudfunctions.net/yonja_api/v1.0/',
  responseType: 'json',
  headers: {
    'Authorization': localStorage.getItem('Authorization')
  },
});

/**
 * method to fetch data
 * @param endpoint
 * 
 * @return {object}
 * @return {error}
 */
const fetchData = (endpoint) => {
  return axiosInstance.get(endpoint).then((res) => {
    return {
      data: res.data,
      status: res.status
    }
  }).catch((err) => {
    return {
      err,
      errorMessage: 'Error occured'
    }
  })
};

const postData = (endpoint, data) => {
  return axiosInstance.post(endpoint, data).then(res => {
    return {
      data: res.data,
      status: res.status
    }
  }).catch((err) => {
    return {
      err,
      errorMessage: 'Error occured'
    }
  })
};

export default fetchData;

export {
  fetchData,
  postData
}
