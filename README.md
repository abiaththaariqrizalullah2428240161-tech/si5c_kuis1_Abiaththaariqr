# SI5C Kuis 1 - Refactor RESTful API

Topik: **Data Sepeda Motor (Motorcycles)**  
Mahasiswa: **Abi Ath Thaariq Rizalullah**  
NPM: **ISI_NPM_KAMU**  
Topik/Tugas 1: **35**

## Struktur
- `models/` menyimpan data dan fungsi pengolahan data.
- `controllers/` menangani request, validasi, dan response.
- `routes/` memetakan URL dengan `express.Router()`.
- `middlewares/` berisi logger, API key, dan error handler.
- `.env` menyimpan konfigurasi lokal dan **tidak boleh di-push**.

## Instalasi
```bash
npm install
```

Salin `.env.example` menjadi `.env`, lalu isi NPM Anda.

## Menjalankan
```bash
npm run dev
```

Server:
`http://localhost:3000`

## API Key
POST, PUT, DELETE membutuhkan header:
```text
x-api-key: nilai API_KEY pada .env
```

## Endpoint
- `GET /`
- `GET /motorcycles`
- `GET /motorcycles?merek=Honda`
- `GET /motorcycles/:id`
- `POST /motorcycles`
- `PUT /motorcycles/:id`
- `DELETE /motorcycles/:id`

## Contoh POST
```json
{
  "merek": "Honda",
  "model": "Scoopy Abi Ath Thaariq Rizalullah",
  "kapasitasCc": 110,
  "harga": 24000000,
  "warna": ["hitam", "putih"]
}
```

> Ganti data contoh di atas sesuai NPM/nama Anda saat melakukan screenshot pengujian.

## Skenario pengujian
### Berhasil
1. GET `/motorcycles`
2. GET `/motorcycles?merek=Honda`
3. GET `/motorcycles/1`
4. POST `/motorcycles` dengan API key
5. PUT `/motorcycles/1` dengan API key

### Gagal
1. POST tanpa API key
2. POST dengan data tidak lengkap
3. POST dengan JSON rusak
4. GET `/motorcycles/9999`

DELETE juga dapat diuji sebagai tambahan untuk memastikan middleware API key dan CRUD berjalan.
