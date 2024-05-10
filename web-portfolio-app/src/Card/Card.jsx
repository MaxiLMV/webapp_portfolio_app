import './Card.css';

function Card({ type, title, text, imageSrc, languages, year }) {
    return(
        <div>
            {type == 1 && (
                <div  className="card1">
                    <img className="card-image1" src={imageSrc} alt="Showcasing Image" />
                    <div className="card-content1">
                        <h2 className="card-title1">{title}</h2>
                        <p className="card-description1">{text}</p>
                    </div>
                </div>
            )}
            {type == 2 && (
                <div  className="card2">
                    <img className="card-image2" src={imageSrc} alt="Showcasing Image" />
                    <div className="card-content2">
                        <h2 className="card-title2">{title}</h2>
                        <div className="card-text">
                            <p className="card-description2">{languages}</p>
                            <p className="card-description2">{year}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card