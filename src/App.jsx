* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #101820;
  background: #fff;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
select,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, 90%);
  margin: auto;
}

.topbar {
  background: #061a35;
  color: #fff;
  font-size: 12px;
  padding: 11px 0;
}

.topbar-inner,
.topbar-inner > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.topbar a {
  color: #dce9f8;
}

.navbar {
  height: 82px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0 3px 16px rgba(0,0,0,.06);
}

.brand {
  color: #0756a5;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 2px;
  font-style: italic;
}

.brand span {
  font-size: 11px;
  vertical-align: top;
}

.navbar nav {
  display: flex;
  gap: 32px;
}

.navbar nav a {
  font-size: 14px;
  font-weight: 600;
  transition: color .2s;
}

.navbar nav a:hover {
  color: #0866c6;
}

.nav-button,
.primary-button,
.submit-button {
  background: #0756a5;
  color: #fff;
  padding: 15px 23px;
  border: 0;
  font-weight: 700;
  display: inline-block;
  transition: .25s;
  cursor: pointer;
}

.nav-button:hover,
.primary-button:hover,
.submit-button:hover {
  background: #003c78;
  transform: translateY(-2px);
}

.hero {
  min-height: 650px;
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  overflow: hidden;
  background: #061a35;
}

.hero-background,
.hero-overlay {
  position: absolute;
  inset: 0;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  background: linear-gradient(90deg, rgba(3,17,36,.95), rgba(3,17,36,.62) 48%, rgba(3,17,36,.08));
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 30px;
  padding-bottom: 75px;
}

.eyebrow {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #65a9f2;
  margin-bottom: 22px;
}

.hero h1 {
  font-size: clamp(42px, 6vw, 76px);
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: -2px;
}

.hero h1 span {
  color: #66aaff;
}

.hero-description {
  max-width: 510px;
  line-height: 1.8;
  color: #e1e9f3;
  margin-top: 25px;
  font-size: 16px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.outline-button {
  padding: 15px 23px;
  border: 1px solid #fff;
  color: #fff;
  font-weight: 700;
  transition: .2s;
}

.outline-button:hover {
  background: #fff;
  color: #061a35;
}

.hero-bottom {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  letter-spacing: 2px;
  color: #d6e4f4;
}

.intro {
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
}

.intro h2,
.section-heading h2 {
  font-size: clamp(30px, 4vw, 46px);
  line-height: 1.25;
  margin-bottom: 20px;
}

.intro h2 span,
.section-heading h2 span {
  color: #0756a5;
}

.intro > p:last-child {
  max-width: 650px;
  margin: auto;
  color: #657184;
  line-height: 1.8;
}

.cars-section {
  background: #f3f6fa;
  padding: 90px 0 100px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 35px;
}

.section-heading .eyebrow {
  margin-bottom: 12px;
}

.section-heading > p {
  color: #697586;
  padding-bottom: 8px;
}

.car-tools {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 35px;
}

.car-tools input {
  width: 100%;
  max-width: 420px;
  padding: 15px 17px;
  border: 1px solid #d6deea;
  background: #fff;
  outline: none;
}

.car-tools input:focus,
.lead-form input:focus,
.lead-form select:focus,
.lead-form textarea:focus {
  border-color: #0756a5;
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter {
  padding: 10px 19px;
  border: 1px solid #d5deea;
  background: #fff;
  color: #253348;
  cursor: pointer;
}

.filter.active,
.filter:hover {
  background: #0756a5;
  color: #fff;
  border-color: #0756a5;
}

.car-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.car-card {
  background: #fff;
  overflow: hidden;
  transition: transform .25s, box-shadow .25s;
}

.car-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0,30,70,.12);
}

.car-image {
  height: 230px;
  position: relative;
  overflow: hidden;
  background: #e2e8f0;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s;
}

.car-card:hover .car-image img {
  transform: scale(1.05);
}

.car-number {
  position: absolute;
  top: 15px;
  left: 15px;
  color: #fff;
  background: #0756a5;
  padding: 8px 12px;
  font-size: 12px;
}

.car-info {
  padding: 24px;
}

.car-type {
  color: #0756a5;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.car-info h3 {
  font-size: 25px;
  margin: 10px 0 22px;
}

