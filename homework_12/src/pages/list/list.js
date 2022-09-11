import Item from "./item"
const List=({listData,deleteData})=>{
    return(
        <div className="list">
            {listData.map((item)=>{
                const {note,data,time,id}=item;
                return(
                    <Item
                    key={id}
                    id={id}
                    note={note}
                    data={data}
                    time={time}
                    deleteData={deleteData}/>
                );
            })}

        </div>
    );
};

export default List;

