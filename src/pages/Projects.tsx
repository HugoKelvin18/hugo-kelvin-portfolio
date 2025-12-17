import Navbar from '../components/Navbar';

export default function Projects() {
    return (
        <div className="min-h-screen bg-gray-100 pt-24 px-4">
            <Navbar />
            <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-blue-900 mb-4">Projetos</h1>
                <div className="flex flex-col gap-6 max-w-md mx-auto">
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="font-semibold mb-2">Projeto 1</h2>
                        <p className="text-sm mb-4">Descrição do projeto 1</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="font-semibold mb-2">Projeto 2</h2>
                        <p className="text-sm mb-4">Descrição do projeto 2</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="font-semibold mb-2">Projeto 3</h2>
                        <p className="text-sm mb-4">Descrição do projeto 3</p>
                    </div>
                </div>
            </section>
        </div>
    );
}