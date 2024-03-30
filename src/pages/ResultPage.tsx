import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingPage } from "./LoadingPage";
import { useUrlQuery } from "@/hooks/useUrlQuery";
import { ImageResponse } from "@/types/api";
import { UrlKey } from "@/constants/UrlKeys";
import { useRecordVideo } from "@/hooks/useRecordVideo";
import LinkButton from "@/components/LinkButton";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const ResultPage = () => {
  const navigate = useNavigate();
  const { id, noSunscreenRefId, sunscreenRefId } = useUrlQuery();
  const [sunscreenImgUrl, setSunscreenImgUrl] = useState<string>("");
  const [noSunscreenImgUrl, setNoSunscreenImgUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast()

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
        setIsLoading(false);
        return data;
      } catch (error) {
        console.error("Error fetching result: ", error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction onClick={() => navigate("/")} altText="Try again">back to home</ToastAction>,
          variant: "destructive",
        })
      }
    },
    refetchInterval: (query) => {
      return query.state.data?.status === "pending" ? 10000 : false;
    },
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  const NavigationButtons = () => {
    useRecordVideo();
    return (
      <div className="absolute bottom-[168px] flex flex-row items-center justify-between w-full px-10">
        <a href="/" className="bg-white rounded-full p-7">
          <img src="/back-icon.svg" width="60px" />
        </a>
        <LinkButton
          content="รับครีมกันแดด"
          href="/display"
          icon={<img src="/next-icon.svg" />}
          className="flex flex-row items-center gap-4"
        />
      </div>
    );
  };

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
      <NavigationButtons />
    </div>
  );
};

export default ResultPage;
