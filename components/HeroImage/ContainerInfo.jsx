import '@styles/HeroImage/ContainerInfo.css';
import SocialMedia from "@components/SocialMedia";

const ContainerInfo = () => {
    return (
        <div className="container-info">
            <div className="container-gretting">
                <div className="hi-there">Hi there!</div>
            </div>
            <div className="container-presentation">
                <div className="i-am-developer-container">
                    <span>{`I am `}</span>
                    <span className="developer">{`Developer `}</span>
                </div>
            </div>
            <div className="container-description">
                <div className="i-make-the">I make the complex simple</div>
            </div>
            <div className="container-social-media">
                <a href="https://api.whatsapp.com/send?phone=5358503871" target="_blank">
                    <SocialMedia name={'iconwhatsapp-regular'} icon={'/assets/icon/whatsapp-regular.svg'}/>
                </a>
                <a href="https://t.me/leiniercy" target="_blank">
                    <SocialMedia name={'telegram'} icon={'/assets/icon/telegram.svg'}/>
                </a>
                <a href="https://www.facebook.com/leinier.caraballoyanes/" target="_blank">
                    <SocialMedia name={'facebook-square'} icon={'/assets/icon/facebook-square.svg'}/>
                </a>
                <a href="https://github.com/leiniercy" target="_blank">
                    <SocialMedia name={'github'} icon={'/assets/icon/github.svg'}/>
                </a>
            </div>
        </div>);
};

export default ContainerInfo;
