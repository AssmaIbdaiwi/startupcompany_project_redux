import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";



const userSlice = createSlice({
    name:'user',
    initialState:{email:"aiman@mail.com" , password:"12345" , isLogged:false},
    reducers:{
        signup:(state , action)=>{
            if(action.payload.email === state.email && action.payload.password === state.password){
                Swal.fire({
                    title: "Login Successfull",
                    text: "Welcome to our site we hope you spent great time with us :)",
                    type: "success"
                })
                state.isLogged = true
            }else{
                Swal.fire({
                    title: "Wrong",
                    text: "incorrect Email or Password",
                    type: "success"
                });
                
            }
        },
        login:(state , action)=>{
            if(action.payload.email === state.email &&action.payload.password === state.password){
                Swal.fire({
                    title: "Login Successfull",
                    text: "Welcome to our site we hope you spent great time with us :)",
                    type: "success"
                })
                state.isLogged = true
            }else{
                Swal.fire({
                    title: "Wrong",
                    text: "incorrect Email or Password",
                    type: "success"
                });
                
            }
        },
        logout:(state)=>{
            state.isLogged = false;
        }
    }
});
export const {signup , login , logout} = userSlice.actions;
export default userSlice.reducer;