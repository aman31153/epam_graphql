import { createReducer, on } from '@ngrx/store';
import { speciicRoute } from './route.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(speciicRoute, (state) => state),
);