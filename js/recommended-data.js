const data = objData.data;
const hotel_info = data.content.hotels;
// Data in rates
const price_info = data.rates.hotels;
const obj = new HotelDataProcessor(objData)

//Comparison Criterions
const min_rating = 4.0;
const min_reviews = 150;
const max_price = 3000;
const min_price = 3000;

// Step 1: Convert object to an array of entries
const resultData = Object.entries(obj.hotelProduct());

// Step 2: Sort the entries based on price

// let sortingPreference = prompt('Enter your sorting Preference.')
validEntries = new Array;
resultData.forEach(hotel => {
    if(hotel[1].reviews>=min_reviews){
        if(hotel[1].rating>=min_rating){
            validEntries.push(hotel)
        }
    }
})
sortedEntries = validEntries.sort((a, b) => a[1].price - b[1].price);
// sort((a, b) => b[1].reviews - a[1].reviews);
// &&((a, b) => b[1].rating - a[1].rating)&&((a, b) => a[1].price - b[1].price)
  
// Step 3: Convert the sorted array back into an object
// const sortedObject = Object.fromEntries(sortedEntries);
  
const arrayObj = new Array()
for(let i=0;i<3;i++){
    arrayObj.push(sortedEntries[i])
}
// Output the sorted object
console.log(arrayObj);
  
  
function commaSeparatedPrices(value) {
    return value.toLocaleString('en-IN');
}
const outputDiv = document.getElementById('output');
arrayObj.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
        <strong>Item ${item[0]}</strong><br>
        Reviews: ${item[1].reviews}<br>
        Rating: ${item[1].rating}<br>
        Price: ${commaSeparatedPrices(item[1].price)}<br>
        Discount: ${commaSeparatedPrices(item[1].discount)}<br>
        Free Cancellation: ${item[1].freeCancellation ? 'Yes' : 'No'}
    `;
    outputDiv.appendChild(div);
});