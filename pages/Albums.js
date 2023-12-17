import { useState, useRef, useEffect } from "react";
import plus from "../images/add.png";
import AlbumContentDiv from "../components/AlbumContentDiv";
import { useDataManagement } from "../helpers/useDataManagement";

export function Albums() {
  const { todos, addTodo, deleteTodo } = useDataManagement("http://localhost:3500/albums");

  const [albumsNum, setAlbumsNum] = useState(0);
  const [components, setComponents] = useState([]);
  const input = useRef();

  useEffect(() => {
    setComponents(
      todos.map(album => (
        <AlbumContentDiv
          key={album.id}
          id={album.id}
          //revisar hace problemas
        // contentText={album.title ? album.title : ""} 
          onDelete={deleteElement}
        />
      ))
    );
  }, [todos, deleteElement]);

  function addElement() {
    const inputValue = input.current.value;
    addTodo({
      userId: 1, // O el valor que desees asignar
      title: inputValue,
    });
    input.current.value = "";

    setAlbumsNum(prevAlbumsNum => prevAlbumsNum + 1);
  }

  function deleteElement(idToDelete) {
    deleteTodo(idToDelete);

    setAlbumsNum(prevAlbumsNum => prevAlbumsNum - 1);
  }

  return (
    <>
      <div id="container">
        <div>
          <center>
            <h1>אלבומים</h1>
          </center>
        </div>
        <input type="text" placeholder="הכנס אלבום חדש" ref={input} />
        <img src={plus} onClick={addElement} width="30px" title="הוסף" />

        <div>מספר האלבומים שלך הוא: {albumsNum}</div>

        {/* {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && data && (
          <ul>
            {data.map((album) => (
              <li key={album.id}>{album.title}</li>
            ))}
          </ul>
        )} */}

        {components}
      </div>
    </>
  );
}

