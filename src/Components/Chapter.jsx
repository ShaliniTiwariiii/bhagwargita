
import React, {useState, useEffect} from 'react'
import Carousels from './Carousels'
import { useSpeechSynthesis } from "react-speech-kit"
import Footer from './Footer';

import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import {completedAtom,modeAtom}from '../Atom'
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';





function Chapter() {
  const [data, setData] = useState([]);
  

  // states to hold data of a chapter
  const [chapter_number, setChapter_number] = useState(0);
  const [verses_count, setVerses_count] = useState(0);
  const [nameHi, setNameHi] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [summaryHi, setSummaryHi] = useState("");
  const [summaryEn, setSummaryEn] = useState("");
  const [meaningEn, setMeaningEn] = useState("");
  const [meaningHi, setMeaningHi] = useState("");
 

const[ch,setChs]=useState(0)

  const { speak } = useSpeechSynthesis();

  //change the language state of text on user requested

  const [readLang, setReadLang] = useState(true);

  const modeData=useRecoilValue(modeAtom)



const[completed,setCompleted]=useRecoilState(completedAtom)



    useEffect(() => {

    fetch('https://bhagavadgitaapi.in/chapters/?api_key=b11f734eb00d87849')
        .then(
            response => response.json()
        ).then(
            jsonData => {
                setData(jsonData)
                 loadFirstCh(jsonData)
            }
        )
}, [])
   //defining function for updating chapter on change option
   function chapter(event) {
    var chapter = event.target.value   //taking chapter selected by the user
    setChs(Number(event.target.value) )
    setChapter_number(data[chapter].chapter_number)
    setNameHi(data[chapter].name)                 //setting hindi name state for requested chapter
    setNameEn(data[chapter].translation)          //setting english translatd name state for requested chapter
    setVerses_count(data[chapter].verses_count)   //setting verse_count state for requested chapter
    setSummaryHi(data[chapter].summary.hi)       //setting hindi summary  state for requested chapter
    setSummaryEn(data[chapter].summary.en)       //setting english summary state for requested chapter
    setMeaningEn(data[chapter].meaning.en)           //setting english meaning of chapter name
     setMeaningHi(data[chapter].meaning.hi)           //setting hindi meaning of chapter name

}
      //function to setStates for first chapter by default on load
      function loadFirstCh(data){
        setChapter_number(data[0].chapter_number)
        setNameHi(data[0].name)        
        setNameEn(data[0].translation)   
        setVerses_count(data[0].verses_count)  
        setSummaryHi(data[0].summary.hi) 
        setSummaryEn(data[0].summary.en) 
        setMeaningEn(data[0].meaning.en) 
        setMeaningHi(data[0].meaning.hi)}
        function speakFun(){
   

          speak({text:summaryEn})
      }
      function handleStop() {
          window.speechSynthesis.cancel();
        }
        function speakHindi(){
       
              const utterance = new SpeechSynthesisUtterance(summaryHi);
              console.log(utterance)
              utterance.lang = 'hi-IN';
              window.speechSynthesis.speak(utterance);
       
        } 

const chapterCompleted = (chapter) => {
    console.log(chapter)
  const newArr=[...completed];
   newArr[chapter]=!completed[chapter]
    setCompleted(newArr)
 };

console.log(completed)
  return (
    <>
   
    <div className='mainCh' style={modeData?{backgroundColor:'#343434',color:'white'}:{backgroundColor:'white'}}>

       <Carousels/>
       <div style={{marginLeft:'70rem',marginTop:'20rem'}} className="blur"></div>

    
            <div className="Chapter">
                <div className="Heading">
                  <h2 className='Srimad'> Srimad Bhagavad-Gita Summary</h2>
                  <label className='checkbox'>
        <input type="checkbox"className='checkbox' name ={ch} checked={completed[ch]} onChange={()=>chapterCompleted(ch)}/>Completed{ch+1}
      </label> 
                </div>
                <div className="Selectdiv">
                    <select className="Select" aria-label="Default select example" onChange={chapter}>
                        <option type='checkbox' value="0" >Chapter 1</option>
                        <option value="1">Chapter 2</option>
                        <option value="2">Chapter 3</option>
                        <option value="3">Chapter 4</option>
                        <option value="4">Chapter 5</option>
                        <option value="5">Chapter 6</option>
                        <option value="6">Chapter 7</option>
                        <option value="7">Chapter 8</option>
                        <option value="8">Chapter 9</option>
                        <option value="9">Chapter 10</option>
                        <option value="10">Chapter 11</option>
                        <option value="11">Chapter 12</option>
                        <option value="12">Chapter 13</option>
                        <option value="13">Chapter 14</option>
                        <option value="14">Chapter 15</option>
                        <option value="15">Chapter 16</option>
                        <option value="16">Chapter 17</option>
                        <option value="17">Chapter 18</option>
                    </select>
                </div>
                <div className="ReadBtn">
                    <button type="button" className="btns" onClick={() => setReadLang(!readLang)}>{readLang ? "Read in Hindi" : "Read in English"}</button>
                </div>
            </div>

            {/* -----------------------------------------About Chapter--------------------------------------------- */}
            <div className="chDiv">

                <div className="">
                    <h3 className='Ch'>{readLang ? "Chapter" : "अध्याय"} - {chapter_number}</h3>

                    <ul className='Name'>
                        <li className='list-group-item mb-2 fw-bold'>{readLang ? "Name - " + nameEn : "नाम - " + nameHi}</li>
                        <li className='list-group-item mb-2 fw-bold'>{readLang ? "Total Shlokas" : "कुल श्लोक"} -  {verses_count}</li>
                        <li className='list-group-item mb-2 fw-bold'>{readLang ? "Meaning of Name - " + meaningEn : "नाम का अर्थ - " + meaningHi}</li>
                    </ul>
                </div>

             
                <div className="summary">
                    <h3 >{readLang ? "Summary" : "सारांश"}</h3>
                    <div className='summaryDiv'><span className='lines'>{readLang ? (summaryEn) : (summaryHi)}</span>
                   
                   <span className='btns'>{readLang ? <button onClick={speakFun}>Read <VolumeUpOutlinedIcon/></button>:'' }
                    {readLang ?'': <button onClick={speakHindi}>पढ़ो <VolumeUpOutlinedIcon/></button> }
                    <button onClick={handleStop}>Stop <VolumeOffOutlinedIcon/></button>
                   
                   </span>
                    </div>
                    </div>
                   <p  >(Bhagavad Gita, Chapter {chapter_number}) <br />
                   </p> 
                 </div>
                  </div>
    <Footer/></>
  )
}

export default Chapter
