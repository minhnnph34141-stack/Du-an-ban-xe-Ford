# Ford Horizon – Website giới thiệu và tư vấn xe Ford

Website mẫu tiếng Việt được xây dựng bằng React + Vite, có giao diện responsive.

## Chức năng
- Trang chủ giới thiệu showroom.
- Danh sách xe với bộ lọc theo dòng xe và tìm kiếm.
- Thẻ thông tin xe, giá tham khảo và nút yêu cầu tư vấn.
- Form liên hệ / đăng ký lái thử có kiểm tra dữ liệu phía trình duyệt.
- Thiết kế tương thích máy tính và điện thoại.

## Chạy trên máy tính
Cài Node.js phiên bản LTS, sau đó mở Terminal tại thư mục dự án và chạy:

```bash
npm install
npm run dev
```

Vite sẽ hiển thị địa chỉ local, thường là http://localhost:5173.

## Build để deploy
```bash
npm run build
```
Thư mục kết quả là `dist`.

## Deploy lên Vercel
1. Upload toàn bộ nội dung thư mục này lên GitHub.
2. Vào https://vercel.com/ và import repository.
3. Framework Preset: Vite.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Nhấn Deploy.

## Cần tùy chỉnh trước khi dùng thật
- Thay tên "Ford Horizon" bằng tên showroom/doanh nghiệp của bạn.
- Cập nhật địa chỉ, số điện thoại, email và thông tin đại lý chính xác trong `src/App.jsx`.
- Kiểm tra và cập nhật giá xe, phiên bản, ưu đãi theo thông tin thực tế.
- Ảnh minh họa đang tải từ Unsplash; có thể thay bằng ảnh xe được phép sử dụng của bạn.
- Form hiện là bản demo chạy phía trình duyệt, chưa gửi dữ liệu đến hệ thống quản lý. Muốn nhận khách hàng thật, cần kết nối backend, email service hoặc CRM.

## Lưu ý thương hiệu
Đây là template tham khảo độc lập, không phải website chính thức của Ford Motor Company và không thể hiện quan hệ đại lý được ủy quyền.
