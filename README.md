# Hệ Thống Quản Lý Học Tập Cá Nhân cho DungKiemTien

Đây là một website quản lý học tập cá nhân hiện đại, tối giản được thiết kế dành riêng cho DungKiemTien. Hệ thống cung cấp bảng điều khiển toàn diện với nhiều tính năng để theo dõi tiến độ học tập, quản lý nhiệm vụ và nâng cao năng suất.

Link demo:
## Cấu trúc thư mục dự án

Dưới đây là sơ đồ cây thư mục của dự án:

```
app/
├── globals.css
├── layout.tsx
├── page.tsx (+4)
├── components/
│   └── ui/
│       ├── alert-dialog.tsx
│       ├── progress.tsx
│       ├── switch.tsx
│       ├── textarea.tsx
│       ├── app-sidebar.tsx (+4/-1)
│       ├── calendar-view.tsx (+409)
│       ├── enhanced-study-dashboard.tsx
│       ├── enhanced-task-planner.tsx
│       ├── login-page.tsx
│       ├── pomodoro-timer.tsx
│       ├── study-dashboard.tsx
│       ├── study-diary.tsx (+441)
│       ├── study-journal.tsx
│       ├── task-archive.tsx
│       ├── task-overview.tsx (+231)
│       ├── task-planner.tsx
│       ├── user-profile.tsx (+378)
├── hooks/
│   ├── use-language.ts
│   ├── use-vietnam-time.ts (+6/-6)
├── lib/
│   ├── i18n.ts (+2)
```

- **(+n)**: Số dòng được thêm vào file.
- **(-n)**: Số dòng bị xóa khỏi file.

## Tính năng chính

### Bảng điều khiển học tập (Study Dashboard)
- Tóm tắt học tập hàng ngày với tổng số giờ học
- Biểu đồ tiến độ hàng tuần (biểu đồ cột và đường sử dụng Recharts)
- Thống kê hoàn thành nhiệm vụ và thanh tiến độ
- Xem trước nhiệm vụ hôm nay với huy hiệu ưu tiên
- Hiển thị múi giờ Việt Nam theo thời gian thực với đồng hồ trực tiếp
- Thống kê chi tiết: giờ học hôm nay/tuần, tỷ lệ hoàn thành

### Quản lý nhiệm vụ (Task Planner)
- Tổ chức nhiệm vụ hàng ngày và hàng tuần
- Giao diện kéo thả (drag & drop) với các mức ưu tiên (Thấp/Trung bình/Cao)
- Chỉnh sửa, xóa và theo dõi hoàn thành nhiệm vụ
- Xem theo nhóm theo ngày và trạng thái nhiệm vụ

### Đồng hồ Pomodoro (Pomodoro Timer)
- Thiết lập thời gian học và nghỉ tùy chỉnh
- Chức năng Bắt đầu/Dừng/Làm mới
- Theo dõi phiên học và thống kê
- Chuyển đổi trạng thái tự động giữa học và nghỉ
- Thiết kế toàn màn hình, không bị phân tâm

### Nhật ký học tập (Study Journal)
- Tạo mục nhập nhật ký riêng tư hoặc công khai
- Hệ thống thẻ (tag) để tổ chức
- Chức năng tìm kiếm và lọc
- Danh sách theo thứ tự thời gian với nội dung phong phú
- Giao diện card mới với tiêu đề, nội dung, ngày tháng và biểu tượng cảm xúc tâm trạng

### Lưu trữ nhiệm vụ (Task Archive)
- Nhiệm vụ đã hoàn thành với bộ lọc theo ngày/ưu tiên
- Bảng điều khiển thống kê
- Chức năng khôi phục nhiệm vụ đã hoàn thành
- Tổ chức theo danh mục

### Lịch học tập (Calendar)
- Giao diện lịch tháng với khả năng điều hướng
- Thêm sự kiện với loại (học tập, nhiệm vụ, thi cử, họp, nghỉ ngơi)
- Hiển thị sự kiện trực tiếp trên lịch với màu sắc phân biệt
- Chi tiết sự kiện khi nhấp vào ngày cụ thể

