import React from 'react';
import {Link} from 'react-router-dom';
// import Logo from './Logo';

// function Header(backgroundColor2) {
class Header extends React.Component {
  constructor(props) {
    super(props);	
    this.state = {
      color : "transparent"
    };
  console.log(props.color);
  } 

componentWillReceiveProps = nextProps => {
  console.log(nextProps.color);
  if (nextProps.color !== this.state.color) {
    this.setState({
      color: nextProps.color
    });
  }
};


  static getDerivedStateFromPrps = (nextProps, prevState) => {
    console.log("getDerivedStateFromPrps");
    console.log(nextProps.color);
    console.log(prevState.color)
    if(nextProps.color !== prevState.color){
      console.log("change");
      return {color: nextProps.color};
    }
    return null;
  }


  // let headerStyle = {backgroundColor: 'transparent'};
  // console.log(backgroundColor2);

  // if(backgroundColor2 == 'gray'){
  // headerStyle = {backgroundColor: 'gray'};
  // }
  // else{
  //   headerStyle = {backgroundColor: 'transparent'};
  //   console.log("test2" + backgroundColor2);
  // }
  render() {
    return (
      // <header classNameName={`app_header ${ backgroundStyleName }`}>
      // <header classNameName="app_header" style={{backgroundColor: `${this.state.color}`}}>
      //   <section classNameName="header_logo">
      //     <Logo src='assets/images/quantec_logo.png' />
      //   </section>
      //   <section classNameName="header_menu">
      //     <ul classNameName="menu_list">
      //       <li>
      //         <Link to="/company">회사소개</Link>
      //       </li>
      //       <li>
      //         <Link to="/career">인재채용</Link>
      //       </li>
      //       <li>
      //         <Link to="/prcenter">홍보센터</Link>
      //       </li>
      //     </ul>
      //   </section>
      //   <section classNameName="header_sns">
      //     <ul classNameName="sns_list">
      //       <li>
      //         <a href="https://www.facebook.com/quantec.investment/" target='_blank' rel="noopener noreferrer"><span>f</span></a>
      //       </li>
      //       <li>
      //         <a href="https://m.post.naver.com/my.nhn?memberNo=44351505" target='_blank' rel="noopener noreferrer"> <span>blog</span></a>
      //       </li>
      //       <li>
      //         <a href="https://m.post.naver.com/my.nhn?memberNo=44351505" target='_blank' rel="noopener noreferrer"> <span>talk</span></a>
      //       </li>
      //       <li>
      //         <a href="https://m.post.naver.com/my.nhn?memberNo=44351505" target='_blank' rel="noopener noreferrer"> <span>in</span></a>
      //       </li>
      //     </ul>
      //   </section>
      //   <section classNameName="header_icon">
      //     <Logo src='assets/images/quantec_logo.png' />
      //   </section>
      // </header>
      // Basic Header
    <header className="header">
        <div className="header_inner">    

            {/* <!-- 로고 아이콘 영역 --> */}
            <div className="header_logo">
                <Link to="/">
                    <img src={require("assets/images/logo-header-q-white.svg")} alt="logo" />
                    {/* <!-- 스크롤 시 로고 이미지(파란색 Q) --> */}
                    <img src={require("assets/images/logo-header-q-blue.svg")} alt="logo" className="off" />
                </Link>
            </div>

            {/* <!-- PC Header --> 
            <!-- PC 메뉴 영역 --> */}
            <div className="pc_gnb">
                <ul className="pc_gnb_list">
                    <li className="pc_gnb_item">
                      <Link to="/company" className="pc_gnb_txt">회사소개</Link>
                    </li>
                    <li className="pc_gnb_item">
                      <Link to="/career" className="pc_gnb_txt">인재채용</Link>
                    </li>
                    <li className="pc_gnb_item">
                      <Link to="/prcenter" className="pc_gnb_txt">홍보센터</Link>
                    </li>
                </ul>
            </div>

            {/* <!-- PC SNS 영역--> */}
            <div className="pc_sns">
                <ul className="pc_sns_list">
                    <li className="pc_sns_item">
                        <a href="https://www.facebook.com/quantec.investment/" target='_blank' rel="noopener noreferrer">
                            <img src={require("assets/images/ic-header-facebook-white.svg")} alt="facebook" />
                            {/* <!-- 스크롤 시 sns 이미지(검은색) --> */}
                            <img src={require("assets/images/ic-header-facebook-black.svg")} alt="facebook" className="off" />
                        </a>
                    </li>
                    <li className="pc_sns_item">
                        <a href="https://m.post.naver.com/my.nhn?memberNo=44351505" target='_blank' rel="noopener noreferrer">
                            <img src={require("assets/images/ic-header-blog-white.svg")} alt="blog" />
                            {/* <!-- 스크롤 시 sns 이미지(검은색) --> */}
                            <img src={require("assets/images/ic-header-blog-black.svg")} alt="blog" className="off" />
                        </a>
                    </li>
                    <li className="pc_sns_item">
                        <a href="https://m.post.naver.com/my.nhn?memberNo=44351505" target='_blank' rel="noopener noreferrer">
                            <img src={require("assets/images/ic-header-kakao-white.svg")} alt="kakao" />
                            {/* <!-- 스크롤 시 sns 이미지(검은색) --> */}
                            <img src={require("assets/images/ic-header-kakao-black.svg")} alt="kakao" className="off" />
                        </a>
                    </li>
                    <li className="pc_sns_item">
                        <a href="https://m.post.naver.com/my.nhn?memberNo=44351505" target='_blank' rel="noopener noreferrer">
                            <img src={require("assets/images/ic-header-linkedin-white.svg")} alt="linkedin" />
                            {/* <!-- 스크롤 시 sns 이미지(검은색) --> */}
                            <img src={require("assets/images/ic-header-linkedin-black.svg")} alt="linkedin" className="off" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* <!-- //PC Header -->

            <!-- Mobile Menu -->
            <!-- 모바일 메뉴 아이콘 영역 --> */}
            <div className="mobile_menu">
                <a href="m_header_open.html">
                    <img src={require("assets/images/ic-header-menu-white.svg")} alt="menu" />
                    {/* <!-- 스크롤 시 모바일 메뉴 이미지(검은색) --> */}
                    <img src={require("assets/images/ic-header-menu-black.svg")} alt="menu" className="off" />
                </a>
            </div>

        </div>

    </header>
    );
  }
}

export default Header;
