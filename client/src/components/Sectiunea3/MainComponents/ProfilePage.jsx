import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProfileMod } from "../HelpComponents/changephotoprofile";
import { ProfileModSecond } from "../HelpComponents/changephotomenu2";
import { InformatiiPers } from "../HelpComponents/informatiipers";
import { Galerie } from "../HelpComponents/galerie";


const MyPage = (props) => {
    //Primirea datelor utilizatorului conectat
    const [user, setuser] = useState([]);
    //Schimbarea fotografiei utilizatorului
    const [profilePhoto, setprofilePhoto] = useState(null);
    //Trimiterea datelor utilizatorului catre componenta galerie
    const [responseGalerie, setResponse] = useState([]);
    const [afisareGalerie, setafisareGalerie] = useState(false);
    //Trimiterea datelor utilizatorului catre componenta info
    const [responseInfo, setResponseInfo] = useState([]);
    const [afisareInfo, setafisareInfo] = useState(false);

    const handleRequest = (newRequest) => {

        if (newRequest === 'galerie') {
            setResponse(user);
            setafisareGalerie(true);
            setafisareInfo(false);
        }
        if (newRequest === 'info') {
            setResponseInfo(user)
            setafisareGalerie(false)
            setafisareInfo(true);
        }

    };

    useEffect(() => {

        fetch('/users')
            .then(res => res.json())
            .then(data => {
                setuser(data.user);
            })
            .catch(error => console.error(error));
    }, []);



    const Actualizeaza = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('fileProfileImG', profilePhoto);
        axios.post('/updateImg', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                setprofilePhoto(response);
            })
            .catch(error => {
                console.log(error);
            });
    }





    return (
        <section className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col-12  flex-row align-self-center">
                        <form onSubmit={Actualizeaza}>
                            {profilePhoto !== null ? <ProfileModSecond aqp={profilePhoto} vwp={setprofilePhoto} /> : <ProfileMod info={handleRequest} onRequest={handleRequest} sendPhoto={setprofilePhoto} onResponse={user} />}
                        </form>
                    </div>

                    {afisareGalerie ? <Galerie onResponse={responseGalerie} /> : <InformatiiPers onResponse={responseInfo} />}
                </div>
            </div>
        </section >

    );
}


export default MyPage;