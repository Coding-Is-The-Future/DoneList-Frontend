import { ctgAtom } from "@/atoms/ctgAtoms"
import { popupList } from "@/atoms/listAtoms"
import { popupProps } from "@/types/addPopUpProps"
import { motion } from "framer-motion"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"

const AddToListPopUp:NextPage<popupProps> = ({setState, keyValue , title }) => {
const searchList = useRecoilValue(popupList({keyValue,title}))
const ctgList = useRecoilValue(ctgAtom)
const [startDate,fineDate] = searchList[0].date.split("~")
const [mainCtg,setMainCtg] = useState("")
const [subCtg,setSubCtg] = useState("")
const [titState,setTitState] = useState(false) 
const sample:{[key:string]:string[]} = {retry:["반복 안함","반복"],state:["상태"],secert:["공개","비공개"]}
const sample2:{[key:string]:(string)[]} = {issue:["게으름","일정 빡빡","특별한 일정","우선순위 변화","기타"],
level:[searchList[0].level,...["High","Medium","Low"].filter(item=>item!==searchList[0].level)]}
useEffect(()=>setSubCtg(""),[mainCtg])
return(
<motion.div  animate={{opacity:1}} exit={{opacity:0}} className="z-20">
<motion.div onClick={()=>setState(state=>!state)}
className="bg-gray-900 w-full h-full fixed top-0 left-0 opacity-50 font-bold"/>
<motion.div layoutId={searchList[0].id}
className="fixed top-[5%] left-[15%] md:left-[20%] w-[70%] md:w-[60%] h-[90%] bg-white rounded-xl pb-11 overflow-auto scrollbar-hide">
<header className="bg-gray-300  h-[4em] md:h-[5em] rounded-t-xl flex justify-end px-3 pt-3 w-full">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
 className="w-6 h-6 md:w-10 md:h-10 hover:text-red-500" onClick = {()=>setState(state=>!state)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg></header>

<main className="mt-5 ml-[7%]">
<form className="flex flex-col mr-[7%]">
  <div className="border-b-2 border-gray-300 pb-3 mb-3 w-full">
  <input type="text" defaultValue={searchList[0].title}
  className="outline-none rounded-lg bg-slate-200 p-3 w-full shadow-md"/>
  </div>

<div className="flex">
<div className="flex flex-col w-full">
  <div className="flex">
  {Object.keys(ctgList).map(mainC=><input type="button" key={mainC} onClick={()=>setMainCtg(state=>{
      if(state!==mainC){return mainC}
      else {return ""}})} 
    className={`text-white ${mainCtg === mainC?"bg-blue-500":"bg-blue-300"} shadow-md text-vxs sm:text-xs 
    hover:ring hover:ring-blue-500 hover:ring-offset-4 cursor-pointer w-[80%] 
    border-2 border-blue-500 py-1 md:p-2 rounded-xl m-2`} value={mainC}/>)}
  </div>

  <div className="flex">
  {ctgList[mainCtg]?.map(subC=><input type="button" key={subC} onClick={()=>setSubCtg(state=>{
      if(state!==subC){return subC}
      else {return ""}})} 
    className={`text-white ${subCtg === subC?"bg-blue-500":"bg-blue-300"} shadow-md text-vxs sm:text-xs 
    hover:ring hover:ring-blue-500 hover:ring-offset-4 cursor-pointer w-[80%] 
    border-2 border-blue-500 py-1 md:p-2 rounded-xl m-2`} value={subC}/>)}
  </div>

 </div> 
 <div className="my-auto">
 <input type="button" value="&#43;"
    className="text-lg md:text-2xl text-center w-7 md:w-14 rounded-xl box-border shadow-md bg-blue-500 pb-1 text-white cursor-pointer hover:opacity-80"/>
 </div>
</div>

<div className="flex mt-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<div className="ml-2 md:ml-5 border-2 border-blue-500 text-vxs sm:text-xs shadow-md flex items-center px-2 md:px-8 rounded-lg text-blue-500 min-w-max">{startDate}</div>
<span className="ml-3 flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-3 md:w-7 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
</svg>
</span>
<div className="ml-2 md:ml-5 border-2 border-blue-500 text-vxs sm:text-xs shadow-md flex items-center px-2 md:px-8 rounded-lg text-blue-500 min-w-max">{fineDate}</div>
</div>

<div className="grid grid-cols-3 gap-x-5 mt-2">
  
  {Object.keys(sample).map(item=>{return(
    <select key={item} className="outline-none shadow-md text-vxs sm:text-xs text-blue-500 border-2 border-blue-500 rounded-lg px-2 py-1">
    {sample[item].map(index=> <option key={index} className="text-center">{index}</option>)}
    </select>
  )})}
</div>

<div className="mt-3 flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
<div className="flex justify-center items-center w-full ml-2 border-2 border-blue-500 shadow-md rounded-xl py-1 text-blue-500 md">함께하는 사람 추가</div>
</div>

<div className="mt-3 flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<div className="flex justify-center items-center w-full ml-2 border-2 shadow-md border-blue-500 rounded-xl py-1 text-blue-500 md">위치 추가</div>
</div>

<div className="mt-3 flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 aspect-square">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

<div className="flex justify-center items-center ml-2 w-full h-32 border-2 shadow-md border-blue-500 rounded-xl py-1 text-blue-500 md">설명 및 메모 추가</div>
</div>

<div className="flex">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
className="w-7 aspect-square mt-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
<div className="grid grid-cols-2 gap-x-2 md:gap-x-5 mt-3 ml-2">
{Object.keys(sample2).map(item=>{return(
    <select key={item} className="outline-none text-blue-500 text-vxs sm:text-xs shadow-md border-2 border-blue-500 rounded-lg md:px-2 md:py-1">
    {sample2[item].map(index=> <option key={index} className="text-center">{index}</option>)}
    </select>
  )})}
</div>
<div className="grid grid-cols-2 place-content-center mt-3 ml-2 md:ml-4">
<input type="checkbox" className="w-4 md:w-5 shadow-md aspect-square" 
onClick={()=>setTitState(state=>!state)}/> 
<span className={`${titState?"text-blue-500":"text-black"} mt-[0.1rem]`}>매일</span></div>
</div>

<div className="border-2 border-blue-500 rounded-lg p-2 text-center text-blue-500 shadow-md mt-3">피드백 추가</div>
</form>
</main>
</motion.div>
</motion.div>)
}
export default AddToListPopUp