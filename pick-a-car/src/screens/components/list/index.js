import React, { Fragment } from "react";
import Vehicle from "../vehicle";
import { useGetVehicles } from "../../car/hooks";
import { Spinner } from "../../car/styles";

const VehiclesList = ({ selectedMake, selectedModel, selectVehicle }) => {
  const {
    data: vehiclesData = [],
    isLoading: isLoadingVehicles,
    isError: isErrorVehicles,
  } = useGetVehicles(selectedMake, selectedModel);
  return (
    <div className="all-list">
      {isErrorVehicles
        ? "Sorry we are unable to load any vehicles for the search criteria"
        : null}
      <h3>
        {vehiclesData.length
          ? `${vehiclesData.length} vehicles found`
          : "No vehicles found"}
      </h3>
      <br />
      {isLoadingVehicles ? (
        <Spinner />
      ) : vehiclesData.length ? (
        <>
          {vehiclesData.map((item, index) => (
            <Fragment key={`${item}${index}`}>
              <Vehicle item={item} selectVehicle={selectVehicle} />
            </Fragment>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default VehiclesList;
