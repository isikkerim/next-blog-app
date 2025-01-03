"use client";

import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:isik.kerim@outlook.com",
    username: "isik.kerim@outlook.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/isikkerim",
    username: "isikkerim",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kerim-işık-b47892211/",
    username: "Kerim Işık",
  },
  {
    icon: FaMedium,
    label: "Medium",
    href: "https://medium.com/@isikkerim",
    username: "@isikkerim",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">İletişim</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <link.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{link.label}</h2>
                  <p className="text-gray-600">{link.username}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hakkımda</h2>
          <p className="text-gray-600 mb-4">
           Web teknolojileri,  mobil uygulama geliştirme alanlarında çalışmalar yapıyorum.
          </p>
          <p className="text-gray-600">
            Yeni projeler ve iş birlikleri için benimle iletişime geçebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
} 