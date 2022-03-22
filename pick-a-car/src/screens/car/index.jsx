import React from "react";
import { Fragment } from "react";
import DropdownCombobox from "../../components/Dropdown";
import { useGetAllMakes, useGetModels } from "./hooks";
import { Container, Spinner } from "./styles";
import VehiclesList from "../components/list";

function Car() {
  const [selectedMake, setSelectedMake] = React.useState("");
  const [selectedModel, setSelectedModel] = React.useState("");
  const [selectedVehicle, setSelectedVehicle] = React.useState(null);
  const { data: makes = [], isLoading: isLoadingMakes } = useGetAllMakes();
  const {
    data: models = [],
    isLoading: isLoadingModels,
    isError: isErrorModels,
  } = useGetModels(selectedMake);

  React.useEffect(() => {
    if (selectedMake) setSelectedModel("");
  }, [selectedMake]);

  React.useEffect(() => {
    if (selectedVehicle)
      alert(
        `You have selected ${selectedVehicle.make} ${selectedVehicle.model} which has ${selectedVehicle.enginePowerPS} PS and ${selectedVehicle.enginePowerKW} KW engine power.`
      );
    setSelectedVehicle(null);
  }, [selectedVehicle]);

  return (
    <>
      <Container>
        <div className="applied-filter">
          <h3> Pick your car </h3>
          {!isLoadingMakes && makes.length ? (
            <DropdownCombobox
              items={makes}
              update={setSelectedMake}
              label="Make"
              defaultValue={selectedMake}
            />
          ) : null}
          {isLoadingModels ? (
            <Spinner />
          ) : selectedMake ? (
            <DropdownCombobox
              items={models}
              update={setSelectedModel}
              label="Model"
              defaultValue={selectedModel}
            />
          ) : isErrorModels ? (
            "Sorry there was an error"
          ) : null}
        </div>
        <br />
        {selectedMake && selectedModel ? (
          <VehiclesList
            selectVehicle={setSelectedVehicle}
            selectedMake={selectedMake}
            selectedModel={selectedModel}
          />
        ) : null}
      </Container>
    </>
  );
}

export default Car;
