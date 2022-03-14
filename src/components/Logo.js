export default function Logo() {
    return (
        <div className='Logo'>
            <LogoImg />
            <Spacer />
            <LogoTxt />
        </div>
    )
}

function LogoImg() {
    return (
        <div>
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    )
}

function Spacer() {
    return (
        <div className='Spacer'></div>
    )
}

function LogoTxt() {
    return (
        <div className='LogoTxt'>
            <img src="../assets/img/logo.png" alt="Instagram Logo Texto" />
        </div>
    )
}