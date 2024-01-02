import Image from "next/image";

import styles from "./rightbar.module.css"
import {MdPlayCircleFilled, MdReadMore} from "react-icons/md";

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Available now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        lorem ipsum dolor sit amit conseptecter dolingurar elit.
                        lorem ipsum dolor sit amit conseptecter dolingurar elit wom.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>

                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Coming soon</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.desc}>
                        lorem ipsum dolor sit amit conseptecter dolingurar elit.
                        lorem ipsum dolor sit amit conseptecter dolingurar elit wom.
                    </p>
                    <button className={styles.button}>
                        <MdReadMore/>
                        Learn
                    </button>

                </div>
            </div>

        </div>
    )
}
export default Rightbar