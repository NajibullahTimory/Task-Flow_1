function Stats({ stats }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center">
        <p className="text-2xl font-bold text-slate-900 dark:text-white">
          {stats.total}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Total</p>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center">
        <p className="text-2xl font-bold text-amber-500">{stats.active}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Active</p>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center">
        <p className="text-2xl font-bold text-emerald-500">{stats.completed}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Done</p>
      </div>
    </div>
  )
}

export default Stats
