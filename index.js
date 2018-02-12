const ex = require('express');
const mc = require('mongodb')
const bp = require('body-parser')
const path = require('path')

const url = 'mongodb://localhost:27017';
const stuff = 'social_net';

const app = ex();

mc.connect(url, function (err, client) {
    if (err) {
        console.log("err")
        console.log(err);
    }
    else {
        const db = client.db(stuff);
        const tweets = db.collection('tweets');

        app.listen(9001, function () { console.log("we gucci") })

        app.get('/users', function (req, res) {
            findUsers(function (users) {
                res.send(JSON.stringify(users));
            })
        })
        app.get('/topfriends', function (req, res) {
            links(function (top) {
                res.send(JSON.stringify(top));
            })
        })
        app.get('/famous', function (req, res) {
            onePercent(function (top) {
                res.send(JSON.stringify(top));
            })
        })
        app.get('/nolifr', function (req, res) {
            nolife(function (top) {
                res.send(JSON.stringify(top));
            })
        })
        app.get('/salty', function (req, res) {
            onePercent(1, function (top) {
                res.send(JSON.stringify(top));
            })
        })
        app.get('/fanperson', function (req, res) {
            onePercent(-1, function (top) {
                res.send(JSON.stringify(top));
            })
        })

        function findUsers(callback) {
            tweets.distinct('user', function (err, result) {
                if (err) console.log("fail")
                else {
                    callback(result.length);
                }
            })
        }

        function links(callback) {
            tweets.aggregate([{ $group: { _id: "$user", n_ggers: { $sum: { $subtract: [{ $size: { $split: ["$text", "@"] } }, 1] } } } },
            { $sort: { total: -1 } },
            { $limit: 10 }],
                { allowDiskUse: true }).toArray((err, item) => {
                    if (err) { console.log(err) }
                    else { callback(item) }
                });

        }

        function onePercent(callback) {
            tweets.aggregate([{ $addFields: { words: { $split: ["$text", " "] } } },
            { $unwind: "$words" },
            { $match: { words: { $regex: "@.", $options: 'm' } } },
            { $group: { _id: "$words", fame: { $sum: 1 } } },
            { $sort: { fame: -1 } },
            { $limit: 5 }],
                { allowDiskUse: true }).toArray((err, item) => {
                    if (err) { console.log(err) }
                    else { callback(item) }
                });
        }

        function nolife(callback) {
            tweets.aggregate([{ $group: { _id: "$user", keyboardcrusader: { $sum: 1 } } },
            { $sort: { keyboardcrusader: -1 } },
            { $limit: top_x }],
                { allowDiskUse: true }).toArray((err, item) => {
                    if (err) { console.log(err) }
                    else { callback(item) }
                });
        }

        function salt(pj ,callback) {
            tweets.aggregate([{ $group: { _id: "$user", saltyness: { $avg: "$polarity" } } },
            { $sort: { saltyness: pj } },
            { $limit: 5 }],
                { allowDiskUse: true }).toArray((err, item) => {
                    if (err) { console.log(err) }
                    else { callback(item) }
                })
        }


    }

})