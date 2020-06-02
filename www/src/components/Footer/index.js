import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer_info">
        <span className="footer_txt">상호 콴텍(주)</span>
        <span className="footer_txt">대표 이상근</span>
        <span className="footer_txt">사업자등록번호 114-86-80501</span>
      </div>

      <div className="footer_sns">
        <div className="footer_item">
          <a
            href="https://www.facebook.com/quantec.investment/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("assets/images/ic-footer-facebook.svg")}
              alt="facebook"
            />
          </a>
        </div>
        <div className="footer_item">
          <a
            href="https://m.post.naver.com/my.nhn?memberNo=44351505"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("assets/images/ic-footer-blog.svg")} alt="blog" />
          </a>
        </div>
        <div className="footer_item">
          <a
            href="https://m.post.naver.com/my.nhn?memberNo=44351505"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("assets/images/ic-footer-kakao.svg")}
              alt="kakao"
            />
          </a>
        </div>
        <div className="footer_item">
          <a
            href="https://m.post.naver.com/my.nhn?memberNo=44351505"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("assets/images/ic-footer-linkedin.svg")}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;