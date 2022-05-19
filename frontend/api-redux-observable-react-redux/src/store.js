import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { search } from './epics/search';
import formSlice from './features/form';
import listSlice from './features/list';

const epicMiddleware = createEpicMiddleware();

export const rootEpic = combineEpics(
    search,
  );

export const store = configureStore({
  reducer: {
    form: formSlice,
    list: listSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);