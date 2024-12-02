const todoReducer = (tasks, action) => {
    switch (action) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: tasks.length++,
                    title: action.title,
                    completed: false
                }
            ]
        }

        case 'removed': {
            return [
                tasks.filter(task => task.id !== action.taskId)
            ]
        }

        case 'toggleComplete': {
            return [
                tasks.map((task) => {
                    if (task.id !== action.id) return task;
                    return { ...task, completed: !task.completed };
                })
            ]
        }

        case 'setTasks': {
            return action.payload.tasks;
        }

        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default todoReducer;