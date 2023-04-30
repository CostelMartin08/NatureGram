import React from "react";

export const Galerie = (props) => {


    const dataUser = props.onResponse.Postare;
    const valignore = '/uploads/UserPhoto/undefined';

    const sort = dataUser.map(element => {
        return element.mediaContent;
    });

    const filtrare = sort.filter((element) => element !== valignore);
    const sortare = filtrare.sort();


    return (
        <section className="container">
            <div className="row mt-3 p-3">
                {sortare.map(photo =>
                    <div key={photo} className="col-sm-6 col-md-6 mt-3 ">
                        <div className="border card ">
                            <img className="rounded" src={photo} alt='userphoto' height={'200px'} />
                        </div>
                    </div>
                )}
            </div>
        </section>

    );

























}