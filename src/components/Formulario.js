import React from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";

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

const Formulario = () => {
	const [moneda, Selectmonedas, actualizarState] = useMoneda("Elige tu Moneda");
	return (
		<form>
			<Selectmonedas />
			<Boton type="submit" value="Calcular" />
		</form>
	);
};

export default Formulario;
