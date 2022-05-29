
import { User } from "@/models/User";

export class Store{
  saveToken(token:string) {
    localStorage.setItem("token", JSON.stringify(token));
  }
  
  saveUser(user:User){
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser(){
    const user = localStorage.getItem('user')
    return JSON.parse(user)
  }

  getToken(){
    const token =  JSON.parse(localStorage.getItem('token'))
    return token.split('|')[1];
  }

  clear(){
    localStorage.clear();
  }
}

