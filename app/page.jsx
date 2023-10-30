// import NavbarMovile from "@components/NavbarMovile";
import '@styles/Layout.css';
import HeroImage from "@components/HeroImage/HeroImage";
import AboutSeccion from "@components/About/AboutSeccion";
import SkillSeccion from "@components/Skills/SkillSeccion";
import ServiceSeccion from "@components/Services/ServiceSeccion";

const Home = () => {
    return (<>
        <div className="container">
            <HeroImage/>
            <AboutSeccion/>
            <SkillSeccion/>
            <ServiceSeccion/>
        </div>
        {/*<NavbarMovile/>*/}
    </>);
}

export default Home;