
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
						<a className="nav-link" href="/tags">标签</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/categories">分类</a>
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
						<a className="nav-link" href="#"><i className="bi bi-youtube"></i></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="mailto:goleer.zhangli@outlook.com"><i className="bi bi-envelope"></i></a>
					</li>
				</ul>
			</div>
			<div>
				<input className="" type="search" placeholder="搜索文章吧" aria-label="Search" />
				<button className="btn btn-primary">搜索</button>
            </div>
		</nav>
	)
}

export default Navbar;