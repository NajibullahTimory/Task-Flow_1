import { useForm } from "react-hook-form"

function TaskForm({ addTask }) {
  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    defaultValues: {
      title: "",
      description: "",
      priority: "medium",
    }
  })

  const onSubmit = (data) => {
    addTask(data)
    reset()
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
      <h2 className="font-semibold text-slate-900 dark:text-white mb-3">
        Add Task
      </h2>
      <form  className="space-y-3">
        <div>
          <input type="text" placeholder="Task title..." className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("title", {
              required: "Title is required",
              minLength: { value: 2, message: "At least 2 characters" },
            })} />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>
        
        <textarea
          placeholder="Description (optional)..."
          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          {...register("description")} />

        <div className="flex gap-3">
          <select
            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("priority")}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button  className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors" onClick={handleSubmit(onSubmit)}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm
