import React, { useState } from 'react';

const Posteaza = (props) => {

    const [afisare, setafisare] = useState(false);
    const [text, setText] = useState(undefined);
    const [file, setFile] = useState(null);
    const change = async (e) => {

        setafisare(true);
        // e.preventDefault();
        //Trimiterea datelor 
        const formData = new FormData();
        formData.append("text", text);
        formData.append("file", file);

        try {
            const res = await fetch("http://localhost:5000/upload", {
                credentials: 'include',
                method: "POST",
                body: formData,
            });
            if (!res.ok) {

                throw new Error(res.statusText);
            }
          

        } catch (error) {
            console.error(error.message);
        }
    };

    const removePostCard = () => {
        props.uploadmedia(false);
    }
    return (
       
        <div className='container-fluid d-flex center-element align-items-center justify-content-center'>
            <div className="box-model-2 bg-mycolor ">
                <div className=' d-flex flex-row-reverse  container-fluid'>
                    <div className='mt-2 mb-auto'>
                        <a onClick={removePostCard} type='button'><i class="fa-solid fa-square-xmark fa-lg"></i></a>
                    </div>
                    <form className="p-4 container-fluid" onSubmit={change}>
                        <div className="row g-4 align-items-center">

                            <div className="col-xl-10">
                                <div className="row">

                                    <div className="col-md-6">


                                        <div className="form-border-bottom form-control-transparent form-fs-lg mt-2">
                                            <input type="text" onChange={(e) => setText(e.target.value)} className="text-input" placeholder='Cum ți-a fost ziua?' />
                                        </div>
                                    </div>


                                    <div className="col-md-6">


                                        <div className="form-border-bottom form-control-transparent form-fs-lg mt-2">
                                            <div className="file-input">
                                                <label htmlFor="fileInput">
                                                    <i className="fa fa-camera"></i>
                                                    {file ? <span className="file-name">{file.name}</span> : <span>Adaugă Fotografii</span>}
                                                </label>

                                                <input type="file" onChange={(e) => setFile(e.target.files[0])} className="file-input-button" name="inputFile" id="fileInput" />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="col-xl-1">
                                <div className="d-grid">
                                    <button onClick={removePostCard} className="btn buton-second-style mb-3" type="submit">Postează</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
 );

}
export default Posteaza;  