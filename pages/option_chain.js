import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import Button from "../components/Button";

const default_api_url = 'https://upstox-feed.mkmukul.com'

export default function AlgoTradnig() {
  const router = useRouter();
  const [algo_secret, setAlgoSecret] = useState('')
  const [algo_id, setAlgoID] = useState('')
  const [api_url, setApiURL] = useState('')
  const [tradingsymbol, setTradingsymbol] = useState('')
  const [rawOptionChain, setRawOptionChain] = useState([])
  const [optionChain, setOptionChain] = useState({})
  const [expiry, setExpiry] = useState('2023-11-01');
  const [expiries, setExpiries] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    if(router.query.algo_id){
      setAlgoID(router.query.algo_id)
      if(router.query.api_url){
        setApiURL(router.query.api_url)
      } else {
        setApiURL(default_api_url)
      }
      if(router.query.algo_secret && router.query.tradingsymbol){
        setAlgoSecret(router.query.algo_secret)
        setTradingsymbol(router.query.tradingsymbol)
      }
      // router.replace({
      //   pathname: '/algo_trading/'
      // })
    }
  },[router]);

  useEffect(() => {
    if(tradingsymbol){
        setInterval(() => {
            getOptionChain();
        }, 1000);
    }
  },[tradingsymbol]);

  useEffect(() => {
    var strike = {}
    for (let i = 0; i < rawOptionChain.length; i++) {
        const option = rawOptionChain[i];
        if(!strike[option.instrument.strike] && option.instrument.expiry === expiry){
            strike[option.instrument.strike] = {};
        }
        if(option.instrument.option_type == "CE" && option.instrument.expiry === expiry){
            strike[option.instrument.strike]['CE'] = option.data.ff.marketFF;
            strike[option.instrument.strike]['CE'].tradingsymbol = option.instrument.tradingsymbol;
            strike[option.instrument.strike]['CE'].instrument_key = option.instrument.instrument_key;
        } else 
        if (option.instrument.option_type == "PE" && option.instrument.expiry === expiry) {
            strike[option.instrument.strike]['PE'] = option.data.ff.marketFF;
            strike[option.instrument.strike]['PE'].tradingsymbol = option.instrument.tradingsymbol;
            strike[option.instrument.strike]['PE'].instrument_key = option.instrument.instrument_key;
        }
    }
    setOptionChain(strike)
  },[rawOptionChain, expiry]);

  const getOptionChain = ()=>{
    if (api_url && algo_secret && algo_id && tradingsymbol) {
      const reqOpn = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          algo_secret: algo_secret,
          algo_id: algo_id,
          tradingsymbol: tradingsymbol,
        })
      }
      fetch(`${api_url}/option-chain`, reqOpn)
        .then((res) => res.json())
        .then((data) => {    
          if(data['status'] === 'success'){
            setRawOptionChain(data['data'])
          }
        })
    }
  }

  return (
    <>
      <section
        id="contact"
        className="mx-auto pt-[75px] pb-1 md:pt-[100px] flex flex-col justify-center items-start max-w-[1060px]"
      >
        <div className="flex justify-center w-full mt-4 mb-6">
          <div
            className={` hidden md:block mx-6 w-[100px] h-[1px] self-center bg-textPrimary`}
          ></div>
          <h1 className=" text-3xl md:text-4xl font-bold">Option Chain</h1>
          <div
            className={` hidden md:block mx-6 w-[100px] h-[1px] self-center bg-textPrimary`}
          ></div>
        </div>

        {/* <div className=" w-full grid grid-cols-4">
            {optionChain.map((val,ind)=>{
                // console.log(val)
                // return <div key={val.instrument_key}>
                //     {val.instrument_key}
                // </div>
                return<></>
                
            })}
        </div> */}

        <div className=" bg-gray-900 w-full rounded">
            <div className=" px-2 py-1 grid grid-cols-11">
                <div className=" justify-center gap-2 grid grid-cols-3 col-start-1 col-end-6">
                    <div className=" px-1 flex flex-col items-start">
                      <div>OI &</div>
                      <div>Change</div>
                    </div>
                    <div className=" px-1 flex items-center justify-start">Volume</div>
                    <div className=" px-1 flex items-center justify-start">LTP</div>
                </div>
                <div className=" flex items-center justify-center">Strike</div>
                <div className=" items-center gap-2 grid grid-cols-3 col-start-7 col-end-12">
                    <div className=" px-1 flex items-center justify-end">LTP</div>
                    <div className=" px-1 flex items-center justify-end">Volume</div>
                    <div className=" px-1 flex flex-col items-end">
                      <div>OI &</div>
                      <div>Change</div>
                    </div>
                </div>
            </div>
        
            <div className=" py-1 max-h-[640px] overflow-auto">
                {Object.keys(optionChain).sort().map((strike,ind)=>{
                    let ce_option = optionChain[strike].CE
                    let pe_option = optionChain[strike].PE
                    return <div key={strike} className=" m-1 grid grid-cols-11">
                        <div className=" bg-white bg-opacity-20  justify-center grid grid-cols-3 col-start-1 col-end-6">
                            <div className=" px-1 flex flex-col items-start">
                              <div>{ce_option.eFeedDetails.oi}</div>
                              <div>{ce_option.eFeedDetails.oi - ce_option.eFeedDetails.poi}</div>
                            </div>
                            <div className=" px-1 flex items-center justify-start">{ce_option.eFeedDetails.vtt}</div>
                            <div className=" px-1 flex items-center justify-start">{ce_option.ltpc.ltp}</div>
                        </div>
                        <div className=" flex items-center justify-center">{strike}</div>
                        <div className=" bg-white bg-opacity-20 items-center grid grid-cols-3 col-start-7 col-end-12">
                            <div className=" px-1 flex items-center justify-end">{pe_option.ltpc.ltp}</div>
                            <div className=" px-1 flex items-center justify-end">{pe_option.eFeedDetails.vtt}</div>
                            <div className=" px-1 flex flex-col items-end">
                              <div>{pe_option.eFeedDetails.oi}</div>
                              <div>{ce_option.eFeedDetails.oi - pe_option.eFeedDetails.poi}</div>
                            </div>
                        </div>
                    </div>
                    
                })}
            </div>
        </div>
      </section>
    </>
  );
}
