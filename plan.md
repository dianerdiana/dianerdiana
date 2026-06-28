# Implementation Plan: Astro + TailwindCSS + React Minimalist

Rencana ini dibagi menjadi beberapa tahap inkremental untuk men-generate kode secara konsisten menggunakan konsep Astro Islands. React hanya digunakan pada komponen yang membutuhkan state dinamis atau interaksi kompleks di sisi klien. Seluruh penamaan file dan direktori menggunakan format kebab-case.

---

## Tahap 1: Setup Proyek & Fondasi Desain (Prompt 1)

**Tujuan:** Menyiapkan struktur dasar proyek, konfigurasi Tailwind, dan tema global (desain token dari `design.md`).

- **Langkah Aksi:**
  1. Inisialisasi proyek Astro baru dengan TailwindCSS pre-configured.
  2. Setup `tailwind.config.mjs` (warna, font, spacing, dan dark mode sesuai `design.md`).
  3. Buat file CSS global (`src/styles/global.css`) untuk reset baseline dan styling dasar menggunakan Tailwind `@layer`.
  4. Buat komponen `base-layout.astro` di dalam `src/layouts/` yang mencakup `<head>`, meta tags, script tracking/SEO awal, dan slot utama.

---

## Tahap 2: Komponen Statis & Layout Utama (Prompt 2)

**Tujuan:** Membuat kerangka luar website yang bersifat statis (Zero-JavaScript).

- **Langkah Aksi:**
  1. Buat komponen `navbar.astro` di `src/components/`. (Statis). Jika ada menu mobile, buat menggunakan CSS murni (checkbox hack) atau vanilla JS minimal di dalam tag `<script>` Astro, _bukan_ React.
  2. Buat komponen `footer.astro` di `src/components/`. (Statis).
  3. Perbarui `base-layout.astro` untuk menyertakan `navbar.astro` dan `footer.astro`.
  4. Buat halaman utama `src/pages/index.astro` dengan section Hero statis berdasarkan layout dari `design.md`.

---

## Tahap 3: Halaman Konten Statis & Komponen Astro (Prompt 3)

**Tujuan:** Mengimplementasikan mayoritas konten website menggunakan performa maksimal Astro.

- **Langkah Aksi:**
  1. Identifikasi semua section yang _hanya menampilkan data_ (misal: Fitur, Tentang Kami, Testimoni statis, Daftar Harga).
  2. Buat komponen Astro terpisah untuk masing-masing section tersebut di `src/components/` (misal: `features-section.astro`, `pricing-table.astro`).
  3. Pastikan tidak ada library external UI yang ikut ter-render di sini. Gunakan tag `<style>` bawaan Astro jika ada styling spesifik yang tidak dicover Tailwind.

---

## Tahap 4: Implementasi React Islands - Interaktivitas Terisolasi (Prompt 4)

**Tujuan:** Membuat komponen yang membutuhkan interaksi pengguna dan membungkusnya sebagai Astro Islands.

- **Langkah Aksi:**
  1. Identifikasi elemen interaktif dari `design.md` (misal: Formulir kontak dengan validasi state, filter pencarian/kategori realtime, atau modal dinamis).
  2. Buat komponen React di dalam `src/components/react/`. Contoh: `contact-form.tsx` atau `search-filter.tsx`.
  3. Terapkan Tailwind secara ketat di dalam komponen React agar senada dengan desain global.
  4. Panggil komponen React ini di halaman/komponen Astro menggunakan directive client yang tepat:
     - `client:load` untuk komponen vital yang langsung terlihat (misal: Search di atas lipatan halaman).
     - `client:visible` untuk komponen di bagian bawah (misal: Form kontak di footer).

---

## Tahap 5: Integrasi Data & Pembersihan Akhir (Prompt 5)

**Tujuan:** Memastikan aliran data berjalan lancar dan melakukan optimalisasi performa.

- **Langkah Aksi:**
  1. Jika data bersifat dinamis lokal (misal: artikel/produk), setup Astro Content Collections di `src/content/config.ts`.
  2. Hubungkan data tersebut ke komponen Astro yang telah dibuat pada Tahap 3.
  3. Lakukan audit _bundle size_ kecil-kecilan untuk memastikan tidak ada React code yang bocor ke komponen statis.
  4. Jalankan `astro build` untuk memverifikasi proses SSR/SSG berjalan tanpa error.
