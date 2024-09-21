import MyIntroduction from "./myIntroduction/components/MyIntroduction";
import TopUpText from "./myIntroduction/components/TopUpText";

export default function Home() {
  return (
    <main className="">
      <div className="relative">
        <div className="hidden lg:flex absolute top-[35%] right-[40%] -z-10">
          <TopUpText />
        </div>
        <div>
          <MyIntroduction />
        </div>
      </div>
    </main>
  );
}
