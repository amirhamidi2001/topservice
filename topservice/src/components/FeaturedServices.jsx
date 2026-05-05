const FeaturedServices = () => {
  const services = [
    { icon: "🔧", title: "عیب‌یابی تخصصی", desc: "تشخیص دقیق مشکل در کمترین زمان", features: ["رایگان در محل", "دستگاه‌های پیشرفته"] },
    { icon: "🔌", title: "تعمیر برد", desc: "بردهای اصلی و قدرت (ایرانی و خارجی)", features: ["تعمیر تخصصی", "ارائه ضمانت"] },
    { icon: "⚙️", title: "تعویض موتور", desc: "موتورهای تسمه‌ای و دایرکت درایو", features: ["قطعات اصل", "نصب حرفه‌ای"] },
    { icon: "🔄", title: "تعویض سه‌نظام و بلبرینگ", desc: "رفع صدا و لرزش لباسشویی", features: ["کاسه‌نمد", "بلبرینگ اصلی"] },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-teal-800">خدمات تخصصی تاپ سرویس</h2>
          <p className="text-teal-500 mt-2">همه خدمات با ضمانت و پشتیبانی پس از تعمیر</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="bg-teal-50 rounded-2xl p-6 text-right hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">{s.title}</h3>
              <p className="text-teal-600 mb-3">{s.desc}</p>
              <ul className="space-y-1 text-sm text-teal-500">
                {s.features.map((f, i) => <li key={i}>✓ {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;