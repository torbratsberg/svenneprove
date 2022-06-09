import { urlFor } from '../utils';

function KeyPoints({ block }) {

    return (
        <div className="KeyPoints">
            <div className="row">
                {block.points.map((point, i) => (
                    <div key={i} className="columns small-12 large-4">
                        {point.image && <img className="om fade-in" src={urlFor(point.image).width(250).url()} alt="" />}
                        {point.title && <h3 className="om fade-up">{point.title}</h3>}
                        {point.text && <p className="om fade-up">{point.text}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KeyPoints;
