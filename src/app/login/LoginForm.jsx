import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp} from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

export default function LoginForm () {
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

const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then(res => {
        setUser(res.user);
        navigate("/");
    })
    .catch(err => alert(err.message))

    

}

    return(
        <main>
        <form onSubmit={handleLogin}>
           <label htmlFor="email">
            Email 
            <input type="email"  name="email" />
           </label>
           <br />
           <label>
           <label htmlFor="password" name="password" />
           Password
           <input type="password"  name="password" />
           </label>
            <br />
            <input type="submit" value="Login" />
        </form>
        <button onClick={handleGoogle}>Login with Google</button>
        </main>
    )
}