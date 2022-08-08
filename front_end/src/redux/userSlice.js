import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";




const userSlice = createSlice({
    name:'user',
    initialState:{isLogged:false},
    reducers:{
        signup:(state , action)=>{
            
            if(action.payload){
                Swal.fire({
                    title: "Login Successfull",
                    text: "Welcome to our site we hope you spent great time with us :)",
                    type: "success",
                    confirmButtonColor: "#ea512e"
                })
                state.isLogged = true
             } //else{
            //     Swal.fire({
            //         title: "Wrong",
            //         text: "incorrect Email or Password",
            //         type: "success"
            //     });
                
            // }
        },
        login:(state , action)=>{
            if(action.payload){
                Swal.fire({
                    title: "Login Successfull",
                    text: "Welcome to our site we hope you spent great time with us :)",
                    type: "success",
                    confirmButtonColor: "#ea512e"
                })
                state.isLogged = true
            } //else{
            //     Swal.fire({
            //         title: "Wrong",
            //         text: "incorrect Email or Password",
            //         type: "success"
            //     });
                
            // }
        },
        logout:(state)=>{
            state.isLogged = false;
            localStorage.removeItem("id");
        }
    }
});
export const {signup , login , logout} = userSlice.actions;
export default userSlice.reducer;