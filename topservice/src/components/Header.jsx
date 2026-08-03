import { useState } from "react";
import { NAV_LINKS } from "../data/content";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-2">
        <a
          href="/"
          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent shrink-0"
        >
          TopService
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="منوی اصلی">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-indigo-600">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-indigo-700 transition"
        >
          درخواست تعمیر
        </a>

        <button
          type="button"
          className="md:hidden text-2xl shrink-0"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
        >
          ☰
        </button>

        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full inset-x-0 bg-white shadow-md flex flex-col items-center gap-3 py-4 md:hidden z-50"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition"
            >
              درخواست تعمیر
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
