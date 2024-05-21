// Dark and light mode part start

function toggleMode() {
    var body = document.body;
    var modeBtn = document.querySelector('.mode-btn');
    
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeBtn.textContent = 'Light Mode';
    } else {
        modeBtn.textContent = 'Dark Mode';
    }
}

// Dark and light mode part end


// Nav ver active part start

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(function (menuLink) {
        menuLink.addEventListener('click', function (event) {
            menuLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            menuLink.classList.add('active');
        });
    });
});

// // Nav ver active part end

 
// // From validation part start

document.addEventListener('DOMContentLoaded', function () {
   
    document.getElementById('Feedback_Form').addEventListener('submit', function (event) {
        event.preventDefault(); 

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('Phone').value;
        var message = document.getElementById('subject').value;

    
        document.getElementById('submitted_name').innerText = name;
        document.getElementById('submitted_email').innerText = email;
        document.getElementById('submitted_phone').innerText = phone;
        document.getElementById('submitted_message').innerText = message;
        document.getElementById('contact_form').style.display = 'flex';
        document.getElementById('submitted_data').style.display = 'block';
    });
});

// From validation part end

// From validation and gender validaation part start




