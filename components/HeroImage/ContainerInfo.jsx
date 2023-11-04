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
                <SocialMedia name={'iconwhatsapp-regular'} icon={'/assets/img/socialMedia/whatsapp.png'}/>
                <SocialMedia name={'telegram'} icon={'/assets/img/socialMedia/telegram.png'}/>
                <SocialMedia name={'facebook-square'} icon={'/assets/img/socialMedia/facebook.png'}/>
                <SocialMedia name={'github'} icon={'/assets/img/socialMedia/github.png'}/>
            </div>
        </div>);
};

export default ContainerInfo;
