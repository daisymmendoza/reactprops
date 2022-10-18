// import Inventory from './Inventory.js';

// function Car() {
//   const make = ["Toyota", "Chevy"];
//   const model = ["Tundra", "Impala"];
//   return (
//     <div>
//       <Inventory
//         make1 ={make[0]}
//         make2 ={make[0]}
//         model1 ={model[1]}
//         model2 ={model[1]} />
//     </div>
//   );
// }

// export default Car;

function Car() {
  const makes = ["Toyota", "Chevy"];
  const models = ["Tundra", "Impala"]

  const results = [];

  for (const make of makes) {
    results.push(
      <div>
        <h2>Make: {make}</h2>
      </div>
    );
}

for (const model of models) {
  results.push(
    <div>
      <h2>Model: {model}</h2>
    </div>
  );
}

  return (
    <div>
      {results}
    </div>
  );
}

export default Car;