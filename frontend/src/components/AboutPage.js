import React from "react";

const AboutPage = () => {
  return (
    <div style={{ marginTop: '100px', padding: '2rem', minHeight: '100vh', background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)' }}>
      <div className="container">
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <ion-icon name="information-circle" style={{ fontSize: '4rem', color: '#F4D03F', marginBottom: '1rem' }}></ion-icon>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#F4D03F' }}>Giới Thiệu</h1>
          <p style={{ fontSize: '1.2rem', color: '#B8B8B8', maxWidth: '600px', margin: '0 auto' }}>
            Khang Trầm Hương - Tinh hoa trầm hương Việt Nam
          </p>
        </div>

        {/* Story Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
          padding: '3rem', 
          borderRadius: '24px',
          border: '1px solid rgba(244, 208, 63, 0.1)',
          marginBottom: '3rem'
        }}>
          <h2 style={{ color: '#F4D03F', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            Câu Chuyện Của Chúng Tôi
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#E5E5E5', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Với hơn <strong style={{ color: '#F4D03F' }}>20 năm kinh nghiệm</strong> trong lĩnh vực trầm hương, 
                Khang Trầm Hương tự hào là điểm đến tin cậy cho những người yêu thích hương trầm chất lượng cao.
              </p>
              
              <p style={{ color: '#E5E5E5', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Chúng tôi chuyên cung cấp các sản phẩm trầm hương nguyên chất, được tuyển chọn kỹ lưỡng từ 
                những vùng trầm nổi tiếng tại Việt Nam và Đông Nam Á.
              </p>

              <div style={{ 
                background: 'rgba(244, 208, 63, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '15px',
                border: '1px solid rgba(244, 208, 63, 0.2)'
              }}>
                <h3 style={{ color: '#F4D03F', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  🏆 Cam Kết Chất Lượng
                </h3>
                <p style={{ color: '#E5E5E5', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                  Mỗi sản phẩm trầm hương đều được kiểm định chất lượng nghiêm ngặt, 
                  đảm bảo mang đến trải nghiệm hương thơm tinh tế và đẳng cấp nhất.
                </p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(244, 208, 63, 0.1) 0%, rgba(243, 156, 18, 0.05) 100%)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(244, 208, 63, 0.2)'
              }}>
                <ion-icon name="leaf" style={{ fontSize: '3rem', color: '#F4D03F', marginBottom: '1rem' }}></ion-icon>
                <h3 style={{ color: '#F4D03F', fontSize: '1.5rem', marginBottom: '1rem' }}>Trầm Hương Tự Nhiên</h3>
                <p style={{ color: '#B8B8B8', fontSize: '0.9rem' }}>
                  100% từ thiên nhiên<br />
                  Không hóa chất<br />
                  Hương thơm thuần khiết
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#F4D03F', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            Giá Trị Cốt Lõi
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
              padding: '2rem', 
              borderRadius: '20px',
              border: '1px solid rgba(244, 208, 63, 0.1)',
              textAlign: 'center'
            }}>
              <ion-icon name="shield-checkmark" style={{ fontSize: '2.5rem', color: '#F4D03F', marginBottom: '1rem' }}></ion-icon>
              <h3 style={{ color: '#F4D03F', fontSize: '1.3rem', marginBottom: '1rem' }}>Chất Lượng</h3>
              <p style={{ color: '#B8B8B8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Cam kết cung cấp sản phẩm trầm hương chất lượng cao, được kiểm định kỹ lưỡng
              </p>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
              padding: '2rem', 
              borderRadius: '20px',
              border: '1px solid rgba(244, 208, 63, 0.1)',
              textAlign: 'center'
            }}>
              <ion-icon name="people" style={{ fontSize: '2.5rem', color: '#F4D03F', marginBottom: '1rem' }}></ion-icon>
              <h3 style={{ color: '#F4D03F', fontSize: '1.3rem', marginBottom: '1rem' }}>Tận Tâm</h3>
              <p style={{ color: '#B8B8B8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Phục vụ khách hàng với sự tận tâm, chuyên nghiệp và nhiệt tình nhất
              </p>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
              padding: '2rem', 
              borderRadius: '20px',
              border: '1px solid rgba(244, 208, 63, 0.1)',
              textAlign: 'center'
            }}>
              <ion-icon name="star" style={{ fontSize: '2.5rem', color: '#F4D03F', marginBottom: '1rem' }}></ion-icon>
              <h3 style={{ color: '#F4D03F', fontSize: '1.3rem', marginBottom: '1rem' }}>Uy Tín</h3>
              <p style={{ color: '#B8B8B8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Xây dựng thương hiệu dựa trên uy tín và lòng tin của khách hàng
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div style={{ 
          background: 'linear-gradient(135deg, #F4D03F 0%, #F39C12 100%)', 
          padding: '3rem', 
          borderRadius: '24px',
          color: '#1A1A1A',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#1A1A1A' }}>
            Con Số Ấn Tượng
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>20+</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Năm Kinh Nghiệm</div>
            </div>
            
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>5000+</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Khách Hàng Tin Tưởng</div>
            </div>
            
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>100+</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Sản Phẩm Chọn Lọc</div>
            </div>
            
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>24/7</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Hỗ Trợ Khách Hàng</div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
          padding: '3rem', 
          borderRadius: '24px',
          border: '1px solid rgba(244, 208, 63, 0.1)',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#F4D03F', fontSize: '2rem', marginBottom: '2rem' }}>
            Sứ Mệnh Của Chúng Tôi
          </h2>
          
          <p style={{ color: '#E5E5E5', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Mang đến cho khách hàng những sản phẩm trầm hương chất lượng cao nhất, 
            giúp bạn thư giãn, tĩnh tâm và tận hưởng những khoảnh khắc yên bình trong cuộc sống bận rộn.
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <p style={{ color: '#F4D03F', fontSize: '1.1rem', fontStyle: 'italic' }}>
              "Hương trầm thuần khiết - Tâm hồn thanh thản"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;