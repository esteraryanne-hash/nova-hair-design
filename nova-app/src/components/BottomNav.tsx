"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: "home", label: "Ana Sayfa" },
    { href: "/kesfet", icon: "auto_awesome", label: "Keşfet" },
    { href: "/randevu", icon: "calendar_month", label: "Randevu" },
    { href: "/iletisim", icon: "alternate_email", label: "İletişim" },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(10,37,64,0.05)]">
      <div className="h-16 px-space-xs flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`min-w-[44px] min-h-[44px] flex flex-col items-center justify-center transition-colors ${
                isActive ? "text-primary-container font-semibold" : "text-on-surface-variant hover:text-primary-container"
              }`}
            >
              <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              <span className="font-label-caps text-label-caps mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
