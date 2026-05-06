const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-l from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4 text-right md:text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4" data-aos="fade-up">آماده تعمیر دستگاه شما هستیم</h2>
          <p className="text-indigo-600 mb-6" data-aos="fade-up" data-aos-delay="100">همین حالا درخواست تعمیر ثبت کنید یا با ما تماس بگیرید. تعمیرکاران ما در کوتاه‌ترین زمان در محل شما حاضر می‌شوند.</p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition">درخواست تعمیر</a>
            <a href="tel:09350844771" className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full font-semibold transition">تماس فوری: 09350844771</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;