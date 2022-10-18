function Inventory({make, model}) {
    return (
      <div className="carSection">
        <div class="card">
            <img class="card-img-top" src="..." alt="Toyota Tundra"></img>
            <div class="card-body">
                <h5 class="card-title">{make} {model}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div class="card">
            <img class="card-img-top" src="..." alt="Chevy Impala"></img>
            <div class="card-body">
                <h5 class="card-title">{make} {model}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div class="card">
            <img class="card-img-top" src="..." alt="Mini Hardtop 4 Door"></img>
            <div class="card-body">
                <h5 class="card-title">{make} {model}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div class="card">
            <img class="card-img-top" src="..." alt="Honda Civic"></img>
            <div class="card-body">
                <h5 class="card-title">{make} {model}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div class="card">
            <img class="card-img-top" src="..." alt="Jeep Wrangler"></img>
            <div class="card-body">
                <h5 class="card-title">{make} {model}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
      </div>
    );
  }

export default Inventory;