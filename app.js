(() => {
  const message = document.querySelector("#message");

  //check if the Geolocation API is supported
  if (!navigator.geolocation) {
    message.textContent = `Your browser doesn't support Geolocation`;
    message.classList.add("error");
    return;
  }

  //handle click event;
  const btn = document.querySelector("#show");
  btn.addEventListener("click", function () {
    //get the current position
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });

  //handle success case
  function onSuccess(position) {
    const { latitude, longitude } = position.coords;

    message.classList.add("success");
    message.innerHTML = `Your location: <span class="latlang">(${latitude}, ${longitude})</span>`;
  }

  //handle error case
  function onError() {
    message.classList.add("error");
    message.textContent = `Failed to get your location!`;
  }
})();
