// ===== CONTACT PAGE → WHATSAPP =====

$(document).ready(function () {

    function showMessage(message, type = "success") {
        const msgBox = $(`<div class="msg-box ${type}">${message}</div>`);
        $("body").append(msgBox);
        msgBox.hide().slideDown(300);

        setTimeout(() => {
            msgBox.fadeOut(400, () => msgBox.remove());
        }, 3000);
    }

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        let name = $("input[name='name']").val().trim();
        let email = $("input[name='email']").val().trim();
        let message = $("textarea[name='message']").val().trim();

        if (!name || !email || !message) {
            showMessage("All fields are required", "error");
            return;
        }

        let whatsappNumber = "2349118383505"; // SAME NUMBER

        let whatsappMessage =
            `*NEW CONTACT MESSAGE*%0A%0A` +
            `Name: ${name}%0A` +
            `Email: ${email}%0A` +
            `Message: ${message}`;

        let whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        showMessage("Opening WhatsApp...");
        setTimeout(() => {
            window.open(whatsappURL, "_blank");
        }, 1000);

        this.reset();
    });

});
