import Task from './Task';

function TasksList({ tasks, deleteTask }) {
  return (
    <>
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
        />
      ))}
    </>
  );
}

export default TasksList;