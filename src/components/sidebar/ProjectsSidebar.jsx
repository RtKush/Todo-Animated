// import React, { useState } from "react";
// import Button from "../Button";
// export default function ProjectsSidebar({
//   onStartAddProject,
//   projects,
//   onSelectProject,
//   selectedProjectId,
// }) {
//   return (
//     <aside className="w-1/3 px-8 py-5 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
//       <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
//         Real Time Notes
//       </h2>
      
//       <div>
//         <Button onClick={onStartAddProject}>+ Add Notes</Button>
//       </div>
//       <ul className="mt-8">
//         {projects.map((project) => {
//           let cssClasses =
//             "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
//           if (project.id === selectedProjectId) {
//             cssClasses += " bg-stone-800 text-stone-200";
//           } else cssClasses += " text-stone-400";

//           return (
//             <li key={project.id}>
//               <button
//                 className={cssClasses}
//                 onClick={() => onSelectProject(project.id)}
//               >
//                 {project.title}
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// }


import React from "react";
import Button from "../Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-full md:w-80 h-full bg-stone-900 text-white p-6 rounded-r-xl shadow-lg flex flex-col">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-stone-200 mb-6 border-b border-stone-700 pb-2">
        Real Time Notes
      </h2>

      {/* Add Button */}
      <Button
        onClick={onStartAddProject}
        className="w-full mb-6 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition"
      >
        + Add Notes
      </Button>

      {/* Projects List */}
      <ul className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-stone-800 pr-1">
        {projects.length === 0 ? (
          <li className="text-stone-400 italic text-sm">No notes available.</li>
        ) : (
          projects.map((project) => {
            const isSelected = project.id === selectedProjectId;

            return (
              <li key={project.id}>
                <button
                  onClick={() => onSelectProject(project.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition font-medium
                    ${
                      isSelected
                        ? "bg-stone-800 text-emerald-400"
                        : "text-stone-400 hover:bg-stone-800 hover:text-stone-200"
                    }`}
                >
                  {project.title}
                </button>
              </li>
            );
          })
        )}
      </ul>
    </aside>
  );
}
