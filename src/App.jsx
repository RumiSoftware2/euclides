import "./index.css";
import { slides } from "./story/slides";
import StoryPlayer from "./components/StoryPlayer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 text-slate-900">
      {/* Fondo con patrón griego sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <header className="relative max-w-5xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="text-4xl">🏺</div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Euclides – Proposición 13
            </h1>
            <div className="text-4xl">📐</div>
          </div>
          <div className="text-2xl md:text-3xl font-semibold text-slate-700 mb-4">
            Historia Ilustrada
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-amber-200">
              <span className="font-semibold text-amber-700">Proposición 13, Libro I:</span> Si una recta se levanta sobre otra recta, forma ángulos adyacentes que son iguales a dos rectos.
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Sebastian</span>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <span>🏛️</span>
              <span>Edwards</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="relative max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200 p-8">
          <StoryPlayer slides={slides} />
        </div>
      </main>
      
      <footer className="relative text-center py-8 text-slate-500">
        <div className="flex justify-center items-center gap-2">
          <span>🏺</span>
          <span>Geometría Clásica Griega</span>
          <span>📐</span>
        </div>
      </footer>
    </div>
  );
}
