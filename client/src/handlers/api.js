const axios = require('axios')
const baseUrl = process.env.API ?? 'http://localhost:5000'

const getData = async () => {
  const route = `${baseUrl}/api/`

  try {
    // fetch data from a url endpoint
    const response = await axios.get(`${route}/test-data`)
    return response.data
  } catch (error) {
    return error.data
  }
}

export { getData, baseUrl }
