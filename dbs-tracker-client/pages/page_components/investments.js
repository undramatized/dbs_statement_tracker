import MyResponsiveLine from '../../chart_components/linechart';
import { Box } from "@chakra-ui/core";

const Investments = ({ data }) => (
  <Box>
    <Box h='40vh'>
      <h2>Price of asset</h2>
      <MyResponsiveLine data={data.priceData}/>
    </Box>
    <Box h='40vh'>
      <h2>Invested Amount vs Investment Value</h2>
      <MyResponsiveLine data={data.investmentData}/>
    </Box>
  </Box>
)

export default Investments
