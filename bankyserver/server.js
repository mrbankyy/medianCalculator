const express = require("express");
const app = express();

const medianPrime  = require("./medianPrime");
console.log("here here")

app.use(express.json());

app.get('/medianPrime', (req, res) => {
  const n = parseInt(req.query.n);
  const { median, prime } = medianPrime(n);
  res.send({ median, prime });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
