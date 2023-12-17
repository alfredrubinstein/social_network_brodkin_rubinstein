import "../styles/ContentDiv.css";
import trashCan from "../images/trash-can.svg";
import pen from "../images/pen.png";

function TodoContentDiv(props) {
    function updateElement() {
        alert("update!");
    }

    function deleteElement() {
        props.onDelete(props.id);
    }

    return (
        <div className="ContentDiv" key={props.id}>
            <span id="content">{props.contentText}</span>
            <div className="buttonsContainer">
                <div>
                    בוצע <input type="checkbox"></input>
                </div>
                <div>
                    <img src={pen} onClick={updateElement} width="20px" title="עדכן"/>
                    <img src={trashCan} onClick={deleteElement} width="20px" title="מחק"/>
                </div>
            </div>
        </div>
    );
}

export default TodoContentDiv;

