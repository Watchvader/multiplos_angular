# Aplicacion de multiplos

Esta aplicacion de angular deja que el usuario ingrese un número y encontrar todos los multiplos de 3,5 y 7 entre el 0 y el número ingresado. Tanto el registro del numero introducido y los resultados se guardan en firestore.

## características

- Recibir un numero ingresado por el usuario.
- desplegar los numeros que esten entre el 0 y el numero ingresado.
- mostrar los multiplos de los numeros desplegados:
  - los multiplos de 3 se mostraran de color verde.
  - los multiplos de 5 de color rojo.
  - los multiplos de 7 de color azul.
  - los multiplos que no pertenezcan a ninguno de los 3 se mostrara en negro.
  - si un numero comparte un multiplo, el numero tendra que ser de numero menor.
-Se guarda la peticíon y el resultado en firestore

## requisitos

- angular
- ionic
- node.js
- firebase
