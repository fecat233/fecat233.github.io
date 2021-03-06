import SearchBox from './SearchBox'

function Navbar() {
	return (
		<nav className="navbar navbar-expand">
			<a className="navbar-brand" href="/">
			  <img src="/images/fecat233.png" alt="logo" width="30" height="30"/>
			  Fecat233
			</a>
			<div id="nosocial-nav" className="collapse navbar-collapse">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="/">主页</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/keywords">关键词</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/series">系列</a>
					</li>
				</ul>
			</div>
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
			<div>
				<SearchBox placeholder="搜点什么呢?"/>
            </div>
		</nav>
	)
}

export default Navbar;