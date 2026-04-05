import { useForm } from "react-hook-form";
import { useNotes } from "../context/NotesContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
function NotesFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createNotes, getNote, updateNote } = useNotes();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadNote() {
      if (params.id) {
        const note = await getNote(params.id);
        setValue("title", note.title);
        setValue("description", note.description);
      }
    }
    loadNote();
  }, []);
  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateNote(params.id, data);
    } else {
      createNotes(data);
    }
    navigate("/notes");
  });
  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl">

      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        {params.id ? "✏️ Editar Nota" : "📝 Nueva Nota"}
      </h2>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Título</label>
          <input
            type="text"
            {...register("title")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Título de tu nota..."
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Contenido</label>
          <textarea
            {...register("description")}
            rows="6"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            placeholder="Escribe tu nota aquí..."
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-lg transition shadow-md"
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={() => navigate("/notes")}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 rounded-lg transition"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
);

}
export default NotesFormPage;
