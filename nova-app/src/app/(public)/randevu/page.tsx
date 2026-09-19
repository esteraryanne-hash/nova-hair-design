"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { createAppointment } from "@/lib/firebase";

export default function Randevu() {
  const [location, setLocation] = useState("salon");
  const [selectedDate, setSelectedDate] = useState("2024-10-16");
  const [selectedTime, setSelectedTime] = useState("11:00");
  const [successSheet, setSuccessSheet] = useState(false);
  
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [modelData, setModelData] = useState({
    name: "Knotless Braids Signature",
    category: "Örgü",
    price: "1.200 TL",
    duration: "2.5 Saat",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUuE2rQBizZcYTXxusvLE4Vaz3cg5gunY7a0ixVj1t3BQ7jpXtdqi_0X3o1EeLmKszTXrFF3BNLlU0fqL9mFFmVOhCU4rCOlFAV5z0zXbDys0h_X4tlLpTKzaeb2UbfyuM78b6YpWfXXYwzbWM8qoEa-0qWhuFYm0CZygRyuOZDHA8OZ2iuu8GIZD3sI8p9DyS6RiwL7r6pV0czA0aK-ZVhA9eY3LPNJr_rt0_UeR3wbdLuwHbCsUY"
  });

  useEffect(() => {
    const saved = sessionStorage.getItem("selectedModel");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setModelData({
          name: parsed.name || "Knotless Braids Signature",
          category: parsed.tagLabel || "Örgü",
          price: parsed.price || "1.200 TL",
          duration: parsed.duration || "2.5 Saat",
          image: parsed.image || modelData.image
        });
      } catch (e) {}
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (location === "home" && !address.trim()) {
      setErrorMsg("Evde hizmet için lütfen geçerli bir adres giriniz.");
      return;
    }
    setErrorMsg("");
    setIsLoading(true);

    const data = {
      customerName,
      phone,
      service: modelData.category,
      model: modelData.name,
      locationType: location,
      date: selectedDate,
      time: selectedTime,
      address: location === "home" ? address : "",
      note,
      status: "pending"
    };

    const result = await createAppointment(data);
    setIsLoading(false);

    if (result.success) {
      setSuccessSheet(true);
      setCustomerName("");
      setPhone("");
      setAddress("");
      setNote("");
      setLocation("salon");
      setSelectedDate("2024-10-16");
      setSelectedTime("11:00");
    } else {
      setErrorMsg("Randevu kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Progress Header Banner */}
        <div className="px-margin pt-space-md pb-space-xs flex flex-col gap-space-2xs">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Rezervasyon Deneyimi</span>
            <span className="font-label-md text-label-md text-on-surface-variant">Adım 1 / 4</span>
          </div>
          <div className="flex items-baseline justify-between">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Randevu Oluştur</h1>
            <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span> Hızlı Onay
            </span>
          </div>
        </div>

        <form className="flex flex-col gap-space-xl px-margin pb-space-3xl mt-space-xs" onSubmit={handleSubmit}>
          {/* ADIM 1: Seçilen Model Özeti */}
          <section className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between px-space-2xs">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">1. Seçilen Model &amp; Hizmet</span>
              <Link href="/kesfet" className="font-label-md text-label-md text-secondary hover:text-primary-container transition-colors flex items-center gap-1">
                Değiştir
                <span className="material-symbols-outlined text-[16px]">swap_horiz</span>
              </Link>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md">
              <div className="relative w-20 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                <img className="w-full h-full object-cover" src={modelData.image} alt="Selected Model" />
                <div className="absolute bottom-1 left-1 bg-primary/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-on-primary font-label-caps uppercase truncate max-w-[70px]">{modelData.category}</div>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-start justify-between gap-1">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface truncate">{modelData.name}</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Uzman stilist el işçiliği</p>
                <div className="flex items-center gap-space-sm mt-space-sm">
                  <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant">schedule</span>
                    <span className="font-label-md text-label-md text-on-surface">{modelData.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-primary-fixed px-2.5 py-1 rounded-lg">
                    <span className="font-label-lg text-label-lg text-on-primary-fixed whitespace-nowrap">{modelData.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ADIM 2: Hizmet Yeri Seçimi */}
          <section className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between px-space-2xs">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">2. Hizmet Yeri</span>
              <span className="font-label-caps text-label-caps text-secondary font-semibold">Lokasyon</span>
            </div>
            <div className="grid grid-cols-1 gap-space-sm">
              {/* Salonda Hizmet */}
              <label className="group relative cursor-pointer block" onClick={() => setLocation("salon")}>
                <input type="radio" name="service_location" value="salon" checked={location === "salon"} onChange={() => setLocation("salon")} className="peer sr-only" />
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm peer-checked:bg-primary-container peer-checked:text-on-primary transition-all duration-200 flex items-start justify-between gap-space-md">
                  <div className="flex items-start gap-space-sm min-w-0">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low peer-checked:group-[]:bg-surface-container-highest/20 flex items-center justify-center shrink-0 text-primary-container peer-checked:group-[]:text-on-primary">
                      <span className="material-symbols-outlined text-[22px]">storefront</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-headline-sm text-headline-sm peer-checked:group-[]:text-on-primary text-on-surface">Salonda Hizmet</span>
                      <span className="font-body-sm text-body-sm peer-checked:group-[]:text-on-primary-container text-on-surface-variant mt-0.5 leading-snug">Salonumuzda Faubourg Saint-Honoré konforunda ağırlanın.</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-surface-container peer-checked:group-[]:bg-surface-container-lowest flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-transparent peer-checked:group-[]:text-primary-container font-bold">check</span>
                  </div>
                </div>
              </label>
              {/* Evde Hizmet */}
              <label className="group relative cursor-pointer block" onClick={() => setLocation("home")}>
                <input type="radio" name="service_location" value="home" checked={location === "home"} onChange={() => setLocation("home")} className="peer sr-only" />
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm peer-checked:bg-primary-container peer-checked:text-on-primary transition-all duration-200 flex items-start justify-between gap-space-md">
                  <div className="flex items-start gap-space-sm min-w-0">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low peer-checked:group-[]:bg-surface-container-highest/20 flex items-center justify-center shrink-0 text-primary-container peer-checked:group-[]:text-on-primary">
                      <span className="material-symbols-outlined text-[22px]">home_pin</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-headline-sm text-headline-sm peer-checked:group-[]:text-on-primary text-on-surface">Evde Hizmet</span>
                        <span className="bg-secondary-fixed text-on-secondary-fixed font-label-caps text-[10px] px-1.5 py-0.2 rounded-full uppercase">VIP</span>
                      </div>
                      <span className="font-body-sm text-body-sm peer-checked:group-[]:text-on-primary-container text-on-surface-variant mt-0.5 leading-snug">Uzman ekibimiz tüm ekipmanlarıyla adresinize gelsin.</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-surface-container peer-checked:group-[]:bg-surface-container-lowest flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-transparent peer-checked:group-[]:text-primary-container font-bold">check</span>
                  </div>
                </div>
              </label>
            </div>
            {/* Dinamik Adres Alanı */}
            {location === "home" && (
              <div className="flex flex-col gap-space-xs mt-space-2xs bg-surface-container-low p-space-md rounded-xl transition-all">
                <label className="font-label-md text-label-md text-on-surface flex items-center gap-1.5" htmlFor="service-address">
                  <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
                  Hizmet Verilecek Adres Bilgisi
                </label>
                <textarea className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md p-space-sm rounded-lg outline-none focus:bg-surface-container-lowest focus:shadow-md transition-shadow resize-none placeholder:text-outline-variant" id="service-address" placeholder="İlçe, Mahalle, Cadde, Bina & Daire No, Kapı Zili ve Yol Tarifi..." rows={3} value={address} onChange={(e) => setAddress(e.target.value)} required={location === "home"}></textarea>
                <span className="font-body-sm text-body-sm text-on-surface-variant">İstanbul içi tüm merkezi bölgelere servisimiz mevcuttur.</span>
              </div>
            )}
          </section>

          {/* ADIM 3: Tarih ve Saat Seçimi */}
          <section className="flex flex-col gap-space-md">
            <div className="flex items-center justify-between px-space-2xs">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">3. Tarih ve Saat</span>
              <span className="font-label-md text-label-md text-secondary font-semibold">Ekim 2024</span>
            </div>
            {/* Gün Seçici */}
            <div className="flex items-center gap-space-xs overflow-x-auto pb-space-2xs -mx-margin px-margin no-scrollbar">
              {[
                { date: "2024-10-16", day: "Pzt", num: "16" },
                { date: "2024-10-17", day: "Sal", num: "17" },
                { date: "2024-10-18", day: "Çar", num: "18" },
                { date: "2024-10-19", day: "Per", num: "19" },
                { date: "2024-10-20", day: "Cum", num: "20" },
                { date: "2024-10-21", day: "Cmt", num: "21" },
              ].map((d) => (
                <button
                  key={d.date}
                  type="button"
                  onClick={() => setSelectedDate(d.date)}
                  className={`shrink-0 w-[58px] h-[72px] rounded-xl flex flex-col items-center justify-center gap-1 shadow-sm transition-all ${
                    selectedDate === d.date ? "bg-primary-container text-on-primary" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  <span className={`font-label-caps text-label-caps uppercase ${selectedDate === d.date ? "opacity-80" : "text-on-surface-variant"}`}>{d.day}</span>
                  <span className="font-headline-md text-headline-md leading-none">{d.num}</span>
                </button>
              ))}
            </div>

            {/* Saat Dilimleri */}
            <div className="flex flex-col gap-space-sm bg-surface-container-low p-space-md rounded-xl">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">wb_twilight</span>
                  <span className="font-label-caps text-label-caps uppercase tracking-wider">Sabah Seansları</span>
                </div>
                <div className="grid grid-cols-2 gap-space-xs">
                  {["09:30", "11:00"].map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`h-12 rounded-lg font-label-lg text-label-lg flex items-center justify-center shadow-sm transition-all ${
                        selectedTime === time ? "bg-primary-container text-on-primary" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-space-xs mt-space-xs">
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">light_mode</span>
                  <span className="font-label-caps text-label-caps uppercase tracking-wider">Öğleden Sonra Seansları</span>
                </div>
                <div className="grid grid-cols-3 gap-space-xs">
                  {["14:00", "15:30", "17:00"].map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`h-12 rounded-lg font-label-lg text-label-lg flex items-center justify-center shadow-sm transition-all ${
                        selectedTime === time ? "bg-primary-container text-on-primary" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ADIM 4: İletişim Bilgileri */}
          <section className="flex flex-col gap-space-sm">
            <div className="flex items-center justify-between px-space-2xs">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">4. İletişim Bilgileri</span>
              <span className="font-label-md text-label-md text-on-surface-variant">Kişisel</span>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
              <div className="flex flex-col gap-space-2xs">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="client-name">Ad Soyad</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant absolute left-3">person_outline</span>
                  <input className="w-full h-12 pl-10 pr-space-sm bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface outline-none focus:bg-surface-container-lowest focus:shadow-inner transition-all placeholder:text-outline-variant" id="client-name" placeholder="Örn: Selin Kaya" required type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-col gap-space-2xs">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="client-phone">Telefon Numarası</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant absolute left-3">call</span>
                  <input className="w-full h-12 pl-10 pr-space-sm bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface outline-none focus:bg-surface-container-lowest focus:shadow-inner transition-all placeholder:text-outline-variant" id="client-phone" placeholder="0532 ..." required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-col gap-space-2xs">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="client-notes">Ek Not / Özel İstek</label>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Opsiyonel</span>
                </div>
                <div className="relative flex items-start">
                  <textarea className="w-full p-space-sm bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface outline-none focus:bg-surface-container-lowest focus:shadow-inner transition-all resize-none placeholder:text-outline-variant" id="client-notes" placeholder="Saç uzunluğu, alerjik hassasiyet veya stil tercihleriniz..." rows={2} value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                </div>
              </div>
            </div>
          </section>

          {/* Bilgilendirme Notu */}
          <div className="bg-surface-container-high/60 rounded-xl p-space-md flex items-start gap-space-sm">
            <div className="w-7 h-7 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 text-on-secondary-fixed">
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Randevu talebiniz incelenerek onay durumu <strong className="text-on-surface font-semibold">SMS</strong> ve sistem üzerinden anında bildirilecektir.
            </p>
          </div>

          {/* Buton */}
          <div className="flex flex-col gap-space-2xs pt-space-xs">
            {errorMsg && (
              <div className="mb-2 p-3 rounded-lg bg-error-container text-on-error-container text-sm font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">error</span>
                {errorMsg}
              </div>
            )}
            <button className="w-full h-14 bg-primary-container hover:bg-primary active:scale-[0.99] text-on-primary font-label-lg text-label-lg rounded-xl shadow-md transition-all flex items-center justify-center gap-space-xs disabled:opacity-70 disabled:cursor-not-allowed" type="submit" disabled={isLoading}>
              <span>{isLoading ? "İşleniyor..." : "Randevu Talebi Gönder"}</span>
              {!isLoading && <span className="material-symbols-outlined text-[20px]">arrow_forward</span>}
            </button>
            <div className="flex items-center justify-center gap-1 text-on-surface-variant py-1">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider">Güvenli &amp; Hızlı Rezervasyon</span>
            </div>
          </div>
        </form>

        {/* Tamamlandı Başarı Modal/Banner Diyaloğu */}
        <div className={`fixed inset-0 z-50 bg-primary-container/40 backdrop-blur-sm items-end justify-center ${successSheet ? 'flex' : 'hidden'}`}>
          <div className="bg-surface-container-lowest w-full max-w-lg rounded-t-3xl p-space-xl pb-32 max-h-[95vh] overflow-y-auto flex flex-col items-center text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-space-md text-primary-container shrink-0">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-space-2xs">Talebiniz Alındı</span>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Harika Bir Seçim!</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs mb-space-lg">
              Randevu talebiniz uzman ekibimize iletildi. Randevu detayları kısa süre içinde kayıtlı telefonunuza SMS olarak iletilecektir.
            </p>
            <div className="w-full bg-surface-container-low rounded-xl p-space-sm mb-space-lg flex justify-around">
              <div className="flex flex-col text-left">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Tarih</span>
                <span className="font-label-lg text-label-lg text-on-surface">16 Ekim, {selectedTime}</span>
              </div>
              <div className="flex flex-col text-left min-w-0 flex-1 ml-2">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Model</span>
                <span className="font-label-lg text-label-lg text-on-surface truncate block" title={modelData.name}>{modelData.name}</span>
              </div>
            </div>
            <button
              className="w-full h-12 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-sm"
              onClick={() => setSuccessSheet(false)}
              type="button"
            >
              Randevu Durumunu İncele
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
