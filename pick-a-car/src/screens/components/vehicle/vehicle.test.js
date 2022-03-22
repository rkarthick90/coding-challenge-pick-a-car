import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import Vehicle from "./index";
import userEvent from "@testing-library/user-event";

const dummy = {
  make: "Ford",
  model: "Fiesta",
  enginePowerPS: 54,
  enginePowerKW: 40,
  fuelType: "Diesel",
  bodyType: "Limousine",
  engineCapacity: 1119,
};

test("select car", async () => {
  const selectVehicle = jest.fn();
  render(<Vehicle item={dummy} selectVehicle={selectVehicle} />);
  fireEvent.click(screen.getByTestId(/select car/));
  expect(selectVehicle).toHaveBeenCalled();
});
