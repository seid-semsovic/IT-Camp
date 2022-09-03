let krugovi = document.querySelectorAll(".krug");
startSemafor();
function startSemafor() {
  krugovi[0].style.background = "red";
  krugovi[1].style.background = "transparent";
  krugovi[2].style.background = "transparent";

  setTimeout(function () {
    krugovi[1].style.background = "yellow";
  }, 2000);
  setTimeout(function () {
    krugovi[2].style.background = "green";
    krugovi[0].style.background = "transparent";
    krugovi[1].style.background = "transparent";
  }, 4000);

  setTimeout(startSemafor, 6000);
}
