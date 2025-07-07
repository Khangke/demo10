import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchExpanded, setSearchExpanded] = useState(false);

  // Categories
  const categories = [
    { id: 'all', name: 'Tất Cả', icon: '🌟' },
    { id: 'ky-nam', name: 'Kỳ Nam', icon: '👑' },
    { id: 'tu-nhien', name: 'Tự Nhiên', icon: '🌿' },
    { id: 'truyen-thong', name: 'Truyền Thống', icon: '🔥' },
    { id: 'sang', name: 'Sáng', icon: '✨' }
  ];
  const seoData = {
    title: "Trầm Hương Cao Cấp - Sản Phẩm Chất Lượng | Khang Trầm Hương",
    description: "Khám phá các sản phẩm trầm hương cao cấp 100% tự nhiên. Chất lượng vượt trội với giá tốt nhất. Giao hàng toàn quốc, chất lượng đảm bảo.",
    url: "https://khangtramhuong.vn/san-pham",
    image: "https://images.pexels.com/photos/3639806/pexels-photo-3639806.jpeg",
    keywords: "trầm hương, kỳ nam, trầm hương cao cấp, trầm hương tự nhiên, mua trầm hương, trầm hương việt nam"
  };

  // Customer Reviews Data
  const customerReviews = [
    {
      id: 1,
      name: "Nguyễn Văn An",
      rating: 5,
      comment: "Trầm hương chất lượng tuyệt vời! Hương thơm rất đậm đà và tự nhiên. Sẽ quay lại mua tiếp.",
      date: "2 ngày trước",
      product: "Trầm Hương Kỳ Nam",
      verified: true
    },
    {
      id: 2,
      name: "Trần Thị Bình",
      rating: 5,
      comment: "Mình đã sử dụng nhiều loại trầm hương nhưng của shop này thực sự khác biệt. Hương thơm thanh thoát, rất thích hợp cho thiền định.",
      date: "5 ngày trước",
      product: "Trầm Hương Sáng",
      verified: true
    },
    {
      id: 3,
      name: "Lê Minh Cường",
      rating: 4,
      comment: "Sản phẩm tốt, đóng gói cẩn thận. Hương thơm tự nhiên, không bị pha trộn. Giá cả hợp lý.",
      date: "1 tuần trước",
      product: "Trầm Hương Tự Nhiên",
      verified: true
    },
    {
      id: 4,
      name: "Phạm Thị Dung",
      rating: 5,
      comment: "Trầm hương truyền thống rất chất lượng! Mình mua làm quà tặng và mọi người đều khen ngợi.",
      date: "1 tuần trước",
      product: "Trầm Hương Truyền Thống",
      verified: true
    },
    {
      id: 5,
      name: "Hoàng Văn Đức",
      rating: 5,
      comment: "Shop tư vấn rất nhiệt tình, sản phẩm đúng như mô tả. Hương thơm nồng nàn, rất đáng tiền!",
      date: "2 tuần trước",
      product: "Trầm Hương Kỳ Nam",
      verified: true
    },
    {
      id: 6,
      name: "Vũ Thị Hoa",
      rating: 4,
      comment: "Lần đầu mua trầm hương online, ban đầu hơi lo lắng nhưng sản phẩm nhận về rất ok. Sẽ ủng hộ shop lâu dài.",
      date: "2 tuần trước",
      product: "Trầm Hương Sáng",
      verified: false
    }
  ];

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!BACKEND_URL) {
          throw new Error('Backend URL not configured');
        }
        
        const response = await axios.get(`${API}/products`, {
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
          setFilteredProducts(response.data);
        } else {
          setProducts([]);
          setFilteredProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Không thể tải sản phẩm. Vui lòng thử lại sau.');
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [API, BACKEND_URL]);

  // Filter and sort products
  useEffect(() => {
    if (!products || products.length === 0) {
      setFilteredProducts([]);
      return;
    }

    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => {
        if (!product) return false;
        const category = product.category || '';
        const name = product.name || '';
        const searchTerm = selectedCategory.replace('-', ' ').toLowerCase();
        
        return category.toLowerCase().includes(searchTerm) ||
               name.toLowerCase().includes(searchTerm);
      });
    }

    // Filter by search
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(product => {
        if (!product) return false;
        const name = product.name || '';
        const description = product.description || '';
        
        return name.toLowerCase().includes(query) ||
               description.toLowerCase().includes(query);
      });
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'name':
        filtered.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        break;
      default:
        // Keep original order (newest)
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortBy, searchQuery]);

  // Format price safely
  const formatPrice = (price) => {
    if (!price || isNaN(price)) return '0 VNĐ';
    try {
      return new Intl.NumberFormat('vi-VN').format(price) + ' VNĐ';
    } catch (error) {
      return price + ' VNĐ';
    }
  };

  // Render loading state
  if (loading) {
    return (
      <div className="compact-products-page">
        <div className="compact-loading">
          <div className="compact-spinner"></div>
          <p>Đang tải...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="compact-products-page" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="error-state">
            <ion-icon name="alert-circle-outline"></ion-icon>
            <h3>Có lỗi xảy ra</h3>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="retry-btn"
            >
              Thử lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="compact-products-page" style={{ marginTop: '80px' }}>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={seoData.url} />
      </Helmet>

      <div className="container">
        {/* Compact Action Bar */}
        <div className="action-bar">
          <div className="action-left">
            {/* Category Dropdown */}
            <div className="category-dropdown">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="action-right">
            {/* Search Input - Always Visible */}
            <div className="search-container expanded">
              <div className="search-input-wrapper show">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button
                    className="search-clear"
                    onClick={() => setSearchQuery('')}
                    aria-label="Xóa tìm kiếm"
                  >
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                )}
              </div>
            </div>

            {/* Sort Dropdown */}
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Mới nhất</option>
              <option value="price-low">Giá thấp</option>
              <option value="price-high">Giá cao</option>
              <option value="name">Tên A-Z</option>
            </select>
          </div>
        </div>

        {/* Products Section */}
        <div className="products-section">
          <div className="section-info">
            <h2>{selectedCategory === 'all' ? 'Tất Cả Sản Phẩm' : categories.find(c => c.id === selectedCategory)?.name}</h2>
            <span className="count">{filteredProducts.length} sản phẩm</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <ion-icon name="search-outline"></ion-icon>
              <h3>Không tìm thấy sản phẩm</h3>
              <p>Thử từ khóa khác hoặc chọn danh mục khác</p>
            </div>
          ) : (
            <div className="compact-grid">
              {filteredProducts.map((product, index) => {
                if (!product || !product.id) return null;
                
                return (
                  <div key={`${product.id}-${index}`} className="compact-card">
                    <div className="card-image">
                      <img 
                        src={product.image_url || product.image || 'https://images.pexels.com/photos/3639806/pexels-photo-3639806.jpeg'} 
                        alt={product.name || 'Sản phẩm'} 
                        onError={(e) => {
                          e.target.src = 'https://images.pexels.com/photos/3639806/pexels-photo-3639806.jpeg';
                        }}
                        loading="lazy"
                      />
                      <div className="image-overlay">
                        <Link 
                          to={`/product/${product.id}`} 
                          className="quick-view"
                          aria-label={`Xem chi tiết ${product.name}`}
                        >
                          <ion-icon name="eye-outline"></ion-icon>
                        </Link>
                      </div>
                      {product.featured && (
                        <div className="featured-badge">
                          <ion-icon name="star"></ion-icon>
                        </div>
                      )}
                    </div>
                    <div className="card-content">
                      <h3 className="product-title">{product.name || 'Tên sản phẩm'}</h3>
                      <p className="product-desc">{product.description || 'Mô tả sản phẩm'}</p>
                      <div className="product-bottom">
                        <div className="price-info">
                          <span className="current-price">{formatPrice(product.price)}</span>
                          {product.original_price && product.original_price > product.price && (
                            <span className="old-price">{formatPrice(product.original_price)}</span>
                          )}
                        </div>
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <ion-icon
                              key={i}
                              name={i < (product.rating || 0) ? "star" : "star-outline"}
                              className={i < (product.rating || 0) ? "filled" : ""}
                            ></ion-icon>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Customer Reviews Section */}
        <div className="reviews-section">
          <div className="reviews-header">
            <h2 className="reviews-title">
              <ion-icon name="chatbubbles-outline"></ion-icon>
              Đánh Giá Khách Hàng
            </h2>
            <div className="reviews-stats">
              <div className="average-rating">
                <span className="rating-number">4.8</span>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <ion-icon key={i} name="star" className="filled"></ion-icon>
                  ))}
                </div>
                <span className="reviews-count">({customerReviews.length} đánh giá)</span>
              </div>
            </div>
          </div>

          <div className="reviews-grid">
            {customerReviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">
                        {review.name}
                        {review.verified && (
                          <span className="verified-badge">
                            <ion-icon name="checkmark-circle"></ion-icon>
                          </span>
                        )}
                      </h4>
                      <div className="review-meta">
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <ion-icon
                              key={i}
                              name={i < review.rating ? "star" : "star-outline"}
                              className={i < review.rating ? "filled" : ""}
                            ></ion-icon>
                          ))}
                        </div>
                        <span className="review-date">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="review-product">
                    <span className="product-tag">{review.product}</span>
                  </div>
                </div>
                <div className="review-content">
                  <p className="review-comment">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-footer">
            <button className="load-more-reviews">
              <ion-icon name="refresh-outline"></ion-icon>
              Xem thêm đánh giá
            </button>
            <div className="trust-indicators">
              <div className="trust-item">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <span>100% đánh giá thật</span>
              </div>
              <div className="trust-item">
                <ion-icon name="people-outline"></ion-icon>
                <span>1,200+ khách hàng tin tưởng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;