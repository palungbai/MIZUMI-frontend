import { useToast } from "@/components/ui/use-toast";
import { UrlKey } from "@/constants/UrlKeys";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useUrlQuery = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const id = query.get(UrlKey.ID);
  const sunscreenRefId = query.get(UrlKey.SUNSCREEN);
  const noSunscreenRefId = query.get(UrlKey.NOSUNSCREEN);

  if (!id || !sunscreenRefId || !noSunscreenRefId) {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      variant: "destructive",
    })
    navigate("/");
  }

  return {
    query, id, noSunscreenRefId, sunscreenRefId
  }
};
