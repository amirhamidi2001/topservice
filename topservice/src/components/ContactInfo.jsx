const ContactInfo = () => {
  return (
    <section id="contact" className="py-16 bg-indigo-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-indigo-800 mb-2">ساعت کاری</h3>
              <p className="text-lg">📅 همه روزه (حتی تعطیلات) <span className="font-bold">۹ صبح تا ۹ شب</span></p>
              <p className="text-indigo-600 mt-2">تماس بگیرید، درب منزل شما حاضر می‌شویم.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-indigo-800 mb-2">راه‌های ارتباطی</h3>
              <div className="space-y-3 text-lg">
                <p>📞 تلفن: <a href="tel:09350844771" dir="ltr" className="text-indigo-700">09350844771</a></p>
                <p>📱 موبایل: <a href="tel:09123456789" dir="ltr" className="text-indigo-700">09037663499</a></p>
                <p>📍 آدرس: پاکدشت</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;