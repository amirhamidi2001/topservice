import { NAV_LINKS } from "../data/content";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-indigo-300 py-10">
      <div className="container mx-auto px-4 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4" aria-label="منوی فوتر">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="border-t border-indigo-700 pt-6 text-sm">
          <p>© {new Date().getFullYear()} تاپ سرویس | تمامی حقوق محفوظ است.</p>
          <p className="mt-2">
            Developed by{" "}
            <a href="https://amirhamidi.pythonanywhere.com/" className="hover:text-white underline">
              Amir Hamidi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
