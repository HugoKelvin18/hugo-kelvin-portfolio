import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">
            Hugo Kelvin
          </h3>
          <p className="text-sm">
            Desenvolvedor Full Stack em formação
          </p>
          <p className="text-sm">
            <p className="text-sm">
           Gestor de Tráfego Pago
          </p>
          </p>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/hugo-kelvin-aab25b200"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HugoKelvin18"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:hugokelvi4@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/553171613385"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-blue-200">
        © {new Date().getFullYear()} Hugo Kelvin. Todos os direitos reservados.
      </div>
    </footer>
  );
}
