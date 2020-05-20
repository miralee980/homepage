import React from 'react';

const History = () => {
  return(
<div>
<h1>연혁 정보</h1>

{/* 
@if(Auth::user()->auth_level != 100)
홈페이지 관리자 등급만 수정 할 수 있습니다.
@else */}

{/* @if (session('status'))
<div className="alert alert-success">
    {{ session('status') }}
</div>
@endif */}

<div className="row card">
    <div className="card-body">
        <h3>연혁 목록</h3>
        <ul>
            {/* @foreach ($comHistory as $history) */}
            <li>
                <form method="post" action="/admin/updateHistory">
                    <input name="id" type="hidden" value="history" />
                    <div className="row">
                        <div className="col-sm-2 form-group">
                            <label for="inputDidAt" className="bmd-label-floating">일짜</label>
                            test
                            <input name="didAt" value="history" type="date" className="form-control" id="inputDidAt"/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label for="inputDesc" className="bmd-label-floating">내용</label>
                            test
                            <input name="desc" value="history" type="text" className="form-control" id="inputDesc"/>
                        </div>
                        <div className="col-sm-2 form-group">
                            <label for="inputType" className="bmd-label-floating">특징</label>
                            test
                            <input name="type" value="history" type="text" className="form-control" id="inputType"/>
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btnHistoryDelete btn btn-danger">삭제</button>
                            <button type="submit" className="btnHistoryModify btn btn-info">수정</button>
                        </div>
                    </div>
                </form>
            </li>
            {/* @endforeach */}
        </ul>
    </div>
</div>

<br />

<div className="row card">
    <div className="card-body">
        <h3>새 연혁 등록</h3>
        <form method="post" action="/admin/addHistory">
            <div className="row">
                <div className="col-sm-2 form-group">
                    <label for="inputDidAt" className="bmd-label-floating">일짜</label>
                    test
                    <input name="didAt" type="date" className="form-control" id="inputDidAt"/>
                </div>
                <div className="col-sm-6 form-group">
                    <label for="inputDesc" className="bmd-label-floating">내용</label>
                    test
                    <input name="desc" type="text" className="form-control" id="inputDesc"/>
                </div>
                <div className="col-sm-2 form-group">
                    <label for="inputType" className="bmd-label-floating">특징</label>
                    test
                    <input name="type" type="text" className="form-control" id="inputType"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-raised">등록</button>
        </form>
    </div>
</div>
</div>
)}

export default History;