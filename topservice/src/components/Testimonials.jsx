import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    { name: "پدرام صادقی", text: "خیلی سریع و حرفه‌ای مشکل لباسشویی من رو پیدا کردن. ممنون از تاپ سرویس.", rating: 5, location: "پاکدشت" },
    { name: "مریم حسینی", text: "قطعه برد کمیاب لباسشویی من رو تهیه کردن. واقعاً عالی بودن.", rating: 5, location: "پاکدشت" },
    { name: "علی نوری", text: "مشاوره رایگانشون خیلی کمک کرد. تعمیرکار بااخلاق و ماهر.", rating: 4.9, location: "پاکدشت" },
    { name: "مهدی رضایی", text: "تعویض موتور لباسشویی سامسونگ من رو در کمتر از یک روز انجام دادن.", rating: 5, location: "پاکدشت" },
    { name: "زهرا کریمی", text: "بسیار حرفه‌ای و با قیمت مناسب. حتماً به دیگران توصیه می‌کنم.", rating: 4.9, location: "پاکدشت" },
    { name: "امیر حسینی", text: "تکنسین خیلی مودب و دقیق بود. راضی هستم.", rating: 5, location: "پاکدشت" },
  ];

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
          loop={true}   // حالا با حداقل ۶ اسلاید لوپ به خوبی کار می‌کند
          className="pb-12"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-indigo-50 p-6 rounded-2xl shadow-md text-right">
                <div className="flex text-yellow-400 mb-3">
                  {Array(5).fill(0).map((_, i) => <span key={i}>{i < Math.floor(t.rating) ? "★" : "☆"}</span>)}
                </div>
                <p className="text-indigo-700 italic">"{t.text}"</p>
                <h4 className="font-bold text-indigo-700 mt-4">{t.name}</h4>
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