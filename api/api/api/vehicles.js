const data = [
  { vin: "1C4RJFBG5JC123456", year: 2021, make: "Dodge", model: "Durango", price: 32995, miles: 41230 },
  { vin: "2C3CDZBT1KH654321", year: 2019, make: "Dodge", model: "Challenger R/T", price: 27995, miles: 51210 },
  { vin: "1C6SRFJT8MN765432", year: 2021, make: "Ram", model: "1500 Laramie", price: 39995, miles: 35210 }
];

export default function handler(req, res) {
  const { q } = req.query;
  const list = q
    ? data.filter(v => Object.values(v).some(val => String(val).toLowerCase().includes(String(q).toLowerCase())))
    : data;
  res.status(200).json({ vehicles: list });
}
