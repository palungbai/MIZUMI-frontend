import LinkButton from "@/components/LinkButton";
import { UrlKey } from "@/constants/UrlKeys";
import { useNavigate } from "react-router-dom";

const DisplayPage = () => {
  const sunscreenUrl = localStorage.getItem(UrlKey.URL);
  const navigate = useNavigate();

  if (!sunscreenUrl) {
    navigate("/");
    return;
  }

  return (
    <>
      <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/05-display-page/display-page-bg.png')] bg-contain">
        <div className="absolute w-[810px] h-[810px] bottom-[360px] left-[140px] rounded-2xl z-10">
          <img
            src={sunscreenUrl}
            alt="no sunscreen"
            width="810px"
            height="810px"
            className="rounded-2xl"
          />
        </div>

        <img
          src="../05-display-page/text-top-left.svg"
          width="400px"
          height="400px"
          alt="text-top"
          className="absolute z-10 w-[400px] h-[400px] top-[600px] left-[0px]"
        />
        <img
          src="../05-display-page/text-bottom-right.svg"
          width="400px"
          height="400px"
          alt="text-top"
          className="absolute z-10 right-[0px] bottom-[400px]"
        />

        <LinkButton
          content="รับครีมกันแดด"
          href="/ads"
          className="absolute bottom-[168px] left-[357px]"
        />
      </div>
    </>
  );
};

export default DisplayPage;
