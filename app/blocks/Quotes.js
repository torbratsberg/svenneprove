function Quotes({ block }) {

    return (
        <div className="Quotes">
            <div className="row">
                {block.quotes.map((quote, i) => (
                    <div key={i} className="columns small-12">
                        {quote.quote && <h3 className="om dash">"{quote.quote}"</h3>}
                        {quote.author && <p className="om fade-up">{quote.author}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quotes;
