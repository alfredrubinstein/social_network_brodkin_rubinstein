import { useState, useRef, useEffect } from "react";
import plus from "../images/add.png";
import PostContentDiv from "../components/PostContentDiv";
import { useDataManagement } from "../helpers/useDataManagement";

export function Posts() {
  const { todos, addTodo, deleteTodo } = useDataManagement("http://localhost:3500/posts");

  const [postsNum, setPostsNum] = useState(0); // Definición de postsNum como variable de estado
  const [components, setComponents] = useState([]);
  const input = useRef();

  useEffect(() => {
    setComponents(
      todos.map(todo => (
        <PostContentDiv
          key={todo.id}
          id={todo.id}
          //revisar hace problemas
        // contentText={posts.title ? album.title : ""} 
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
      body: "xxx" // Puedes ajustar el cuerpo a tu necesidad
    });
    input.current.value = "";

    // Incrementar el contador de postsNum después de agregar un nuevo elemento
    setPostsNum(prevPostsNum => prevPostsNum + 1);
  }

  function deleteElement(idToDelete) {
    deleteTodo(idToDelete);

    // Disminuir el contador de postsNum después de eliminar un elemento
    setPostsNum(prevPostsNum => prevPostsNum - 1);
  }
  return (
    <>
      <div id="container">
        <div>
          <center>
            <h1>מאמרים</h1>
          </center>
        </div>
        <input type="text" placeholder="הכנס מאמר חדש" ref={input} />
        <img src={plus} onClick={addElement} width="30px" title="הוסף" />

        <div>מספר המאמרים שלך הוא: {postsNum}</div>

        {/* {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && data && (
          <ul>
            {data.map((post) => (
              <li key={post.id}>
                <h6>TITLE</h6>
                {post.title} <h6>BODY</h6>
                {post.body}
              </li>
            ))}
          </ul>
        )} */}

        {components}
      </div>
    </>
  );
}

