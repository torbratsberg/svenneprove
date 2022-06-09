function Quotes({ block }) {

    return (
        <div className="Quotes">
            <div className="row">
                {block.quotes.map(quote => (
                    <div class="columns small-12">
                        {quote.quote && <h3>{quote.quote}</h3>}
                        {quote.author && <p>{quote.author}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quotes;
