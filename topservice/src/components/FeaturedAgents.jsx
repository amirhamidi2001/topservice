const FeaturedAgents = () => {
  const agents = [
    { name: "آرین محمدی", title: "کارشناس تعمیرات لباسشویی", sold: "۵۰۰+ تعمیر", rating: "۴.۹", location: "پاکدشت", image: "assets/img/person-f-1.webp" },
    { name: "محمد محمدی", title: "تکنسین تخصصی", sold: "۳۲۰+ تعمیر", rating: "۴.۸", location: "اصفهان", image: "assets/img/person-f-2.webp" },
    { name: "علی مرتضایی", title: "تعمیرات برد و الکترونیک", sold: "۶۸۰+ تعمیر", rating: "۴.۹", location: "شیراز", image: "assets/img/person-f-3.webp" },
  ];

  return (
    <section id="agents" className="py-16 bg-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-indigo-800">تکنسین‌های برتر تاپ سرویس</h2>
          <p className="text-indigo-500 mt-2">مجرب‌ترین و خوش‌سابقه‌ترین تعمیرکاران</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((a, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden text-center hover:shadow-xl transition" data-aos="fade-up" data-aos-delay={idx * 100}>
              <img src={a.image} alt={a.name} className="w-full h-64 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-indigo-800">{a.name}</h3>
                <p className="text-indigo-600 text-sm">{a.title}</p>
                <div className="flex justify-center gap-4 my-3">
                  <div><span className="font-bold">{a.sold}</span><span className="text-xs block">تعمیر موفق</span></div>
                  <div><span className="font-bold">{a.rating}</span><span className="text-xs block">★ امتیاز</span></div>
                </div>
                <div className="flex items-center justify-center gap-1 text-indigo-500 text-sm mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6c0 2.5 3 6 6 10 3-4 6-7.5 6-10a6 6 0 00-6-6z"/></svg>
                  <span>{a.location}</span>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm transition">درخواست تعمیر</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;