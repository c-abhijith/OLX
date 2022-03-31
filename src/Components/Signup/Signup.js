import React, { useState, useContext } from "react";
import Logo from "../../olx-logo.png";
import { FirebaseContext } from "../../store/Context";
// import { useHistory } from "react-router-dom";
import "./Signup.css";
// import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";



export default function Signup() {
     const history = useHistory();
     const [username, setUsername] = useState("");
     const [email, setEmail] = useState("");
     const [phonenumber, setNumber] = useState("");
     const [password, setPassword] = useState("");
     // const {register,handleSubmits,setError  ,formState:{errors}}=useForm();
     const navigate=useNavigate();

     const { firebase } = useContext(FirebaseContext);
     const handleSubmit = (event) => {
          event.preventDefault();
          firebase
               .auth()
               .createUserWithEmailAndPassword(email, password)
               .then((result) => {
                    result.user.updateProfile({ displayName: username }).then(() => {
                         firebase
                              .firestore()
                              .collection("users")
                              .add({
                                   id: result.user.uid,
                                   username: username,
                                   phone: phonenumber,
                              })
                              .then(() => {
                                   history.push("/login");
                              });
                    });
               });
     };

     return (
          <div>
               <div className="signupParentDiv">
                    <img width="200px" height="200px" src={Logo}></img>
                    <form onSubmit={handleSubmit}>
                         <label htmlFor="fname">Username</label>
                         <br />
                         <input
                              className="input"
                              // {...register("username",{required:"username is required",minLength:{
                              //      value:6,
                              //      message:"Should contain 6 characters"
                              //    }})}
                              type="text"
                              id="fname"
                              name="name"
                              defaultValue="John"
                              value={username}
                              onChange={(e) => {
                                   setUsername(e.target.value);
                              }}
                         />
                         <br />
                         <label htmlFor="fname">Email</label>
                         <br />
                         <input
                              className="input"
                              type="email"
                              id="fname"
                              name="email"
                              defaultValue="John"
                              value={email}
                              onChange={(e) => {
                                   setEmail(e.target.value);
                              }}
                         />
                         <br />
                         <label htmlFor="lname">Phone</label>
                         <br />
                         <input
                              className="input"
                              type="number"
                              id="lname"
                              name="phone"
                              defaultValue="Doe"
                              value={phonenumber}
                              onKeyPress={function (evt) {
                                   if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
                                   {
                                       evt.preventDefault();
                                   }
                               }}
                              onChange={(e) => {
                                   setNumber(e.target.value);
                              }}
                         />
                         <br />
                         <label htmlFor="lname">Password</label>
                         <br />
                         <input
                              className="input"
                              type="password"
                              id="lname"
                              name="password"
                              defaultValue="Doe"
                              value={password}
                              onChange={(e) => {
                                   setPassword(e.target.value);
                              }}
                         />
                         <br />
                         <br />
                         <button>Signup</button>
                    </form>
                    {/* <a
                    onClick={()=>{
                         firebase.auth().signOut();
                         history.push('/login')
               
                       }}>Login</a> */}
               </div>
          </div>
     );
}
