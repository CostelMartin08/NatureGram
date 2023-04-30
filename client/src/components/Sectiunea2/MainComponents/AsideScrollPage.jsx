import React from "react";
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import axios from "axios";
import ThemeSwitcher from "../HelpComponents/schimbatema";
import MyPage from "../../Sectiunea3/MainComponents/ProfilePage";




const AsidePage = (props) => {
 
  const userul = props.onResponse;

  const deconectare = () => {
    axios.get("/logout").then(res => {
      console.log(res);

    });
  }


  const postCard = () => {
    props.uploadmedia(true);
  }

  return (

    <header className='col-md-4 col-lg-3'>
      <aside className="mode d-flex flex-md-column mt-md-4 pt-md-4 fixed-bottom sticky-md-top ">

        <a href="/" className="d-flex align-items-center mx-auto color-green">
          <h2 className=" d-none d-md-block fs-5 title m-0">NatureGram</h2>
          <h2 className=" d-block d-md-none fs-4 title m-0">NG</h2>
        </a>

        <ul className="nav flex-md-column mx-auto ">
          <li className="my-3">
            <a href="" className="d-inline-flex text color-green">
              <i class="d-flex align-items-center mx-2 fa-solid fa-house"></i>
              <p className="d-none d-md-block"> Home</p>
            </a>
          </li>
          <li className="my-3">
            <a onClick={postCard} type='button' className="d-inline-flex text color-green">
              <i class="d-flex align-items-center mx-2 fa-solid fa-photo-film"></i>
              <p className="d-none d-md-block">Postează</p>
            </a>
          </li>
          <li className="my-3">
            <a href="" className="d-inline-flex text color-green">
              <i class="d-flex align-items-center mx-2 fa-regular fa-compass"></i>
              <p className="d-none d-md-block">Exploreaza</p>
            </a>
          </li>
          <li className="my-3">
            <a href="" className="d-inline-flex text color-green">
              <i class="d-flex align-items-center mx-2 fa-regular fa-envelope-open"></i>
              <p className="d-none d-md-block">Mesaje</p>
            </a>
          </li>
          <ThemeSwitcher />
        </ul>

        <div className="dropdown mx-auto mt-md-5 my-auto">
          <a href="" className="d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={userul ? userul.profileimg : ''} alt="profile-photo2" width='32' height='32' className="rounded-2"/>
            <strong class="d-none d-md-block mx-1">{userul ? userul.prenume : ""}</strong>
          </a>
          <ul className="dropdown-menu shadow">
            <li><a className="dropdown-item fw-light" href="">Raportare Probleme</a></li>
            <li><a className="dropdown-item fw-light" href="">Setări</a></li>
            <li><Link className="dropdown-item fw-light" to='/profil'>Profilul Meu</Link></li>
            <li className="dropdown-divider"></li>
            <li><Link to="/" className="dropdown-item" onClick={deconectare}>Deconectare</Link></li>
           
          </ul>
        </div>
      </aside>
    </header>
  );
};

export default AsidePage;