import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css"
import {addProduct} from "@/app/lib/actions";

const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form} action={addProduct}>
                <input required type="text" placeholder="Title" name="title" className={styles.title}/>
                <select name="cat" id="cat">
                    <option value="general">Chose a category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" name="price" placeholder="Price"/>
                <input type="number" name="stock" placeholder="Stock"/>
                <input type="text" name="color" placeholder="Color"/>
                <input type="text" name="size" placeholder="Size"/>
                <textarea
                    name="desc"
                    id="desc"
                    rows="16"
                    placeholder="Description"
                >
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddProductPage