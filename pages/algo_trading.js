import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import Button from "../components/Button";

const default_api_url = 'https://upstox-feed.mkmukul.com'

export default function AlgoTradnig() {
  const router = useRouter();
  const [algo_secret, setAlgoSecret] = useState('')
  const [algo_id, setAlgoID] = useState('')
  const [api_url, setApiURL] = useState('')
  const [algoLogsData, setAlgoLogsData] = useState({})
  const [isDataUpdate, setIsDataUpdate] = useState(0)
  const [algoLogs, setAlgoLogs] = useState([])
  const [showButton, setShowButton] = useState(false)
  const [isChangeCmdVar, setIsChangeCmdVar] = useState(false)
  const [cmdVarName, setCmdVarName] = useState('')
  const [cmdVarValue, setCmdVarValue] = useState('')
  const [search, setSearch] = useState('')
  const scrollRef = useRef();

  useEffect(() => {
    if(router.query.algo_id){
      setAlgoID(router.query.algo_id)
      if(router.query.api_url){
        setApiURL(router.query.api_url)
      } else {
        setApiURL(default_api_url)
      }
      if(router.query.algo_secret){
        setAlgoSecret(router.query.algo_secret)
      }
      // router.replace({
      //   pathname: '/algo_trading/'
      // })
    }
  },[router]);

  useEffect(() => {
    if (algo_id && api_url) {
      fetch(`${api_url}/all-logs?algo_id=${algo_id}`)
      .then((res) => res.json())
      .then((data) => {
        setAlgoLogsData(data)
        setIsDataUpdate(prev=>prev=prev+1)
      })
      setInterval(() => {
        fetch(`${api_url}/logs?algo_id=${algo_id}`)
        .then((res) => res.json())
        .then((data) => {
          setAlgoLogsData(data)
          setIsDataUpdate(prev=>prev=prev+1)
        })
      }, 1000);
    }
  },[algo_id, api_url]);

  useEffect(() => {
    if (algoLogsData['status'] === 'success'){
      if(! algoLogs.length){
        if (algoLogsData['logs'].length){
          setAlgoLogs(algoLogsData['logs'])
        }
      } else {
        const algoLogs_len = algoLogs.length
        let last_log = algoLogs[algoLogs_len-1]
        const new_logs = []
        for (let i = 0; i < algoLogsData['logs'].length; i++) {
          const log = algoLogsData['logs'][i];
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
  }, [algoLogs, showButton])
  
  useEffect(()=>{
    setIsChangeCmdVar(prev=>showButton?false:prev)
  }, [showButton])
  
  useEffect(()=>{
    setCmdVarName('')
    setCmdVarValue('')
    setShowButton(prev=>isChangeCmdVar?false:prev)
  }, [isChangeCmdVar])

  const sendCommand = (command, data={})=>{
    if (api_url && algo_secret && algo_id) {
      const reqOpn = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          algo_secret: algo_secret,
          algo_id: algo_id,
          cmd: command,
          data:data,
        })
      }
      fetch(`${api_url}/ext-cmd`, reqOpn)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if(data['status'] === 'success'){
            setShowButton(false)
            setCmdVarName('')
            setCmdVarValue('')
            setIsChangeCmdVar(false)
          }
        })
    }
  }

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

        <div className=" w-full rounded-t font-semibold bg-gray-900 flex justify-center">
        <div className=" px-2 self-center text-gray-50 pt-1 text-lg md:text-2xl">{`Algo ID = ${algo_id}`}</div>
        </div>
        {algoLogs.length > 10?<div className=" w-full block relative">
          <input className={`${search?" bg-gray-600":" bg-gray-700"} z-10 text-white px-2 py-1 absolute right-2 top-2 rounded border-0 focus:outline-none`}
          placeholder="search logs"
          onChange={(e)=>{setSearch(e.target.value)}}
          />
        </div>:<></>}
        <div className=" z-0 rounded-b bg-gray-900 w-full h-fit max-h-full px-1 md:px-2 lg:px-4 py-2 overflow-auto">

        {algoLogs.map((log,ind)=>{
          const time_stamp = log.asctime.split(' ')[1].split(',')[0]
          const level_color = log.levelname == "INFO" ? "text-green-200 opacity-90" : log.levelname == "WARNING" ? "text-orange-300" : "text-red-500 font-semibold"
          if(search){
            const search_string = `${time_stamp} ${log.levelname} ${log.message}`
            if(!search_string.toLowerCase().includes(search.toLowerCase())){
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
        
        <div className=" p-1 w-full">
        {algo_secret?<>
          <div className=" w-full gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <div onClick={()=>setShowButton(prev=>!prev)}>
              <Button name={showButton?"Hide Button":"Show Button"}/>
            </div>
            <div onClick={()=>setIsChangeCmdVar(prev=>!prev)}>
              <Button name="Change Value"/>
            </div>
            <div onClick={()=>sendCommand("show_pnl")}>
              <Button name="PnL(MTM)"/>
            </div>
          </div>
        </>:<></>}
        {showButton?<>
          <div className=" p-1 w-full gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              <div onClick={()=>sendCommand("take_profit_now")}>
                <Button name="Take Profit"/>
              </div>
              <div onClick={()=>sendCommand("square_off_now")}>
                <Button name="Square Off"/>
              </div>
              <div onClick={()=>sendCommand("pause_now")}>
                <Button name="Pause"/>
              </div>
              <div onClick={()=>sendCommand("resume_now")}>
                <Button name="Resume"/>
              </div>
            </div>
          </>:<></>}

          {isChangeCmdVar?<>
            <div className=" m-1 p-1 grid gap-1 border-2 border-textSecondary rounded w-fit">
              <input className={`${cmdVarName?" ":" "} bg-bgSecondary text-textPrimary px-2 py-1 rounded border-0 focus:outline-none`}
              placeholder="variable name"
              value={cmdVarName}
              onChange={(e)=>{setCmdVarName(e.target.value)}}
              />
              <input className={` bg-bgSecondary text-textPrimary px-2 py-1 rounded border-0 focus:outline-none`}
              placeholder="value"
              value={cmdVarValue}
              onChange={(e)=>{setCmdVarValue(e.target.value)}}
              />
              {cmdVarName&&cmdVarValue?<>
                  <div className=" w-fit" onClick={()=>{let data={};data[cmdVarName]=cmdVarValue;sendCommand("change_value",data);}}>
                    <Button name="Send Value"/>
                  </div>
                </>:<></>}
            </div>
          </>:<></>}

        </div>

      </section>
    </>
  );
}
