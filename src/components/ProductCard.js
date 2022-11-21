import React, { useState, Component, useEffect } from 'react';
import ProductsApi from '../api.json';

function ProductCard({ startDate, filtered }) {
	const [products, setProducts] = useState(ProductsApi.data);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [makeDays, setMakeDays] = useState(null);

	useEffect(() => {
		setMakeDays(startDate.getDay() + 1);
	}, [startDate]);

	useEffect(() => {
		setFilteredProducts(
			ProductsApi.data.filter((product) => {
				return product.times.makeDays === makeDays;
			})
		);
	}, [makeDays]);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>
				<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{filtered
						? filteredProducts.map((product) => (
								<a
									key={product.id}
									className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-400 cursor-pointer group shadow-xl bg-gray-600 p-3 text-right"
								>
									<h3 className="mt-5 text-sm font-black text-white">
										{product.name}
									</h3>
									<p className="mt-1 text-lg font-medium text-gray-100">
										<span className="text-sm">₪</span>
										{product.price}
									</p>
								</a>
						  ))
						: products.map((product) => (
								<a
									key={product.id}
									className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-400 cursor-pointer group shadow-xl bg-gray-600 p-3 text-right"
								>
									<h3 className="mt-5 text-sm font-black text-white">
										{product.name}
									</h3>
									<p className="mt-1 text-lg font-medium text-gray-100">
										<span className="text-sm">₪</span>
										{product.price}
									</p>
								</a>
						  ))}
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
