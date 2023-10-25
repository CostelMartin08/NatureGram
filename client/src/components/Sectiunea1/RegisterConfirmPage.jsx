import React from "react";
import { Link } from "react-router-dom";



const SuccesRegister = () => {
  return (
    <body class="d-flex flex-column h-100">
      <main role="main" class="flex-shrink-0">
        <div class="container">
          <h1 class="mt-5">Bună!</h1>
          <p class="lead">Contul dumneavoastră a fost creat cu succes! <i class="fa-solid fa-check"></i></p>
          <p><a><Link to="/login">Conectează-te</Link></a></p>
        </div>
      </main>
    </body>


  );
}

export default SuccesRegister;