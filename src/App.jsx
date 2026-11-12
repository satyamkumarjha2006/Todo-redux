import AddTodo from "./Components/AddTodo"
import Todo from "./Components/Todo"


function App() {
  

  return (
    <>
    <div className="bg-slate-950 min-h-screen py-8">
    <h1 className="text-transparent bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-extrabold text-center mb-8 mt-2">Redux Todo</h1>
    <AddTodo/>
    <Todo/>
    </div>
    
    </>

     
  )
}

export default App
