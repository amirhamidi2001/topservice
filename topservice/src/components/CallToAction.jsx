const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-l from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 text-right md:text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4" data-aos="fade-up">آماده تعمیر دستگاه شما هستیم</h2>
          <p className="text-teal-600 mb-6" data-aos="fade-up" data-aos-delay="100">همین حالا درخواست تعمیر ثبت کنید یا با ما تماس بگیرید. تعمیرکاران ما در کوتاه‌ترین زمان در محل شما حاضر می‌شوند.</p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <a href="#contact" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition">درخواست تعمیر</a>
            <a href="tel:09037663499" className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-full font-semibold transition">تماس فوری: 09037663499</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;