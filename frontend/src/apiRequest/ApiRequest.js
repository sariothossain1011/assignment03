import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { setToken, setUserDetails } from "../helper/SessionHelper";

import axios from "axios";

export async function RegistrationRequest(email, name, password) {
  try {
    let URL = "http://localhost:8080/api/v1/register";
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
    let URL = "http://localhost:8080/api/v1/login";
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
