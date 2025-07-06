import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileBottomNav = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  const sessionId = localStorage.getItem('session_id') || 
    (() => {
      const newId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('session_id', newId);
      return newId;
    })();

  useEffect(() => {
    fetchCartCount();
    const interval = setInterval(fetchCartCount, 3000);
    return () => clearInterval(interval);
  }, [location.pathname]);

  const fetchCartCount = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/cart/${sessionId}`);
      if (response.ok) {
        const cartData = await response.json();
        setCartCount(cartData.total_items || 0);
      }
    } catch (error) {
      console.error('Error fetching cart count:', error);
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    {
      path: '/',
      icon: 'home-outline',
      label: 'Trang Chủ',
      activeIcon: 'home'
    },
    {
      path: '/products',
      icon: 'storefront-outline',
      label: 'Sản Phẩm', 
      activeIcon: 'storefront'
    },
    {
      path: '/about',
      icon: 'information-circle-outline',
      label: 'Giới Thiệu',
      activeIcon: 'information-circle'
    },
    {
      path: '/news',
      icon: 'newspaper-outline',
      label: 'Tin Tức',
      activeIcon: 'newspaper'
    },
    {
      path: '/contact',
      icon: 'call-outline',
      label: 'Liên Hệ',
      activeIcon: 'call'
    },
    {
      path: '/cart',
      icon: 'bag-outline',
      label: 'Giỏ Hàng',
      activeIcon: 'bag',
      badge: cartCount
    },
    {
      path: '/account',
      icon: 'person-outline',
      label: 'Tài Khoản',
      activeIcon: 'person'
    }
  ];

  return (
    <div className="mobile-bottom-nav">
      <div className="mobile-bottom-nav-container">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-nav-item ${isActive(item.path) ? 'active' : ''}`}
          >
            <div className="mobile-nav-icon-container">
              <ion-icon 
                name={isActive(item.path) ? item.activeIcon : item.icon}
                className="mobile-nav-icon"
              ></ion-icon>
              {item.badge && item.badge > 0 && (
                <span className="mobile-nav-badge">{item.badge}</span>
              )}
            </div>
            <span className="mobile-nav-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;