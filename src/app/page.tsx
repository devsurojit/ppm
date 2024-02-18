"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import text from '@/languages/en_US.json'
import { pathName } from "@/utils/route";
import { FlexCenter } from "@/common";
import CommonLoading from "@/common/CommonLoading";

export default function Home() {
  const router=useRouter()
  useEffect(()=>{
    router.push(pathName.login)
  },[router])

  return (
    <main className="w-full h-screen bg-gradient-to-tr from-orange-400 via-red-500 to-indigo-500">
      <FlexCenter className="w-full h-full" gap={2}>
        {/* <CircularProgress color="success" size={50} />
        <Typography component={`p`} className="!text-lg !font-extrabold !text-white  sm:!text-xl md:!text-2xl lg:!text-3xl xl:!text-5xl ">
            {text.loginRedirection}
        </Typography> */}
        {/* <CommonLoading
        imgHeight={100}
        loadSpaceBetween={3}
         loadingText={text.loginRedirection}
         loadingTextCls={`!text-lg !font-extrabold !text-white  sm:!text-xl md:!text-2xl lg:!text-3xl xl:!text-5xl`}/> */}
      </FlexCenter>
    </main>
  );
}
