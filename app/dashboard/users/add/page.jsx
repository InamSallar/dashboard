import styles from "../../../ui/dashboard/users/addUser/addUser.module.css"
import {addUser} from "@/app/lib/actions";

const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form} action={addUser}>
                <input required type="text" placeholder="Name" name="username"/>
                <input required type="email" placeholder="Email" name="email"/>
                <input required type="password" placeholder="Password" name="password"/>
                <input type="phone" placeholder="Phone" name="phone"/>
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <textarea
                    name="address"
                    id="address"
                    rows="16"
                    placeholder="Address"
                >
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddUserPage