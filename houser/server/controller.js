module.exports = {
  houses: (req,res,next) => {
    houses.push(house)
    res.status(200).send(houses)
  },
  houseinfo: (req,res,next) => {
    const {name, address, city, state, zipcode } = req.body;
    res.status(200).send(req.body)
  },
  delete: (req,res) => {
    houses.splice(i, 1)
    res.status(200).send(houses)
  }
}