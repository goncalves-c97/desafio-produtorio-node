const express = require('express');
const router = express.Router();

router.post('/calculate/iterative', (req, res) => {
  const { m, n } = req.body;
  let resultado = calculateProdutorioByIterative(m, n);
  return res.json({ result: resultado });
});

router.post('/calculate/recursion', (req, res) => {
  const { m, n } = req.body;
  let resultado = calculateProdutorioByRecursion(m, n);
  return res.json({ result: resultado });
});

function calculateProdutorioByIterative(m, n) {   
  var produtorio = 1;

  for (var i = m; i <= n; i++)      
  {
      produtorio *= i + (1 / i);
  }

  return produtorio;
}

function calculateProdutorioByRecursion(m, n) {
  var produtorio = 1;
  if (m <= n)
      produtorio *= (m + (1 / m)) * calculateProdutorioByRecursion(++m, n);

  return produtorio;
}

module.exports = router;
