// import React from 'react';

// const CompanyInfo = () => {
//   return(
//     <div>
//     <div className="card">
//     <div className="card-body">
//         <form>
//             <div className="form-group">
//                 <label for="inputCompanyName" className="bmd-label-floating">회사(상호)명</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="companyName" value="company_name" type="text" className="form-control" id="inputCompanyName" />
//             </div>
//             <div className="form-group">
//                 <label for="inputCeoName" className="bmd-label-floating">대표자</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="ceoName" value="ceo_name" type="text" className="form-control" id="inputCompanyName" />
//             </div>
//             <div className="form-group">
//                 <label for="inputComRN" className="bmd-label-floating">사업자등록번호</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="companyRN" value="company_registration_number" type="text" className="form-control" id="inputCompanyName"/>
//             </div>
//             <div className="form-group">
//                 <label for="inputLocation" className="bmd-label-floating">주소</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="location" value="location" type="text" className="form-control" id="inputLocation"/>
//             </div>
//             <div className="form-group">
//                 <label for="inputLocationEn" className="bmd-label-floating">영문 주소</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="locationEn" value="location_en" type="text" className="form-control" id="inputLocationEn"/>
//             </div>
//             <div className="form-group">
//                 <label for="inputHomepage" className="bmd-label-floating">홈페이지 주소</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="homepage" value="homepage_url" type="text" className="form-control" id="inputHomepage"/>
//             </div>
//             <div className="form-group">
//                 <label for="inputEmail" className="bmd-label-floating">이메일 주소</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="email" value="email" type="email" className="form-control" id="inputEmail"/>
//             </div>
//             <div className="form-group">
//                 <label for="inputTelNum" className="bmd-label-floating">전화번호</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="tel" value="tel" type="text" className="form-control" id="inputTelNum"/>
//             </div>
//             <div className="form-group">
//                 <label for="inputFaxNum" className="bmd-label-floating">Fax</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="fax" value="fax" type="text" className="form-control" id="inputFaxNum"/>
//             </div>
//             <div className="form-group">
//                 <label for="inputOther1" className="bmd-label-floating">기타 정보1</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="other1" value="other1" type="text" className="form-control" id="inputOther1"/>
//             </div>
//             <div className="form-group">
//                 <label for="inputOther2" className="bmd-label-floating">기타 정보2</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="other2" value="other2" type="text" className="form-control" id="inputOther2"/>
//             </div>
//             <div className="form-group">
//                 <label for="inputOther3" className="bmd-label-floating">기타 정보3</label>
//                 {/* {{ csrf_field() }} */}
//                 <input name="other3" value="other3" type="text" className="form-control" id="inputOther3" disabled />
//             </div>
//             <button type="submit" className="btn btn-primary btn-raised">Submit</button>
//         </form>
//     </div>
// </div>
// </div>
//   )
// }

// export default CompanyInfo;

import React, {Component} from 'react';
import { Spin, Space} from 'antd';

class CompanyInfo extends Component {
    state = {
        companyInfo : '',
        completed : 0
    }

    componentDidMount() {
        this.callApi()
        .then(res => this.setState({companyInfo:res[0], completed : 1}))
        .catch(err => console.log(err));
    }

    callApi = async() => {
        const response = await fetch('/api/companyinfo');
        const body = await response.json();
        console.log(body);
        return body;
    }

    render() {
        const comInfo = this.state.companyInfo;
        console.log(comInfo);
        return (
            <div className = "card">
            {this.state.completed ? 
                
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label for="inputCompanyName" className="bmd-label-floating">회사(상호)명</label>
                            {/* {comInfo.companyName} */}
                            <input name="companyName" value={comInfo.company_name} type="text" className="form-control" id="inputCompanyName" />
                        </div>
                        <div className="form-group">
                            <label for="inputCeoName" className="bmd-label-floating">대표자</label>
                            {/* {comInfo.ceoName} */}
                            <input name="ceoName" value={comInfo.ceoName} type="text" className="form-control" id="inputCompanyName" />
                        </div>
                        <div className="form-group">
                            <label for="inputComRN" className="bmd-label-floating">사업자등록번호</label>
                            {/* {comInfo.comRN} */}
                            <input name="companyRN" value={comInfo.comRN} type="text" className="form-control" id="inputCompanyName"/>
                        </div>
                        <div className="form-group">
                            <label for="inputLocation" className="bmd-label-floating">주소</label>
                            {/* {comInfo.location} */}
                            <input name="location" value={comInfo.location} type="text" className="form-control" id="inputLocation"/>
                        </div>
                        <div className="form-group">
                            <label for="inputLocationEn" className="bmd-label-floating">영문 주소</label>
                            {/* {comInfo.locationEn} */}
                            <input name="locationEn" value={comInfo.locationEn} type="text" className="form-control" id="inputLocationEn"/>
                        </div>
                        <div className="form-group">
                            <label for="inputHomepage" className="bmd-label-floating">홈페이지 주소</label>
                            {/* {comInfo.homepage} */}
                            <input name="homepage" value={comInfo.homepage} type="text" className="form-control" id="inputHomepage"/>
                        </div>
                        <div className="form-group">
                            <label for="inputEmail" className="bmd-label-floating">이메일 주소</label>
                            {/* {comInfo.email} */}
                            <input name="email" value={comInfo.email} type="email" className="form-control" id="inputEmail"/>
                        </div>
                        <div className="form-group">
                            <label for="inputTelNum" className="bmd-label-floating">전화번호</label>
                            {/* {comInfo.telNum} */}
                            <input name="tel" value={comInfo.telNum} type="text" className="form-control" id="inputTelNum"/>
                        </div>
                        <div className="form-group">
                            <label for="inputFaxNum" className="bmd-label-floating">Fax</label>
                            {/* {comInfo.fax} */}
                            <input name="fax" value={comInfo.fax} type="text" className="form-control" id="inputFaxNum"/>
                        </div>
                        <div className="form-group">
                            <label for="inputOther1" className="bmd-label-floating">기타 정보1</label>
                            {/* {comInfo.other1} */}
                            <input name="other1" value={comInfo.other1} type="text" className="form-control" id="inputOther1"/>
                        </div>
                        <div className="form-group">
                            <label for="inputOther2" className="bmd-label-floating">기타 정보2</label>
                            {/* {comInfo.other2} */}
                            <input name="other2" value={comInfo.other2}  type="text" className="form-control" id="inputOther2"/>
                        </div>
                        <div className="form-group">
                            <label for="inputOther3" className="bmd-label-floating">기타 정보3</label>
                            {/* {comInfo.other2} */}
                            <input name="other3" value={comInfo.other2} type="text" className="form-control" id="inputOther3" disabled />
                        </div>
                        <button type="submit" className="btn btn-primary btn-raised">Submit</button>
                    </form>
                </div>
              :
 <Space size="middle">
     <Spin />
     <Spin size="large" />
 </Space>
            }
                </div>

        )
    }
}

export default CompanyInfo;  