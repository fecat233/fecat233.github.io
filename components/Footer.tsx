function Footer() {
	return (
		<footer id="footer" className="container-fluid">
			<p>{new Date().getFullYear()} @fecat233</p>
			<div id="social-nav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="https://github.com/fecat233"><i className="bi bi-github"></i></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="https://github.com/twitter"><i className="bi bi-twitter"></i></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="https://www.youtube.com/channel/UCAwcva4EMMjcsXvOvJAcriQ"><i className="bi bi-youtube"></i></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="mailto:goleer.zhangli@outlook.com"><i className="bi bi-envelope"></i></a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer;