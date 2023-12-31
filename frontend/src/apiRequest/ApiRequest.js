import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { setToken, setUserDetails } from "../helper/SessionHelper";

import axios from "axios";
import { BASE_URL } from "../helper/config";


export async function RegistrationRequest(email, name, password) {
  try {
    let URL = `${BASE_URL}/register`;
    let PostBody = { email: email, name: name, password: password };
    let res = await axios.post(URL, PostBody);
    if (res.status === 200) {
      SuccessToast("Registration success");
      return true;
    } else {
      ErrorToast("Something Went Wrong");
      return false;
    }
  } catch (error) {
    ErrorToast("Something Went Wrong");
    return false;
  }
}

export async function LoginRequest(email, password) {
  try {
    let URL = `${BASE_URL}/login`;
    let PostBody = { email: email, password: password };
    let res = await axios.post(URL, PostBody);
    if (res.status === 200) {
      setToken(res.data["token"]);
      setUserDetails(res.data["data"]);
      SuccessToast("Login Success");
      return true;
    } else {
      ErrorToast("Something Went Wrong");
      return false;
    }
  } catch (error) {
    ErrorToast("Invalid Email or Password");
    return false;
  }
}



export async function ProductsRequest() {
  try {
    let URL = `${BASE_URL}/findProductsList`;
    let res = await axios.get(URL);

    if (res.data["status"] === "success") {
      // alert(JSON.stringify(res.data['data']))
      SuccessToast("Login Success");
      return res.data["data"];
      // return true;
    } else {
      ErrorToast("Something Went Wrong");
      return false;
    }
  } catch (error) {
    console.log(error);
    ErrorToast("not found data");
    return false;
  }
}

export async function ProductProtoRequest() {
  try {
    let URL = `${BASE_URL}/findProduct`;
    let res = await axios.get(URL);

    if (res.data["status"] === "success") {
      // alert(JSON.stringify(res.data['data']))
      SuccessToast("products find Success");
      return res.data["data"];
      // return true;
    } else {
      ErrorToast("Something Went Wrong");
      return false;
    }
  } catch (error) {
    console.log(error);
    ErrorToast("not found data");
    return false;
  }
}

export async function ProductRequest(id) {
  try {
    let URL = `${BASE_URL}/findProduct/${id}`;
    let res = await axios.get(URL);
    // alert(JSON.stringify({res}))

    if (res.data["status"] === "success") {
      SuccessToast("Product find Success");
      return res.data["data"];
      // return true;
    } else {
      ErrorToast("Something Went Wrong");
      return false;
    }
  } catch (error) {
    console.log(error);
    ErrorToast("not found data");
    return false;
  }
}
