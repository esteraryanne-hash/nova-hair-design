"use client";
import { useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: "Ayşe Yılmaz",
      phone: "0532 123 45 67",
      service: "Knotless Braids Signature",
      location: "salon",
      address: "",
      date: "2024-10-16",
      time: "11:00",
      status: "Beklemede",
      notes: "Hassas saç derisi.",
    },
    {
      id: 2,
      clientName: "Burcu Demir",
      phone: "0533 987 65 43",
      service: "Doğal Işıltılı Balayage",
      location: "home",
      address: "Teşvikiye Mah. Hüsrev Gerede Cad. No:10 D:5 Şişli/İstanbul",
      date: "2024-10-17",
      time: "14:00",
      status: "Onaylandı",
      notes: "",
    }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Hatalı şifre (İpucu: admin123)");
    }
  };

  const updateStatus = (id: number, newStatus: string) => {
    setAppointments(appointments.map(a => a.id === id ? { ...a, status: newStatus } : a));
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md bg-surface-container-lowest p-8 rounded-xl shadow-lg">
          <div className="flex justify-center mb-6">
            <span className="material-symbols-outlined text-[48px] text-primary">admin_panel_settings</span>
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">Admin Girişi</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Şifre</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-surface-container-low rounded-lg outline-none"
                placeholder="Şifrenizi girin..."
              />
            </div>
            <button type="submit" className="w-full bg-primary text-on-primary p-3 rounded-lg font-semibold mt-2">
              Giriş Yap
            </button>
          </form>
          <div className="mt-4 text-center">
             <Link href="/" className="text-secondary text-sm hover:underline">Siteye Dön</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Randevu Yönetimi</h1>
          <button onClick={() => setIsLoggedIn(false)} className="text-error font-medium hover:underline">
            Çıkış Yap
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {appointments.map((appt) => (
            <div key={appt.id} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/30 flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold">{appt.clientName}</h2>
                  <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                    appt.status === "Beklemede" ? "bg-secondary-container text-on-secondary-container" :
                    appt.status === "Onaylandı" ? "bg-primary-container text-on-primary" :
                    "bg-error-container text-on-error-container"
                  }`}>
                    {appt.status}
                  </span>
                </div>
                <div className="text-sm text-on-surface-variant flex flex-col gap-1">
                  <p><strong>Telefon:</strong> {appt.phone}</p>
                  <p><strong>Hizmet:</strong> {appt.service}</p>
                  <p>
                    <strong>Tarih & Saat:</strong> {appt.date} | {appt.time}
                  </p>
                  <p>
                    <strong>Konum:</strong> {appt.location === "salon" ? "Salonda" : "Evde"}
                  </p>
                  {appt.location === "home" && (
                    <p><strong>Adres:</strong> {appt.address}</p>
                  )}
                  {appt.notes && (
                    <p><strong>Not:</strong> {appt.notes}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {appt.status === "Beklemede" && (
                  <>
                    <button
                      onClick={() => updateStatus(appt.id, "Onaylandı")}
                      className="px-4 py-2 bg-primary text-on-primary rounded-lg font-medium hover:opacity-90"
                    >
                      Onayla
                    </button>
                    <button
                      onClick={() => updateStatus(appt.id, "Reddedildi")}
                      className="px-4 py-2 bg-error text-on-error rounded-lg font-medium hover:opacity-90"
                    >
                      Reddet
                    </button>
                  </>
                )}
                {appt.status !== "Beklemede" && (
                  <button
                    onClick={() => updateStatus(appt.id, "Beklemede")}
                    className="px-4 py-2 bg-surface-container text-on-surface rounded-lg font-medium hover:bg-surface-container-high"
                  >
                    Geri Al
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
