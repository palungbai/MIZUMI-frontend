import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingPage } from "./LoadingPage";
import { useUrlQuery } from "@/hooks/useUrlQuery";
import { ImageResponse } from "@/types/api";
import { UrlKey } from "@/constants/UrlKeys";

const ResultPage = () => {
  const navigate = useNavigate();
  const { id, noSunscreenRefId, sunscreenRefId } = useUrlQuery();
  const [sunscreenImgUrl, setSunscreenImgUrl] = useState<string>("");
  const [noSunscreenImgUrl, setNoSunscreenImgUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useQuery<ImageResponse | undefined>({
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
        localStorage.setItem(UrlKey.URL, data.sunscreenImgUrl);
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
      return query.state.data?.status === "pending" ? 10000 : false;
    },
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/04-result-page/result-page-bg.png')] bg-contain ">
      <div className="absolute bg-black w-[460px] h-[460px] bottom-[550px] left-[70px] rounded-2xl z-10">
        {isLoading ? (
          <Skeleton className="h-full w-full rounded-2xl" />
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
      <div className="absolute bg-black w-[460px] h-[460px] bottom-[550px] right-[70px] rounded-2xl z-10">
        {isLoading ? (
          <Skeleton className="h-full w-full rounded-2xl" />
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
      <div className="absolute bottom-[168px] flex flex-row items-center justify-between w-full px-10">
        <a href="/" className="bg-white rounded-full p-7">
          <img src="/back-icon.svg" width="60px" />
        </a>
        <a
          href="/display"
          className="font-primaryBold text-white text-7xl py-3 px-16 rounded-full border-4 border-white bg-gradient-to-r from-button-primary to-button-secondary shadow-2xl z-50 flex flex-row items-center gap-4"
        >
          รับครีมกันแดด
          <img src="/next-icon.svg" />
        </a>
      </div>
    </div>
  );
};

export default ResultPage;
