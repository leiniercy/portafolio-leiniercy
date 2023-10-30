
import '@styles/HeroImage/HeroSeccion.css';
import ContainerImage from "@components/HeroImage/ContainerImage";
import ContainerInfo from "@components/HeroImage/ContainerInfo";


const HeroSeccion = () => {
    return (
        <div className="hero-seccion">
            <ContainerImage/>
            <ContainerInfo/>
        </div>);
};

export default HeroSeccion;
