import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


import { useService } from '../../hooks/useService';
import { fruitServiceFactory } from '../../services/fruitService';

export default function FruitDetails() {
    const { fruitId } = useParams();
    const [fruit, setFruit] = useState({});
    const fruitService = useService(fruitServiceFactory);
    // const fruitService=fruitServiceFactory();

    useEffect(() => {
        fruitService.getOne(fruitId).then((result) => {
            setFruit(result);
        });
    }, [fruitId]);

    return (
        <div className="row layout_padding2">
                    <div className="col-md-8">
                        <div className="fruit_detail-box">
                            <h3>{fruit.name}</h3>
                            <p className="mt-4 mb-5">
                                {fruit.description}
                            </p>
                            <p className="mt-4 mb-5">
                                {fruit.moreInfo}
                            </p>
                            <div>
                                <Link to={`/catalog/${fruit._id}/edit`} className="custom_dark-btn">
                                    Edit
                                </Link>
                                <Link to={`/catalog/${fruit._id}/delete`} className="custom_dark-btn">
                                    Delete
                                </Link>
                            </div>
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
    );
}
