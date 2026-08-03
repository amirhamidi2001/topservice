import { ABOUT_CHECKLIST } from "../data/content";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 order-2 lg:order-1" data-aos="fade-up">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm mb-4">
              🏆 پیشرو در تعمیرات تخصصی
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
              تعمیرات لباسشویی در پاکدشت
            </h2>
            <p className="text-indigo-600 mb-6">
              آیا لباسشویی شما دچار مشکل شده؟ نگران نباشید! تیم متخصص تاپ سرویس آماده است تا در سریع‌ترین زمان، مشکل دستگاه شما را به صورت تخصصی و اصولی برطرف کند.
            </p>

            <div className="space-y-3">
              {ABOUT_CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-indigo-600 text-xl">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-0 w-full max-w-sm lg:max-w-none mx-auto order-1 lg:order-2" data-aos="fade-up">
            <img
              src="/assets/img/picture-2.webp"
              alt="درباره تاپ سرویس"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
