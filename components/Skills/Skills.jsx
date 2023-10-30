
import '@styles/Skills/skills.css';
import Skill from "@components/Skill";

const Skills = () => {
    return (
        <div className="skills">
            <Skill name={'HTML'} number={'90'} elipsesItem={'/assets/img/skills/elipsesItem.svg'} elipse={'/assets/img/skills/90.svg'} iconName={'html5'} icon={'/assets/icon/html5.svg'}/>
            <Skill name={'CSS'} number={'80'}  elipsesItem={'/assets/img/skills/elipsesItem.svg'} elipse={'/assets/img/skills/80.svg'} iconName={'css3'} icon={'/assets/icon/css3.svg'}/>
            <Skill name={'JAVASCRIPT'} number={'75'}  elipsesItem={'/assets/img/skills/elipsesItem.svg'} elipse={'/assets/img/skills/75.svg'} iconName={'javascript'} icon={'/assets/icon/javascript.svg'}/>
            <Skill name={'REACT'} number={'75'}  elipsesItem={'/assets/img/skills/elipsesItem.svg'} elipse={'/assets/img/skills/75.svg'} iconName={'react'} icon={'/assets/icon/react.svg'}/>
        </div>);
};

export default Skills;
