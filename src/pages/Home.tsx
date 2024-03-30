import { ConsentModal } from "@/components/ConsentModal";

const HomePage = () => {
  return (
    <div className="relative flex flex-col overflow-hidden w-1080 h-1920 bg-[url('/01-home-page/homePageBg.svg')]">
      <img
        src="../01-home-page/product.png"
        alt="product"
        className="absolute z-30"
      />

      <img
        src="../01-home-page/ball-crab.png"
        alt="carb"
        className="absolute z-30"
      />

      <div className="absolute bottom-[481px] left-[-54px] rotate-[5deg] ">
        <img src="../01-home-page/cat.gif" alt="cat" width={450} height={600} />
      </div>

      <div className="absolute bottom-[453px] right-[-60px] rotate-[-10deg]">
        <img src="../01-home-page/cat.gif" alt="cat" width={450} height={600} />
      </div>

      <div className="absolute bottom-60 left-0 flex justify-center w-full z-40">
        <ConsentModal />
      </div>
    </div>
  );
};

export default HomePage;
