import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://us-central1-yonja-777.cloudfunctions.net/yonja_api/v1.0/',
  responseType: 'json',
  headers: {
    'Authorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyODRlYTZiNGZlZDBmZDc1MzE4NTg2NDZmZDYzNjE1ZGQ3YTIyZjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20veW9uamEtNzc3IiwiYXVkIjoieW9uamEtNzc3IiwiYXV0aF90aW1lIjoxNTYzOTY2MjkyLCJ1c2VyX2lkIjoialpJOHVUTDhHamZJYk9UZE1uTDVwVkl3bWtLMiIsInN1YiI6ImpaSTh1VEw4R2pmSWJPVGRNbkw1cFZJd21rSzIiLCJpYXQiOjE1NjUwMzA4MjAsImV4cCI6MTU2NTAzNDQyMCwiZW1haWwiOiJlbW1hbnVlbGdhdHdlY2hAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZW1tYW51ZWxnYXR3ZWNoQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bxGt8plOSfFRZam4u0GYLgfqKtQKQ60CX3xKUhYhGDFiy4aJjuJWBFT_x2SPdw8PkgVRqMQ1TgJPJsASUI9BqXtxHFcCD9Ut4L6uzPta3GBMQkBfmprzP_NlFRL4alB2PC6vcU3mKkElsH3oC-Ashq8MPwlp0sPGcOj0iBSRKaux56tuqCfG4P9SsNuXHE8n27Q0SAwYhCoAKJq7gY-N7X1tuOl4SmKt3QOOjtdbh7XURnLY2IUfbmZ6RGcpEH0rSRBXgSVWMvzKyL9sJnaCpj89uXEFzbnM984afjCd79ZGOueaVOlNUqLgCWsgfE14VArzWb6E0ULQeuniNQcUaQ'
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
}

export default fetchData;
