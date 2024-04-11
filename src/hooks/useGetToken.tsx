import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Location } from "@/constants/Location";

export const useGetToken = () => {
  const location = window.location.href;
  const url = new URL(location);
  console.log(url.searchParams.get("location"));
  localStorage.setItem(
    "location",
    url.searchParams.get("location") ?? Location.ENGINEERING
  );

  if (localStorage.getItem("token")) {
    return;
  }
  const { data, error } = useQuery({
    queryKey: ["location", url.searchParams.get("location")],
    queryFn: async () => {
      try {
        const resp = await axios.get(
          `https://mizumi-backend-dev.nkaewam.dev/token/${
            url.searchParams.get("location") ?? Location.ENGINEERING
          }`
        );
        const data = resp.data;
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });
  if (!error && data) {
    localStorage.setItem("token", data.message);
  }
};
