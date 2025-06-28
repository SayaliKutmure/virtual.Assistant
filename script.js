let btn =document.querySelector("#btn")
let content  =document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let textspeak =new SpeechSynthesisUtterance(text)
    textspeak.rate=1
    textspeak.pitch=1
    textspeak.volume=1
    textspeak.lang="en-GB"
    window.speechSynthesis.speak(textspeak)

}
function wishMe(){
    let day =new Date()
    let hours = day.getHours()
    if(hours >=0 && hours <12){
        speak("Good Morning sir")
    }
    else if(hours >=12 && hours <16){
        speak("Good Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
   //wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
  let currentIndex = event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
   

}
btn.addEventListener("click",()=>{
    recognition.start()
      voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
  voice.style.display="block"
    btn.style.display="flex"
  if(message.includes("hello") || message.includes("hey")){
    speak("hello sir , what can i help you ?")
  }
  else if(message.includes("who are you?")){
    speak("I am virtual assistant , created by sayali mam")
  }else if(message.includes("open youtube")){
    speak("opening youtube...")
    window.open("https://www.youtube.com/")

  }
  else if(message.includes("open google")){
    speak("opening google...")
    window.open("https://www.google.com/")

  }
  else if(message.includes("open facebook")){
    speak("opening facebook...")
    window.open("https://www.facebook.com/")

  }
  else if(message.includes("open instagram")  ){
    speak("opening instagram...")
    window.open("https://www.instagram.com/")

  }else if(message.includes("open calculater")){
    speak("opening calculator...")
    window.open("calculator://")

  }
  else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
  }
  else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
  }
  else{
    let finaltext = "this is what i found on internet regarding"+message.replace("shipra","") || message.replace("shifra","")
    speak(finaltext)
    window.open( `https://www.google.com/search?q=${message.replace("shipra"," ")}` )
      
  }

  

}





    
