import '@styles/components/Button.css';

const Button = (props) => {
    return (
        <a href='/assets/document/CV-Leinier_Caraballo_Yanes.pdf' download>
            <div className="button">
                <div className="button-name">{props.name}</div>
            </div>
        </a>);
};

export default Button;
