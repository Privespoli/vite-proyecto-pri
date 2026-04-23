import "./App.css";
import { useState } from "react";

function App() {
  // --- TUS ESTADOS Y DATOS ANTERIORES (NO TOCAR) ---
  const [variable, setVariable] = useState<string>("Fernando");
  const alumno = "pardo";
  const alumnos = ["mario", "pardo", "neuza", "yisus", "melina"];
  const [contador, setContador] = useState<number>(0);
  const [name, setName] = useState<string>();

  // --- DATOS ANTERIORES EJERCICIO INVITADOS ---
  const invitados = ["Ana", "Luis", "Marta", "Pepe"];
  const [encendido, setEncendido] = useState<boolean>(false);

  // --- NUEVOS DATOS Y ESTADOS PARA EL EJERCICIO DE ANIMALES ---
  
  // 1. Arreglo de objetos de animales
  const animales = [
    {
      id: 1,
      nombre: "Perro",
      imagen: "https://images.dog.ceo/breeds/retriever-golden/n02099603_14.jpg",
      colorFondo: "#ffe0b2", // Naranja claro
      ruido: "guau guau"
    },
    {
      id: 2,
      nombre: "Gato",
      imagen: "https://cdn2.thecatapi.com/images/MTY3ODIyNQ.jpg",
      colorFondo: "#e1f5fe", // Azul claro
      ruido: "miau miau"
    },
    {
      id: 3,
      nombre: "Vaca",
      imagen: "https://cdn.pixabay.com/photo/2016/11/29/01/22/animal-1866528_1280.jpg",
      colorFondo: "#c8e6c9", // Verde claro
      ruido: "muuuu"
    },
    {
      id: 4,
      nombre: "Pato",
      imagen: "https://cdn.pixabay.com/photo/2018/10/24/18/38/duck-3770850_1280.jpg",
      colorFondo: "#fff9c4", // Amarillo claro
      ruido: "cua cua"
    }
  ];

  // 2. Estado para guardar el mensaje del sonido del animal seleccionado
  const [mensajeSonido, setMensajeSonido] = useState<string>("");


  // --- TUS FUNCIONES ANTERIORES ---
  const handleVariable = () => {
    setVariable("Mario");
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  // --- NUEVA FUNCIÓN PARA EL EJERCICIO DE ANIMALES ---
  const manejarClickAnimal = (nombreAnimal: string, ruidoAnimal: string) => {
    // Actualizamos el estado con la frase formateada
    setMensajeSonido(`El ${nombreAnimal} hace "${ruidoAnimal}"`);
  };


  return (
    <>
      {/* SECCIONES ANTERIORES INTACTAS */}
      <p>{variable}</p>
      <button onClick={handleVariable} className={contador % 2 == 0 ? "boton1" : "boton2"}>
        Enviar
      </button>
      <h2>Contador</h2>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(0)}>reset</button>
      <p>{alumno}</p>
      <h1>Alumnos</h1>
      <ul>
        {alumnos.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
      <h2>nombre: {name}</h2>
      <input type="text" value={name} onChange={handleName} placeholder="Escribe un nombre..." />
      
      <hr />
      <h2>Ejercicio: Lista de Invitados</h2>
      <button onClick={() => setEncendido(!encendido)}>
        {encendido ? "Cerrar Lista" : "Mostrar Lista"}
      </button>
      {encendido && (
        <ul>
          {invitados.map((invitado, index) => (
            <li key={index} style={{ color: index % 2 === 0 ? "blue" : "black" }}>
              {invitado}
            </li>
          ))}
        </ul>
      )}
      {/* FIN SECCIONES ANTERIORES */}


      {/* ============================================= */}
      {/* NUEVO EJERCICIO: TARJETAS DE ANIMALES       */}
      {/* ============================================= */}
      <hr />
      <h2>Ejercicio: Zoológico Interactívo</h2>

      {/* 4. Texto que cambia (Estado 'mensajeSonido') */}
      <div style={{ minHeight: '1.5em', marginBottom: '10px', fontWeight: 'bold', color: '#d32f2f', fontSize: '1.2em' }}>
        {mensajeSonido}
      </div>

      {/* Contenedor para las tarjetas (usamos flexbox para alinearlas) */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        
        {/* 3. Ciclo map para crear las tarjetas */}
        {animales.map((animal) => (
          <div
            key={animal.id}
            onClick={() => manejarClickAnimal(animal.nombre, animal.ruido)}
            style={{
              backgroundColor: animal.colorFondo, // Usamos el color del objeto
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "150px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
              transition: "transform 0.2s" // Efecto suave al pasar el mouse
            }}
            // Pequeño efecto hover con JS (opcional, para que se note el click)
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {/* Imagen del animal */}
            <img 
              src={animal.imagen} 
              alt={animal.nombre} 
              style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "5px" }} 
            />
            {/* Nombre del animal */}
            <h3 style={{ margin: "10px 0 0 0", fontSize: '1.1em' }}>{animal.nombre}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default App; 