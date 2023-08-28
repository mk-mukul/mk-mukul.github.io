import { useState, useEffect, useRef } from "react";

const log_url = 'https://upstox-feed.mkmukul.com/logs'
export default function AlgoTradnig() {
    const [algoLogsData, setAlgoLogsData] = useState({})
    const [isDataUpdate, setIsDataUpdate] = useState(0)
    const [algoLogs, setAlgoLogs] = useState([])
    const [scanning, setScanning] = useState('')
    const [search, setSearch] = useState('')
    const scrollRef = useRef();

    useEffect(() => {
      setInterval(() => {
        fetch(log_url)
        .then((res) => res.json())
        .then((data) => {
          setAlgoLogsData(data)
          setIsDataUpdate(prev=>prev=prev+1)
        })
      }, 1000);
    },[]);
      
    useEffect(() => {
      if (algoLogsData['status'] === 'success'){
        if(! algoLogs.length){
          setAlgoLogs(algoLogsData['alog_logs'])
        } else {
          const algoLogs_len = algoLogs.length
          let last_log = algoLogs[algoLogs_len-1]
          const new_logs = []
          for (let i = 0; i < algoLogsData['alog_logs'].length; i++) {
            const log = algoLogsData['alog_logs'][i];
            if(log.asctime < last_log.asctime){
              continue
            } else {
              if (log.asctime === last_log.asctime && log.levelname === last_log.levelname && log.message === last_log.message ){
                continue
              } else {
                new_logs.push(log)
              }
            }
          }
          if(new_logs.length){
            setAlgoLogs([
              ...algoLogs,
              ...new_logs,
            ])
          }
        }
      }
    },[isDataUpdate]);
    
    useEffect(()=>{
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [algoLogs])

  return (
    <>
      <section
        id="contact"
        className="mx-auto pt-[75px] pb-1 h-screen md:pt-[100px] flex flex-col justify-center items-start max-w-[1060px]"
      >
        <div className="flex justify-center w-full mt-4 mb-6">
          <div
            className={` hidden md:block mx-6 w-[100px] h-[1px] self-center bg-textPrimary`}
          ></div>
          <h1 className=" text-3xl md:text-4xl font-bold">Trading Logs</h1>
          <div
            className={` hidden md:block mx-6 w-[100px] h-[1px] self-center bg-textPrimary`}
          ></div>
        </div>

        <div className=" w-full block relative">
          <input className={`${search?"opacity-95":"opacity-80"} text-gray-900 px-2 py-1 absolute right-2 top-2 rounded border-0 focus:outline-none`}
          placeholder="search logs"
          onChange={(e)=>{setSearch(e.target.value)}}
          />
        </div>
        <div className=" rounded bg-gray-900 w-full h-fit max-h-full px-1 md:px-2 lg:px-4 py-2 overflow-auto">

        {algoLogs.map((log,ind)=>{
          const time_stamp = log.asctime.split(' ')[1].split(',')[0]
          const level_color = log.levelname == "INFO" ? "text-green-200 opacity-90" : log.levelname == "WARNING" ? "text-orange-300" : "text-red-500 font-semibold"
          if(search){
            const search_string = `${time_stamp} ${log.levelname} ${log.message}`
            if(!search_string.toLowerCase().includes(search)){
              return<></>
            }
          }
          return(
          <div key={ind} className={` text-sm`}>
            <span className=" inline-block w-14 md:w-16 text-blue-200 opacity-90 mr-1">{time_stamp} </span>
            <span className={`${level_color} inline-block md:w-16 mr-1`}>{`${log.levelname}`}</span>
            <span className=" text-gray-100 opacity-90 ">{`- ${log.message}`}</span>
          </div>
          )
        })}
        <div className=" text-gray-100 opacity-75 p-1 text-sm" ref = {scrollRef}>{`scanning for new logs...`}</div>
        </div>
        
      </section>
    </>
  );
}
