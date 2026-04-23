# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# vite-proyecto-pri



EJERCICIO

🚀 Ejercicio: "El Interruptor de Invitados"
Contexto: Imagina que estás creando una pequeña aplicación para gestionar una lista de invitados a una fiesta.
Objetivo: Crea un componente en React que haga lo siguiente:
La Lista: Crea un arreglo constante de nombres (ejemplo: ["Ana", "Luis", "Marta", "Pepe"]) y muéstralos en una lista (<ul>) usando el método .map().
El Estado: Crea una variable de estado llamada encendido (booleano) que empiece en false.
El Botón: Agrega un botón que, al hacerle clic, cambie el valor de encendido (de true a false y viceversa).
Lógica Visual (El reto):
Si encendido es true, el botón debe decir "Cerrar Lista" y la lista de nombres debe verse.
Si encendido es false, el botón debe decir "Mostrar Lista" y la lista debe estar oculta.
Estilo Condicional: Si el index del nombre en el .map() es un número par, pinta ese nombre de color azul usando style o una className.

¿Qué van a practicar con esto?
useState: Para controlar si la lista se ve o no.
Renderizado Condicional: Usar el operador && o el ternario para mostrar/ocultar el <ul>.
Ternarios en Atributos: Para cambiar el texto del botón dinámicamente.
map() y Keys: Para recorrer el arreglo de nombres.
Lógica básica (% 2): Para aplicar estilos diferentes según la posición.

ejercicio 2 
crear un arreglo de objetos, cada objeto tendra un nombre de animal 1 url de una imagend e dicho animal y un color
con un ciclo map pintar cada uno en una tarjeta que contendra la foto del animal el nombre y la tarjeta sera dell color indicado
ademas colocar un texto vacio que al darle click a cualquier tarjeta este texto vacio dira “el animal hace <ruido>” ejemplo “el perro hace guau”
