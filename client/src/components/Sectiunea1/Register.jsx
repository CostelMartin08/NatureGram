import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const navigate = useNavigate();
  const [confirmare, xconfirmare] = useState(false);
  const [confirmare1, xconfirmare1] = useState(false);
  const [exista, xexista] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    prename: '',
    username: '',
    password: '',
    password2: '',
    gen: ''
  });


  const { name, prename, username, password, password2, gen } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      xconfirmare(true);
    } if (name === '' || prename === '') {
      xconfirmare1(true);
    }
    else {
      const newUser = {
        name,
        prename,
        username,
        password,
        gen
      };

      axios.post('/register', newUser)
        .then(res => {
          if (res.data === "Exista!") {
            xexista(true);
          } else {
            navigate('/sucCesRegisTer');
          }
        })
        .catch(err => {
          console.log(err);
        });

    }
  };

  return (

    <section>
      <div class="container d-flex justify-content-center px-sm-4 py-5">
        <div class="box-model inregistrare-style mx-3 mx-sm-5 p-sm-4 ">

          <form className="row g-1  mx-3" onSubmit={onSubmit}>

            <div>
              <h1 className="title mb-3 my-2 fw-normal">Înscrie-te</h1>
            </div>

            <div className="col-md-6">
              <label htmlFor="nume" className="form-label">Nume</label>
              <input id="nume" type="text" onChange={onChange} name="name" className="form-control" placeholder="Nume de familie" aria-label="Nume" required />
            </div>

            <div className="col-md-6">
              <label htmlFor="prenume" className="form-label">Prenume</label>
              <input id="prenume" type="text" onChange={onChange} name="prename" className="form-control" placeholder="Prenume" aria-label="Prenume" required />
            </div>
            {confirmare1 ?
              <div id="error">Toate câmpurile sunt obligatorii!</div>
              : null}

            <div className="col-12">
              <label htmlFor="email" className="form-label">Adresa de Email</label>
              <input id="email" type="email" onChange={onChange} name="username" className="form-control" placeholder="Email" autoComplete="off" required />
            </div>
            {exista ?
              <div id="error">Exista un cont asociat acestui email!</div>
              : null}

            <div className="col-12">
              <label htmlFor="parola" className="form-label">Parola</label>
              <input id="parola" type="password" onChange={onChange} name="password" className="form-control" placeholder="Parolă" minLength="6" autoComplete="off" required />
            </div>

            <div className='col-12 '>
              <label htmlFor="confirmaparola" className="form-label">Confirmă Parola</label>
              <input id="confirmaparola" type="password" onChange={onChange} name="password2" className="form-control" placeholder=" Confirma Parola" value={password2} required minLength="6" autoComplete="off" />
            </div>
            {confirmare ?
              <div id="error">Parolele nu se potrivesc!</div>
              : null}

            <div className="col-12">
              <label htmlFor="select" className="form-label">Genul</label>
              <select onChange={onChange} id="select" name="gen" className="form-control" aria-label="Default select example">
                <option value="0">Selectează</option>
                <option value="Feminin">Feminin</option>
                <option value="Masculin">Masculin</option>
                <option value="Neutru">Neutru</option>
                <option value="Neprecizat">Neprecizat</option>
              </select>
            </div>

            <div className="col-12">
              <Link className="btn buton-general-style fw-bold my-3 w-100 p-2" to="/sucCesRegisTer" onClick={onSubmit}>Înscrie-te</Link>
            </div>

          </form>
        </div>
      </div>
      {/* <div className="col-lg-3 col-md-4 col-sm-5 ">


            <div className="social-log modal-content rounded-4 shadow p-3 text-center ">
              <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
                <svg className="bi me-1" width="16" height="16"></svg>
                <i className="fa-brands fa-twitter m-2"></i>
                Sign up with Twitter
              </button>
              <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                <svg className="bi me-1" width="16" height="16"></svg>
                <i className="fa-brands fa-facebook m-2"></i>
                Sign up with Facebook
              </button>
              <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                <svg className="bi me-1" width="16" height="16"></svg>
                <i className="fa-brands fa-google m-2"></i>
                Sign up with Google
              </button>

            </div>
  </div>*/}
    </section>


  );
}
export default Register;
