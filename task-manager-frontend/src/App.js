import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import styles from "./App.module.css"; // Import the CSS module

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className={styles.appContainer}>
      <h1>Task Manager</h1>
      <div className={styles.taskSection}>
        <TaskForm onTaskAdded={() => setRefresh(!refresh)} />
        <TaskList key={refresh} />
      </div>
    </div>
  );
}

export default App;
