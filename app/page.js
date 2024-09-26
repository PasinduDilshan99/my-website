import ClientStories from "./clientStories/components/ClientStories";
import Footer from "./footer/components/Footer";
import Form from "./form/components/Form";
import MyIntroduction from "./myIntroduction/components/MyIntroduction";
import TopUpText from "./myIntroduction/components/TopUpText";
import MyQualityServices from "./myQualityServices/components/MyQualityServices";
import MyRecentWorks from "./myRecentWorks/components/MyRecentWorks";
import MySkills from "./mySkills/components/MySkills";
import Qualification from "./qulification/components/Qualification";
import RecentBlogs from "./recentBlogs/components/RecentBlogs";

export default function Home() {
  return (
    <main className="">
      <div className="relative">
        <div className="hidden lg:flex absolute top-[2%] right-[42%]">
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
        <div>
          <Qualification />
        </div>
        <div>
          <MySkills />
        </div>
        <div>
          <ClientStories />
        </div>
        <div>
          <RecentBlogs />
        </div>
        <div>
          <Form />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
