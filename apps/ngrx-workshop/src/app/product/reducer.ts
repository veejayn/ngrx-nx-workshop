import { Product } from '@ngrx-nx-workshop/api-interfaces';
import { data } from '@ngrx-nx-workshop/data';
import { Action, createReducer, on } from '@ngrx/store';
import * as productListActions from './product-list/actions';

interface ProductState {
  products: Product[];
}
const initState: ProductState = {
  products: data
};

const productsReducer = createReducer(
  initState,
  on(productListActions.productsOpened, state => ({
    products: [...data]
  }))
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productsReducer(state, action);
}



