import React, { useState } from 'react';

function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span 
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.text}
        </span>
      )}
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
}

export default ToDoItem;
