// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
// import Webcam from "react-webcam";
// import { useNavigate } from "react-router-dom";

// const videoConstraints = {
//   width: 720,
//   height: 720,
//   facingMode: "user",
// };

// const CapturePage = () => {
//   const webcamRef = useRef<Webcam>(null);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const capture = () => {
//     setLoading(true);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const imageSrc = webcamRef.current?.getScreenshot();

//       if (imageSrc) {
//         try {
//           const response = await axios.post(
//             "https://mizumi-backend-dev.nkaewam.dev/api/facial-transform",
//             {
//               imgData: imageSrc,
//             },
//             {
//               headers: {
//                 Authorization: "YOUR_TOKEN",
//                 "Content-Type": "application/json",
//               },
//             }
//           );
//           const { id, sunscreenRefId, noSunscreenRefId } = response.data;
//           pollStatus(id, sunscreenRefId, noSunscreenRefId);
//         } catch (error) {
//           console.error("Error fetching data: ", error);
//           setLoading(false);
//         }
//       }
//     };

//     if (loading) {
//       fetchData();
//     }
//   }, [loading, navigate]);

//   const pollStatus = async (
//     id: string,
//     sunscreenRefId: string,
//     noSunscreenRefId: string
//   ) => {
//     try {
//       let finished = false;
//       while (!finished) {
//         const pollResponse = await axios.get(
//           `https://mizumi-backend-dev.nkaewam.dev/api/facial-transform-poll/${id}?sunscreenRefId=${sunscreenRefId}&noSunscreenRefId=${noSunscreenRefId}`,
//           {
//             headers: {
//               Authorization: "YOUR_TOKEN",
//             },
//           }
//         );
//         if (pollResponse.data.status === "finished") {
//           // Handle the finished transformation
//           setLoading(false);
//           navigate("/result", { ...pollResponse.data });
//           finished = true;
//         } else {
//           // Wait for some time before polling again
//           await new Promise((resolve) => setTimeout(resolve, 3000)); // Poll every 3 seconds
//         }
//       }
//     } catch (error) {
//       console.error("Error polling status: ", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/02CapturePage/CapturingPageBackground.png')] bg-contain">
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         mirrored={true}
//         screenshotFormat="image/jpeg"
//         videoConstraints={videoConstraints}
//         className="z-10 absolute bottom-[453px] left-[190px] rounded-[30px]"
//       />

//       <div className="absolute h-[720px] w-[720px] bottom-[453px] left-[190px] bg-center bg-[url('/temp.svg')] bg-contain z-20 opacity-75 bg-no-repeat rounded-[48px] "></div>

//       <div className="absolute bottom-40 left-0 flex justify-center w-full">
//         <Button
//           size="lg"
//           className="font-primaryBold text-7xl py-12 px-16 rounded-full border-4 border-white bg-gradient-to-r from-button-primary to-button-secondary shadow-2xl"
//           onClick={capture}
//           disabled={loading} // Disable button while loading
//         >
//           {loading ? "กำลังดำเนินการ..." : "สแกนใบหน้า"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default CapturePage;

// import Camera from "@/components/Camera";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useCallback, useRef, useState } from "react";
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
  const [countdown, setCountdown] = useState(5);

  const capture = useCallback(async () => {
    try {
      const imageSrc = webcamRef.current?.getScreenshot();
      console.log(imageSrc);

      if (imageSrc) {
        const resp = await axios.post(
          "https://mizumi-backend-dev.nkaewam.dev/api/facial-transform",
          {
            imgData: imageSrc,
          },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibG9jYXRpb24iOiJERVYtTE9DQVRJT04iLCJpYXQiOjE1MTYyMzkwMjJ9.m2IB5M_rmMMBwPZGX8aN0XQe1qK1GbCrvEvibREAvXk",
              "Content-Type": "application/json",
            },
          }
        );
        const data = resp.data;
        console.log(data);
        navigate("/result", { ...data });
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
