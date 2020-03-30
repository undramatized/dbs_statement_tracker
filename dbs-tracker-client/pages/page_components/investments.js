import MyResponsiveLine from '../../chart_components/linechart';

const Investments = ({ data }) => (
  <div style={{height:"40vh"}}>
    <h2>Price of asset</h2>
    <MyResponsiveLine data={data.priceData}/>
    <h2>Invested Amount vs Investment Value</h2>
    <MyResponsiveLine data={data.investmentData}/>
  </div>
)

export default Investments
