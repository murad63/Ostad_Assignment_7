import { useState } from "react"
import Input from "./components/Input";
import Button from "./components/Button";


function App() {
  const [title, setTitle] = useState("");
  const [todolist, setTodoList] = useState([]);

  function inputChange(e) {
    setTitle(e.target.value);
  }

  function addItem() {
    setTodoList([...todolist, {
      title,
      completed:false
    }]);
    setTitle("");
  }
  function removeItem(indexToRemove) {
    setTodoList(todolist.filter((todo, index) => index != indexToRemove))
  }
  function completeTask(indexToComplete) {
    setTodoList(todolist.map((todo, index) => index != indexToComplete?todo:{...todo,completed:!todo.completed}))
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Input inputChange={inputChange} value={title}/>
        </div>
        <div className="col-md-6">
          <Button title={"Add"} onClick={addItem} disabled={title.length == 0} />
        </div>
      </div>
      <br />
      <ul className="list-group">
        {
          todolist.map(function (todo, index) {
            return <li className="list-group-item" key={index}>
              <input type="checkbox" checked={todo.completed} onClick={()=>completeTask(index)}/>
              <span className={todo.completed&&"text text-muted"}>
              {todo.title}
              </span> <button className="btn btn-danger btn-sm" onClick={() => removeItem(index)}>
                X
              </button>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default App
