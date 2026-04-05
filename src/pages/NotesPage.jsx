import { useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard";

function NotesPage() {
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Mis Notas</h1>
          <Link
            to="/add-note"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2 rounded-xl transition shadow-md"
          >
            + Nueva Nota
          </Link>
        </div>
        {notes.length === 0 ? (
          <p className="text-gray-500 text-center mt-20 text-lg">No hay notas aún. ¡Crea una!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesPage;

