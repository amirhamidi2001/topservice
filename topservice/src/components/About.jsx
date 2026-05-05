const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 order-2 lg:order-1" data-aos="fade-left">
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm mb-4">
              🏆 پیشرو در تعمیرات تخصصی
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
              تبدیل رویاهای تعمیراتی به واقعیت
            </h2>
            <p className="text-teal-600 mb-6">
              آیا لباسشویی شما دچار مشکل شده؟ نگران نباشید! تیم متخصص تاپ سرویس آماده است تا در سریع‌ترین زمان، مشکل دستگاه شما را به صورت تخصصی و اصولی برطرف کند.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-teal-600 text-xl">✓</span>
                <span>عیب‌یابی تخصصی و دقیق</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600 text-xl">✓</span>
                <span>تعمیر و تامین انواع برد (ایرانی و خارجی)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600 text-xl">✓</span>
                <span>تعمیر و تامین موتورهای تسمه‌ای و دایرکت درایو</span>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2" data-aos="fade-right">
            <img src="assets/img/person-f-2.webp" alt="درباره تاپ سرویس" className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;