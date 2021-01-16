import './App.css';
import Profile from './Profile/Profile';
import image from "./img.jpg"


function App() {

const handleName =(fullname) => {
  alert ( fullname)
}

Profile.defaultProps = {
fullname : "Elaa Arfaoui",
bio: "Software Engenieer",
profession:"Full Stack Developper",
img: image,
}

return (
    <div className="App">

  <Profile props={ Profile.defaultProps } 
  handleClick={handleName}> 

  <img  src={ Profile.defaultProps.img} alt="profilepicture "/> 
  
  </Profile>
    </div>
  );
}

export default App;
