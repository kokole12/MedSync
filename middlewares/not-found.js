const notFound = (req, res, next) => {
    res.send('route doesnt exist');
}

module.exports = notFound;
