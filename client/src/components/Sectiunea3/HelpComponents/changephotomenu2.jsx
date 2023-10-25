import React from "react";
import { useState } from "react";


export const ProfileModSecond = (props) => {

    const [showDiv, setShowDiv] = useState(true);

    if (showDiv) {

        setTimeout(() => {
            setShowDiv(false);
            props.vwp(null);
        }, 4000);
    }

    return (

        <div className="mt-2" tabIndex="-1" id="offcanvasSidebar">
            <div className="card w-100">
                <div className="card-body p-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            {props.aqp ? <div className="file-name">{props.aqp.name === undefined ? <div>  {showDiv && (<div className="d-inline"><em className="m-2">{props.aqp.data}</em><i className="fa-solid fa-check"></i></div>)}</div> : <div className="d-flex align-items-center flex-column"> <p>Sigur incarci aceasta fotografie? </p><em>{props.aqp.name}</em></div>}</div> : <div></div>}
                        </div>
                        <div>
                            {props.aqp.data !== undefined ? null : <button className="btn" ><i className="fa-solid fa-paper-plane"></i></button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}