import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  const [showIntro, setShowIntro] = useState(true);

  const [timer, setTimer] = useState(15);
  const [slide, setSlide] = useState(0);

  

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 15000);
  });

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
  });

  //keep track of the checkboxes checked
  

  
  

  return (
    <div className='container'>
      {showIntro ? <div>
        <TypeAnimation sequence={[
          "🥖🍞 Födelsedags quiz 🥖🍞",
          1000,
          "🥖🍞 Quiz d'anniversaire 🥖🍞",
          1000,
          "🥖🍞 Syntymäpäivä tietokilpailu 🥖🍞",
          1000,
        ]}
        wrapper="h1"
        repeat={Infinity}
        style={{ fontSize: "2rem" }}
        />
        <div>
          <h2>Fatta hur lite jag har på jobbet för att programmera detta.</h2>
          <h1>Redo? {timer}s</h1>
        </div>
      </div> 
      : slide === 0 ? <Quiz1 setSlide={setSlide} /> 
      : slide === 1 ? <ShowMessageSlide slide={slide}setSlide={setSlide} message='Helt ärligt orkar jag inte programmera så att jag håller koll på vad du gissade. Men du tror väl inte att du seriöst kommer att få något av det?'/> 
      : slide === 2 ? <Quiz2 setSlide={setSlide} />
      : slide === 3 ? <ShowMessageSlide slide={slide} setSlide={setSlide} message='Jag vet inte varför jag gör det här, jag har så tråååkiiiiiiigt'/>
      : slide === 4 ? <Quiz3 slide={slide} setSlide={setSlide} />
      : slide === 5 ? <Quiz4 setSlide={setSlide} />
      : <TypeAnimation sequence={["Du klarade det, du har vunnit en resa till Paris!", 500, "Skojar bara, jag har gömt din present utanför din dörr i en Xtra påse", 500]} speed={50} cursor={false} wrapper="h1" repeat={0} style={{ fontSize: "2rem" }}/>
      }
      <ToastContainer />
    </div>
  )
}

function ShowMessageSlide({message, setSlide, slide}: {message: string, setSlide: (slide: number) => void, slide: number}) {
  setTimeout(() => {
    setSlide(slide + 1);
  }, 5000);

  return (
    <div className='input'>
      <h2>{message}</h2>
    </div>
  )
}

function Quiz1({setSlide}: {setSlide: (slide: number) => void}) {
  // Your code for Quiz1 goes here

  return (
    <div className='input'>
        <h2>Vad tror du att du har fått som födelsedagspresent?</h2>
        {//create 3 checkboxes}
        }
        <div>
          <input className='presentInput' type="checkbox" id="present1" name="present1" value="present1" />
          <label htmlFor="present1">En ny cykel</label>
        </div>
        <div>
          <input className='presentInput' type="checkbox" id="present2" name="present2" value="present2" />
          <label htmlFor="present2">En ny bil</label>
        </div>
        <div>
          <input className='presentInput' type="checkbox" id="present3" name="present3" value="present3" />
          <label htmlFor="present3">En ny dator</label>
        </div>
        <button onClick={() => {
          const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
          if (checkboxes.length === 0) {
            toast.error('Du måste välja minst en present');
          }
          else{
            setSlide(1);
          }
        }}>
          Skicka
        </button>
        <h3>Btw, jag åt precis bacon, prinskorv och potatis. Det var ganska gott.</h3>
      </div>
  )
}

function Quiz2({setSlide}: {setSlide: (slide: number) => void}) {

  setTimeout(() => {
    setSlide(3);
  }, 5000);

  return (
    <div>
      <h1>Jag har gömt din present någonstans i Hovden. Tro mig, det är värt det.<br></br>Här är en bild på din present:</h1>
      <img src='https://images.pexels.com/videos/6923433/pexels-photo-6923433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
    </div>
  )
}

function Quiz3({setSlide, slide}: {setSlide: (slide: number) => void, slide: number}) {
  return(
    <div>
      <h2>
      Pourquoi certaines personnes parlent cette langue ?
      Comme vous le parlez, je pense que nous pouvons aborder la deuxième question en français.
      <br/>
      <br/>



Quand la Tour Eiffel a-t-elle été construite ?
    </h2>
    <input id='yearinput' placeholder='Année: '></input>
    <button onClick={() => {
      const input = document.getElementById('yearinput') as HTMLInputElement;
      if (input.value === '1889') {
        setSlide(slide + 1);
      }
      else{
        toast.error('Faux');
      }
    }
  }>
     Soumettre 
  </button>

      
    </div>
  )
}

function Quiz4({setSlide}: {setSlide: (slide: number) => void}) {
  return(
    <div>
      <h2>Vad betyder Hyppytyynytyydytys på svenska?</h2>
      <input id='answerinput' placeholder='Svar: '></input>
      <button onClick={() => {
        const input = document.getElementById('answerinput') as HTMLInputElement;
        const answer: string = 'Hoppande kudde tillfredsställelse'
        if (input.value.toLowerCase() === answer.toLowerCase()) {
          setSlide(6);
        }
        else{
          toast.error('Faux');
        }
      }
    }>
       Skicka
       </button>
    </div>
  )
}

export default App
