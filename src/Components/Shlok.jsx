import React, { useState, useEffect } from 'react';
import krishna from '../Assets/krishna.png'
import Footer from './Footer';
import { useRecoilValue } from 'recoil';
import {bgAtom,colorAtom,modeAtom} from '../Atom'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
export default function Shlock() {

    // const [url,setUrl] = useState("https://bhagavadgitaapi.in/slok/1/1/")
    const [ch, setCh] = useState(1)                             //chapter number
    const [shlockNo, setShlockNo] = useState(1)        //shlock number
    const [shlock, setShlock] = useState()              //original shlock in Sanskrit
    const [shlockHi, setShlockHi] = useState()       //translated shlock in Hindi
    const [shlockEn, setShlockEn] = useState()      //translated shlock in English
    const [TS, setTS] = useState(47)                    //total shlock in chapter state

    //------------------------- Fetching Geeta Shlok API---------------------------------//
// const bgData=useRecoilValue(bgAtom)
// const colorData=useRecoilValue(colorAtom)
const modeData=useRecoilValue(modeAtom)
// console.log(colorData,bgData)
    useEffect(() => {

        fetch("https://bhagavadgitaapi.in/slok/" + ch + "/" + shlockNo + "/")
            .then(
                response => response.json()
            ).then(
                jsonData => {
                    setShlock(jsonData.slok)
                    setShlockHi(jsonData.tej.ht)
                    setShlockEn(jsonData.siva.et)
                }
            )
    }, [ch, shlockNo])


    //json array to store total shlocks in each chapter
    const totalShlockInCh = [
        { "ch": 1, "ts": 47 }, { "ch": 2, "ts": 72 }, { "ch": 3, "ts": 43 }, { "ch": 4, "ts": 42 }, { "ch": 5, "ts": 29 }, { "ch": 6, "ts": 47 }, { "ch": 7, "ts": 30 },
        { "ch": 8, "ts": 28 }, { "ch": 9, "ts": 34 }, { "ch": 10, "ts": 42 }, { "ch": 11, "ts": 55 }, { "ch": 12, "ts": 20 }, { "ch": 13, "ts": 35 }, { "ch": 14, "ts": 27 },
        { "ch": 15, "ts": 20 }, { "ch": 16, "ts": 24 }, { "ch": 17, "ts": 28 }, { "ch": 18, "ts": 78 }
    ]

    function chapterChange(event){
        let chapter = event.target.value
        setCh(chapter)
        setTS(totalShlockInCh[chapter-1].ts)
    }
 

    return (
        <>
            {/* <div className="shlok " style={{backgroundColor:bgData}}> */}
            <div className="shlok " style={modeData?{backgroundColor:'black'}:{backgroundColor:'white'}}>
                <div className="row">

                    <span className="image">
                    
                        <img src={krishna} alt='Krishna_Image' className='d-block mx-auto'></img>

                    </span>
                    {/* <button onClick={handleMode}> {mode? <NightlightIcon/> : <LightModeIcon  />}</button> */}
                    <span className="select">
                        <select className="shlokSelect"  onChange={chapterChange} >

                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((i) => (
                                    <option  value={i} key={i}>Chapter {i}</option>
                                ))
                            }

                        </select>
                    </span>

                    <div className="shlokNumber">
                        <label className='label'>Shlok No </label>
                        <input type="number" className="inp" defaultValue={1} min= '1' max={TS} onChange={(event) => setShlockNo(event.target.value)}></input>
                    </div>
                </div>


                {/* ----------------------Shlock Section--------------------- */}
                <div className="row">
                    <div className='shree'>
                        <h1 className='shlock-title display-6 fw-bold lh-base'>||श्रीमद्‍भगवद्‍-गीता {ch}.{shlockNo}||</h1>
                    </div>
                 <div className='txtDiv'>
                    <div className="shloks" style={{ color: "darkgoldenrod" }} >
                        <h4 className='fw-bold'>{shlock}</h4>
                    </div>

                    <div className="col-md-8 mt-5 mx-auto text-center fw-bolder fs-5" style={{ color: '#FF7D19' }} >
                        <p>{shlockHi}</p>
                    </div>

                    <div className="col-md-8 mt-3 mx-auto text-center fw-bolder fs-5" style={{ color: "#FF7D19" }} >
                        <p>{shlockEn}</p>
                    </div>

                    <p className='bhagwat'>(Bhagavad Gita, Chapter {ch}, Shloka {shlockNo}) <br />
                        
                    </p>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
} 
