import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaReact,
  FaNode
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss
} from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: Array<{ name: string; icon: React.ComponentType<{ className?: string }> }>;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Gestão',
      description: 'Plataforma completa para gestão empresarial',
      longDescription: 'Sistema desenvolvido com React e TypeScript para gerenciamento completo de processos empresariais, incluindo dashboard interativo, relatórios em tempo real e automação de tarefas.',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'API RESTful',
      description: 'Backend robusto com NestJS e PostgreSQL',
      longDescription: 'API RESTful desenvolvida com NestJS, implementando arquitetura limpa, autenticação JWT, validação de dados e integração com banco de dados PostgreSQL para alta performance.',
      technologies: [
        { name: 'NestJS', icon: SiNestjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'PostgreSQL', icon: SiPostgresql },
      ],
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce moderna e responsiva',
      longDescription: 'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento integrado, painel administrativo e dashboard de analytics para gestão de vendas.',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNode },
        { name: 'MongoDB', icon: SiMongodb },
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo com visualizações de dados',
      longDescription: 'Dashboard moderno para análise de dados com gráficos interativos, filtros avançados, exportação de relatórios e integração com múltiplas fontes de dados em tempo real.',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
      githubUrl: 'https://github.com',
      featured: false,
    },
  ];

  const filters = ['all', 'frontend', 'backend', 'fullstack'];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => {
        if (selectedFilter === 'frontend') {
          return project.technologies.some(t => t.name === 'React' || t.name === 'Tailwind CSS');
        }
        if (selectedFilter === 'backend') {
          return project.technologies.some(t => t.name === 'NestJS' || t.name === 'Node.js');
        }
        if (selectedFilter === 'fullstack') {
          return project.technologies.length > 2;
        }
        return true;
      });

  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Meus Projetos
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore uma coleção de projetos desenvolvidos com tecnologias modernas,
            focados em criar soluções inovadoras e experiências excepcionais.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedFilter === filter
                    ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/50'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {filter === 'all' ? 'Todos' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      Destaque
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, index) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700"
                        >
                          <Icon className="text-blue-900" />
                          <span>{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium text-sm"
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium text-sm"
                      >
                        <FaExternalLinkAlt />
                        <span>Ver Projeto</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Nenhum projeto encontrado com este filtro.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interessado em trabalhar juntos?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Vamos conversar sobre seu próximo projeto e como posso ajudar a transformar suas ideias em realidade.
          </p>
          <a
            href="https://wa.me/553171613385"
            target="_blank"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
