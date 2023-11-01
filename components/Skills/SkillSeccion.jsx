
import '@styles/Skills/SkillSeccion.css';
import Title from "@components/Title";
import Skills from "@components/Skills/Skills";

const SkillSeccion = () => {
    return (
        <div id="skill" className="skill-seccion">
            <Title name={'SKILLS'}/>
           <Skills/>
        </div>);
};

export default SkillSeccion;
