// import Item from "./item"
const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, data, time, id } = item;
        return (
          <div>{item.note}</div>

        );
      })}

    </div>
  );
};

export default List;

