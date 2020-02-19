export default function () {
  let produtosLista;
  const lista = JSON.parse(localStorage.getItem('listaProdutos'));
  if (!lista) {
    produtosLista = [];
  } else if (lista.length > 0) {
    produtosLista = lista;
  } else {
    produtosLista = [];
  }
  return {
    produtosNaLista: produtosLista,
  };
}
