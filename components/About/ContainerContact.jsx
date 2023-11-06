import '@styles/About/ContainerContact.css';
import CardContact from "@components/CardContact";

const ContainerContact = () => {
    return (
        <div className="container-contact">
            <CardContact info={'La Lisa, La Habana, Cuba'} name={'Location'} icon={'/assets/icon/home.svg'}/>
            <CardContact info={'(+53) 58503871'} name={'Phone'} icon={'/assets/icon/phone-call.svg'}/>
            <CardContact info={'leiniercaraballo08@gmail.com'} name={'Email'} icon={'/assets/icon/gmail.svg'}/>
        </div>);
};

export default ContainerContact;
