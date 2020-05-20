import React from 'react';

const Register = () => {
        return(

// @if (session('status'))
// <div className="alert alert-success">
//     {{ session('status') }}
// </div>
// @endif

<div className="row card">
    <div className="card-body">
        <h3>사용자 등록</h3>
        <form method="post" action="/admin/register">
            <div className="row">
                <div className="col-sm-6">
                    기본정보
                    <div className="form-group">
                        <label for="inputName" className="bmd-label-floating">이름</label>
                        이름
                        <input name="name" type="text" className="form-control" id="inputName"/>
                    </div>
                    <div className="form-group">
                        <label for="inputId" className="bmd-label-floating">계정(이메일)</label>
                        계정(이메일)
                        <input name="email" type="text" className="form-control" id="inputId"/>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword" className="bmd-label-floating">비밀번호</label>
                        비밀번호
                        <input name="password" type="password" className="form-control" id="inputPassword"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    직책정보
                    <div className="form-group">
                        <label for="inputDept" className="bmd-label-floating">소속</label>
                        소속
                        <input name="jobDept" type="text" className="form-control" id="inputDept"/>
                    </div>
                    <div className="form-group">
                        <label for="inputPosition" className="bmd-label-floating">직책</label>
                        직책
                        <input name="jobPosition" type="text" className="form-control" id="inputPosition"/>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-success btn-raised">등록</button>
        </form>
    </div>
</div>
)}
export default Register;