import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Styles/for_push/login.css';
import { useState} from "react";
import { useNavigate } from "react-router-dom";

function  Signup(){
  const [emailAddress , setEmailAddress] = useState("");
  const [password , setpassword] = useState("");


  const handleEmail = (event) => {
    setEmailAddress(event.target.value);
  }
  const handlePassword = (event) => {
    setpassword(event.target.value);
  }


    return(
        <div class="min-h-screen bg-gradient-to-r from-pallate-Dark_Sky_Blue from-10%  to-pallate-Police_Blue to-90%  py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      class="absolute inset-0 bg-pallate-Dark_Sky_Blue shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div class="relative px-4 py-10 bg-pallate-Police_Blue shadow-lg sm:rounded-3xl sm:p-20">

      <div class="max-w-md mx-auto">
        <div>
          <h1 class="text-2xl text-white font-semibold">Signup</h1>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <div class="relative">
              <input autocomplete="off" id="firstname" name="firstname" type="text" class="rounded-md peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="First Name" onChange={handleEmail}/>
              <label for="firstname" class=" absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4.5 peer-focus:text-gray-600 peer-focus:text-sm ">First Name</label>
            </div>
            <div class="relative">
              <input autocomplete="off" id="lastname" name="lastname" type="text" class="rounded-md peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Last Name" onChange={handleEmail}/>
              <label for="name" class=" absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4.5 peer-focus:text-gray-600 peer-focus:text-sm ">Last Name</label>
            </div>
            <div class="relative">
              <input autocomplete="off" id="email" name="email" type="text" class="rounded-md peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" onChange={handleEmail}/>
              <label for="email" class=" absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm ">Email Address</label>
            </div>
            <div class="relative">
              <input autocomplete="off" id="password" name="password" type="password" class="rounded-md peer placeholder-transparent h-8 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password"   onChange={handlePassword}/>
              <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>
            <div>
            <Link to="/Login" className="hover:bg-AteneoBlue-400 focus:bg-AteneoBlue-500 inline-block text-sm text-white align-baseline py-2.5 w-full rounded bg-AteneoBlue-500 text-center focus:text-white">
                  Already have an account? Login!
                </Link>
            </div>
            <div class="relative">
              <button class="bg-pallate-Dark_Sky_Blue font-medium w-full text-white rounded-md px-2 py-1" 
              onClick={()=> navigate("/home")}
              >Submit</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</div>

    )
}
export default Signup;