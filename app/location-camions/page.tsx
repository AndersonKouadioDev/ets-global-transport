"use client";

import React from "react"
import Header1 from "./components/header1";
import Searchbar1 from "./components/searchbar1";
import CamionsProducts from "./components/camions-products";
import Faq from "../../components/ui/faq-section";


export default function LocationCamion(){
    return(
        <div>
            <Header1/>
            <Searchbar1/>
            <CamionsProducts/>
            <Faq/>
        </div>
    )
}