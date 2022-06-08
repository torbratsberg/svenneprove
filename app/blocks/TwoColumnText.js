function TwoColumnText({ block }) {

    return (
        <section className="TwoColumnText">
			<div className="row">
				<div className="columns small-12 large-offset-1 large-10">
					{block.title && <h2>{block.title}</h2>}
				</div>

				<div className="columns small-12 large-offset-1 large-5">
					{block.left && <p>{block.left}</p>}
				</div>

				<div className="columns small-12 large-5">
					{block.right && <p>{block.right}</p>}
				</div>
			</div>
        </section>
    );
}

export default TwoColumnText;
