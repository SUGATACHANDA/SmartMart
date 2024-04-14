import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { Bounce, toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firedb } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false);

  function onChange(value) {
    setIsCaptchaSuccess(true);
    console.log("captcha value: ", value);
  }

  const signup = async () => {
    if (name === "" || email === "" || password === "") {
      return toast.warning("ALL FIELDS REQUIRED", {
        autoClose: 2000,
        transition: Bounce,
      });
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords Doesnot Match!!!");
    }
    try {
      setLoading(true);
      const users = await createUserWithEmailAndPassword(auth, email, password);

      // console.log(users)

      const user = {
        name: name,
        isPlatinum: "False",
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = doc(firedb, "users", user.uid);
      await setDoc(userRef, user, { merge: true });
      alert("Signup Succesfully");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-center mb-3">
          <ReCAPTCHA
            theme="dark"
            sitekey="6Lcq97kpAAAAAIqQ0SuPjEVme9PljhPryaH5Uq0T"
            onChange={onChange}
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            disabled={!isCaptchaSuccessful}
            onClick={signup}
            className=" bg-green-400 w-full text-white font-bold px-2 py-2 rounded-lg disabled:opacity-50"
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
