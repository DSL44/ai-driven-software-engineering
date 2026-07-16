// Gerado com prompt de IA do github copilot
// Crie uma função em JavaScript chamada calculateShipping que receba o peso e a distância. O frete deve custar R$15 fixos mais R$3 por kg e R$0,08 por km.

function calculateShipping(weightInKg, distanceInKm) {
  const fixedCost = 15.0;
  const costPerKg = 3.0;
  const costPerKm = 0.08;

  const total = fixedCost + weightInKg * costPerKg + distanceInKm * costPerKm;
  return Number(total.toFixed(2));
}

module.exports = calculateShipping;