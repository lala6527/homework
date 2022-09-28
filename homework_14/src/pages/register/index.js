import{useState,useEffect,useRef} from'react';
import { Button, Layout } from '../../components';
import styles from './register.module.scss';

export const Register=()=>{
    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const passwordRef = useRef();
    const passwordAgainRef = useRef();

    const nameRegex=/\w/g;
    const mobileRegex=/\d{10}/g;
    const emailRegex=/[a-z0-9]@[a-z]{2,3}/g;
    const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

    const[nameError,setNameError]=useState(false);
    const[emailError,setEmailError]=useState(false);
    const[mobileError,setMoblieError]=useState(false);
    const[passwordError,setPasswordError]=useState(false);
    const[passwordAgainError,setPasswordAgainError]=useState(false);

    const handleRegister=(e)=>{
        e.preventDefault();
        if(nameRegex.test(nameRef.current.value)){
            setNameError(false);
        }else{
            setNameError(true);
            return true;
        }
        if(emailRegex.test(emailRef.current.value)){
            setEmailError(false);
        }else{
            setEmailError(true);
            return true;
        }
        if(mobileRegex.test(mobileRef.current.value)){
            setMoblieError(false);
        }else{
            setMoblieError(true);
            return true;
        }            
        if(passwordRegex.test(passwordRef.current.value)){
            setPasswordError(false);
        }else{
            setPasswordError(true);
            return true;
        }

        if(passwordRef.current.value===passwordAgainRef.current.value)
        {
            setPasswordAgainError(false);
        }else{
            setPasswordAgainError(true);
            return;
        }
    }
useEffect(()=>{},[]);
return(
<Layout className={styles.register}>
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
                    {emailError && (<div className={styles.error}>錯誤</div>)}
                </label>
                <label htmlFor="mobile">
                    <span>Mobile</span>
                    <input type="text" id="mobile" ref={mobileRef} placeholde="0912345678"/>
                    {mobileError &&(<div className={styles.error}>手機格式錯誤，請使用數字</div>)}
                </label>
                <label htmlFor="password">
                    <span>Password</span>
                    <input type="password" id="password"/>
                    {passwordError &&(<div className={styles.error}>密碼格式錯誤</div>)}
                </label>
                <label htmlFor="passwordAgain">
                    <span>Comfirm Password</span>
                    <input type="text" id="passwordAgain"/>
                    {passwordAgainError &&(<div className={styles.error}>必須與上面輸入醫治的密碼</div>)}
                </label>
                <Button onClick={handleRegister}>Register</Button>
        </form>
    </div>
</Layout>
)
}