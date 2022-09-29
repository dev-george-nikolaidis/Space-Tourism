import { Link, NavLink } from "react-router-dom";
// local imports
import styles from "./navigation.module.scss";
import Logo from "../assets/img/shared/logo.svg";
const Navigation: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.logoContainer}>
					<img src={Logo} alt="space tourism logo" className={styles.logo} />
				</div>
				<div className={styles.line}></div>

				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li>
							<NavLink to="/" className={({ isActive }) => (isActive ? ` ${styles.linkText}  active` : `${styles.linkText} `)}>
								<span className={styles.linkNumber}>00</span> Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/destination" className={({ isActive }) => (isActive ? ` ${styles.linkText}  active` : `${styles.linkText} `)}>
								<span className={styles.linkNumber}>01</span> Destination
							</NavLink>
						</li>
						<li>
							<NavLink to="/crew" className={({ isActive }) => (isActive ? ` ${styles.linkText}  active` : `${styles.linkText} `)}>
								<span className={styles.linkNumber}>02</span> Crew
							</NavLink>
						</li>
						<li>
							<NavLink to="/technology" className={({ isActive }) => (isActive ? ` ${styles.linkText}  active` : `${styles.linkText} `)}>
								<span className={styles.linkNumber}>03</span> technology
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navigation;