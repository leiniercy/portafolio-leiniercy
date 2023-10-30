
import '@styles/Services/Services.css';
import Service from "@components/Service";

const Services = () => {
    return (
        <div className="services">
            <Service icon={'/assets/icon/code.svg'} name={'Web development'} description={'I develop sites and applications for Web platforms. I help you build your project from start to finish: Frontend, Backend and Database'}/>
            <Service icon={'/assets/icon/design.svg'} name={'Web design'} description={'I prototype and mock up your static designs and turn them into incredible responsive, optimal and accessible websites and web applications'}/>
        </div>);
};

export default Services;
