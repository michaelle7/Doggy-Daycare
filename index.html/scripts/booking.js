/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

document.addEventListener('DOMContentLoaded', () => {
    //rates
    const costPerFullDay = 35; // cost for a full day
    const costPerHalfDay = 20; // cost for a half day
    //variables
    let selectedDays = new Set();
    let isFullDay = true;
    //elements
    const dayElements = document.querySelectorAll('.day-selector li');
    const fullDayButton = document.getElementById('full');
    const halfDayButton = document.getElementById('half');
    const calculatedCostElement = document.getElementById('calculated-cost');
    const clearButton = document.getElementById('clear-button');
    //function to calculate cost
    const updateCost = () => {
        let cost = selectedDays.size * (isFullDay ? costPerFullDay : costPerHalfDay);
        calculatedCostElement.innerHTML = `${cost.toFixed(2)}`;
    };

    dayElements.forEach(day => {
        day.addEventListener('click', () => {
            const dayValue = day.id;
            if (selectedDays.has(dayValue)) {
                selectedDays.delete(dayValue);
                day.classList.remove('clicked');
            } else {
                selectedDays.add(dayValue);
                day.classList.add('clicked');
            }
            updateCost();
        });
    });

    fullDayButton.addEventListener('click', () => {
        isFullDay = true;
        fullDayButton.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
        updateCost();
    });

    halfDayButton.addEventListener('click', () => {
        isFullDay = false;
        halfDayButton.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
        updateCost();
    });

    clearButton.addEventListener('click', () => {
        selectedDays.clear();
        isFullDay = true;
        fullDayButton.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
        dayElements.forEach(day => day.classList.remove('clicked'));
        updateCost();
    });
});