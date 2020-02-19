export const ADD_PRODUTO_LISTA = (state, value) => {
  state.produtosNaLista.unshift({ id: state.produtosNaLista.length, nome: value, checked: false });
  localStorage.setItem('listaProdutos', JSON.stringify(state.produtosNaLista));
};


export const CHECK_PRODUTO = (state, value) => {
  const position = state.produtosNaLista.findIndex((x) => x.id === value);
  const produto = {
    id: state.produtosNaLista[position].id,
    nome: state.produtosNaLista[position].nome,
    checked: true,
  };
  state.produtosNaLista.splice(position, 1);
  state.produtosNaLista.push(produto);
  localStorage.setItem('listaProdutos', JSON.stringify(state.produtosNaLista));
};

export const CLEAR_LISTA = (state) => {
  state.produtosNaLista = [];
  localStorage.clear('listaProdutos');
};
