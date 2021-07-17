export function getProductDetail(iid) {
  return axios({
    url: '/detail',
    params: {
      iid
    }
  }).catch(err => err)
}