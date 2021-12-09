// require('dotenv').config();
import React, { useState } from "react";
// import axios from "axios";
import API from "../APIs/axiosAPI";


export default class UserCreator {
    constructor(username, phoneNumber) {
        this.contactNumber = phoneNumber;
        this.username = username;
    }

    login() {

        const obj = {
            contactNumber: this.contactNumber,
            username: this.username
        }
        console.log("user:", obj)

        API.post(
            "http://localhost:4000/signup",
            obj,
            (res) => {
                console.log(res)
                localStorage.setItem("user_id", res.headers.user_id);
                console.log("user_id:" + localStorage.getItem("user_id"));

            },
            (error) => {
                console.log(error)
            }
        );


    }
}