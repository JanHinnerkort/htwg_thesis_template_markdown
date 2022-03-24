import { atom, selector } from "recoil";
import _ from 'lodash';

const initialFilter = {
    byDone: false,
    byDate: '',
    byAlphabet: false,
}

export const filterState = atom({
    key: 'filter',
    default: initialFilter,
})

export const transformedTodos = selector({
    key: 'transformedTodos',
    get: ({ get }) => {
        const todos = get(todoState);
        const filter = get(filterState);

        let sTodos: Todo[] = todos;
        if (filter.byDone) {
            sTodos = todos.filter((todo) => (!todo.done))
        } 

        if (filter.byAlphabet) {            
            return _.sortBy(sTodos, (o) => o.description.toLocaleLowerCase())
        } 

        if (filter.byDate === 'OLD_TO_NEW') {
            return _.orderBy(sTodos, (o) => o.creationDate, ['asc'])
        }

        if (filter.byDate === 'NEW_TO_OLD') {
            return _.orderBy(sTodos, (o) => o.creationDate, ['desc'])
        }

        return sTodos;
    }
})