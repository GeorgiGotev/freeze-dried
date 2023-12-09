import { useFruitContext } from '../../contexts/FruitContext';

import { Fruit } from '../Catalog/CatalogItem/FruitItem';
import { useAuthContext } from '../../contexts/AuthContext';

import styles from "./Profile.module.css";

export default function Profile() {
    const { fruits } = useFruitContext();
    const { userId,userEmail } = useAuthContext();

    let ownFruits = fruits.filter((x) => x._ownerId == userId);

    return (
        <>
            <div className={styles.card}>
                
                <img
                    src="images/images.png"
                    alt="Avatar"
                    style={{ width: '10%' }}
                />
                <div className={styles.container}>
                <p>Profile Information</p>
                    <h4>
                        <b>{userEmail}</b>
                    </h4>
                </div>
            </div>
            <section className="fruit_section">
                <div className="container">
                    <h2 className="custom_heading">Own list of Fruits</h2>
                    {/* <p className="custom_heading-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have
                </p> */}
                    {ownFruits.map((x) => (
                        <Fruit key={x._id} {...x} />
                    ))}
                    {ownFruits.length === 0 && (
                        <div>
                            <h2 className="custom_heading">No fruits yet</h2>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
