import Image from "next/image";
import { Bebas_Neue, Montserrat } from "next/font/google";
import Card from "../components/Card";
import array from "../components/card.json";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const monstse = Montserrat({ weight: "400", subsets: ["latin"] });

export default function Body() {
  return (
    <>
      <Top /> <Bottom />
    </>
  );
}
function Top() {
  return (
    <div className={`bg-main-gradient`}>
      {/* wealth logo */}
      <div className="flex justify-center pt-5 pb-[6rem]">
        <Image
          src="/icon.svg"
          alt="wealth logo"
          width={128}
          height={128}
          priority
        />
      </div>

      {/* Top content */}
      <div className={`${monstse.className} flex justify-center pb-5`}>
        <div className={`font-extrabold text-[13px]`}>WEALTH & PROSPERITY</div>
      </div>
      <div
        className={`${bebas.className} text-[4rem] flex justify-center text-center leading-[5rem] px-[20rem] pb-5`}
      >
        <div className="w-[35rem]">
          THE DIGITAL NOISE MAKERS IN THE FINANCIAL SPACE.
        </div>
      </div>
      <div
        className={`${monstse.className} flex justify-center text-center px-[24rem]`}
      >
        <div className="w-[30rem]">
          Compare rates, crunch numbers and get expert guidance for life's
          biggest financial moments.
        </div>
      </div>

      {/* Search bar */}
      <div className="flex items-center justify-center pt-5">
        <form className="w-[560px] max-w-[560px]">
          <div className="flex items-center pt-5">
            <input
              className="appearance-none bg-white border-none w-full text-gray-700 p-[27px]  leading-tight focus:outline-none text-[18px]"
              type="text"
              placeholder="Type In A Keyword, Interest Or Topic."
            ></input>
            <button
              className="flex-shrink-0 bg-[#1C1C1C] hover:bg-slate-800 text-sm text-white py-[28px] px-[34px]"
              type="button"
            >
              GO
            </button>
          </div>
        </form>
      </div>

      <div
        className={`${monstse.className} flex justify-center text-center pt-20`}
      >
        <div className="font-extrabold text-[13px] ">AS SEEN ON</div>
      </div>
      <div className="flex justify-center text-center gap-10">
        <Image
          src="/main/forbes.svg"
          alt={`forbes logo`}
          width={132}
          height={70}
          priority
        />
        <Image
          className="pt-5"
          src="/main/wallstreet.svg"
          alt={`wallstreet logo`}
          width={212}
          height={113}
          priority
        />
        <Image
          src="/main/wealthfront.svg"
          alt={`wealthfront logo`}
          width={159}
          height={60}
          priority
        />
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <main className="flex flex-col justify-between items-center p-[6rem] min-h-[80rem]">
      {/* Headers */}
      <div className={`${monstse.className} text-center`}>
        <div className="text-[#EBA639] font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] pb-2">
          AREAS OF FOCUS
        </div>
        <h2 className={`${bebas.className} text-[45px]`}>
          DISCOVER AN INTEREST OR TOPIC.
        </h2>
        <p className="w-[34rem] text-[18px]">
          Compare rates, crunch numbers and get expert guidance for life’s
          biggest financial moments.
        </p>
      </div>

      {/* Tab headers to switch between content */}
      <div className={`${monstse.className} flex gap-[10rem]`}>
        <div className="hover:underline font-extrabold cursor-pointer">
          PERSONAL FINANCE
        </div>
        <div className="hover:underline font-extrabold cursor-pointer">
          CAREERS
        </div>
        <div className="hover:underline font-extrabold cursor-pointer">
          START-UPS
        </div>
        <div className="hover:underline font-extrabold cursor-pointer">
          TRENDING
        </div>
      </div>

      {/* Card grid */}
      <div className="w-[1200px] min-w-[1200px] max-w-[1200px]">
        <div
          className={`${monstse.className} flex items-center justify-center flex-wrap`}
        >
          {array.map((c, index) => (
            <Card
              key={index}
              index={index}
              title={c.title}
              description={c.description}
              icon={
                <Image
                  src={c.icon}
                  alt={`${c.title} Icon`}
                  width={72}
                  height={72}
                  priority
                />
              }
            />
          ))}
        </div>
      </div>
      <div>
        <button
          className={`${monstse.className} hover:underline cursor-pointer w-[400px] h-[80px] bg-[#FBBD5A]`}
        >
          <div className="font-extrabold text-[14px]">
            VIEW ALL OF OUT LATEST
          </div>
        </button>
      </div>
    </main>
  );
}
