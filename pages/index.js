import { useState } from "react"




const Index = () => {

  const [userInput,setUserInput]= useState('')
  const [todoList,setTodoList]=useState([])
  const handleChange= (e) =>{
    e.preventDefault()
    setUserInput(e.target.value)
    console.log(userInput)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoList([
      userInput,
      ...todoList
    ])

    setUserInput('')
  }

  const handleDelete = (todo)=> {
    const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
    setTodoList(updatedArr)

  }

  return(
    <>
    
    <div className="content-center">
    <div className="w-3/6 ">
    <h1>To do List</h1>
      <form action="">
        <input type="text" value={userInput} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
      {
        todoList.length>=1 ? todoList.map((todo,idx) => {
          return <li key={idx}>{todo}<button onClick={
            (e)=>{
              e.preventDefault()
              handleDelete(todo)

            }
          }>Delete</button></li>

        }
        ):"Enter a todo item"
      }
        
      </ul>


    </div>
      
    </div>
    </>
  )
}
export default Index
