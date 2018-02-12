# tweats

How many Twitter users are in the database?
Which Twitter users link the most to other Twitter users? (Provide the top ten.)
Who is are the most mentioned Twitter users? (Provide the top five.)
Who are the most active Twitter users (top ten)?
Who are the five most grumpy (most negative tweets) and the most happy (most positive tweets)? (Provide five users for each group)


Node.js Express Application


Api endpoints:

1. /users, returns the amount of users
2. /topfriends returns the users who link others the most
3. /famous returns the most mentioned users
4. /nolifr returns most active, by post count, user
5. /salted shows grumpy, /unsalted shows happy

Results:

1. 659774
2. [{"id":"lost_dog","mentions":549},
 {"id":"dogzero","mentions":334},
 {"id":"tweetpet","mentions":310},
 {"id":"VioletsCRUK","mentions":296},
 {"id":"tsarnick","mentions":258},
 {"id":"SongoftheOss","mentions":257},
 {"id":"what_bugs_u","mentions":246},
 {"id":"Karen230683","mentions":244},
 {"id":"keza34","mentions":239},
 {"id":"SallytheShizzle","mentions":234}]
 
 3. [{"_id":"@mileycyrus","mentioned":4310},
 {"_id":"@tommcfly","mentioned":3837},
 {"_id":"@ddlovato","mentioned":3349},
 {"_id":"@Jonasbrothers","mentioned":1263},
 {"_id":"@DavidArchie","mentioned":1222}]
 
 4. [{"_id":"lost_dog","total":549},
 {"_id":"webwoke","total":345},
 {"_id":"tweetpet","total":310},
 {"_id":"SallytheShizzle","total":281},
 {"_id":"VioletsCRUK","total":279},
 {"_id":"mcraddictal","total":276},
 {"_id":"tsarnick","total":248},
 {"_id":"what_bugs_u","total":246},
 {"_id":"Karen230683","total":238},
 {"_id":"DarkPiano","total":236}]
 
 5. [{"_id":"alyssa_f17","avg":0},
 {"_id":"catfuel","avg":0},
 {"_id":"IntheOffing","avg":0},
 {"_id":"caffeinated_mom","avg":0},
 {"_id":"mattfca","avg":0}]
 
 [{"_id":"RobFoxKerr","avg":4},
{"_id":"puchal_ek","avg":4},
{"_id":"EvolveTom","avg":4},
{"_id":"bpbabe","avg":4},
{"_id":"sdancingsteph","avg":4}]
