window.addEventListener('DOMContentLoaded', (event) => {
    fetch("header.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        document.querySelector("#header-placeholder").innerHTML = data;
      });

    fetch("footer.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        document.querySelector("#footer-placeholder").innerHTML = data;
      });
});
