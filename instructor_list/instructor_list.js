
const jsonData = [
	{
		"ID": "SEC22IT048",
		"Name": "Sakthi LK",
		"Class": "IT A",
		"DOB": "13 Jul 2005",
		"ParentName": "Venkatesh",
		"MobileNumber": "8948654070",
		"Email": "sec22it300@sairamtap.edu.in",
		"ImageURL": "../assets/pfp.jpg"
	},
	{
		"ID": "SEC22IT300",
		"Name": "Hariharan V",
		"Class": "IT A",
		"DOB": "13 Jul 2005",
		"ParentName": "Venkatesan",
		"MobileNumber": "8948654070",
		"Email": "sec22it300@sairamtap.edu.in",
		"ImageURL": "../assets/pfp.jpg"
	},
	{
		"ID": "SEC22IT300",
		"Name": "Hariharan V",
		"Class": "IT A",
		"DOB": "13 Jul 2005",
		"ParentName": "Venkatesan",
		"MobileNumber": "8948654070",
		"Email": "sec22it300@sairamtap.edu.in",
		"ImageURL": "../assets/pfp.jpg"
	},
	{
		"ID": "SEC22IT300",
		"Name": "Hariharan V",
		"Class": "IT A",
		"DOB": "13 Jul 2005",
		"ParentName": "Venkatesan",
		"MobileNumber": "8948654070",
		"Email": "sec22it300@sairamtap.edu.in",
		"ImageURL": "../assets/pfp.jpg"
	},
	{
		"ID": "SEC22IT300",
		"Name": "Hariharan V",
		"Class": "IT A",
		"DOB": "13 Jul 2005",
		"ParentName": "Venkatesan",
		"MobileNumber": "8948654070",
		"Email": "sec22it300@sairamtap.edu.in",
		"ImageURL": "../assets/pfp.jpg"
	},
	{
		"ID": "SEC22IT300",
		"Name": "Hariharan V",
		"Class": "IT A",
		"DOB": "13 Jul 2005",
		"ParentName": "Venkatesan",
		"MobileNumber": "8948654070",
		"Email": "sec22it300@sairamtap.edu.in",
		"ImageURL": "../assets/pfp.jpg"
	},
	{
		"ID": "SEC22IT300",
		"Name": "Hariharan V",
		"Class": "IT A",
		"DOB": "13 Jul 2005",
		"ParentName": "Venkatesan",
		"MobileNumber": "8948654070",
		"Email": "sec22it300@sairamtap.edu.in",
		"ImageURL": "../assets/pfp.jpg"
	},
	{
		"ID": "SEC22IT300",
		"Name": "Hariharan V",
		"Class": "IT A",
		"DOB": "13 Jul 2005",
		"ParentName": "Venkatesan",
		"MobileNumber": "8948654070",
		"Email": "sec22it300@sairamtap.edu.in",
		"ImageURL": "../assets/pfp.jpg"
	},
	{
		"ID": "SEC22IT300",
		"Name": "Hariharan V",
		"Class": "IT A",
		"DOB": "13 Jul 2005",
		"ParentName": "Venkatesan",
		"MobileNumber": "8948654070",
		"Email": "sec22it300@sairamtap.edu.in",
		"ImageURL": "../assets/pfp.jpg"
	},
	{
		"ID": "SEC22IT300",
		"Name": "Hariharan V",
		"Class": "IT A",
		"DOB": "13 Jul 2005",
		"ParentName": "Venkatesan",
		"MobileNumber": "8948654070",
		"Email": "sec22it300@sairamtap.edu.in",
		"ImageURL": "../assets/pfp.jpg"
	}
];


function populateTable() {
	const tbody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

	tbody.innerHTML = '';

	jsonData.forEach(item => {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td><input type="checkbox" class="row-select"></td>
			<td>${item.ID}</td>
			<td>
				<img src="${item.ImageURL}" alt="${item.Name}" class="user-image">
				${item.Name}
			</td>
			<td>${item.Class}</td>
			<td>${item.DOB}</td>
			<td>${item.ParentName}</td>
			<td>${item.MobileNumber}</td>
			<td>${item.Email}</td>
			<td>
				<svg class="visibility" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
					<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
					<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
				</svg>
				<svg class="edit" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
					<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
					<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
				</svg>
			</td>
		`;
		tbody.appendChild(row);
	});

	setupSelectAll();
}

function setupSelectAll() {
	const selectAllCheckbox = document.getElementById('select-all');
	const rowCheckboxes = document.querySelectorAll('.row-select');

	selectAllCheckbox.addEventListener('change', () => {
		rowCheckboxes.forEach(checkbox => {
			checkbox.checked = selectAllCheckbox.checked;
		});
	});
}

populateTable();