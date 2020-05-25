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
        const response = await fetch('/company/companyinfo');
        const body = await response.json();
        console.log(body);
        return body;
    }

    saveApi = async(companyInfo) => {
        const requestOptions = {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({companyInfo})
        };
        fetch('/company/updateCompanyInfo', requestOptions)
        .then(response => response.json())
        .then(data => console.log("Save!!!"))
    }

    handleChange = (event) => {
        let nextState = this.state.companyInfo;
        nextState[event.target.name] = event.target.value;
        this.setState({companyInfo : nextState})
    }

    handleSubmit = (event) => {
        console.log(this.state);
        this.saveApi(this.state.companyInfo);
        //alert('A name was submitted : ' + this.state);
        event.preventDefault();
    }

    render() {
        const comInfo = this.state.companyInfo;
        console.log(comInfo);
        return (
            <div className = "card">
            {this.state.completed ? 
                
                <div className="card-body">
                    <form onSubmit = {this.handleSubmit}>
                        <div className="form-group">
                            <label for="company_name" className="bmd-label-floating">회사(상호)명</label>
                            <input name="company_name" value={comInfo.company_name} type="text" className="form-control" id="company_name" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="ceo_name" className="bmd-label-floating">대표자</label>
                            <input name="ceo_name" value={comInfo.ceo_name} type="text" className="form-control" id="ceo_name" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="company_registration_number" className="bmd-label-floating">사업자등록번호</label>
                            <input name="company_registration_number" value={comInfo.company_registration_number} type="text" className="form-control" id="company_registration_number" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="location" className="bmd-label-floating">주소</label>
                            <input name="location" value={comInfo.location} type="text" className="form-control" id="location" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="location_en" className="bmd-label-floating">영문 주소</label>
                            <input name="location_en" value={comInfo.location_en} type="text" className="form-control" id="location_en" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="homepage_url" className="bmd-label-floating">홈페이지 주소</label>
                            <input name="homepage_url" value={comInfo.homepage_url} type="text" className="form-control" id="homepage_url" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="email" className="bmd-label-floating">이메일 주소</label>
                            <input name="email" value={comInfo.email} type="email" className="form-control" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="tel" className="bmd-label-floating">전화번호</label>
                            <input name="tel" value={comInfo.tel} type="text" className="form-control" id="tel" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="fax" className="bmd-label-floating">Fax</label>
                            <input name="fax" value={comInfo.fax} type="text" className="form-control" id="fax" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="other1" className="bmd-label-floating">기타 정보1</label>
                            <input name="other1" value={comInfo.other1} type="text" className="form-control" id="other1" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="other2" className="bmd-label-floating">기타 정보2</label>
                            <input name="other2" value={comInfo.other2}  type="text" className="form-control" id="other2" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="other3" className="bmd-label-floating">기타 정보3</label>
                            <input name="other3" value={comInfo.other2} type="text" className="form-control" id="other3" disabled  onChange={this.handleChange}/>
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