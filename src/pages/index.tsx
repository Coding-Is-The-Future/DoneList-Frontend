import dynamic from "next/dynamic"
import { useState } from "react"

const ApexChart = dynamic(() => import("react-apexcharts"),{ssr:false})

const heatmapData = [
  { name:"convention",data: [
{x:'W1',y:24},{x:'W4',y:5},{x:'W4',y:8},
{x:'W2',y:2},{x:'W2',y:2},{x:'W2',y:0},
{x:'W2',y:0},{x:'W4',y:0},{x:'W4',y:1},
{x:'W3',y:6},{x:'W4',y:5},{x:'W4',y:3},
{x:'W4',y:5},{x:'W4',y:2},{x:'W4',y:6},
{x:'W4',y:0},{x:'W4',y:5},{x:'W4',y:8},
{x:'W4',y:5},{x:'W4',y:0},{x:'W4',y:5},
{x:'W4',y:1},{x:'W4',y:5},{x:'W4',y:2},
{x:'W4',y:5},{x:'W4',y:5},{x:'W4',y:5},
{x:'W4',y:4},{x:'W4',y:0},{x:'W4',y:1},
{x:'W4',y:0},{x:'W4',y:4},{x:'W4',y:0},
{x:'W4',y:1},{x:'W4',y:5},{x:'W4',y:2},
{x:'W4',y:8},{x:'W4',y:1},{x:'W4',y:0},
{x:'W4',y:5},{x:'W4',y:0},{x:'W4',y:7},
{x:'W4',y:2},{x:'W4',y:6},{x:'W4',y:4},
{x:'W4',y:1},{x:'W4',y:2},{x:'W4',y:6},
{x:'W4',y:0},{x:'W4',y:9},{x:'W4',y:2},
{x:'W4',y:1},{x:'W4',y:4},{x:'W4',y:8},
{x:'W4',y:5},{x:'W4',y:0},{x:'W4',y:1}
]},
  {
  name:"convention",data: [
{x:'W1',y:22},{x:'W4',y:5},{x:'W4',y:5},
{x:'W2',y:2},{x:'W2',y:2},{x:'W2',y:2},
{x:'W2',y:2},{x:'W4',y:1},{x:'W4',y:5},
{x:'W3',y:6},{x:'W4',y:0},{x:'W4',y:4},
{x:'W4',y:3},{x:'W4',y:7},{x:'W4',y:1},
{x:'W4',y:12},{x:'W4',y:9},{x:'W4',y:0},
{x:'W4',y:6},{x:'W4',y:0},{x:'W4',y:3},
{x:'W4',y:6},{x:'W4',y:5},{x:'W4',y:10},
{x:'W4',y:8},{x:'W4',y:2},{x:'W4',y:2},
{x:'W4',y:2},{x:'W4',y:3},{x:'W4',y:6},
{x:'W4',y:2},{x:'W4',y:8},{x:'W4',y:8},
{x:'W4',y:4},{x:'W4',y:1},{x:'W4',y:2},
{x:'W4',y:9},{x:'W4',y:2},{x:'W4',y:9},
{x:'W4',y:1},{x:'W4',y:6},{x:'W4',y:1},
{x:'W4',y:1},{x:'W4',y:2},{x:'W4',y:7},
{x:'W4',y:2},{x:'W4',y:0},{x:'W4',y:6},
{x:'W4',y:6},{x:'W4',y:2},{x:'W4',y:3},
{x:'W4',y:7},{x:'W4',y:7},{x:'W4',y:2},
{x:'W4',y:5},{x:'W4',y:9},{x:'W4',y:1}
  ]},
  {
  name:"convention",data: [
{x:'W1',y:1},{x:'W4',y:9},{x:'W4',y:5},
{x:'W2',y:7},{x:'W2',y:2},{x:'W2',y:6},
{x:'W2',y:6},{x:'W4',y:4},{x:'W4',y:8},
{x:'W3',y:2},{x:'W4',y:8},{x:'W4',y:1},
{x:'W4',y:1},{x:'W4',y:3},{x:'W4',y:3},
{x:'W4',y:0},{x:'W4',y:4},{x:'W4',y:5},
{x:'W4',y:0},{x:'W4',y:2},{x:'W4',y:8},
{x:'W4',y:0},{x:'W4',y:5},{x:'W4',y:1},
{x:'W4',y:2},{x:'W4',y:1},{x:'W4',y:4},
{x:'W4',y:6},{x:'W4',y:8},{x:'W4',y:3},
{x:'W4',y:22},{x:'W4',y:1},{x:'W4',y:1},
{x:'W4',y:4},{x:'W4',y:3},{x:'W4',y:5},
{x:'W4',y:7},{x:'W4',y:1},{x:'W4',y:10},
{x:'W4',y:52},{x:'W4',y:0},{x:'W4',y:2},
{x:'W4',y:0},{x:'W4',y:2},{x:'W4',y:4},
{x:'W4',y:7},{x:'W4',y:6},{x:'W4',y:9},
{x:'W4',y:2},{x:'W4',y:2},{x:'W4',y:1},
{x:'W4',y:4},{x:'W4',y:1},{x:'W4',y:2},
{x:'W4',y:1},{x:'W4',y:9},{x:'W4',y:5}
  ]},
  {
  name:"convention",data: [
{x:'W1',y:1},{x:'W4',y:5},{x:'W4',y:3},
{x:'W2',y:8},{x:'W2',y:2},{x:'W2',y:4},
{x:'W2',y:1},{x:'W4',y:2},{x:'W4',y:9},
{x:'W3',y:7},{x:'W4',y:4},{x:'W4',y:2},
{x:'W4',y:6},{x:'W4',y:7},{x:'W4',y:4},
{x:'W4',y:2},{x:'W4',y:6},{x:'W4',y:10},
{x:'W4',y:0},{x:'W4',y:10},{x:'W4',y:2},
{x:'W4',y:0},{x:'W4',y:2},{x:'W4',y:8},
{x:'W4',y:3},{x:'W4',y:9},{x:'W4',y:1},
{x:'W4',y:10},{x:'W4',y:2},{x:'W4',y:1},
{x:'W4',y:2},{x:'W4',y:1},{x:'W4',y:4},
{x:'W4',y:5},{x:'W4',y:8},{x:'W4',y:2},
{x:'W4',y:7},{x:'W4',y:6},{x:'W4',y:7},
{x:'W4',y:2},{x:'W4',y:2},{x:'W4',y:2},
{x:'W4',y:10},{x:'W4',y:2},{x:'W4',y:5},
{x:'W4',y:6},{x:'W4',y:1},{x:'W4',y:3},
{x:'W4',y:2},{x:'W4',y:3},{x:'W4',y:8},
{x:'W4',y:8},{x:'W4',y:8},{x:'W4',y:9},
{x:'W4',y:5},{x:'W4',y:5},{x:'W4',y:5}
 ]},
  {
  name:"convention",data: [
{x:'W1',y:4},{x:'W4',y:5},{x:'W4',y:9},
{x:'W2',y:2},{x:'W2',y:6},{x:'W2',y:2},
{x:'W2',y:9},{x:'W4',y:1},{x:'W4',y:1},
{x:'W3',y:6},{x:'W4',y:2},{x:'W4',y:2},
{x:'W4',y:0},{x:'W4',y:4},{x:'W4',y:4},
{x:'W4',y:0},{x:'W4',y:2},{x:'W4',y:3},
{x:'W4',y:2},{x:'W4',y:1},{x:'W4',y:2},
{x:'W4',y:6},{x:'W4',y:10},{x:'W4',y:6},
{x:'W4',y:7},{x:'W4',y:4},{x:'W4',y:7},
{x:'W4',y:1},{x:'W4',y:0},{x:'W4',y:1},
{x:'W4',y:1},{x:'W4',y:8},{x:'W4',y:2},
{x:'W4',y:8},{x:'W4',y:1},{x:'W4',y:0},
{x:'W4',y:4},{x:'W4',y:7},{x:'W4',y:0},
{x:'W4',y:2},{x:'W4',y:3},{x:'W4',y:8},
{x:'W4',y:3},{x:'W4',y:6},{x:'W4',y:2},
{x:'W4',y:5},{x:'W4',y:8},{x:'W4',y:1},
{x:'W4',y:7},{x:'W4',y:0},{x:'W4',y:4},
{x:'W4',y:1},{x:'W4',y:10},{x:'W4',y:3},
{x:'W4',y:10},{x:'W4',y:2},{x:'W4',y:5}
  ]},
  {
  name:"convention",data: [
{x:'W1',y:1},{x:'W4',y:3},{x:'W4',y:5},
{x:'W2',y:6},{x:'W2',y:1},{x:'W2',y:10},
{x:'W2',y:4},{x:'W4',y:0},{x:'W4',y:5},
{x:'W3',y:2},{x:'W4',y:6},{x:'W4',y:3},
{x:'W4',y:0},{x:'W4',y:10},{x:'W4',y:7},
{x:'W4',y:7},{x:'W4',y:4},{x:'W4',y:0},
{x:'W4',y:0},{x:'W4',y:9},{x:'W4',y:2},
{x:'W4',y:0},{x:'W4',y:8},{x:'W4',y:1},
{x:'W4',y:2},{x:'W4',y:6},{x:'W4',y:0},
{x:'W4',y:10},{x:'W4',y:7},{x:'W4',y:6},
{x:'W4',y:4},{x:'W4',y:5},{x:'W4',y:7},
{x:'W4',y:2},{x:'W4',y:1},{x:'W4',y:2},
{x:'W4',y:51},{x:'W4',y:0},{x:'W4',y:4},
{x:'W4',y:3},{x:'W4',y:2},{x:'W4',y:3},
{x:'W4',y:0},{x:'W4',y:1},{x:'W4',y:1},
{x:'W4',y:4},{x:'W4',y:0},{x:'W4',y:8},
{x:'W4',y:6},{x:'W4',y:5},{x:'W4',y:2},
{x:'W4',y:7},{x:'W4',y:1},{x:'W4',y:9},
{x:'W4',y:1},{x:'W4',y:7},{x:'W4',y:10}]},
  {
  name:"convention",data: [
{x:'W1',y:4},{x:'W4',y:1},{x:'W4',y:10},
{x:'W2',y:2},{x:'W2',y:7},{x:'W2',y:5},
{x:'W2',y:1},{x:'W4',y:4},{x:'W4',y:3},
{x:'W3',y:6},{x:'W4',y:2},{x:'W4',y:2},
{x:'W4',y:5},{x:'W4',y:50},{x:'W4',y:0},
{x:'W4',y:3},{x:'W4',y:2},{x:'W4',y:1},
{x:'W4',y:0},{x:'W4',y:6},{x:'W4',y:2},
{x:'W4',y:10},{x:'W4',y:3},{x:'W4',y:7},
{x:'W4',y:6},{x:'W4',y:9},{x:'W4',y:6},
{x:'W4',y:2},{x:'W4',y:1},{x:'W4',y:0},
{x:'W4',y:4},{x:'W4',y:0},{x:'W4',y:2},
{x:'W4',y:1},{x:'W4',y:2},{x:'W4',y:4},
{x:'W4',y:3},{x:'W4',y:5},{x:'W4',y:1},
{x:'W4',y:7},{x:'W4',y:7},{x:'W4',y:3},
{x:'W4',y:0},{x:'W4',y:5},{x:'W4',y:7},
{x:'W4',y:1},{x:'W4',y:8},{x:'W4',y:9},
{x:'W4',y:2},{x:'W4',y:0},{x:'W4',y:2},
{x:'W4',y:8},{x:'W4',y:2},{x:'W4',y:1},
{x:'W4',y:5},{x:'W4',y:0},{x:'W4',y:32}]}]

