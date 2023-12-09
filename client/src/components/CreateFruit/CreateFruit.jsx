import { useFruitContext } from '../../contexts/FruitContext';
import { useForm } from '../../hooks/useForm';
import styles from '../CreateFruit/CreateFruit.module.css';
import { useState } from "react";

export default function CreateFruit() {
    const { onCreateFruitSubmit } = useFruitContext();
    const [errors, setErrors] = useState({});
    const { values, changeHandler, onSubmit } = useForm(
        {
            name: '',
            imageUrl: '',
            description: '',
            moreInfo: '',
        },
        onCreateFruitSubmit
    );

    const titleValidator = () => {
        if (values.name.length < 3 || values.name.length > 30) {
          setErrors((state) => ({
            ...state,
            name: "Title should be between 3 and 30 characters!",
          }));
          return;
        } else {
          if (errors.name) {
            setErrors((state) => ({ ...state, name: "" }));
          }
        }
      };

      const imageValidator = () => {
        if (!values.imageUrl.match("^https?://")) {
          setErrors((state) => ({
            ...state,
            imageUrl: "Image should be a link and should start with http:// or https://",
          }));
        } else {
          if (errors.imageUrl) {
            setErrors((state) => ({ ...state, imageUrl: "" }));
          }
        }
      };

      const descriptionValidator = () => {
        if (values.description.length < 20 || values.description.length > 100) {
          setErrors((state) => ({
            ...state,
            description: "Description should be between 20 and 100 characters!",
          }));
          return;
        } else {
          if (errors.description) {
            setErrors((state) => ({ ...state, description: "" }));
          }
        }
      };

      const moreInfoValidator = () => {
        if (values.moreInfo.length < 20 || values.moreInfo.length > 120) {
          setErrors((state) => ({
            ...state,
            moreInfo: "More Info should be between 20 and 120 characters!",
          }));
          return;
        } else {
          if (errors.moreInfo) {
            setErrors((state) => ({ ...state, moreInfo: "" }));
          }
        }
      };

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
                                            onBlur={titleValidator}
                                        />
                                        {errors.name && <p className={styles.errors}>{errors.name}</p>}
                                    </div>
                                    <div>
                                    <label className={styles.label} htmlFor="imageUrl">Image Url</label>
                                        <input
                                            type="text"
                                            name='imageUrl'
                                            value={values.imageUrl}
                                            onChange={changeHandler}
                                            placeholder="www.somephoto.com"
                                            onBlur={imageValidator}
                                        />
                                        {errors.imageUrl && <p className={styles.errors}>{errors.imageUrl}</p>}
                                    </div>
                                    <div>
                                    <label className={styles.label} htmlFor="description">Description</label>
                                        <input
                                            type="text"
                                            name='description'
                                            value={values.description}
                                            onChange={changeHandler}
                                            placeholder="Information about this fruit"
                                            onBlur={descriptionValidator}
                                        />
                                        {errors.description && <p className={styles.errors}>{errors.description}</p>}
                                    </div>
                                    <div>
                                    <label className={styles.label} htmlFor="moreInfo">More Info</label>
                                        <input
                                            type="text"
                                            name='moreInfo'
                                            value={values.moreInfo}
                                            onChange={changeHandler}
                                            placeholder="Specific information about this product"
                                            onBlur={moreInfoValidator}
                                        />
                                        {errors.moreInfo && <p className={styles.errors}>{errors.moreInfo}</p>}

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
