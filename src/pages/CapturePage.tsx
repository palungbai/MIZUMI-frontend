import { Button } from "@/components/ui/button";
import axios from "axios";
import { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

const videoConstraints = {
  width: 720,
  height: 720,
  facingMode: "user",
};

const CapturePage = () => {
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();

  const capture = useCallback(async () => {
    try {
      const imageSrc = webcamRef.current?.getScreenshot();

      if (imageSrc) {
        const resp = await axios.post(
          `${import.meta.env.VITE_APP_API_URL as string}/api/facial-transform`,
          {
            imgData: imageSrc,
          },
          {
            headers: {
              Authorization: `Bearer ${
                import.meta.env.VITE_APP_API_TOKEN as string
              }`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = resp.data;
        navigate(
          `/result?refId=${data.id}&sunscreenRefId=${data.sunscreenRefId}&noSunscreenRefId=${data.noSunscreenRefId}`
        );
        console.log(data);
      }
    } catch (error) {
      console.error("Error capturing image: ", error);
    }
  }, [navigate, webcamRef]);

  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/02CapturePage/CapturingPageBackground.png')] bg-contain">
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="z-10 absolute bottom-[453px] left-[190px] rounded-[30px]"
      />

      <div className="absolute h-[720px] w-[720px] bottom-[453px] left-[190px] bg-center bg-[url('/temp.svg')] bg-contain z-20 opacity-75 bg-no-repeat rounded-[48px] "></div>

      <div className="absolute bottom-40 left-0 flex justify-center w-full">
        <Button
          size="lg"
          className="font-primaryBold text-7xl py-12 px-16 rounded-full border-4 border-white bg-gradient-to-r from-button-primary to-button-secondary shadow-2xl"
          onClick={capture}
        >
          สแกนใบหน้า
        </Button>
      </div>
    </div>
  );
};

export default CapturePage;
