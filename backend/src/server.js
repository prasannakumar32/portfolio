"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var mongoose_1 = require("mongoose");
var authRoutes = require('./routes/auth');
var dashboardRoutes = require('./routes/dashboard');
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 5000;
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
mongoose_1["default"].connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dashboard')
    .then(function () { return console.log('Connected to MongoDB'); })["catch"](function (err) { return console.error('MongoDB connection error:', err); });
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.get('/api/health', function (req, res) {
    res.json({ status: 'OK', message: 'Server is running' });
});
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
