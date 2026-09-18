export default function Header() {
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
      </div>
    </header>
  );
}
