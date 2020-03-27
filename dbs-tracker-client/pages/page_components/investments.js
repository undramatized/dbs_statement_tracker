import MyResponsiveLine from '../../chart_components/linechart';

class Investments extends React.Component {

  render() {
    const data = require('../../data/sample_data.json')
    const sample_data=[
      {
        "id": "japan",
        "color": "hsl(188, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 263
          },
          {
            "x": "helicopter",
            "y": 53
          },
          {
            "x": "boat",
            "y": 187
          },
          {
            "x": "train",
            "y": 180
          },
          {
            "x": "subway",
            "y": 44
          },
          {
            "x": "bus",
            "y": 238
          },
          {
            "x": "car",
            "y": 300
          },
          {
            "x": "moto",
            "y": 279
          },
          {
            "x": "bicycle",
            "y": 198
          },
          {
            "x": "horse",
            "y": 174
          },
          {
            "x": "skateboard",
            "y": 224
          },
          {
            "x": "others",
            "y": 107
          }
        ]
      }
    ]
    return (
      <div style={{height:"500px"}}>
        <h1>Investments Data</h1>
        <MyResponsiveLine data={data}/>
      </div>
    )
  }
}



export default Investments
