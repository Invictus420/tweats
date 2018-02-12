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
5. /salty shows grumpy, /fanperson shows happy

Results:

1. 659774
2. [{"id":"lost_dog","n_ggers":549},
 {"id":"dogzero","n_ggers":334},
 {"id":"tweetpet","n_ggers":310},
 {"id":"VioletsCRUK","n_ggers":296},
 {"id":"tsarnick","n_ggers":258},
 {"id":"SongoftheOss","n_ggers":257},
 {"id":"what_bugs_u","n_ggers":246},
 {"id":"Karen230683","n_ggers":244},
 {"id":"keza34","n_ggers":239},
 {"id":"SallytheShizzle","n_ggers":234}]
 
 3. [{"_id":"@mileycyrus","fame":4310},
 {"_id":"@tommcfly","fame":3837},
 {"_id":"@ddlovato","fame":3349},
 {"_id":"@Jonasbrothers","fame":1263},
 {"_id":"@DavidArchie","fame":1222}]
 
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
 
 5. [{"_id":"alyssa_f17","saltyness":0},
 {"_id":"catfuel","saltyness":0},
 {"_id":"IntheOffing","saltyness":0},
 {"_id":"caffeinated_mom","saltyness":0},
 {"_id":"mattfca","saltyness":0}]
 
 [{"_id":"RobFoxKerr","saltyness":4},
{"_id":"puchal_ek","saltyness":4},
{"_id":"EvolveTom","saltyness":4},
{"_id":"bpbabe","saltyness":4},
{"_id":"sdancingsteph","saltyness":4}]
