# TB Detector - Aplikasi Deteksi Dini Tuberkulosis

TB Detector adalah aplikasi web yang membantu dalam deteksi dini penyakit Tuberkulosis (TB) menggunakan pendekatan digital. Aplikasi ini menggabungkan frontend React dengan TypeScript dan backend Node.js yang dilengkapi dengan model machine learning untuk analisis.

## 🌟 Fitur Utama

- Deteksi dini TB melalui kuesioner digital
- Analisis menggunakan model Machine Learning TensorFlow.js
- Edukasi tentang penyakit TB
- Riwayat pemeriksaan pengguna
- Progressive Web App (PWA) support
- Responsive design untuk desktop dan mobile
- Offline capability dengan Service Worker

## 🛠 Teknologi yang Digunakan

### Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- PWA capabilities dengan Service Worker
- Lucide React (untuk icons)
- ESLint untuk code linting
- PostCSS untuk CSS processing

### Backend
- Node.js
- Express.js
- TensorFlow.js
- SQLite (tb_history.db)
- Python (untuk training model)

## 💻 Persyaratan Sistem

- Node.js v16+
- npm atau yarn
- Git
- Python (untuk training model ML)
- SQLite3

## 🚀 Cara Menjalankan Aplikasi Secara Lokal

1. Clone repository
```bash
git clone https://github.com/alifnaufalyr/TB-Detector.git
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

Hasil build akan tersedia di folder `frontend/dist`

### Build Backend
Backend tidak memerlukan proses build karena menggunakan Node.js langsung. Pastikan semua dependencies terinstall:

```bash
cd backend
npm install
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

Untuk deployment ke Railway, variable environment akan dikonfigurasi melalui dashboard Railway. Variable yang diperlukan:

```env
PORT=3000
NODE_ENV=production
```

Catatan: Database SQLite digunakan secara lokal dalam aplikasi, sehingga tidak memerlukan DATABASE_URL.

## 📁 Struktur Project

```
project-root/
├── frontend/                # React + TypeScript frontend
│   ├── src/           
│   │   ├── assets/         # Static assets used in components
│   │   ├── components/     # Reusable components (Hero, Header, etc.)
│   │   ├── pages/         # Application pages (Home, Detection, etc.)
│   │   ├── context/       # React context (TBDetectionContext)
│   │   └── types/         # TypeScript type definitions
│   ├── public/            # Public assets
│   │   ├── images/        # Image assets
│   │   ├── manifest.json  # PWA manifest
│   │   └── sw.js         # Service Worker for PWA
│   └── icons/            # App icons for PWA
├── backend/              # Node.js backend
│   ├── model/           # TensorFlow.js model files
│   │   ├── model.json   # Model architecture
│   │   └── group1-shard1of1.bin  # Model weights
│   ├── server_tfjs.js   # Main server file
│   └── tb_history.db    # SQLite database
├── docker-compose.yml   # Docker configuration
├── Dockerfile           # Docker build instructions
├── vercel.json         # Vercel deployment config
└── railway.toml        # Railway deployment config
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

ID Team: CC25-CF003
- **MC190D5X0505** - Mega Gloria - Universitas - [Aktif]
- **MC190D5Y2117** - Muhammad Alif Naufaly Ramadhan - Universitas - [Aktif]
- **MC190D5Y2222** - Rafie Mahesa Pandu - Universitas - [Aktif]
- **FC190D5X1633** - Augia Zifa Nafilah - Universitas - [Aktif]
- **FC190D5X2387** - Noumy Fadmayla Jasmine - Universitas - [Aktif]

## 📞 Kontak

Jika Anda memiliki pertanyaan atau masukan, silakan hubungi kami melalui:
- Email: [medinovaubj@gmail.com]
- GitHub Issues

## ⚠️ Penting

Aplikasi ini hanya untuk tujuan skrining awal dan tidak menggantikan diagnosis medis profesional. Selalu konsultasikan dengan tenaga medis untuk diagnosis dan perawatan yang tepat.
