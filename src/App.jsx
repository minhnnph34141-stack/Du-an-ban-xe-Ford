import { useMemo, useState } from 'react'

const vehicles = [
  {
    id: 1, name: 'Ford Ranger', type: 'Bán tải', tag: 'BÁN CHẠY',
    price: 'Từ 707 triệu', version: 'Wildtrak / XLS / XLT',
    description: 'Mạnh mẽ, linh hoạt cho công việc và những chuyến đi xa.',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 2, name: 'Ford Everest', type: 'SUV', tag: '7 CHỖ',
    price: 'Từ 1,099 tỷ', version: 'Titanium / Sport / Ambiente',
    description: 'Không gian rộng rãi, tiện nghi cho cả gia đình.',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 3, name: 'Ford Territory', type: 'SUV', tag: 'ĐÔ THỊ',
    price: 'Từ 799 triệu', version: 'Titanium X / Titanium / Trend',
    description: 'Thiết kế hiện đại, phù hợp nhịp sống thành thị.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 4, name: 'Ford Transit', type: 'Thương mại', tag: 'ĐA DỤNG',
    price: 'Liên hệ', version: 'Các phiên bản tùy chọn',
    description: 'Giải pháp vận chuyển hành khách và kinh doanh.',
    image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aber?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 5, name: 'Ford Explorer', type: 'SUV', tag: 'CAO CẤP',
    price: 'Liên hệ', version: 'Thông tin phiên bản tại showroom',
    description: 'Phong thái bề thế và trải nghiệm tiện nghi.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 6, name: 'Ford Mustang', type: 'Thể thao', tag: 'CÁ TÍNH',
    price: 'Liên hệ', version: 'Tùy phiên bản và nguồn xe',
    description: 'Dấu ấn thể thao dành cho người yêu cảm giác lái.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85'
  }
]

const types = ['Tất cả', 'Bán tải', 'SUV', 'Thương mại', 'Thể thao']

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>
}

