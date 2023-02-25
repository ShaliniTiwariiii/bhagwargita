
import React, {useState, useEffect} from 'react'
import Carousels from './Carousels'
import { useSpeechSynthesis } from "react-speech-kit"
import Footer from './Footer';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import {bgAtom, colorAtom ,modeAtom}from '../Atom'
import { useRecoilState } from 'recoil';
import { useSSRSafeId } from '@react-aria/ssr';



const initialCheckboxState = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  };

function Chapter() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // states to hold data of a chapter
  const [chapter_number, setChapter_number] = useState(0);
  const [verses_count, setVerses_count] = useState(0);
  const [nameHi, setNameHi] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [summaryHi, setSummaryHi] = useState("");
  const [summaryEn, setSummaryEn] = useState("");
  const [meaningEn, setMeaningEn] = useState("");
  const [meaningHi, setMeaningHi] = useState("");
 

const[ch,setChs]=useState(1)
// const[mode,setMode]=useState(false)
  const { speak } = useSpeechSynthesis();
  //change the language state of text on user requested
  const [readLang, setReadLang] = useState(true);
//   const[color,setColor] =useState('#343434')
//   const[bg,setBg] =useState('white')
// using recoil
// const[backgrounds,setBackground] = useRecoilState(bgAtom)
// const[colors,setColors] = useRecoilState(colorAtom)

const[modes,setmodes]=useRecoilState(modeAtom)
const [checkboxState, setCheckboxState] = useState(
    JSON.parse(localStorage.getItem('checkboxState')) || initialCheckboxState
  );

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
    //var ch = event.target.value   //taking chapter selected by the user
   setChs(event.target.value  )
    setChapter_number(data[ch].chapter_number)
    setNameHi(data[ch].name)                 //setting hindi name state for requested chapter
    setNameEn(data[ch].translation)          //setting english translatd name state for requested chapter
    setVerses_count(data[ch].verses_count)   //setting verse_count state for requested chapter
    setSummaryHi(data[ch].summary.hi)       //setting hindi summary  state for requested chapter
    setSummaryEn(data[ch].summary.en)       //setting english summary state for requested chapter
    setMeaningEn(data[ch].meaning.en)           //setting english meaning of chapter name
     setMeaningHi(data[ch].meaning.hi)           //setting hindi meaning of chapter name

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
              utterance.lang = 'hi-IN';
              window.speechSynthesis.speak(utterance);
       
        } 

function handleMode(){
setmodes(!modes)
}

 useEffect(() => {
    localStorage.setItem('checkboxState', JSON.stringify(checkboxState));
  }, [checkboxState]);

  const handleCheckboxChange = (event) => {
  
    const { name, checked } = event.target;
    setCheckboxState((prevState) => ({ ...prevState, [name]: checked }));
 
  };
console.log(checkboxState)
  return (
    <>
    {/* <div className='mainCh' style={{backgroundColor:bg,color:color}}> */}
    <div className='mainCh' style={modes?{backgroundColor:'black',color:'white'}:{backgroundColor:'white'}}>

       <Carousels/>
       <div style={{marginLeft:'70rem',marginTop:'20rem'}} className="blur"></div>

    
            <div className="Chapter">
                <div className="Heading">
                    <h2 className='Srimad'> Srimad Bhagavad-Gita Summary</h2>
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

                <button className='modeBtn' onClick={handleMode}> {modes?   <LightModeIcon  />:<NightlightIcon/>}</button> 
               
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
                  
<div className='checkbox' style={{marginBottom:'1rem'}}>
        <label>
        <input type="checkbox" name ='checkbox' checked={checkboxState.checkbox1} onChange={handleCheckboxChange}/>Checkbox1
      </label> 
      <label> <input type="checkbox"name="checkbox2" checked={checkboxState.checkbox2} onChange={handleCheckboxChange}/>Chapter 2
      </label>
      <label>
        <input type="checkbox"name="checkbox3"checked={checkboxState.checkbox3}onChange={handleCheckboxChange}/>Chapter 3
      </label>
      <label>
        <input type="checkbox"name="checkbox4"checked={checkboxState.checkbox4}onChange={handleCheckboxChange}/>Chapter 4
      </label>
      <label>
        <input type="checkbox"name="checkbox6"checked={checkboxState.checkbox6} onChange={handleCheckboxChange}/>Chapter 6
      </label>
      <label>
        <input type="checkbox" name="checkbox7"checked={checkboxState.checkbox7}onChange={handleCheckboxChange} /> Chapter 7
      </label>
      <label>
        <input type="checkbox" name="checkbox8"checked={checkboxState.checkbox8}onChange={handleCheckboxChange}/>Chapter 8
      </label>
      <label>
        <input type="checkbox"name="checkbox9"checked={checkboxState.checkbox9}onChange={handleCheckboxChange} />Chapter 9
      </label>

      <label>
        <input type="checkbox" name="checkbox10"checked={checkboxState.checkbox10} onChange={handleCheckboxChange}/>Chapter 10
      </label>

      <label>
        <input type="checkbox" name="checkbox11"checked={checkboxState.checkbox11}onChange={handleCheckboxChange}/>Chapter 11
      </label>
      <label>
        <input type="checkbox"name="checkbox12"checked={checkboxState.checkbox12}onChange={handleCheckboxChange}/> Chapter 12
      </label>
      <label>
        <input type="checkbox"name="checkbox13"checked={checkboxState.checkbox13}onChange={handleCheckboxChange}/>Chapter 13
      </label>
      <label>
        <input type="checkbox"name="checkbox14"checked={checkboxState.checkbox14}onChange={handleCheckboxChange} />Chapter 14
      </label>
      <label>
        <input type="checkbox"name="checkbox15"checked={checkboxState.checkbox15}onChange={handleCheckboxChange}/>Chapter 15
      </label>
      <label>
        <input type="checkbox"name="checkbox16"checked={checkboxState.checkbox16}onChange={handleCheckboxChange}/> Chapter 16
      </label>
      <label>
        <input type="checkbox"name="checkbox17"checked={checkboxState.checkbox17}onChange={handleCheckboxChange}/> Chapter 17
      </label>
      <label>
        <input type="checkbox"name="checkbox18"checked={checkboxState.checkbox18}onChange={handleCheckboxChange}/> Chapter 18
      </label>
      </div>
        </div>
    <Footer/></>
  )
}

export default Chapter
