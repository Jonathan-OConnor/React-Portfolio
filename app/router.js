function router(app, API_URL, STATIC_PATH, transporter, mailOptions) {
    app.post('/api/email', async function (req, res) {
        const email = JSON.stringify(req.body.email)
        const msg = JSON.stringify(req.body.msg)
        mailOptions.text = "Contact Email: " + email + '\n' + "Message: " + msg
        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                console.log("Error " + err);
                res.status(500).send({message:"This is an error"})
            } else {
                console.log("Email sent successfully");
                res.send({message: "Email sent"});
            }
        });
      
    })


}

module.exports = router