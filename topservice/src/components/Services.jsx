const Services = () => {
  const servicesList = [
    { icon: "🔧", title: "نصب و تعمیر ماشین لباسشویی", desc: "همه برندهای ایرانی و خارجی" },
    { icon: "🧠", title: "عیب‌یابی تخصصی و دقیق", desc: "با دستگاه‌های پیشرفته" },
    { icon: "🔌", title: "تعمیر و تامین انواع برد (ایرانی و خارجی)", desc: "برد اصلی و برد قدرت" },
    { icon: "⚙️", title: "تعمیر و تامین موتورهای تسمه‌ای و دایرکت درایو", desc: "گارانتی تعویض" },
    { icon: "🔄", title: "تعویض سه‌نظام، کاسه‌نمد و بلبرینگ", desc: "با قطعات اورجینال" },
    { icon: "🚪", title: "تعویض انواع لاستیک دور درب", desc: "ضد نشت و با دوام" },
    { icon: "💧", title: "تعمیر و تعویض شیر برقی و میکروسوئیچ", desc: "تنظیم دقیق" },
    { icon: "📟", title: "تعمیر و تامین سنسورها و سایر قطعات", desc: "سنسور دما، ترموستات و..." },
    { icon: "🔍", title: "تامین قطعات کمیاب در کوتاه‌ترین زمان", desc: "ارسال به سراسر شهر" },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-2">تخصص‌های ما</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
          <p className="text-teal-500 mt-4">ما فقط روی لباسشویی تمرکز داریم، پس با اطمینان بسپارید</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-teal-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 border-r-4 border-teal-500 group hover:-translate-y-1">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">{service.title}</h3>
              <p className="text-teal-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;