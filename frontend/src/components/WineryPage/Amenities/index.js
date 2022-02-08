import "./Amenities.css";

export const Amenities = ({ amenities }) => {
  return (
    <>
      <h4>Amenities</h4>
      <div className="amenities">
        <ul>
          {amenities.slice(0, 5).map((amenity) => {
            return (
              <li key={amenity.id}>
                <div className="amenityIcon">
                  <img src={`${amenity.icon}`} />
                </div>
                <div>
                  <h4>{amenity.name}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
