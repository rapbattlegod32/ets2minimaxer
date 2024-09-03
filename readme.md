# Information
This is a tiny project I wanted to do, this allows you to store all your ets2 recent jobs to see if you can get the minimaxer achievement which is to gain 20,000XP within 10,000KM (2XP per 1KM).

# How to use
If you haven't got node install it here: https://nodejs.org/en.

Edit the contents of the 'jobs.json' file in the directory,
example: 
![example](https://raw.githubusercontent.com/rapbattlegod32/ets2minimaxer/main/media/examplepic.png)

Write down the distance(KM) and experience(XP) gained from the delivery and make a duplicate line with a comma at the end and edit those values.

Once you are done with editing the values, open command prompt within the folder by clicking on the address and typing 'cmd', then type
```
node index.js
```
and press enter, you should be presented with the following values:

```
Jobs completed: 0.
Total KM: 0.
Total XP: 0.
XP per KM: 0[GOOD or BAD].
```