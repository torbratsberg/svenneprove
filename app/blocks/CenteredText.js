import Link from 'next/link';

function CenteredText({ block }) {

    return (
        <div className="CenteredText">
            <div className="row">
                <div className="columns small-12 large-4 large-offset-4">
                    {block.title && <h2>{block.title}</h2>}
                    {block.text && <p>{block.text}</p>}
                        {block.link && <Link className="large" href={block.link.url}><a className="btn large">{block.link.label}</a></Link>}
                </div>
            </div>
        </div>
    );
}

export default CenteredText;
