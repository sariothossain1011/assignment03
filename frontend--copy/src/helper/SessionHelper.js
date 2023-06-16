class SessionHelper{
    setToken(token){
        localStorage.setItem("token",token)
    }
    getToken(){
        return localStorage.getItem("token")
    }
    removeToken(){
        return localStorage.removeItem("token")
    }
    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }
    setCartData(cart){
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    getCartData(){
        return JSON.parse(localStorage.getItem("cart"))
    }
    setEmail(Email){
        localStorage.setItem("Email",Email)
    }
    getEmail(){
        return localStorage.getItem("Email")
    }

}
export const {setEmail,getEmail,setToken,getToken,removeToken,getCartData,setCartData,setUserDetails,getUserDetails}=new SessionHelper();