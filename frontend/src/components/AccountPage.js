import React from "react";

const AccountPage = () => {
  return (
    <div style={{ marginTop: '100px', padding: '2rem', minHeight: '100vh', background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', color: '#F4D03F' }}>
          <ion-icon name="person-circle" style={{ fontSize: '4rem', marginBottom: '1rem' }}></ion-icon>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#F4D03F' }}>Tài Khoản</h1>
          <p style={{ fontSize: '1.1rem', color: '#B8B8B8', marginBottom: '2rem' }}>
            Quản lý thông tin tài khoản và đơn hàng của bạn
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem' 
          }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
              padding: '2rem', 
              borderRadius: '20px',
              border: '1px solid rgba(244, 208, 63, 0.1)',
              textAlign: 'center'
            }}>
              <ion-icon name="bag-outline" style={{ fontSize: '2.5rem', color: '#F4D03F', marginBottom: '1rem' }}></ion-icon>
              <h3 style={{ color: '#F4D03F', marginBottom: '0.5rem' }}>Đơn Hàng</h3>
              <p style={{ color: '#B8B8B8', fontSize: '0.9rem' }}>Theo dõi đơn hàng và lịch sử mua hàng</p>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #1E1E1E 0%, #141414 100%)', 
              padding: '2rem', 
              borderRadius: '20px',
              border: '1px solid rgba(244, 208, 63, 0.1)',
              textAlign: 'center'
            }}>
              <ion-icon name="settings-outline" style={{ fontSize: '2.5rem', color: '#F4D03F', marginBottom: '1rem' }}></ion-icon>
              <h3 style={{ color: '#F4D03F', marginBottom: '0.5rem' }}>Cài Đặt</h3>
              <p style={{ color: '#B8B8B8', fontSize: '0.9rem' }}>Cập nhật thông tin cá nhân và địa chỉ</p>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem' }}>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>
              🚧 Trang này đang được phát triển 🚧
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;