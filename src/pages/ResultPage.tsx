import { ResultSkeleton } from "@/components/ResultSkeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

enum UrlKey {
  ID = "refId",
  SUNSCREEN = "sunscreenRefId",
  NOSUNSCREEN = "noSunscreenRefId",
}

interface ImageResponse {
  id: string;
  sunscreenImgUrl: string;
  noSunscreenImgUrl: string;
  status: "pending" | "succeeded";
}

const ResultPage = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [sunscreenImgUrl, setSunscreenImgUrl] = useState<string>("");
  const [noSunscreenImgUrl, setNoSunscreenImgUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const id = query.get(UrlKey.ID);
  const sunscreenRefId = query.get(UrlKey.SUNSCREEN);
  const noSunscreenRefId = query.get(UrlKey.NOSUNSCREEN);

  if (!id || !sunscreenRefId || !noSunscreenRefId) {
    navigate("/");
  }

  const { error } = useQuery<ImageResponse | undefined>({
    queryKey: ["facial-transform-poll", id],
    queryFn: async () => {
      const endpoints = `${
        import.meta.env.VITE_APP_API_URL as string
      }/api/facial-transform-poll/${id}?${UrlKey.SUNSCREEN}=${sunscreenRefId}&${
        UrlKey.NOSUNSCREEN
      }=${noSunscreenRefId}`;

      try {
        setIsLoading(true);
        const resp = await axios.get(endpoints, {
          headers: {
            Authorization: `Bearer ${
              import.meta.env.VITE_APP_API_TOKEN as string
            }`,
          },
        });
        const data: ImageResponse = resp.data;
        setNoSunscreenImgUrl(data.noSunscreenImgUrl);
        setSunscreenImgUrl(data.sunscreenImgUrl);
        if (data.status === "succeeded") {
          setIsLoading(false);
        }
        return data;
      } catch (error) {
        console.error("Error fetching result: ", error);
        navigate("/");
      }
    },
    refetchInterval: (query) => {
      return query.state.data?.status === "pending" ? 2000 : false;
    },
  });

  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/04-result-page/result-page-bg.png')] bg-contain ">
      <div className="absolute bg-black w-[460px] h-[666px] bottom-[444px] left-[70px] rounded-2xl z-10">
        {isLoading ? (
          <ResultSkeleton />
        ) : (
          <img
            src={noSunscreenImgUrl}
            className="rounded-2xl"
            alt="result"
            height="460px"
            width="460px"
          />
        )}
      </div>
      <div className="absolute bg-black w-[460px] h-[666px] bottom-[444px] right-[70px] rounded-2xl z-10">
        {isLoading ? (
          <ResultSkeleton />
        ) : (
          <img
            src={sunscreenImgUrl}
            className="rounded-2xl"
            alt="result"
            height="460px"
            width="460px"
          />
        )}
      </div>
    </div>
  );
};

export default ResultPage;
