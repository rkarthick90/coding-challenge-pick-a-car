import React from "react";
import { Card } from "./style";
import { Button } from "../../car/styles";

const Vehicle = ({ item, selectVehicle }) => {
  const {
    make,
    model,
    enginePowerPS,
    enginePowerKW,
    fuelType,
    bodyType,
    engineCapacity,
  } = item || {};
  return (
    <Card>
      <div className="row">
        <div className="col">
          <label> Make </label>
          <div className="value">{make}</div>
        </div>
        <div className="col">
          <label> Model </label>
          <div className="value">{model}</div>
        </div>
        <div className="col">
          <label> Engine Power </label>
          <div className="value">
            {enginePowerPS} (PS) | {enginePowerKW} (KW)
          </div>
        </div>
        <div className="col">
          <label> Engine capacity </label>
          <div className="value">{engineCapacity}</div>
        </div>
        <div className="col">
          <label> Body </label>
          <div className="value">{bodyType}</div>
        </div>
        <div className="col">
          <label> Fuel </label>
          <div className="value">{fuelType}</div>
        </div>
      </div>
      <Button data-testid="select car" onClick={() => selectVehicle(item)}>
        Select this Car
      </Button>
    </Card>
  );
};

export default Vehicle;
