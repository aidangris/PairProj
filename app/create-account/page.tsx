import { CreateAccount } from "./components/create-account";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div
      className="flex flex-col h-screen"
      style={{ backgroundColor: "#F0F4F7" }}
    >
      {/* <div className="absolute mt-20 transform -translate-x-1/2 h-3/4 w-full rounded-full bg-white opacity-100 outline-dashed"></div> */}
      <div className="flex justify-between items-center px-5 py-3 bg-white shadow-sm">
        <div className="text-3xl">ProgPair</div>
        <a href="/login">
          <Button>Sign In</Button>
        </a>
      </div>

      <div
        className="absolute top-0 left-0 h-screen w-3/4 drop-shadow-lg"
        style={{ top: "3.75rem", backgroundColor: "#EEF9FF", height: "calc(100vh - 3.75rem)" }}
        id="line"
      ></div>
      <div
        className="absolute left-1/3 ml-56 mt-24 w-full aspect-[1] md:max-w-[668px] rounded-full drop-shadow-[3px_0_1px_rgba(0,0,0,0.25)]"
        style={{ backgroundColor: "#EEF9FF" }}
        id="circle"
      ></div>
      <Image
        src="/images/create-account-bg.svg"
        alt="create account background"
        width={683}
        height={488}
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2" 
        style={{ left: "28%" }}
      />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-2xl p-8 rounded-lg md:translate-x-1/2 -mt-12 ml-20">
          <CreateAccount />
        </div>
      </div>
    </div>
  );
}
