import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content-two-cols">
            <div className="footer-section">
              <h4>Hỗ Trợ Khách Hàng</h4>
              <ul>
                <li><a href="#faq">Câu Hỏi Thường Gặp</a></li>
                <li><a href="#buying-guide">Hướng Dẫn Mua Hàng</a></li>
                <li><a href="#warranty">Chính Sách Bảo Hành</a></li>
                <li><a href="#technical-support">Hỗ Trợ Kỹ Thuật</a></li>
                <li><a href="#size-guide">Hướng Dẫn Chọn Size</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Chính Sách</h4>
              <ul>
                <li><a href="#">Chính Sách Bảo Mật</a></li>
                <li><a href="#">Điều Khoản Sử Dụng</a></li>
                <li><a href="#">Chính Sách Đổi Trả</a></li>
                <li><a href="#">Hướng Dẫn Thanh Toán</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Khang Trầm Hương. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;