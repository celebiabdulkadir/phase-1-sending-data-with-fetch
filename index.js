const form = document.getElementById('user-form');

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		if (
			name !== '' &&
			email !== '' &&
			name !== undefined &&
			email !== undefined &&
			name !== null &&
			email !== null
		) {
			submitData(name, email);
		} else {
			alert('Please enter a name and email');
		}

		document.getElementById('user-form').reset();
	});
}

const submitData = (name, email) => {
	const formData = { name: name, email: email };
	const configurationObject = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(formData),
	};

	return fetch('http://localhost:3000/users', configurationObject)
		.then((response) => response.json())
		.then((data) => {
			// Create a div, set its innerHTML, and append it to the body
			const newDiv = document.createElement('div');
			newDiv.innerHTML = data.id;
			document.body.appendChild(newDiv);
			return data;
		})
		.catch((error) => {
			// Create a div, set its innerHTML, and append it to the body

			const errorDiv = document.createElement('div');
			errorDiv.innerHTML = error.message;

			return document.body.appendChild(errorDiv);
		});
};
