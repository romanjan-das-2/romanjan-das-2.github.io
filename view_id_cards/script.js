window.addEventListener('DOMContentLoaded', (event) => {
    Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTP7uy73S54N6qh6vgMIVTOSRNDquVA_YgCwHHfJkcX8H4lQi1nQ4Rtl_CLsVXHYA24QzSSmzUps4KO/pub?gid=161251701&single=true&output=csv', {
      download: true,
      complete: function(results) {
        const tbody = document.getElementById('detailsTable').querySelector('tbody');
        const timestampSelect = document.getElementById('timestampSelect');
  
        // Populate dropdown menu with timestamps and filter table rows
        const timestamps = new Set();
        results.data.slice(1).forEach(row => {
          const timestamp = row[1].trim();
          if (timestamp && !timestamps.has(timestamp)) {
            timestamps.add(timestamp);
            const option = new Option(timestamp, timestamp);
            timestampSelect.add(option);
          }
        });
  
        // Function to filter table rows based on selected timestamp
        function filterTableByTimestamp(timestamp) {
          const index = results.data.findIndex(row => row[1].trim() === timestamp);
          if (index !== -1) {
            document.getElementById('name').textContent = results.data[index][2];
            document.getElementById('fathers_or_husbands_name').textContent = results.data[index][3];
            document.getElementById('date_of_birth').textContent = results.data[index][5];
            document.getElementById('registration_number').textContent = results.data[index][6];
            document.getElementById('blood_group').textContent = results.data[index][7];
            document.getElementById('office_address').textContent = results.data[index][8];
            document.getElementById('residential_address').textContent = results.data[index][9];
            document.getElementById('phone_number').textContent = results.data[index][10];
            
            // Extract link from the first table and display in the second table
            const photoLink = results.data[index][4];
            const photoCell = document.getElementById('passport_photo');
            if (photoLink && photoLink.startsWith('https://drive.google.com/')) {
              photoCell.innerHTML = `<a href="${photoLink}" target="_blank">View Photo</a>`;
            } else {
              photoCell.textContent = ''; // Clear content if link is not found or invalid
            }
          }
        }
  
        // Event listener for dropdown change
        timestampSelect.addEventListener('change', function() {
          const selectedTimestamp = this.value;
          filterTableByTimestamp(selectedTimestamp);
        });
  
        // Initial table render with the first timestamp selected by default
        const firstTimestamp = timestampSelect.options[0].value;
        filterTableByTimestamp(firstTimestamp);
      },
      error: function(error) {
        console.error('Error parsing CSV:', error);
      }
    });
  });
  