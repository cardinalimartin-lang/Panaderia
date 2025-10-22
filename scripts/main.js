function verPrecio(nombre, precio) {
  let cantidad = prompt(`¿Cuántas unidades de ${nombre} desea comprar?`);
  if (cantidad && !isNaN(cantidad)) {
    let total = precio * cantidad;
    alert(`${nombre} - Total: $${total}`);
  } else {
    alert("Por favor, ingrese una cantidad válida.");
  }
}
