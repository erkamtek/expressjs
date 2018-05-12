
module.exports = function(app,con){

    app.route('/enrollments')
        .get(function (req, res) {
            res.send('Get all enrollments')
        })
        .post(function (req, res) {
            res.send('Add a new enrollment')
        })
        .put(function (req, res) {
            res.send('Update a enrollment')
        })
        .delete(function (req, res) {
            res.send('Delete a enrollment')
        });

    app.route('/enrollments/students/:stuId/classes/:classId')
        .get(function (req, res) {
            res.send('Get the enrollment with id: ' + req.params.stuId + ", " + req.params.classId);
        });
};