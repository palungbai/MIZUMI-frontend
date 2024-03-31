import { useToast } from "@/components/ui/use-toast";
import { UrlKey } from "@/constants/UrlKeys";
import { useNavigate } from "react-router-dom";

export const useUrlQuery = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const id = localStorage.getItem(UrlKey.ID);
  const sunscreenRefId = localStorage.getItem(UrlKey.SUNSCREEN);
  const noSunscreenRefId = localStorage.getItem(UrlKey.NOSUNSCREEN);

  if (!id || !sunscreenRefId || !noSunscreenRefId) {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      variant: "destructive",
    });
    navigate("/");
  }

  return {
    id,
    noSunscreenRefId,
    sunscreenRefId,
  };
};
