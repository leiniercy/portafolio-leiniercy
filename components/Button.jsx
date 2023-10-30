import '@styles/components/Button.css';

const Button = (props) => {
    return (
        <div className="button">
            <div className="button1">{props.name}</div>
        </div>);
};

export default Button;
