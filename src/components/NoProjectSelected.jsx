// import React from "react";
// import Button from "./Button";


// import noProjectImage from "../assets/no-projects.png";
// export default function NoProjectSelected({onStartAddProject}) {
//   return (
//     <div className="mt-24 text-center w-2/3 ">
//       <img
//         src={noProjectImage}
//         alt="An empty task list"
//         className="w-16 h-16 object-contain mx-auto"
//       />
//       <h2 className="text-xl font-bold text-stone-500  my-4 ">
//         No Notes Selected
//       </h2>
//       <p className="text-stone-400 mv-4">
//         Select a Notes or get started with a new one
//       </p>
//       <p className="mt-8">
//         <Button onClick={onStartAddProject}>Create new Notes</Button>
//       </p>
//     </div>
//   );
// }


// import React from "react";
// import { motion } from "framer-motion";
// import noProjectImage from "../assets/no-projects.png";

// export default function NoProjectSelected({ onStartAddProject }) {
//   return (
//     <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-hidden p-6">

//       {/* Floating bubbles */}
//       {[...Array(6)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full bg-blue-900 opacity-20 blur-xl animate-bounce-slow"
//           style={{
//             width: `${40 + i * 15}px`,
//             height: `${40 + i * 105}px`,
//             top: `${10 + i * 10}%`,
//             left: `${5 + i * 15}%`,
//             animationDelay: `${i * 2}s`,
//           }}
//         />
//       ))}

//       {/* Glassmorphic Card */}
//       <motion.div
//         initial={{ y: 50, opacity: 0, scale: 0.9 }}
//         animate={{ y: 0, opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-[2rem] shadow-2xl px-10 py-12 text-center z-10 w-full max-w-xl"
//       >
//         {/* Animated glowing border */}
//         <div className="absolute inset-0 rounded-[2rem] border border-white border-opacity-20 animate-border-glow" />

//         <img
//           src={noProjectImage}
//           alt="No project"
//           className="w-28 h-28 mx-auto mb-6 drop-shadow-lg animate-float"
//         />

//         <motion.h2
//           className="text-4xl font-bold text-white mb-3 tracking-wide"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           No Notes Yet
//         </motion.h2>

//         <motion.p
//           className="text-gray-300 text-lg mb-8"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           Start something meaningful by creating your first note now.
//         </motion.p>

//         <motion.button
//           onClick={onStartAddProject}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="relative px-8 py-3 text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full font-semibold overflow-hidden shadow-xl hover:shadow-indigo-500/40 transition duration-300"
//         >
//           <span className="relative z-10">Create Note</span>
//           <span className="absolute inset-0 blur-md opacity-30 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse" />
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import noProjectImage from "../assets/no-projects.png";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-hidden p-60">

      {/* Floating bubbles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-900 opacity-20 blur-xl animate-bounce-slow"
          style={{
            width: `${40 + i * 15}px`,
            height: `${40 + i * 105}px`,
            top: `${10 + i * 10}%`,
            left: `${5 + i * 15}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}

      {/* Glassmorphic Card */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-[2rem] shadow-2xl px-10 py-12 text-center z-10 w-full max-w-[500px] h-[480px] flex flex-col justify-center items-center"
      >
        {/* Animated glowing border */}
        <div className="absolute inset-0 rounded-[2rem] border border-white border-opacity-20 animate-border-glow" />

        <img
          src={noProjectImage}
          alt="No project"
          className="w-[120px] h-[120px] mx-auto mb-6 drop-shadow-lg animate-float"
        />

        <motion.h2
          className="text-3xl font-bold text-white mb-3 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          No Notes Yet
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base mb-8 px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Start something meaningful by creating your first note now.
        </motion.p>

        <motion.button
          onClick={onStartAddProject}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 py-3 text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full font-semibold overflow-hidden shadow-xl hover:shadow-indigo-500/40 transition duration-300"
        >
          <span className="relative z-10">Create Note</span>
          <span className="absolute inset-0 blur-md opacity-30 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse" />
        </motion.button>
      </motion.div>
    </div>
  );
}
