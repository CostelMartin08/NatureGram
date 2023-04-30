import React, { useState, useEffect } from 'react';
import MainPage from '../MainComponents/MainScrollPage';
import Posteaza from '../MainComponents/ScrollPagePost';
import AsidePage from '../MainComponents/AsideScrollPage';


const Users = (props) => {
  //Incarcare utiliz. conectat si restul
  const [loggedUser, setloggedUser] = useState([]);
  const [uploadUsers, setuploadUser] = useState([]);
  //Stare pentru afisare componenta de Post
  const [uploadMedia, setuploadMedia] = useState(false);
  //Situatiile in care upload se reincarca in MainPage
  const [pressLike, setpressLike] = useState(false);
  const [pressDelete, setpressDelete] = useState(false);


  const [pressComment, setpressComment] = useState(false);

  //Calea catre utilizatorul conectat
  useEffect(() => {
    let isMounted = true;
    const abortController = new window.AbortController();

    fetch("/users", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setloggedUser(data.user);

        }
      })
      .catch((error) => console.error(error.name));

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);


  //UPLOAD
  useEffect(() => {
    let isMounted = true;
    fetch('/upload')
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setuploadUser(data.users);
          setpressLike(false);
          setpressDelete(false);
          setpressComment(false);


        }
      })
      .catch(error => console.error(error));
    return () => {
      isMounted = false;
    };
  }, [pressLike, pressDelete, pressComment]);




  return (
    <section className='p-3'>
      <div class={uploadMedia ? "row page" : "row"}>

        <AsidePage onResponse={loggedUser} uploadmedia={setuploadMedia} />
        <MainPage onResponse={loggedUser} uploadUsers={uploadUsers}  set={setpressComment} setlikee={setpressLike} setdeletee={setpressDelete} />

      </div>

      <div className={uploadMedia ? "" : " d-none"}>

        <Posteaza uploadmedia={setuploadMedia} />

      </div>
    </section>

  );

}

export default Users    
