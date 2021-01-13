// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
    console.info('DOM loaded');
    }

    // UPDATE
    const devourBurger = document.querySelectorAll('.devour-btn');

    // Set up the event listener for the create button
    if (devourBurger) {
        devourBurger.forEach((button) => {
            button.addEventListener('click', (e) => {
            // Grabs the id of the element that goes by the name, "id"
            const id = e.target.getAttribute('data-id');
            console.log("id:", id)
            // const newSleep = e.target.getAttribute('data-newsleep');

            const eatenBurger = {
            devoured: true,
            };

                fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },

                // make sure to serialize the JSON body
                body: JSON.stringify(eatenBurger),
                }).then((response) => {
                // Check that the response is all good
                // Reload the page so the user can see the new quote
                    if (response.ok) {
                        console.log(`changed devoured to: ${devoured}`);
                        location.reload('/');
                    } else {
                    alert('something went wrong!');
                    }
                });
            });
        });
    }

    // CREATE
    const addBurger = document.querySelector('.create-form');

    if (addBurger) {
        addBurger.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBurger = {
          burger_name: document.getElementById('burger-input').value.trim(),
          devoured: false
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() => {
          // Empty the form
          document.getElementById('burger-input').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Added a new burger!');
          location.reload();
        });
      });
    }
});
  