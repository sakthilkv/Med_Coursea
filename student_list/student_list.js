
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
		"ID": "SEC22IT026",
		"Name": "Shiv Shankar N",
		"Class": "IT A",
		"DOB": "29 june 2005",
		"ParentName": "Natarajan S",
		"MobileNumber": "6381052173",
		"Email": "sec22it026@sairamtap.edu.in",
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
