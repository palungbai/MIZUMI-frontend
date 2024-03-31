import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { useLocation, useNavigate } from "react-router-dom";

export const useTimeout = ({ duration }: { duration: number }) => {
  const [status, setStatus] = useState<"idle" | "active">("active");
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const onActive = () => {
    setStatus("active");
  };

  const onIdle = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setStatus("idle");
  };

  const { getRemainingTime } = useIdleTimer({
    timeout: duration,
    onActive,
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

  return { status };
};
