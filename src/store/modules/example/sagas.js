import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requesicao = () =>
  // eslint-disable-next-line no-new, no-unused-vars
  new Promise((resolve) => {
    toast.warning('A realizar requesição');
    setTimeout(() => {
      resolve();
    }, 4000);
  });

function* exampleRequest() {
  try {
    yield call(requesicao);
    toast.success('Requesição realizada !');
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error('Ocorreu um erro !');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
