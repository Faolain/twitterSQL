var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');
var User = require('../models').User;
var Tweet = require('../models').Tweet;
module.exports = function(io){

    router.get('/', function (req, res) {
        var tweetsArr = [];

        Tweet.findAll({include:[ User ]})
        .then(function(tweets){
            for(var tweet in tweets){
                var dbTweet = tweets[tweet].get({plain:true});
                if(dbTweet.User===null){
                    break;
                }
                //console.log(dbTweet);
                var newTweet = {
                    "id": dbTweet.id,
                    "name": dbTweet.User.name,
                    "text": dbTweet.tweet
                };
                tweetsArr.push(newTweet);
            }
        })
        .then(function(){
            //console.log(tweetsArr);
            res.render('index', {
            title: 'Twitter.js',
            tweets: tweetsArr
            });

        });


    });

    router.get('/users/:name', function (req, res) {
        var name = req.params.name;
        var tweetsArr = [];

        User.findAll({where:{name:name},
            include:[ Tweet ]})
        .then(function(user){


            var dbTweet = user[0].get({plain:true});
            //console.log(dbTweet);
            for(var i=0;i<dbTweet.Tweets.length;i++){
                var newTweet = {
                "id": dbTweet.id,
                "name": dbTweet.name,
                "text": dbTweet.Tweets[i].tweet
            };

            tweetsArr.push(newTweet);
            }


        })
        .then(function(){
            res.render('index', {
            title: 'Twitter.js - Posts by ' + name,
            name: name,
            tweets: tweetsArr,
            showForm: true
            });

        });
    });

    router.get('/users/:name/tweets/:id', function (req, res) {
        var name = req.params.name;
        var id = parseInt(req.params.id);
        var newTweet = {};

        User.findAll({where:{name:name},
            include:[ Tweet ]})
        .then(function(user){
            var dbUser = user[0].get({plain:true});
            var userTweets = dbUser.Tweets;
            for (var i = 0; i < userTweets.length; i++) {
                if(userTweets[i].id == id){

                    var newTweet = {
                        "id": dbUser.id,
                        "name": dbUser.name,
                        "text": userTweets[i].tweet
                    };
                    res.render('index', {
                        title: 'Twitter.js - Posts by ' + dbUser.name,
                        tweets: [newTweet],
                        showForm: true
                    });
                }
            }


        });

    });

    router.post('/submit', function(req, res) {

        var name = req.body.name;
        var text = req.body.text;

        User.find({where:{name:name}}).then(function(user){
            var UserId = user.get({plain:true}).id;
            Tweet.max('id')
            .success(function(id){

                Tweet.create(
                {id:id+1,UserId:UserId,tweet:text})
                .then(
                io.sockets.emit('new_tweet', { /* tweet info */ }),
                res.redirect('/'));

            });
        });


    });

    return router;

};

