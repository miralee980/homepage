import React from 'react';

const News = () => {
  return(
<div>
<h1>뉴스 관리</h1>

{/* @if(Auth::user()->auth_level != 100)
홈페이지 관리자 등급만 수정 할 수 있습니다.
@else

@if (session('status'))
<div className="alert alert-success">
    {{ session('status') }}
</div>
@endif */}

<div className="row card">
    <div className="card-body">
        <h3>뉴스 목록</h3>
        <ul style={{listStyleType: "none"}}>
            {/* @foreach ($comNews as $news) */}
            <li>
                <form method="post" action="/admin/deleteNews">
                    <input className="newsId" name="id" type="hidden" value="{{$news->id}}" />
                    <div className="row" style={{textAlign: "center", margin:"auto"}}>
                        <div className="col-sm-2 form-group">
                            <img src="{{$news->image_url}}" style={{width:"50px", height:"50px"}} alt="url"/>
                        </div>
                        <div className="col-sm-2 form-group">
                            <label for="inputPubAt" className="bmd-label-floating">일짜</label>
                            test
                            <input name="pubAt" value="{{$news->pub_at}}" type="date" className="form-control"/>
                        </div>
                        <div className="col-sm-3 form-group">
                            <label for="inputTitle" className="bmd-label-floating">기사 제목</label>
                            test
                            <input name="title" value="{{$news->title}}" type="text" className="form-control"/>
                        </div>

                        <div className="col-sm-3 form-group">
                            <label for="inputLink" className="bmd-label-floating">기사 원문 URL</label>
                            test
                            <input name="link" value="{{$news->link}}" type="text" className="form-control"/>
                        </div>
                        <div className="col-sm-2" style={{margin:"auto"}}>
                            <button type="submit" className="btnNewsDelete btn btn-danger">삭제</button>
                            <button type="button" className="btnNewsModify btn btn-info">수정</button>
                        </div>
                    </div>
                </form>
            </li>
            {/* @endforeach  */}
        </ul>
    </div>
</div>

<br/>

<div id="newsChnagePannel" className="row card">
    <div className="card-body">
        <h3 id="pannelTitle">새 뉴스 등록</h3>
        <form id="newsPannelForm" method="post" action="/admin/addNews" enctype="multipart/form-data">
            <input id="inputNewsId" name="id" type="hidden"/>
            <div className="row">
                <div className="col-sm-3">
                    <div>
                        <img id="blah" style={{width:"200px", height:"200px"}} alt="blah"/>
                    </div>
                    <div className="form-group">
                        <label for="inputNewsImg" className="bmd-label-floating">이미지 URL</label>
                        test
                        <input name="newsImg" type="file" className="form-control" id="inputNewsImg"/>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="form-group">
                        <label for="inputPubAt" className="bmd-label-floating">일짜</label>
                        test
                        <input name="pubAt" type="date" className="form-control" id="inputPubAt"/>
                    </div>

                    <div className="form-group">
                        <label for="inputTitle" className="bmd-label-floating">기사 제목</label>
                        test
                        <input name="title" type="text" className="form-control" id="inputTitle"/>
                    </div>

                    <div className="form-group">
                        <label for="inputLink" className="bmd-label-floating">기사 원문 URL</label>
                        test
                        <input name="link" type="text" className="form-control" id="inputLink"/>
                    </div>
                </div>

            </div>
            <button type="submit" className="btn btn-primary btn-raised">등록</button>
        </form>
    </div>
</div>
</div>
)}

export default News;