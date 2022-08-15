import Image from 'next/image';

import googleIcon from '../Images/googleIcon.svg'
import style from './LoginBox.module.css';

export default function LoginBox() {
    return (
        <div>
            <div className={style.loginBox}>
                <div>
                    <span className={style.header}>Welcome Back</span>
                    <span className={style.subHeader}>We are excited to see you again</span>
                </div>
                <div className={style.phoneInputContainer}>
                    <span className={style.phoneLabel}>Phone</span>
                    <input type="phone" />
                </div>
                
                <div className={style.OTPContainer}>

                </div>
                <div className={style.OTPButton}>
                    Send OTP
                </div>
                <div vlassName={style.signInWithGoogle}>
                    <Image src={googleIcon}  alt=""/>
                    <span>Sign in with Google</span>
                 </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}