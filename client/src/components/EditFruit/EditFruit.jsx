import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFruitContext } from "../../contexts/FruitContext";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { fruitServiceFactory } from "../../services/fruitService";

export default function EditFruit(){
    const { onFruitEditSubmit } = useFruitContext();
    const { fruitId } = useParams();
    const fruitService = useService(fruitServiceFactory);

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        name: '',
        description: '',
        imageUrl: '',
        moreInfo: '',
    }, onFruitEditSubmit);

    useEffect(() => {
        fruitService.getOne(fruitId)
            .then(result => {
                changeValues(result);
            });
    }, [fruitId]);

    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <h2 className="font-weight-bold">Edit product</h2>
                <div className="row">
                    <div className="col-md-8 mr-auto">
                        <form action="POST" onSubmit={onSubmit}>
                            <div className="contact_form-container">
                                <div>
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={changeHandler}
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name='imageUrl'
                                            value={values.imageUrl}
                                            onChange={changeHandler}
                                            placeholder="Image address"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name='description'
                                            value={values.description}
                                            onChange={changeHandler}
                                            placeholder="Description"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name='moreInfo'
                                            value={values.moreInfo}
                                            onChange={changeHandler}
                                            placeholder="More info"
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <button type="submit">send</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}