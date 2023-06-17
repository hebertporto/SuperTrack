import { Middleware } from 'redux';

// if we want to log the shape of the state, we can use the following:
//  (store) => (next) => (action) => {
//    console.debug('-------');
//    console.debug('STATE:', store.getState());

const loggerMiddleware: Middleware = () => next => action => {
  console.debug('-------');
  console.debug('ACTION:', action.type);
  console.debug('PAYLOAD: ', action.payload);
  console.debug('-------');

  const result = next(action);

  return result;
};

export { loggerMiddleware };
