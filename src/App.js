// import React from "react";
import React, { Component } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import PlaneTickets from './Components/PlaneTickets/PlaneTickets'
import Hotel from "./Components/Hotel/Hotel";
import Rentcars from "./Components/Rentcars/Rentcars";
import About from "./Components/About/About";
import News from "./Components/News/News";
import DetailDestination from "./Components/DetailDestination/DetailDestination";
import Contact from "./Components/Contact/Contact";
import Search from "./Components/Search/Search";
import DetailHotel from "./Components/DetailHotel/DetailHotel";
import { dataTour,dataHotel, dataBookingTour, dataNews,storage } from './firebase'
import { onValue } from "firebase/database";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { TbEmphasis } from 'react-icons/tb'
import { DetailNew } from './Components/DetailNew/DetailNew'




export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tableData: [],
      tableDataBookingTour: [],
      tableDataHotel:[],
      tableDataNews:[],
      dataSreach: {},
      imageURL: ''
    }
  }

  // getUrlImg = (x) => {
  //   const forestRef = ref(storage, 'images/'+ x);
  //     getDownloadURL(forestRef).then((url) => {
  //       this.setState({imageURL:url})
        
  //       console.log(this.state.imageURL);
  //     })
  // }
  getUrlImg = (x) => {
    const forestRef = ref(storage, 'images/'+ x);
      getDownloadURL(forestRef).then((url) => {
       console.log(url);
      })
  }

  componentDidMount  () {
    //----------------------------------
    onValue(dataTour, (snapshot) => {
      const data = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let value =  childSnapshot.val();
        let img =childSnapshot.val().img;
        // console.log(img);
        // this.getUrlImg(img)
        // console.log(this.state.imageURL);
        data.push({key: keyName,value: value});
      });
      this.setState({tableData: data })
    });
    //----------------------------------
    onValue(dataBookingTour, (snapshot) => {
      const data = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let value =  childSnapshot.val();
        data.push({key: keyName,value: value});
      });
      this.setState({tableDataBookingTour: data })
    });
    //---------------------------------
    onValue(dataHotel, (snapshot) => {
      const data = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let value =  childSnapshot.val();
        data.push({key: keyName,value: value});
      });
      // console.log(data);
      this.setState({tableDataHotel: data })
      // 
    });
    //---------------------------------
    onValue(dataNews, (snapshot) => {
      const data = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let value =  childSnapshot.val();
        data.push({key: keyName,value: value});
      });
      // console.log(data);
      this.setState({tableDataNews: data })
      // 
    });
  }
  
  getDataSreach = (item) => {
    this.setState({ dataSreach: item });
  }
  handleImagecChange = () => {

  }

  handleSubmit = () => {

  };



  render() {
    // this.getUrlImg('qng-lyson.jpg')
    // console.log(this.state.tableDataHotel);
    // console.log(dataTour);
    // chuyển tên file ảnh thành url 
    // console.log(this.getUrlImg('bg-contact.jpg'));

    // console.log(this.state.imageURL);
    // console.log(this.state.tableData);
    // console.log(this.state.dataSreach);`x

    return (
      <>
        <Navbar />
        <Routes>
          <Route path="" element={<Home getdata={(item) => { this.getDataSreach(item) }} data={this.state.tableData} />} />
          <Route path="/ve-may-bay" element={<PlaneTickets />} />
          <Route path="/ve-may-bay/dat-ve-:id" element={<Contact  title="LIÊN HỆ ĐẶT VÉ MÁY BAY" img='https://firebasestorage.googleapis.com/v0/b/travel-2022-686cf.appspot.com/o/images%2Fimg-travel.png?alt=media&token=9ae3535c-d863-4eba-a598-f27286c68ca3'></Contact>} />
          <Route path="/khach-san" element={<Hotel data = {this.state.tableDataHotel}/>} />
          <Route path="/khach-san/chi-tiet-:id" element={<DetailHotel data = {this.state.tableDataHotel} />} />
          <Route path="/khach-san/chi-tiet-:id/dat-phong" element={<Contact title="LIÊN HỆ ĐẶT PHÒNG" img='https://firebasestorage.googleapis.com/v0/b/travel-2022-686cf.appspot.com/o/images%2Fimg-travel-hotel.png?alt=media&token=1c7c2afc-2ce1-418c-a66f-057c9042aadd' data = {this.state.tableDataHotel}></Contact> } />
          <Route path="/thue-xe" element={<Rentcars />} />
          <Route path="/tin-tuc" element={<News data = {this.state.tableDataNews}/>} />
          <Route path="/tin-tuc/chi-tiet-:id" element={<DetailNew data = {this.state.tableDataNews}/>} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/du-lich/chi-tiet-:id" element={<DetailDestination data={this.state.tableData}  dataBT={this.state.tableDataBookingTour}/>} />
          <Route path="/du-lich/tim-kiem" element={<Search dtsreach={this.state.dataSreach} data={this.state.tableData} dataBT={this.state.tableDataBookingTour}/>} />
        </Routes>
        <Footer />
      </>
    )
  }
}