
export default (req, res) => {
  const data = require('../../../data/sample_data.json')
  res.status(200).json(data)
}
