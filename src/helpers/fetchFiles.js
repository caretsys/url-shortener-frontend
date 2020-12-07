import axios from 'axios'

export const fetchLink = async function (url) {
  const homepage = 'https://sh.caretsys.tech/get-url'
  const {
    data: { short_url },
  } = await axios.get(homepage, { params: { url } })
  return short_url
}
