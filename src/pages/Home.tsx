import { ConsentModal } from "@/components/ConsentModal";
import { LoadingPage } from "./LoadingPage";
import { useLoadBg } from "@/hooks/useLoadBg";

const HomePage = () => {
  const { isBgLoaded } = useLoadBg("/01-home-page/homePageBg.png");

  if (!isBgLoaded) return <LoadingPage />;

  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/01-home-page/homePageBg3.png')]">
      <img
        src="../01-home-page/ParagonLogo.png"
        alt="product"
        className="absolute z-30 w-[130px] left-[346px] top-[28px] rounded-lg scale-90"
      />
      <img
        src="../01-home-page/receive-sunscreen.png"
        alt="product"
        className="absolute z-50 scale-[1.6] bottom-[1662px]"
      />
      <img
        src="../01-home-page/product.png"
        alt="product"
        className="absolute z-30"
      />

      <img
        src="../01-home-page/present.png"
        alt="product"
        className="absolute z-30 bottom-[-24px] left-[24px] rotate-[1deg]"
      />
      <img
        src="../01-home-page/future.png"
        alt="product"
        className="absolute z-30 bottom-[15px] right-[24px] rotate-[3deg]"
      />
      <img
        src="../01-home-page/vs.png"
        alt="product"
        className="absolute z-50 top-[370px] right-[24px] rotate-[3deg]"
      />
      <img
        src="../01-home-page/ball-crab.png"
        alt="carb"
        className="absolute z-30"
      />
      <div className="absolute bottom-[511px] left-[-54px] rotate-[5deg] border-[16px] border-white rounded-3xl">
        <img
          src="../01-home-page/present-model.png"
          alt="present-model"
          width={450}
          height={600}
        />
      </div>
      <div className="absolute bottom-[487px] right-[-60px] rotate-[-7deg] border-[16px] border-white rounded-3xl">
        <img
          src="../01-home-page/future-model.png"
          alt="future-model"
          width={450}
          height={600}
        />
      </div>
      <div className="absolute bottom-60 left-0 flex justify-center w-full z-50">
        <ConsentModal />
      </div>
    </div>
  );
};

export default HomePage;
