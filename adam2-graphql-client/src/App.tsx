import React, { useState } from 'react';
import './App.css';
import { useGql } from './gql-hook';

function App() {
	const { doQuery } = useGql();
	const [ brands, setBrands ] = useState([]);

	return (
		<div>
			<button
				onClick={async () => {
					const d = await doQuery('a');
					setBrands(d.data.brands);
				}}
			>
				Do query
			</button>
			{brands.map((x: any, index: number) => {
				return <div key={index}>{x.name}</div>;
			})}
		</div>
	);
}

export default App;
