import{useState,useRef}from"react";
import styles from"./list.module.scss";

const list=[{
  id:1,
  date:"2022-09-17",
  name:"吃飯",
  state:true,
},
{
  id:2,
  date:"2022-09-17",
  name:"洗澡",
  state:false,
},
{
  id:3,
  date:"2022-09-17",
  name:"睡覺",
  state:false,
},
];

export const List= ({add})=>{
  const noteRef=useRef();
  const dateRef=useRef();
  const [todo,setTodo]=useState(list);

  const handleState=(id)=>{
    setTodo(todo.map(item =>{
      console.log(item);
      if(item.id !==id)
      return item;
      return{
        ...item,
        state:!item.state
      }
    }))
  }
  const addItem=()=>{
  setTodo([...todo,{
    id: todo.length + 1,
    date:noteRef.current.value,
    name:dateRef.current.value,
    state:false,
  }
])
}
return(
<div className={styles.list}>
<div>
  <h1 id="title">備忘錄</h1>
  <p>記事</p>
  <input type="text" ref={noteRef} />
  <p>日期:</p>
  <input type="date" ref={dateRef} />
  <button onClick={()=>addItem()}className="add">新增</button>
  </div>
  <div>{
    todo.map((task,index)=>{
      return(
        <div className={styles.card} key={`todo-${index}`}>
          <p>預計完成日期:{task.date}</p>
          <p>{task.name}</p>
          <p>{task.state ?"已完成":"未完成"}</p>
          {task.state ?"":<button onClick={()=>handleState(task.id)}>完成</button>}
          </div>
      )
    })
    }
  </div>
</div>
);
};