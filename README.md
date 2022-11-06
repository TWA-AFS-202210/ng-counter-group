# Angular Counter group Component

## Requirements

1. Create a new component CounterGroup,  user can click add counter button to create a new Counter.

2. When user clicks on any of the Counter components "+" or "-", user expects to see the sum of all the counters at the bottom.

3. As a user, I want to a reset button in counter group component beside sum, when click it all number of counters will be set to 0, sum will also change.

4.  Extract sum counts method into service file, and write service test cover this method

(Optional) 5. As a user, I want to know which counter was last changed. user wants to see the index number (starting at 1) of the last changed "counter"  that at the bottom right corner. “The last counter changed is number 1”

(Optional) 6. As a user, I want to know which counter was last changed. user wants to see the value of the last changed "counter"  that at the bottom right corner. “The last counter changed is number 1, value is 1”

# Tips - how to add counter-group component 
- `npm run ng  generate component counter-group`