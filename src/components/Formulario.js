import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import Error from "./Error";
import useMoneda from "../hooks/useMoneda";
import useCriptoMoneda from "../hooks/useCriptoMoneda";

const Boton = styled.input`
	margin-top: 20px;
	font-weight: bold;
	font-size: 20px;
	padding: 10px;
	background-color: #66a2fe;
	border: none;
	border-radius: 10px;
	color: #fff;
	width: 100%;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #326ac0;
		cursor: pointer;
	}
`;

const Formulario = ({ setCriptomoneda, setMoneda }) => {
	const [listaCripto, setListaCripto] = useState([]);
	const [error, setError] = useState(false);
	const MONEDAS = [
		{ codigo: "USD", nombre: "Dolar de Estados Unidos" },
		{ codigo: "MXN", nombre: "Peso Mexicano" },
		{ codigo: "EUR", nombre: "Euro" },
		{ codigo: "GBP", nombre: "Libra Esterlina" },
	];

	const [moneda, Selectmonedas] = useMoneda("Elige tu Moneda", "", MONEDAS);

	const [criptomoneda, SelectCripto] = useCriptoMoneda(
		"Elige tu Criptomoneda",
		"",
		listaCripto
	);

	useEffect(() => {
		const consutarAPI = async () => {
			const url =
				"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
			const resultado = await axios.get(url);
			setListaCripto(resultado.data.Data);
		};
		consutarAPI();
	}, []);

	const cotizarMoneda = (e) => {
		e.preventDefault();

		if (moneda === "" || criptomoneda === "") {
			setError(true);
			return;
		}
		setMoneda(moneda);
		setCriptomoneda(criptomoneda);
		setError(false);
	};

	return (
		<form onSubmit={cotizarMoneda}>
			{error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
			<Selectmonedas />
			<SelectCripto />
			<Boton type="submit" value="Calcular" />
		</form>
	);
};

export default Formulario;
