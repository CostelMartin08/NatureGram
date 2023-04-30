import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Connect = (props) => {

  const navigate = useNavigate();
  const [logData, setlogData] = useState({
    username: '',
    password: '',
  });
  const [verificare, xverificare] = useState(false);

  const { username, password } = logData;


  const control = (e) => {
    setlogData({ ...logData, [e.target.name]: e.target.value });
  }


  const onSubmit = async (e) => {
    e.preventDefault();

    const oldUser = {
      username,
      password
    };

    axios.post('/login', oldUser)
      .then(res => {
        console.log(res.status)
        navigate('/users');
      })
      .catch(err => {
        console.log(err);
        if (err.response && err.response.status === 400) {
          console.log('Nume de utilizator sau parola incorecta!');
          xverificare(true);
        }
      });
  }

  return (
    <section className='vh-100'>

      <div class="container d-flex justify-content-center px-sm-4 pt-5 pb-md-5  ">

        <div class="box-model inregistrare-style mx-sm-5 p-sm-4 pt-4">

          <form className="row g-sm-2 mx-3" onSubmit={onSubmit} >

            <h1 className="title my-4 fw-normal">Conectează-te</h1>

            <div className="col-12">
              <label htmlFor="email">Adresa de Email </label>
              <input type="email" onChange={control} name="username" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="col-12  ">
              <label htmlFor="parol">Parola</label>
              <input type="password" onChange={control} name="password" className="form-control" id="parol" placeholder="Password" />
            </div>

            {verificare ?
              <div id="error">Nume de utilizator sau parolă incorecte!</div>
              : null}

            <Link className="buton-general-style btn fw-bold  mt-3 p-2" to="/users" onClick={onSubmit}>Conectare</Link>
            <a className="btn mt-3" role="button"> <i className="fab fa-google"></i> Connect with Google </a>
            <a className="btn mt-3" href="/register" role="button">Nu ai cont? Înscrie-te aici!</a>
            <p className="mt-5 mb-3 text-center">&copy;NatureGram</p>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Connect;
