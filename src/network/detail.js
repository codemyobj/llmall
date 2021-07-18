export function getProductDetail(iid) {
  return axios({
    url: '/detail',
    params: {
      iid
    }
  }).catch(err => err)
}

// 推荐区域
export function getRecommend() {
  return axios({
    url: '/recommend'
  }).catch(err => err)
}

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

// 店铺信息类
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

// 参数信息类
export class GoodsParams {
  constructor(info, rule) {
    //image 可能没有值
    this.image = info.image ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}