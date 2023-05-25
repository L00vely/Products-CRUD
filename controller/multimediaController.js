const pool = require('../model/database');

const { getMultimedia } = require('../model/adb');

exports.getMultimedia = async(req, res, next) => {
    const { id }= req.params;
    try {
        const multimedia = await getMultimedia(id);
        const imageData = multimedia.rows[0].multimedia;
     
        return res.status(200).json({ data: imageData })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}
