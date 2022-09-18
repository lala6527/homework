import { useEffect } from "react";
import { useState, useRef } from "react";
import styles from "./edit.module.scss";

const list = [
  {
    id: 1,
    name: "中秋節吃月餅",
    state: true,
    date: "2022-08-31"
  },
  {
    id: 2,
    name: "端午節吃肉粽",
    state: false,
    date: "2022-06-15"
  },
  {
    id: 3,
    name: "過年吃年菜",
    state: false,
    date: "2023-02-01"
  },
];

export const Edit = ({ add }) => {
  const noteRef = useRef();
  const dateRef = useRef();
  const [todo, setTodo] = useState(list);

  const handleState = (id) => {
    // setTodo();
    setTodo(todo.map(item => {
      console.log(item);
      if (item.id !== id) return item;
      return {
        ...item,
        state: !item.state
      }
    }
    ))
  }

  const addItem = () => {
    setTodo([...list, {
      id: todo.length + 1,
      name: noteRef.current.value,
      date: dateRef.current.value,
      state: false,
    }])
  }

  useEffect(() => {
    document.getElementById("title").innerHTML = "my note";
    document.querySelector("h1").innerHTML = "my note 4";
  }, []);

  return (
    <div className={styles.edit}>
      <div>
        <h1 id="title">備忘錄</h1>
        <p>記事:</p>
        <input type="text" ref={noteRef} />
        <p>日期:</p>
        <input type="date" ref={dateRef} />
        <button onClick={() => addItem()} className="add">新增</button>
      </div>
      <div>
        {todo.map((task, index) => {
          console.log(index);
          return (
            <div className={styles.card} key={`task-${index}`}>
              <p>{task.name}</p>
              <p>{task.state ? "已完成" : "未完成"}</p>
              <p>預計完成日期：{task.date}</p>
              {task.state ? "" : <button onClick={() => handleState(task.id)}>完成</button>}
            </div>
          )
        })}
      </div>
    </div>
  );

};
