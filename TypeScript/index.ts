interface Vehicle {
   startEngine: (key: string) => boolean;
   drive: (speed: number) => string;
}

const myCar = {
   startEngine: () => {
      console.log("Engine started");
      return true;
   },
   drive: () => {
      return "Driving at default speed";
   },
};

function operateVehicle(vehicle:Vehicle): string {
   if (vehicle.startEngine("car-key")) {
      return vehicle.drive(60);
   } else {
      return "Engine failed to start.";
   }
}

console.log(operateVehicle(myCar));