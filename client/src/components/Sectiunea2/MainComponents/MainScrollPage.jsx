import React, { useState, useEffect } from 'react';

import Buton from "../HelpComponents/likebutton";
import RemoveButton from '../HelpComponents/removebutton';
import AfisareLike from '../HelpComponents/likeafisare';
import { ComentButon } from '../HelpComponents/comentButon';
import { Coment } from '../HelpComponents/coment';


const timenow = () => {
  const time = new Date();
  const ora = time.getHours()

  switch (true) {
    case ora < 12:
      return `Bună dimineața!`;
    case ora < 18:
      return `Bună ziua!`;
    case ora < 22:
      return `Bună seara!`;
    default:
      return `Noapte Bună!`;
  }

}

//Functie timp scurs din momentul postarii
const getTimeElapsedString = (timeUpload) => {
  const elapsed = Date.now() - new Date(timeUpload);
  const minutes = Math.floor(elapsed / (1000 * 60));
  const hours = Math.floor(elapsed / (1000 * 60 * 60));
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

  switch (true) {
    case elapsed < 60000:
      return `Acum ${Math.floor(elapsed / 1000)} secunde`;
    case elapsed < 3600000:
      return `Acum ${minutes} ${minutes === 1 ? 'minut' : 'minute'}`;
    case elapsed < 86400000:
      return `Acum ${hours} ${hours === 1 ? 'oră' : 'ore'}`;
    default:
      return `Acum ${days} ${days === 1 ? 'zi' : 'zile'}`;
  }
}

const MainPage = (props) => {

  const conectatu = props.onResponse;

  const users = props.uploadUsers;



  const [pressComent, setpressComent] = useState([]);



  //Sortatrea postarilor si afisarea lor in ordinea incarcarii
  const allPosts = users.reduce((accumulator, user) => {
    return accumulator.concat(user.Postare);
  }, []);

  allPosts.sort((a, b) => b.timeUpload - a.timeUpload);
  const sortedPosts = allPosts.map(post => {
    const userClone = Object.assign({}, users.find(user => user._id === post._id));
    return { user: userClone, post: post };
  });





  return (

    <section className='col-12 col-md-8 col-lg-6' >
      <div className='container-fluid py-3'>

        <div className='col-12 text-center'>
          <h2 className='fs-4 title'>{timenow()}</h2>
        </div>


        <div className='p-1'>
          {sortedPosts.map(sortat =>
            <div key={sortat.post.timeUpload} className="mb-4 ">



              {sortat.post.mediaContent === '/uploads/UserPhoto/undefined' ? null :
                <div className="mb-3">

                  <img src={sortat.post.mediaContent} className="card-img rounded" alt="mediaContent" />
                  <div className="position-absolute bottom-0 start-0 p-4 ">

                  </div>

                </div>}



              <div className="pt-2">
                <div className="d-flex align-items-center">

                  <img src={sortat.user.profileimg} alt="mdo" width='45' height='45' className="rounded-5" />
                  <h6 className='m-2'>{sortat.user.nume} {sortat.user.prenume}</h6>

                </div>
                {sortat.post.textUpload === "undefined" ? null : <p className='textUpload'>{sortat.post.textUpload}</p>}
                <div className=" d-flex justify-content-end">

                  <small className="text">{getTimeElapsedString(sortat.post.timeUpload)}</small>
                </div>
              </div>

              <ul className="nav">
                <li className="nav-item">
                  <Buton gsr={sortat.post.timeUpload} zxw={props.setlikee} />
                </li>
                <li className="nav-item" >
                  <ComentButon plm={setpressComent} pln={sortat.post.timeUpload} />

                </li>

                <li className='nav-item'>
                  <button class="btnLike">
                    <i class="fs-5 fa-regular fa-paper-plane"></i>
                  </button>
                </li>
                <li className="nav-item ms-auto">
                  {conectatu._id === sortat.user._id ?
                    <RemoveButton psr={sortat.post.timeUpload} avi={props.setdeletee} />
                    : null}
                </li>
              </ul>
              <div>
                <AfisareLike pru={sortat.post.like} />
              </div>
             
            {pressComent === sortat.post.timeUpload ? <Coment  pressComent={pressComent} allusers={users} response={conectatu} nrpost={pressComent} /> : null}


              <hr />
            </div>
          )}

        </div>
      </div>

    </section>



  );
}
export default MainPage;