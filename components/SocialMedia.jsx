import '@styles/components/SocialMedia.css';

const SocialMedia = (props) => {
    return (<div className="social-media">
        <img className="container-icon" alt={props.name} src={props.icon}/>
    </div>);
};

export default SocialMedia;
