import Vehicle from "./Vehicle";

const VehicleList = ({listOfVehicles}) => {

    const carList = listOfVehicles.filter((vehicle) =>  vehicle.category === "Car")
    const boatList = listOfVehicles.filter((vehicle) => vehicle.category === "Boat")
    const planeList = listOfVehicles.filter((vehicle) => vehicle.category === "Plane")

    const carComponents = carList.map((vehicle) => {
        return (
            <Vehicle vehicle = {vehicle}/>
        );
    })

    const boatComponents = boatList.map((vehicle) => {
        return (
            <Vehicle vehicle = {vehicle}/>
        );
    })

    const planeComponents = planeList.map((vehicle) => {
        return (
            <Vehicle vehicle = {vehicle}/>
        );
    })



    return ( 
        <div>
            <h2>Cars</h2>
            {carComponents}
            <hr/>
            <h2>Boats</h2>
            {boatComponents}
            <hr/>
            <h2>Planes</h2>
            {planeComponents}
        </div>
     );
}
 
export default VehicleList;