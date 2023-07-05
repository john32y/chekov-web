import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../App";

const firebaseConfig = {
    apiKey: "AIzaSyD2uaKf23NLED6CSKY5MJfksj_UaG4J6Ho",
    authDomain: "chekov-jct.firebaseapp.com",
    projectId: "chekov-jct",
    storageBucket: "chekov-jct.appspot.com",
    messagingSenderId: "1005223130203",
    appId: "1:1005223130203:web:afe034afb36f71299ebb7e"
  };

export default function SignUpForm () {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
    .then(res => {
        setUser(res.user);
        navigate("/");
    })
    .catch(err => alert(err.message))

}

    return(
        <form onSubmit={handleSignup}>
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
            <input type="submit" value="Sign Up" />
        </form>
    )
}