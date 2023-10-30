import '@styles/components/Service.css';

const Service = (props) => {

    return (<>
        <div className="service-item">
            <div className="service-icon-seccion">
                <div className="service-icon-seccion-child" />
                <img className="service-icon"  alt={props.name} src={props.icon} />
            </div>
            <div className="service-title-seccion">
                <div className="service-name">{props.name}</div>
            </div>
            <div className="service-description-seccion">
                <div className="service-description">“{props.description}.”</div>
            </div>
        </div>
    </>);

};

export default Service;


