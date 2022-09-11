const Item=({id,note,date,time,deleteDate})=>{
    return(
        <div className="item">
            <div>
                <p>{note}</p>
                <p>{`${date}${time}`}</p>
            </div>
            <button onClick={deleteItem} className="remove">刪除</button>
        </div>
    );
};
export default Item;