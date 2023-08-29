"use client";
import React, { FC } from "react";
import farmCard from "./farmCard.module.scss";
import FarmCard from "./FarmCard";

import { decrement, increment, reset } from "../../utils/store/counterSlice";
import { useAppDispatch, useAppSelector } from "../../utils/store/hooks";
import { Button } from "@radix-ui/themes";

interface Props {
  data: FarmType[];
}

const FarmCards: FC<Props> = ({ ...props }) => {
  const count = useAppSelector((state: any) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  if (!props) {
    return;
  }
  return (
    <div className={farmCard.allCards}>
      <div className={farmCard.numberButtons}>
        <Button onClick={() => dispatch(increment())}>Show More</Button>
        <Button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          Show Less
        </Button>
        <Button variant="outline" onClick={() => dispatch(reset())}>
          Reset
        </Button>
      </div>
      {props.data.map((farm, index) => {
        if (index + 1 > count) {
          return;
        }

        return (
          <FarmCard
            key={farm.id}
            name={farm.name}
            website={farm.website}
            address={farm.address}
            phone={farm.phone}
            latitude={farm.latitude}
            managementAreasGeoJSON={farm.managementAreasGeoJSON}
            id={farm.id}
            email={farm.email}
            longitude={farm.longitude}
          />
        );
      })}
    </div>
  );
};

export default FarmCards;
