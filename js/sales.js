// Past sales data
const pastSales = [
    {
        title: "Property 1",
        image: "sale1.jpg",
        address: "1234 Example St, San Diego, CA 92101",
        soldPrice: "$500,000",
        soldDate: "01/01/2023"
    },
    {
        title: "Property 2",
        image: "sale2.jpg",
        address: "5678 Example St, San Diego, CA 92101",
        soldPrice: "$550,000",
        soldDate: "02/15/2023"
    },
    // Add more properties...
];

// Generate past sales cards
const pastSalesContainer = document.getElementById("past-sales");
pastSales.forEach(sale => {
    const card = `
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="${sale.image}" class="card-img-top" alt="${sale.title}">
                <div class="card-body">
                    <h5 class="card-title">${sale.title}</h5>
                    <p class="card-text">${sale.address}</p>
                    <p class="card-text">Sold Price: ${sale.soldPrice}</p>
                    <p class="card-text">Sold Date: ${sale.soldDate}</p>
                </div>
            </div>
        </div>
    `;
    pastSalesContainer.innerHTML += card;
});