import { useFruitContext } from '../../contexts/FruitContext';
import { useForm } from '../../hooks/useForm';
import styles from '../CreateFruit/CreateFruit.module.css';

export default function CreateFruit() {
    const { onCreateFruitSubmit } = useFruitContext();
    const { values, changeHandler, onSubmit } = useForm(
        {
            name: '',
            imageUrl: '',
            description: '',
            moreInfo: '',
        },
        onCreateFruitSubmit
    );

    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <h2 className="font-weight-bold">Create product</h2>
                <div className="row">
                    <div className="col-md-8 mr-auto">
                        <form action="POST" onSubmit={onSubmit}>
                            <div className="contact_form-container">
                                <div>
                                    <div>
                                        <label className={styles.label} htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={changeHandler}
                                            placeholder="Banana"
                                        />
                                    </div>
                                    <div>
                                    <label className={styles.label} htmlFor="imageUrl">Image Url</label>
                                        <input
                                            type="text"
                                            name='imageUrl'
                                            value={values.imageUrl}
                                            onChange={changeHandler}
                                            placeholder="www.somephoto.com"
                                        />
                                    </div>
                                    <div>
                                    <label className={styles.label} htmlFor="description">Description</label>
                                        <input
                                            type="text"
                                            name='description'
                                            value={values.description}
                                            onChange={changeHandler}
                                            placeholder="Information about this fruit"
                                        />
                                    </div>
                                    <div>
                                    <label className={styles.label} htmlFor="moreInfo">More Info</label>
                                        <input
                                            type="text"
                                            name='moreInfo'
                                            value={values.moreInfo}
                                            onChange={changeHandler}
                                            placeholder="Specific information about this product"
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
