import React from 'react';

const Login = () => {
        return(
<div className className="row card" style={{width : "18rem", margin:"auto"}}>
    <div className="card-body">
        <h3>로그인</h3>
        <form method="post" action="/admin/login">
            <div className="row">
                <div className="form-group" style={{margin:"auto"}}>
                    <label for="inputId" className="bmd-label-floating">계정(이메일)</label>
                    email
                    <input name="email" type="text" className="form-control" id="inputId"/>
                </div>
            </div>
            <div className="row">
                <div className="form-group"  style={{margin:"auto"}}>
                    <label for="inputPassword" className="bmd-label-floating">비밀번호</label>
                    password
                    <input name="password" type="password" className="form-control" id="inputPassword"/>
                </div>
            </div>
            <br />
            <div style={{textAlign:"center"}}>
                <button type="submit" className="btn btn-primary btn-raised">로그인</button>
            </div>

        </form>
    </div>
</div>

    )
}
export default Login;
