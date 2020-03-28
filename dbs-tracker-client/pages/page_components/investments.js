import MyResponsiveLine from '../../chart_components/linechart';

const Investments = ({ data }) => (
  <div style={{height:"500px"}}>
    <MyResponsiveLine data={data.priceData}/>
  </div>
)

export default Investments
