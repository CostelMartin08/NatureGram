import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

     return (
          <section className="pt-4 container-fluid vh-100">
               <div class="px-sm-4 text-center">
                    <div class="box-model class-box p-3 m-sm-5 ">
                         <h1 class="title title-white pt-5 pb-3 display-3 fw-bold">NatureGram</h1>
                         <div>
                              <p class="text text-white lead mb-4">NatureGram este o aplicație mobilă de social media care încurajează utilizatorii să își împărtășească experiențele în natură prin postarea de poze, videoclipuri și povești. Aplicația este concepută pentru a aduce oamenii mai aproape de natură și de a-i conecta prin experiențe comune.</p>
                              <div class="mb-5">
                                   <Link className="button-transparent-style text-white btn px-4 fw-bold" name="inregistrare" to="/register">Înregistrare</Link>
                                   <Link className="button-transparent-style text-white btn px-4 fw-bold" name="conectare" to="/login">Conectare</Link>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
export default Home;
