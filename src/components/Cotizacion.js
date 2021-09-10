import React from "react";
import styled from "@emotion/styled";

const Resultado = styled.div`
	color: #fff;
	font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
	font-size: 18px;
	span {
		font-weight: bold;
	}
`;
const Precio = styled.p`
	font-size: 30px;
	span {
		font-weight: bold;
	}
`;

const Cotizacion = ({ resultado }) => {
	if (Object.keys(resultado).length === 0) return null;
	return (
		<Resultado>
			<Precio>
				El precio es: <span>{resultado.PRICE}</span>
			</Precio>
			<Info>
				El precio mas alto: <span>{resultado.HIGHDAY}</span>
			</Info>
			<Info>
				El precio mas bajo: <span>{resultado.LOWDAY}</span>
			</Info>
			<Info>
				La variacion 24Hr es: <span>{resultado.CHANGEPCT24HOUR}</span>
			</Info>
			<Info>
				Ultima Actualizacion: <span>{resultado.LASTUPDATE}</span>
			</Info>
		</Resultado>
	);
};

export default Cotizacion;
