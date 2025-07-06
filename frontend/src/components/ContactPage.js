import React from "react";

const ContactPage = () => {
  return (
    <div style={{ marginTop: '100px', padding: '2rem', minHeight: '100vh', background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', color: '#F4D03F', marginBottom: '3rem' }}>
          <ion-icon name="call" style={{ fontSize: '4rem', marginBottom: '1rem' }}></ion-icon>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#F4D03F' }}>Liên Hệ</h1>
          <p style={{ fontSize: '1.1rem', color: '#B8B8B8', marginBottom: '2rem' }}>
            Chúng tôi luôn sẵn sàng hỗ trợ bạn
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem', 
          marginBottom: '3rem' 
        }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
            padding: '2rem', 
            borderRadius: '20px',
            border: '1px solid rgba(244, 208, 63, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <ion-icon name="call" style={{ fontSize: '2rem', color: '#F4D03F' }}></ion-icon>
              <h3 style={{ color: '#F4D03F', margin: 0 }}>Hotline</h3>
            </div>
            <p style={{ color: '#E5E5E5', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>1900-xxxx</p>
            <p style={{ color: '#B8B8B8', fontSize: '0.9rem' }}>Hỗ trợ 24/7</p>
          </div>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
            padding: '2rem', 
            borderRadius: '20px',
            border: '1px solid rgba(244, 208, 63, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <ion-icon name="mail" style={{ fontSize: '2rem', color: '#F4D03F' }}></ion-icon>
              <h3 style={{ color: '#F4D03F', margin: 0 }}>Email</h3>
            </div>
            <p style={{ color: '#E5E5E5', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>info@khangtramhuong.vn</p>
            <p style={{ color: '#B8B8B8', fontSize: '0.9rem' }}>Phản hồi trong 24h</p>
          </div>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
            padding: '2rem', 
            borderRadius: '20px',
            border: '1px solid rgba(244, 208, 63, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <ion-icon name="location" style={{ fontSize: '2rem', color: '#F4D03F' }}></ion-icon>
              <h3 style={{ color: '#F4D03F', margin: 0 }}>Địa Chỉ</h3>
            </div>
            <p style={{ color: '#E5E5E5', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              123 Đường Trầm Hương<br />
              Quận 1, TP.HCM
            </p>
            <p style={{ color: '#B8B8B8', fontSize: '0.9rem' }}>Thứ 2 - Chủ Nhật: 8:00 - 22:00</p>
          </div>
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
          padding: '2.5rem', 
          borderRadius: '20px',
          border: '1px solid rgba(244, 208, 63, 0.1)',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#F4D03F', marginBottom: '1rem' }}>Gửi Tin Nhắn</h2>
          <p style={{ color: '#B8B8B8', marginBottom: '2rem' }}>
            Để lại tin nhắn và chúng tôi sẽ liên hệ lại với bạn sớm nhất
          </p>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr', marginBottom: '1rem' }}>
              <input 
                type="text" 
                placeholder="Họ và tên" 
                style={{ 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(244, 208, 63, 0.2)', 
                  background: 'rgba(30, 30, 30, 0.7)', 
                  color: '#E5E5E5',
                  fontSize: '0.9rem'
                }} 
              />
              <input 
                type="tel" 
                placeholder="Số điện thoại" 
                style={{ 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(244, 208, 63, 0.2)', 
                  background: 'rgba(30, 30, 30, 0.7)', 
                  color: '#E5E5E5',
                  fontSize: '0.9rem'
                }} 
              />
            </div>
            
            <textarea 
              placeholder="Tin nhắn của bạn..." 
              rows="4"
              style={{ 
                width: '100%', 
                padding: '1rem', 
                borderRadius: '8px', 
                border: '1px solid rgba(244, 208, 63, 0.2)', 
                background: 'rgba(30, 30, 30, 0.7)', 
                color: '#E5E5E5',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                resize: 'vertical',
                fontFamily: 'inherit'
              }} 
            />
            
            <button style={{ 
              background: 'linear-gradient(135deg, #F4D03F 0%, #F39C12 100%)', 
              color: '#1A1A1A', 
              border: 'none', 
              padding: '1rem 2rem', 
              borderRadius: '25px', 
              fontSize: '1rem', 
              fontWeight: '600', 
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <ion-icon name="send" style={{ marginRight: '0.5rem' }}></ion-icon>
              Gửi Tin Nhắn
            </button>
          </div>
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>
            🚧 Form liên hệ đang được phát triển 🚧
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;