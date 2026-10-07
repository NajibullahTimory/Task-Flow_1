import { useState } from 'react'
import Header from '../components/Header.jsx'
import TaskForm from '../components/TaskForm.jsx'
import TaskList from '../components/TaskList.jsx'
import Stats from '../components/Stats.jsx'

function Dashboard() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Review project proposal',
      description: 'Go through the Q3 proposal and leave comments',
      priority: 'high',
      completed: false,
    },
    {
      id: 2,
      title: 'Team standup meeting',
      description: 'Daily sync at 10:00 AM',
      priority: 'medium',
      completed: false,
    },
    {
      id: 3,
      title: 'Update documentation',
      description: 'Add new API endpoints to the docs',
      priority: 'low',
      completed: true,
    },
  ])


  const [filter, setFilter] = useState('all')

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    active: tasks.filter((t) => !t.completed).length,
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            My Tasks
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Manage your daily tasks easily
          </p>
        </div>

        <Stats stats={stats} />

        <TaskForm addTask={addTask} />

        <TaskList
          filteredTasks={filteredTasks}
          filter={filter}
          setFilter={setFilter}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </main>
    </div>
  )
}

export default Dashboard
