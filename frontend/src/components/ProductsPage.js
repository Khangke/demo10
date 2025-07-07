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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  // SEO Data
  const seoData = {
    title: "Trầm Hương Cao Cấp - Bộ Sưu Tập Đầy Đủ | Khang Trầm Hương",
    description: "Khám phá bộ sưu tập trầm hương cao cấp 100% tự nhiên. Kỳ Nam, Sáng, Truyền Thống với giá tốt nhất. Giao hàng toàn quốc, chất lượng đảm bảo.",
    url: "https://khangtramhuong.vn/san-pham",
    image: "https://images.pexels.com/photos/3639806/pexels-photo-3639806.jpeg",
    keywords: "trầm hương, kỳ nam, trầm hương cao cấp, trầm hương tự nhiên, mua trầm hương, trầm hương việt nam"
  };

  // Categories
  const categories = [
    { id: 'all', name: 'Tất Cả', icon: '🌟' },
    { id: 'ky-nam', name: 'Kỳ Nam', icon: '👑' },
    { id: 'tu-nhien', name: 'Tự Nhiên', icon: '🌿' },
    { id: 'truyen-thong', name: 'Truyền Thống', icon: '🔥' },
    { id: 'sang', name: 'Sáng', icon: '✨' }
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
      <div className="compact-products-page">
        <div className="compact-header">
          <div className="container">
            <h1 className="compact-title">
              <span className="title-gradient">Bộ Sưu Tập</span> Trầm Hương
            </h1>
            <p className="compact-subtitle">Sản phẩm tự nhiên cao cấp</p>
          </div>
        </div>
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
    <div className="compact-products-page">
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

      {/* Compact Header */}
      <div className="compact-header">
        <div className="container">
          <h1 className="compact-title">
            <span className="title-gradient">Bộ Sưu Tập</span> Trầm Hương
          </h1>
          <p className="compact-subtitle">Sản phẩm tự nhiên cao cấp</p>
        </div>
      </div>

      <div className="container">
        {/* Ultra Compact Filters */}
        <div className="compact-filters">
          {/* Search and Sort */}
          <div className="filter-row">
            <div className="compact-search">
              <ion-icon name="search-outline"></ion-icon>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                maxLength={100}
              />
            </div>
            <select
              className="compact-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Mới nhất</option>
              <option value="price-low">Giá thấp</option>
              <option value="price-high">Giá cao</option>
              <option value="name">Tên A-Z</option>
            </select>
          </div>

          {/* Category Pills */}
          <div className="category-pills">
            {categories.map(category => (
              <button
                key={category.id}
                className={`pill ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                type="button"
              >
                <span role="img" aria-label={category.name}>{category.icon}</span> {category.name}
              </button>
            ))}
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
                        src={product.image || '/default-product.jpg'} 
                        alt={product.name || 'Sản phẩm'} 
                        onError={(e) => {
                          e.target.src = 'https://images.pexels.com/photos/3639806/pexels-photo-3639806.jpeg';
                        }}
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
      </div>
    </div>
  );
};

export default ProductsPage;