import LoadingBar from "@/components/LoadingBar";

const ParagonLoading = () => {
  return (
    <div>
      <div className="absolute z-40 w-full bottom-[1209px] left-[280px] ">
        <LoadingBar />
      </div>
      <div>
        <img
          src="/paragonAds.png"
          alt="paragonAds"
          className="absolute z-30 w-[836px] bottom-[64px] left-[116px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ParagonLoading;
