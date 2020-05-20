import React from 'react';
// import {Link} from 'react-router-dom';
const UserInfo = () => {
return (
  <div>
<h1>사용자 관리</h1>
{/* // @if (session('status'))
// <div className="alert alert-success">
//     <span id="status">{{ session('status') }}</span>
// </div>
// @endif */}

<div className="row card">
    <div className="card-body">
        <h3>사용자 목록</h3>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">프로필</th>
                    <th scope="col">성명</th>
                    <th scope="col">계정(E-mail)</th>
                    <th scope="col">부서</th>
                    <th scope="col">직위</th>
                    <th scope="col">모토</th>
                    <th scope="col">권한 등급</th>
                    <th scope="col">화면표시순서</th>
                    <th scope="col">정보 수정</th>
                </tr>
            </thead>
            <tbody>
                
                {/* @foreach ($users as $user) */}
                <tr>
                    <input className="userId" name="id" type="hidden" value="id" />
                    <td scope="row"><img src="assets/images/quantec_logo.png" style={{width:"50px", height:"50px"}}/></td>
                    <td>name</td>
                    <td>email</td>
                    <td>job_dept</td>
                    <td>job_position</td>
                    <td>motto</td>
                    <td>auth_level</td>
                    {/* @if(Auth::user()->auth_level == 100)     */}
                    <td>
                        <span className="showIndex">show_index</span>
                        <button type="button" className="btnUpShowIndex btn">▲</button>
                        <button type="button" className="btnDownShowIndex btn">▼</button>
                    </td>
                    <td>
                        <button type="submit" className="btnUserDelete btn btn-danger">삭제</button>
                        <button type="button" className="btnUserModify btn btn-info">수정</button>
                    </td>
                    {/* @else
                    <td>
                        <span className="showIndex">show_index</span>
                    </td>
                    <td>
                        <button type="button" className="btnUserModify btn btn-info">수정</button>
                    </td>
                    @endif */}
                </tr>
                {/* @endforeach */}
            </tbody>
        </table>
    </div>
</div>

<br />

<div id="userModifyPannel" className="row card">
    <div className="card-body">
        <h3>사용자 정보 수정</h3>
        <form method="post" action="/admin/updateUser" enctype="multipart/form-data">
            <input id="inputUserId" name="id" type="hidden"/>
            <div className="row">
                <div className="col-sm-2">
                    프로필
                    <div className="form-group">
                        <label for="inputProfileImg" className="bmd-label-floating">사진</label>
                        test
                        <input name="profile_img" type="file" className="form-control" id="inputProfileImg" />
                        {/* <!-- <label className="custom-file-label" for="inputProfileImg">파일 선택</label> --> */}
                    </div>
                    <div>
                        <img id="blah" style={{width:"50px", height:"50px"}} />
                    </div>
                </div>
                <div className="col-sm-4">
                    기본정보
                    <div className="form-group">
                        <label for="inputName" className="bmd-label-floating">이름</label>
                        test
                        <input name="name" type="text" className="form-control" id="inputName"/>
                    </div>
                    <div className="form-group">
                        <label for="inputId" className="bmd-label-floating">계정(이메일)</label>
                        test
                        <input name="email" type="text" className="form-control" id="inputId"/>
                    </div>
                    <div className="form-group">
                        <label id="mottoLabel" for="inputMotto" className="bmd-label-floating">모토</label>
                        test
                        <input name="motto" type="text" className="form-control" id="inputMotto"/>
                    </div>
                    {/* @if(Auth::user()->auth_level == 100)    
                    <div className="form-group">
                        <label for="inputPwd" className="bmd-label-floating">비밀번호</label>
                        test
                        <input id="inputChangePwd" name="password" value="" type="text" className="form-control" id="inputPwd" disabled>
                        <button id="btnChangePwd" type="button" className="btn btn-danger">비밀번호 수정(주의)</button>
                    </div>
                    @endif */}
                </div>
                <div className="col-sm-4">
                    직책정보
                    {/* @if(Auth::user()->auth_level == 100)    
                    <div className="form-group">
                        <label for="inputAuth" className="bmd-label-floating">권한</label>
                        {{ csrf_field() }}
                        <input name="auth_level" type="text" className="form-control" id="inputAuth"/>
                    </div>
                    @endif */}
                    <div className="form-group">
                        <label for="inputDept" className="bmd-label-floating">소속</label>
                        test
                        <input name="job_dept" type="text" className="form-control" id="inputDept"/>
                    </div>
                    <div className="form-group">
                        <label for="inputPosition" className="bmd-label-floating">직책</label>
                        test
                        <input name="job_position" type="text" className="form-control" id="inputPosition"/>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-info btn-raised">수정</button>
            <button type="reset" className="btn btn-success btn-raised">취소</button>
        </form>
    </div>
</div>
</div>
)}

export default UserInfo;