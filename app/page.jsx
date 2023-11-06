import '@styles/Layout.css';
import HeroImage from "@components/HeroImage/HeroImage";
import AboutSeccion from "@components/About/AboutSeccion";
import SkillSeccion from "@components/Skills/SkillSeccion";
import ServiceSeccion from "@components/Services/ServiceSeccion";
import NavbarMovile from "@components/Navbar/movile/NavbarMovile";
import NavbarDesktop from "@components/Navbar/desktop/NavbarDesktop";

const Home = () => {
    return (<div className="app-layout">
        <div className="app-container">
            <HeroImage/>
            <AboutSeccion/>
            <SkillSeccion/>
            <ServiceSeccion/>
        </div>
        <NavbarMovile/>
        <NavbarDesktop/>
    </div>);
}

export default Home;