"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { user, loading, logout } = useAuth();

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(10,37,64,0.04)]">
      <div className="h-16 px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1VCZKTLOZRJTkLGfSTewUiglcGyjp-KIzqdHvnvBMlcE_itt9mwxCUS0ZX3g8XbibR73r9akT50lqRPDCl-c0ZxafwY8Nz_o2C6JXj0PqJd7hpeVApHnc5JtCOM2WD0b537a8vB41qJGQrDoU9jMf9KNi5eLz_3TRUXIH9oM8K9qddHFleXfr0XpwXs0TXSONFt1GeaBCbMg94-SyDAbKu9WAqyo5rQgSOYjo7C2NVo2yiCY-t206oNj2M"
            alt="NOVA HAIR DESIGN BEAUTY CENTER"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </div>
        <div className="flex items-center gap-space-xs">
          {!loading && (
            user ? (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex flex-col text-right mr-1">
                  <span className="font-label-md text-label-md text-on-surface leading-tight truncate max-w-[120px]">
                    {user.displayName || "Kullanıcı"}
                  </span>
                  <button 
                    onClick={() => logout()}
                    className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors text-right w-full"
                  >
                    Çıkış Yap
                  </button>
                </div>
                <button onClick={() => logout()} className="sm:hidden w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary hover:text-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                </button>
                <div className="w-9 h-9 rounded-full bg-primary-container text-primary flex items-center justify-center font-label-md text-label-md uppercase shadow-sm">
                  {user.displayName ? user.displayName.charAt(0) : <span className="material-symbols-outlined text-[20px]">person</span>}
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="px-3 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 shadow-sm hover:bg-surface-container-highest transition-colors active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                <span>Giriş Yap</span>
              </button>
            )
          )}
        </div>
      </div>
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </header>
  );
}
