import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "70vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 23.6345,
    lng: 102.5528,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAUYivQoC2SKspse0tQh17SsiyDe6E92QU">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={100}
        center={defaultCenter}
        mapTypeId="satellite"
      />
    </LoadScript>
  );
};

export default MapContainer;
