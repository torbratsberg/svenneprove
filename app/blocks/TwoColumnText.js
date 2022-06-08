function TwoColumnText({ block }) {

    return (
        <section className="TwoColumnText">
			<div className="row">
				<div className="columns small-12">
					{block.title && <h2 className="om dash">{block.title}</h2>}
				</div>

				<div className="columns small-12 large-6 om fade-right">
					{block.left && <p>{block.left}</p>}
				</div>

				<div className="columns small-12 large-6 om fade-left">
					{block.right && <p>{block.right}</p>}
				</div>
			</div>
        </section>
    );
}

export default TwoColumnText;