export default function Home() {
  const[state,setState] = useState<any>(
    [{title:"Contribution Activity",contentList:{
      content1:"2022-12-22 : 책읽기",
      content2:"2022-12-22 : 3시 프로젝트 회의",
      content3:"2022-12-22 : 20시 운동가기",
      content4:"2022-12-22 : 22시 아르바이트"}},
    {title:"Following",avatar:null,
    content:{main:"minseok made 2 in proggress public",date:"on Jan 02,2023"},
    friendContent:{
      content1:"책읽기",
      content2:"10시 네트워크 수업",
      content3:"15시 아르바이트"}}])
  return (
      <main className="mx-16 lg:mx-28 mt-8 mb-20 lg:my-8 text-xs lg:text-md font-bold grid grid-cols-1">
    
    <section className="flex" id="button_part">
    <div className="border-2 p-1 px-4 rounded-lg shadow-md border-gray-300 mx-1">2022.12.19~2022.12.25</div>
      <select name ="week" className="border-2 rounded-lg shadow-md border-gray-300 p-1 px-2 mx-1 outline-none">
        <option value="1week">1week</option>
        <option value="2week">2week</option>
        <option value="3week">3week</option>
        <option value="4week">4week</option>
      </select>
      <select name ="category" className="rounded-lg border-gray-300 shadow-md p-1 px-2 mx-1 border-2 outline-none">
        <option value="c">카테고리</option>
      </select>
    </section>

    <section className="flex mt-2 lg:mt-5 flex-col lg:flex-row lg:[&>*:nth-child(even)]:mx-5" id="list_prat">
      {[{key:"To Do" , rest:[
        {title:"SpringBoot 2강 듣기",category:"Study",date:"2022.12.01~2022.12.31",level:"High"},
        {title:"헬스장 가기",category:"Daily",date:"2022.12.01~2022.12.31",level:"Medium"},
        {title:"쓰레기 버리기",category:"Study",date:"2022.12.01~2022.12.31",level:"Low"}]},
        {key:"In Progress" , rest:[
        {title:"React 5강 듣기",category:"Study",date:"2022.12.01~2022.12.31",level:"High"},
        {title:"다이어리 쓰기",category:"Daily",date:"2022.12.01~2022.12.31",level:"Medium"}]},
        {key:"Done" , rest:[{title:"React 5강 듣기",category:"Study",date:"2022.12.01~2022.12.31",level:"High"}]}
    ].map((item,index)=>{return(<div key={index} 
className="scrollbar-hide p-3 shadow-xl border-2 border-gray-300 w-[75vw] my-2 lg:my-0 md:w-[87vw] 2xl:w-[40vw] lg:w-[27vw] h-[30vh] lg:h-[48vh] max-h-[48vh] rounded-lg overflow-auto">
      <div className="bg-blue-500 text-center py-2 text-white rounded-md">{item.key} ({item.rest.length})</div>
       {item.rest.map((item,index)=>{
        return(<div key={index} className="border-2 border-blue-500 my-2 p-2 rounded-md">
          <div className="ml-2 w-52 overflow-hidden text-ellipsis whitespace-nowrap mb-1">{item.title}</div>
          <div className=" text-[0.1em] flex font-semibold">
            <div className="m-1 bg-blue-500 text-white p-[0.2rem] rounded-lg">{item.category}</div>
            <div className="m-2">{item.date}</div>
            <div className={`m-1 ${item.level==="High"?"bg-red-500":item.level==="Low"?"bg-yellow-400":"bg-green-500"} flex items-center p-1 text-white rounded-md`}>{item.level}</div>
             </div></div>)})} </div>)})}
    </section>

<section className="border-2 border-gray-300 my-5 rounded-lg shadow-xl w-[106%] lg:w-full" id="graph_part">
<div className="mx-8 border-b-2 py-3 flex justify-between">
<div className="text-md lg:text-lg flex items-center">480 done in the year</div>
<div>
<select className="rounded-lg border-gray-300 shadow-md p-1 px-2 mx-1 border-2 lg:text-md outline-none">
  <option>노휘래</option>
  <option>이진이</option>
  <option>최충실</option>
  <option>김민석</option>
</select>
<select name ="category" className="rounded-lg border-gray-300 shadow-md p-1 overflow-hidden px-2 mx-1 border-2 lg:text-md outline-none">
        <option value="c">카테고리</option>
      </select>
</div>
</div>
<div className="overflow-auto max-w-full">
  <div className="lg:w-full w-[150vw]">
  <ApexChart type='heatmap' height={150}
series={heatmapData} 
options={{
   chart:{toolbar:{show:false},type:'heatmap'},legend:{show:false},
   xaxis:{labels:{show:false},tooltip:{enabled:false},axisTicks:{show:false}},
   yaxis:{labels:{show:false}},
   tooltip:{x:{show:false},y:{title:{formatter:(tr)=>{return `${tr}`}}}},
   dataLabels:{enabled:false},
   plotOptions:{heatmap:{enableShades:false,radius:5,
    colorScale:{
ranges:[
{from:0,to:0,color:"rgb(235, 235, 235)"},
{from:1,to:2,color:"rgb(163, 254, 153)"},
{from:3,to:4,color:"rgb(130, 225, 119)"},
{from:5,to:6,color:"rgb(41, 179, 82)"},
{from:7,to:8,color:"rgb(33, 132, 62)"},
{from:9,to:10,color:"rgb(21, 83, 40)"},
{from:11,to:100000,color:"rgb(21, 83, 40)"}

]
   }}}
}}/>
  </div>

</div>


</section>

<section id="log and button" className="flex flex-col">
{state.map((item:any,index:number)=>{return<div key={index} className=" w-[106%] lg:w-full border-2 border-gray-300 rounded-lg shadow-xl my-3 p-4">
<div className="text-lg mb-2">{item.title}</div>
{item?.contentList?<div className="border-l-2 border-gray-300 pl-2">{Object.keys(item.contentList).map((cl,index)=>{
//@ts-ignore
  return<div key={index} className="my-1">{item.contentList[cl]}</div>})}
</div>:null}
{item?.content?<div className="flex">
  {item.avatar?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>} 
<div className="ml-2">
<span className="ml-3">{item.content.main}</span>
<span className="text-gray-400">&nbsp;{item.content.date}</span>
<div className="border-2 border-gray-300 rounded-lg p-1 mt-3 ml-4 w-[30vw] lg:w-[70vw]">{Object.keys(item.friendContent).map((fcl,index)=>{
  return(<div key={index} className="my-2">
{/* @ts-ignore */}
{item.friendContent[fcl]}
</div>)})}</div>
</div>
</div>:null}
</div>})}
<button className="bg-blue-500 rounded-lg p-1 mt-2 text-white hover:bg-blue-400 text-lg"
onClick ={()=>{
  setState((state:any)=>[...state,...[{title:"Contribution Activity",contentList:{
    content1:"2022-12-22 : 책읽기",
    content2:"2022-12-22 : 3시 프로젝트 회의",
    content3:"2022-12-22 : 20시 운동가기",
    content4:"2022-12-22 : 22시 아르바이트"}},
  {title:"Following",avatar:12,
  content:{main:"hwirae made 2 in proggress public",date:"on Jan 02,2023"},
  friendContent:{
    content1:"책읽기",
    content2:"10시 네트워크 수업",
    content3:"15시 아르바이트",
  }}]])}}>more &#8744;</button>
</section>

      </main>
      )}
