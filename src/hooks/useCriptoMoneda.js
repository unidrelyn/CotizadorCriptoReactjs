import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
	font-family: "Bebas Neue", cursive;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 2.4rem;
	margin-top: 2rem;
	display: block;
`;

const Select = styled.select`
	width: 100%;
	display: block;
	padding: 1rem;
	-webkit-appearance: none;
	border-radius: 10px;
	border: none;
	font-size: 1.5rem;
`;

const useCriptoMoneda = (label, stateInicial, opciones) => {
	console.log(opciones);
	const [state, setState] = useState(stateInicial);

	const SelectCripto = () => (
		<Fragment>
			<Label>{label}</Label>
			<Select value={state} onChange={(e) => setState(e.target.value)}>
				<option value="">Seleccione</option>
				{opciones.map((opcion) => (
					<option key={opcion.CoinInfo.id} value={opcion.CoinInfo.Name}>
						{opcion.CoinInfo.FullName}
					</option>
				))}
			</Select>
		</Fragment>
	);

	return [state, SelectCripto, setState];
};

export default useCriptoMoneda;
