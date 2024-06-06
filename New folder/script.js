document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });

    const rsvpButtons = document.querySelectorAll('.event button');
    rsvpButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('RSVP confirmed!');
        });
    });
});
