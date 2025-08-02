
import React, { useState } from "react";
import NewTasks from "./NewTasks";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

export default function Tasks({ tasks, onAdd, onDelete }) {
  const [completedTasks, setCompletedTasks] = useState({});

  function handleToggleComplete(taskId) {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  }

  return (
    <section className="mt-6">
      <h2 className="text-3xl font-extrabold text-[#9d4edd] tracking-wide mb-6">
        Tasks
      </h2>

      <NewTasks onAdd={onAdd} />

      {tasks.length === 0 && (
        <p className="text-orange-400 italic mt-6 text-center">
          📌 This note doesn't have any tasks yet.
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="mt-8 space-y-4 bg-[#f5f5fa] p-6 rounded-xl shadow-sm border border-[#ddd]">
          {tasks.map((task) => {
            const isCompleted = completedTasks[task.id];
            return (
              <li
                key={task.id}
                className={`flex justify-between items-center px-4 py-3 rounded-lg shadow-sm transition-all hover:shadow-md ${
                  isCompleted ? "bg-green-200" : "bg-green-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    className="text-xl text-[#1f1c2c]"
                    onClick={() => handleToggleComplete(task.id)}
                  >
                    {isCompleted ? (
                      <FaCheckCircle className="text-green-700" />
                    ) : (
                      <FaRegCircle />
                    )}
                  </button>
                  <span
                    className={`text-[#1f1c2c] font-medium tracking-wide ${
                      isCompleted ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>

                <button
                  className="text-sm text-red-500 hover:text-red-700 transition-colors duration-200"
                  onClick={() => onDelete(task.id)}
                >
                  ✖ Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
