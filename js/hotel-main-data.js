class HotelDataProcessor {
    constructor(objData) {
        this.data1 = objData.data;
        this.hotelData = this.data1.content.hotels;
        this.priceData = this.data1.rates.hotels;
    }

    hotelProduct() {
        const combinedObj = [];

        for (let i = 0; i < this.priceData.length; i++) {
            const reviewNo = this.hotelData[i].gr.reviews;
            const rating = this.hotelData[i].gr.rating;
            const price = this.priceData[i].price;
            const discount = this.priceData[i]['totalDiscount'];
            const freeCancellation = this.priceData[i]['freeCancel'];

            combinedObj[i] = {
                reviews: reviewNo,
                rating: rating,
                price: price,
                discount: discount,
                freeCancellation: freeCancellation,
            };
        }

        return combinedObj;
    }
}

// // Usage
// const hotelDataProcessor = new HotelDataProcessor(objData);
// const result = hotelDataProcessor.hotelProduct();

// export default HotelDataProcessor;