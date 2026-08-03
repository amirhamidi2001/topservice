import { WHY_US_BENEFITS } from "../data/content";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-indigo-800">چرا تاپ سرویس؟</h2>
          <p className="text-indigo-500 mt-2">بهترین انتخاب برای تعمیرات تخصصی لباسشویی</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_BENEFITS.map((b, idx) => (
            <div
              key={b.title}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:-translate-y-1 transition"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="text-5xl mb-3" aria-hidden="true">{b.icon}</div>
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
