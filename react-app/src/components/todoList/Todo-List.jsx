import React, { useEffect, useReducer, useState } from "react";
import "../../styles/components/todoList/Todo.scss";

import TodoAddTask from "./todoAddTask/Todo-add-task";
import TodoFilters from "./todoFilters/Todo-filters";
import TodoItem from "./todoItem/Todo-item";
import TodoHeader from "./Todo-header";

import { taskList } from "./taskList";
import todoReducer from "../reducers/todoReducer";

const TodoList = () => {
  const [tasks, dispatch] = useReducer(todoReducer, taskList);
  const [currentFilter, setCurrentFilter] = useState("All");

  const addTask = (title) => {
    dispatch({
      type: "added",
      payload: { title },
    });
  };

  const removeTask = (taskId) => {
    dispatch({
      type: "removed",
      payload: { taskId },
    });
  };

  const toggleComplete = (taskId) => {
    dispatch({
      type: "toggleComplete",
      payload: { taskId },
    });
  };

  const filtersMap = {
    All: () => true,
    Done: (task) => task.completed,
    Todo: (task) => !task.completed,
  };

  return (
    // .To Do
    <div className="todo">
      {/* Header */}
      <TodoHeader />

      {/* Add item to Todo List */}
      <TodoAddTask addTask={addTask} />

      <div className="todo-wrapper">
        {/* Filters */}
        <TodoFilters
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
          filterMap={filtersMap}
        />

        {/* Task list */}
        <div className="task-list">
          {/* Fill task list with basic tasks */}
          {tasks.filter(filtersMap[currentFilter]).map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleComplete={toggleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
