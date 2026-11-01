import React, { useState } from "react";
import "./styles.css";

const CONTACT = {
  name: "HOÀNG FORD AUTO",
  phone: "0978 841 002",
  email: "2k2hoangha@gmail.com",
  address: "311 Đ. Trường Chinh, Phương Liệt, Hà Nội",
};

const initialCars = [
  {
    id: 1,
    name: "Ford Ranger",
    category: "Bán tải",
    price: "665 triệu",
    year: 2025,
    fuel: "Dầu",
    transmission: "Số tự động",
    image:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=85",
    description:
      "Ford Ranger mạnh mẽ, đa dụng, phù hợp cho công việc và những chuyến đi xa.",
  },
  {
    id: 2,
    name: "Ford Everest",
    category: "SUV",
    price: "1,099 tỷ",
    year: 2025,
    fuel: "Dầu",
    transmission: "Số tự động",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Ford Everest rộng rãi, tiện nghi, phù hợp cho gia đình và hành trình dài.",
  },
  {
    id: 3,
    name: "Ford Territory",
    category: "SUV",
    price: "762 triệu",
    year: 2025,
    fuel: "Xăng",
    transmission: "Số tự động",
    image:
      "https://images.unsplash.com/photo-151 SUV?auto=format&fit=crop&w=1200&q=85",
    description:
      "Ford Territory sở hữu thiết kế hiện đại, không gian thoải mái và nhiều công nghệ.",
  },
  {
    id: 4,
    name: "Ford Transit",
    category: "Thương mại",
    price: "905 triệu",
    year: 2025,
    fuel: "Dầu",
    transmission: "Số sàn",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Ford Transit là lựa chọn thực dụng cho nhu cầu vận chuyển và kinh doanh.",
  },
  {
    id: 5,
    name: "Ford Explorer",
    category: "SUV",
    price: "2,099 tỷ",
    year: 2025,
    fuel: "Xăng",
    transmission: "Số tự động",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
    description:
      "Ford Explorer mang đến không gian rộng rãi, thiết kế sang trọng và khả năng vận hành mạnh mẽ.",
  },
  {
    id: 6,
    name: "Ford Mustang",
    category: "Thể thao",
    price: "Liên hệ",
    year: 2025,
    fuel: "Xăng",
    transmission: "Số tự động",
    image:
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=85",
    description:
      "Ford Mustang mang phong cách thể thao mạnh mẽ và cá tính.",
  },
];

