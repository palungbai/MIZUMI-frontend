import { UrlKey } from "@/constants/UrlKeys";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
