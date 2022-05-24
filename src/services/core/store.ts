
import { User } from "@/models/User";

export class Store{
  saveUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser(){
    const user =  localStorage.getItem('user')
    return JSON.parse(user)
  }

  getToken(){
    return this.getUser().token;
  }

  clear(){
    localStorage.clear();
  }
}

