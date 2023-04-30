import React from "react";
import { useState } from "react";


export const Coment = (props) => {

    const loggedUser = props.response;
    const allusers = props.allusers;


    const [coment, setComment] = useState(undefined);


    const clearComent = () => {
        setComment('');
    };

    const change = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("coment", coment);
        formData.append("userpost", props.nrpost);
        try {
            const res = await fetch("http://localhost:5000/upload/coment", {
                credentials: 'include',
                method: "POST",
                body: formData
            });
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            clearComent();
        } catch (error) {
            console.error(error.message);
        }
    };

    //Toate comentariile cu id-ul celui care a comentat :)
    const comment = allusers.flatMap(Postare =>
        Postare.Postare.flatMap(obj => obj.coment)
    ).flat();



    //Comentariile pentru fiecare postare 
    const filteredComent = comment.filter(element => element.timeUpload === props.pressComent);






    return (

        <div className="mt-3 ">
            <div className="d-flex flex-column w-100">

                {filteredComent.map(element =>
                    allusers.filter(user => user._id === element._id).map(filteredUser =>
                        <div key={element._id} className="d-flex align-items-center">
                            <img className="avatar-img rounded-circle me-3" src={element._id === filteredUser._id ? filteredUser.profileimg : null} alt="logged-photo" width='36' height='36' />
                            <div className="d-flexx flex-column">
                                {element._id === filteredUser._id ? <small>  {filteredUser.nume}  {filteredUser.prenume}</small> : null}
                                <p>{element.textC}</p>
                            </div>
                        </div>))}

                <hr />


                <div className="d-flex align-items-center">
                    <img className="me-2 avatar-img rounded-circle" src={loggedUser.profileimg} alt="logged-photo" width='36' height='36' />


                    <form className="w-100 position-relative" onSubmit={change}>
                        <textarea value={coment} onChange={(e) => { setComment(e.target.value) }} data-autoresize="" className="form-control" rows="1" placeholder="Adaugă un comentariu ..." type="text"></textarea>
                        <button className="bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0" type="submit">
                            <i className="fa-regular fa-paper-plane"></i>
                        </button>
                    </form>
                </div>

            </div>


        </div>

    )
}