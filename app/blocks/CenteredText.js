import Link from 'next/link';

function CenteredText({ block }) {

    return (
        <div className="CenteredText">
            <div className="row">
                <div className="columns small-12 large-6 large-offset-3">
                    {block.title && <h2 className="om dash">{block.title}</h2>}
                    {block.text && <p className="om fade-up">{block.text}</p>}
                    {block.link && <Link className="large" href={block.link.url}><a className="btn large om fade-up">{block.link.label}</a></Link>}
                </div>
            </div>
        </div>
    );
}

export default CenteredText;
