import { useEffect, useState } from "react";
import { getTasks, updateTask, deleteTask } from "../services/taskService";
import { FaTrash, FaCheckCircle } from "react-icons/fa";
import styles from "./TaskList.module.css"; // Import CSS module

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleToggleComplete = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    await updateTask(task.id, updatedTask);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className={styles.container}>
      <h2>Task List</h2>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={`${styles.taskItem} ${task.completed ? styles.completed : ""}`}>
            <span className={styles.taskText}>{task.title}</span>
            <div className={styles.buttonGroup}>
              <button onClick={() => handleToggleComplete(task)} className={styles.button}>
                <FaCheckCircle className={`${styles.checkIcon} ${task.completed ? styles.completed : ""}`} />
              </button>
              <button onClick={() => handleDelete(task.id)} className={styles.button}>
                <FaTrash className={styles.trashIcon} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
