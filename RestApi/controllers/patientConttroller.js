const getAllPatients = async (req, res) => {
    res.send('all patients');
}

const createPatient = async (req, res) => {
    res.send('created patient');
}

const getSinglePatient = async (req, res) => {
    res.send('got a patiend by id');
}

const updatePatient = async(req, res) => {
    res.send('updated patient');
}

module.exports = {
    getAllPatients,
    createPatient,
    getSinglePatient,
    updatePatient
}
