const RecentBlog = () => {
  const posts = [
    { title: "راهنمای عیب‌یابی لباسشویی ال جی", date: "۲۵ فروردین ۱۴۰۴", image: "assets/img/person-f-1.webp" },
    { title: "نحوه تعویض لاستیک دور درب لباسشویی", date: "۱۸ فروردین ۱۴۰۴", image: "assets/img/person-f-2.webp" },
    { title: "علت لرزش شدید لباسشویی و راه حل آن", date: "۱۰ فروردین ۱۴۰۴", image: "assets/img/person-f-3.webp" },
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-indigo-800">مقالات آموزشی</h2>
          <p className="text-indigo-500 mt-2">جدیدترین مطالب درباره تعمیرات و نگهداری</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-indigo-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay={idx * 100}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <p className="text-indigo-600 text-sm mb-2">{post.date}</p>
                <h3 className="font-bold text-lg text-indigo-800 mb-3">{post.title}</h3>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold">بیشتر بخوانید ←</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;