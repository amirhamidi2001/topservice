const WhyUs = () => {
  const benefits = [
    { icon: "💰", title: "مشاوره رایگان", desc: "قبل از هر اقدامی مشکل شما را رایگان بررسی می‌کنیم." },
    { icon: "⏰", title: "ساعت کاری منعطف", desc: "هر روز از ۹ صبح تا ۹ شب، حتی در روزهای تعطیل." },
    { icon: "👨‍🔧", title: "تکنسین‌های مجرب", desc: "با بیش از ۱۰ سال تجربه در زمینه لباسشویی." },
    { icon: "🔧", title: "تضمین کیفیت", desc: "ما به کیفیت خدمات خود اطمینان داریم، رضایت شما سرمایه اصلی ماست." },
  ];

  return (
    <section id="why-us" className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-indigo-800">چرا تاپ سرویس؟</h2>
          <p className="text-indigo-500 mt-2">بهترین انتخاب برای تعمیرات تخصصی لباسشویی</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:-translate-y-1 transition" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="text-5xl mb-3">{b.icon}</div>
              <h3 className="text-xl font-bold text-indigo-700 mb-2">{b.title}</h3>
              <p className="text-indigo-600">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-indigo-700 text-white rounded-2xl p-8 text-center shadow-lg" data-aos="fade-up">
          <p className="text-xl md:text-2xl font-bold">🔧 تخصص ما لباسشویی است، پس با اطمینان تماس بگیرید 🔧</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;