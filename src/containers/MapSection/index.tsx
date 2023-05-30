import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
  NavermapsProvider,
} from "react-naver-maps";
import { mock_sites } from "@/_mocks/handlers";
import { useAtom } from "jotai";
import { naverMap, openDrawer } from "@/store/atoms";

const MapSection = () => {
  const navermaps = useNavermaps();
  const [map, setMap] = useAtom(naverMap);
  const [isOpenDrawer, setIsOpenDrawer] = useAtom(openDrawer);

  const handleClickMarker = (e: any) => {
    if (e.overlay) {
      const target = new navermaps.LatLng(
        e.overlay.position.y,
        e.overlay.position.x
      );
      if (map) {
        setIsOpenDrawer(true);

        map.setCenter(target);
        map.setZoom(14);
      }
    }
  };

  const places = Object.entries(mock_sites).flatMap(
    ([key, site], index) => site.place
  );

  return (
    <MapDiv
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "calc(100vh - 56px)",
      }}
    >
      <NaverMap
        mapTypeControl={true}
        zoomControl={true}
        ref={setMap}
        defaultZoom={12}
      >
        {places.map((place, index) => (
          <Marker
            key={index}
            title={place.title}
            defaultPosition={{ lat: place.lat, lng: place.lng }}
            onClick={handleClickMarker}
          />
        ))}
      </NaverMap>
    </MapDiv>
  );
};

export default MapSection;
