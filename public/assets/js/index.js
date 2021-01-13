// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
    console.info('DOM loaded');
    }

    // update: updates burgers added to the devoured list
    const devourBurger = document.querySelectorAll('.devour-btn');

    // Set up the event listener for the devour button
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
                
                body: JSON.stringify(eatenBurger),
                }).then((response) => {
                // Reload the page so the user can see the devoured burgers
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

    // Adding a burger to "to-be-eaten" list
    const addBurger = document.querySelector('.create-form');

    if (addBurger) {
        addBurger.addEventListener('submit', (e) => {
        e.preventDefault();

        const newBurger = {
            burger_name: document.getElementById('burger-input').value.trim(),
            devoured: false
        };

            fetch('/api/burgers', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
        
            body: JSON.stringify(newBurger),
            }).then(() => {
            // Empty the form
            document.getElementById('burger-input').value = '';
            console.log('Added a new burger!');
            location.reload();
            });
        });
    }
});