"use client";
import { useState } from "react";

export default function Iletisim() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="flex flex-col w-full px-margin space-y-space-lg">
      {/* Header Intro Card */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
        <div className="flex items-center gap-space-xs mb-space-xs text-secondary">
          <span className="material-symbols-outlined text-[20px]">explore</span>
          <span className="font-label-caps text-label-caps tracking-wider uppercase text-on-surface-variant">Rezervasyon &amp; Bilgi</span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold tracking-tight mb-space-xs">İletişim &amp; Ulaşım</h1>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          NOVA HAIR DESIGN BEAUTY CENTER, modern saç tasarım sanatı ve kişiye özel güzellik deneyimini prestijli ve ferah atmosferinde buluşturuyor.
        </p>
        <div className="mt-space-md flex flex-wrap items-center gap-space-xs pt-space-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-primary-container font-label-md text-label-md">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Nişantaşı Stüdyosu
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
            Randevulu Hizmet
          </span>
        </div>
      </div>

      {/* Quick Phone CTA Card */}
      <div className="rounded-xl bg-primary-container text-on-primary p-space-lg shadow-md relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-secondary opacity-15 pointer-events-none"></div>
        <div className="flex items-start justify-between relative z-10">
          <div>
            <span className="font-label-caps text-label-caps tracking-widest text-primary-fixed uppercase block mb-1">Doğrudan İletişim</span>
            <h2 className="font-headline-md text-headline-md text-on-primary font-bold">+90 (212) 234 56 78</h2>
            <p className="font-body-sm text-body-sm text-on-primary-container mt-1">Stüdyo asistanımız çalışma saatleri içinde çağrılarınızı yanıtlamaktadır.</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0 text-on-primary">
            <span className="material-symbols-outlined text-[24px]">call</span>
          </div>
        </div>
        <div className="mt-space-md pt-space-xs relative z-10">
          <a className="flex items-center justify-center gap-space-xs w-full py-3.5 px-space-md rounded-lg bg-surface-container-lowest text-primary-container font-label-lg text-label-lg transition-transform active:scale-[0.98] shadow-sm" href="tel:+902122345678">
            <span className="material-symbols-outlined text-[20px] text-secondary">phone_in_talk</span>
            <span>Bizi Ara</span>
          </a>
        </div>
      </div>

      {/* Location & GPS Navigation Card */}
      <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
        <div className="flex items-center gap-space-xs text-primary-container">
          <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[20px]">pin_drop</span>
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Konum ve Harita</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Nişantaşı merkez stüdyo</p>
          </div>
        </div>
        <div className="w-full h-44 rounded-lg bg-surface-container-high bg-cover bg-center relative overflow-hidden shadow-inner flex items-end p-space-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6b8df8-RY2FcKxsYG488Vll9lohIX2AqcKwBB-v3K1m0jQ4uZt3R9SnWJwLqkPzgJXbYu6B8XD6WySdPrE8c9ViIQlIc_R1trC0jvHTnY2kdb-iWMPt266zNAruswv-bYJMzZuPWIbgDqpaLvX_0yjVjHKkbB0PLxQ2ywEcD85ZTSUi1-8cg8r47nZH6nSNJ_8OnAT8ZTJrGlUC5w795UaUVjNIYWuEsRckoKBRePrIyavH9fiTMS')" }}>
          <div className="bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-error text-[18px]">location_on</span>
            <span className="font-label-md text-label-md text-on-surface font-medium">NOVA Hair Design Nişantaşı</span>
          </div>
        </div>
        <div className="p-space-sm rounded-lg bg-surface-container-low">
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">apartment</span>
            <div className="min-w-0">
              <span className="font-label-md text-label-md text-on-surface font-semibold block">Açık Adres</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Teşvikiye Cad. No:42/A, Nişantaşı, Şişli, İstanbul</p>
              <span className="font-body-sm text-body-sm text-secondary block mt-1">Vali Konağı Caddesi kesişimine 2 dakika yürüyüş mesafesinde</span>
            </div>
          </div>
        </div>
        <a className="flex items-center justify-center gap-space-xs w-full py-3.5 px-space-md rounded-lg bg-primary text-on-primary font-label-lg text-label-lg transition-transform active:scale-[0.98]" href="https://maps.google.com/?q=Teşvikiye+Cad.+No:42/A+Nişantaşı+Şişli+İstanbul" rel="noopener noreferrer" target="_blank">
          <span className="material-symbols-outlined text-[20px]">directions</span>
          <span>Yol Tarifi Al</span>
        </a>
      </div>

      {/* Social Links Card */}
      <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
        <div className="flex items-center gap-space-xs mb-space-xs text-primary-container">
          <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Bizi Takip Edin</h2>
            <span className="font-label-caps text-label-caps tracking-wider uppercase text-on-surface-variant">Resmi Kanallar</span>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs mb-space-md">
          Instagram ve Facebook için web sitesinde ayrı bir sayfa oluşturulmamıştır; yalnızca resmi hesaplarımıza yönlendiren dış bağlantılardır.
        </p>
        <div className="grid grid-cols-1 gap-space-xs">
          <a className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors active:scale-[0.99]" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
            <div className="flex items-center gap-space-xs">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </div>
              <span className="font-label-md text-label-md font-semibold text-primary">Instagram'da Takip Et</span>
            </div>
            <span className="material-symbols-outlined text-secondary text-[20px]">open_in_new</span>
          </a>
          <a className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors active:scale-[0.99]" href="https://facebook.com" rel="noopener noreferrer" target="_blank">
            <div className="flex items-center gap-space-xs">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">public</span>
              </div>
              <span className="font-label-md text-label-md font-semibold text-primary">Facebook Sayfamız</span>
            </div>
            <span className="material-symbols-outlined text-secondary text-[20px]">open_in_new</span>
          </a>
        </div>
      </div>

      {/* Contact / Inquiry Form */}
      <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
        <div className="flex items-center gap-space-xs mb-space-xs text-primary-container">
          <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[20px]">mark_chat_unread</span>
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Hızlı Mesaj veya Soru</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Uzmanlarımıza doğrudan danışın</p>
          </div>
        </div>
        <form className="space-y-space-md mt-space-md" onSubmit={handleSubmit}>
          <div>
            <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1" htmlFor="full-name">Ad Soyad</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3.5 text-[20px] text-outline">badge</span>
              <input className="w-full h-12 pl-10 pr-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" id="full-name" placeholder="Örn: Selin Yılmaz" required type="text" />
            </div>
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1" htmlFor="contact-phone">Telefon</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3.5 text-[20px] text-outline">smartphone</span>
              <input className="w-full h-12 pl-10 pr-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" id="contact-phone" placeholder="0 (5xx) xxx xx xx" required type="tel" />
            </div>
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1" htmlFor="contact-msg">Mesajınız</label>
            <textarea className="w-full p-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors resize-none" id="contact-msg" placeholder="Sormak istediğiniz işlem, randevu detayı veya özel talebiniz..." required rows={4}></textarea>
          </div>
          <button className="flex items-center justify-center gap-space-xs w-full py-3.5 px-space-md rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg transition-transform active:scale-[0.98] shadow-sm" type="submit">
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>Gönder</span>
          </button>
        </form>

        {showSuccess && (
          <div className="mt-space-md p-space-md rounded-lg bg-surface-container text-on-surface flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">check_circle</span>
            <div>
              <span className="font-label-md text-label-md font-semibold text-primary block">Mesajınız Alındı</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">En kısa sürede iletişim numaranız üzerinden geri dönüş sağlanacaktır.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
