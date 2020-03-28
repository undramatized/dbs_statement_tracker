function getPriceData(data) {
  let priceData = data.map(x => {
    let priceInfo = {
      x: x.datetime,
      y: x.current_price
    }
    return priceInfo
  })
  return {id: "asset_price", data:priceData}
}


export default (req, res) => {
  const invData = require('../../../data/investment_data.json')
  const priceData = getPriceData(invData)

  let allData = {
    priceData: [priceData]
  }

  res.status(200).json(allData)
}
