import React from 'react';

function SNS() {
  return (
      <div class="footer_sns">
          <div class="footer_item">
              <a href="#">
                  <img src={require("assets/images/ic-footer-facebook.svg")} alt="facebook" />
              </a>
          </div>
          <div class="footer_item">
              <a href="#">
                  <img src={require("assets/images/ic-footer-blog.svg")} alt="blog" />
              </a>
          </div>
          <div class="footer_item">
              <a href="#">
                  <img src={require("assets/images/ic-footer-kakao.svg")} alt="kakao" />
              </a>
          </div>
          <div class="footer_item">
              <a href="#">
                  <img src={require("assets/images/ic-footer-linkedin.svg")} alt="linkedin" />
              </a>
          </div>
      </div>
  );
}

export default SNS;
