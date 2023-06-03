class SessionHelper{
    setToken(token){
        localStorage.setItem("token",token)
    }
    getToken(){
        return localStorage.getItem("token")
    }
    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }
    setEmail(Email){
        localStorage.setItem("Email",Email)
    }
    getEmail(){
        return localStorage.getItem("Email")
    }
    removeSessions=()=>{
        localStorage.clear();
        window.location.href="/Login"
    }
}
export const {setEmail,getEmail,setToken,getToken,setUserDetails,getUserDetails,removeSessions}=new SessionHelper();