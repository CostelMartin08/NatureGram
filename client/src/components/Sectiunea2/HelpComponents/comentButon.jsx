import React, {useState} from "react";




export const ComentButon = (props) => {
  
    const [clicked, setClicked] = useState(false);

    const press = () => {
        if (!clicked) {
            props.plm(props.pln);
            setClicked(true);
        } else {
            props.plm(0);
            setClicked(false);
        }
    }

    return (
        <button className="btnLike" onClick={press}>
            <i className="fs-5 fa-regular fa-comments"></i>
        </button>
    );
}
