import React from "react";
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="brand-title">
              <span className="brand-name">Khang Trầm Hương</span>
            </h1>
            <p className="brand-tagline">Tinh hoa trầm hương Việt Nam</p>
            
            <div className="brand-story">
              <p>
                Với hơn <strong>20 năm kinh nghiệm</strong> trong lĩnh vực trầm hương, 
                Khang Trầm Hương tự hào là thương hiệu uy tín hàng đầu tại Việt Nam.
              </p>
              
              <p>
                Chúng tôi chuyên cung cấp các sản phẩm trầm hương cao cấp, 
                được tuyển chọn kỹ lưỡng từ những vùng trầm nổi tiếng nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="brand-values">
        <div className="container">
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <ion-icon name="diamond"></ion-icon>
              </div>
              <h3>Chất Lượng Cao</h3>
              <p>Sản phẩm trầm hương nguyên chất 100%</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <ion-icon name="time"></ion-icon>
              </div>
              <h3>Kinh Nghiệm Lâu Năm</h3>
              <p>Hơn 20 năm trong nghề trầm hương</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <ion-icon name="shield-checkmark"></ion-icon>
              </div>
              <h3>Uy Tín Đảm Bảo</h3>
              <p>Cam kết chất lượng và dịch vụ tốt nhất</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Mission */}
      <section className="brand-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Sứ Mệnh Thương Hiệu</h2>
            <p>
              Mang đến cho khách hàng những sản phẩm trầm hương chất lượng cao nhất, 
              giúp bạn tận hưởng hương thơm tinh tế và thanh thản trong tâm hồn.
            </p>
            <div className="brand-quote">
              <q>Hương trầm thuần khiết - Tâm hồn thanh thản</q>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;