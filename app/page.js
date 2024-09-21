import MyIntroduction from "./myIntroduction/components/MyIntroduction";
import TopUpText from "./myIntroduction/components/TopUpText";
import MyQualityServices from "./myQualityServices/components/MyQualityServices";

export default function Home() {
  return (
    <main className="">
      <div className="relative">
        <div className="hidden lg:flex absolute top-[15%] right-[40%] -z-10">
          <TopUpText />
        </div>
        <div>
          <MyIntroduction />
        </div>
        <div>
          <MyQualityServices />
        </div>
      </div>
    </main>
  );
}
