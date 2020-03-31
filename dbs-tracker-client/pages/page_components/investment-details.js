import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Stack
} from "@chakra-ui/core";

function getTotalValueChange(data) {
  let initialVal = Number(data[0].y)
  let currentVal = Number(data[data.length -1].y)
  return [currentVal, ((currentVal - initialVal)/initialVal)*100]
}

function getETFPriceChange(data) {
  let initialPrice = Number(data[0].y)
  let currentPrice = Number(data[data.length -1].y)
  return [currentPrice, ((currentPrice - initialPrice)/initialPrice)*100]
}

function getTotalAmount(data) {
  let currentAmount = Number(data[data.length -1].y)
  return [currentAmount]
}

function getTotalReturnsChange(invValue, invAmt) {
  let returns = invValue - invAmt
  let returnsPercentage = (returns/invAmt)*100
  return [returns, returnsPercentage]
}

function getArrow(value) {
  if (value>=0) {
    return "increase"
  } else {
    return "decrease"
  }
}

const InvestmentDetails = ({ data }) => {
  let stockValues = getETFPriceChange(data.priceData[0].data)
  let invValues = getTotalValueChange(data.investmentData[1].data)
  let invAmt = getTotalAmount(data.investmentData[0].data)
  let invReturns = getTotalReturnsChange(invValues[0], invAmt)
  return (
    <Box w='100%'>
      <Stack spacing={8}>
        <Stat>
          <StatLabel fontSize="2xl">Total Returns</StatLabel>
          <StatNumber fontSize="4xl">S$ {invReturns[0].toFixed(2)}</StatNumber>
          <StatHelpText>
            <StatArrow type={getArrow(invReturns[1])} />
            {invReturns[1].toFixed(2)}%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Total Inv Value</StatLabel>
          <StatNumber>S$ {invValues[0]}</StatNumber>
          <StatHelpText>
            Total Value of Investment
          </StatHelpText>
          <StatHelpText>
            <StatArrow type={getArrow(invValues[1])}/>
            {invValues[1].toFixed(2)}%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Total Inv Amount</StatLabel>
          <StatNumber>S$ {invAmt[0].toFixed(2)}</StatNumber>
          <StatHelpText>
            Total Amount Invested
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>ETF Price</StatLabel>
          <StatNumber>S$ {stockValues[0].toFixed(2)}</StatNumber>
          <StatHelpText>
            <StatArrow type={getArrow(stockValues[1])} />
            {stockValues[1].toFixed(2)}%
          </StatHelpText>
        </Stat>


      </Stack>

    </Box>

  )
}

export default InvestmentDetails
