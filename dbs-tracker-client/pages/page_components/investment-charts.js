import MyResponsiveLine from '../../chart_components/linechart';
import { Box } from "@chakra-ui/core";

const InvestmentCharts = ({ data }) => (
  <Box w='100%'>
    <Box h='40vh'>
      <h2>Price of asset</h2>
      <MyResponsiveLine data={data.priceData}/>
    </Box>
    <Box h='40vh' marginTop={5}>
      <h2>Invested Amount vs Investment Value</h2>
      <MyResponsiveLine data={data.investmentData}/>
    </Box>
  </Box>
)

export default InvestmentCharts
