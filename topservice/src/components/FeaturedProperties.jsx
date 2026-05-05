const FeaturedProperties = () => {
  const featuredRepairs = [
    {
      title: "تعمیر برد اصلی لباسشویی ال جی",
      location: "پاکدشت",
      specs: ["برد", "ال جی", "گارانتی"],
      image: "assets/img/person-f-5.webp",
      badge: "ویژه",
    },
    {
      title: "تعویض موتور لباسشویی سامسونگ",
      location: "پاکدشت",
      specs: ["موتور", "سامسونگ", "۱۲ ماه گارانتی"],
      image: "assets/img/person-f-6.webp",
      badge: "داغ",
    },
    {
      title: "رفع نشتی لباسشویی بوش",
      location: "پاکدشت",
      specs: ["نشتی", "بوش", "لاستیک دور درب"],
      image: "assets/img/person-f-7.webp",
      badge: "جدید",
    },
  ];

  return (
    <section id="featured-properties" className="py-16 bg-teal-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-2">تعمیرات ویژه</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
          <p className="text-teal-500 mt-4">پرتقاضاترین خدمات تعمیرات در ماه اخیر</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredRepairs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <span className="absolute top-3 right-3 bg-teal-600 text-white text-xs px-3 py-1 rounded-full">{item.badge}</span>
              </div>
              <div className="p-5 text-right">
                <h3 className="text-xl font-bold text-teal-800 mb-2">{item.title}</h3>
                <div className="flex items-center gap-1 text-teal-500 text-sm mb-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6c0 2.5 3 6 6 10 3-4 6-7.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/></svg>
                  <span>{item.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.specs.map((spec, i) => <span key={i} className="bg-teal-100 text-teal-600 text-xs px-2 py-1 rounded-full">{spec}</span>)}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-700 font-bold text-xl">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;