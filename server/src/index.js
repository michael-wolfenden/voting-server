import makeStore from './app/store';
import startServer from './app/server';
import entries from './entries.json';

export const store = makeStore();
startServer(store);

store.dispatch({
    type: 'SET_ENTRIES',
    entries
});

store.dispatch({ type: 'NEXT' });