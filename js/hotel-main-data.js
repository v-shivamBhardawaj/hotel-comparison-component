// file name = hotel-main-data.js
// var Data = temp;

// // Creating variables for rate and contents data to traverse over them to access the properties and compare the outputs
const data1 = objData.data;
const hotel_data = data1.content.hotels;
// Data in rates
const price_data = data1.rates.hotels;

function hotelProduct(_hotelObj,_priceObj){
    let reviewNo_obj = new Object()
    let rating_obj = new Object()
    let price_obj = new Object()
    let discount_obj = new Object()
    let free_cancellation_obj = new Object()
    let combined_obj = new Object()
    for (let i = 0; i < price_data.length; i++) {
            reviewNo_obj[i] = hotel_data[i].gr.reviews
            rating_obj[i] = hotel_data[i].gr.rating
            price_obj[i] = price_data[i].price
            discount_obj[i] = price_data[i]['totalDiscount']
            free_cancellation_obj[i] = price_data[i]['freeCancel']
            combined_obj[i] = {
                reviews: reviewNo_obj[i],
                rating: rating_obj[i],
                price: price_obj[i],
                discount: discount_obj[i],
                freeCancellation: free_cancellation_obj[i]
            }
        }
    return combined_obj
    }


