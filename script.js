fetch('naver_free_trial_data.csv')
    .then(response => response.text())
    .then(text => {
        Papa.parse(text, {
            header: false,
            complete: function(results) {
                const tableBody = document.getElementById('data-table-body');
                const data = results.data;
                const rows = data.slice(1);

                rows.forEach(row => {
                    const [category, title, dateRange, numberOfPeople, imageUrl, link] = row;

                    if (category && title && dateRange && numberOfPeople && imageUrl && link) {
                        const rowElement = document.createElement('tr');

                        rowElement.innerHTML = `
                            <td>${category}</td>
                            <td><a href="${link}" target="_blank">${title}</a></td>
                            <td>${dateRange}</td>
                            <td>${numberOfPeople}</td>
                            <td>
                                <img src="${imageUrl}" alt="Image" style="cursor: pointer;" onclick="openImage('${imageUrl}')">
                            </td>
                        `;
                        tableBody.appendChild(rowElement);
                    }
                });
            },
            error: function(error) {
                console.error('Error parsing CSV data:', error);
            }
        });
    })
    .catch(error => console.error('Error fetching CSV data:', error));

    function sortTable(columnIndex, order) {
        const table = document.querySelector('table');
        const rows = Array.from(table.querySelectorAll('tbody tr'));
    
        rows.sort((rowA, rowB) => {
            const cellA = rowA.children[columnIndex].innerText.trim();
            const cellB = rowB.children[columnIndex].innerText.trim();
    
            let comparison = 0;
    
            if (columnIndex === 2) { // Date Range Sorting
                const dateA = new Date(cellA.split('~')[0].trim());
                const dateB = new Date(cellB.split('~')[0].trim());
                comparison = dateA - dateB;
            } else if (columnIndex === 3) { // Number of People Sorting
                const numberA = parseInt(cellA, 10);
                const numberB = parseInt(cellB, 10);
                comparison = numberA - numberB;
            } else {
                comparison = cellA.localeCompare(cellB);
            }
    
            return order === 'asc' ? comparison : -comparison;
        });
    
        rows.forEach(row => table.querySelector('tbody').appendChild(row));
    }

    function filterByCategory() {
        const selectedCategory = document.getElementById('category-filter').value;
        const rows = document.querySelectorAll('#data-table-body tr');
    
        rows.forEach(row => {
            const categoryCell = row.children[0].innerText;
            if (selectedCategory === "" || categoryCell === selectedCategory) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    function openImage(imageUrl) {
        window.open(imageUrl, '_blank');
    }
