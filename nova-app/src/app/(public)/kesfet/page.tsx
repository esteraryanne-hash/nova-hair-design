"use client";
import { useState } from "react";
import Link from "next/link";

export default function Kesfet() {
  const [filter, setFilter] = useState("all");
  const [toastOpen, setToastOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  const models = [
    {
      id: 1,
      category: "braids",
      name: "Knotless Braids Signature",
      price: "1.200 TL",
      duration: "180 dk",
      rating: "4.9 (42 Randevu)",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQx2B9XuAT3kmroKTcrscUVeY-eX8eaxt8ivQu-PUtzb7k9GDYhhKKv6vUayekN8z_wvVgJtrsznL7hpbbQNM8u1Qf8GhTtfrvC7s19u1_7NGSPHKoNKABIkCSEeBiWUJAvGds6g6c3grycdwOiV2KQJJpbkIkLZkVrhz7Z52AdryTJkIgXa5oogC2Amzi49owwLBS1klai-LDplvCWIDLI9sY2i6MdotXx7fpb7ddzvYAD4PRDZSH",
      tagLabel: "Örgü & Braids",
      tagIcon: "diamond",
      desc: "Kafa derisini yormayan dikişsiz düğüm tekniği. Pürüzsüz hatlar ve doğal görünümle uzun süreli koruyucu şıklık.",
    },
    {
      id: 2,
      category: "men",
      name: "Modern Fade & Contour",
      price: "450 TL",
      duration: "45 dk",
      rating: "5.0 (68 Randevu)",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZqlqjCTTsl3JEHJQZb3h7f-xfOp0le7MvKS2bPIw6rI39DruXMLZYTJ57rt5j4RsyjhqiVpUhOByF05bGorFZloPstIMKnxVJXNFlkmsBz0Mv01I9wPds-zZvg30GbEtz7T8Ia6MThCgOI0Q1nh164fznOHpqp5UFFolfs57oCQRv6Bow8wLfdfovWjbHFmFcBCDByg_wGRC7AYRJTDsAiMQAx175bQAyCxMvyQfhmO3M_VqR04b",
      tagLabel: "Erkek Saç & Sakal",
      tagIcon: "bolt",
      desc: "Milimetrik geçişli skin fade kesim, ense ve sakal hattı lazer netliğinde jilet kontürü ile tamamlanır.",
    },
    {
      id: 3,
      category: "color",
      name: "Doğal Işıltılı Balayage",
      price: "1.600 TL",
      duration: "150 dk",
      rating: "4.9 (53 Randevu)",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrJ0Nr7gpt1sJ16LAHLX1yIM260pVLpTao3N6TnZ-ySvZ6UefVDadZf6wOr3BJY8LXSUDzB92n1ub8X2s34m7dj59P26FlG3sCDjNF_8acovhAMgG5Ofl9jkh7AFA82fzRrjWBtdqxTmvZVc39ess9UXkaBoETjSVsez4os9WHu5p4ZVVKTmCFbNRwr8QDqdmBK5Q8A-od1cDo35QQMMkzFRtipZHS-IMet25Ip7I1te4g2AmwAMN_",
      tagLabel: "Renklendirme & Balayage",
      tagIcon: "brush",
      desc: "Kök geçişi hissettirmeyen, yüz hatlarını aydınlatan sıcak bal ve karamel tonlarında el yapımı balyaj işlemi.",
    }
  ];

  const filteredModels = models.filter((m) => filter === "all" || m.category === filter);

  const handleSelect = (model: any) => {
    setSelectedModel(model.name);
    sessionStorage.setItem('selectedModel', JSON.stringify(model));
    setToastOpen(true);
    setTimeout(() => setToastOpen(false), 3000);
  };

  return (
    <>
      <div className="flex flex-col w-full space-y-space-lg">
        {/* Header Intro & Delight Section */}
        <section className="px-margin pt-space-md pb-space-sm flex flex-col gap-space-2xs">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-label-caps tracking-wider text-secondary uppercase bg-surface-container px-space-xs py-space-2xs rounded-full">Koleksiyon 2025</span>
            <div className="flex items-center gap-space-2xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
              <span className="font-label-md text-label-md">120+ Seçkin Tasarım</span>
            </div>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">Saç Modellerini Keşfet</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tarzınıza ve zevkinize en uygun saç modelini seçin, hemen randevunuzu planlayın.
          </p>
        </section>

        {/* Filter Rail */}
        <section className="w-full pb-space-md overflow-hidden">
          <div className="flex items-center gap-space-xs px-margin overflow-x-auto no-scrollbar scroll-smooth">
            {[
              { id: "all", icon: "auto_awesome", label: "Tümü" },
              { id: "braids", icon: "texture", label: "Örgü & Braids" },
              { id: "cut", icon: "content_cut", label: "Kesim & Şekillendirme" },
              { id: "color", icon: "palette", label: "Renklendirme & Balayage" },
              { id: "men", icon: "face", label: "Erkek Saç & Sakal" },
              { id: "spa", icon: "spa", label: "Özel Bakım & Spa" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`cat-pill flex items-center gap-space-2xs px-space-md py-space-xs rounded-full whitespace-nowrap transition-all duration-200 shadow-sm min-h-[44px] ${
                  filter === cat.id ? "bg-primary-container text-on-primary" : "bg-surface-container-low text-on-surface-variant"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                <span className="font-label-md text-label-md">{cat.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Live Counter */}
        <section className="px-margin pb-space-xs flex items-center justify-between">
          <div className="flex items-center gap-space-2xs">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span className="font-label-md text-label-md text-on-surface font-semibold">{filteredModels.length} Özel Stil Gösteriliyor</span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Fiyata KDV ve Danışmanlık Dahil</span>
        </section>

        {/* Gallery List */}
        <section className="px-margin flex flex-col gap-space-md pb-space-xl">
          {filteredModels.map((model) => (
            <article key={model.id} className="model-card group bg-surface-container-lowest rounded-xl p-space-sm shadow-md transition-all duration-300 flex flex-col gap-space-sm">
              <div className="relative w-full h-72 rounded-lg overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={model.image} alt={model.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                <span className="absolute top-space-xs left-space-xs bg-surface-container-lowest/90 backdrop-blur-md px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps text-primary shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">{model.tagIcon}</span>
                  {model.tagLabel}
                </span>
                <div className="absolute bottom-space-xs left-space-xs right-space-xs flex items-center justify-between text-on-primary">
                  <div className="flex items-center gap-1 bg-primary/60 backdrop-blur-sm px-space-xs py-space-2xs rounded-full">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    <span className="font-body-sm text-body-sm font-medium">{model.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/60 backdrop-blur-sm px-space-xs py-space-2xs rounded-full">
                    <span className="material-symbols-outlined text-[14px] text-secondary-container">star</span>
                    <span className="font-body-sm text-body-sm font-semibold">{model.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-space-2xs">
                <div className="flex items-baseline justify-between">
                  <h2 className="font-headline-sm text-headline-sm text-primary">{model.name}</h2>
                  <span className="font-headline-md text-headline-md text-secondary font-bold">{model.price}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{model.desc}</p>
              </div>
              <button
                className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.98] transition-transform hover:bg-primary"
                onClick={() => handleSelect(model)}
              >
                <span>Bu Modeli Seç</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </article>
          ))}
          {filteredModels.length === 0 && (
            <div className="px-margin py-space-2xl flex flex-col items-center justify-center text-center gap-space-sm">
              <h3 className="font-headline-sm text-headline-sm text-primary">Model Bulunamadı</h3>
            </div>
          )}
        </section>

        {/* Booking Quick Confirmation Notification (Toast) */}
        <aside
          className={`fixed bottom-20 left-margin right-margin z-40 bg-inverse-surface text-inverse-on-surface p-space-sm rounded-xl shadow-xl flex items-center justify-between transition-all duration-300 ${
            toastOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
          }`}
        >
          <div className="flex items-center gap-space-xs">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-secondary text-[20px]">check_circle</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase">Model Seçildi</span>
              <span className="font-label-lg text-label-lg text-on-primary leading-tight truncate max-w-[170px]">{selectedModel}</span>
            </div>
          </div>
          <Link
            href="/randevu"
            className="px-space-md py-space-xs rounded-lg bg-primary-fixed text-on-primary-fixed font-label-md text-label-md shrink-0 flex items-center gap-1 shadow-sm active:scale-95 transition-transform"
          >
            <span>Randevuya Git</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </aside>
      </div>
    </>
  );
}
