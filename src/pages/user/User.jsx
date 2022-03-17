import React from "react";
import ReactDOM from "react-dom";
import "./User.css";
import { PermIdentity } from "@material-ui/icons";
function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
<img alt="" className="userShowImg" src="https://pps.whatsapp.net/v/t61.24694-24/234743491_372249084383775_7612602405731643070_n.jpg?ccb=11-4&oh=f06c30ab5033f0dc3b612a1260fa8efd&oe=62353341"/>
        <div className="userShowTopTitle">
          <span className="userShowTopTitleName">Fahad Siddiqui</span>
          <span className="userShowTopTitleJob">Software Engineer</span>
        </div> 
          </div>
          <div className="userShowBottom">
<span className="userShowTitle">Account Detail</span>
   <PermIdentity className="userShowIcon"/>    
<span className="userShowInfoTile">fad_flex</span>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}

export default User;
