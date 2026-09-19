"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup, 
  updateProfile,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!isOpen || !mounted) return null;

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);
    
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });
      }
      onClose();
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMsg("Bu e-posta adresi zaten kullanılıyor.");
      } else if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        setErrorMsg("E-posta veya şifre hatalı.");
      } else if (error.code === 'auth/weak-password') {
        setErrorMsg("Şifre çok zayıf. En az 6 karakter olmalıdır.");
      } else {
        setErrorMsg(`Bir hata oluştu: ${error.message || error.code}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);
    try {
      if (!email) {
        setErrorMsg("Lütfen e-posta adresinizi girin.");
        setIsLoading(false);
        return;
      }
      await sendPasswordResetEmail(auth, email);
      setSuccessMsg("Şifre sıfırlama e-postası gönderildi. Lütfen gelen kutunuzu kontrol edin.");
      setIsForgotPassword(false);
    } catch (error: any) {
      if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found' || error.code === 'auth/missing-email') {
        setErrorMsg("Geçerli bir kayıtlı e-posta adresi giriniz.");
      } else {
        setErrorMsg(`Sıfırlama bağlantısı gönderilemedi: ${error.message || error.code}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setErrorMsg("");
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
    } catch (error: any) {
      setErrorMsg(`Google ile giriş yapılamadı: ${error.message || error.code}`);
    } finally {
      setIsLoading(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-surface-container-highest/50 backdrop-blur-sm">
      <div className="min-h-full flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-xl flex flex-col my-auto animate-in fade-in zoom-in duration-200">
          {/* Header */}
        <div className="relative pt-space-lg pb-space-sm px-space-xl text-center border-b border-surface-container-low">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div className="w-12 h-12 rounded-full bg-primary-container text-primary flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-[24px]">lock_person</span>
          </div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            {isForgotPassword ? "Şifremi Unuttum" : (isLogin ? "Hoş Geldiniz" : "Hesap Oluşturun")}
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            {isForgotPassword ? "Şifrenizi sıfırlamak için e-posta adresinizi girin." : "Nova Hair Design dünyasına katılın"}
          </p>
        </div>

        {/* Tabs */}
        {!isForgotPassword && (
          <div className="flex border-b border-surface-container-low">
            <button 
              className={`flex-1 py-3 font-label-md text-label-md transition-colors ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:bg-surface-container-lowest'}`}
              onClick={() => { setIsLogin(true); setErrorMsg(""); setSuccessMsg(""); }}
            >
              Giriş Yap
            </button>
            <button 
              className={`flex-1 py-3 font-label-md text-label-md transition-colors ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:bg-surface-container-lowest'}`}
              onClick={() => { setIsLogin(false); setErrorMsg(""); setSuccessMsg(""); }}
            >
              Kayıt Ol
            </button>
          </div>
        )}

        {/* Form Body */}
        <div className="p-space-xl flex flex-col gap-space-md">
          {successMsg && (
            <div className="p-3 bg-primary-container text-on-primary-container rounded-lg text-sm font-medium flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">check_circle</span>
              <span>{successMsg}</span>
            </div>
          )}
          {errorMsg && (
            <div className="p-3 bg-error-container text-on-error-container rounded-lg text-sm font-medium flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">error</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {isForgotPassword ? (
            <form onSubmit={handleForgotPassword} className="flex flex-col gap-space-sm">
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Kayıtlı E-posta Adresi</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">mail</span>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 pl-10 pr-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline-variant outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center transition-transform active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
                >
                  {isLoading ? "Gönderiliyor..." : "Sıfırlama Linki Gönder"}
                </button>
                <button 
                  type="button" 
                  onClick={() => { setIsForgotPassword(false); setErrorMsg(""); setSuccessMsg(""); }}
                  className="h-12 rounded-xl bg-transparent text-secondary font-label-md text-label-md hover:bg-surface-container transition-colors"
                >
                  Giriş Ekranına Dön
                </button>
              </div>
            </form>
          ) : (
            <>
              <form onSubmit={handleEmailAuth} className="flex flex-col gap-space-sm">
                {!isLogin && (
                  <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Ad Soyad</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">person</span>
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full h-12 pl-10 pr-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline-variant outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all"
                    placeholder="Selin Kaya"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">E-posta</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">mail</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 pl-10 pr-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline-variant outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between ml-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Şifre</label>
                    {isLogin && (
                      <button 
                        type="button" 
                        onClick={() => { setIsForgotPassword(true); setErrorMsg(""); setSuccessMsg(""); }} 
                        className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors"
                      >
                        Şifremi unuttum?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">key</span>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full h-12 pl-10 pr-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline-variant outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="mt-2 h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center transition-transform active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
                >
                  {isLoading ? "Bekleniyor..." : (isLogin ? "Giriş Yap" : "Kayıt Ol")}
                </button>
              </form>

              <div className="relative flex items-center justify-center my-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-surface-container"></div>
                </div>
                <span className="relative bg-surface-container-lowest px-2 font-label-sm text-label-sm text-outline">
                  VEYA
                </span>
              </div>

              <button 
                onClick={handleGoogleAuth}
                disabled={isLoading}
                type="button"
                className="h-12 w-full rounded-xl border border-surface-container-high bg-surface-container-lowest flex items-center justify-center gap-3 transition-colors hover:bg-surface-container-low disabled:opacity-70"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="font-label-md text-label-md text-on-surface">Google ile Devam Et</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  </div>,
  document.body
  );
}
