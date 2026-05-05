const Footer = () => {
  return (
    <footer className="bg-teal-950 text-teal-300 py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="#home" className="hover:text-white">خانه</a>
          <a href="#about" className="hover:text-white">درباره ما</a>
          <a href="#featured-properties" className="hover:text-white">تعمیرات ویژه</a>
          <a href="#services" className="hover:text-white">خدمات</a>
          <a href="#agents" className="hover:text-white">تکنسین‌ها</a>
          <a href="#testimonials" className="hover:text-white">نظرات</a>
          <a href="#blog" className="hover:text-white">مقالات</a>
          <a href="#contact" className="hover:text-white">تماس</a>
        </div>
        <div className="border-t border-teal-700 pt-6 text-sm">
          <p>© {new Date().getFullYear()} تاپ سرویس | تمامی حقوق محفوظ است.</p>
          <p className="mt-2">Developed by <a href="https://amirhamidi.pythonanywhere.com/">Amir Hamidi</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;