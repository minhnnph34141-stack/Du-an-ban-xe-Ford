```jsx
import { useMemo, useState } from "react";
import "./styles.css";

const DEALER = {
  name: "HOÀNG FORD",
  phone: "0978 841 002",
  phoneLink: "0978841002",
  email: "2k2hoangha@gmail.com",
  address: "311 Đ. Trường Chinh, Phương Liệt, Hà Nội",
  map: "https://www.google.com/maps/search/?api=1&query=311+Duong+Truong+Chinh+Phuong+Liet+Ha+Noi",
};

const INITIAL_CARS = [
  {
    id: 1,
    name: "Ford Ranger",
    subtitle: "Mạnh mẽ trên mọi địa hình",
    category: "Bán tải",
    price: "665 triệu",
    priceNote: "Giá tham khảo",
    year: "2025",
    transmission: "Số tự động",
    fuel: "Dầu",
    seats: "5 chỗ",
    image:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=85",
    tag: "BÁN CHẠY",
    description:
      "Ford Ranger kết hợp khả năng vận hành mạnh mẽ, thiết kế cá tính và tính đa dụng cho cả công việc lẫn những chuyến đi khám phá.",
  },
  {
    id: 2,
    name: "Ford Everest",
    subtitle: "Tự tin chinh phục hành trình",
    category: "SUV",
    price: "1,099 tỷ",
    priceNote: "Giá tham khảo",
    year: "2025",
    transmission: "Số tự động",
    fuel: "Dầu",
    seats: "7 chỗ",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    tag: "SUV 7 CHỖ",
    description:
      "Ford Everest sở hữu không gian rộng rãi, thiết kế khỏe khoắn và sự thoải mái cho những chuyến đi cùng gia đình.",
  },
  {
    id: 3,
    name: "Ford Territory",
    subtitle: "Phong cách sống hiện đại",
    category: "SUV",
    price: "762 triệu",
    priceNote: "Giá tham khảo",
    year: "2025",
    transmission: "Số tự động",
    fuel: "Xăng",
    seats: "5 chỗ",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
    tag: "ĐÔ THỊ",
    description:
      "Ford Territory mang phong cách hiện đại, nội thất tiện nghi và trải nghiệm lái phù hợp với nhịp sống đô thị.",
  },
  {
    id: 4,
    name: "Ford Transit",
    subtitle: "Đối tác tin cậy cho kinh doanh",
    category: "Thương mại",
    price: "905 triệu",
    priceNote: "Giá tham khảo",
    year: "2025",
    transmission: "Số sàn",
    fuel: "Dầu",
    seats: "16 chỗ",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
    tag: "THƯƠNG MẠI",
    description:
      "Ford Transit là lựa chọn thực dụng cho nhu cầu vận chuyển hành khách, phục vụ kinh doanh và hoạt động doanh nghiệp.",
  },
  {
    id: 5,
    name: "Ford Explorer",
    subtitle: "Đẳng cấp trong từng hành trình",
    category: "SUV",
    price: "Liên hệ",
    priceNote: "Nhận báo giá",
    year: "2025",
    transmission: "Số tự động",
    fuel: "Xăng",
    seats: "7 chỗ",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
    tag: "CAO CẤP",
    description:
      "Ford Explorer hướng đến trải nghiệm rộng rãi, tiện nghi và phong cách mạnh mẽ cho những khách hàng yêu thích SUV cỡ lớn.",
  },
  {
    id: 6,
    name: "Ford Mustang",
    subtitle: "Biểu tượng của đam mê tốc độ",
    category: "Thể thao",
    price: "Liên hệ",
    priceNote: "Nhận báo giá",
    year: "2025",
    transmission: "Số tự động",
    fuel: "Xăng",
    seats: "4 chỗ",
    image:
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=85",
    tag: "THỂ THAO",
    description:
      "Ford Mustang mang dấu ấn thể thao đặc trưng với thiết kế cuốn hút và cá tính riêng biệt.",
  },
];

const CATEGORIES = ["Tất cả", "Bán tải", "SUV", "Thương mại", "Thể thao"];

function App() {
  const [cars, setCars] = useState(INITIAL_CARS);
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [search, setSearch] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState([]);
  const [newCar, setNewCar] = useState({
    name: "",
    category: "SUV",
    price: "",
    image: "",
  });

  const visibleCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesCategory =
        activeCategory === "Tất cả" ||
        car.category === activeCategory;

      const matchesSearch = car.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [cars, activeCategory, search]);

  const goTo = (id) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openCar = (car) => {
    setSelectedCar(car);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitLead = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const lead = {
      id: Date.now(),
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      car: form.get("car"),
      message: form.get("message"),
      date: new Date().toLocaleString("vi-VN"),
    };

    setLeads((previous) => [lead, ...previous]);

    const subject = encodeURIComponent(
      `Yêu cầu tư vấn xe - ${lead.name}`
    );
    const body = encodeURIComponent(
      `Họ tên: ${lead.name}\nSố điện thoại: ${lead.phone}\nEmail: ${lead.email || "Không cung cấp"}\nMẫu xe: ${lead.car || "Chưa chọn"}\nNội dung: ${lead.message || "Không có"}`
    );

    window.location.href =
      `mailto:${DEALER.email}?subject=${subject}&body=${body}`;

    event.currentTarget.reset();
    alert(
      "Đã ghi nhận thông tin trên trang này. Trình duyệt sẽ mở ứng dụng email để gửi yêu cầu đến đại lý."
    );
  };

  const loginAdmin = (event) => {
    event.preventDefault();

    if (password === "admin123") {
      setLoginOpen(false);
      setAdminOpen(true);
      setPassword("");
    } else {
      alert("Mật khẩu không chính xác.");
    }
  };

  const addCar = (event) => {
    event.preventDefault();

    const car = {
      id: Date.now(),
      name: newCar.name,
      subtitle: "Liên hệ để được tư vấn",
      category: newCar.category,
      price: newCar.price || "Liên hệ",
      priceNote: "Nhận báo giá",
      year: "2025",
      transmission: "Liên hệ",
      fuel: "Liên hệ",
      seats: "Liên hệ",
      image:
        newCar.image ||
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
      tag: "MẪU XE MỚI",
      description: "Liên hệ Hoàng Ford để nhận thông tin chi tiết.",
    };

    setCars((previous) => [...previous, car]);
    setNewCar({
      name: "",
      category: "SUV",
      price: "",
      image: "",
    });
    alert("Đã thêm xe vào danh sách trên phiên làm việc hiện tại.");
  };

  const removeCar = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa mẫu xe này?")) {
      setCars((previous) => previous.filter((car) => car.id !== id));
    }
  };

  return (
    <div className="site-shell">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Chào mừng bạn đến với Hoàng Ford Auto</span>
          <div className="top-strip-contact">
            <a href={`tel:${DEALER.phoneLink}`}>☎ {DEALER.phone}</a>
            <span className="top-divider">|</span>
            <a href={`mailto:${DEALER.email}`}>{DEALER.email}</a>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="container header-inner">
          <button
            className="brand"
            onClick={() => {
              setSelectedCar(null);
              goTo("home");
            }}
            aria-label="Về trang chủ"
          >
            <span className="brand-mark">F</span>
            <span className="brand-copy">
              <strong>HOÀNG FORD</strong>
              <small>AUTO CENTER</small>
            </span>
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenu((value) => !value)}
            aria-label="Mở menu"
          >
            ☰
          </button>

          <nav className={`main-nav ${mobileMenu ? "is-open" : ""}`}>
            <button onClick={() => { setSelectedCar(null); goTo("home"); }}>
              Trang chủ
            </button>
            <button onClick={() => { setSelectedCar(null); goTo("products"); }}>
              Sản phẩm
            </button>
            <button onClick={() => goTo("about")}>Về chúng tôi</button>
            <button onClick={() => goTo("contact")}>Liên hệ</button>
          </nav>

          <a className="header-cta" href={`tel:${DEALER.phoneLink}`}>
            <span>☎</span> {DEALER.phone}
          </a>
        </div>
      </header>

      {selectedCar ? (
        <main className="detail-page">
          <div className="container">
            <button
              className="back-link"
              onClick={() => setSelectedCar(null)}
            >
              ← Quay lại danh sách xe
            </button>

            <div className="detail-grid">
              <div className="detail-photo">
                <img src={selectedCar.image} alt={selectedCar.name} />
              </div>
              <div className="detail-content">
                <span className="eyebrow">{selectedCar.category}</span>
                <h1>{selectedCar.name}</h1>
                <p className="detail-subtitle">{selectedCar.subtitle}</p>
                <div className="detail-price">
                  <span>Giá bán tham khảo</span>
                  <strong>{selectedCar.price}</strong>
                </div>
                <p className="detail-description">
                  {selectedCar.description}
                </p>

                <div className="spec-grid">
                  <div><small>Năm sản xuất</small><strong>{selectedCar.year}</strong></div>
                  <div><small>Nhiên liệu</small><strong>{selectedCar.fuel}</strong></div>
                  <div><small>Hộp số</small><strong>{selectedCar.transmission}</strong></div>
                  <div><small>Số chỗ</small><strong>{selectedCar.seats}</strong></div>
                </div>

                <button
                  className="button button-primary button-wide"
                  onClick={() => {
                    setSelectedCar(null);
                    setTimeout(() => goTo("contact"), 50);
                  }}
                >
                  ĐĂNG KÝ TƯ VẤN MẪU XE NÀY
                </button>
                <a className="detail-call" href={`tel:${DEALER.phoneLink}`}>
                  Hoặc gọi trực tiếp {DEALER.phone}
                </a>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main>
          <section className="hero" id="home">
            <div className="hero-backdrop"></div>
            <div className="container hero-inner">
              <div className="hero-copy">
                <span className="hero-kicker">
                  <span></span> HOÀNG FORD AUTO CENTER
                </span>
                <h1>
                  VỮNG TAY LÁI.
                  <br />
                  <span>TRỌN HÀNH TRÌNH.</span>
                </h1>
                <p>
                  Khám phá thế giới xe Ford với những lựa chọn mạnh mẽ,
                  tiện nghi và phù hợp với phong cách sống của bạn.
                </p>
                <div className="hero-buttons">
                  <button
                    className="button button-primary"
                    onClick={() => goTo("products")}
                  >
                    KHÁM PHÁ CÁC DÒNG XE <span>→</span>
                  </button>
                  <button
                    className="button button-ghost"
                    onClick={() => goTo("contact")}
                  >
                    NHẬN TƯ VẤN
                  </button>
                </div>
                <div className="hero-note">
                  <span className="hero-note-line"></span>
                  TƯ VẤN TẬN TÂM · ĐỒNG HÀNH TIN CẬY
                </div>
              </div>

              <div className="hero-visual">
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=90"
                  alt="Hình ảnh xe ô tô"
                />
                <div className="hero-image-caption">
                  <span>DISCOVER YOUR DRIVE</span>
                  <strong>READY FOR EVERY ROAD.</strong>
                </div>
              </div>
            </div>
            <div className="hero-bottom container">
              <span>01 / 03</span>
              <span className="hero-bottom-line"></span>
              <span>HOANG FORD AUTO</span>
            </div>
          </section>

          <section className="quick-facts">
            <div className="container facts-grid">
              <div className="fact-item">
                <span className="fact-icon">01</span>
                <div><strong>Tư vấn tận tâm</strong><small>Lắng nghe nhu cầu của bạn</small></div>
              </div>
              <div className="fact-item">
                <span className="fact-icon">02</span>
                <div><strong>Thông tin rõ ràng</strong><small>Hỗ trợ lựa chọn phù hợp</small></div>
              </div>
              <div className="fact-item">
                <span className="fact-icon">03</span>
                <div><strong>Đồng hành lâu dài</strong><small>Hỗ trợ trong quá trình mua xe</small></div>
              </div>
            </div>
          </section>

          <section className="products-section section-pad" id="products">
            <div className="container">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">EXPLORE THE LINEUP</span>
                  <h2>KHÁM PHÁ CÁC DÒNG XE</h2>
                  <p>
                    Lựa chọn mẫu xe phù hợp với nhu cầu và phong cách
                    của riêng bạn.
                  </p>
                </div>
                <span className="section-number">01 — SẢN PHẨM</span>
              </div>

              <div className="product-tools">
                <div className="category-tabs">
                  {CATEGORIES.map((item) => (
                    <button
                      key={item}
                      className={activeCategory === item ? "active" : ""}
                      onClick={() => setActiveCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <input
                  className="search-input"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Tìm kiếm mẫu xe..."
                  aria-label="Tìm kiếm mẫu xe"
                />
              </div>

              <div className="car-grid">
                {visibleCars.map((car) => (
                  <article className="car-card" key={car.id}>
                    <button
                      className="car-image-button"
                      onClick={() => openCar(car)}
                      aria-label={`Xem ${car.name}`}
                    >
                      <img src={car.image} alt={car.name} loading="lazy" />
                      <span className="car-tag">{car.tag}</span>
                      <span className="image-arrow">↗</span>
                    </button>
                    <div className="car-card-body">
                      <span className="car-category">{car.category}</span>
                      <h3>{car.name}</h3>
                      <p>{car.subtitle}</p>
                      <div className="car-card-bottom">
                        <div>
                          <small>GIÁ THAM KHẢO</small>
                          <strong>{car.price}</strong>
                        </div>
                        <button onClick={() => openCar(car)}>
                          CHI TIẾT <span>→</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {visibleCars.length === 0 && (
                <div className="empty-state">
                  Không tìm thấy mẫu xe phù hợp. Vui lòng thử từ khóa khác.
                </div>
              )}
              <div className="products-footnote">
                * Giá xe chỉ mang tính chất tham khảo. Vui lòng liên hệ đại lý
                để được tư vấn giá và chương trình áp dụng tại thời điểm mua xe.
              </div>
            </div>
          </section>

          <section className="about-section section-pad" id="about">
            <div className="container about-grid">
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85"
                  alt="Không gian ô tô"
                  loading="lazy"
                />
                <div className="about-image-label">
                  <strong>HOÀNG FORD</strong>
                  <span>YOUR JOURNEY, OUR COMMITMENT</span>
                </div>
              </div>
              <div className="about-copy">
                <span className="eyebrow">ABOUT HOANG FORD</span>
                <h2>KHÔNG CHỈ LÀ MỘT CHIẾC XE. ĐÓ LÀ HÀNH TRÌNH CỦA BẠN.</h2>
                <p>
                  Hoàng Ford Auto hướng đến trải nghiệm tư vấn rõ ràng,
                  thân thiện và phù hợp với nhu cầu của từng khách hàng.
                  Chúng tôi hỗ trợ bạn tìm hiểu các dòng xe, lựa chọn
                  phiên bản và nhận thông tin cần thiết trước khi quyết định.
                </p>
                <div className="about-points">
                  <div><span>✓</span> Tư vấn theo nhu cầu thực tế</div>
                  <div><span>✓</span> Hỗ trợ thông tin sản phẩm</div>
                  <div><span>✓</span> Kết nối và chăm sóc khách hàng</div>
                </div>
                <button
                  className="button button-primary"
                  onClick={() => goTo("contact")}
                >
                  LIÊN HỆ VỚI CHÚNG TÔI
                </button>
              </div>
            </div>
          </section>

          <section className="contact-section section-pad" id="contact">
            <div className="container contact-grid">
              <div className="contact-copy">
                <span className="eyebrow">LET'S TALK</span>
                <h2>BẠN ĐANG TÌM KIẾM CHIẾC XE TIẾP THEO?</h2>
                <p>
                  Để lại thông tin và mẫu xe bạn quan tâm. Hoàng Ford
                  sẽ tiếp nhận yêu cầu và hỗ trợ bạn.
                </p>

                <div className="contact-details">
                  <div className="contact-detail">
                    <span className="contact-symbol">☎</span>
                    <div>
                      <small>HOTLINE</small>
                      <a href={`tel:${DEALER.phoneLink}`}>{DEALER.phone}</a>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-symbol">✉</span>
                    <div>
                      <small>EMAIL</small>
                      <a href={`mailto:${DEALER.email}`}>{DEALER.email}</a>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-symbol">⌖</span>
                    <div>
                      <small>ĐỊA CHỈ</small>
                      <a href={DEALER.map} target="_blank" rel="noreferrer">
                        {DEALER.address}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <form className="contact-form" onSubmit={submitLead}>
                <div className="form-heading">
                  <span>REQUEST A CONSULTATION</span>
                  <h3>ĐĂNG KÝ TƯ VẤN</h3>
                  <p>Vui lòng điền thông tin bên dưới.</p>
                </div>

                <label htmlFor="customer-name">Họ và tên *</label>
                <input
                  id="customer-name"
                  name="name"
                  placeholder="Nhập họ và tên"
                  required
                />

                <div className="form-row">
                  <div>
                    <label htmlFor="customer-phone">Số điện thoại *</label>
                    <input
                      id="customer-phone"
                      name="phone"
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="customer-email">Email</label>
                    <input
                      id="customer-email"
                      name="email"
                      type="email"
                      placeholder="Nhập email"
                    />
                  </div>
                </div>

                <label htmlFor="customer-car">Mẫu xe quan tâm</label>
                <select id="customer-car" name="car" defaultValue="">
                  <option value="">Chọn mẫu xe</option>
                  {cars.map((car) => (
                    <option key={car.id} value={car.name}>
                      {car.name}
                    </option>
                  ))}
                </select>

                <label htmlFor="customer-message">Nội dung cần tư vấn</label>
                <textarea
                  id="customer-message"
                  name="message"
                  rows="3"
                  placeholder="Bạn muốn tìm hiểu thêm thông tin gì?"
                />

                <button className="button button-primary submit-button" type="submit">
                  GỬI YÊU CẦU <span>→</span>
                </button>
                <small className="form-note">
                  Thông tin được sử dụng để liên hệ tư vấn theo yêu cầu của bạn.
                </small>
              </form>
            </div>
          </section>
        </main>
      )}

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-mark">F</span>
              <span className="brand-copy">
                <strong>HOÀNG FORD</strong>
                <small>AUTO CENTER</small>
              </span>
            </div>
            <p>
              Cùng bạn lựa chọn chiếc xe phù hợp cho những hành trình
              phía trước.
            </p>
          </div>
          <div className="footer-column">
            <h4>ĐIỀU HƯỚNG</h4>
            <button onClick={() => goTo("home")}>Trang chủ</button>
            <button onClick={() => goTo("products")}>Sản phẩm</button>
            <button onClick={() => goTo("about")}>Về chúng tôi</button>
            <button onClick={() => goTo("contact")}>Liên hệ</button>
          </div>
          <div className="footer-column footer-contact">
            <h4>THÔNG TIN LIÊN HỆ</h4>
            <a href={`tel:${DEALER.phoneLink}`}>{DEALER.phone}</a>
            <a href={`mailto:${DEALER.email}`}>{DEALER.email}</a>
            <a href={DEALER.map} target="_blank" rel="noreferrer">
              {DEALER.address}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© {new Date().getFullYear()} HOÀNG FORD AUTO.</span>
            <span>WE DRIVE YOUR JOURNEY FORWARD.</span>
            <button onClick={() => setLoginOpen(true)}>Quản trị viên</button>
          </div>
        </div>
      </footer>

      {loginOpen && (
        <div className="modal-backdrop" onClick={() => setLoginOpen(false)}>
          <form
            className="admin-modal"
            onSubmit={loginAdmin}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-x"
              onClick={() => setLoginOpen(false)}
              aria-label="Đóng"
            >
              ×
            </button>
            <span className="eyebrow">ADMIN ACCESS</span>
            <h2>ĐĂNG NHẬP QUẢN TRỊ</h2>
            <p>Khu vực quản lý nội dung website.</p>
            <label htmlFor="admin-password">Mật khẩu</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
            <button className="button button-primary button-wide" type="submit">
              ĐĂNG NHẬP
            </button>
            <small>Bản xem trước: mật khẩu demo là admin123.</small>
          </form>
        </div>
      )}

      {adminOpen && (
        <div className="admin-screen">
          <div className="admin-top">
            <div>
              <span className="eyebrow">HOANG FORD AUTO</span>
              <h2>QUẢN TRỊ WEBSITE</h2>
            </div>
            <button
              className="button button-outline"
              onClick={() => setAdminOpen(false)}
            >
              ĐÓNG QUẢN TRỊ
            </button>
          </div>

          <div className="admin-stats">
            <div><small>TỔNG SỐ XE</small><strong>{cars.length}</strong></div>
            <div><small>YÊU CẦU TRONG PHIÊN NÀY</small><strong>{leads.length}</strong></div>
          </div>

          <div className="admin-panel">
            <h3>THÊM MẪU XE</h3>
            <form className="admin-add-form" onSubmit={addCar}>
              <input
                value={newCar.name}
                onChange={(event) => setNewCar({ ...newCar, name: event.target.value })}
                placeholder="Tên mẫu xe"
                required
              />
              <select
                value={newCar.category}
                onChange={(event) => setNewCar({ ...newCar, category: event.target.value })}
              >
                {CATEGORIES.filter((item) => item !== "Tất cả").map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <input
                value={newCar.price}
                onChange={(event) => setNewCar({ ...newCar, price: event.target.value })}
                placeholder="Giá xe"
              />
              <input
                value={newCar.image}
                onChange={(event) => setNewCar({ ...newCar, image: event.target.value })}
                placeholder="Đường dẫn ảnh (không bắt buộc)"
              />
              <button className="button button-primary" type="submit">THÊM XE</
