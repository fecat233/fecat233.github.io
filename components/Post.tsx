

function Post(props: any) {
	return (
		<section>
			<div className="card postcard">
				{
					props.img !== undefined &&
					<img className="card-img-top" src={props.img} alt="card image cap" />
				}
				<h5 className="card-title">{props.title}</h5>
				<div className="card-body">
					<p className="card-text">
						{props.description}
				    </p>
				</div>
			</div>
		</section>
	)
}

export default Post;