"use client";
import Link from "next/link";
import { useState } from "react";

export default function AnaSayfa() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", price: "", category: "", desc: "" });

  const openModelDetail = (title: string, price: string, category: string, desc: string) => {
    setModalData({ title, price, category, desc });
    setModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full px-margin pt-space-md pb-space-lg flex flex-col gap-space-md">
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg bg-surface-container-highest">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9uZKN2xijktF-KpuK-SxdB6a5-td8DJ6mRiAuIOPmQPTxvkbgiQf2po1grsYxF8DfncC_yCj6i85gHlHAw8H6TrVNcJ6WgPPFoWWdRIvTSOn6jRvIQ0Y_LMjwicOH6kSi1D8cRN9QZZQw6i_5wrpzgiUf_-Tx5KMwIFnq9th-dCb-HSNAfALzsvARWxfOa65XCDxRZf4BxzCbKHqfJJYsEzTDXitcOBKWR0ViwJp80UEOYpD49kkk')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-space-lg">
              <div className="inline-flex items-center gap-1.5 self-start px-space-sm py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md mb-space-xs text-on-primary">
                <span
                  className="material-symbols-outlined text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest">
                  Atelier &amp; Studio
                </span>
              </div>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary tracking-tight font-bold mb-space-2xs">
                Kişiye Özel &amp; Çağdaş Saç Tasarımı
              </h1>
              <p className="font-body-md text-body-md text-surface-container-high max-w-xs leading-relaxed">
                Minimalist dokunuşlar, kusursuz teknik ustalık ve ayrıcalıklı güzellik salonu deneyimi.
              </p>
            </div>
          </div>
        </div>
        {/* Quick Action CTAs */}
        <div className="grid grid-cols-2 gap-space-xs">
          <Link
            href="/randevu"
            className="flex items-center justify-center gap-space-2xs h-[52px] rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            <span>Randevu Al</span>
          </Link>
          <Link
            href="/kesfet"
            className="flex items-center justify-center gap-space-2xs h-[52px] rounded-xl bg-surface-container-lowest text-primary-container font-label-lg text-label-lg shadow-sm active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
            <span>Modelleri İncele</span>
          </Link>
        </div>
      </section>

      {/* Value Propositions / Distinct Advantages */}
      <section className="px-margin py-space-sm">
        <div className="grid grid-cols-3 gap-space-xs">
          <div className="flex flex-col items-center text-center p-space-sm rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container mb-space-2xs">
              <span className="material-symbols-outlined text-[20px]">content_cut</span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-semibold">Uzman Stilistler</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight mt-0.5">Sertifikalı ustalık</span>
          </div>
          <div className="flex flex-col items-center text-center p-space-sm rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container mb-space-2xs">
              <span className="material-symbols-outlined text-[20px]">home_pin</span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-semibold">Salon &amp; Ev</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight mt-0.5">Özel randevu seçeneği</span>
          </div>
          <div className="flex flex-col items-center text-center p-space-sm rounded-xl bg-surface-container-lowest shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container mb-space-2xs">
              <span className="material-symbols-outlined text-[20px]">verified</span>
            </div>
            <span className="font-label-md text-label-md text-on-surface font-semibold">%100 Memnuniyet</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight mt-0.5">Özenli yaklaşım</span>
          </div>
        </div>
      </section>

      {/* Featured Hair Models Section */}
      <section className="px-margin pt-space-lg pb-space-sm">
        <div className="flex items-center justify-between mb-space-md">
          <div>
            <span className="font-label-caps text-label-caps tracking-wider text-secondary uppercase font-bold">Öne Çıkanlar</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Trend Modeller</h2>
          </div>
          <Link
            href="/kesfet"
            className="flex items-center text-secondary font-label-md text-label-md gap-0.5 hover:underline"
          >
            Tümünü Gör
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </Link>
        </div>

        {/* Models List Cards */}
        <div className="flex flex-col gap-space-md">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col gap-space-sm group">
            <div className="relative w-full h-44 rounded-lg overflow-hidden bg-surface-container">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9_vWxR-KmfS_jumTPNgYNa0cCrCYK0R2yFx5I5uDN1bUmvcSV9aYF-PlFeovWQeXlJSWhYUDKfw4wAv4QTblovRgVv6Ls-czmKYOpeI3xvUnaWRq4bsnQJETQD_uRju5k_wFpv3m1Lrw6oZvJAtxKDlcE0EvAbwrQZkBpopKCJ2uQhh3BMCICSDKXyh5K4i9hD2KtmE8s06FC35OBKzLVo2uh64Op_LtiV7eWDWxhp-lpc0zuE7tV')",
                }}
              ></div>
              <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md text-on-primary font-label-caps text-label-caps uppercase">
                Örgü &amp; Tasarım
              </span>
            </div>
            <div className="flex items-center justify-between px-space-2xs">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Knotless Braids</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Hafif dokunuş, doğal görünüm &amp; 180 dk</p>
              </div>
              <div className="text-right">
                <span className="font-headline-sm text-headline-sm font-bold text-primary-container block">1.200 TL</span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs pt-space-2xs">
              <button
                className="flex-1 h-11 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center hover:bg-surface-variant transition-colors"
                onClick={() => openModelDetail('Knotless Braids', '1.200 TL', 'Örgü & Tasarım', 'Hafif dokulu, baş derisine baskı yapmayan kusursuz koruyucu saç örgüsü.')}
              >
                İncele
              </button>
              <Link
                href="/randevu"
                className="h-11 px-space-md rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center shadow-sm active:scale-95 transition-all"
              >
                Seç
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col gap-space-sm group">
            <div className="relative w-full h-44 rounded-lg overflow-hidden bg-surface-container">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkbaRk7KRii1K-OFSeX9Ji6HjBI-xdHYDZXckbVvkYXyRCAIaA6NRFS-JbWEcR-eVPNEaZTvsQ2LdyPve5nUvLUYa1q3bdhmVoOnvNkfiM6yVF4a-7olVgXy4cchM0AFHylcozFvvpm9BHrbSQCW9Bwg4BeAz89Ej9zJUKid8293kRtobKQ2qbU0HMP1_pdhOdIa0coQip1CsB-jL7TVs5_SeQfWjM4N-I6oUzXnGUwKI7F5KCFpgj')",
                }}
              ></div>
              <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md text-on-primary font-label-caps text-label-caps uppercase">
                Hassas Kesim
              </span>
            </div>
            <div className="flex items-center justify-between px-space-2xs">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Fade Kesim</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Geometrik geçişler &amp; 45 dk</p>
              </div>
              <div className="text-right">
                <span className="font-headline-sm text-headline-sm font-bold text-primary-container block">450 TL</span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs pt-space-2xs">
              <button
                className="flex-1 h-11 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center hover:bg-surface-variant transition-colors"
                onClick={() => openModelDetail('Fade Kesim', '450 TL', 'Hassas Kesim', 'Milisaniyelik geçiş hassasiyetiyle yüz hatlarına uygun kurgulanan modern fade saç kesimi.')}
              >
                İncele
              </button>
              <Link
                href="/randevu"
                className="h-11 px-space-md rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center shadow-sm active:scale-95 transition-all"
              >
                Seç
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Style Consultation Teaser */}
      <section className="px-margin py-space-md">
        <div className="p-space-lg rounded-xl bg-surface-container-low flex items-center justify-between gap-space-sm shadow-sm">
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Stil Rehberi</span>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">Hangi Model Size Uygun?</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Yüz şeklinize en yakışan kesimi stilistlerimizle belirleyin.</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">face</span>
          </div>
        </div>
      </section>

      {/* Bottom Fast Booking Banner */}
      <section className="px-margin pt-space-xs pb-space-lg">
        <div className="relative rounded-xl overflow-hidden bg-primary-container text-on-primary p-space-lg flex flex-col gap-space-md shadow-lg">
          <div className="flex items-start justify-between">
            <div className="max-w-[70%]">
              <span className="font-label-caps text-label-caps tracking-widest text-secondary-container uppercase">Randevu Zamanı</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tight text-on-primary mt-1">
                Tarzınızı yenilemeye hazır mısınız?
              </h3>
              <p className="font-body-sm text-body-sm text-surface-container mt-space-2xs">
                Uygun zaman aralığını seçin, koltuğunuzu hemen ayıralım.
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-center text-secondary-fixed">
              <span className="material-symbols-outlined text-[28px]">content_cut</span>
            </div>
          </div>
          <Link
            href="/randevu"
            className="w-full h-[52px] rounded-xl bg-surface-container-lowest text-primary-container font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow active:scale-98 transition-all"
          >
            <span>Hemen Randevu Oluştur</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Quick Model Detail Bottom Sheet / Modal (Micro-interaction) */}
      <div
        className={`fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm items-end justify-center transition-opacity duration-300 ${modalOpen ? 'flex' : 'hidden'}`}
        id="modelModal"
      >
        <div className="w-full max-w-lg bg-surface-container-lowest rounded-t-2xl p-space-lg flex flex-col gap-space-md shadow-2xl animate-in slide-in-from-bottom">
          <div className="w-12 h-1.5 rounded-full bg-surface-container-highest mx-auto"></div>
          <div className="flex items-start justify-between">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase font-bold">{modalData.category}</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">{modalData.title}</h3>
            </div>
            <span className="font-headline-sm text-headline-sm text-primary-container font-bold">{modalData.price}</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">{modalData.desc}</p>
          <div className="flex gap-space-xs pt-space-xs">
            <button
              className="flex-1 h-[52px] rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg"
              onClick={() => setModalOpen(false)}
            >
              Kapat
            </button>
            <Link
              href="/randevu"
              className="flex-1 h-[52px] rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-1"
            >
              <span>Randevu Al</span>
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
