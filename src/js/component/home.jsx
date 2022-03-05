import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//Logica
	//[variable,funcion] = useState(valor por default)
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [lista, setLista] = useState(["tarea1", "tarea2", "tarea3"]);

	console.log(lista);

	const verificarNombre = () => {
		if (nombre === "" && apellido === "") {
			alert("Ingresa nombre y apellido");
		} else if (nombre === "") {
			alert("Ingrese nombre");
		} else if (apellido === "") {
			alert("Ingresa apellido");
		} else {
			alert("Puedes continuar");
		}
	};
	//Logica
	return (
		<div className="Fondo container mt-5">
			<h3 className="todos">
				{nombre} {apellido}
			</h3>
			<div className="container">
				<label htmlFor="">Nombre</label>
				<input
					type="text"
					placeholder="Ingresa tu nombre"
					//      evento     setea        valor
					onChange={(e) => setNombre(e.target.value)}
					value={nombre}></input>
				<input
					type="text"
					placeholder="Ingresa tu apellido"
					onChange={(e) => {
						setApellido(e.target.value);
					}}
					value={apellido}></input>
				<button
					className="btn btn-warning"
					onClick={() => {
						setNombre("");
						setApellido("");
					}}>
					Limpiar input
				</button>
				<button
					className="btn btn-success"
					onClick={() => verificarNombre()}
					onMouseOver>
					Verificar
				</button>
				<button
					className="btn btn-danger"
					onClick={() => {
						setLista(lista.concat(nombre));
					}}>
					Agregar a lista
				</button>
			</div>
			{lista.map((tarea) => {
				return <h1>{tarea}</h1>;
			})}
		</div>
	);
};

export default Home;
