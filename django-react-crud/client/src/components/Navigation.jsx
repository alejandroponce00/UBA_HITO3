import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Gestor de Tareas Hito3</h1>
        <h5 className="font-bold text-3xl mb-4">Equipo:Quemados</h5>
      </Link>
      <button className="bg-indigo-500 p-3 rounded-lg">
        <Link to="/tasks-create">Crear Tareas</Link>
      </button>
    </div>
  );
}
