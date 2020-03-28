import MyResponsiveLine from '../../chart_components/linechart';

const Investments = ({ data }) => (
  <div style={{height:"500px"}}>
    <h1>Investments Data</h1>
    <MyResponsiveLine data={data}/>
  </div>
)

export default Investments
