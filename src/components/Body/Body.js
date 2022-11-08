import './Body.css';
import Section from '../Section/Section';
import Experience from '../Experience/Experience';
import Certification from '../Certification/Certification';
import BulletItems from '../BulletItems/BulletItems';

function Body() {
    return (
        <div>
            <Section
                title={"Professional Experience"}
                template={Experience}
            />
            <Section
                title={"Education"}
                template={Experience}
            />
            <Section
                title={"Certifications"}
                template={Certification}
            />
            <Section
                title={"Personal Projects"}
                template={Experience}
            />
            <Section
                title={"Skills/Technologies"}
                template={BulletItems}
            />
        </div>
    );
}

export default Body;
