import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getKey } from "../../store/maps";
import { Maps } from "./Maps";

export const MapContainer = ({ wineries, hoveredWinery }) => {
  const key = useSelector((state) => state.maps.key);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  if (!key) return null;

  return (
    <Maps wineries={wineries} apiKey={key} hoveredWinery={hoveredWinery} />
  );
};
