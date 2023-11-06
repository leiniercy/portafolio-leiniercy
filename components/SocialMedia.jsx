import '@styles/components/SocialMedia.css';

const SocialMedia = (props) => {
    // return (<div className="social-media">
    //     <img className="container-icon" alt={props.name} src={props.icon}/>
    // </div>);

    return (<div className="social-media">
        <div className="social-media-container-icon">
            <div className="social-media-container-icon-child" />
            <img className="social-media-icon" alt={props.name} src={props.icon} />
        </div>
    </div>);
};

export default SocialMedia;
