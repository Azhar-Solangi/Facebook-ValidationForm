import React, { useState } from 'react';
import './Style.css';

const FaceBook = () => {
  const [userFName, setUserFName] = useState('');
  const [showFnameError, setShowFnameError] = useState(false);
  const [msgFName, setMsgFName] = useState('Enter Your First Name ❌');

  const [userLName, setUserLName] = useState('');
  const [showLnameError, setShowLnameError] = useState(false);
  const [msgLName, setMsgLName] = useState('Enter your Surname ❌');

  const [userEmail, setUserEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [msgEmail, setMsgEmail] = useState('Enter Your Email or Phone Number ❌');


  const [userPassword, setUserPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [msgPasswoed, setMsgPassword] = useState('Enter Your Password ❌');




  

  const FNamehandler = (e) => {
    setUserFName(e.target.value)
    if(userFName !== ""){
      setMsgFName('Looks Good! ✔');

    }
     
 
    
  };

  const LNamehandler = (e) => {
    setUserLName(e.target.value);
    if(userLName !== ""){
      setMsgLName('Looks Good! ✔');
    }

  };

  const Emailhandler = (e) => {
    setUserEmail(e.target.value);
    if(userEmail !== ""){
      setMsgEmail('Looks Good! ✔');
    }

  };

  const Passwordhandler = (e) => {
    setUserPassword(e.target.value);
    if(userPassword !== ""){
      setMsgPassword('Looks Good! ✔');
    }
    
  };
  console.log(msgFName);


  const submitForm = (e) => {
    e.preventDefault(); 

    if (userFName === '') {
      setShowFnameError(true);
    }
    if (userLName === '') {
      setShowLnameError(true);
    }
    if (userEmail === '') {
      setShowEmailError(true);
    }
    if (userPassword === '') {
      setShowPasswordError(true);
    }
  };


  return (
    <div className='main-div'>
      <div className='body'>
        <h1 className='heading'><b>facebook</b></h1>
        <div className='main-div'>
          <div className='container'>
            <div className='card'>
              <form onSubmit={submitForm}>
                <div>
                  <h2>Create a new account</h2>
                  <p>it's quick and easy</p>
                </div>
                <hr className='hr' />

                <div className='input-box'>
                 
                 <input value={userFName} onChange={FNamehandler} type='text' placeholder='First Name' />
                  {showFnameError && <p className={` ${ msgFName ==="Looks Good! ✔" ? "grencol"  : "EroorColor"}`}>{msgFName}</p>}


                  <input value={userLName} onChange={LNamehandler} type='text' placeholder='Surname' />
                  {showLnameError && <p className={` ${ msgLName ==="Looks Good! ✔" ? "grencol"  : "EroorColor"}`}>{msgLName} </p>}
                 
                </div>

                <div className='input-box'>
                  <input value={userEmail} onChange={Emailhandler} className='input-2' type='text' placeholder='Mobile Number Or Email Address' />
                  {showEmailError && <p className={` ${ msgEmail ==="Looks Good! ✔" ? "grencol"  : "EroorColor"}`}>{msgEmail}</p>}
                
                </div>
                <div className='input-box'>
                  <input value={userPassword} onChange={Passwordhandler} className='input-2' type='password' placeholder='New password' />
                  {showPasswordError && <p className={` ${ msgPasswoed ==="Looks Good! ✔" ? "grencol"  : "EroorColor"}`}>{msgPasswoed}</p>}
                
                </div>
                <div className='text-2'>
                  <p>People who use our service may have uploaded your Contact information to<br />Facebook.
                    <a href='#'>Learn more.</a><br /></p>
                    
                  <p>By clicking Sign Up, you agree to our <a href='#'>Terms, Privacy Policy</a> and <a
                    href='#'>Cookies Policy.</a><br />You may receive SMS notifications from us and can opt out at
                    any time.</p>
               
                </div>
                <input type='submit' value='Sign Up' className='btn' />
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceBook;
