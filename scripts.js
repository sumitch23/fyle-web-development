document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contactButton");
    const popupForm = document.getElementById("popupForm");
    const closeButton = document.getElementById("closeButton");

    contactButton.addEventListener("click", function() {
        popupForm.style.display = "flex";
    });

    closeButton.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popupForm) {
            popupForm.style.display = "none";
        }
    });

    $(document).ready(function() {
        $('#contactForm').on('submit', function(event) {
            event.preventDefault();

            const formData = {
                email: $('#email').val(),
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val(),
                consent: $('#consent').is(':checked')
            };

            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/submit-form',
                data: JSON.stringify(formData),
                contentType: 'application/json',
                success: function(response) {
                    $('#responseMessage').text(response.message).addClass('alert alert-success');
                    $('#contactForm')[0].reset();
                },
                error: function(error) {
                    $('#responseMessage').text('An error occurred while submitting the form.').addClass('alert alert-danger');
                }
            });
        });

        // Initialize slick slider with custom dots
        $('.slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            arrows: true,
            dots: false
        });

        // Hover effect to display content
        $('.slide').hover(function() {
            $(this).find('.hover-content').fadeIn();
        }, function() {
            $(this).find('.hover-content').fadeOut();
        });

        });
    });
