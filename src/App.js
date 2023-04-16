import logo from './logo.svg';
import './App.css';
import { usersRef } from './firebase/Firebase';
import { addDoc } from 'firebase/firestore'
import swal from 'sweetalert';
import { Audio } from 'react-loader-spinner';

function App() {
  document.write = "Gud Services...";

  const additem = async () => {

    try {
      console.log("COntrol is here.....")
      await addDoc(usersRef, { name: "Sandesh Lamichhane" });
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
    catch (e) {
      alert(e);
    }

  }

  return (
    <div>
      <h1 className=" bg-red-200 text-9xl  font-bold underline">
        <button onClick={additem}>Add into firebase</button>
        <Audio />
      </h1>
    </div>
  );
}

export default App;
