function capitalizar(texto) {
  if (!texto) return '';
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function filtroAlergenos(receitas, alergenos) {
  let resultado = [];
  for (let r of receitas) {
    let temAlergeno = false;
    for (let i of r.ingredientes) {
      if (alergenos.includes(i)) {
        temAlergeno = true;
      }
    }
    if (!temAlergeno) {
      resultado.push({
        nome: capitalizar(r.nome),
        categoria: capitalizar(r.categoria),
        ingredientes: r.ingredientes
      });
    }
  }
  return resultado;
}

module.exports = { filtroAlergenos };