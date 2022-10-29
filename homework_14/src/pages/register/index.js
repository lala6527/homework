import{useState,useEffect,useRef} from'react';
 import {Button} from '../../components/Button';
import styles from './register.module.scss';

export const Register = ( ) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const passwordRef = useRef();
    const passwordAgainRef = useRef();

    const nameRegex = /\w/;
    const emailRegex = /[A-Za-z0-9]*@[a-z]+\.[a-z]{2,3}$/;
    const mobileRegex = /^09[0-9]{8}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const[nameError,setNameError] = useState(null);
    const[emailError,setEmailError] = useState(null);
    const[mobileError,setMoblieError] = useState(null);
    const[passwordError,setPasswordError] = useState(null);
    const[passwordAgainError,setPasswordAgainError] = useState(null);

    const handleRegister=(e)=>{
        e.preventDefault();

        if(nameRegex.test(nameRef.current.value)){
            setNameError(false);
        }else{
            setNameError(true);
        }

        if(emailRegex.test(emailRef.current.value)){
            setEmailError(false);
        }else{
            setEmailError(true);
        }

        if(mobileRegex.test(mobileRef.current.value)){
            setMoblieError(false);
        }else{
            setMoblieError(true);
        }            
        if(passwordRegex.test(passwordRef.current.value)){
            setPasswordError(false);
        }else{
            setPasswordError(true);
        }

        if(passwordRef.current.value === passwordAgainRef.current.value && passwordAgainRef.current.value!="")
        {
            setPasswordAgainError(false);
        }else{
            setPasswordAgainError(true);
        }
        if(nameError || mobileError || emailError || passwordError || passwordAgainError){
            return false;
        }
        if(nameError=== false && mobileError === false && emailError === false && passwordError === false && passwordAgainError === false){
            window.location.href="/";
        }
    }

return(
<div className={styles.register}>
    <div className="container">
        <form action="" className={styles.form}>
            <h1>Create Account</h1>
                <label htmlFor="name">
                    <span>Full Name</span>
                    <input type="text" id="name" ref={nameRef} placeholder="請輸入您的名字" />
                    {nameError && (<div className={styles.error}>格式錯誤，請使用英文</div>)}
                </label>
                <label htmlFor="email">
                    <span>Email</span>
                    <input type="text" id="email" ref={emailRef} placeholder="e.g yourname@gmail.com"/>
                    {emailError && (<div className={styles.error}>Mail格式錯誤</div>)}
                </label>
                <label htmlFor="mobile">
                    <span>Mobile</span>
                    <input type="text" id="mobile" ref={mobileRef} placeholder="0912345678"/>
                    {mobileError &&(<div className={styles.error}>手機格式錯誤，請使用數字</div>)}
                </label>
                <label htmlFor="password">
                    <span>Password</span>
                    <input type="password" id="password" ref={passwordRef}/>
                    {passwordError &&(<div className={styles.error}>密碼格式錯誤</div>)}
                </label>
                <label htmlFor="passwordAgain">
                    <span>Comfirm Password</span>
                    <input type="password" id="passwordAgain" ref={passwordAgainRef}/>
                    {passwordAgainError &&(<div className={styles.error}>必須與上面輸入一樣的密碼</div>)}
                </label>
                <Button onClick={handleRegister}>送出</Button>
        </form>
    </div>
</div>
)
}