import { urlFor } from '../utils';

function KeyPoints({ block }) {

    return (
        <div className="KeyPoints">
            <div className="row">
                {block.points.map(point => (
                    <div className="columns small-12 large-4">
                        {point.image && <img src={urlFor(point.image).width(250).url()} alt="" />}
                        {point.title && <h3>{point.title}</h3>}
                        {point.text && <p>{point.text}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KeyPoints;
