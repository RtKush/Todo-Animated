

import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      {/* Modal for Validation Error */}
      <Modal ref={modal} buttonCaption="Got it!">
        <h2 className="text-2xl font-bold text-red-600 my-4">Missing Fields</h2>
        <p className="text-stone-600 mb-2">
          Please fill in <strong>Title</strong>, <strong>Description</strong>, and <strong>Due Date</strong>.
        </p>
        <p className="text-stone-500 text-sm">
          All fields are required to create a new note.
        </p>
      </Modal>

      {/* Form Card */}
      <div className="max-w-2xl w-full mx-auto mt-20 bg-white rounded-xl shadow-lg border border-stone-200 p-8">
        {/* Header */}
        <div className="mb-8 border-b pb-4 border-stone-300">
          <h2 className="text-3xl font-bold text-stone-800">📒 New Note</h2>
          <p className="text-stone-500 mt-1 text-sm">
            Start fresh with a new note – just give it a title, description, and due date.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-stone-200">
          <button
            className="text-stone-500 hover:text-stone-800 transition font-medium"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition"
            onClick={handleSave}
          >
            Save Note
          </button>
        </div>
      </div>
    </>
  );
}
