// when the "submit-button" is clicked, the contents of the 
// contact-page are replaced with a single <p> element that 
// reads "Thank you for your message" in size 24 font.
// hint: you can change the style of an element by modifying 
// the value of that element's .style.fontSize, or by updating its .classList

const submitButton = document.getElementById('submit-button');

//function for the event
function handleSubmit() {
    //contact page
    const contactPage = document.getElementById('contact-page');
    //clearing the contents obn contact page
    contactPage.innerHTML = '';
    //creating a new paragraph
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for your message';
    thankYouMessage.style.fontSize = '24px';
    //appending the paragraph
    contactPage.appendChild(thankYouMessage);
}

//adding submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    handleSubmit();
});