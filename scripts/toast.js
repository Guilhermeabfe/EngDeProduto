export class Toast {
  static create(txt, color) {
    Toastify({
      text: txt,
      duration: 3000,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#ef5350",
        color: "#ffffff",
      },
    }).showToast();
  }
}
