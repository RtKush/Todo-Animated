

import React from "react";
import Tasks from "./Tasks/Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex justify-center items-start px-4 py-8 min-h-[calc(100vh-4rem)] w-full bg-gradient-to-tr from-[#1f1c2c] via-[#2a2438] to-[#191825]">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-8 text-white relative overflow-hidden min-h-[30rem] max-h-[80vh] overflow-y-auto transition-all duration-500 ease-in-out">

        {/* Decorative blurred glows */}
        <div className="absolute w-64 h-640 bg-orange-600 rounded-full blur-3xl opacity-30 top-[-3rem] right-[-3rem] z-0" />
        <div className="absolute w-64 h-64 bg-pink-900 rounded-full blur-3xl opacity-30 bottom-[-3rem] left-[-3rem] z-0" />

        <header className="mb-6 relative z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc]">
              {project.title}
            </h1>
            <button
              onClick={onDelete}
              className="text-xl text-red-400 hover:text-red-600 font-medium transition"
            >
              Delete
            </button>
          </div>
          <p className="text-sm text-gray-300 mt-1">{formattedDate}</p>
          <p className="mt-4 text-gray-100 whitespace-pre-wrap">{project.description}</p>
        </header>

        <div className="relative z-10">
          <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

