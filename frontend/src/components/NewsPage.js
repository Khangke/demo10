import React from "react";

const NewsPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Cách Chọn Trầm Hương Chất Lượng Cao",
      excerpt: "Hướng dẫn chi tiết cách nhận biết và lựa chọn trầm hương nguyên chất có chất lượng tốt nhất.",
      date: "15/06/2025",
      category: "Hướng Dẫn",
      image: "https://images.unsplash.com/photo-1544386094-82085406ad2b?w=400&h=250&fit=crop&crop=center",
      readTime: "5 phút đọc"
    },
    {
      id: 2,
      title: "Lợi Ích Sức Khỏe Từ Trầm Hương",
      excerpt: "Khám phá những tác dụng tích cực của trầm hương đối với sức khỏe tinh thần và thể chất.",
      date: "12/06/2025",
      category: "Sức Khỏe",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      readTime: "7 phút đọc"
    },
    {
      id: 3,
      title: "Trầm Hương Việt Nam - Đẳng Cấp Thế Giới",
      excerpt: "Tìm hiểu về vùng trầm nổi tiếng của Việt Nam và đặc điểm riêng biệt của từng vùng.",
      date: "10/06/2025",
      category: "Kiến Thức",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&crop=center",
      readTime: "8 phút đọc"
    },
    {
      id: 4,
      title: "Cách Bảo Quản Trầm Hương Đúng Cách",
      excerpt: "Những mẹo hay để bảo quản trầm hương giữ nguyên chất lượng và hương thơm lâu dài.",
      date: "08/06/2025",
      category: "Hướng Dẫn",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=400&h=250&fit=crop&crop=center",
      readTime: "4 phút đọc"
    }
  ];

  const categories = ["Tất Cả", "Hướng Dẫn", "Sức Khỏe", "Kiến Thức", "Tin Tức"];

  return (
    <div style={{ marginTop: '100px', padding: '2rem', minHeight: '100vh', background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <ion-icon name="newspaper" style={{ fontSize: '4rem', color: '#F4D03F', marginBottom: '1rem' }}></ion-icon>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#F4D03F' }}>Tin Tức</h1>
          <p style={{ fontSize: '1.1rem', color: '#B8B8B8', maxWidth: '600px', margin: '0 auto' }}>
            Cập nhật những thông tin mới nhất về trầm hương và các kiến thức bổ ích
          </p>
        </div>

        {/* Category Filter */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map((category, index) => (
            <button
              key={index}
              style={{
                background: index === 0 ? 'linear-gradient(135deg, #F4D03F 0%, #F39C12 100%)' : 'rgba(30, 30, 30, 0.7)',
                color: index === 0 ? '#1A1A1A' : '#B8B8B8',
                border: '1px solid rgba(244, 208, 63, 0.2)',
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (index !== 0) {
                  e.target.style.background = 'rgba(244, 208, 63, 0.1)';
                  e.target.style.color = '#F4D03F';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== 0) {
                  e.target.style.background = 'rgba(30, 30, 30, 0.7)';
                  e.target.style.color = '#B8B8B8';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
          borderRadius: '24px',
          border: '1px solid rgba(244, 208, 63, 0.1)',
          overflow: 'hidden',
          marginBottom: '3rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div style={{ padding: '3rem' }}>
              <div style={{ 
                background: 'rgba(244, 208, 63, 0.1)', 
                color: '#F4D03F', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                fontSize: '0.8rem', 
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                ⭐ BÀI VIẾT NỔI BẬT
              </div>
              
              <h2 style={{ color: '#F4D03F', fontSize: '1.8rem', marginBottom: '1rem', lineHeight: '1.3' }}>
                {newsArticles[0].title}
              </h2>
              
              <p style={{ color: '#B8B8B8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {newsArticles[0].excerpt}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <span style={{ color: '#F4D03F', fontSize: '0.9rem', fontWeight: '600' }}>
                  📅 {newsArticles[0].date}
                </span>
                <span style={{ color: '#B8B8B8', fontSize: '0.9rem' }}>
                  ⏱️ {newsArticles[0].readTime}
                </span>
              </div>
              
              <button style={{
                background: 'linear-gradient(135deg, #F4D03F 0%, #F39C12 100%)',
                color: '#1A1A1A',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <ion-icon name="book-outline"></ion-icon>
                Đọc Bài Viết
              </button>
            </div>
            
            <div style={{ height: '400px', position: 'relative' }}>
              <img 
                src={newsArticles[0].image} 
                alt={newsArticles[0].title}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '0 24px 24px 0'
                }}
              />
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {newsArticles.slice(1).map((article) => (
            <div
              key={article.id}
              style={{
                background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)',
                borderRadius: '20px',
                border: '1px solid rgba(244, 208, 63, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(244, 208, 63, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(244, 208, 63, 0.1)';
              }}
            >
              <div style={{ height: '200px', position: 'relative' }}>
                <img 
                  src={article.image} 
                  alt={article.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(244, 208, 63, 0.9)',
                  color: '#1A1A1A',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {article.category}
                </div>
              </div>
              
              <div style={{ padding: '2rem' }}>
                <h3 style={{ 
                  color: '#F4D03F', 
                  fontSize: '1.2rem', 
                  marginBottom: '1rem', 
                  lineHeight: '1.4',
                  fontWeight: '700'
                }}>
                  {article.title}
                </h3>
                
                <p style={{ 
                  color: '#B8B8B8', 
                  fontSize: '0.9rem', 
                  lineHeight: '1.6', 
                  marginBottom: '1.5rem'
                }}>
                  {article.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid rgba(244, 208, 63, 0.1)',
                  paddingTop: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: '#F4D03F', fontSize: '0.8rem' }}>📅 {article.date}</span>
                    <span style={{ color: '#B8B8B8', fontSize: '0.8rem' }}>⏱️ {article.readTime}</span>
                  </div>
                  
                  <ion-icon 
                    name="arrow-forward" 
                    style={{ color: '#F4D03F', fontSize: '1.2rem' }}
                  ></ion-icon>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div style={{ 
          background: 'linear-gradient(135deg, #F4D03F 0%, #F39C12 100%)', 
          padding: '3rem', 
          borderRadius: '24px',
          color: '#1A1A1A',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1A1A1A' }}>
            Đăng Ký Nhận Tin
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.8' }}>
            Nhận thông tin mới nhất về trầm hương và các ưu đãi đặc biệt
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            maxWidth: '500px', 
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <input 
              type="email" 
              placeholder="Nhập email của bạn..." 
              style={{ 
                flex: '1',
                minWidth: '250px',
                padding: '1rem 1.5rem', 
                borderRadius: '25px', 
                border: 'none', 
                fontSize: '1rem',
                outline: 'none'
              }} 
            />
            <button style={{
              background: '#1A1A1A',
              color: '#F4D03F',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <ion-icon name="mail"></ion-icon>
              Đăng Ký
            </button>
          </div>
        </div>

        {/* Under Development Notice */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>
            🚧 Tính năng đọc bài viết đang được phát triển 🚧
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;