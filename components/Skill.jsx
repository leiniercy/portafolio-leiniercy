
import '@styles/components/Skill.css';

const Skill = (props) => {
    return (
        <div className="skill-container" data-aos="fade-up">
            <div className="skill-elipses-parent">
                <div className="skill-elipses">
                    <img className="skill-elipses-child" alt={props.name} src={props.elipse} />
                    <img className="skill-elipses-item" alt="cant" src={props.elipsesItem} />
                    <div className="skill-name">{props.name}</div>
                </div>
                <div className="skill-div">%</div>
                <div className="skill-div1">{props.number}</div>
                <img className="skill-icon" alt={props.iconName} src={props.icon} />
            </div>
        </div>);
};

export default Skill;
