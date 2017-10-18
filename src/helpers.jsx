import axios from 'axios'

export function fetchGists() {
  const apiUrl = 'https://private-anon-dc77e86d57-awapp.apiary-mock.com/gists'
  axios.get(apiUrl)
    .then((response) => {
      // const { data: { _embedded: gists } } = response
      const gists = response.data._embedded.gists
      this.setState({ gists })
    })
}

export function fetchGist() {
  const { match: { params } } = this.props
  axios.get(`https://private-anon-dc77e86d57-awapp.apiary-mock.com/gists/${params.id}`)
    .then((response) => {
      const gist = response.data
      this.setState({ gist })
    })
}
