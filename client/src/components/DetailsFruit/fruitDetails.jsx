import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useService } from '../../hooks/useService';
import { fruitServiceFactory } from '../../services/fruitService';
import { useFruitContext } from '../../contexts/FruitContext';
import { useAuthContext } from '../../contexts/AuthContext';

export default function FruitDetails() {
    const { fruitId } = useParams();
    const [fruit, setFruit] = useState({});
    const [boughtState, setBoughtState] = useState(false);
    const { userId, auth, onBought } = useAuthContext();
    const fruitService = useService(fruitServiceFactory);
    const { deleteFruit } = useFruitContext();
    const navigate = useNavigate();

    useEffect(() => {
        fruitService.getOne(fruitId).then((result) => {
            setFruit(result);
        });
        
    }, [fruitId]);
    
    if(userId){
        useEffect(() => {
            if (auth.boughtProducts.some((x) => x == fruit._id)) {
                setBoughtState(true);
            }
        });
    }
    

    const isOwner = fruit._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${fruit.name}`);

        if (result) {
            await fruitService.delete(fruit._id);

            deleteFruit(fruit._id);

            navigate('/catalog');
        }
    };
    const onBoughtClick = async () => {
        onBought(fruit._id);
        setBoughtState(true);
    };

    return (
        <section className="fruit_section">
            <div className="container">
                <div className="row layout_padding2">
                    <div className="col-md-8">
                        <div className="fruit_detail-box">
                            <h3>{fruit.name}</h3>
                            <p className="mt-4 mb-5">{fruit.description}</p>
                            <p className="mt-4 mb-5">{fruit.moreInfo}</p>
                            {isOwner && (
                                <div>
                                    <Link
                                        to={`/catalog/${fruit._id}/edit`}
                                        className="custom_dark-btn"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="custom_dark-btn"
                                        onClick={onDeleteClick}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                            {userId && !isOwner && !boughtState && (
                                <div>
                                    <button
                                        className="custom_dark-btn"
                                        onClick={onBoughtClick}
                                    >
                                        Buy
                                    </button>
                                </div>
                            )}
                            {boughtState && (
                                <>
                                    <div>
                                        <button className="custom_dark-btn">
                                            Purchased
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="fruit_img-box d-flex justify-content-center align-items-center">
                            <img
                                src={fruit.imageUrl}
                                alt=""
                                className=""
                                width="250px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
