import React, { useState, useEffect } from "react";
import { AgregarTarea } from "agregarTarea";


const Home = () => {
	const [tarea, setTarea] = useState("");
	const [pendientes, setPendientes] = useState([]);
	useEffect (()=>{
		createData();
		getData();
		},[])
	const getData = () => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/Maximo1988", {
	method: "GET",
		headers: { "content-type": "application/json" },
	})
		.then((resp) => resp.json())
		.then((data) => setPendientes(data))
		.catch((err) => {console.log(err);
		});
	const subirData = (body) => {
		const settingFetch = {
			method: "PUT",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		};
	}

	fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/Maximo1988",
		settingFetch
	)
	.then((respuesta) => respuesta.json())
	.then((response) => (console.log(response))
	);

	const AgregarTarea = (e) => {
		e.preventDefault();
		if (!tarea.trim()) {
			console.log("campo vacio");
			return;
		}

		setPendientes([...pendientes, { id: AgregarTarea(), NombreTarea: tarea }]);

		setTarea("");
	};

	function eliminarTarea(id) {
		const arrayFilter = pendientes.filter((item) => item.id !== id);
		setPendientes(arrayFilter);
	}

	const cantLista = () => {
		let cantidad = 0;
		cantidad = pendientes.length;
		return cantidad;
	};

	let styleBox = {
		width: "600px",
		height: "auto",
		margin: "auto",
	};

	return (
		<div className="row flex-fill vh-100">
			<div className="col-3 bg-dark"></div>
			<div className="col-6 bg-light">
				<h1 className="text-center mt-3 todosSize">Todos</h1>
				<div className="bg-light shadow p-3 mb-5" style={styleBox}>
					<form
						action=""
						className="d-flex flex-row align-items-center"
						onSubmit={AgregarTarea}>
						<input
							type="text"
							className="form-control mb-2 border-0 w-75 mx-auto"
							placeholder="¿Que se necesita hacer?"
							onChange={(e) => setTarea(e.target.value)}
							value={tarea}></input>
					</form>
					<ul className="list-group list-group-flush w-75 mx-auto">
						{pendientes.map((item) => (
							<li
								className="list-group-item d-flex justify-content-between"
								key={item.id}>
								<span className="lead">{item.NombreTarea}</span>
								<button
									className="btn btn-sm btn-close float-right"
									aria-label="Close"
									onClick={() =>
										eliminarTarea(item.id)
									}></button>
							</li>
						))}
					</ul>
					<div>
						<hr className="mb-1"></hr>
						<p className="mt-0">{cantLista()} item left</p>
					</div>
				</div>
				<button
					className="btn btn-warning"
					id="boton"
					onclick="myFunction()">
					Limpiar Pendientes
				</button>
			</div>
			<div className="col-3 bg-dark"></div>
		</div>
	);
};

export default Home;
