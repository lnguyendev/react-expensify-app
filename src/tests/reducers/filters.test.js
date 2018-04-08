import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set up sort by to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set up sort by to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Rent' });
    expect(state.text).toBe('Rent');
});

test('should set start date filter', () => {
    const startDate = moment();
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toEqual(startDate);
});

test('should set end date filter', () => {
    const endDate = moment();
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate: endDate });
    expect(state.endDate).toEqual(endDate);
});
