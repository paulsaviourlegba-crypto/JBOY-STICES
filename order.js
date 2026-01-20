// ===== ORDER PAGE JAVASCRIPT WITH jQUERY ANIMATIONS =====

$(document).ready(function () {

    // Fade in page
    $("body").hide().fadeIn(2000);

    // Animate form appearance
    $("form").css({ opacity: 0, marginTop: "40px" })
             .animate({ opacity: 1, marginTop: "0px" }, 800);

    // Popup message
    function showMessage(message, type = "success") {
        const msgBox = $(`<div class="msg-box ${type}">${message}</div>`);

        $("body").append(msgBox);

        msgBox.hide().slideDown(300); // slide down animation

        setTimeout(() => {
            msgBox.fadeOut(4000, () => msgBox.remove());
        }, 3000);
    }

    // Submit form
    $("form").on("submit", function (event) {
        event.preventDefault();

        let name = $("input[name='name']").val().trim();
        let phone = $("input[name='phone']").val().trim();
        let cloth = $("input[name='cloth']").val().trim();
        let measurements = $("textarea[name='measurements']").val().trim();

        if (name === "" || phone === "" || cloth === "") {
            showMessage("Please fill in all required fields!", "error");
            return;
        }

        if (!/^\d{11}$/.test(phone)) {
            showMessage("Phone number must be 11 digits!", "error");
            return;
        }

        showMessage("Order submitted successfully!");
        $("form")[0].reset();
    });

    // Input highlight animation
    $("input, textarea").on("focus", function () {
        $(this).animate({ borderColor: "#b387ff" }, 200);
    });

    $("input, textarea").on("blur", function () {
        $(this).animate({ borderColor: "#ddd" }, 200);
    });

    // Button click animation
    $("button").on("mousedown", function () {
        $(this).animate({ opacity: 0.7 }, 100);
    }).on("mouseup mouseleave", function () {
        $(this).animate({ opacity: 1 }, 100);
    });

});
