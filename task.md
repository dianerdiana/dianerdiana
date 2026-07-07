**Content Saat Ini**

File [src/pages/index.astro](C:/Users/DianErdiana/personal-projects/dianerdiana/src/pages/index.astro:1) saat ini berisi komposisi homepage seperti ini:

```astro
---
import BaseLayout from "../layouts/base-layout.astro";
import AboutSection from "../components/about-section.astro";
import ArticlesSection from "../components/articles-section.astro";
import CertificatesSection from "../components/certificates-section.astro";
import ContactSection from "../components/contact-section.astro";
import ExperienceSection from "../components/experience-section.astro";
import FeaturedProjectsSection from "../components/featured-projects-section.astro";
import HeroSection from "../components/hero-section.astro";
import SkillsSection from "../components/skills-section.astro";
import { themeConfig } from "../configs/theme-config";
---

<BaseLayout
  title={themeConfig.pages.home.title}
  description={themeConfig.pages.home.description}
>
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <ExperienceSection />
  <FeaturedProjectsSection />
  <ArticlesSection />
  <CertificatesSection />
  <ContactSection />
</BaseLayout>
```

Jadi halaman ini belum menulis teks langsung di `index.astro`. Konten aslinya diambil dari [src/configs/theme-config.ts](C:/Users/DianErdiana/personal-projects/dianerdiana/src/configs/theme-config.ts:1), lalu project/article/certificate dari `src/content`.

**Task Pengisian Konten**

1. **Hero**
   Isi identitas profesional real kamu:
   - Role utama kamu sekarang, misalnya `Full-stack Developer`, `Frontend Developer`, atau lainnya.
   - Headline yang benar-benar menggambarkan kamu.
   - Deskripsi singkat: kamu membuat apa, untuk siapa, dan kualitas apa yang ingin kamu tonjolkan.

2. **About**
   Ganti paragraf generik dengan cerita asli:
   - Background kamu.
   - Area yang kamu suka kerjakan.
   - Cara kamu berpikir saat membangun software.
   - Nilai kerja yang paling kamu pegang.

3. **Skills**
   Validasi skill yang benar-benar kamu kuasai:
   - Hapus skill yang belum nyaman kamu klaim.
   - Tambahkan stack real kamu.
   - Pisahkan antara skill kuat, sedang dipelajari, dan tools pendukung bila perlu.

4. **Experience**
   Saat ini masih berupa workflow generik. Ubah menjadi:
   - Pengalaman kerja, freelance, magang, organisasi, atau project nyata.
   - Untuk tiap entry: posisi/peran, konteks, kontribusi, hasil, dan teknologi.

5. **Projects**
   Ganti placeholder di `src/content/projects` dengan project asli:
   - Nama project.
   - Masalah yang diselesaikan.
   - Solusi teknis.
   - Hasil atau impact.
   - Tech stack.
   - Role kamu di project tersebut.

6. **Articles**
   Artikel saat ini terlihat seperti contoh portfolio. Pilih:
   - Mau tetap punya blog teknis, lalu tulis artikel asli.
   - Atau kurangi/hilangkan section artikel kalau belum relevan.

7. **Certificates**
   Ganti certificate placeholder dengan sertifikat real:
   - Nama sertifikat.
   - Issuer.
   - Urutan prioritas.
   - Kalau belum punya sertifikat kuat, lebih baik section ini dibuat minimal atau disembunyikan.
