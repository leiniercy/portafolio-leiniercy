
import '@styles/components/SocialMedia.css';

const SocialMedia = (props) => {
    return (<div className="social-media">
            <div className="social-media-child" />
            <img className="social-media-icon" alt={props.name} src={props.icon} />
        </div>);
};

export default SocialMedia;
