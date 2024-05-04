import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
// import persistReducer from 'redux-persist/es/persistReducer';

export default (reducer) => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-BASE',
      storage,
      whitelist: ['example'],
    },
    reducer
  );

  return persistedReducers;
};
