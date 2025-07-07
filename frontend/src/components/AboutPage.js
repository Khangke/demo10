import React from "react";
import '../styles/AboutPage.css';

const AboutPage = () => {
  const seoData = {
    title: "Giới Thiệu Về Khang Trầm Hương - Chuyên Gia Trầm Hương Việt Nam",
    description: "Khang Trầm Hương - Hơn 20 năm kinh nghiệm trong lĩnh vực trầm hương cao cấp. Chuyên cung cấp trầm hương tự nhiên, kỳ nam chất lượng cao từ Việt Nam và Đông Nam Á.",
    url: "https://khangtramhuong.vn/gioi-thieu",
    image: "https://images.pexels.com/photos/3639806/pexels-photo-3639806.jpeg",
    keywords: "giới thiệu khang trầm hương, về chúng tôi, trầm hương việt nam, kinh nghiệm trầm hương, chuyên gia trầm hương"
  };

  // Company milestones data
  const milestones = [
    {
      year: "2003",
      title: "Thành Lập",
      description: "Khởi nghiệp với tình yêu trầm hương",
      icon: "rocket"
    },
    {
      year: "2008",
      title: "Mở Rộng",
      description: "Thiết lập mạng lưới cung ứng toàn quốc",
      icon: "globe"
    },
    {
      year: "2015",
      title: "Chuyển Đổi",
      description: "Phát triển hệ thống bán hàng trực tuyến",
      icon: "storefront"
    },
    {
      year: "2020",
      title: "Đột Phá",
      description: "Trở thành thương hiệu trầm hương hàng đầu",
      icon: "trophy"
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Nguyễn Văn Khang",
      position: "Founder & CEO",
      experience: "25+ năm kinh nghiệm",
      specialty: "Chuyên gia nhận biết trầm hương",
      image: "person-circle"
    },
    {
      name: "Trần Thị Hương",
      position: "Giám Đốc Sản Xuất",
      experience: "20+ năm kinh nghiệm",
      specialty: "Chuyên gia tuyển chọn nguyên liệu",
      image: "person-circle"
    },
    {
      name: "Lê Minh Tâm",
      position: "Trưởng Phòng Kinh Doanh",
      experience: "15+ năm kinh nghiệm",
      specialty: "Chuyên gia tư vấn sản phẩm",
      image: "person-circle"
    }
  ];

  // Product categories data
  const categories = [
    {
      name: "Trầm Hương Kỳ Nam",
      description: "Loại trầm hương quý hiếm nhất",
      features: ["Hương thơm đặc biệt", "Chất lượng cao cấp", "Giá trị sưu tầm"],
      icon: "diamond"
    },
    {
      name: "Trầm Hương Sáng",
      description: "Trầm hương có mùi thơm sáng",
      features: ["Hương thơm tươi mát", "Phù hợp thiền định", "Giá cả hợp lý"],
      icon: "sunny"
    },
    {
      name: "Trầm Hương Trầm",
      description: "Trầm hương có mùi thơm trầm ấm",
      features: ["Hương thơm sâu lắng", "Thích hợp thư giãn", "Tác dụng an thần"],
      icon: "moon"
    },
    {
      name: "Trầm Hương Tự Nhiên",
      description: "Trầm hương nguyên chất 100%",
      features: ["Không pha tạp", "Hương thơm thuần khiết", "An toàn sức khỏe"],
      icon: "leaf"
    }
  ];

  return (
    <div className="about-page">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>{seoData.title}</h1>
        <p>{seoData.description}</p>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:image" content={seoData.image} />
      </div>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <ion-icon name="star"></ion-icon>
              <span>Thương hiệu uy tín 20+ năm</span>
            </div>
            <h1 className="hero-title">
              Giới Thiệu
              <span className="gradient-text">Khang Trầm Hương</span>
            </h1>
            <p className="hero-subtitle">
              Chuyên gia hàng đầu về trầm hương cao cấp tại Việt Nam
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Năm KN</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5K+</span>
                <span className="stat-label">Khách Hàng</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Sản Phẩm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Câu Chuyện Của Chúng Tôi</h2>
            <p className="section-subtitle">Hành trình phát triển từ tình yêu trầm hương</p>
          </div>
          
          <div className="story-content">
            <div className="story-text">
              <div className="story-block">
                <h3>Khởi Nguồn Từ Đam Mê</h3>
                <p>
                  Khang Trầm Hương được thành lập vào năm 2003 với mong muốn mang đến những sản phẩm trầm hương chất lượng cao nhất cho người Việt. Xuất phát từ tình yêu sâu sắc với hương trầm truyền thống, chúng tôi đã dành hơn 20 năm để nghiên cứu, tuyển chọn và phát triển các sản phẩm đạt tiêu chuẩn quốc tế.
                </p>
              </div>
              
              <div className="story-block">
                <h3>Chất Lượng Là Ưu Tiên Hàng Đầu</h3>
                <p>
                  Mỗi sản phẩm trầm hương của chúng tôi đều được tuyển chọn kỹ lưỡng từ những vùng trầm nổi tiếng tại Việt Nam và Đông Nam Á. Chúng tôi có đội ngũ chuyên gia giàu kinh nghiệm, am hiểu sâu sắc về đặc tính và chất lượng của từng loại trầm hương.
                </p>
              </div>
              
              <div className="story-block">
                <h3>Tầm Nhìn Tương Lai</h3>
                <p>
                  Khang Trầm Hương hướng tới việc trở thành thương hiệu trầm hương hàng đầu Việt Nam, đồng thời quảng bá nét đẹp văn hóa trầm hương truyền thống ra thế giới. Chúng tôi cam kết không ngừng nâng cao chất lượng sản phẩm và dịch vụ.
                </p>
              </div>
            </div>
            
            <div className="story-image">
              <div className="image-card">
                <div className="image-placeholder">
                  <ion-icon name="leaf"></ion-icon>
                  <h4>Trầm Hương Tự Nhiên</h4>
                  <p>100% nguyên chất từ thiên nhiên</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="milestones">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Hành Trình Phát Triển</h2>
            <p className="section-subtitle">Những mốc quan trọng trong 20 năm phát triển</p>
          </div>
          
          <div className="milestone-grid">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-card">
                <div className="milestone-icon">
                  <ion-icon name={milestone.icon}></ion-icon>
                </div>
                <div className="milestone-year">{milestone.year}</div>
                <h3 className="milestone-title">{milestone.title}</h3>
                <p className="milestone-description">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Danh Mục Sản Phẩm</h2>
            <p className="section-subtitle">Đa dạng các loại trầm hương chất lượng cao</p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">
                  <ion-icon name={category.icon}></ion-icon>
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <ul className="category-features">
                  {category.features.map((feature, idx) => (
                    <li key={idx}>
                      <ion-icon name="checkmark-circle"></ion-icon>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Đội Ngũ Chuyên Gia</h2>
            <p className="section-subtitle">Những người am hiểu sâu sắc về trầm hương</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <ion-icon name={member.image}></ion-icon>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-experience">{member.experience}</p>
                  <p className="member-specialty">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="company-values">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Giá Trị Cốt Lõi</h2>
            <p className="section-subtitle">Những giá trị định hướng hoạt động của chúng tôi</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <ion-icon name="shield-checkmark"></ion-icon>
              </div>
              <h3>Chất Lượng</h3>
              <p>Cam kết cung cấp sản phẩm trầm hương chất lượng cao nhất, được kiểm định nghiêm ngặt</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <ion-icon name="heart"></ion-icon>
              </div>
              <h3>Tận Tâm</h3>
              <p>Phục vụ khách hàng với sự tận tâm, chuyên nghiệp và nhiệt tình trong mọi tình huống</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <ion-icon name="star"></ion-icon>
              </div>
              <h3>Uy Tín</h3>
              <p>Xây dựng thương hiệu dựa trên uy tín, lòng tin và sự hài lòng của khách hàng</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <ion-icon name="leaf"></ion-icon>
              </div>
              <h3>Tự Nhiên</h3>
              <p>Bảo vệ và phát triển sản phẩm trầm hương tự nhiên, thân thiện với môi trường</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <ion-icon name="time"></ion-icon>
              </div>
              <div className="stat-number">20+</div>
              <div className="stat-label">Năm Kinh Nghiệm</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <ion-icon name="people"></ion-icon>
              </div>
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Khách Hàng Tin Tưởng</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <ion-icon name="bag"></ion-icon>
              </div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Sản Phẩm Chọn Lọc</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <ion-icon name="headset"></ion-icon>
              </div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Hỗ Trợ Khách Hàng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-statement">
        <div className="container">
          <div className="mission-content">
            <div className="mission-icon">
              <ion-icon name="compass"></ion-icon>
            </div>
            <h2 className="mission-title">Sứ Mệnh Của Chúng Tôi</h2>
            <p className="mission-text">
              Mang đến cho khách hàng những sản phẩm trầm hương chất lượng cao nhất, 
              giúp bạn thư giãn, tĩnh tâm và tận hưởng những khoảnh khắc yên bình trong cuộc sống bận rộn.
            </p>
            <div className="mission-quote">
              <q>Hương trầm thuần khiết - Tâm hồn thanh thản</q>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Liên Hệ Với Chúng Tôi</h2>
            <p>Để được tư vấn chi tiết về sản phẩm trầm hương phù hợp với nhu cầu của bạn</p>
            <div className="cta-buttons">
              <button className="cta-primary">
                <ion-icon name="call"></ion-icon>
                Gọi Ngay
              </button>
              <button className="cta-secondary">
                <ion-icon name="chatbubble"></ion-icon>
                Chat Tư Vấn
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;