import { 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope, 
  FaGithub, 
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFacebook,
  FaChartLine,
  FaChartBar,
  FaUsers
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNestjs,
  SiGoogleads,
  SiGoogleanalytics
} from "react-icons/si";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import foto from "../assets/foto.jpeg";

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-900 to-blue-700 text-white px-6"
      >
        <img
          src={foto}
          alt="Foto de Hugo Kelvin"
          className="w-36 h-36 rounded-full border-4 border-white shadow-lg mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Hugo Kelvin
        </h1>

        <p className="mt-4 max-w-xl text-lg text-blue-100">
          Desenvolvedor Full Stack em formação, focado em criar soluções modernas,
          escaláveis e bem estruturadas.
        </p>

        <div className="flex gap-6 mt-8 text-2xl">
          {[
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/hugo-kelvin-aab25b200" },
            { icon: FaGithub, link: "https://github.com/HugoKelvin18" },
            { icon: FaEnvelope, link: "mailto:hugokelvi4@gmail.com" },
            { icon: FaWhatsapp, link: "https://wa.me/553171613385" },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              className="hover:text-blue-300 transition-transform transform hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Sobre mim
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
        Sou desenvolvedor Full Stack em formação, com foco na criação de soluções digitais
modernas, organizadas e orientadas à resolução de problemas reais.

Atuo no desenvolvimento de aplicações utilizando React, TypeScript e NestJS,
aplicando boas práticas de código, escalabilidade e manutenção. Além da área
técnica, possuo conhecimentos em gestão de tráfego pago, entendendo o funil de
vendas, a jornada do cliente e a importância da análise de dados para tomada de
decisão.

Tenho experiência no uso de ferramentas como Meta Ads, Google Ads, Google
Analytics e Pixel de conversão, integrando estratégias de mídia paga com páginas,
funis e automações para geração de leads qualificados. Busco crescimento
contínuo, aprendizado prático e participação em projetos que gerem valor real
para negócios e pessoas.
        </p>
      </section>

      {/* SKILLS */}
<section id="skills" className="py-24 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
    Habilidades
  </h2>

  {/* DEV SKILLS */}
  <div className="max-w-6xl mx-auto mb-20">
    <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center">
      Desenvolvimento de Software
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "NestJS", icon: SiNestjs },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Git & GitHub", icon: FaGitAlt },
      ].map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition"
        >
          <Icon className="text-blue-900 text-4xl mb-4" />
          <span className="text-lg font-semibold">{name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* TRAFFIC SKILLS */}
  <div className="max-w-6xl mx-auto">
    <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center">
      Gestão de Tráfego Pago & Performance
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        { name: "Meta Ads (Facebook & Instagram)", icon: FaFacebook },
        { name: "Google Ads", icon: SiGoogleads },
        { name: "Google Analytics", icon: SiGoogleanalytics },
        { name: "Pixel de Conversão", icon: FaChartLine },
        { name: "Funil de Vendas", icon: FaChartBar },
        { name: "Geração de Leads", icon: FaUsers },
      ].map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition"
        >
          <Icon className="text-blue-900 text-4xl mb-4" />
          <span className="text-lg font-semibold text-center">
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* CTA */}
  <div id="contact" className="mt-24 text-center">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">
      Vamos conversar?
    </h2>

    <a
      href="https://wa.me/553171613385"
      target="_blank"
      className="inline-block bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-800 transition"
    >
      Falar no WhatsApp
    </a>
  </div>
</section>


      <Footer />
    </div>
  );
}
