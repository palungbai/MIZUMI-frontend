import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useEffect } from "react";
import { useIdleTimer } from "react-idle-timer";
import { useLocation, useNavigate } from "react-router-dom";

export const useTimeout = ({ duration }: { duration: number }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const onIdle = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const { getRemainingTime } = useIdleTimer({
    timeout: duration,
    onIdle,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = Math.ceil(getRemainingTime() / 1000);

      if (remainingTime == 5) {
        toast({
          title: "Warning",
          description: "You will be redirected to the home page soon",
          action: <ToastAction altText={"stay"}> stay </ToastAction>,
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
};
