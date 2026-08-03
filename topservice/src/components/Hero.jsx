import { HERO_STATS } from "../data/content";

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

          <div className="flex justify-around mt-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                <div className="text-sm text-indigo-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-0 w-full max-w-sm md:max-w-none mx-auto">
          <img
            src="/assets/img/logo.webp"
            alt="تعمیر لباسشویی"
            width={512}
            height={512}
            fetchpriority="high"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
