import MyResponsiveLine from '../../chart_components/linechart';

const Investments = ({ data }) => (
  <div style={{height:"500px"}}>
    <MyResponsiveLine data={data.priceData}/>
    <MyResponsiveLine data={data.investmentData}/>
  </div>
)

export default Investments
