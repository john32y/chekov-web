import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../App";

const firebaseConfig = {
    apiKey: "AIzaSyD2uaKf23NLED6CSKY5MJfksj_UaG4J6Ho",
    authDomain: "chekov-jct.firebaseapp.com",
    projectId: "chekov-jct",
    storageBucket: "chekov-jct.appspot.com",
    messagingSenderId: "1005223130203",
    appId: "1:1005223130203:web:afe034afb36f71299ebb7e"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export default function SignUpForm () {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then(res => {
            setUser(res.user);
            navigate("/");
        })
        .catch(err => alert(err.message))
    }

const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then(res => {
        setUser(res.user);
        navigate("/");
    })
    .catch(err => alert(err.message))

}

    return(
        <section className="bg-violet-950 p-6 rounded-lg max-w-[420px] mx-auto">
        <form onSubmit={handleSignup}className="flex flex-col items-start justify-around min-h-[30vh]">
           <label htmlFor="email" className="flex justify-between w-full ">
            Email 
            <input type="email"  name="email" className="rounded-lg border-transparent border border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 text-base focus:-2 focus:ring-violet-600 focus:border-transparent"/>
           </label>
           
           
           <label htmlFor="password" name="password" className="flex justify-between w-full " >
           Password
           <input type="password"  name="password" className="rounded-lg border-transparent border border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 text-base focus:-2 focus:ring-violet-600 focus:border-transparent"/>
           </label>
            
            <input type="submit" value="Sign Up" className="bg-green-300 text-violet-950 py-2 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-green-500 hover:shadow-sm cursor-pointer w-full"/>
        </form>
        <button onClick={handleGoogle}className="bg-violet-300 text-violet-950 py-2 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-violet-500 hover:shadow-sm cursor-pointer w-full">Register with Google</button>
        </section>
    )
}