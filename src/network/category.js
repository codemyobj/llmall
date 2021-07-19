export function getCategory() {
  return axios({
    url: '/category'
  }).catch(err => err)
}

export function getSubcategory(maitKey) {
  return axios({
    url: '/subcategory',
    params: {
      maitKey
    }
  }).catch(err => err)
}