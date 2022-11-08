import './Body.css';
import Section from '../Section/Section';
import Experience from '../Experience/Experience';
import Certification from '../Certification/Certification';
import BulletItems from '../BulletItems/BulletItems';
import data from '../../data';

function Body() {
    return (
        <div>
            <Section
                title={"Professional Experience"}
                template={<Experience data={data.experience} />}
            />
            <Section
                title={"Education"}
                template={<Experience data={data.education}/>}
            />
            <Section
                title={"Certifications"}
                template={<Certification data={data.certifications}/>}
            />
            <Section
                title={"Personal Projects"}
                template={<Experience data={data.personalProjects}/>}
            />
            <Section
                title={"Skills/Technologies"}
                template={<BulletItems data={data.skills}/>}
            />
        </div>
    );
}

export default Body;
