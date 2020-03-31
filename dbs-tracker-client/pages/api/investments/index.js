function getPriceData(data) {
  let priceData = data.map(x => {
    let priceDetail = {
      x: x.datetime,
      y: x.current_price
    }
    return priceDetail
  })
  return {id: "asset_price", data:priceData}
}

function getInvestedAmountData(data) {
  let initial = 100
  let investedAmt = data.map(x => {
    initial = initial + parseInt(x.inv_amount)
    let investedAmtDetail = {
      x: x.datetime,
      y: initial
    }
    return investedAmtDetail
  })
  return {id: "invested_amount", data:investedAmt}
}

function getInvestmentValueData(data) {
  let investmentValue = data.map(x =>{
    let invValueDetail = {
      x: x.datetime,
      y: x.total_value.replace(",","")
    }
    return invValueDetail
  })
  return {id: "investment_value", data:investmentValue}
}


export default (req, res) => {
  const invData = require('../../../data/investment_data.json')
  const priceData = getPriceData(invData)
  const investmentValue = getInvestmentValueData(invData)
  const investmentAmt = getInvestedAmountData(invData)

  let allData = {
    priceData: [priceData],
    investmentData: [investmentAmt, investmentValue]
  }

  res.status(200).json(allData)
}
