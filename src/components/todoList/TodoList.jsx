
const TodoList = ({items}) => {
    return (
      <ul className="flex flex-col mt-5 text-center">
        {/* {items.map((item, index) => (
          <li key={index}>
            <div className="input-wrapper">
              <input type="checkbox" id={`checkbox-${index}`} />
              <label htmlFor={`checkbox-${index}`}>{item.name}</label>
            </div>
          </li>
        ))} */}
      </ul>
    );
  }
  
  export { TodoList };