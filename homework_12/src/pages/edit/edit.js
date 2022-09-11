import{ useState} from "react"

const Edit=({add})=>{
    const[note,setNote]=useState("");
    function note(e){
        setNote(e.target.value);
    }
    const[note,setDate]=useState("");
    function note(e){
        setDate(e.target.value);
    }
    const[note,setTime]=useState("");
    function note(e){
        setTime(e.target.value);
    }


function add(prevDate){
    return[
        note,
        data,
        time,
        ...prevDate,
    ];

}
return(
<div>
    <h1>備忘錄</h1>
    <p>記事:</p>
    <input type="text" value={note} onChange={noteChang}/>
    <p>日期:</p>
    <input type="date" value={date} onChange={dateChang}/>
    <p>時間:</p>
    <input type="time" value={time} onChange={timeChang}/>
    <button onClick={addItem} className="add">新增</button>
</div>
);

};
