import { FEATURED_SERVICES } from "../data/content";

const FeaturedServices = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-indigo-800">خدمات تخصصی تاپ سرویس</h2>
          <p className="text-indigo-500 mt-2">همه خدمات با ضمانت و پشتیبانی پس از تعمیر</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_SERVICES.map((s, idx) => (
            <div
              key={s.title}
              className="bg-indigo-50 rounded-2xl p-6 text-right hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="text-5xl mb-4" aria-hidden="true">{s.icon}</div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">{s.title}</h3>
              <p className="text-indigo-600 mb-3">{s.desc}</p>
              <ul className="space-y-1 text-sm text-indigo-500">
                {s.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
