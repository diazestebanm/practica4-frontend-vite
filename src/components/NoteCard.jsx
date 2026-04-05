import { useNotes } from "../context/NotesContext";
import { Link } from "react-router-dom";

function NoteCard({ note }) {
  const { deleteNote } = useNotes();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col justify-between border border-gray-100">
      <div>
        <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2">
          {note.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-3 mb-4">
          {note.description}
        </p>
      </div>

      <div className="flex gap-2 mt-auto">
        <Link
          to={`/notes/${note._id}`}
          className="flex-1 text-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold py-2 rounded-lg transition"
        >
          Editar
        </Link>
        <button
          onClick={() => deleteNote(note._id)}
          className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 text-sm font-bold py-2 rounded-lg transition"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default NoteCard;

