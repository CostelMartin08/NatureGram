import React from "react";
import { Link } from "react-router-dom";




export const ProfileMod = (props) => {

    const handleClick = (event) => {
        event.preventDefault();
        props.onRequest('galerie');
    };

    const setClick = (event) => {
        event.preventDefault();
        props.info('info');
    }

    return (
        <div className="mt-2" tabIndex="-1" id="offcanvasSidebar">

            <div className="card border">

                <div className="card-body p-3">

                    <div className=" d-flex  flex-column">

                        <div className="flex-column flex-md-row d-flex align-items-center justify-content-center justify-content-md-start ">
                            <div className="d-flex justify-content-center align-items-center position-relative">

                                <label className="profile-set position-absolute" htmlFor="file-upload">
                                    <i className="fa fa-camera fa-xl"></i></label>
                                <input className="d-none" type="file" onChange={(e) => props.sendPhoto(e.target.files[0])} id="file-upload" />

                                <img className="profile-set-img rounded-circle" src={props.onResponse.profileimg} alt="profile-photoo" height='100px' width='100px' />
                            </div>
                            <div className="ms-2 text-left my-1">
                                <h5 className="mb-0"><em>{props.onResponse.prenume} {props.onResponse.nume}</em></h5>
                                <a className="small text">{props.onResponse.username}</a>
                            </div>
                        </div>

                        <ul className="d-flex flex-column flex-md-row align-items-center justify-content-md-end title p-0">
                            <li className="mx-2  my-2 my-md-0">
                                <a onClick={handleClick} className="nav-link active" href=""><i className="bi bi-person fa-fw me-2"></i>Galerie</a>
                            </li>
                            <li className="mx-2 my-2 my-md-0">
                                <a onClick={setClick} className="nav-link" href="account-settings.html"><i className="bi bi-gear fa-fw me-2"></i>Setări</a>
                            </li>
                            <li className="mx-2 my-2 my-md-0">
                                <a className="nav-link" href="account-delete.html"><i className="bi bi-trash fa-fw me-2"></i>Șterge contul</a>
                            </li>
                            <li className="mx-2 mt-3 mt-md-0 ">
                                <Link to="/users" className="nav-link text-danger bg-danger-soft-hover" ><i className="fas fa-sign-out-alt fa-fw me-2"></i>Înapoi</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

