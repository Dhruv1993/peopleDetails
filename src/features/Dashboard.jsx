import React, { Component } from "react";
import FaceCardList from "../Card/FaceCardList";

const data = [
  {
    id: 1,
    firstName: "Tom",
    secondName: "Hall",
    contact: "+123456789",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    employeeId: 343,
    userName: "Tom007",
    email: "tom.hall@resolutionsystems.com.au"
  },
  {
    id: 2,
    firstName: "Papitter",
    secondName: "Loda",
    contact: "+123456789",
    photo: "https://randomuser.me/api/portraits/men/20.jpg",
    employeeId: 344,
    userName: "Tom007",
    email: "Loda.papittertattibcmcgdffsgsbdgtrujbsjdbjbcsjsndcnsjknclsjncljksncklundabc@resolutionsystems.com.au"
  }
];

class Dashboard extends Component {
  render() {
    return (
      <div>
        <FaceCardList data={data} />
      </div>
    );
  }
}

export default Dashboard;
