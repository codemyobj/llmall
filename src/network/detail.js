export function getProductDetail(iid) {
  return axios({
    url: '/detail',
    params: {
      iid
    }
  }).catch(err => err)
}

// 推荐区域

// 商品详情类
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.lowNowPrice = itemInfo.lowNowPrice
    this.highNowPrice = itemInfo.highNowPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}