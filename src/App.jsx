import "./index.css";
import { slides } from "./story/slides";
import StoryPlayer from "./components/StoryPlayer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold">Euclides – Proposición 13: historia ilustrada</h1>
        <p className="text-slate-600 mt-2 max-w-2xl">
          Si una recta se levanta sobre otra, forma dos ángulos rectos o ángulos que suman dos rectos (180°).
        </p>
      </header>
      <main className="max-w-6xl mx-auto px-6 pb-12">
        <StoryPlayer slides={slides} />
      </main>
    </div>
  );
}
