const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-l from-indigo-50 to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-right">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm mb-4">
            ⚡ تعمیر تخصصی ماشین لباسشویی
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-800 mb-4">
            تاپ سرویس <span className="text-indigo-600">مرجع تخصصی تعمیرات لباسشویی</span>
          </h1>
          <p className="text-indigo-600 text-lg mb-6">
            با افتخار، ارائه‌دهنده خدمات نصب و تعمیر تخصصی انواع مدل‌های لباسشویی ایرانی و خارجی
          </p>
          


          {/* آمار (الهام از hero-stats قالب) */}
          <div className="flex justify-around mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">1500+</div>
              <div className="text-sm text-indigo-500">تعمیر موفق</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">92%</div>
              <div className="text-sm text-indigo-500">رضایت مشتری</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">10+</div>
              <div className="text-sm text-indigo-500">سال تجربه</div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="assets/img/picture-2.webp"
            alt="تعمیر لباسشویی"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;