import React, { useContext } from "react";
import { Timestamp, addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { auth, firedb } from "../../firebase/FirebaseConfig";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from "react-toastify";
import myContext from "../../context/data/myContext";

async function PlatinumMember() {
  const premium = 1000;

  const buyPremium = async () => {
    var options = {
        key: "rzp_test_lnVtOfV0uXfiVu",
        key_secret: "gtphiBfdr5PCOgNmhCPzYuxg",
        amount: parseInt(premium * 100),
        currency: "INR",
        order_receipt: "order_rcptid_" + name,
        name: "SmartMart.Com",
        description: "Payment for Purchased Goods",
  
        handler: function (response) {
          console.log(response); 
          toast.success("Payment Successful. Redirecting to Home Page...", {autoClose:5000,transition:Bounce});
          setTimeout(() => {
        //     window.location.reload(true);
        //   localStorage.removeItem("cart");
          window.location.href= '/'
          }, 6000) 

          const User = auth.currentUser;

          let doc_id = User.uid

          // const docRef = doc(firedb, "users", user.id)
  
          const premiumInfo = {
            isPlatinum: "True"
          };
  
          try {
            const orderRef = doc(firedb, "users", doc_id );
            updateDoc(orderRef, premiumInfo).then(orderRef => {console.log("A new Documenrt field added")})
          } catch (error) {
            console.log(error);
          }
        },
  
        theme: {
          color: "#ff9900",
        },
      };
  
      var pay = new window.Razorpay(options);
      pay.open();
      console.log(pay);   
    };


  return <div>
    <button onClick={buyPremium} className="bg-orange-400 text-white rounded-sm">Buy Now @ ₹1000</button>
  </div>;
}

export default PlatinumMember;
