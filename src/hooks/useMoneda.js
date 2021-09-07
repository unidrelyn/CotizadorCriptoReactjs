import React, { Fragment, useState } from "react";

const useMoneda = (label) => {
	const [state, setState] = useState("");

	const Seleccionar = () => (
		<Fragment>
			<label>{label}</label>
			<select>
				<option value="MXN">Peso Mexicano</option>
			</select>
		</Fragment>
	);

	return [state, Seleccionar, setState];
};

export default useMoneda;
