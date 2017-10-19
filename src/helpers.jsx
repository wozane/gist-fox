import axios from 'axios'

const apiUrl = 'https://private-anon-dc77e86d57-awapp.apiary-mock.com'

export function fetchGists() {
  return axios.get(`${apiUrl}/gists`)
}

export function fetchGist(id) {
  return axios.get(`${apiUrl}/gists/${id}`)
}
