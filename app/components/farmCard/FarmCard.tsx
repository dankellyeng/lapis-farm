"use client";
import React from "react";
import Image from "next/image";
import farmCard from "./farmCard.module.scss";
import { Button } from "@radix-ui/themes";

const FarmCard: React.FunctionComponent<FarmType> = ({
  website,
  address,
  phone,
  latitude,
  managementAreasGeoJSON,
  name,
  id,
  email,
  longitude,
}) => {
  return (
    <div className={farmCard.card}>
      <div className={farmCard.image}>
        <Image
          height={200}
          width={250}
          src="/images/farm.jpg"
          alt="Farm"
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div className={farmCard.cardDetails}>
        <p className={farmCard.title}>{name}</p>
        <p className={farmCard.information}>{phone}</p>
        <p className={farmCard.information}>{address}</p>
        <div className={farmCard.buttonContainer}></div>
        <Button style={{ marginTop: "auto" }}>
          <a href={"https://agsteward.com.au/"}>Visit Website</a>
        </Button>
      </div>
    </div>
  );
};

export default FarmCard;
