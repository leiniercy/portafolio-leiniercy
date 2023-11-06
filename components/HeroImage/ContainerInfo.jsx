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
                <SocialMedia name={'iconwhatsapp-regular'} icon={'/assets/icon/whatsapp-regular.svg'}/>
                <SocialMedia name={'telegram'} icon={'/assets/icon/telegram.svg'}/>
                <SocialMedia name={'facebook-square'} icon={'/assets/icon/facebook-square.svg'}/>
                <SocialMedia name={'github'} icon={'/assets/icon/github.svg'}/>
            </div>
        </div>);
};

export default ContainerInfo;
