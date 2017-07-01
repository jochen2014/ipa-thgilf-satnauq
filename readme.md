# summary
## time
total time :  2 hours 46 minutes
```
$ git show 8d30ba7 -s #first commit
commit 8d30ba7469550ef90fe864cd1f56afc376912e39
Author: Bo Chen <bochen2014@yahoo.com>
Date:   Sat Jul 1 13:23:27 2017 +1000
start from scratch

$ git show bdd642d  -s #last commit
commit bdd642da70998644049bb1763ec6922dadb52810
Author: Bo Chen <bochen2014@yahoo.com>
Date:   Sat Jul 1 16:09:49 2017 +1000
very smooth deployment experience to heroku. no drama at all

```

## comments:
1. overall it's a good test. requirement is clear and not complicated
2. it seems to be a pure backend tech test. no front-end skills involved at all
3. just FYI. I built [this](https://my-trips.azurewebsites.net/) for one of my personal projects. after this test, I think I may deploy it to heroku as I find it takes lesser time to wake up after website been idle and forced to sleep
   

# how to run the code and execute tests
```
npm install
npm start
npm test
```
server is listning at port `8000` by default
## to build
it will transpile es6 to es5 and copy to `dist` folder. ready to be zipped and deployed anywhere
```
npm run build
```

## to deploy
```
$ heroku create bo-qantas-api
Creating bo-qantas-api... done
https://bo-qantas-api.herokuapp.com/ | https://git.heroku.com/bo-qantas-api.git

```

keroku logs  --tail
```
2017-07-01T06:05:46.000000+00:00 app[api]: Build succeeded
2017-07-01T06:05:54.474675+00:00 heroku[web.1]: State changed from crashed to starting
2017-07-01T06:05:56.163283+00:00 heroku[web.1]: Starting process with command `npm start`
2017-07-01T06:05:59.434471+00:00 app[web.1]:
2017-07-01T06:05:59.434482+00:00 app[web.1]: > ipa-thgilf-satnauq@1.0.0 start /app
2017-07-01T06:05:59.434483+00:00 app[web.1]: > node index.js
2017-07-01T06:05:59.434484+00:00 app[web.1]:
2017-07-01T06:06:00.019957+00:00 app[web.1]: server is listening on http://localhost:31710
2017-07-01T06:06:00.423097+00:00 heroku[web.1]: State changed from starting to up
2017-07-01T06:06:12.000489+00:00 heroku[router]: at=info method=GET path="/" host=bo-qantas-api.herokuapp.com request_id=c249d3cf-655b-443a-81d6-b266a1139438 fwd="203.219.10.1
44" dyno=web.1 connect=1ms service=42ms status=404 bytes=383 protocol=https
2017-07-01T06:06:12.308221+00:00 heroku[router]: at=info method=GET path="/favicon.ico" host=bo-qantas-api.herokuapp.com request_id=7780ffd5-c23d-462d-9ef5-a87af91a86a2 fwd="2
03.219.10.144" dyno=web.1 connect=1ms service=8ms status=404 bytes=394 protocol=https
```
