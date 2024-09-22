import MyIntroduction from "./myIntroduction/components/MyIntroduction";
import TopUpText from "./myIntroduction/components/TopUpText";
import MyQualityServices from "./myQualityServices/components/MyQualityServices";
import MyRecentWorks from "./myRecentWorks/components/MyRecentWorks";

export default function Home() {
  return (
    <main className="">
      <div className="relative">
        <div className="hidden lg:flex absolute top-[15%] right-[40%]">
          <TopUpText />
        </div>
        <div className=" z-10">
          <MyIntroduction />
        </div>
        <div>
          <MyQualityServices />
        </div>
        <div>
          <MyRecentWorks />
        </div>
      </div>
    </main>
  );
}
