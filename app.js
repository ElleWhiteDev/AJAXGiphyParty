console.log("Let's get this party started!");

async function requestGif(input) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "3L6hLhLzLv4lXgwGXaPbi3GlhLM8GoBi", // Dev API key
      q: input, // User submitted search term
    },
  });
    
    const url = res.data.data[getRandomGif(50)].images.downsized.url; // Get random img from results
    addGif(url);
};

function getRandomGif(max) {
    return Math.floor(Math.random() * max);
}

function addGif(url) {
    let img = $("<img />", {
      class: "gif",
      src: url,
    }); // Create new img element from results
    img.appendTo($("#gif-container")); // Add img to page
};

$("#search-form").on("submit", function (event) {
    event.preventDefault();
    const userInput = $("#search-input").val().trim().toLowerCase(); // Getting user search term
    requestGif(userInput); // Call for gif using user search term
}); 

$(".button-24").on("click", function (event) {
  event.preventDefault();
  $("#gif-container").empty(); //Remove all imgs
  $("#search-input").val(""); // Clearing input
});