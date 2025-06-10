# TB Detector - Aplikasi Deteksi Dini Tuberkulosis

TB Detector adalah aplikasi web yang membantu dalam deteksi dini penyakit Tuberkulosis (TB) menggunakan pendekatan digital. Aplikasi ini menggabungkan frontend React dengan TypeScript dan backend Node.js yang dilengkapi dengan model machine learning untuk analisis.

## 🌟 Fitur Utama

- Deteksi dini TB melalui kuesioner digital
- Edukasi tentang penyakit TB
- Riwayat pemeriksaan
- Progressive Web App (PWA) support
- Responsive design untuk desktop dan mobile

## 🛠 Teknologi yang Digunakan

### Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- PWA capabilities
- Lucide React (untuk icons)

### Backend
- Node.js
- Express.js
- TensorFlow.js
- SQLite Database

## 💻 Persyaratan Sistem

- Node.js v16+
- npm atau yarn
- Git

## 🚀 Cara Menjalankan Aplikasi Secara Lokal

1. Clone repository
```bash
git clone [URL_REPOSITORY]
cd project-root
```

2. Install dependencies untuk frontend
```bash
cd frontend
npm install
```

3. Install dependencies untuk backend
```bash
cd ../backend
npm install
```

4. Jalankan aplikasi dalam mode development

Untuk frontend:
```bash
cd frontend
npm run dev
```

Untuk backend:
```bash
cd backend
npm run dev
```

## 📦 Build dan Deploy

### Build Frontend

```bash
cd frontend
npm run build
```

### Build Backend

```bash
cd backend
npm run build
```

## 🚂 Deploy ke Railway

1. Pastikan Anda memiliki akun Railway dan Railway CLI terinstall
```bash
npm i -g @railway/cli
```

2. Login ke Railway
```bash
railway login
```

3. Link project dengan Railway
```bash
railway link
```

4. Deploy aplikasi
```bash
railway up
```

### Environment Variables yang Diperlukan

Buat file `.env` di root folder dengan variabel berikut:

```env
PORT=3000
NODE_ENV=production
DATABASE_URL=your_database_url
```

## 📁 Struktur Project

```
project-root/
├── frontend/           # React + TypeScript frontend
│   ├── src/           
│   │   ├── components/ # Reusable components
│   │   ├── pages/     # Application pages
│   │   ├── context/   # React context
│   │   └── types/     # TypeScript type definitions
│   └── public/        # Static assets
├── backend/           # Node.js backend
│   ├── model/        # ML model files
│   └── server_tfjs.js # Main server file
└── docker-compose.yml # Docker compose configuration
```

## 🤝 Kontribusi

1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Lisensi

[MIT License](LICENSE)

## 👥 Tim Pengembang

- Developer - [Nama Anda]
- Supervisor - [Nama Supervisor]

## 📞 Kontak

Jika Anda memiliki pertanyaan atau masukan, silakan hubungi kami melalui:
- Email: [your.email@example.com]
- GitHub Issues

## ⚠️ Penting

Aplikasi ini hanya untuk tujuan skrining awal dan tidak menggantikan diagnosis medis profesional. Selalu konsultasikan dengan tenaga medis untuk diagnosis dan perawatan yang tepat.
