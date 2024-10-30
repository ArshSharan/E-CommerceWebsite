const FAKESTORE_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = () => {
  return fetch(FAKESTORE_URL).then(response => response.json());
};

export const fetchProductById = (id) => {
  return fetch(`${FAKESTORE_URL}/${id}`).then(response => response.json());
};
