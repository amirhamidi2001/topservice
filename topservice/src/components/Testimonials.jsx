import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { TESTIMONIALS } from "../data/content";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-indigo-800">نظرات مشتریان</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mt-2"></div>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="pb-12"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="bg-indigo-50 p-6 rounded-2xl shadow-md text-right">
                <div className="flex text-yellow-400 mb-3" aria-label={`امتیاز ${t.rating} از ۵`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} aria-hidden="true">{i < Math.floor(t.rating) ? "★" : "☆"}</span>
                  ))}
                </div>
                <p className="text-indigo-700 italic">&quot;{t.text}&quot;</p>
                <h3 className="font-bold text-indigo-700 mt-4">{t.name}</h3>
                <p className="text-sm text-indigo-500">{t.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
