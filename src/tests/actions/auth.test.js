import { login, logout } from '../../actions/auth';

test('should login', () => {
    const action = login('123456');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123456'
    });
});

test('should logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
