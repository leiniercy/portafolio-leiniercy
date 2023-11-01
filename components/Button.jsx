import '@styles/components/Button.css';

const Button = (props) => {
    return (
        <div className="button">
            <div className="button-name"><a href='/assets/document/CV-Leinier_Caraballo_Yanes.pdf' download>{props.name}</a></div>
        </div>);
};

export default Button;
