/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useCallback } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

export const useRecordVideo = () => {
  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder(
    { video: true }
  );
  const VIDEO_DURATION = 5000;

  useEffect(() => {
    const handleRecord = async () => {
      startRecording();
      await new Promise((resolve) => setTimeout(resolve, VIDEO_DURATION));
      stopRecording();
    };
    handleRecord();
  }, []);

  const handleSubmitVideo = useCallback(async () => {
    if (!mediaBlobUrl) return;

    try {
      const blob = await fetch(mediaBlobUrl).then((r) => r.blob());

      const formData = new FormData();
      formData.append("file", blob, `video-${Date.now()}.webm`);
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/api/video-polling`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${
              import.meta.env.VITE_APP_API_TOKEN as string
            }`,
          },
        }
      );
    } catch (error) {
      console.error("Error uploading video: ", error);
    }
  }, [mediaBlobUrl]);

  useEffect(() => {
    if (!mediaBlobUrl) return;

    console.log(mediaBlobUrl);
    handleSubmitVideo();
  }, [mediaBlobUrl]);
};
