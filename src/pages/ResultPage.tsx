import { ResultSkeleton } from "@/components/ResultSkeleton";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

enum UrlKey {
  ID = "refId",
  SUNSCREEN = "sunscreenRefId",
  NOSUNSCREEN = "noSunscreenRefId",
}

const ResultPage = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const [sunscreenImgUrl, setSunscreenImgUrl] = useState<string>("");
  const [noSunscreenImgUrl, setNoSunscreenImgUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const id = query.get(UrlKey.ID);
  const sunscreenRefId = query.get(UrlKey.SUNSCREEN);
  const noSunscreenRefId = query.get(UrlKey.NOSUNSCREEN);

  console.log(id, sunscreenRefId, noSunscreenRefId)

  // if (!id || !sunscreenRefId || !noSunscreenRefId) {
  //   navigate("/");
  // }

  useEffect(() => {
    const endpoints = `${import.meta.env.VITE_APP_API_URL as string}/api/facial-transform-poll/${id}?${UrlKey.SUNSCREEN}=${sunscreenRefId}&${UrlKey.NOSUNSCREEN}=${noSunscreenRefId}`;
      console.log(endpoints)

      const fetchResult = async () => {
        try {
          setIsLoading(true)
          const resp = await axios.get(endpoints, {
            headers: {
              Authorization: `Bearer ${
                import.meta.env.VITE_APP_API_TOKEN as string
              }`,
            },
          });
          const data = resp.data;
          setIsLoading(false);
          setSunscreenImgUrl(data.sunscreenImgUrl);
          setNoSunscreenImgUrl(data.noSunscreenImgUrl);
        } catch (error) {
          console.error("Error fetching result: ", error);
          setIsLoading(false);
        }
      }
    
      fetchResult();
  }, [id, noSunscreenRefId, query, sunscreenRefId]);

  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/04-result-page/result-page-bg.png')] bg-contain ">
      <div className="absolute bg-black w-[460px] h-[666px] bottom-[444px] left-[70px] rounded-2xl z-10">
        {isLoading ? <ResultSkeleton /> : <img src={sunscreenImgUrl} alt="result" height='460px' width='460px' />}
      </div>
      <div className="absolute bg-black w-[460px] h-[666px] bottom-[444px] right-[70px] rounded-2xl z-10">
      {isLoading ? <ResultSkeleton /> : <img src={noSunscreenImgUrl} alt="result" height='460px' width='460px' />}
      </div>
    </div>
  );
};

export default ResultPage;
