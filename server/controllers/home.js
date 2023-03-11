module.exports = {
    getIndex: (req, res) => {
        res.send("this is the index");
    },
};

//In order to send data from the server to client, it must be sent using res.send
