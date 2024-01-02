import styles from "../ui/login/login.module.css"
import {authenticate} from "@/app/lib/actions";
import LoginForm from "@/app/ui/login/loginForm/loginForm";

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm/>
        </div>
    )
}

export default LoginPage