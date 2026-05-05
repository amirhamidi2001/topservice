import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-teal-700">
          TopService
        </a>

        <button
          className="block md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <nav className="hidden md:flex space-x-6 space-x-reverse">
          <a href="#home" className="hover:text-teal-600">خانه</a>
          <a href="#about" className="hover:text-teal-600">درباره ما</a>
          <a href="#featured-properties" className="hover:text-teal-600">تعمیرات ویژه</a>
          <a href="#services" className="hover:text-teal-600">خدمات</a>
          <a href="#agents" className="hover:text-teal-600">تکنسین‌ها</a>
          <a href="#testimonials" className="hover:text-teal-600">نظرات</a>
          <a href="#blog" className="hover:text-teal-600">مقالات</a>
          <a href="#contact" className="hover:text-teal-600">تماس</a>
        </nav>

        <a
          href="#contact"
          className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-teal-700 transition"
        >
          درخواست تعمیر
        </a>

        {isOpen && (
          <div className="absolute top-16 right-0 left-0 bg-white shadow-md flex flex-col items-center space-y-3 py-4 md:hidden z-50">
            <a href="#home" onClick={() => setIsOpen(false)}>خانه</a>
            <a href="#about" onClick={() => setIsOpen(false)}>درباره ما</a>
            <a href="#featured-properties" onClick={() => setIsOpen(false)}>تعمیرات ویژه</a>
            <a href="#services" onClick={() => setIsOpen(false)}>خدمات</a>
            <a href="#agents" onClick={() => setIsOpen(false)}>تکنسین‌ها</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)}>نظرات</a>
            <a href="#blog" onClick={() => setIsOpen(false)}>مقالات</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>تماس</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;