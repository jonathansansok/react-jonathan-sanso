
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import {data} from './data.js';
  import ItemList from './ItemList';  

const ItemListContainer = () => {

	const [productos, setProductos] = useState([]);

	
	useEffect(() => {
		setTimeout(() => {
		setProductos(data)}, 2000);
	},  []);

	return (
		<>
			<article className="ItemListContainer-estilo">
			 <ItemList productos={productos}
			 /> 
			</article> 

		</>
	);
};

 export default ItemListContainer; 

