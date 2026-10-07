function TaskItem({ task, toggleTask, deleteTask }) {
  const priorityColor = {
    high: 'bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400',
    medium: 'bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400',
    low: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400',
  }

  return (
    <div className="px-4 py-3 flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <button
        onClick={() => toggleTask(task.id)}
        className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${task.completed
            ? 'bg-indigo-500 border-indigo-500 text-white'
            : 'border-slate-300 dark:border-slate-600'
          }`}>
        {task.completed && (
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`font-medium text-slate-900 dark:text-white ${task.completed ? 'line-through text-slate-400 dark:text-slate-500' : ''
              }`}>
            {task.title}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full capitalize ${priorityColor[task.priority]
              }`}>
            {task.priority}
          </span>
        </div>
        {task.description && (
          <p
            className={`text-sm text-slate-500 dark:text-slate-400 mt-0.5 ${task.completed ? 'line-through' : ''
              }`} >
            {task.description}
          </p>
        )}
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-slate-400 hover:text-rose-500 transition-colors p-1"
        title="Delete" >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}

export default TaskItem
