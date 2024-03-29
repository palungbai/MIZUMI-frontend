import { Button } from "@/components/ui/button";
import axios from "axios";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "@/components/CountdownTimer";

const videoConstraints = {
  width: 720,
  height: 720,
  facingMode: "user",
};

const CapturePage = () => {
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const [remainingTime, setRemainingTime] = useState(5);
  const [isCounting, setIsCounting] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

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
        console.log(data);
        navigate(
          `/result?refId=${data.id}&sunscreenRefId=${data.sunscreenRefId}&noSunscreenRefId=${data.noSunscreenRefId}`
        );
      }
    } catch (error) {
      console.error("Error capturing image: ", error);
    }
  }, [navigate, webcamRef]);

  const startCapture = () => {
    if (!buttonClicked) {
      setIsCounting(true);
      setRemainingTime(5);
      setButtonClicked(true);
      const countdownInterval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(countdownInterval);
        setIsCounting(false);
        capture();
      }, 5000);
    }
  };

  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/02-capture-page/capturing-page-bg.png')] bg-contain">
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="z-10 absolute bottom-[480px] left-[190px] rounded-[30px]"
      />

      <CountdownTimer remaining={remainingTime} isCounting={isCounting} />

      <div className="absolute h-[720px] w-[720px] bottom-[480px] left-[190px] bg-center bg-[url('/person-shadow.svg')] bg-contain z-20 opacity-75 bg-no-repeat rounded-[48px] " />
      <Button
        className={`absolute font-primaryBold bottom-[237px] left-[357px] text-7xl py-12 px-16 rounded-full border-4 border-white bg-gradient-to-r from-button-primary to-button-secondary shadow-2xl z-50 ${
          buttonClicked && "pointer-events-none opacity-50"
        }`}
        onClick={startCapture}
      >
        สแกนใบหน้า
      </Button>
    </div>
  );
};

export default CapturePage;
