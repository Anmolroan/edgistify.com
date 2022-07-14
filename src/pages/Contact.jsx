
import styled from 'styled-components'
import React, { useState } from 'react';

const Wrapper = styled.div`
#image{
  height:350px;
  width :100%;
}
.maindiv{
  width:80%;
  margin:auto;
  display: flex;
  /* padding:px; */
  box-sizing: border-box;
}
.leftdiv,.rightdiv{
  margin:15px;

}


input{
  border:1px solid gray;
  text-indent: 14px;
  height: 40px;
  width: 500px;
  padding: 8px 4px;
  margin: 15px 0;
  font-size: 16px;
  border-radius:10px;
  box-shadow:  0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);

}

#submit{
  font-size:20px;
  height:52px;
  width:462px;
  color:#fff;
  background-color: #25b9aa;
 margin-left:450px;
 
}

input:focus{
  outline:2px solid #0095f6
  

}


.custom-file-input {
  color: transparent;
  margin-bottom:0px;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-file-input::before {
  content: 'Upload File';
  color: black;
  display: flex;
  color:gray;

  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-size: 16px;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active {
  outline: 0;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); 
}

#p{
  color:red;
}


@media screen and (min-device-width: 40px) and (max-device-width: 768px){
  .maindiv{
    width:80%;
  margin:auto;
  display: grid;
  box-sizing: border-box;
}
}

`


function Contact() {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, ['file']: file })
    alert('Submitted check console')
    console.log(formData)
  }

  return (
    <div className="pt-16">
      <Wrapper>

        <img id='image' src='https://www.edgistify.com/topview1.jpg' alt='no image' />
      
        <form onSubmit={handleSubmit}>
          <div className='maindiv'>
            <div className='leftdiv'>
              
              <input type='text' name='email' placeholder='Email Address' onChange={handleChange} />
              <input type='text' name='home' placeholder='Home Town' onChange={handleChange} />
              <input type='text' name='college' placeholder='College/Company' onChange={handleChange} />
              <input type='text' name='course' placeholder='Course Details' onChange={handleChange} />
              <input type='text' name='industry' placeholder='Industry' onChange={handleChange} />
              <input type='date' name='startdate' onChange={handleChange} />
            </div>
            <div className='rightdiv'>
            <input type='text' name='fullname' placeholder='Full Name' onChange={handleChange} />
              <input type='text' name='mobile' placeholder='Mobile Number' onChange={handleChange} />
              <input type='text' name='office' placeholder='In Office/On field' onChange={handleChange} />

           
              {/* <input type='file' id='file' name='resume' placeholder='Upload Resume' /> */}
            </div>
          </div>
          <input type='submit' id='submit' value='SUBMIT' />
        </form>
      </Wrapper>
    </div>

  )
}

export default Contact