import React, { useState } from "react";
 import Header from "./Component/header";
 import Navbar from "./Component/Navbar";
import Card from "./Component/card";

function App() {
  let [cartValue,setCartvalue]= useState(0)
  return <>
  <Navbar cartValue={cartValue }/>
  <Header/>
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <Card setCartvalue={setCartvalue}/>
                  <Card setCartvalue={setCartvalue}/>
                  <Card setCartvalue={setCartvalue}/>
                  <Card setCartvalue={setCartvalue}/>
                  <Card setCartvalue={setCartvalue}/>
          
                  </div>
                </div>
                </section>
  </>
}

export default App;
