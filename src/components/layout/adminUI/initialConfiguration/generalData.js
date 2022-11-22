import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { DataDegree } from "./dataDegree";
import { DataManager } from "./dataManager";
import { DataPeriod } from "./dataPeriod";

export const GeneralData = () => {
  return (
    <>
      <center>
        <Carousel variant="dark">
          <Carousel.Item interval={20000}>
            <DataDegree/>
          </Carousel.Item>
          <Carousel.Item interval={20000}>
            <DataPeriod/>
          </Carousel.Item>
          <Carousel.Item interval={20000}>
            <DataManager/>
          </Carousel.Item>
        </Carousel>
      </center>
      <div class="grid grid-cols-3 gap-3"></div>
    </>
  );
};
