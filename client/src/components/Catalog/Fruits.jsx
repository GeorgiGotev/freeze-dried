import { useFruitContext } from '../../contexts/FruitContext';

import { Fruit } from './CatalogItem/FruitItem';

export default function Fruits() {
    const { fruits } = useFruitContext();
    
    return (
        <section className="fruit_section">
            <div className="container">
                <h2 className="custom_heading">Fresh Fruits</h2>
                {/* <p className="custom_heading-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have
                </p> */}
                {fruits.map((x) => (
                    <Fruit key={x._id} {...x} />
                ))}
                {fruits.length === 0 && (
                    <div>
                        <h2 className="custom_heading">No fruits yet</h2>
                    </div>
                )}
            </div>
        </section>
    );
}
