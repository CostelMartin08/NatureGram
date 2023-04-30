import React from "react";



export const InformatiiPers = (props)=>{

const data = props.onResponse;



return(

<div className="col-12">
                        <div className="container py-3">

                            <div className="row text">
                                <div className="col-md-6 mb-3">
                                    <div className="card border">
                                        <div className="card-header border-bottom">
                                            <h4 className="title">Informații personale</h4>
                                        </div>

                                        <div className="card-body">

                                            <form className="row g-3">



                                                <div className="col-md-6">
                                                    <label className="form-label">Număr de telefon<span className="text-danger">*</span></label>
                                                    <input type="tel" className="form-control" placeholder="Introdu numărul de telefon" />
                                                </div>


                                                <div className="col-md-6">
                                                    <label className="form-label">Naționalitate<span className="text-danger">*</span></label>
                                                    <select name="gen" className="form-control" aria-label="Default select example">
                                                        <option value="0">România</option>
                                                        <option value="Feminin">Franța</option>
                                                        <option value="Masculin">Marea Britanie</option>
                                                        <option value="Neutru">Italia</option>
                                                        <option value="Neprecizat">Spania</option>
                                                    </select>
                                                </div>


                                                <div className="col-md-6">
                                                    <label className="form-label">Data nașterii<span className="text-danger">*</span></label>
                                                    <input type="date" className="form-control flatpickr flatpickr-input" placeholder="Enter date of birth" data-date-format="d M Y" />
                                                </div>


                                                <div className="col-md-6">
                                                    <label className="form-label">Selectează genul<span className="text-danger">*</span></label>
                                                    <ul className="p-0">
                                                        <li className="form-check radio">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                Bărbat
                                                            </label>
                                                        </li>
                                                        <li className="form-check radio-">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Femeie
                                                            </label>
                                                        </li>
                                                        <li className="form-check radio">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                Altceva
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>


                                                <div className="col-12 ">
                                                    <label className="form-label">Adresa</label>
                                                    <textarea className="form-control" rows="3" spellCheck="false" defaultValue="Hello"></textarea>
                                                </div>


                                                <div className=" mx-auto text-end">
                                                    <a type="button" href="" className="btn buton-second-style">Salvează Modificările</a>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="card border ">
                                        <div className="card-header border-bottom">
                                            <h4 className="title">Schimbă parola</h4>
                                        </div>


                                        <form className="card-body">

                                            <div className="mb-4">
                                                <label className="form-label">Parola actuală</label>
                                                <input className="form-control" type="password" placeholder="Enter current password" />
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label"> Introdu noua parolă</label>
                                                <div className="input-group">
                                                    <input className="form-control fakepassword" placeholder="Enter new password" type="password" id="psw-input" />
                                                    <span className="input-group-text p-0 bg-transparent">
                                                        <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label">Confirmă noua parolă</label>
                                                <input className="form-control" type="password" placeholder="Confirm new password" />
                                            </div>

                                            <div className="text-end mx-auto">
                                                <a href="" className="btn buton-second-style mt-3">Schimbă parola</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <div className="card border">
                                        <div className="card-header border-bottom">
                                            <h4 className="title">Schimbă email</h4>
                                            <p className="mb-0">Exemplu: <span className="text-primary">george.popescu@gmail.com</span></p>
                                        </div>


                                        <div className="card-body">
                                            <form>

                                                <label className="form-label">Introdu adresa de email<span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" placeholder="Enter your email id" />

                                                <div className="text-end mt-3">
                                                    <a href="" className="btn buton-second-style">Salvează </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



);

}