import '@styles/Services/ServiceSeccion.css';
import Services from "@components/Services/Services";
import Title from "@components/Title";

const ServiceSeccion = () => {
    return (
        <div id="service" className="service-seccion">
            <Title name={'SERVICES'}/>
            <Services/>
        </div>);
};

export default ServiceSeccion;
