import axios from 'axios'

type apiHandlerType = {
  method: string
  url: string
  params: Object
}

async function ApiHandler({ method, url, params }: apiHandlerType) {
  const baseUrl = import.meta.env.VITE_APP_baseURL
  const RapidApiKey = import.meta.env.VITE_RapiApi_Key

  if (method === 'GET' || method === 'get') {
    try {
      const response = await axios.get(`${baseUrl}/${url}`, {
        params: params,
        headers: {
          'x-rapidapi-key': RapidApiKey,
          'x-rapidapi-host': 'real-time-events-search.p.rapidapi.com',
          'x-rapidapi-ua': 'RapidAPI-Playground',
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      return response
    } catch (error: any) {
      if (error?.message) {
        return error.message
      }

      return error
    }
  }
}

export { ApiHandler }
