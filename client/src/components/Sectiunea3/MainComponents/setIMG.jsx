import React from 'react';
import axios from 'axios';

//import { useNavigate } from 'react-router-dom';
export function setIMG() {
  //const navigateTo = useNavigate();
  //const [fileProfile, setFileProfile] = useState(null);
  const handleFileChange = (e) => {
    const stocare = e.target.files[0];


    const formData = new FormData();
    formData.append('fileProfileImG', stocare);
    axios.post('/updateImg', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log(response);
        // navigateTo('/users')
      })
      .catch(error => {
        console.log(error);
      });


  };

  return (
    <input type="file" onChange={handleFileChange} className="file-input-button" name="inputFileProfile" id="fileInputProfile" />
  );
}