### Tổng quan nhiệm vụ (Task Overview)
- Phân loại nhiệm vụ theo ngày/tuần/tháng
- Thống kê tiến độ với biểu đồ và phần trăm hoàn thành
- Trạng thái chi tiết (Chờ xử lý, Đang làm, Hoàn thành)
- Hạn chót và cảnh báo quá hạn

### Quản lý thông tin người dùng (User Profile)
- Chỉnh sửa avatar với upload ảnh từ máy tính
- Thông tin cá nhân đầy đủ (tên, email, số điện thoại, địa chỉ)
- Thống kê học tập (chuỗi học tập, tổng giờ học, nhiệm vụ hoàn thành)
- Hệ thống huy hiệu thành tích

### Thư viện hình ảnh
- Lưu trữ và quản lý ảnh liên quan đến học tập
- Tải lên từ thiết bị

## Thiết kế
- **Hiện đại & Tối giản**: Giao diện sạch sẽ với các thành phần shadcn/ui
- **Chế độ Sáng/Tối**:
  - Chế độ Sáng: Màu xanh trắng với gradient chuyên nghiệp
  - Chế độ Tối: Chủ đề đen-xanh với điểm nhấn neon xanh
  - Chuyển đổi mượt mà giữa các chủ đề
- **Thiết kế đáp ứng**: Hoạt động hoàn hảo trên desktop và mobile
- **Hoạt ảnh mượt mà**: Chuyển tiếp và hiệu ứng hover tinh tế
- **Typo chuyên nghiệp**: Sử dụng font Inter để dễ đọc
- **Mã màu**: Chỉ số màu dựa trên ưu tiên và trạng thái

## Hỗ trợ đa ngôn ngữ
- Chuyển đổi giữa Tiếng Việt 🇻🇳 và Tiếng Anh 🇺🇸
- Triển khai đầy đủ i18n với hook tùy chỉnh
- Công cụ chuyển đổi ngôn ngữ trong thanh bên với biểu tượng cờ
- Lưu trữ tùy chọn ngôn ngữ
- Tất cả các phần tử UI, thông báo và nội dung được dịch

## Triển khai kỹ thuật
- Xây dựng với Next.js 14 và TypeScript
- Thanh điều hướng thanh bên với thiết kế thu gọn
- Trực quan hóa biểu đồ sử dụng Recharts
- Quản lý trạng thái với React hooks
- Bố cục lưới hoàn toàn đáp ứng
- Lưu trữ cục bộ cho tùy chọn và cài đặt
- Chức năng tải lên cho avatar và ảnh
- Lọc ngày thông minh và chức năng tìm kiếm

## Hướng dẫn cài đặt
1. Clone repository:
   ```bash
   git clone <repository-url>
   ```
2. Cài đặt dependencies:
   ```bash
   npm install
   ```
3. Chạy server phát triển:
   ```bash
   npm run dev
   ```

## Hướng dẫn sử dụng
- **Đăng nhập**: Tên người dùng: `DungKiemTien`, Mật khẩu: `Dung@112004` (với tùy chọn "Nhớ tôi")
- Điều hướng qua thanh bên để truy cập Bảng điều khiển, Quản lý nhiệm vụ, v.v.
- Chuyển đổi chủ đề và ngôn ngữ qua cài đặt thanh bên.
- Quản lý nhiệm vụ, mục nhập nhật ký và thông tin cá nhân theo nhu cầu.

## Cải tiến
- Múi giờ Việt Nam chính xác (UTC+7) với đồng hồ thời gian thực
- Nhật ký học tập dạng card với theo dõi tâm trạng và bộ lọc
- Hoạt động CRUD toàn diện cho tất cả tính năng
- Hỗ trợ khả năng tiếp cận (đọc màn hình, điều hướng bằng bàn phím)
- Hộp thoại xác nhận để ngăn mất dữ liệu

## Đóng góp
Cảm thấy tự do để gửi vấn đề hoặc pull request. Những đóng góp để cải thiện tính năng hoặc sửa lỗi đều được hoan nghênh!

## Giấy phép
Dự án này được cấp phép theo Giấy phép MIT.
