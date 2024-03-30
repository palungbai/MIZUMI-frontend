import axios from "axios";
import { useCallback, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const VideoRecorder = () => {
    const { status, startRecording, stopRecording, mediaBlobUrl } =
      useReactMediaRecorder({ video: true });

    useEffect(() => {
        const handleRecord = async () => {
            startRecording();
            await new Promise((resolve) => setTimeout(resolve, 5000));
            stopRecording();
        }
        handleRecord()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmitVideo = useCallback(async () => {
        if (!mediaBlobUrl) return;

        try {
          const blob = await fetch(mediaBlobUrl).then((r) => r.blob());

        const formData = new FormData();
        formData.append('file', blob, `video-${Date.now()}.webm`);
        await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/video-polling`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${
              import.meta.env.VITE_APP_API_TOKEN as string
            }`,
          }
        })
        } catch (error) {
          console.error("Error uploading video: ", error);
        }
    }, [mediaBlobUrl])

    useEffect(() => {
        if (!mediaBlobUrl) return;

        handleSubmitVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mediaBlobUrl])
  
    return (
      <>
      <div className="hidden">
        <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
      </div>
      </>
    );
  };

export { VideoRecorder }