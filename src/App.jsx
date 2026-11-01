import { useState } from 'react'
import './styles.css'

const cars = [
{
name: 'Ford Ranger',
type: 'Bán tải',
price: 'Từ 665 triệu',
image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=1000'
},
{
name: 'Ford Everest',
type: 'SUV',
price: 'Từ 1,099 tỷ',
image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1000'
},
{
name: 'Ford Territory',
type: 'SUV',
price: 'Từ 762 triệu',
image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1000'
},
{
name: 'Ford Transit',
type: 'Thương mại',
price: 'Liên hệ báo giá',
image: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=1000'
},
{
name: 'Ford Explorer',
type: 'SUV',
price: 'Liên hệ báo giá',
image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1000'
},
{
name: 'Ford Mustang',
type: 'Thể thao',
price: 'Liên hệ báo giá',
image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000'
}
]

const dealer = {
phone: '0978841002',
displayPhone: '0978 841 002',
email: '2k2hoangha@gmail.com',
address: '311 Đ. Trường Chinh, Phương Liệt, Hà Nội',
map: 'https://www.google.com/maps/search/?api=1&query=311+Duong+Truong+Chinh+Phuong+Liet+Ha+Noi'
}

function App() {
const [search, setSearch] = useState('')
const [activeType, setActiveType] = useState('Tất cả')
const [form, setForm] = useState({
name: '',
phone: '',
car: '',
message: ''
})

const types = ['Tất cả', 'SUV', 'Bán tải', 'Thương mại', 'Thể thao']

const filteredCars = cars.filter(car => {
const matchType = activeType === 'Tất cả' || car.type === activeType
const matchSearch = car.name.toLowerCase().includes(search.toLowerCase())
return matchType && matchSearch
})

function handleSubmit(event) {
event.preventDefault()

const message = `Xin chào, tôi muốn được tư vấn mua xe.

Họ tên: ${form.name}
Số điện thoại: ${form.phone}
Xe quan tâm: ${form.car || 'Chưa chọn'}
Nội dung: ${form.message || 'Không có'}`

const gmailUrl = `mailto:${dealer.email}?subject=${encodeURIComponent('Yêu cầu tư vấn mua xe')}&body=${encodeURIComponent(message)}`

window.location.href = gmailUrl

}

return (
<div className="website">

  <div className="topbar">
    <div className="container topbar-inner">
      <span>FORD AUTOMOTIVE EXPERIENCE</span>
      <div>
        <a href={`tel:${dealer.phone}`}>☎ {dealer.displayPhone}</a>
        <a href={`mailto:${dealer.email}`}>✉ {dealer.email}</a>
      </div>
    </div>
  </div>

  <header className="navbar">
    <a className="brand" href="#home">FORD<span>®</span></a>

    <nav>
      <a href="#home">Trang chủ</a>
      <a href="#cars">Dòng xe</a>
      <a href="#about">Giới thiệu</a>
      <a href="#contact">Liên hệ</a>
    </nav>

    <a className="nav-button" href="#contact">Nhận tư vấn ↗</a>
  </header>

  <main>
    <section className="hero" id="home">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1800"
          alt="Xe SUV trên đường"
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <p className="eyebrow">FORD AUTOMOTIVE EXPERIENCE</p>
        <h1>
          KHÁM PHÁ<br />
          HÀNH TRÌNH<br />
          <span>KHÔNG GIỚI HẠN</span>
        </h1>

        <p className="hero-description">
          Khám phá những dòng xe Ford mạnh mẽ, công nghệ tiên tiến
          và lựa chọn người bạn đồng hành cho mọi hành trình.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#cars">
            Khám phá dòng xe ↗
          </a>
          <a className="outline-button" href="#contact">
            Đăng ký lái thử
          </a>
        </div>
      </div>

      <div className="container hero-bottom">
        <span>01 / DISCOVER FORD</span>
        <span>POWER · TECHNOLOGY · FREEDOM</span>
      </div>
    </section>

    <section className="intro container" id="about">
      <p className="eyebrow">VƯỢT MỌI GIỚI HẠN</p>
      <h2>
        Một chiếc xe tốt.<br />
        <span>Hàng triệu hành trình đáng nhớ.</span>
      </h2>
      <p>
        Chọn chiếc Ford phù hợp với phong cách sống, công việc
        và những cung đường bạn muốn chinh phục.
      </p>
    </section>

    <section className="cars-section" id="cars">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE THE LINEUP</p>
            <h2>Khám phá <span>dòng xe Ford</span></h2>
          </div>
          <p>Lựa chọn mẫu xe phù hợp với bạn</p>
        </div>

        <div className="car-tools">
          <input
            type="search"
            placeholder="Tìm kiếm mẫu xe..."
            value={search}
            onChange={event => setSearch(event.target.value)}
          />

          <div className="filters">
            {types.map(type => (
              <button
                key={type}
                className={activeType === type ? 'filter active' : 'filter'}
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="car-grid">
          {filteredCars.map((car, index) => (
            <article className="car-card" key={car.name}>
              <div className="car-image">
                <img src={car.image} alt={car.name} loading="lazy" />
                <span className="car-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="car-info">
                <span className="car-type">{car.type}</span>
                <h3>{car.name}</h3>

                <div className="car-footer">
                  <span>{car.price}</span>
                  <a
                    href="#contact"
                    onClick={() => setForm(old => ({
                      ...old,
                      car: car.name
                    }))}
                  >
                    Tư vấn ↗
                  </a>
                </div>
              </div>
            </article>
          ))}

          {filteredCars.length === 0 && (
            <p className="empty-result">Không tìm thấy mẫu xe phù hợp.</p>
          )}
        </div>
      </div>
    </section>

    <section className="contact-section" id="contact">
      <div className="container contact-layout">

        <div className="contact-copy">
          <p className="eyebrow">LET'S GET STARTED</p>
          <h2>
            Sẵn sàng cho<br />
            <span>hành trình mới?</span>
          </h2>

          <p className="contact-description">
            Để lại thông tin. Đội ngũ tư vấn sẽ liên hệ với bạn
            về mẫu xe và chương trình phù hợp.
          </p>

          <div className="dealer-details">
            <h3>THÔNG TIN LIÊN HỆ</h3>

            <div className="dealer-item">
              <span className="dealer-icon">☎</span>
              <div>
                <small>ĐIỆN THOẠI</small>
                <a href={`tel:${dealer.phone}`}>
                  {dealer.displayPhone}
                </a>
              </div>
            </div>

            <div className="dealer-item">
              <span className="dealer-icon">✉</span>
              <div>
                <small>EMAIL</small>
                <a href={`mailto:${dealer.email}`}>
                  {dealer.email}
                </a>
              </div>
            </div>

            <div className="dealer-item">
              <span className="dealer-icon">⌖</span>
              <div>
                <small>ĐỊA CHỈ</small>
                <p>{dealer.address}</p>
              </div>
            </div>

            <a
              className="map-button"
              href={dealer.map}
              target="_blank"
              rel="noreferrer"
            >
              Xem đường đến đại lý ↗
            </a>
          </div>
        </div>

        <form className="lead-form" onSubmit={handleSubmit}>
          <p className="eyebrow">CONTACT US</p>
          <h3>Đăng ký tư vấn</h3>
          <p className="form-description">
            Điền thông tin để được hỗ trợ nhanh chóng.
          </p>

          <label>Họ và tên *</label>
          <input
            required
            placeholder="Nhập họ và tên"
            value={form.name}
            onChange={event => setForm({
              ...form,
              name: event.target.value
            })}
          />

          <label>Số điện thoại *</label>
          <input
            required
            type="tel"
            pattern="[0-9+() .-]{9,16}"
            placeholder="Nhập số điện thoại"
            value={form.phone}
            onChange={event => setForm({
              ...form,
              phone: event.target.value
            })}
          />

          <label>Mẫu xe quan tâm</label>
          <select
            value={form.car}
            onChange={event => setForm({
              ...form,
              car: event.target.value
            })}
          >
            <option value="">Chọn dòng xe</option>
            {cars.map(car => (
              <option key={car.name} value={car.name}>
                {car.name}
              </option>
            ))}
          </select>

          <label>Nội dung cần tư vấn</label>
          <textarea
            rows="3"
            placeholder="Ví dụ: Tôi muốn nhận báo giá và chương trình trả góp..."
            value={form.message}
            onChange={event => setForm({
              ...form,
              message: event.target.value
            })}
          />

          <button className="submit-button" type="submit">
            Gửi yêu cầu tư vấn ↗
          </button>

          <small className="privacy-note">
            Thông tin được sử dụng để phản hồi yêu cầu tư vấn của bạn.
          </small>
        </form>
      </div>
    </section>
  </main>

  <footer className="footer">
    <div className="container footer-content">
      <a className="brand footer-brand" href="#home">FORD<span>®</span></a>
      <div>
        <p>GO FURTHER.</p>
        <span>{dealer.address}</span>
        <span>{dealer.displayPhone} · {dealer.email}</span>
      </div>
      <a href="#home" className="back-top">Lên đầu trang ↑</a>
    </div>
    <div className="footer-bottom">
      © 2026 Website giới thiệu xe Ford. Trang web độc lập.
    </div>
  </footer>

  <a className="floating-call" href={`tel:${dealer.phone}`} aria-label="Gọi điện">
    ☎
  </a>

</div>

)
}

export default App
