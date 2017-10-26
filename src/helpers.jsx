import axios from 'axios'

const apiUrl = 'https://private-anon-dc77e86d57-awapp.apiary-mock.com'

export function fetchGists() {
  return axios.get(`${apiUrl}/gists`)
}

export function fetchGist(id) {
  return axios.get(`${apiUrl}/gists/${id}`)
}

export function updateGist(id) {
  return axios.patch(`${apiUrl}/gists/${id}`, { content: 'Updated file contents' })
}

export function deleteGist(id) {
  return axios.delete(`${apiUrl}/gists/${id}`)
}

export function createGist() {
  return axios.post(`${apiUrl}/gists`, { description: 'Description of Gist', content: 'String content' })
}

export function starGist(id) {
  return axios.put(`${apiUrl}/gists/${id}/star`)
}

export function fetchStarGist(id) {
  return axios.get(`${apiUrl}/gists/${id}/star`)
    .then(response => console.log(response))
}
