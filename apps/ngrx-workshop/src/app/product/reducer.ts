import { Product } from '@ngrx-nx-workshop/api-interfaces';
import { data } from '@ngrx-nx-workshop/data';
import { Action } from 'rxjs/internal/scheduler/Action';

interface ProductState {
  products: Product[];
}
const initState: ProductState = {
  products: data
};

export function reducer(
  state: ProductState = initState,
  action: Action
): ProductState {
  return state;
}

