import { useEffect } from "react";
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

    useEffect(() => {
        if (!mediaBlobUrl) return;

        console.log(mediaBlobUrl)
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