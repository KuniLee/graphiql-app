import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { docsReducer } from '@/modules/Documentation';
import { GraphiQlReducer } from '@/modules/GraphiQl';

const rootReducer = combineReducers({
  docs: docsReducer,
  graphiQl: GraphiQlReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
    devTools: import.meta.env.DEV,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
