import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout-box">
            <h1 className="box-layout-title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchtoProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchtoProps)(LoginPage);
