import LastTreeFruits from '../Catalog/LastTreeFruits';
import OurService from '../OurService/OurService';
import SiteMap from '../SiteMap';
import TestyFruits from '../Catalog/TastyFruits';
import ContactUs from '../ContactUs';
import Headers from '../Header/Header';

export default function Home() {
    return (
        <>
            <Headers />
            <OurService />
            <LastTreeFruits />
            <TestyFruits />
            {/* <ContactUs /> */}
            {/* <section className="map_section">
                <div id="map" className="h-100 w-100 "></div>
            </section> */}
            {/* <SiteMap /> */}
        </>
    );
}