function App() {
  const [cars, setCars] = useState(initialCars);
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [selectedCar, setSelectedCar] = useState(null);
  const [page, setPage] = useState("home");
  const [showAdmin, setShowAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [newCarName, setNewCarName] = useState("");
  const [newCarPrice, setNewCarPrice] = useState("");
  const [newCarCategory, setNewCarCategory] = useState("SUV");

  const filteredCars = cars.filter((car) => {
    const matchSearch = car.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "Tất cả" || car.category === category;

    return matchSearch && matchCategory;
  });

  const handleLeadSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);

    const lead = {
      id: Date.now(),
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      message: form.get("message"),
      car: selectedCar?.name || "Tư vấn chung",
      date: new Date().toLocaleString("vi-VN"),
    };

    setLeads((oldLeads) => [lead, ...oldLeads]);

    alert("Đăng ký tư vấn thành công! Hoàng Ford Auto sẽ liên hệ với bạn.");

    event.target.reset();
  };

  const handleAdminLogin = (event) => {
    event.preventDefault();

    if (adminPassword === "admin123") {
      setLoggedIn(true);
      setShowAdmin(false);
      setPage("admin");
      setAdminPassword("");
    } else {
      alert("Mật khẩu chưa chính xác!");
    }
  };

  const addCar = (event) => {
    event.preventDefault();

    if (!newCarName.trim() || !newCarPrice.trim()) {
      alert("Vui lòng nhập tên xe và giá xe.");
      return;
    }

    const newCar = {
      id: Date.now(),
      name: newCarName,
      category: newCarCategory,
      price: newCarPrice,
      year: 2025,
      fuel: "Liên hệ",
      transmission: "Liên hệ",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
      description: "Vui lòng liên hệ để biết thêm thông tin về mẫu xe.",
    };

    setCars((oldCars) => [...oldCars, newCar]);
    setNewCarName("");
    setNewCarPrice("");
    alert("Đã thêm xe vào danh sách!");
  };

  const deleteCar = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa xe này?")) {
      setCars((oldCars) => oldCars.filter((car) => car.id !== id));
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setPage("home");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="website">
      <div className="topbar">
        <div className="container topbar-content">
          <span>Chào mừng đến với {CONTACT.name}</span>
          <div>
            <a href={`tel:${CONTACT.phone.replaceAll(" ", "")}`}>
              ☎ {CONTACT.phone}
            </a>
            <span className="topbar-separator">|</span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header-content">
          <button className="logo" onClick={() => setPage("home")}>
            <span className="logo-icon">F</span>
            <span>
              <strong>HOÀNG FORD</strong>
              <small>AUTO CENTER</small>
            </span>
          </button>

          <nav className="navigation">
            <button onClick={() => setPage("home")}>Trang chủ</button>
            <button onClick={() => setPage("cars")}>Sản phẩm</button>
            <button onClick={scrollToContact}>Liên hệ</button>
            <button onClick={() => setShowAdmin(true)}>Quản trị</button>
          </nav>

          <a className="header-phone" href={`tel:${CONTACT.phone.replaceAll(" ", "")}`}>
            Gọi ngay
          </a>
        </div>
      </header>

      {page === "home" && (
        <>
          <section className="hero">
            <div className="container hero-content">
              <div className="hero-text">
                <span className="hero-label">HOÀNG FORD AUTO</span>
                <h1>
                  KHÁM PHÁ
                  <br />
                  <span>CHẤT RIÊNG</span>
                  <br />
                  CÙNG FORD
                </h1>
                <p>
                  Khám phá các dòng xe Ford nổi bật. Tư vấn tận tâm,
                  hỗ trợ lựa chọn mẫu xe phù hợp với nhu cầu của bạn.
                </p>
                <div className="hero-actions">
                  <button
                    className="button button-primary"
                    onClick={() => setPage("cars")}
                  >
                    Khám phá xe
                  </button>
                  <button
                    className="button button-outline"
                    onClick={scrollToContact}
                  >
                    Nhận tư vấn
                  </button>
                </div>
              </div>
              <div className="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1500&q=90"
                  alt="Xe ô tô"
                />
              </div>
            </div>
          </section>

          <section className="benefits">
            <div className="container benefits-grid">
              <div>
                <span>01</span>
                <h3>Tư vấn tận tâm</h3>
                <p>Hỗ trợ lựa chọn xe phù hợp nhu cầu.</p>
              </div>
              <div>
                <span>02</span>
                <h3>Thông tin minh bạch</h3>
                <p>Tư vấn rõ ràng về xe và giá bán.</p>
              </div>
              <div>
                <span>03</span>
                <h3>Hỗ trợ khách hàng</h3>
                <p>Đồng hành trong quá trình mua xe.</p>
              </div>
            </div>
          </section>
        </>
      )}

      {page === "cars" && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">DANH SÁCH SẢN PHẨM</span>
              <h2>CÁC DÒNG XE FORD</h2>
              <p>Tìm kiếm mẫu xe phù hợp với nhu cầu của bạn.</p>
            </div>

            <div className="filter-area">
              <input
                type="text"
                placeholder="Tìm tên xe..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option>Tất cả</option>
                <option>Bán tải</option>
                <option>SUV</option>
                <option>Thương mại</option>
                <option>Thể thao</option>
              </select>
            </div>

            <div className="car-grid">
              {filteredCars.map((car) => (
                <article className="car-card" key={car.id}>
                  <div className="car-image">
                    <img src={car.image} alt={car.name} />
                    <span>{car.category}</span>
                  </div>
                  <div className="car-info">
                    <h3>{car.name}</h3>
                    <p className="car-description">{car.description}</p>
                    <div className="car-meta">
                      <span>📅 {car.year}</span>
                      <span>⚙ {car.transmission}</span>
                    </div>
                    <div className="car-bottom">
                      <strong>{car.price}</strong>
                      <button
                        onClick={() => {
                          setSelectedCar(car);
                          setPage("detail");
                        }}
                      >
                        Chi tiết →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <p className="empty-state">Không tìm thấy mẫu xe phù hợp.</p>
            )}
          </div>
        </section>
      )}

      {page === "detail" && selectedCar && (
        <section className="section">
          <div className="container detail-layout">
            <img
              className="detail-image"
              src={selectedCar.image}
              alt={selectedCar.name}
            />

            <div className="detail-info">
              <span className="section-label">{selectedCar.category}</span>
              <h2>{selectedCar.name}</h2>
              <h3 className="detail-price">{selectedCar.price}</h3>
              <p>{selectedCar.description}</p>

              <ul className="detail-list">
                <li>Năm sản xuất: {selectedCar.year}</li>
                <li>Nhiên liệu: {selectedCar.fuel}</li>
                <li>Hộp số: {selectedCar.transmission}</li>
              </ul>

              <button
                className="button button-primary"
                onClick={scrollToContact}
              >
                Đăng ký tư vấn xe này
              </button>

              <button
                className="back-button"
                onClick={() => setPage("cars")}
              >
                ← Quay lại danh sách xe
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="contact-section" id="contact">
        <div className="container contact-layout">
          <div className="contact-info">
            <span className="section-label">KẾT NỐI VỚI CHÚNG TÔI</span>
            <h2>NHẬN TƯ VẤN MUA XE</h2>
            <p>
              Để lại thông tin, chúng tôi sẽ tiếp nhận yêu cầu tư vấn
              và liên hệ lại với bạn.
            </p>

            <div className="contact-item">
              <strong>Điện thoại</strong>
              <a href="tel:0978841002">{CONTACT.phone}</a>
            </div>
            <div className="contact-item">
              <strong>Email</strong>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div className="contact-item">
              <strong>Địa chỉ</strong>
              <span>{CONTACT.address}</span>
            </div>

            <a
              className="map-link"
              href="https://www.google.com/maps/search/?api=1&query=311+Duong+Truong+Chinh+Phuong+Liet+Ha+Noi"
              target="_blank"
              rel="noreferrer"
            >
              Xem bản đồ →
            </a>
          </div>

          <form className="contact-form" onSubmit={handleLeadSubmit}>
            <h3>ĐĂNG KÝ TƯ VẤN</h3>

            <label>Họ và tên *</label>
            <input
              name="name"
              placeholder="Nhập họ tên"
              required
            />

            <label>Số điện thoại *</label>
            <input
              name="phone"
              type="tel"
              placeholder="Nhập số điện thoại"
              required
            />

            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Nhập email"
            />

            <label>Nội dung cần tư vấn</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Bạn quan tâm đến mẫu xe nào?"
            />

            <button className="button button-primary" type="submit">
              GỬI YÊU CẦU TƯ VẤN
            </button>
            <small>
              * Bản demo lưu thông tin tạm thời trong phiên sử dụng.
            </small>
          </form>
        </div>
      </section>

      {page === "admin" && loggedIn && (
        <section className="section admin-section">
          <div className="container">
            <div className="admin-heading">
              <div>
                <span className="section-label">ADMINISTRATION</span>
                <h2>QUẢN LÝ HOÀNG FORD AUTO</h2>
              </div>
              <button className="button button-outline-dark" onClick={logout}>
                Đăng xuất
              </button>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <span>Tổng số xe</span>
                <strong>{cars.length}</strong>
              </div>
              <div className="stat-card">
                <span>Khách hàng đăng ký</span>
                <strong>{leads.length}</strong>
              </div>
            </div>

            <div className="admin-panel">
              <h3>Thêm xe mới</h3>
              <form className="add-car-form" onSubmit={addCar}>
                <input
                  value={newCarName}
                  onChange={(event) => setNewCarName(event.target.value)}
                  placeholder="Tên xe"
                  required
                />
                <input
                  value={newCarPrice}
                  onChange={(event) => setNewCarPrice(event.target.value)}
                  placeholder="Giá xe"
                  required
                />
                <select
                  value={newCarCategory}
                  onChange={(event) => setNewCarCategory(event.target.value)}
                >
                  <option>SUV</option>
                  <option>Bán tải</option>
                  <option>Thương mại</option>
                  <option>Thể thao</option>
                </select>
                <button className="button button-primary" type="submit">
                  + Thêm xe
                </button>
              </form>
            </div>

            <div className="admin-panel">
              <h3>Danh sách xe</h3>
              <div className="admin-table">
                {cars.map((car) => (
                  <div className="admin-row" key={car.id}>
                    <span>{car.name}</span>
                    <span>{car.category}</span>
                    <strong>{car.price}</strong>
                    <button onClick={() => deleteCar(car.id)}>
                      Xóa
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-panel">
              <h3>Danh sách khách hàng đăng ký tư vấn</h3>
              {leads.length === 0 ? (
                <p>Chưa có khách hàng đăng ký.</p>
              ) : (
                <div className="admin-table">
                  {leads.map((lead) => (
                    <div className="lead-row" key={lead.id}>
                      <strong>{lead.name}</strong>
                      <span>{lead.phone}</span>
                      <span>{lead.email || "Không cung cấp email"}</span>
                      <span>{lead.car}</span>
                      <span>{lead.message}</span>
                      <small>{lead.date}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <h2>HOÀNG FORD AUTO</h2>
            <p>Đồng hành cùng bạn trên mọi hành trình.</p>
          </div>
          <div>
            <strong>Liên hệ</strong>
            <p>{CONTACT.phone}</p>
            <p>{CONTACT.email}</p>
            <p>{CONTACT.address}</p>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Hoàng Ford Auto. Website giới thiệu xe.
        </div>
      </footer>

      {showAdmin && (
        <div className="modal-overlay" onClick={() => setShowAdmin(false)}>
          <form
            className="login-modal"
            onSubmit={handleAdminLogin}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setShowAdmin(false)}
            >
              ×
            </button>
            <h2>ĐĂNG NHẬP QUẢN TRỊ</h2>
            <p>Nhập mật khẩu để mở trang quản lý demo.</p>
            <input
              type="password"
              placeholder="Mật khẩu quản trị"
              value={adminPassword}
              onChange={(event) => setAdminPassword(event.target.value)}
              required
            />
            <button className="button button-primary" type="submit">
              Đăng nhập
            </button>
            <small>Mật khẩu demo: admin123</small>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
