import Lottie from 'react-lottie';

import LoginBox from '../../Components/LoginBox';
import style from './index.module.css';
import Logo from '../../components/Logo';


function AuthenticationPage(){
    return <div className={style.authPage}>
        <div className={style.authTop}>
            <div>
                <Logo width="100"  height="50" removeSubText/>
            </div>
            <div>
                About Us
            </div>
        </div>
        <div className={style.authMid}>
            <div className={style.half}>
                <Lottie options={{
                    autoplay: true,
                    loop: true,
                    animationData: require('../../images/authentication.json')
                }}
                width="70vh"
                />
            </div>
            <div className={style.half}>

            <LoginBox />

            </div>
        </div>
        <div className={style.authBottom}>
            Copyright Blaze @2022
        </div>
    </div>
}

export default AuthenticationPage;