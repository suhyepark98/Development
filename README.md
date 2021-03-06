# Development
## Architecture
This "Adidas Online Shopping" app is built mainly from three different files: App.js,  FilteredList.js, DisplayList.js. Data and call-back functions get passed down through these components in the following way:

When App is called, the React app is started. Inside it, we initialize the list of product items, each of which is defined by id, name, gender, type, price, and image. The list is then passed into the FilteredList component as props.

FilteredList is a component that uses this list and constructs the content portion of the website, including the navbars for filters, the dropdown for sorting options, the product options section, and the cart section. Specifically, it performs filtering based on "Gender" and "Type" and sorting based on "Price" to only display matching products. When a user selects a different option for any of the filters on the navbars or the sort method on the dropdown, the corresponding implemented onSelect method is called to cause the state change (on gender, type, or sort).

Aggregator functionality is implemented in this class as well to calculate the total price of the products in the cart. "Add to Cart," "Remove from Cart," "Add Quantity," and "Subtract Quantity" functions are built. The total price in the cart is calculated in this class as well, using the state cart dictionary.

When DisplayList is called inside FilteredList to get the product display (for either the products options or the cart), the four aforementioned call-back functions are passed as well as the list of product options or the cart dictionary, and whether it is a cart. This boolean is needed because the info display for a product shows different buttons for the product options and the cart. Also, each of the four call-back functions is used to trigger a state change when the user clicks on the matching button ("Add to Cart," "Remove from Cart," "Add Quantity," and "Subtract Quantity"), which invokes an onClick function that calls the call-back function, which traces back to FilteredList to cause a state change in that class (on the cart dictionary).

Every time a state is changed, the render function of the class that the state belongs to is called to reflect the state change in the UI.
