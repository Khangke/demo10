import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <h3>Khang Trầm Hương</h3>
              <p className="tagline">Tinh hoa trầm hương Việt Nam - Chất lượng vượt trội từ thiên nhiên</p>
              <div className="footer-contact">
                <div className="contact-item">
                  <span className="contact-icon">
                    <ion-icon name="mail-outline"></ion-icon>
                  </span>
                  <span>contact@khangtramhuong.vn</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </span>
                  <span>(+84) 123 456 789</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">
                    <ion-icon name="location-outline"></ion-icon>
                  </span>
                  <span>Việt Nam</span>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Theo Dõi Chúng Tôi</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook" className="social-facebook">
                  <span className="social-icon">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </span>
                  <span className="social-text">Facebook</span>
                </a>
                <a href="#" aria-label="Instagram" className="social-instagram">
                  <span className="social-icon">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </span>
                  <span className="social-text">Instagram</span>
                </a>
                <a href="#" aria-label="Zalo" className="social-zalo">
                  <span className="social-icon">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                  </span>
                  <span className="social-text">Zalo</span>
                </a>
                <a href="#" aria-label="YouTube" className="social-youtube">
                  <span className="social-icon">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </span>
                  <span className="social-text">YouTube</span>
                </a>
              </div>
            </div>
            
            <div className="footer-section footer-two-cols">
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