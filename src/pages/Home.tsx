// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

//use bottom-24

const HomePage = () => {
  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/homePageBg.svg')]">
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

      <div className="absolute bottom-60 left-0 flex justify-center w-full">
        <div className=" font-primaryRegular text-white text-7xl py-2 px-24 rounded-full border-4 border-white bg-gradient-to-r from-button-primary to-button-secondary shadow-2xl">
          <Dialog>
            <DialogTrigger>เล่นเลย</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className=" font-primaryRegular text-5xl">
                  Consent
                </DialogTitle>
                <DialogDescription className=" font-primaryRegular text-3xl">
                  ทั้งนี้ ก่อนการแสดงเจตนา
                  ข้าพเจ้าได้อ่านรายละเอียดจากเอกสารชี้แจงข้อมูล
                  หรือได้รับคำอธิบายจากสำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน)
                  ถึงวัตถุประสงค์ในการเก็บรวบรวม ใช้หรือเปิดเผย (“ประมวลผล”)
                  ข้อมูลส่วนบุคคล และมีความเข้าใจดีแล้ว
                  ข้าพเจ้าให้ความยินยอมหรือปฏิเสธไม่ให้ความยินยอมในเอกสารนี้ด้วยความสมัครใจ
                  ปราศจากการบังคับหรือชักจูง
                  และข้าพเจ้าทราบว่าข้าพเจ้าสามารถถอนความยินยอมนี้เสียเมื่อใดก็ได้เว้นแต่ในกรณีมีข้อจำกัดสิทธิตามกฎหมายหรือยังมีสัญญาระหว่างข้าพเจ้ากับสำนักงานพัฒนารัฐบาลดิจิทัล
                  (องค์การมหาชน) ที่ให้ประโยชน์แก่ข้าพเจ้าอยู่
                  กรณีที่ข้าพเจ้าประสงค์จะขอถอนความยินยอม
                  ข้าพเจ้าทราบว่าการถอนความยินยอมจะมีผลทำให้.....(ระบุผลกระทบจากการถอนความยินยอม
                  เช่น ข้าพเจ้าอาจได้รับความสะดวกในการใช้บริการน้อยลง หรือ
                  ไม่สามารถเข้าถึงฟังก์ชันการใช้งานบางอย่างได้ เป็นต้น).....
                  และข้าพเจ้าทราบว่าการถอนความยินยอม
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button className=" font-primaryRegular text-3xl py-3 px-5">
                  <a href="/capture">ยอมรับ</a>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