function App() {
  const [activeType, setActiveType] = useState('Tất cả')
  const [search, setSearch] = useState('')
  const [selectedCar, setSelectedCar] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', interest: 'Tư vấn chọn xe', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const filteredVehicles = useMemo(() => vehicles.filter(car => {
    const matchesType = activeType === 'Tất cả' || car.type === activeType
    const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase())
    return matchesType && matchesSearch
  }), [activeType, search])

  const chooseCar = (name) => {
    setSelectedCar(name)
    setForm(current => ({ ...current, interest: `Tư vấn ${name}` }))
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  return (
    <>
      <div className="topline">TƯ VẤN SẢN PHẨM • THÔNG TIN THAM KHẢO • ĐỒNG HÀNH TRÊN MỌI HÀNH TRÌNH</div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Ford Horizon trang chủ">
          <span className="brand-mark">F</span>
          <span>FORD<span className="brand-light"> HORIZON</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu">☰</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Trang chủ</a>
          <a href="#vehicles" onClick={() => setMenuOpen(false)}>Dòng xe</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Về chúng tôi</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Nhận tư vấn <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-bg"></div>
          <div className="hero-content">
            <div className="eyebrow"><span></span> SẴN SÀNG CHO HÀNH TRÌNH MỚI</div>
            <h1>Vượt mọi giới hạn.<br /><em>Mở lối tương lai.</em></h1>
            <p>Khám phá các dòng xe Ford, tìm chiếc xe phù hợp với phong cách sống và kế hoạch của bạn.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#vehicles">Khám phá dòng xe <span>↗</span></a>
              <a className="button button-ghost" href="#contact">Đăng ký tư vấn</a>
            </div>
            <div className="hero-note"><span className="note-line"></span> TỰ TIN CẦM LÁI · AN TÂM TRÊN MỌI CUNG ĐƯỜNG</div>
          </div>
          <div className="hero-index"><strong>01</strong><span> / 03</span></div>
          <div className="hero-bottom">
            <div><strong>Khám phá</strong><span>Những lựa chọn đáng cân nhắc</span></div>
            <div><strong>Tư vấn</strong><span>Thông tin theo nhu cầu của bạn</span></div>
            <div><strong>Trải nghiệm</strong><span>Đăng ký lái thử và cảm nhận</span></div>
          </div>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-kicker">01 / GIỚI THIỆU</div>
          <div className="intro-grid">
            <h2>Chiếc xe phù hợp<br />bắt đầu từ <em>nhu cầu</em><br />của bạn.</h2>
            <div className="intro-copy">
              <p className="lead">Mỗi hành trình đều có một câu chuyện. Chúng tôi giúp bạn tìm hiểu các lựa chọn xe, so sánh nhu cầu sử dụng và kết nối tư vấn phù hợp.</p>
              <p>Khám phá thông tin các dòng xe, tham khảo phiên bản và gửi yêu cầu để được hỗ trợ thêm. Thông tin giá và trang bị trên website cần được xác nhận tại thời điểm tư vấn.</p>
              <a className="text-link" href="#contact">Bắt đầu cuộc trò chuyện <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="vehicles-section" id="vehicles">
          <div className="section-wrap">
            <div className="section-heading">
              <div><div className="section-kicker">02 / DANH MỤC SẢN PHẨM</div><h2>Chọn xe cho<br /><em>hành trình của bạn.</em></h2></div>
              <p>Từ đô thị đến đường trường, từ công việc đến những chuyến đi cùng gia đình — khám phá lựa chọn dành cho bạn.</p>
            </div>
            <div className="catalog-tools">
              <div className="filters">
                {types.map(type => <button key={type} className={activeType === type ? 'filter active' : 'filter'} onClick={() => setActiveType(type)}>{type}</button>)}
              </div>
              <label className="search-box"><span>⌕</span><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tìm tên xe..." /></label>
            </div>
            <div className="vehicle-grid">
              {filteredVehicles.map((car, index) => (
                <article className="vehicle-card" key={car.id}>
                  <div className="vehicle-image">
                    <img src={car.image} alt={`Ảnh minh họa ${car.name}`} loading="lazy" />
                    <span className="vehicle-tag">{car.tag}</span>
                    <span className="vehicle-number">0{index + 1}</span>
                  </div>
                  <div className="vehicle-info">
                    <div className="vehicle-type">{car.type}</div>
                    <h3>{car.name}</h3>
                    <p>{car.description}</p>
                    <div className="vehicle-meta"><span>{car.version}</span><strong>{car.price}</strong></div>
                    <button className="card-link" onClick={() => chooseCar(car.name)}>Nhận tư vấn <span>↗</span></button>
                  </div>
                </article>
              ))}
            </div>
            {filteredVehicles.length === 0 && <div className="empty-state">Không tìm thấy dòng xe phù hợp. Hãy thử từ khóa khác.</div>}
            <p className="disclaimer">* Hình ảnh mang tính minh họa. Giá bán, phiên bản, trang bị và chương trình ưu đãi có thể thay đổi; vui lòng liên hệ để xác nhận thông tin mới nhất.</p>
          </div>
        </section>

        <section className="experience">
          <div className="experience-image"></div>
          <div className="experience-content">
            <div className="section-kicker">03 / TRẢI NGHIỆM CỦA BẠN</div>
            <h2>Đừng chỉ nghe kể.<br /><em>Hãy tự mình trải nghiệm.</em></h2>
            <p>Để lại thông tin và dòng xe bạn quan tâm. Đội ngũ tư vấn sẽ liên hệ để trao đổi về sản phẩm và lịch lái thử phù hợp.</p>
            <a className="button button-primary" href="#contact">Đăng ký ngay <span>↗</span></a>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-intro">
            <div className="section-kicker">04 / KẾT NỐI VỚI CHÚNG TÔI</div>
            <h2>Bạn đã sẵn sàng<br />cho <em>chặng đường mới?</em></h2>
            <p>Gửi thông tin để nhận tư vấn về dòng xe, phiên bản và lịch trải nghiệm.</p>
            <div className="contact-detail"><span>✉</span><div><small>EMAIL</small><strong>2k2hoangha@gmail.com</strong></div></div>
            <div className="contact-detail"><span>⌖</span><div><small>ĐỊA CHỈ</small><strong>311 Đ. Trường Chinh, Phương Liệt, Hà Nội</strong></div></div>
          </div>
          <div className="form-panel">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">✓</div>
                <h3>Cảm ơn bạn!</h3>
                <p>Thông tin đã được ghi nhận trên trang demo này. Để nhận yêu cầu thực tế, chủ website cần kết nối form với email hoặc hệ thống quản lý khách hàng.</p>
                <button className="button button-primary" onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', interest: 'Tư vấn chọn xe', message: '' }) }}>Gửi yêu cầu khác</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-title"><span>FORM TƯ VẤN</span><small>* Thông tin bắt buộc</small></div>
                <label>Họ và tên <b>*</b><input name="name" value={form.name} onChange={updateForm} placeholder="Nhập họ và tên" required /></label>
                <label>Số điện thoại <b>*</b><input name="phone" value={form.phone} onChange={updateForm} placeholder="Nhập số điện thoại" type="tel" pattern="[0-9+(). -]{9,16}" required /></label>
                <label>Nội dung quan tâm<select name="interest" value={form.interest} onChange={updateForm}><option>Tư vấn chọn xe</option><option>Đăng ký lái thử</option>{vehicles.map(car => <option key={car.id}>Tư vấn {car.name}</option>)}</select></label>
                <label>Lời nhắn<textarea name="message" value={form.message} onChange={updateForm} placeholder="Bạn muốn được tư vấn thêm điều gì?" rows="3"></textarea></label>
                <button className="button button-primary submit-button" type="submit">Gửi yêu cầu <span>↗</span></button>
                <p className="form-privacy">Bằng việc gửi biểu mẫu, bạn đồng ý để showroom liên hệ tư vấn theo thông tin đã cung cấp.</p>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">F</span><span>FORD<span className="brand-light"> HORIZON</span></span></a>
        <p>Khám phá lựa chọn. Bắt đầu hành trình. Trần Văn Hoàng – Chuyên viên tư vấn xe Ford cao cấp Đồng hành cùng bạn chinh phục mọi hành trình với giải pháp sở hữu xe tối ưu, ưu đãi tốt nhất thị trường và dịch vụ tận tâm. <br />
  📞 Hotline/Zalo tư vấn 24/7:0978841002.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Ford Horizon — Website mẫu độc lập.</span><a href="#home">Lên đầu trang ↑</a></div>
        <small className="footer-disclaimer">Website mẫu không phải website chính thức của Ford Motor Company và không đại diện cho đại lý được ủy quyền.</small>
      </footer>
    </>
  )
}

export default App
