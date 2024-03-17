 
    // Create a div element
const dynamicDiv = document.createElement('div');

// Set the style for the div
dynamicDiv.style.position = 'fixed';
dynamicDiv.style.bottom = '20px';
dynamicDiv.style.right = '20px';
dynamicDiv.style.width = '60px';
dynamicDiv.style.height = '60px';
dynamicDiv.style.backgroundColor = '#007bff';
dynamicDiv.style.borderRadius = '5px';
dynamicDiv.style.display = 'flex';
dynamicDiv.style.justifyContent = 'center';
dynamicDiv.style.alignItems = 'center';
dynamicDiv.style.color = '#fff';
dynamicDiv.style.fontWeight = 'bold';
dynamicDiv.style.cursor = 'pointer';
dynamicDiv.textContent = 'Hebris'; 


// Append the div to the body of the HTML document
document.body.appendChild(dynamicDiv);
