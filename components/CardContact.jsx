
import '@styles/components/CardContact.css';

const CardContact = (props) => {
    return (
        <div className="card-contact">
            <div className="card-contact-info">{props.info}</div>
            <b className="card-contact-name">{props.name}</b>
            <img className="card-contact-icon" alt={props.name} src={props.icon} />
        </div>);
};

export default CardContact;
