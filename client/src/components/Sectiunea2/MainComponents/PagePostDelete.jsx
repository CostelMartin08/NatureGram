import React from "react";

const Verificare = () => {



    return (
        <div class="modal modal-alert position-absolute d-block  py-5" tabindex="-1" role="dialog" id="modalChoice">
            <div className="modal-dialog py-5" role="document">
                <div className="modal-content rounded-3 shadow">
                    <div className="modal-body p-4 text-center">
                        <h5 clasName="mb-0">Sigur dorești să stergi postarea?</h5>
                        <p className="mb-0">Acest proces este ireversibil</p>
                    </div>
                    <div className="modal-footer flex-nowrap p-0">
                        <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end"><strong>Da, sigur</strong></button>
                        <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal">Nu, o păstrez</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Verificare;