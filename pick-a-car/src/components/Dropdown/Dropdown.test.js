import { fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import Dropdown from "./index";
import userEvent from "@testing-library/user-event";

const unfilteredOptions = [
  "Acai",
  "Apples",
  "Apricots",
  "Avocado",
  "Bananas",
  "Blueberries",
  "Blackberries",
  "Cherries",
  "Cranberries",
  "Cucumbers",
  "Dates",
  "Eggplant",
  "Figs",
  "Grapes",
  "Lemons",
  "Limes",
  "Lychees",
  "Mangos",
];

test("DropDown empty Input", async () => {
  render(<Dropdown items={unfilteredOptions} label="make" defaultValue="" />);

  const Input = screen.getByTestId("dropdown-component");

  fireEvent.focus(screen.getByTestId(/dropdown-component/));
  expect(Input.value).toBe("");
});

test("DropDown Search functionality", async () => {
  render(<Dropdown items={unfilteredOptions} label="make" defaultValue="" />);

  const Input = screen.getByTestId("dropdown-component");

  userEvent.type(Input, "ap");

  const dropdownListScope = within(screen.getByTestId(/dropdown-list/i));
  expect(dropdownListScope.getByText(/Apples/i)).toBeInTheDocument();
  expect(dropdownListScope.getByText(/Apricots/i)).toBeInTheDocument();
  expect(dropdownListScope.getAllByRole("option")).toHaveLength(2);
});

test("DropDown Input with keydown", async () => {
  const update = jest.fn();
  render(
    <Dropdown
      items={unfilteredOptions}
      label="make"
      defaultValue=""
      update={update}
    />
  );

  const Input = screen.getByTestId("dropdown-component");
  fireEvent.keyDown(Input, { key: "ArrowDown", code: 40 });
  fireEvent.keyDown(Input, { key: "Enter", code: 13 });
  expect(Input.value).toBe("Acai");
  expect(update).toHaveBeenCalled();
});
