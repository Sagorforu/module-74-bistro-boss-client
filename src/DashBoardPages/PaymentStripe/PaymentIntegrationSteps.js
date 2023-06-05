/**
 * 1. Install stripe and react stripe js
 * 2. create a check out form with card elements (card element contains: card number, expiration date, cvs, zip code)
 * 3. create account on stripe and get the publishable key pk
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment
 * 7. On the server side: install stripe
 * 8. create a payment intent api with payment method types: ['card']
 * 9. make sure you provide amount in cents (multiply price with 100)
 * 10. Call payment intent api to get client secret and store it in a state.
 * 11. Use confirmCardPayment api with client secret card info
 * 12. Display error and display success card error
 * 13. do things after payment ---->
 */