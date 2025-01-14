var TO_ADDRESS = "miapolymercreations@gmail.com";

function doPost(e) {

    try {
        Logger.log(e); // the Google Script version of console.log see: Class Logger
        MailApp.sendEmail(TO_ADDRESS, "Contact Form Submitted",
            JSON.stringify(e.parameters));
        // return json success results
        return ContentService
            .createTextOutput(
                JSON.stringify({
                    "result": "success",
                    "data": JSON.stringify(e.parameters)
                }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (error) { // if error return this
        Logger.log(error);
        return ContentService
            .createTextOutput(JSON.stringify({ "result": "error", "error": e }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}