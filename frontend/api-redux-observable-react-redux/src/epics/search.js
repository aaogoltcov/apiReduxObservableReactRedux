import { ofType } from 'redux-observable';
import { tap, map, switchMap, retry, catchError, filter, debounceTime } from 'rxjs/operators';
import { setFormLoading } from '../features/form';
import { setList, clearList } from '../features/list';
import { store } from '../store';
import { ajax } from 'rxjs/ajax';

export const search = (action$, state$) => action$.pipe(
    ofType('form/setInput'),
    filter(action => action.payload !== ''),
    map(action => new URLSearchParams({ q: action.payload })),
    debounceTime(100),
    tap(() => {
        store.dispatch(clearList());
        store.dispatch(setFormLoading(true));
    }),
    switchMap(searchString => ajax.getJSON(`http://localhost:7070/api/search?${searchString}`)
        .pipe(
            retry(10),
            map(searchResult => store.dispatch(setList(searchResult))),
            tap(() => store.dispatch(setFormLoading(false))),
            catchError(error => console.log(error)),
        )),
)