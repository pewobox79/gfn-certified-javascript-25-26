(() => {
  // index.ts
  var myCar = {
    startEngine: () => {
      console.log("Engine started");
      return true;
    },
    drive: () => {
      return "Driving at default speed";
    }
  };
  function operateVehicle(vehicle) {
    if (vehicle.startEngine("car-key")) {
      return vehicle.drive(60);
    } else {
      return "Engine failed to start.";
    }
  }
  console.log(operateVehicle(myCar));
})();
