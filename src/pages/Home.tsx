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

const HomePage = () => {
  return (
    <div className="relative flex flex-col w-1080 h-1920 overflow-hidden bg-[url('/homePageBg.svg')]">
      <div className="absolute bottom-[481px] left-[-54px] rotate-[5deg] ">
        <img src="../cat.gif" alt="cat" width={450} height={600} />
      </div>

      <div className="absolute bottom-[453px] right-[-60px] rotate-[-10deg]">
        <img src="../cat.gif" alt="cat" width={450} height={600} />
      </div>

      <div className="absolute bottom-60 left-0 flex justify-center w-full">
        <div className=" font-primaryRegular text-white text-7xl py-2 px-24 rounded-full border-4 border-white bg-gradient-to-r from-button-primary to-button-secondary shadow-2xl">
          <Dialog>
            <DialogTrigger>เล่นเลย</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className=" font-primaryRegular text-5xl">
                  ประกาศการคุ้มครองข้อมูลส่วนบุคคล โครงการ Sunscreen Digital
                  Kiosk
                </DialogTitle>
                <DialogDescription className=" font-primaryRegular text-3xl max-h-[30vh] overflow-scroll">
                  เรียน ท่านผู้เข้าร่วมกิจกรรม
                  ทีมงานนิสิตคณะวิศวะกรรมศาสตร์จุฬาลงกรณ์มหาวิทยาลัย และ บริษัท
                  มิซึฮาดะ กรุ๊ป จํากัด (“ทีมผู้พัฒนาโครงการ”)
                  ให้ความสำคัญกับความเป็นส่วนตัว
                  และมุ่งมั่นที่จะคุ้มครองข้อมูลส่วนบุคคลของท่านตามกฏหมาย
                  ทีมผู้พัฒนาโครงการขอแจ้งให้ท่านผู้เข้าร่วมกิจกรรมในฐานะเจ้าของข้อมูลส่วนบุคคล
                  (“ท่าน”)ทราบถึงวัตถุประสงค์ รายละเอียดของการเก็บรวบรวมใช้
                  และ/หรือการเปิดเผย
                  ตลอดจนสิทธิตามกฎหมายของท่านเกี่ยวกับข้อมูลส่วนบุคคล
                  ดังต่อไปนี้ “ข้อมูลส่วนบุคคล” หมายถึง
                  ข้อมูลที่ทำให้สามารถระบุตัวตนของท่านได้
                  ไม่ว่าทางตรงหรือทางอ้อม 1. การเก็บรวบรวมข้อมูลส่วนบุคคล
                  ทีมผู้พัฒนาโครงการมีความจำเป็นต้องเก็บรวบรวมข้อมูลส่วนบุคคลของท่าน
                  เพื่อประโยชน์ในการเข้าร่วมกิจกรรมและการวิเคราะห์ข้อมูลเชิงสถิติ
                  ได้แก่ ข้อมูลชีวภาพ (Biometrics) ประกอบด้วย ภาพนิ่ง
                  ภาพเคลื่อนไหว
                  และข้อมูลอื่นใดที่ถือว่าเป็นข้อมูลส่วนบุคคลภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล
                  2. วัตถุประสงค์และฐานทางกฎหมายในการเก็บรวบรวม ใช้
                  และ/หรือเปิดเผยข้อมูลส่วนบุคคล วัตถุประสงค์ในการเก็บรวบรวม ใช้
                  และ/หรือเปิดเผยข้อมูลส่วนบุคคล ฐานในการเก็บรวบรวม ใช้
                  และ/หรือเปิดเผยข้อมูลส่วนบุคคล การประกอบสื่อโฆษณาของโครงการ
                  เก็บรวบรวม ใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลชีวภาพ
                  (Biometrics)
                  เพื่อใช้ในการประกอบสื่อโฆษณาการคาดการณ์ใบหน้าในอนาคตเพื่อถ่ายทอดใจความสำคัญของโครงการในหัวข้อผลกระทบทางสุขภาพที่อาจเกิดขึ้นจากแสงแดด
                  ฐานความยินยอม การวิเคราะห์ข้อมูลเชิงสถิติ เก็บรวบรวม ใช้
                  และ/หรือเปิดเผยข้อมูลส่วนบุคคลชีวภาพ (Biometrics) ของท่าน
                  เพื่อนำไปวิเคราะห์ประมวลผลด้วย อัลกอริทึมคาดการณ์ข้อมูลประชากร
                  เช่น เพศและอายุ
                  และจัดเก็บโดยมีจุดประสงค์ในการวิเคราะห์ข้อมูลเชิงสถิติ
                  ฐานความยินยอม 2.1 ทีมผู้พัฒนาโครงการอาจเก็บรวบรวม ใช้
                  และ/หรือเปิดเผยข้อมูลส่วนบุคคลชีวภาพ (Biometrics) ของท่าน
                  เพื่อใช้ในการประกอบสื่อโฆษณาการคาดการณ์ใบหน้าในอนาคต
                  เพื่อถ่ายทอดใจความสำคัญของโครงการในหัวข้อผลกระทบทางสุขภาพที่อาจเกิดขึ้นจากแสงแดด
                  บนฐานความยินยอม 2.2 ทีมผู้พัฒนาโครงการอาจเก็บรวบรวม ใช้
                  และ/หรือเปิดเผยข้อมูลส่วนบุคคลชีวภาพ (Biometrics) ของท่าน
                  เพื่อนำไปวิเคราะห์ประมวลผลด้วยอัลกอริทึมคาดการข้อมูลประชากร
                  เช่น เพศและอายุ
                  และจัดเก็บโดยมีจุดประสงค์ในการวิเคราะห์ข้อมูลเชิงสถิติ
                  บนฐานความยินยอม 3. การเปิดเผยข้อมูลส่วนบุคคล
                  ทีมผู้พัฒนาโครงการอาจเปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่หน่วยงานของรัฐ
                  หน่วยงานกำกับดูแล
                  และบุคคลหรือหน่วยงานอื่นที่เกี่ยวข้องภายใต้วัตถุประสงค์ที่กำหนดใน
                  ประกาศการคุ้มครองข้อมูลส่วนบุคคลฉบับนี้ เช่น ผู้ประมวลผลข้อมูล
                  ผู้ให้บริการภายนอก ผู้มีอำนาจตามกฎหมาย เป็นต้น ทั้งนี้
                  ทีมผู้พัฒนาโครงการจะดูแลให้บุคคลหรือหน่วยงานที่เป็นผู้รับข้อมูลดังกล่าวเก็บรวบรวม
                  ใช้
                  และ/หรือเปิดเผยข้อมูลส่วนบุคคลของท่านตามขอบเขตและวัตถุประสงค์ต่าง
                  ๆ ที่กำหนดในประกาศฉบับนี้ 4. การส่ง
                  หรือโอนข้อมูลไปยังต่างประเทศ
                  ข้อมูลส่วนบุคคลของท่านอาจถูกโอนไปยังต่างประเทศ
                  และถูกเก็บรวบรวม และ/หรือใช้ในต่างประเทศ ทั้งนี้
                  ประเทศเช่นว่านั้นอาจไม่มีมาตรการคุ้มครองข้อมูลส่วนบุคคลที่เพียงพอ
                  ดังที่คณะกรรมการคุ้มครองข้อมูลส่วนบุคคลได้ประกาศกำหนด
                  ในกรณีดังกล่าว ทีมผู้พัฒนาโครงการจะใช้มาตรการต่าง ๆ
                  เพื่อให้มั่นใจว่าการส่งหรือโอนดังกล่าวมีมาตรการคุ้มครองข้อมูลส่วนบุคคลในระดับที่เหมาะสม
                  และการส่งหรือโอนข้อมูลดังกล่าวเป็นไปโดยชอบด้วยกฎหมาย เช่น
                  ข้อมูลส่วนบุคคลของท่านอาจถูกเปิดเผยให้กับบริษัท Amazon AWS
                  ผู้ให้บริการอัลกอริทึมคาดการณ์ข้อมูลประชากร 5.
                  ระยะเวลาในการจัดเก็บข้อมูลส่วนบุคคล
                  ทีมผู้พัฒนาโครงการจะเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้ตลอดระยะเวลาที่ท่านยินยอมเพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวข้อง
                  และอาจเก็บรักษาไว้ต่อไปภายหลังจากนั้น
                  หากมีกฎหมายกำหนดหรืออนุญาตเป็นระยะเวลาไม่เกิน 10 ปี ทั้งนี้
                  ทีมผู้พัฒนาโครงการจะดำเนินการตามขั้นตอนที่เหมาะสมเพื่อลบหรือทำลายข้อมูลส่วนบุคคล
                  หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนได้เมื่อท่านได้ถอนความยินยอมหรือสิ้นสุดระยะเวลาดังกล่าว
                  6. การคุ้มครองข้อมูลส่วนบุคคล
                  ทีมผู้พัฒนาโครงการจะเก็บรักษาข้อมูลส่วนบุคคลของท่านอย่างปลอดภัย
                  โดยใช้มาตรการทั้งทางเทคนิค (Technical Measure)
                  และมาตรการทางบริหารจัดการ (Organizational Measure)
                  เพื่อรักษาความมั่นคงปลอดภัยในการประมวลผลข้อมูลส่วนบุคคลให้เหมาะสม
                  และป้องกันการละเมิดข้อมูล
                  มาตรฐานความปลอดภัยของระบบเทคโนโลยีสารสนเทศที่ทีมผู้พัฒนาโครงการใช้
                  จะช่วยให้มั่นใจว่าข้อมูลส่วนบุคคลของท่านจะไม่สูญหาย
                  ไม่ถูกทำลายโดยไม่ได้ตั้งใจ ไม่ถูกนำไปใช้ในทางที่ผิด
                  ไม่ถูกเปิดเผย
                  และไม่ถูกเข้าถึงโดยบุคคลทั่วไปที่ไม่เกี่ยวข้องกับทีมผู้พัฒนาโครงการ
                  7. สิทธิของท่านในฐานะเจ้าของข้อมูลส่วนบุคคล
                  สิทธิของท่านเป็นสิทธิตามกฎหมายที่ท่านพึงมี อาทิ
                  สิทธิขอถอนความยินยอม สิทธิขอเข้าถึงข้อมูล สิทธิขอถ่ายโอนข้อมูล
                  สิทธิขอคัดค้าน สิทธิขอให้ลบหรือทำลายข้อมูล
                  สิทธิขอให้ระงับการใช้ข้อมูล สิทธิขอให้แก้ไขข้อมูล
                  สิทธิร้องเรียน โดยท่านสามารถขอใช้สิทธิต่าง ๆ ได้
                  ภายใต้ข้อกำหนดของกฎหมายที่กำหนดไว้ในปัจจุบันหรือที่จะเพิ่มเติมในอนาคต
                  ในกรณีท่านยังไม่บรรลุนิติภาวะหรือมีอายุไม่ครบ 20 ปีบริบูรณ์
                  หรือถูกจำกัดความสามารถในการทำนิติกรรมตามกฎหมาย
                  ท่านสามารถขอใช้สิทธิโดยให้บิดาและมารดา ผู้ใช้อำนาจปกครอง
                  หรือผู้มีอำนาจกระทำการแทน เป็นผู้แจ้งความประสงค์ 8.
                  ช่องทางการติดต่อทีมผู้พัฒนาโครงการ หากท่านมีข้อเสนอแนะ
                  หรือต้องการสอบถามข้อมูลเกี่ยวกับสิทธิและรายละเอียดการเก็บรวบรวม
                  ใช้ และ/หรือเปิดเผยข้อมูลส่วนบุคคลของท่าน
                  ท่านสามารถติดต่อทีมผู้พัฒนาโครงการ
                  หรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล ผ่านทางหมายเลขโทรศัพท์
                  . 096-796-4209
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
