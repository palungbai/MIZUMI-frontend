import { Button } from "@/components/ui/button";

//use bottom-24

const HomePage = () => {
  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden">
      <img
        src="../homePageBg.svg"
        alt="homePageBg"
        width={1080}
        height={1920}
      />

      <div
        className="absolute "
        style={{ bottom: "481px", left: "-54px", rotate: "5deg" }}
      >
        <img src="../cat.gif" alt="cat" width={450} height={600} />
      </div>

      <div
        className="absolute"
        style={{ bottom: "453px", right: "-60px", rotate: "-10deg" }}
      >
        <img src="../cat.gif" alt="cat" width={450} height={600} />
      </div>

      <div className="absolute bottom-40 left-0 flex justify-center w-full">
        <Button
          size="lg"
          className="font-primaryBold text-7xl py-12 px-24 rounded-full border-4 border-white bg-gradient-to-r from-button-primary to-button-secondary shadow-2xl"
          onClick={() => {
            window.location.href = "/capture";
          }}
        >
          เล่นเลย
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
