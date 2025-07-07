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
        const response = await axios.get(`${API}/products`);
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        product.name.toLowerCase().includes(selectedCategory.replace('-', ' ').toLowerCase())
      );
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order (newest)
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortBy, searchQuery]);

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' VNĐ';
  };

  if (loading) {
    return (
      <div className="products-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Đang tải sản phẩm...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="products-page">
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

      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Bộ Sưu Tập</span>
              <span className="hero-subtitle">Trầm Hương Cao Cấp</span>
            </h1>
            <p className="hero-description">
              Khám phá những sản phẩm trầm hương tự nhiên, chất lượng cao được tuyển chọn kỹ lưỡng
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Filters Section */}
        <section className="products-filters">
          <div className="filters-top">
            <div className="search-box">
              <ion-icon name="search-outline"></ion-icon>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="sort-box">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Mới nhất</option>
                <option value="price-low">Giá thấp đến cao</option>
                <option value="price-high">Giá cao đến thấp</option>
                <option value="name">Tên A-Z</option>
              </select>
            </div>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-grid-section">
          <div className="products-header">
            <h2 className="section-title">
              {selectedCategory === 'all' ? 'Tất Cả Sản Phẩm' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="products-count">
              <span>{filteredProducts.length} sản phẩm</span>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <ion-icon name="search-outline"></ion-icon>
              <h3>Không tìm thấy sản phẩm</h3>
              <p>Vui lòng thử lại với từ khóa khác hoặc chọn danh mục khác</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <Link to={`/product/${product.id}`} className="view-btn">
                        <ion-icon name="eye-outline"></ion-icon>
                        <span>Xem Chi Tiết</span>
                      </Link>
                    </div>
                    {product.featured && (
                      <div className="product-badge">
                        <ion-icon name="star"></ion-icon>
                        <span>Nổi Bật</span>
                      </div>
                    )}
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-meta">
                      <span className="product-category">{product.category}</span>
                      <div className="product-rating">
                        {[...Array(5)].map((_, i) => (
                          <ion-icon
                            key={i}
                            name={i < product.rating ? "star" : "star-outline"}
                            className={i < product.rating ? "filled" : ""}
                          ></ion-icon>
                        ))}
                        <span className="rating-text">({product.rating}/5)</span>
                      </div>
                    </div>
                    <div className="product-price">
                      <span className="price">{formatPrice(product.price)}</span>
                      {product.original_price && product.original_price > product.price && (
                        <span className="original-price">{formatPrice(product.original_price)}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;