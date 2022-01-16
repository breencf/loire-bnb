import {Link} from 'react-router-dom'
import("./DestinationCard.css");

const vectors = [
  "https://res.cloudinary.com/jadecabbage/image/upload/v1642269042/loire%20vectors/The-Vineyard-Scenery_qt2wea.jpg",
  "https://res.cloudinary.com/jadecabbage/image/upload/v1642269049/loire%20vectors/vineyard_sx8pyh.jpg",
  "https://res.cloudinary.com/jadecabbage/image/upload/v1642362781/loire%20vectors/Vineyard_jfkdbu.png",
  "https://res.cloudinary.com/jadecabbage/image/upload/v1642364544/loire%20vectors/winery_vector_uuqbsc.jpg",
  "https://clipground.com/images/wine-cellar-clipart-3.jpg",
  "https://media.istockphoto.com/vectors/wooden-barrels-in-the-wine-cellar-vector-id1059671750?k=6&m=1059671750&s=612x612&w=0&h=A8r5avF7xcFWeKpxfjV01eN1PTfZle-1YucpkemfB9Y=",
];

export const DestinationCard = ({ region }) => {
  return (

    <div className="destination-card">
      <div id="destination-card-image">
        <img src={vectors[Math.floor(Math.random() * 6)]} />
      </div>
      <Link to="/wineries">
      <div id="destination-card-text">
        <h3>{region}</h3>
        <h5>Explore</h5>
      </div>
      </Link>
    </div>
  );
};
