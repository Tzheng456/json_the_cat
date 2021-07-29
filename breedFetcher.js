let request = require("request");
let breedName = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    //logs error if request fails
    if (error !== null) {
      console.log("error:", error);
      return;
    } else {
      //fetch and parse body
      const data = JSON.parse(body);
      //if the JSON object parsed from body returns an empty array
      if (data.length === 0) {
        console.log("Breed not found!");
        return;
      }
      //print the description for ${breedName}
      console.log(data[0].description);
    }
  }
);