.car-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 16px;
  border-top: 1px solid #e6eaf0;
  font-size: 14px;
}

.car-footer a {
  color: #0756a5;
  font-weight: 800;
}

.empty-result {
  color: #657184;
  padding: 20px 0;
}

.contact-section {
  padding: 100px 0;
  background: #071c38;
  color: #fff;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 80px;
  align-items: start;
}

.contact-copy h2 {
  font-size: clamp(36px, 4vw, 54px);
  line-height: 1.2;
  margin-bottom: 22px;
}

.contact-copy h2 span {
  color: #69aaff;
}

.contact-description {
  max-width: 490px;
  color: #c4d0df;
  line-height: 1.8;
}

.dealer-details {
  margin-top: 38px;
  padding-top: 28px;
  border-top: 1px solid rgba(255,255,255,.2);
}

.dealer-details h3 {
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 25px;
}

.dealer-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 23px;
}

.dealer-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  background: #123e70;
  color: #8dc2ff;
}

.dealer-item small {
  display: block;
  color: #8fa9c6;
  font-size: 10px;
  letter-spacing: 1.5px;
  margin-bottom: 7px;
}

.dealer-item a,
.dealer-item p {
  color: #fff;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.dealer-item a:hover {
  color: #8dc2ff;
}

.map-button {
  display: inline-block;
  margin-top: 5px;
  padding: 13px 19px;
  border: 1px solid #8dc2ff;
  color: #fff;
  font-weight: 700;
}

.map-button:hover {
  background: #0756a5;
}

.lead-form {
  background: #fff;
  color: #101820;
  padding: 38px;
}

.lead-form .eyebrow {
  margin-bottom: 12px;
}

.lead-form h3 {
  font-size: 29px;
  margin-bottom: 10px;
}

.form-description {
  color: #687588;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 25px;
}

.lead-form label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  margin: 17px 0 8px;
}

.lead-form input,
.lead-form select,
.lead-form textarea {
  width: 100%;
  border: 1px solid #d6deea;
  padding: 13px;
  outline: none;
  background: #fff;
  color: #101820;
  border-radius: 0;
}

.lead-form textarea {
  resize: vertical;
}

.submit-button {
  width: 100%;
  margin-top: 22px;
}

.privacy-note {
  display: block;
  color: #788496;
  font-size: 11px;
  line-height: 1.6;
  margin-top: 14px;
}

.footer {
  background: #041329;
  color: #fff;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  padding-top: 38px;
  padding-bottom: 38px;
}

.footer-brand {
  color: #fff;
}

.footer-content > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  color: #c4d0df;
}

.footer-content > div p {
  color: #fff;
  font-weight: 800;
  letter-spacing: 2px;
}

.back-top {
  color: #8dc2ff;
  font-size: 13px;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.12);
  padding: 17px 5%;
  text-align: center;
  color: #9aabc0;
  font-size: 12px;
}

.floating-call {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 30;
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #0756a5;
  color: #fff;
  font-size: 23px;
  box-shadow: 0 5px 20px rgba(0,0,0,.25);
}

@media (max-width: 850px) {
  .navbar {
    height: auto;
    min-height: 75px;
    flex-wrap: wrap;
    gap: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .navbar nav {
    order: 3;
    width: 100%;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .car-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-layout {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .lead-form {
    max-width: 600px;
    width: 100%;
  }
}

@media (max-width: 560px) {
  .topbar-inner,
  .topbar-inner > div {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .topbar-inner > div {
    display: none;
  }

  .navbar nav {
    gap: 13px;
  }

  .navbar nav a {
    font-size: 12px;
  }

  .nav-button {
    padding: 11px 13px;
    font-size: 12px;
  }

  .hero {
    min-height: 620px;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero-bottom {
    font-size: 9px;
    letter-spacing: 1px;
  }

  .hero-bottom span:last-child {
    display: none;
  }

  .intro,
  .cars-section,
  .contact-section {
    padding-top: 65px;
    padding-bottom: 65px;
  }

  .section-heading {
    display: block;
  }

  .section-heading > p {
    margin-top: 10px;
  }

  .car-grid {
    grid-template-columns: 1fr;
  }

  .car-image {
    height: 220px;
  }

  .lead-form {
    padding: 25px 20px;
  }

  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
