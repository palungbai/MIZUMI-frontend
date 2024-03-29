import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export enum UrlKey {
  ID = "refId",
  SUNSCREEN = "sunscreenRefId",
  NOSUNSCREEN = "noSunscreenRefId",
}

export const useUrlQuery = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const id = query.get(UrlKey.ID);
  const sunscreenRefId = query.get(UrlKey.SUNSCREEN);
  const noSunscreenRefId = query.get(UrlKey.NOSUNSCREEN);

  if (!id || !sunscreenRefId || !noSunscreenRefId) {
    navigate("/");
  }

  return {
    query, id, noSunscreenRefId, sunscreenRefId
  }
};
