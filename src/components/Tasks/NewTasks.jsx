// import React, { useState } from "react";

// export default function NewTasks({ onAdd }) {
//   const [enteredTask, setEnteredTask] = useState("");

//   function handleChange(event) {
//     setEnteredTask(event.target.value);
//   }

//   function handleClick() {
//     if (enteredTask === "") {
//       return;
//     }
//     onAdd(enteredTask);
//     setEnteredTask("");
//   }
//   return (
//     <div className="flex items-center gap-4">
//       <input
//         type="text"
//         className="w-64 px-2 py-1 rounded-sm bg-stone-200"
//         onChange={handleChange}
//         value={enteredTask}
//       />
//       <button
//         className=" text-stone-700 hover:text-stone-950"
//         onClick={handleClick}
//       >
//         Add Task
//       </button>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") return;
    onAdd(enteredTask.trim());
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Enter new task..."
        className="w-72 px-4 py-2 rounded-md bg-[#f0eef7] text-[#1f1c2c] placeholder:text-[#9a88aa] focus:outline-none focus:ring-2 focus:ring-[#6c63ff] transition-all duration-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="px-4 py-2 bg-[#06d6a0] text-white rounded-md hover:bg-[#5851db] transition-all duration-200 shadow-sm"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
