
import '@styles/About/AboutSeccion.css';
import Title from "@components/Title";
import ContainerAbout from "@components/About/ContainerAbout";
import ContainerName from "@components/About/ContainerName";
import AboutImageContainer from "@components/About/AboutImageContainer";
import ContainerAboutDescription from "@components/About/ContainerAboutDescription";
import Button from "@components/Button";
import ContainerContact from "@components/About/ContainerContact";


const AboutSeccion = () => {
    return (
        <div id="about" className="about-seccion">
            <Title name={'RESUME'}/>
            <ContainerAbout/>
            <ContainerName/>
            <AboutImageContainer/>
            <div className="about-container-button">
                <ContainerAboutDescription/>
                <Button name={'DOWNLOAD CV'}/>
            </div>
            <ContainerContact/>
        </div>);
};

export default AboutSeccion;
