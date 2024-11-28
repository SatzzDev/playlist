
new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
          {
            "title": "Somebody's Pleasure",
            "artist": "Aziz Hedra",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Somebody's Pleasure.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273dfa72d72dd91d9b28dedf9e9",
            "lyrics": [
              {
                "time": 7.22,
                "text": "I've been so busy, ignoring, and hiding"
              },
              {
                "time": 13.62,
                "text": "About what my heart actually say"
              },
              {
                "time": 18.87,
                "text": ""
              },
              {
                "time": 23.44,
                "text": "Stay awake while I'm drowning on my thoughts"
              },
              {
                "time": 29.98,
                "text": "Sometimes a happiness is just a happiness"
              },
              {
                "time": 36.11,
                "text": ""
              },
              {
                "time": 41.34,
                "text": "I've never been enjoyin' my serenity"
              },
              {
                "time": 46.78,
                "text": "Even if I've got a lot of company"
              },
              {
                "time": 51.94,
                "text": "That makes me happy"
              },
              {
                "time": 55.74,
                "text": "Soul try to figure it out"
              },
              {
                "time": 59.99,
                "text": "From where I've been escapin'"
              },
              {
                "time": 64.69,
                "text": "Running to end all the sin"
              },
              {
                "time": 68.85,
                "text": "Get away from the pressure"
              },
              {
                "time": 72.34,
                "text": "Wondering to get a love that is so pure"
              },
              {
                "time": 80.91,
                "text": "Gotta have to always make sure"
              },
              {
                "time": 84.83,
                "text": "That I'm not just somebody's pleasure"
              },
              {
                "time": 89.26,
                "text": "I always pretending and lying"
              },
              {
                "time": 95.65,
                "text": "Like I'm used to feel empty"
              },
              {
                "time": 98.05,
                "text": "'Cause all I got is unhappy"
              },
              {
                "time": 102.4,
                "text": "Happiness, can't I get happiness?"
              },
              {
                "time": 107.06,
                "text": "I've never been enjoyin' my serenity"
              },
              {
                "time": 112.2,
                "text": "Even if I've got a lot of company"
              },
              {
                "time": 117.78999999999999,
                "text": "That makes me happy"
              },
              {
                "time": 121.46,
                "text": "Soul try to figure it out"
              },
              {
                "time": 125.68,
                "text": "From where I've been escapin'"
              },
              {
                "time": 130.28,
                "text": "Running to end all the sin"
              },
              {
                "time": 134.32,
                "text": "Get away from the pressure"
              },
              {
                "time": 138.02,
                "text": "Wondering to get a love that is so pure"
              },
              {
                "time": 146.57,
                "text": "Gotta have to always make sure"
              },
              {
                "time": 150.36,
                "text": "That I'm not just somebody's pleasure"
              },
              {
                "time": 157.77,
                "text": ""
              },
              {
                "time": 163.34,
                "text": "It was in a blink of an eye"
              },
              {
                "time": 167.16,
                "text": "FindYear of Release: 20231,170344"
              }
            ]
          },
          {
            "title": "Line Without a Hook",
            "artist": "Ricky Montgomery",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Line Without a Hook.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27367ee332af483acd134fd6fd0",
            "lyrics": [
              {
                "time": 0.54,
                "text": "I don't really give a damn about the way you touch me"
              },
              {
                "time": 2.49,
                "text": "When we're alone"
              },
              {
                "time": 5.55,
                "text": "You can hold my hand if no one's home"
              },
              {
                "time": 9.55,
                "text": "Do you like it when I'm away?"
              },
              {
                "time": 12.71,
                "text": "If I went and hurt my body"
              },
              {
                "time": 14.19,
                "text": "Baby, would you love me the same?"
              },
              {
                "time": 16.23,
                "text": "I can feel all my bones coming back, and I'm craving motion"
              },
              {
                "time": 20.59,
                "text": "Mama never really learned how to live by herself"
              },
              {
                "time": 24.35,
                "text": "It's a curse, and it's growing"
              },
              {
                "time": 28.03,
                "text": "You're a pond and I'm an ocean, oh"
              },
              {
                "time": 32.31,
                "text": "All my emotions feel like explosions when you are around"
              },
              {
                "time": 40.72,
                "text": "And I've found a way to kill the sound, oh"
              },
              {
                "time": 47.29,
                "text": "Oh, baby, I am a wreck when I'm without you"
              },
              {
                "time": 52.88,
                "text": "I need you here to stay"
              },
              {
                "time": 55.86,
                "text": "I broke all my bones that day I found you"
              },
              {
                "time": 60.14,
                "text": "Crying at the lake"
              },
              {
                "time": 62.72,
                "text": "Was it something I said to make you feel like you're a burden?"
              },
              {
                "time": 69.55,
                "text": "Oh, and if I could take it all back"
              },
              {
                "time": 75.21000000000001,
                "text": "I swear that I would pull you from the tide"
              },
              {
                "time": 83.89,
                "text": "Oh, whoa, whoa, whoa!"
              },
              {
                "time": 86.96000000000001,
                "text": "I said no (I said no), I said no (I said no)"
              },
              {
                "time": 89.19,
                "text": "Listen close, it's a no"
              },
              {
                "time": 93.85,
                "text": "The wind is a-pounding on my back"
              },
              {
                "time": 96.38,
                "text": "And I've found hope in a heart attack"
              },
              {
                "time": 100.22999999999999,
                "text": "Oh, at last, it is past"
              },
              {
                "time": 103.55,
                "text": "Now I've got it, and you can't have it"
              },
              {
                "time": 108.06,
                "text": "Baby, I am a wreck when I'm without you"
              },
              {
                "time": 114.32,
                "text": "I need you here to stay"
              },
              {
                "time": 116.65,
                "text": "I broke all my bones that day I found you"
              },
              {
                "time": 121.26,
                "text": "Crying at the lake"
              },
              {
                "time": 124.03,
                "text": "Was it something I said to make you feel like you're a burden?"
              },
              {
                "time": 130.98,
                "text": "Oh, and if I could take it all back"
              },
              {
                "time": 137.24,
                "text": "I swear that I would pull you from the tide"
              },
              {
                "time": 144.07999999999998,
                "text": ""
              },
              {
                "time": 147.1,
                "text": "Darling, when I'm fast asleep"
              },
              {
                "time": 151.13,
                "text": "I've seen this person watching me"
              },
              {
                "time": 154.74,
                "text": "Saying, \"Is it worth it? Is it worth it?"
              },
              {
                "time": 158.48,
                "text": "Tell me, is it worth it?\", Oh"
              },
              {
                "time": 170.84,
                "text": ""
              },
              {
                "time": 175.36,
                "text": "'Cause there is something and there is nothing"
              },
              {
                "time": 180.13,
                "text": "There isYear of Release: 20166217"
              }
            ]
          },
          {
            "title": "Scott Street",
            "artist": "Phoebe Bridgers",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Scott Street.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27368b90c3b34c3ac22856ddab8",
            "lyrics": [
              {
                "time": 15.1,
                "text": "Walking Scott Street, feeling like a stranger"
              },
              {
                "time": 22.33,
                "text": "With an open heart, open container"
              },
              {
                "time": 29.67,
                "text": "I've got a stack of mail and a tall can"
              },
              {
                "time": 36.48,
                "text": "It's a shower beer, it's a payment plan"
              },
              {
                "time": 44.16,
                "text": "There's helicopters over my head"
              },
              {
                "time": 51.17,
                "text": "Every night when I go to bed"
              },
              {
                "time": 58.41,
                "text": "Spending money and I earned it"
              },
              {
                "time": 65.48,
                "text": "When I'm lonely, that's when I'll burn it"
              },
              {
                "time": 72.73,
                "text": "Do you feel ashamed"
              },
              {
                "time": 83.4,
                "text": "When you hear my name?"
              },
              {
                "time": 97.18,
                "text": "I asked you, \"How is your sister?"
              },
              {
                "time": 104.45,
                "text": "I heard she got her degree\""
              },
              {
                "time": 111.72999999999999,
                "text": "And I said, \"That makes me feel old\""
              },
              {
                "time": 118.41,
                "text": "You said, \"What does that make me?\""
              },
              {
                "time": 125.56,
                "text": "I asked you, \"How is playing drums?\""
              },
              {
                "time": 132.31,
                "text": "You said,Year of Release: 2017663206"
              }
            ]
          },
          {
            "title": "I Love You So",
            "artist": "The Walters",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/I Love You So.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2739214ff0109a0e062f8a6cf0f",
            "lyrics": [
              {
                "time": 13.2,
                "text": "I just need someone in my life to give it structure"
              },
              {
                "time": 19.57,
                "text": "To handle all the selfish ways I'd spend my time without her"
              },
              {
                "time": 25.86,
                "text": "You're everything I want, but I can't deal with all your lovers"
              },
              {
                "time": 32.07,
                "text": "You're saying I'm the one, but it's your actions that speak louder"
              },
              {
                "time": 38.57,
                "text": "Giving me love when you are down and need another"
              },
              {
                "time": 44.63,
                "text": "I've gotta get away and let you go, I've gotta get over"
              },
              {
                "time": 51.1,
                "text": "But I love you so (ooh-ooh)"
              },
              {
                "time": 57.63,
                "text": "I love you so (ooh-ooh)"
              },
              {
                "time": 63.7,
                "text": "I love you so (ooh-ooh)"
              },
              {
                "time": 70.12,
                "text": "I love you so (ooh-ooh)"
              },
              {
                "time": 74.44,
                "text": "I'm gonna pack my things and leave you behind"
              },
              {
                "time": 80.84,
                "text": "This feeling's old and I know that I've made up my mind"
              },
              {
                "time": 87.14,
                "text": "I hope you feel what I felt whenYear of Release: 201421144"
              }
            ]
          },
          {
            "title": "Mr. Loverman",
            "artist": "Ricky Montgomery",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Mr. Loverman.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27367ee332af483acd134fd6fd0",
            "lyrics": [
              {
                "time": 0.16,
                "text": "I'm headed straight for the floor"
              },
              {
                "time": 5.76,
                "text": "The alcohol served its tour"
              },
              {
                "time": 11.22,
                "text": "And it's headed straight for my skin"
              },
              {
                "time": 17.19,
                "text": "Leaving me daft and dim"
              },
              {
                "time": 22.83,
                "text": "I've got this shake in my legs"
              },
              {
                "time": 28.43,
                "text": "Shaking the thoughts from my head"
              },
              {
                "time": 33.67,
                "text": "But who put these waves in the door?"
              },
              {
                "time": 39.52,
                "text": "I crack and out I pour"
              },
              {
                "time": 45.04,
                "text": "I'm Mr. Loverman"
              },
              {
                "time": 50.44,
                "text": "And I miss my lover, man"
              },
              {
                "time": 56.13,
                "text": "I'm Mr. Loverman"
              },
              {
                "time": 60.49,
                "text": "Oh, and I miss my lover"
              },
              {
                "time": 65.18,
                "text": ""
              },
              {
                "time": 67.19,
                "text": "The ways in which you talk to me"
              },
              {
                "time": 71.8,
                "text": "Have me wishin' I were gone"
              },
              {
                "time": 77.86,
                "text": "The ways that you say my name"
              },
              {
                "time": 82.77,
                "text": "Have me runnin' on and on"
              },
              {
                "time": 86.34,
                "text": ""
              },
              {
                "time": 89.83,
                "text": "Oh, I'm cramping up"
              },
              {
                "time": 92.74000000000001,
                "text": "I'm cramping up"
              },
              {
                "time": 97.03999999999999,
                "text": ""
              },
              {
                "time": 100.94,
                "text": "But you're cracking up"
              },
              {
                "time": 103.83,
                "text": "You're cracking up"
              },
              {
                "time": 109.34,
                "text": ""
              },
              {
                "time": 111.58,
                "text": "I'm Mr. Loverman"
              },
              {
                "time": 116.69,
                "text": "And I miss my loverman"
              },
              {
                "time": 122.5,
                "text": "I'm Mr. Loverman"
              },
              {
                "time": 126.94,
                "text": "Oh, and I miss my lover"
              },
              {
                "time": 134.31,
                "text": "I've shattered now, I'm spilling out"
              },
              {
                "time": 140.18,
                "text": "Upon this linoleum ground (Mr. Loverman)"
              },
              {
                "time": 145.47,
                "text": "I'm reeling in my brain again"
              },
              {
                "time": 151.07999999999998,
                "text": "Before it can get back to youYear of Release: 2016333202"
              }
            ]
          },
          {
            "title": "Memories",
            "artist": "Conan Gray",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Memories.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27360a89b781c62ffe2136e4396",
            "lyrics": [
              {
                "time": 0.67,
                "text": "One, two"
              },
              {
                "time": 2.33,
                "text": "It's been a couple months"
              },
              {
                "time": 5.56,
                "text": "That's just about enough time"
              },
              {
                "time": 9.67,
                "text": "For me to stop crying when I look at all the pictures"
              },
              {
                "time": 13.61,
                "text": "Now I kinda smile, I haven't felt that in a while"
              },
              {
                "time": 19.29,
                "text": "It's late, I hear the door"
              },
              {
                "time": 22.33,
                "text": "Bell ringing, and it's pouring"
              },
              {
                "time": 26.72,
                "text": "I open up that door, see your brown eyes at the entrance"
              },
              {
                "time": 30.57,
                "text": "You just wanna talk, and I can't turn away a wet dog"
              },
              {
                "time": 35.92,
                "text": "But please, don't ruin this for me"
              },
              {
                "time": 42.13,
                "text": "Please, don't make it harder than it already is"
              },
              {
                "time": 48.44,
                "text": "I'm trying to get over this"
              },
              {
                "time": 56.13,
                "text": "I wish that you would stay in my memories"
              },
              {
                "time": 60.49,
                "text": "But you show up today just to ruin things"
              },
              {
                "time": 64.4,
                "text": "I wanna put you in the past 'cause I'm traumatized"
              },
              {
                "time": 68.78999999999999,
                "text": "But you're not letting me do that, 'cause tonight"
              },
              {
                "time": 72.26,
                "text": "You're all drunk in my kitchen, curled in the fetal position"
              },
              {
                "time": 76.26,
                "text": "Too busy playing the victim to be listening to me when I say"
              },
              {
                "time": 82.53,
                "text": "\"I wish that you would stay in my memories\""
              },
              {
                "time": 86.44,
                "text": "In my memories, stay in my memories"
              },
              {
                "time": 91.6,
                "text": ""
              },
              {
                "time": 94.34,
                "text": "Now I can't say, \"Goodbye\""
              },
              {
                "time": 97.52000000000001,
                "text": "If you'll stay here the whole night"
              },
              {
                "time": 101.17,
                "text": "You see, it's hard to find an end to something that you keep beginning"
              },
              {
                "time": 105.47999999999999,
                "text": "Over, and over again"
              },
              {
                "time": 107.2,
                "text": "I promise that the ending always stays the same"
              },
              {
                "time": 110.44,
                "text": "So there's no good reason in make-believing"
              },
              {
                "time": 114.8,
                "text": "That we could ever exist again"
              },
              {
                "time": 118.67,
                "text": "I can't be your friend, can't be your lover"
              },
              {
                "time": 120.96,
                "text": "Can't be the reason we hold back each other from falling in love"
              },
              {
                "time": 124.97,
                "text": "With somebody other than me"
              },
              {
                "time": 128.68,
                "text": "I wish that you would stay in my memories"
              },
              {
                "time": 132.94,
                "text": "But you show up today just to ruin things"
              },
              {
                "time": 136.8,
                "text": "I wanna put you in the past 'cause I'm traumatized"
              },
              {
                "time": 141.13,
                "text": "But you're not letting me do that, 'cause tonight"
              },
              {
                "time": 144.5,
                "text": "You're all drunk in my kitchen, curled in the fetal position"
              },
              {
                "time": 148.63,
                "text": "Too busy playing the victim to be listening to me when I say"
              },
              {
                "time": 154.63,
                "text": "\"I wish that you would stay in my memories\""
              },
              {
                "time": 158.74,
                "text": "In my memories, stay in my memories"
              },
              {
                "time": 164.54,
                "text": "Since you came"
              },
              {
                "time": 168.51,
                "text": "I guess I'll let you stay"
              },
              {
                "time": 172.06,
                "text": "For as long as it takes"
              },
              {
                "time": 175.98,
                "text": "To grab yourYear of Release: 20227118"
              }
            ]
          },
          {
            "title": "The Cut That Always Bleeds",
            "artist": "Conan Gray",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/The Cut That Always Bleeds.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43",
            "lyrics": [
              {
                "time": 2.96,
                "text": "I don't love you anymore"
              },
              {
                "time": 6.03,
                "text": "A pretty line that I adore"
              },
              {
                "time": 10.04,
                "text": "Five words that I've heard before"
              },
              {
                "time": 16.84,
                "text": "'Cause you keep me on a rope"
              },
              {
                "time": 20.32,
                "text": "And tied a noose around my throat"
              },
              {
                "time": 24.17,
                "text": "You're gone, then back at my door"
              },
              {
                "time": 30.78,
                "text": "'Cause if you're gonna leave, better leave, better do it fast"
              },
              {
                "time": 35.3,
                "text": "Can't live a little longer sitting on your lap"
              },
              {
                "time": 39.05,
                "text": "'Cause you know what you're doin' when you're comin' back"
              },
              {
                "time": 42.7,
                "text": "And I don't wanna have another heart attack"
              },
              {
                "time": 46.17,
                "text": "Oh, I can't be your lover on a leash"
              },
              {
                "time": 55.06,
                "text": "Every other week, when you please"
              },
              {
                "time": 60.07,
                "text": "Oh, I can't be the kiss that you don't need"
              },
              {
                "time": 69.17,
                "text": "The lie between your teeth"
              },
              {
                "time": 72.53,
                "text": "The cut that always bleeds"
              },
              {
                "time": 76.3,
                "text": "(Ah-ah-ah)"
              },
              {
                "time": 80.03,
                "text": "The cut that always bleeds"
              },
              {
                "time": 83.7,
                "text": "(Ah-ah-ah)"
              },
              {
                "time": 88.12,
                "text": "Say you love somebody new"
              },
              {
                "time": 91.23,
                "text": "Then beat my heart to black and blue"
              },
              {
                "time": 95.24000000000001,
                "text": "Then they leave, and it's me you come back to (Ah-ah)"
              },
              {
                "time": 102.34,
                "text": "To say you loved me all along"
              },
              {
                "time": 105.31,
                "text": "And kiss the bruises 'til they're gone"
              },
              {
                "time": 109.25999999999999,
                "text": "Bittersweet, 'cause I can't breathe inside your arms"
              },
              {
                "time": 116.08,
                "text": "'Cause if you're gonna leave, better leave, better do it fast"
              },
              {
                "time": 120.26,
                "text": "Can't live another minute bleedin' from my back"
              },
              {
                "time": 123.99,
                "text": "'Cause I don't have another one for you to stab"
              },
              {
                "time": 127.27,
                "text": "And I don't wanna have another heart attack"
              },
              {
                "time": 130.65,
                "text": "Oh, I can't be your lover on a leash"
              },
              {
                "time": 139.68,
                "text": "Every other week, when you please"
              },
              {
                "time": 144.44,
                "text": "Oh, I can't be the kiss that you don't need"
              },
              {
                "time": 153.52,
                "text": "TheYear of Release: 2020296131"
              }
            ]
          },
          {
            "title": "About You",
            "artist": "The 1975",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/About You.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c",
            "lyrics": [
              {
                "time": 44.67,
                "text": "I know a place"
              },
              {
                "time": 54.53,
                "text": "It's somewhere I go when I need to remember your face"
              },
              {
                "time": 64,
                "text": "We get married in our heads"
              },
              {
                "time": 74.53,
                "text": "Something to do while we try to recall how we met"
              },
              {
                "time": 84,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 89.12,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 94.13,
                "text": "Do you think I have forgotten"
              },
              {
                "time": 99.24000000000001,
                "text": "About you?"
              },
              {
                "time": 104.24000000000001,
                "text": "You and I (don't let go) were alive (don't let go)"
              },
              {
                "time": 114.50999999999999,
                "text": "With nothing to do, I could lay and just look in your eyes"
              },
              {
                "time": 124.66,
                "text": "Wait (don't let go) and pretend (don't let go)"
              },
              {
                "time": 134.69,
                "text": "Hold on and hope that we'll find our way back in the end"
              },
              {
                "time": 144.26,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 149.2,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 154.17000000000002,
                "text": "Do you think I have forgotten"
              },
              {
                "time": 159.16,
                "text": "About you?"
              },
              {
                "time": 164.18,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 169.04,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 174.12,
                "text": "Do you think I have forgotten"
              },
              {
                "time": 179.12,
                "text": "About you?"
              },
              {
                "time": 184.48,
                "text": "There was something 'bout you that now I can't remember"
              },
              {
                "time": 189.67,
                "text": "It's the same damn thing that made my heart surrender"
              },
              {
                "time": 194.44,
                "text": "AndYear of Release: 20221,276598"
              }
            ]
          },
          {
            "title": "Reckless",
            "artist": "Madison Beer",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Reckless.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2732529ab6fa7f2c93a1931c0e3",
            "lyrics": [
              {
                "time": 18.29,
                "text": "Hey, this is a story I hate"
              },
              {
                "time": 24.19,
                "text": "And telling it might make me break"
              },
              {
                "time": 28.02,
                "text": "But I'll tell it anyway"
              },
              {
                "time": 32.83,
                "text": "This chapter's about"
              },
              {
                "time": 35.68,
                "text": "How you said there was nobody else"
              },
              {
                "time": 39.55,
                "text": "Then you got up and went to her house"
              },
              {
                "time": 43.54,
                "text": "You guys always left me out"
              },
              {
                "time": 49.2,
                "text": "I still have the letter you wrote"
              },
              {
                "time": 52.79,
                "text": "When you told me that I was the only girl"
              },
              {
                "time": 56.22,
                "text": "You'd ever want in your life"
              },
              {
                "time": 60.58,
                "text": "I guess my friends were right"
              },
              {
                "time": 65.05,
                "text": "Each day goes by and each night, I cry"
              },
              {
                "time": 69.12,
                "text": "Somebody saw you with her last night"
              },
              {
                "time": 72.91,
                "text": "You gave me your word, \"Don't worry 'bout her\""
              },
              {
                "time": 76.93,
                "text": "You might love her now, but you loved me first"
              },
              {
                "time": 81,
                "text": "Said you'd never hurt me, but here we are"
              },
              {
                "time": 85.67,
                "text": "Oh, you swore on every star"
              },
              {
                "time": 89.25,
                "text": "How could you be so reckless with my heart?"
              },
              {
                "time": 96.94,
                "text": "You check in and out"
              },
              {
                "time": 99.71000000000001,
                "text": "Of my heart like a hotel"
              },
              {
                "time": 103.95,
                "text": "And she must be perfect, oh well"
              },
              {
                "time": 108.2,
                "text": "I hope you both go to hell"
              },
              {
                "time": 113.28,
                "text": "I still have the letter you wrote"
              },
              {
                "time": 116.75999999999999,
                "text": "When you told me that I was the only girl"
              },
              {
                "time": 120.48,
                "text": "You'd ever want in your life"
              },
              {
                "time": 124.74,
                "text": "I guess my friends were right"
              },
              {
                "time": 129.28,
                "text": "Each day goes by and each night, I cry"
              },
              {
                "time": 133.22,
                "text": "Somebody saw you with her last night"
              },
              {
                "time": 137.06,
                "text": "You gave me your word, \"Don't worry 'bout her\""
              },
              {
                "time": 141.06,
                "text": "You might love her now, but youYear of Release: 20215313"
              }
            ]
          },
          {
            "title": "No. 1 Party Anthem",
            "artist": "Arctic Monkeys",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/No. 1 Party Anthem.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
            "lyrics": [
              {
                "time": 3.36,
                "text": "So you're on the prowl wondering whether"
              },
              {
                "time": 6.9,
                "text": "She left already or not"
              },
              {
                "time": 11.07,
                "text": "Leather jacket, collar popped like Cantonna"
              },
              {
                "time": 15.13,
                "text": "Never knowing when to stop"
              },
              {
                "time": 18.86,
                "text": "Sunglasses indoors, par for the course"
              },
              {
                "time": 23.06,
                "text": "Lights in the floors and sweat on the walls"
              },
              {
                "time": 29.11,
                "text": "Cages and poles"
              },
              {
                "time": 32.94,
                "text": ""
              },
              {
                "time": 35.59,
                "text": "Call off the search for your soul"
              },
              {
                "time": 38.53,
                "text": "Or put it on hold again"
              },
              {
                "time": 41.62,
                "text": "She's having a sly indoor smoke"
              },
              {
                "time": 44.87,
                "text": "And she calls the folks who run this, her oldest friends"
              },
              {
                "time": 50.02,
                "text": "Sipping a drink and laughing at imaginary jokes"
              },
              {
                "time": 55.23,
                "text": "As all the signals are sent, her eyes invite you to approach"
              },
              {
                "time": 61.44,
                "text": "And it seems as though those lumps in your throat"
              },
              {
                "time": 65.73,
                "text": "That you just swallowed have got you going"
              },
              {
                "time": 70.99,
                "text": "Come on, come on, come on"
              },
              {
                "time": 75.09,
                "text": "Come on, come on, come on"
              },
              {
                "time": 78.19,
                "text": "Number one party anthem"
              },
              {
                "time": 84.57,
                "text": ""
              },
              {
                "time": 86.76,
                "text": "She's a certified mind blower"
              },
              {
                "time": 90.36,
                "text": "Knowing full well that I don't"
              },
              {
                "time": 94.33,
                "text": "May suggest there's somewhere from which I might know her"
              },
              {
                "time": 98.74000000000001,
                "text": "Just to get the ball to roll"
              },
              {
                "time": 102.34,
                "text": "Drunken monologues, confused because"
              },
              {
                "time": 106.32,
                "text": "It's not like I'm falling in love, I just want ya"
              },
              {
                "time": 110.57,
                "text": "To do me no good"
              },
              {
                "time": 114.47999999999999,
                "text": "And you look like you could"
              },
              {
                "time": 120.8,
                "text": "Come on, come on, come on"
              },
              {
                "time": 125.04,
                "text": "Come on, come on, come on"
              },
              {
                "time": 128.2,
                "text": "Number one party anthem"
              },
              {
                "time": 133.57,
                "text": "Come on, come on, come on"
              },
              {
                "time": 137.56,
                "text": "Before the moment's gone"
              },
              {
                "time": 140.77,
                "text": "Number one party anthem, yeah, yeah"
              },
              {
                "time": 148.97,
                "text": "The look of love, the rushYear of Release: 2013835280"
              }
            ]
          },
          {
            "title": "Prom Queen",
            "artist": "Beach Bunny",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Prom Queen.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273e6f804fb1092a0a052aec3a6",
            "lyrics": [
              {
                "time": 0.57,
                "text": "Shut up, count your calories"
              },
              {
                "time": 4.46,
                "text": "I never looked good in mom jeans"
              },
              {
                "time": 7.56,
                "text": "Wish I was like you"
              },
              {
                "time": 10.61,
                "text": "Blue-eyed blondie, perfect body"
              },
              {
                "time": 14.04,
                "text": "Maybe I should try harder"
              },
              {
                "time": 17.52,
                "text": "You should lower your expectations"
              },
              {
                "time": 20.87,
                "text": "I'm no quick-curl barbie"
              },
              {
                "time": 24.31,
                "text": "I was never cut out for prom queen"
              },
              {
                "time": 27.25,
                "text": "If I get more pretty"
              },
              {
                "time": 30.48,
                "text": "Do you think he will like me?"
              },
              {
                "time": 34.43,
                "text": "Dissect my insecurities"
              },
              {
                "time": 37.99,
                "text": "I'm a defect, surgical project"
              },
              {
                "time": 41.15,
                "text": "It's getting hard to breathe"
              },
              {
                "time": 44.56,
                "text": "There's plastic wrap in my cheeks"
              },
              {
                "time": 47.31,
                "text": "Maybe I should try harder"
              },
              {
                "time": 51.38,
                "text": "You should lower your beauty standards"
              },
              {
                "time": 54.27,
                "text": "I'm no quick-curl barbie"
              },
              {
                "time": 57.89,
                "text": "I was never cut out for prom queen"
              },
              {
                "time": 60.91,
                "text": "If I'm pretty, will you like me?"
              },
              {
                "time": 67.4,
                "text": "They say, \"Beauty makes boys happy\""
              },
              {
                "time": 74.03,
                "text": "I've been starving myself"
              },
              {
                "time": 79.09,
                "text": "CarvingYear of Release: 20185625"
              }
            ]
          },
          {
            "title": "Pluto Projector",
            "artist": "Rex Orange County",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Pluto Projector.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273733e6d7818eef87d20df86b5",
            "lyrics": [
              {
                "time": 0.8,
                "text": "The great protector"
              },
              {
                "time": 2.82,
                "text": "Is that what I'm supposed to be?"
              },
              {
                "time": 11.63,
                "text": "What if all this counts for nothing"
              },
              {
                "time": 14.51,
                "text": "Everything I thought I'd be?"
              },
              {
                "time": 17.53,
                "text": "What if by the time I realize"
              },
              {
                "time": 20.55,
                "text": "It's too far behind to see?"
              },
              {
                "time": 23.8,
                "text": "70-mil projector"
              },
              {
                "time": 26.72,
                "text": "I can show you everything, yeah"
              },
              {
                "time": 35.22,
                "text": "And we're on our way to glory"
              },
              {
                "time": 38.36,
                "text": "Where the show won't ever end"
              },
              {
                "time": 41.23,
                "text": "And the encore lasts forever"
              },
              {
                "time": 44.27,
                "text": "And it's time we're due to spend"
              },
              {
                "time": 53.31,
                "text": "Spending the years together"
              },
              {
                "time": 56.5,
                "text": "Growing older every day (every day)"
              },
              {
                "time": 64.76,
                "text": "I feel at home when I'm around you"
              },
              {
                "time": 67.98,
                "text": "And I'll gladly say again"
              },
              {
                "time": 70.8,
                "text": "I hope the encore lasts forever"
              },
              {
                "time": 73.86,
                "text": "Now there's time for us to spend"
              },
              {
                "time": 79.55,
                "text": "And it's sublime with you, my friend"
              },
              {
                "time": 84.24,
                "text": "This right here still feels like a honeymoon"
              },
              {
                "time": 87.55,
                "text": "When you say my name, nothing's changed"
              },
              {
                "time": 92.94,
                "text": "I'm still a boy inside my thoughts"
              },
              {
                "time": 97.97999999999999,
                "text": "Am I meant to understand my faults?"
              },
              {
                "time": 106.74000000000001,
                "text": "I don't think so"
              },
              {
                "time": 109.81,
                "text": "I don't think I'm meant to understand myself"
              },
              {
                "time": 118.78,
                "text": "Maybe you do"
              },
              {
                "time": 121.53,
                "text": "And that's good for you"
              },
              {
                "time": 124.63,
                "text": "Maybe in time"
              },
              {
                "time": 127.64,
                "text": "Maybe one day"
              },
              {
                "time": 130.56,
                "text": "I'll do the same"
              },
              {
                "time": 137.37,
                "text": ""
              },
              {
                "time": 148.78,
                "text": "(I'll do the same)"
              },
              {
                "time": 151.7,
                "text": "(I'll do the same)"
              },
              {
                "time": 154.38,
                "text": "(I'll do the same)"
              },
              {
                "time": 158.94,
                "text": ""
              },
              {
                "time": 166.93,
                "text": "I'll doYear of Release: 2019424213"
              }
            ]
          },
          {
            "title": "Promise",
            "artist": "Laufey",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Promise.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27374c732f8aa0e0ccbb3d17d96",
            "lyrics": [
              {
                "time": 14.06,
                "text": "I made a promise"
              },
              {
                "time": 20.06,
                "text": "To distance myself"
              },
              {
                "time": 26.85,
                "text": "Took a flight, through aurora skies"
              },
              {
                "time": 33.31,
                "text": "Honestly, I didn't think about"
              },
              {
                "time": 37.87,
                "text": "How we didn't say goodbye"
              },
              {
                "time": 43.02,
                "text": "Just, \"See you very soon\""
              },
              {
                "time": 49.59,
                "text": "It hurts to be something"
              },
              {
                "time": 52.33,
                "text": "It's worse to be nothing"
              },
              {
                "time": 56.13,
                "text": "With you"
              },
              {
                "time": 60.83,
                "text": ""
              },
              {
                "time": 69.17,
                "text": "So I didn't call you"
              },
              {
                "time": 75.09,
                "text": "For 16 long days"
              },
              {
                "time": 81.8,
                "text": "And I should get a cigarette"
              },
              {
                "time": 87.81,
                "text": "For so much restraint"
              },
              {
                "time": 90.82,
                "text": "No matter how long I resist temptation"
              },
              {
                "time": 98.82,
                "text": "I will always lose"
              },
              {
                "time": 104.7,
                "text": "It hurts to be something"
              },
              {
                "time": 107.39,
                "text": "It's worse to be nothing"
              },
              {
                "time": 110.25999999999999,
                "text": "With you"
              },
              {
                "time": 112.36,
                "text": "I've done the math, there's no solution"
              },
              {
                "time": 118.24000000000001,
                "text": "We'll never last"
              },
              {
                "time": 122.72,
                "text": "Why can't I let go of this?"
              },
              {
                "time": 131.23,
                "text": ""
              },
              {
                "time": 155.57,
                "text": "So I broke my promise"
              },
              {
                "time": 161.31,
                "text": "I called you last night"
              },
              {
                "time": 167.42000000000002,
                "text": "I shouldn't have, I wouldn't have"
              },
              {
                "time": 173.24,
                "text": "If itYear of Release: 20239643"
              }
            ]
          },
          {
            "title": "happier",
            "artist": "Olivia Rodrigo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/happier.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
            "lyrics": [
              {
                "time": 4.64,
                "text": "We broke up a month ago"
              },
              {
                "time": 8.57,
                "text": "Your friends aren't mine, you know, I know"
              },
              {
                "time": 12.56,
                "text": "You've moved on, found someone new"
              },
              {
                "time": 16.16,
                "text": "One more girl who brings out the better in you"
              },
              {
                "time": 21.11,
                "text": "And I thought my heart was detached"
              },
              {
                "time": 25.44,
                "text": "From all the sunlight of our past"
              },
              {
                "time": 29.72,
                "text": "But she's so sweet, she's so pretty"
              },
              {
                "time": 34.07,
                "text": "Does she mean you forgot about me?"
              },
              {
                "time": 38.12,
                "text": "Oh, I hope you're happy"
              },
              {
                "time": 42.25,
                "text": "But not like how you were with me"
              },
              {
                "time": 46.58,
                "text": "I'm selfish, I know, I can't let you go"
              },
              {
                "time": 50.83,
                "text": "So find someone great, but don't find no one better"
              },
              {
                "time": 55.09,
                "text": "I hope you're happy, but don't be happier"
              },
              {
                "time": 61.95,
                "text": "And do you tell her she's the most beautiful girl you've ever seen?"
              },
              {
                "time": 67.06,
                "text": "And promise three words you know you'll never mean"
              },
              {
                "time": 71.41,
                "text": "Remember when I believed"
              },
              {
                "time": 73.78,
                "text": "You meant it when you said it first to me?"
              },
              {
                "time": 78.67,
                "text": "And now I'm pickin' her apart"
              },
              {
                "time": 82.99,
                "text": "Like cuttin' her down make you miss my wretched heart"
              },
              {
                "time": 87.11,
                "text": "But she's beautiful, she looks kind"
              },
              {
                "time": 91.2,
                "text": "She probably gives you butterflies"
              },
              {
                "time": 95.62,
                "text": "I hope you're happy"
              },
              {
                "time": 99.89,
                "text": "But not like how you were with me"
              },
              {
                "time": 104.06,
                "text": "I'm selfish, I know, I can't let you go"
              },
              {
                "time": 108.52000000000001,
                "text": "So find someone great, but don't find no one better"
              },
              {
                "time": 112.83,
                "text": "I hope you're happy, I wish you all the best, really"
              },
              {
                "time": 121.15,
                "text": "Say you love her, baby,Year of Release: 202110345"
              }
            ]
          },
          {
            "title": "Romantic Homicide",
            "artist": "d4vd",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Romantic Homicide.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273bd1a52b3d5903ee01c216da0",
            "lyrics": [
              {
                "time": 15.83,
                "text": "I'm scared"
              },
              {
                "time": 17.92,
                "text": ""
              },
              {
                "time": 21.65,
                "text": "It feels like you don't care"
              },
              {
                "time": 26.11,
                "text": ""
              },
              {
                "time": 28.83,
                "text": "Enlighten me, my dear"
              },
              {
                "time": 33.48,
                "text": ""
              },
              {
                "time": 36.33,
                "text": "Why am I still here?"
              },
              {
                "time": 40.75,
                "text": ""
              },
              {
                "time": 43.34,
                "text": "I don't mean to be complacent with the decisions you made"
              },
              {
                "time": 51.81,
                "text": "But why?"
              },
              {
                "time": 56.1,
                "text": "Mm"
              },
              {
                "time": 58.52,
                "text": "In the back of my mind"
              },
              {
                "time": 62.12,
                "text": "You died"
              },
              {
                "time": 65.23,
                "text": "And I didn't even cry"
              },
              {
                "time": 68.7,
                "text": "No, not a single tear"
              },
              {
                "time": 72.48,
                "text": "And I'm sick of waiting patiently for someone that won't even arrive"
              },
              {
                "time": 84.17,
                "text": ""
              },
              {
                "time": 89.08,
                "text": "Whoa"
              },
              {
                "time": 97.95,
                "text": ""
              },
              {
                "time": 102.25999999999999,
                "text": "In the backYear of Release: 20221,455168"
              }
            ]
          },
          {
            "title": "traitor",
            "artist": "Olivia Rodrigo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/traitor.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
            "lyrics": [
              {
                "time": 19.12,
                "text": "Brown guilty eyes and little white lies, yeah"
              },
              {
                "time": 23.58,
                "text": "I played dumb, but I always knew"
              },
              {
                "time": 28.49,
                "text": "That you talked to her, maybe did even worse"
              },
              {
                "time": 32.91,
                "text": "I kept quiet so I could keep you"
              },
              {
                "time": 37.34,
                "text": "And ain't it funny how you ran to her"
              },
              {
                "time": 42.86,
                "text": "The second that we called it quits?"
              },
              {
                "time": 47.16,
                "text": "And ain't it funny how you said you were friends?"
              },
              {
                "time": 52.29,
                "text": "Now it sure as hell don't look like it"
              },
              {
                "time": 56.92,
                "text": "You betrayed me"
              },
              {
                "time": 59.88,
                "text": "And I know that you'll never feel sorry for the way I hurt, yeah"
              },
              {
                "time": 67.08,
                "text": "You talked to her when we were together"
              },
              {
                "time": 71.46000000000001,
                "text": "Loved you at your worst, but that didn't matter"
              },
              {
                "time": 76.53,
                "text": "It took you two weeks to go off and date her"
              },
              {
                "time": 81.03999999999999,
                "text": "Guess you didn't cheat, but you're still a traitor"
              },
              {
                "time": 86.76,
                "text": ""
              },
              {
                "time": 90.34,
                "text": "Now you bring her around just to shut me down"
              },
              {
                "time": 95.27000000000001,
                "text": "Show her off like she's a new trophyㅤ"
              },
              {
                "time": 99.75,
                "text": "And I know if you were true, there's no damn way that you"
              },
              {
                "time": 104.78999999999999,
                "text": "Could fall in love with somebody that quickly"
              },
              {
                "time": 109.58,
                "text": "Ain't it funny? All the twisted games"
              },
              {
                "time": 114.53,
                "text": "All the questions you used to avoid"
              },
              {
                "time": 119.06,
                "text": "Ain't it funny? Remember I brought her up"
              },
              {
                "time": 124.1,
                "text": "And you told me I was paranoid?"
              },
              {
                "time": 128.57,
                "text": "You betrayed me"
              },
              {
                "time": 131.78,
                "text": "And I know that you'll never feel sorry for the way I hurt, yeah"
              },
              {
                "time": 139.01,
                "text": "You talked to her when we were together"
              },
              {
                "time": 143.57,
                "text": "Loved you at your worst, but that didn't matter"
              },
              {
                "time": 148.6,
                "text": "It took you two weeks to go off and date her"
              },
              {
                "time": 153.16,
                "text": "Guess you didn't cheat, but you're still a traitor"
              },
              {
                "time": 159.54,
                "text": "(Ah-ah-ah) God, I wish that you had thought this through"
              },
              {
                "time": 165.35,
                "text": "Before I went and fell in love with you"
              },
              {
                "time": 169.07,
                "text": "(Ah-ah-ah) when she's sleepin'Year of Release: 202111545"
              }
            ]
          },
          {
            "title": "Car's Outside",
            "artist": "James Arthur",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Car's Outside.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273dc16d839ab77c64bdbeb3660",
            "lyrics": [
              {
                "time": 6.64,
                "text": "I'm packin' my bags that I didn't unpack the last time"
              },
              {
                "time": 12.61,
                "text": "I'm sayin', \"See you again,\" so many times, it's becoming my tagline"
              },
              {
                "time": 19.49,
                "text": "But you know the truth, I'd rather hold you"
              },
              {
                "time": 22.65,
                "text": "Than try to catch this flight"
              },
              {
                "time": 25.82,
                "text": "So many things I'd rather say"
              },
              {
                "time": 27.82,
                "text": "But for now, it's goodbye"
              },
              {
                "time": 32.84,
                "text": "You say I'm always leavin'"
              },
              {
                "time": 38.98,
                "text": "You, when you're sleepin' alone"
              },
              {
                "time": 43.94,
                "text": "But the, the car's outside"
              },
              {
                "time": 47.28,
                "text": "But I don't wanna go tonight"
              },
              {
                "time": 51.94,
                "text": "I'm not gettin' in the Addison Lee"
              },
              {
                "time": 57.24,
                "text": "Unless you pack your bags"
              },
              {
                "time": 60.89,
                "text": "You're comin' with me"
              },
              {
                "time": 65.6,
                "text": "I'm tired of lovin' from afar"
              },
              {
                "time": 68.85,
                "text": "And never being where you are"
              },
              {
                "time": 72.24,
                "text": "Close the windows, lock the doors"
              },
              {
                "time": 75.11,
                "text": "Don't wanna leave you anymore"
              },
              {
                "time": 79.53,
                "text": "Oh-oh, ah"
              },
              {
                "time": 83.46000000000001,
                "text": "I'm starin' at the same four walls in a different hotel"
              },
              {
                "time": 90.05,
                "text": "It's an unfamiliar feelin' but I know it so well"
              },
              {
                "time": 95.75,
                "text": "Oh, but you know the truth, I'd rather hold you"
              },
              {
                "time": 99.4,
                "text": "Than this mobile in my hand"
              },
              {
                "time": 102.56,
                "text": "But I guess it'll do, 'cause for you"
              },
              {
                "time": 105.1,
                "text": "I would run up my phone bill"
              },
              {
                "time": 109.19,
                "text": "You say I'm always leavin'"
              },
              {
                "time": 115.56,
                "text": "You, when you need me the most"
              },
              {
                "time": 120.88,
                "text": "But the, the car's outside"
              },
              {
                "time": 124.07,
                "text": "But I don't wanna go tonight"
              },
              {
                "time": 128.72,
                "text": "I'm not gettin' in the Addison Lee"
              },
              {
                "time": 133.92,
                "text": "Unless you pack your bags"
              },
              {
                "time": 137.87,
                "text": "You're comin' with me"
              },
              {
                "time": 142.16,
                "text": "I'm tired of lovin' from afar"
              },
              {
                "time": 145.45,
                "text": "And never being where you are"
              },
              {
                "time": 149.06,
                "text": "Close the windows, lock the doors"
              },
              {
                "time": 152.01,
                "text": "Don't wanna leave you anymore"
              },
              {
                "time": 154.66,
                "text": "Ooh-ooh, ah"
              },
              {
                "time": 157.88,
                "text": "Ooh-ooh, ah"
              },
              {
                "time": 160.96,
                "text": "Ooh-ooh, ah"
              },
              {
                "time": 164.75,
                "text": "Don't wanna leave you anymore"
              },
              {
                "time": 167.93,
                "text": "Oh, darling, all of the city lights"
              },
              {
                "time": 171.04,
                "text": "Never shine as bright as your eyes"
              },
              {
                "time": 174.2,
                "text": "I would trade them all for a minute more"
              },
              {
                "time": 177.48,
                "text": "But theYear of Release: 20198536"
              }
            ]
          },
          {
            "title": "Enchanted",
            "artist": "Taylor Swift",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Enchanted.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273e1bc852a04501952c765d5cd",
            "lyrics": [
              {
                "time": 13.34,
                "text": "There I was again tonight"
              },
              {
                "time": 16.32,
                "text": "Forcing laughter, faking smiles"
              },
              {
                "time": 19.27,
                "text": "Same old tired, lonely place"
              },
              {
                "time": 24.91,
                "text": "Walls of insincerity"
              },
              {
                "time": 28.03,
                "text": "Shifting eyes and vacancy"
              },
              {
                "time": 30.92,
                "text": "Vanished when I saw your face"
              },
              {
                "time": 34.23,
                "text": "All I can say is it was enchanting to meet you"
              },
              {
                "time": 44.19,
                "text": ""
              },
              {
                "time": 48.31,
                "text": "Your eyes whispered, \"Have we met?\""
              },
              {
                "time": 51.44,
                "text": "Across the room, your silhouette"
              },
              {
                "time": 54.28,
                "text": "Starts to make its way to me"
              },
              {
                "time": 60,
                "text": "The playful conversation starts"
              },
              {
                "time": 63.18,
                "text": "Counter all your quick remarks"
              },
              {
                "time": 65.89,
                "text": "Like passing notes in secrecy"
              },
              {
                "time": 70.85,
                "text": "And it was enchanting to meet you"
              },
              {
                "time": 81.14,
                "text": "All I can say is I was enchanted to meet you"
              },
              {
                "time": 90.98,
                "text": ""
              },
              {
                "time": 95.89,
                "text": "This night is sparkling, don't you let it go"
              },
              {
                "time": 102.03999999999999,
                "text": "I'm wonderstruck, blushing all the way home"
              },
              {
                "time": 107.81,
                "text": "I'll spend forever wondering if you knew"
              },
              {
                "time": 113.28999999999999,
                "text": "I was enchanted to meet you"
              },
              {
                "time": 119.52000000000001,
                "text": ""
              },
              {
                "time": 124.35,
                "text": "The lingering question kept me up"
              },
              {
                "time": 127.42,
                "text": "2 a.m., who do you love?"
              },
              {
                "time": 130.32,
                "text": "I wonder 'til I'm wide awake"
              },
              {
                "time": 136.04,
                "text": "And now I'm pacing back and forth"
              },
              {
                "time": 139.18,
                "text": "Wishing you were at my door"
              },
              {
                "time": 141.94,
                "text": "I'd open up and you would say"
              },
              {
                "time": 146.57999999999998,
                "text": "Hey, it was enchanting to meet you"
              },
              {
                "time": 155.52,
                "text": ""
              },
              {
                "time": 157.54,
                "text": "All I know is I was enchanted to meet you"
              },
              {
                "time": 168.44,
                "text": ""
              },
              {
                "time": 171.94,
                "text": "This night is sparkling, don't you let it go"
              },
              {
                "time": 178.09,
                "text": "I'm wonderstruck, blushing all the way home"
              },
              {
                "time": 184.09,
                "text": "I'll spend forever wondering if you knew..."
              },
              {
                "time": 193.44,
                "text": ""
              },
              {
                "time": 195.65,
                "text": "This night is flawless, don't you let it go"
              },
              {
                "time": 201.54,
                "text": "I'm wonderstruck, dancing around all alone"
              },
              {
                "time": 207.31,
                "text": "I'll spend forever wondering if you knew"
              },
              {
                "time": 213.03,
                "text": "I was enchanted to meet you"
              },
              {
                "time": 219.66,
                "text": ""
              },
              {
                "time": 239.06,
                "text": "This is me praying that"
              },
              {
                "time": 242.15,
                "text": "This was the very first page"
              },
              {
                "time": 245.05,
                "text": "Not where the story line ends"
              },
              {
                "time": 247.9,
                "text": "My thoughts will echo your name"
              },
              {
                "time": 251.06,
                "text": "Until I see you again"
              },
              {
                "time": 253.8,
                "text": "These are the words I held back"
              },
              {
                "time": 256.9,
                "text": "As I was leaving too soon"
              },
              {
                "time": 259.86,
                "text": "I was enchanted to meet you"
              },
              {
                "time": 265.28,
                "text": "Please don't be in1,555955"
              }
            ]
          },
          {
            "title": "The Night We Met",
            "artist": "Lord Huron",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/The Night We Met.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2731fa318e90c9d4ddc6b480853",
            "lyrics": [
              {
                "time": 31.06,
                "text": "I am not the only traveler"
              },
              {
                "time": 38.05,
                "text": "Who has not repaid his debt"
              },
              {
                "time": 44.33,
                "text": "I've been searching for a trail to follow again"
              },
              {
                "time": 51.35,
                "text": "Take me back to the night we met"
              },
              {
                "time": 56.8,
                "text": ""
              },
              {
                "time": 58.94,
                "text": "And then I can tell myself"
              },
              {
                "time": 65.9,
                "text": "What the hell I'm supposed to do"
              },
              {
                "time": 73.36,
                "text": "And then I can tell myself"
              },
              {
                "time": 80.57,
                "text": "Not to ride along with you"
              },
              {
                "time": 87.61,
                "text": "I had all and then most of you"
              },
              {
                "time": 90.48,
                "text": "Some and now none of you"
              },
              {
                "time": 95.05,
                "text": "Take me back to the night we met"
              },
              {
                "time": 102.11,
                "text": "I don't know what I'm supposed to do"
              },
              {
                "time": 104.93,
                "text": "Haunted by the ghost of you"
              },
              {
                "time": 109.21000000000001,
                "text": "Oh, take me back to the night we met"
              },
              {
                "time": 114.65,
                "text": ""
              },
              {
                "time": 116.77000000000001,
                "text": "When the night was full of terror"
              },
              {
                "time": 123.99,
                "text": "And your eyes were filled with tears"
              },
              {
                "time": 131.29,
                "text": "When you had not touched me yet"
              },
              {
                "time": 138.09,
                "text": "Oh! Take me back to the nightYear of Release: 201558576"
              }
            ]
          },
          {
            "title": "Dandelions",
            "artist": "Ruth B.",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Dandelions.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27397e971f3e53475091dc8d707",
            "lyrics": [
              {
                "time": 12.23,
                "text": "Maybe, it's the way you say my name"
              },
              {
                "time": 18.39,
                "text": "Maybe, it's the way you play your game"
              },
              {
                "time": 23.21,
                "text": "But it's so good, I've never known anybody like you"
              },
              {
                "time": 29.36,
                "text": "But it's so good, I've never dreamed of nobody like you"
              },
              {
                "time": 36.05,
                "text": "And I've heard of a love that comes once in a lifetime"
              },
              {
                "time": 42.96,
                "text": "And I'm pretty sure that you are that love of mine"
              },
              {
                "time": 48.52,
                "text": "'Cause I'm in a field of dandelions"
              },
              {
                "time": 52.45,
                "text": "Wishing on every one that you'll be mine, mine"
              },
              {
                "time": 58.76,
                "text": ""
              },
              {
                "time": 60.83,
                "text": "And I see forever in your eyes"
              },
              {
                "time": 64.52,
                "text": "I feel okay when I see you smile, smile"
              },
              {
                "time": 73.03999999999999,
                "text": "Wishing on dandelions all of the time"
              },
              {
                "time": 76.2,
                "text": "Praying to God that one day you'll be mine"
              },
              {
                "time": 79.1,
                "text": "Wishing on dandelions all of the time, all of the time"
              },
              {
                "time": 86.21000000000001,
                "text": "I think that you are the one for me"
              },
              {
                "time": 92.02000000000001,
                "text": "'Cause it gets so hard to breathe"
              },
              {
                "time": 97.13,
                "text": "When you're looking at me, I've never felt so alive and free"
              },
              {
                "time": 103.49000000000001,
                "text": "When you're looking at me, I've never felt so happy"
              },
              {
                "time": 110.08,
                "text": "And I've heard of a love that comes once in a lifetime"
              },
              {
                "time": 116.57,
                "text": "And I'm pretty sure that you are that love of mine"
              },
              {
                "time": 122.45,
                "text": "'Cause I'm in a field of dandelions"
              },
              {
                "time": 126.1,
                "text": "Wishing on every one that you'll be mine, mine"
              },
              {
                "time": 134.63,
                "text": "And I see forever in your eyes"
              },
              {
                "time": 138.34,
                "text": "I feel okay, when I see you smile, smile"
              },
              {
                "time": 146.86,
                "text": "Wishing on dandelions all of the time"
              },
              {
                "time": 150.09,
                "text": "Praying to God that one day you'll be mine"
              },
              {
                "time": 153.07999999999998,
                "text": "Wishing on dandelions all of the time, all of the time"
              },
              {
                "time": 156.51,
                "text": ""
              },
              {
                "time": 159.8,
                "text": "Dandelion, into the wind you go"
              },
              {
                "time": 163.09,
                "text": "Won't you let myYear of Release: 20177,9216,086"
              }
            ]
          },
          {
            "title": "Someone To Stay",
            "artist": "Vancouver Sleep Clinic",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Someone To Stay.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273dabc6fe9dd3454884cf65071",
            "lyrics": [
              {
                "time": 4.4,
                "text": "You were alone, left out in the cold"
              },
              {
                "time": 8.62,
                "text": "Clinging to the ruin of your broken home"
              },
              {
                "time": 12.73,
                "text": "Too lost and hurting to carry your load"
              },
              {
                "time": 17.28,
                "text": "We all need someone to hold"
              },
              {
                "time": 22.23,
                "text": ""
              },
              {
                "time": 30.27,
                "text": "You've been fighting the memory, all on your own"
              },
              {
                "time": 34.85,
                "text": "Nothing worsens, nothing grows"
              },
              {
                "time": 39.59,
                "text": "I know how it feels being by yourself in the rain"
              },
              {
                "time": 43.63,
                "text": "We all need someone to stay"
              },
              {
                "time": 48.69,
                "text": ""
              },
              {
                "time": 52.77,
                "text": "We all need someone to stay"
              },
              {
                "time": 57.06,
                "text": "Hear the fallen and lonely, cry out"
              },
              {
                "time": 61.05,
                "text": "Will you fix me up? Will you show me hope?"
              },
              {
                "time": 65.73,
                "text": "At the end of the day you were helpless"
              },
              {
                "time": 69.85,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 79.03999999999999,
                "text": "You've drunk it down and you've spat it out"
              },
              {
                "time": 83.3,
                "text": "And nothing tastes like the things you had"
              },
              {
                "time": 87.56,
                "text": "So tear it off, why don't you let them go?"
              },
              {
                "time": 92.37,
                "text": "We all need someone to stay"
              },
              {
                "time": 97.45,
                "text": ""
              },
              {
                "time": 101.11,
                "text": "We all need someone to stay"
              },
              {
                "time": 105.38,
                "text": "Hear the fallen and lonely, cry out"
              },
              {
                "time": 109.45,
                "text": "Will you fix me up? Will you show me hope?"
              },
              {
                "time": 114.31,
                "text": "At the end of the day we're helpless"
              },
              {
                "time": 118.13,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 124.11,
                "text": ""
              },
              {
                "time": 127.11,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 133.34,
                "text": ""
              },
              {
                "time": 135.77,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 142.34,
                "text": ""
              },
              {
                "time": 149.79,
                "text": "You were alone, left out in the cold"
              },
              {
                "time": 154.09,
                "text": "Clinging to the ruin of your broken home"
              },
              {
                "time": 158.39,
                "text": "Hear the falling and lonely, cry out"
              },
              {
                "time": 162.32,
                "text": "Will you fix me up?Year of Release: 2016604251"
              }
            ]
          },
          {
            "title": "Glimpse of Us",
            "artist": "Joji",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Glimpse of Us.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273eaac2a7955f5b8967991cacb",
            "lyrics": [
              {
                "time": 17.29,
                "text": "She'd take the world off my shoulders if it was ever hard to move"
              },
              {
                "time": 25.61,
                "text": "She'd turn the rain to a rainbow when I was living in the blue"
              },
              {
                "time": 34.22,
                "text": "Why then if she's so perfect, do I still wish that it was you?"
              },
              {
                "time": 42.7,
                "text": "Perfect don't mean that it's working, so what can I do? (Ooh)"
              },
              {
                "time": 50.53,
                "text": "When you're out of sight in my mind"
              },
              {
                "time": 58.85,
                "text": "'Cause sometimes I look in her eyes, and that's where I find a glimpse of us"
              },
              {
                "time": 67.3,
                "text": "And I try to fall for her touch, but I'm thinking of the way it was"
              },
              {
                "time": 75.62,
                "text": "Said, \"I'm fine\" and said, \"I moved on\""
              },
              {
                "time": 79.72,
                "text": "I'm only here passing time in her arms"
              },
              {
                "time": 83.95,
                "text": "Hoping I'll find a glimpse of us"
              },
              {
                "time": 93.42,
                "text": "Tell me he savors your glory, does he laugh the way I did?"
              },
              {
                "time": 101.96000000000001,
                "text": "Is this a part of your story? One that I had never lived"
              },
              {
                "time": 110.3,
                "text": "Maybe one day, you'll feel lonely"
              },
              {
                "time": 113.78999999999999,
                "text": "And in his eyes, you'll get a glimpse"
              },
              {
                "time": 118.85,
                "text": "Maybe you'll start slipping slowly and find me again"
              },
              {
                "time": 126.78,
                "text": "When you're out of sight in my mind"
              },
              {
                "time": 135.19,
                "text": "'Cause sometimes I look in her eyes, and that's where I find a glimpse of us"
              },
              {
                "time": 143.55,
                "text": "And I try to fall for her touch, but I'm thinking of the way it was"
              },
              {
                "time": 151.94,
                "text": "Said, \"I'm fine\" andYear of Release: 202210910"
              }
            ]
          },
          {
            "title": "End of Beginning",
            "artist": "Djo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/End of Beginning.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273fddfffec51b4580acae727c1",
            "lyrics": [
              {
                "time": 4.08,
                "text": "Just one more tear to cry, one teardrop from my eye"
              },
              {
                "time": 12.35,
                "text": "You better save it for"
              },
              {
                "time": 16.19,
                "text": "The middle of the night when things aren't black and white"
              },
              {
                "time": 24.73,
                "text": "Enter, Troubadour"
              },
              {
                "time": 28.88,
                "text": "\"Remember 24?\""
              },
              {
                "time": 32.92,
                "text": ""
              },
              {
                "time": 37.73,
                "text": "And when I'm back in Chicago, I feel it"
              },
              {
                "time": 43.88,
                "text": "Another version of me, I was in it"
              },
              {
                "time": 49.85,
                "text": "I wave goodbye to the end of beginning"
              },
              {
                "time": 57.15,
                "text": ""
              },
              {
                "time": 61.13,
                "text": "This song has started now, and you're just finding out"
              },
              {
                "time": 69.38,
                "text": "Now isn't that a laugh?"
              },
              {
                "time": 73.17,
                "text": "A major sacrifice, but clueless at the time"
              },
              {
                "time": 81.75,
                "text": "Enter, Caroline"
              },
              {
                "time": 85.86,
                "text": "\"Just trust me, you'll be fine\""
              },
              {
                "time": 90.36,
                "text": "And when I'm back in Chicago, I feel it"
              },
              {
                "time": 96.36,
                "text": "Another version of me, I was in it"
              },
              {
                "time": 102.36,
                "text": "I wave goodbye to the end of beginning"
              },
              {
                "time": 106.72999999999999,
                "text": "(Goodbye, goodbye, goodbye, goodbye)"
              },
              {
                "time": 112.78999999999999,
                "text": "You take the man out of the city, not the city out the man"
              },
              {
                "time": 118.72999999999999,
                "text": "You take the man out of the city, not the city out theYear of Release: 20221,744946"
              }
            ]
          },
          {
            "title": "Love In The Dark",
            "artist": "Adele",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Love In The Dark.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2737b9888dc365b8f957c63df14",
            "lyrics": [
              {
                "time": 19.63,
                "text": "Take your eyes off of me so I can leave"
              },
              {
                "time": 27.91,
                "text": "I'm far too ashamed to do it with you watching me"
              },
              {
                "time": 36.94,
                "text": "This is never ending, we have been here before"
              },
              {
                "time": 45.48,
                "text": "But I can't stay this time 'cause I don't love you anymore"
              },
              {
                "time": 53.6,
                "text": "Please, stay where you are"
              },
              {
                "time": 57.88,
                "text": "Don't come any closer"
              },
              {
                "time": 62.38,
                "text": "Don't try to change my mind"
              },
              {
                "time": 66.75,
                "text": "I'm being cruel to be kind"
              },
              {
                "time": 71.24,
                "text": "I can't love you in the dark"
              },
              {
                "time": 79.49,
                "text": "It feels like we're oceans apart"
              },
              {
                "time": 88.64,
                "text": "There is so much space between us"
              },
              {
                "time": 92.71000000000001,
                "text": "Baby, we're already defeated"
              },
              {
                "time": 97.19,
                "text": "Ah-yeah-yeah-yeah-yeah-yeah-yeah-yeah"
              },
              {
                "time": 101.55,
                "text": "Everything changed me"
              },
              {
                "time": 106.92,
                "text": "You have given me something that I can't live without"
              },
              {
                "time": 115.42,
                "text": "You mustn't underestimate that when you are in doubt"
              },
              {
                "time": 124.04,
                "text": "But I don't want to carry on like everything is fine"
              },
              {
                "time": 132.68,
                "text": "The longer we ignore it, all the more that we will fight"
              },
              {
                "time": 140.64,
                "text": "Please, don't fall apart"
              },
              {
                "time": 145.28,
                "text": "I can't face your breaking heart"
              },
              {
                "time": 149.54,
                "text": "I'm trying to be brave"
              },
              {
                "time": 154.04,
                "text": "Stop asking me to stay"
              },
              {
                "time": 158.29,
                "text": "I can't love you in the dark"
              },
              {
                "time": 166.69,
                "text": "It feels like we're oceans apart"
              },
              {
                "time": 175.95,
                "text": "There is so much space between us"
              },
              {
                "time": 180.14,
                "text": "Baby, we're already defeated"
              },
              {
                "time": 184.41,
                "text": "Ah-yeah-yeah-yeah-yeah-yeah-yeah-yeah"
              },
              {
                "time": 188.83,
                "text": "Everything changed me"
              },
              {
                "time": 193.56,
                "text": "We're not the only ones, I don't regret a thing"
              },
              {
                "time": 197.75,
                "text": "Every wordYear of Release: 2015395167"
              }
            ]
          },
          {
            "title": "Disenchanted",
            "artist": "My Chemical Romance",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Disenchanted.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
            "lyrics": [
              {
                "time": 20.76,
                "text": "Well, I was there on the day"
              },
              {
                "time": 23.69,
                "text": "They sold the cause for the queen"
              },
              {
                "time": 26.42,
                "text": "And when the lights all went out"
              },
              {
                "time": 29.28,
                "text": "We watched our lives on the screen"
              },
              {
                "time": 31.98,
                "text": "I hate the ending myself"
              },
              {
                "time": 34.96,
                "text": "But it started with an alright scene"
              },
              {
                "time": 40.3,
                "text": ""
              },
              {
                "time": 43.03,
                "text": "It was the roar of the crowd"
              },
              {
                "time": 45.93,
                "text": "That gave me heartache to sing"
              },
              {
                "time": 48.44,
                "text": "It was a lie when they smiled"
              },
              {
                "time": 51.17,
                "text": "And said, \"You won't feel a thing\""
              },
              {
                "time": 53.95,
                "text": "And as we ran from the cops"
              },
              {
                "time": 57.49,
                "text": "We laughed so hard it would sting"
              },
              {
                "time": 62.31,
                "text": ""
              },
              {
                "time": 66.68,
                "text": "If I'm so wrong (so wrong, so wrong)"
              },
              {
                "time": 71.23,
                "text": "How can you listen all night long? (night long, night long)"
              },
              {
                "time": 77.57,
                "text": "Now, will it matter after I'm gone?"
              },
              {
                "time": 81.71000000000001,
                "text": "Because you never learned a goddamn thing"
              },
              {
                "time": 87.27,
                "text": "You're just a sad song with nothing to say"
              },
              {
                "time": 92.78,
                "text": "About a life-long wait for a hospital stay"
              },
              {
                "time": 98.21000000000001,
                "text": "And if you think that I'm wrong"
              },
              {
                "time": 101.77000000000001,
                "text": "This never meant nothing to you"
              },
              {
                "time": 109.4,
                "text": "I spent my high school career"
              },
              {
                "time": 112.15,
                "text": "Spit on and shoved to agree"
              },
              {
                "time": 114.84,
                "text": "So I could watch all my heroes sell a car on TV"
              },
              {
                "time": 120.25,
                "text": "Bring out the old guillotine"
              },
              {
                "time": 123.67,
                "text": "We'll show 'em what we all mean"
              },
              {
                "time": 129.11,
                "text": ""
              },
              {
                "time": 132.87,
                "text": "If I'm so wrong (so wrong, so wrong)"
              },
              {
                "time": 137.14,
                "text": "How can you listen all night long? (night long, night long)"
              },
              {
                "time": 143.87,
                "text": "Now, will it matter long after I'm gone?"
              },
              {
                "time": 148.07,
                "text": "Because you never learned a goddamn thing"
              },
              {
                "time": 153.49,
                "text": "You're just a sad song with nothing to say"
              },
              {
                "time": 158.94,
                "text": "About a life-long wait for a hospital stay"
              },
              {
                "time": 164.53,
                "text": "And if you think that I'm wrong"
              },
              {
                "time": 168.07999999999998,
                "text": "This never meant nothing to you"
              },
              {
                "time": 175.96,
                "text": "So go, go away"
              },
              {
                "time": 181.12,
                "text": "Just go,Year of Release: 20061,712965"
              }
            ]
          },
          {
            "title": "I Don't Love You",
            "artist": "My Chemical Romance",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/I Don't Love You.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
            "lyrics": [
              {
                "time": 26.1,
                "text": "Well, when you go"
              },
              {
                "time": 31.15,
                "text": "Don't ever think I'll make you try to stay"
              },
              {
                "time": 37.64,
                "text": "And maybe when you get back"
              },
              {
                "time": 40.65,
                "text": "I'll be off to find another way"
              },
              {
                "time": 45.79,
                "text": ""
              },
              {
                "time": 48.27,
                "text": "And after all this time that you still owe"
              },
              {
                "time": 53.97,
                "text": "You're still the good-for-nothing, I don't know"
              },
              {
                "time": 60.24,
                "text": "So take your gloves and get out"
              },
              {
                "time": 63.57,
                "text": "Better get out"
              },
              {
                "time": 66.17,
                "text": "While you can"
              },
              {
                "time": 69.7,
                "text": ""
              },
              {
                "time": 73.28999999999999,
                "text": "When you go"
              },
              {
                "time": 77.24,
                "text": "And would you even turn to say"
              },
              {
                "time": 83.53,
                "text": "I don't love you"
              },
              {
                "time": 86.48,
                "text": "Like I did"
              },
              {
                "time": 88.86,
                "text": "Yesterday"
              },
              {
                "time": 93.92,
                "text": "Sometimes I cry so hard from pleading"
              },
              {
                "time": 99.77000000000001,
                "text": "So sick and tired of all the needless beating"
              },
              {
                "time": 105.52000000000001,
                "text": "But baby when they knock you"
              },
              {
                "time": 108.25999999999999,
                "text": "Down and out"
              },
              {
                "time": 110.5,
                "text": "It's where you oughta stay"
              },
              {
                "time": 116.17,
                "text": "And after all the blood that you still owe"
              },
              {
                "time": 121.73,
                "text": "Another dollar's just another blow"
              },
              {
                "time": 128.06,
                "text": "So fix your eyes and get up"
              },
              {
                "time": 131.46,
                "text": "Better get up"
              },
              {
                "time": 134.01,
                "text": "While you can"
              },
              {
                "time": 136.59,
                "text": "Whoa, whoa"
              },
              {
                "time": 141.14,
                "text": "When you go"
              },
              {
                "time": 145.13,
                "text": "And wouldYear of Release: 20061,008562"
              }
            ]
          },
          {
            "title": "Cancer",
            "artist": "My Chemical Romance",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Cancer.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27317f77fab7e8f18d5f9fee4a1",
            "lyrics": [
              {
                "time": 12.67,
                "text": "Turn away"
              },
              {
                "time": 16.69,
                "text": "If you could get me a drink"
              },
              {
                "time": 20.24,
                "text": "Of water, 'cause my lips are chapped and faded"
              },
              {
                "time": 24.5,
                "text": "Call my aunt Marie"
              },
              {
                "time": 29.31,
                "text": "Help her gather all my things"
              },
              {
                "time": 33.09,
                "text": "And bury me in all my favorite colors"
              },
              {
                "time": 37.91,
                "text": "My sisters and my brothers, still"
              },
              {
                "time": 42.22,
                "text": "I will not kiss you"
              },
              {
                "time": 50.1,
                "text": "'Cause the hardest part of this"
              },
              {
                "time": 55.13,
                "text": "Is leaving you"
              },
              {
                "time": 61.43,
                "text": ""
              },
              {
                "time": 63.65,
                "text": "Now turn away"
              },
              {
                "time": 67.9,
                "text": "'Cause I'm awful just to see"
              },
              {
                "time": 71.52,
                "text": "'Cause all my hairs abandoned all my body"
              },
              {
                "time": 75.92,
                "text": "Oh, my agony"
              },
              {
                "time": 80.55,
                "text": "Know that I will never marry"
              },
              {
                "time": 84.62,
                "text": "Baby, I'm just soggy from the chemo"
              },
              {
                "time": 89.06,
                "text": "But counting down the days to go"
              },
              {
                "time": 93.5,
                "text": "It just ain't living"
              },
              {
                "time": 97.28999999999999,
                "text": "And I just hope you know"
              },
              {
                "time": 102.05,
                "text": "That if youYear of Release: 20061,027557"
              }
            ]
          },
          {
            "title": "Iris",
            "artist": "The Goo Goo Dolls",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Iris.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273eda9478c39a21e1cdc6609ca",
            "lyrics": [
              {
                "time": 12,
                "text": "And I'd give up forever to touch you"
              },
              {
                "time": 16.36,
                "text": "'Cause I know that you feel me somehow"
              },
              {
                "time": 21.03,
                "text": "You're the closest to heaven that I'll ever be"
              },
              {
                "time": 25.86,
                "text": "And I don't want to go home right now"
              },
              {
                "time": 30.82,
                "text": "And all I can taste is this moment"
              },
              {
                "time": 35.65,
                "text": "And all I can breathe is your life"
              },
              {
                "time": 40.15,
                "text": "And sooner or later, it's over"
              },
              {
                "time": 44.58,
                "text": "I just don't wanna miss you tonight"
              },
              {
                "time": 49.17,
                "text": "And I don't want the world to see me"
              },
              {
                "time": 53.96,
                "text": "'Cause I don't think that they'd understand"
              },
              {
                "time": 58.87,
                "text": "When everything's made to be broken"
              },
              {
                "time": 63.36,
                "text": "I just want you to know who I am"
              },
              {
                "time": 69.28999999999999,
                "text": ""
              },
              {
                "time": 80.02,
                "text": "And you can't fight the tears that ain't coming"
              },
              {
                "time": 84.21000000000001,
                "text": "Or the moment of truth in your lies"
              },
              {
                "time": 89.45,
                "text": "When everything feels like the movies"
              },
              {
                "time": 93.94,
                "text": "Yeah, you bleed just to know, you're alive"
              },
              {
                "time": 98.78,
                "text": "And I don't want the world to see me"
              },
              {
                "time": 103.25,
                "text": "'Cause I don't think that they'd understand"
              },
              {
                "time": 108.69,
                "text": "When everything's made to be broken"
              },
              {
                "time": 112.72,
                "text": "I just want you to know who I am"
              },
              {
                "time": 118.7,
                "text": ""
              },
              {
                "time": 210.59,
                "text": "And I don't want the world to see me"
              },
              {
                "time": 215.32999999999998,
                "text": "'Cause I don't think that they'd understand"
              },
              {
                "time": 220.28,
                "text": "When everything's made to be broken"
              },
              {
                "time": 224.45,
                "text": "I just wantYear of Release: 1998906114"
              }
            ]
          },
          {
            "title": "505",
            "artist": "Arctic Monkeys",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/505.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
            "lyrics": [
              {
                "time": 12.28,
                "text": "I'm going back to 505"
              },
              {
                "time": 16.72,
                "text": "If it's a seven-hour flight or a 45-minute drive"
              },
              {
                "time": 23.65,
                "text": "In my imagination, you're waiting lying on your side"
              },
              {
                "time": 30.26,
                "text": "With your hands between your thighs"
              },
              {
                "time": 37.14,
                "text": ""
              },
              {
                "time": 40.81,
                "text": "Stop and wait a sec'"
              },
              {
                "time": 43.95,
                "text": "Oh, when you look at me like that, my darling, what did you expect?"
              },
              {
                "time": 51.15,
                "text": "I'd probably still adore you with your hands around my neck"
              },
              {
                "time": 57.73,
                "text": "Or I did last time I checked"
              },
              {
                "time": 62.82,
                "text": ""
              },
              {
                "time": 68.38,
                "text": "Not shy of a spark"
              },
              {
                "time": 71.44,
                "text": "A knife twists at the thought that I should fall short of the mark"
              },
              {
                "time": 78.59,
                "text": "Frightened by the bite, though it's no harsher than the bark"
              },
              {
                "time": 85.32,
                "text": "The middle of adventure is such a perfect place to start"
              },
              {
                "time": 94.44,
                "text": "I'm going back to 505"
              },
              {
                "time": 98.58,
                "text": "If it's a seven-hour flight or a 45-minute drive"
              },
              {
                "time": 105.85,
                "text": "In my imagination, you're waiting lying on your side"
              },
              {
                "time": 112.53,
                "text": "With your hands between your thighs"
              },
              {
                "time": 118.03999999999999,
                "text": ""
              },
              {
                "time": 148.64,
                "text": "But I crumble completely when you cry"
              },
              {
                "time": 153.68,
                "text": "It seems like once again you've had to greetYear of Release: 20074,433997"
              }
            ]
          },
          {
            "title": "Wish You Were Here",
            "artist": "Neck Deep",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Wish You Were Here.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273012600ed0113720188be4dd5",
            "lyrics": [
              {
                "time": 9.57,
                "text": "Take it slow, tell me all"
              },
              {
                "time": 11.64,
                "text": "How you've grown just for me"
              },
              {
                "time": 13.96,
                "text": "Could we all reminisce?"
              },
              {
                "time": 18.51,
                "text": "Better yet, here's a pen"
              },
              {
                "time": 20.66,
                "text": "Make a list"
              },
              {
                "time": 21.78,
                "text": "Fill it full of all the things I've missed"
              },
              {
                "time": 25.96,
                "text": "'Cause I can barely drive past the school"
              },
              {
                "time": 29.35,
                "text": "Without stopping to think of you"
              },
              {
                "time": 31.53,
                "text": "And how we used to act the fool"
              },
              {
                "time": 35.94,
                "text": "But worst of all I wish I called"
              },
              {
                "time": 38.4,
                "text": "At least a thousand times or more"
              },
              {
                "time": 40.98,
                "text": "Just to hear what I've been missing"
              },
              {
                "time": 46.54,
                "text": "If a picture is all that I have"
              },
              {
                "time": 51.29,
                "text": "I can picture the times that we won't get back"
              },
              {
                "time": 55.93,
                "text": "If I picture it now it don't seem so bad"
              },
              {
                "time": 60.48,
                "text": "Either way, I still wish you were here"
              },
              {
                "time": 64.81,
                "text": "Don't say everything's meant to be"
              },
              {
                "time": 69.16,
                "text": "'Cause you know it's not what I believe"
              },
              {
                "time": 73.15,
                "text": "Can't help but think that it should've been me"
              },
              {
                "time": 77.97,
                "text": "Either way, I still wish you were here"
              },
              {
                "time": 83.77,
                "text": ""
              },
              {
                "time": 89.42,
                "text": "Thinking back on the days"
              },
              {
                "time": 91.65,
                "text": "Where we all used to say"
              },
              {
                "time": 93.93,
                "text": "I know anywhere's better than here"
              },
              {
                "time": 98.42,
                "text": "In the back of the class"
              },
              {
                "time": 100.74000000000001,
                "text": "Where we grew up too fast"
              },
              {
                "time": 103,
                "text": "Living life like there's nothing to fear"
              },
              {
                "time": 107.3,
                "text": "But the eyes on the road"
              },
              {
                "time": 109.61,
                "text": "Driving home all alone"
              },
              {
                "time": 111.82,
                "text": "Singing along to a song from three summers ago"
              },
              {
                "time": 116.22999999999999,
                "text": "The one that made you remember it"
              },
              {
                "time": 120.69,
                "text": "Now I'll always remember it"
              },
              {
                "time": 125.38,
                "text": "As the song that your life ended with"
              },
              {
                "time": 132.47,
                "text": "If a picture is all that I have"
              },
              {
                "time": 136.75,
                "text": "I can picture the times that we won't get back"
              },
              {
                "time": 141.2,
                "text": "If I picture it now it don't seem so bad"
              },
              {
                "time": 145.94,
                "text": "Either way, I still wish you were here"
              },
              {
                "time": 150.04,
                "text": "Don't say everything's meant to be"
              },
              {
                "time": 154.66,
                "text": "'Cause you know it's not what I believe"
              },
              {
                "time": 158.79,
                "text": "Can't help but think that it should've been me"
              },
              {
                "time": 163.57999999999998,
                "text": "Either way, I still wish you were here"
              },
              {
                "time": 168,
                "text": "And they say you're in a better place"
              },
              {
                "time": 172.69,
                "text": "But a better place is right here with me"
              },
              {
                "time": 177.16,
                "text": "Yeah they say you're in a better place"
              },
              {
                "time": 182.04,
                "text": "Too bad it's not whatYear of Release: 20173,6752,259"
              }
            ]
          },
          {
            "title": "About You",
            "artist": "The 1975",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/About You.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c",
            "lyrics": [
              {
                "time": 44.67,
                "text": "I know a place"
              },
              {
                "time": 54.53,
                "text": "It's somewhere I go when I need to remember your face"
              },
              {
                "time": 64,
                "text": "We get married in our heads"
              },
              {
                "time": 74.53,
                "text": "Something to do while we try to recall how we met"
              },
              {
                "time": 84,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 89.12,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 94.13,
                "text": "Do you think I have forgotten"
              },
              {
                "time": 99.24000000000001,
                "text": "About you?"
              },
              {
                "time": 104.24000000000001,
                "text": "You and I (don't let go) were alive (don't let go)"
              },
              {
                "time": 114.50999999999999,
                "text": "With nothing to do, I could lay and just look in your eyes"
              },
              {
                "time": 124.66,
                "text": "Wait (don't let go) and pretend (don't let go)"
              },
              {
                "time": 134.69,
                "text": "Hold on and hope that we'll find our way back in the end"
              },
              {
                "time": 144.26,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 149.2,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 154.17000000000002,
                "text": "Do you think I have forgotten"
              },
              {
                "time": 159.16,
                "text": "About you?"
              },
              {
                "time": 164.18,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 169.04,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 174.12,
                "text": "Do you think I have forgotten"
              },
              {
                "time": 179.12,
                "text": "About you?"
              },
              {
                "time": 184.48,
                "text": "There was something 'bout you that now I can't remember"
              },
              {
                "time": 189.67,
                "text": "It's the same damn thing that made my heart surrender"
              },
              {
                "time": 194.44,
                "text": "AndYear of Release: 20221,276598"
              }
            ]
          },
          {
            "title": "The Night We Met",
            "artist": "Lord Huron",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/The Night We Met.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2731fa318e90c9d4ddc6b480853",
            "lyrics": [
              {
                "time": 31.06,
                "text": "I am not the only traveler"
              },
              {
                "time": 38.05,
                "text": "Who has not repaid his debt"
              },
              {
                "time": 44.33,
                "text": "I've been searching for a trail to follow again"
              },
              {
                "time": 51.35,
                "text": "Take me back to the night we met"
              },
              {
                "time": 56.8,
                "text": ""
              },
              {
                "time": 58.94,
                "text": "And then I can tell myself"
              },
              {
                "time": 65.9,
                "text": "What the hell I'm supposed to do"
              },
              {
                "time": 73.36,
                "text": "And then I can tell myself"
              },
              {
                "time": 80.57,
                "text": "Not to ride along with you"
              },
              {
                "time": 87.61,
                "text": "I had all and then most of you"
              },
              {
                "time": 90.48,
                "text": "Some and now none of you"
              },
              {
                "time": 95.05,
                "text": "Take me back to the night we met"
              },
              {
                "time": 102.11,
                "text": "I don't know what I'm supposed to do"
              },
              {
                "time": 104.93,
                "text": "Haunted by the ghost of you"
              },
              {
                "time": 109.21000000000001,
                "text": "Oh, take me back to the night we met"
              },
              {
                "time": 114.65,
                "text": ""
              },
              {
                "time": 116.77000000000001,
                "text": "When the night was full of terror"
              },
              {
                "time": 123.99,
                "text": "And your eyes were filled with tears"
              },
              {
                "time": 131.29,
                "text": "When you had not touched me yet"
              },
              {
                "time": 138.09,
                "text": "Oh! Take me back to the nightYear of Release: 201558576"
              }
            ]
          },
          {
            "title": "Line Without a Hook",
            "artist": "Ricky Montgomery",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Line Without a Hook.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27367ee332af483acd134fd6fd0",
            "lyrics": [
              {
                "time": 0.54,
                "text": "I don't really give a damn about the way you touch me"
              },
              {
                "time": 2.49,
                "text": "When we're alone"
              },
              {
                "time": 5.55,
                "text": "You can hold my hand if no one's home"
              },
              {
                "time": 9.55,
                "text": "Do you like it when I'm away?"
              },
              {
                "time": 12.71,
                "text": "If I went and hurt my body"
              },
              {
                "time": 14.19,
                "text": "Baby, would you love me the same?"
              },
              {
                "time": 16.23,
                "text": "I can feel all my bones coming back, and I'm craving motion"
              },
              {
                "time": 20.59,
                "text": "Mama never really learned how to live by herself"
              },
              {
                "time": 24.35,
                "text": "It's a curse, and it's growing"
              },
              {
                "time": 28.03,
                "text": "You're a pond and I'm an ocean, oh"
              },
              {
                "time": 32.31,
                "text": "All my emotions feel like explosions when you are around"
              },
              {
                "time": 40.72,
                "text": "And I've found a way to kill the sound, oh"
              },
              {
                "time": 47.29,
                "text": "Oh, baby, I am a wreck when I'm without you"
              },
              {
                "time": 52.88,
                "text": "I need you here to stay"
              },
              {
                "time": 55.86,
                "text": "I broke all my bones that day I found you"
              },
              {
                "time": 60.14,
                "text": "Crying at the lake"
              },
              {
                "time": 62.72,
                "text": "Was it something I said to make you feel like you're a burden?"
              },
              {
                "time": 69.55,
                "text": "Oh, and if I could take it all back"
              },
              {
                "time": 75.21000000000001,
                "text": "I swear that I would pull you from the tide"
              },
              {
                "time": 83.89,
                "text": "Oh, whoa, whoa, whoa!"
              },
              {
                "time": 86.96000000000001,
                "text": "I said no (I said no), I said no (I said no)"
              },
              {
                "time": 89.19,
                "text": "Listen close, it's a no"
              },
              {
                "time": 93.85,
                "text": "The wind is a-pounding on my back"
              },
              {
                "time": 96.38,
                "text": "And I've found hope in a heart attack"
              },
              {
                "time": 100.22999999999999,
                "text": "Oh, at last, it is past"
              },
              {
                "time": 103.55,
                "text": "Now I've got it, and you can't have it"
              },
              {
                "time": 108.06,
                "text": "Baby, I am a wreck when I'm without you"
              },
              {
                "time": 114.32,
                "text": "I need you here to stay"
              },
              {
                "time": 116.65,
                "text": "I broke all my bones that day I found you"
              },
              {
                "time": 121.26,
                "text": "Crying at the lake"
              },
              {
                "time": 124.03,
                "text": "Was it something I said to make you feel like you're a burden?"
              },
              {
                "time": 130.98,
                "text": "Oh, and if I could take it all back"
              },
              {
                "time": 137.24,
                "text": "I swear that I would pull you from the tide"
              },
              {
                "time": 144.07999999999998,
                "text": ""
              },
              {
                "time": 147.1,
                "text": "Darling, when I'm fast asleep"
              },
              {
                "time": 151.13,
                "text": "I've seen this person watching me"
              },
              {
                "time": 154.74,
                "text": "Saying, \"Is it worth it? Is it worth it?"
              },
              {
                "time": 158.48,
                "text": "Tell me, is it worth it?\", Oh"
              },
              {
                "time": 170.84,
                "text": ""
              },
              {
                "time": 175.36,
                "text": "'Cause there is something and there is nothing"
              },
              {
                "time": 180.13,
                "text": "There isYear of Release: 20166217"
              }
            ]
          },
          {
            "title": "The Cut That Always Bleeds",
            "artist": "Conan Gray",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/The Cut That Always Bleeds.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43",
            "lyrics": [
              {
                "time": 2.96,
                "text": "I don't love you anymore"
              },
              {
                "time": 6.03,
                "text": "A pretty line that I adore"
              },
              {
                "time": 10.04,
                "text": "Five words that I've heard before"
              },
              {
                "time": 16.84,
                "text": "'Cause you keep me on a rope"
              },
              {
                "time": 20.32,
                "text": "And tied a noose around my throat"
              },
              {
                "time": 24.17,
                "text": "You're gone, then back at my door"
              },
              {
                "time": 30.78,
                "text": "'Cause if you're gonna leave, better leave, better do it fast"
              },
              {
                "time": 35.3,
                "text": "Can't live a little longer sitting on your lap"
              },
              {
                "time": 39.05,
                "text": "'Cause you know what you're doin' when you're comin' back"
              },
              {
                "time": 42.7,
                "text": "And I don't wanna have another heart attack"
              },
              {
                "time": 46.17,
                "text": "Oh, I can't be your lover on a leash"
              },
              {
                "time": 55.06,
                "text": "Every other week, when you please"
              },
              {
                "time": 60.07,
                "text": "Oh, I can't be the kiss that you don't need"
              },
              {
                "time": 69.17,
                "text": "The lie between your teeth"
              },
              {
                "time": 72.53,
                "text": "The cut that always bleeds"
              },
              {
                "time": 76.3,
                "text": "(Ah-ah-ah)"
              },
              {
                "time": 80.03,
                "text": "The cut that always bleeds"
              },
              {
                "time": 83.7,
                "text": "(Ah-ah-ah)"
              },
              {
                "time": 88.12,
                "text": "Say you love somebody new"
              },
              {
                "time": 91.23,
                "text": "Then beat my heart to black and blue"
              },
              {
                "time": 95.24000000000001,
                "text": "Then they leave, and it's me you come back to (Ah-ah)"
              },
              {
                "time": 102.34,
                "text": "To say you loved me all along"
              },
              {
                "time": 105.31,
                "text": "And kiss the bruises 'til they're gone"
              },
              {
                "time": 109.25999999999999,
                "text": "Bittersweet, 'cause I can't breathe inside your arms"
              },
              {
                "time": 116.08,
                "text": "'Cause if you're gonna leave, better leave, better do it fast"
              },
              {
                "time": 120.26,
                "text": "Can't live another minute bleedin' from my back"
              },
              {
                "time": 123.99,
                "text": "'Cause I don't have another one for you to stab"
              },
              {
                "time": 127.27,
                "text": "And I don't wanna have another heart attack"
              },
              {
                "time": 130.65,
                "text": "Oh, I can't be your lover on a leash"
              },
              {
                "time": 139.68,
                "text": "Every other week, when you please"
              },
              {
                "time": 144.44,
                "text": "Oh, I can't be the kiss that you don't need"
              },
              {
                "time": 153.52,
                "text": "TheYear of Release: 2020296131"
              }
            ]
          },
          {
            "title": "Car's Outside",
            "artist": "James Arthur",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Car's Outside.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273dc16d839ab77c64bdbeb3660",
            "lyrics": [
              {
                "time": 6.64,
                "text": "I'm packin' my bags that I didn't unpack the last time"
              },
              {
                "time": 12.61,
                "text": "I'm sayin', \"See you again,\" so many times, it's becoming my tagline"
              },
              {
                "time": 19.49,
                "text": "But you know the truth, I'd rather hold you"
              },
              {
                "time": 22.65,
                "text": "Than try to catch this flight"
              },
              {
                "time": 25.82,
                "text": "So many things I'd rather say"
              },
              {
                "time": 27.82,
                "text": "But for now, it's goodbye"
              },
              {
                "time": 32.84,
                "text": "You say I'm always leavin'"
              },
              {
                "time": 38.98,
                "text": "You, when you're sleepin' alone"
              },
              {
                "time": 43.94,
                "text": "But the, the car's outside"
              },
              {
                "time": 47.28,
                "text": "But I don't wanna go tonight"
              },
              {
                "time": 51.94,
                "text": "I'm not gettin' in the Addison Lee"
              },
              {
                "time": 57.24,
                "text": "Unless you pack your bags"
              },
              {
                "time": 60.89,
                "text": "You're comin' with me"
              },
              {
                "time": 65.6,
                "text": "I'm tired of lovin' from afar"
              },
              {
                "time": 68.85,
                "text": "And never being where you are"
              },
              {
                "time": 72.24,
                "text": "Close the windows, lock the doors"
              },
              {
                "time": 75.11,
                "text": "Don't wanna leave you anymore"
              },
              {
                "time": 79.53,
                "text": "Oh-oh, ah"
              },
              {
                "time": 83.46000000000001,
                "text": "I'm starin' at the same four walls in a different hotel"
              },
              {
                "time": 90.05,
                "text": "It's an unfamiliar feelin' but I know it so well"
              },
              {
                "time": 95.75,
                "text": "Oh, but you know the truth, I'd rather hold you"
              },
              {
                "time": 99.4,
                "text": "Than this mobile in my hand"
              },
              {
                "time": 102.56,
                "text": "But I guess it'll do, 'cause for you"
              },
              {
                "time": 105.1,
                "text": "I would run up my phone bill"
              },
              {
                "time": 109.19,
                "text": "You say I'm always leavin'"
              },
              {
                "time": 115.56,
                "text": "You, when you need me the most"
              },
              {
                "time": 120.88,
                "text": "But the, the car's outside"
              },
              {
                "time": 124.07,
                "text": "But I don't wanna go tonight"
              },
              {
                "time": 128.72,
                "text": "I'm not gettin' in the Addison Lee"
              },
              {
                "time": 133.92,
                "text": "Unless you pack your bags"
              },
              {
                "time": 137.87,
                "text": "You're comin' with me"
              },
              {
                "time": 142.16,
                "text": "I'm tired of lovin' from afar"
              },
              {
                "time": 145.45,
                "text": "And never being where you are"
              },
              {
                "time": 149.06,
                "text": "Close the windows, lock the doors"
              },
              {
                "time": 152.01,
                "text": "Don't wanna leave you anymore"
              },
              {
                "time": 154.66,
                "text": "Ooh-ooh, ah"
              },
              {
                "time": 157.88,
                "text": "Ooh-ooh, ah"
              },
              {
                "time": 160.96,
                "text": "Ooh-ooh, ah"
              },
              {
                "time": 164.75,
                "text": "Don't wanna leave you anymore"
              },
              {
                "time": 167.93,
                "text": "Oh, darling, all of the city lights"
              },
              {
                "time": 171.04,
                "text": "Never shine as bright as your eyes"
              },
              {
                "time": 174.2,
                "text": "I would trade them all for a minute more"
              },
              {
                "time": 177.48,
                "text": "But theYear of Release: 20198536"
              }
            ]
          },
          {
            "title": "Romantic Homicide",
            "artist": "d4vd",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Romantic Homicide.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273bd1a52b3d5903ee01c216da0",
            "lyrics": [
              {
                "time": 15.83,
                "text": "I'm scared"
              },
              {
                "time": 17.92,
                "text": ""
              },
              {
                "time": 21.65,
                "text": "It feels like you don't care"
              },
              {
                "time": 26.11,
                "text": ""
              },
              {
                "time": 28.83,
                "text": "Enlighten me, my dear"
              },
              {
                "time": 33.48,
                "text": ""
              },
              {
                "time": 36.33,
                "text": "Why am I still here?"
              },
              {
                "time": 40.75,
                "text": ""
              },
              {
                "time": 43.34,
                "text": "I don't mean to be complacent with the decisions you made"
              },
              {
                "time": 51.81,
                "text": "But why?"
              },
              {
                "time": 56.1,
                "text": "Mm"
              },
              {
                "time": 58.52,
                "text": "In the back of my mind"
              },
              {
                "time": 62.12,
                "text": "You died"
              },
              {
                "time": 65.23,
                "text": "And I didn't even cry"
              },
              {
                "time": 68.7,
                "text": "No, not a single tear"
              },
              {
                "time": 72.48,
                "text": "And I'm sick of waiting patiently for someone that won't even arrive"
              },
              {
                "time": 84.17,
                "text": ""
              },
              {
                "time": 89.08,
                "text": "Whoa"
              },
              {
                "time": 97.95,
                "text": ""
              },
              {
                "time": 102.25999999999999,
                "text": "In the backYear of Release: 20221,455168"
              }
            ]
          },
          {
            "title": "No Surprises",
            "artist": "Radiohead",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/No Surprises.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
            "lyrics": [
              {
                "time": 25.65,
                "text": "A heart that's full up like a landfill"
              },
              {
                "time": 35.22,
                "text": "A job that slowly kills you"
              },
              {
                "time": 41.51,
                "text": "Bruises that won't heal"
              },
              {
                "time": 48.37,
                "text": ""
              },
              {
                "time": 51.62,
                "text": "You look so tired, unhappy"
              },
              {
                "time": 57.69,
                "text": "Bring down the government"
              },
              {
                "time": 64.17,
                "text": "They don't, they don't speak for us"
              },
              {
                "time": 74.41,
                "text": ""
              },
              {
                "time": 76.75,
                "text": "I'll take a quiet life"
              },
              {
                "time": 82.34,
                "text": "A handshake of carbon monoxide"
              },
              {
                "time": 88.91,
                "text": "No alarms and no surprises"
              },
              {
                "time": 95.25,
                "text": "No alarms and no surprises"
              },
              {
                "time": 101.3,
                "text": "No alarms and no surprises"
              },
              {
                "time": 107.68,
                "text": "Silent"
              },
              {
                "time": 114.06,
                "text": "Silent"
              },
              {
                "time": 120.88,
                "text": "This is my final fit"
              },
              {
                "time": 126.04,
                "text": "My final bellyache with"
              },
              {
                "time": 133.48,
                "text": "No alarms and no surprises"
              },
              {
                "time": 139.52,
                "text": "No alarms and no surprises"
              },
              {
                "time": 145.55,
                "text": "No alarmsYear of Release: 1997338120"
              }
            ]
          },
          {
            "title": "happier",
            "artist": "Olivia Rodrigo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/happier.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
            "lyrics": [
              {
                "time": 4.64,
                "text": "We broke up a month ago"
              },
              {
                "time": 8.57,
                "text": "Your friends aren't mine, you know, I know"
              },
              {
                "time": 12.56,
                "text": "You've moved on, found someone new"
              },
              {
                "time": 16.16,
                "text": "One more girl who brings out the better in you"
              },
              {
                "time": 21.11,
                "text": "And I thought my heart was detached"
              },
              {
                "time": 25.44,
                "text": "From all the sunlight of our past"
              },
              {
                "time": 29.72,
                "text": "But she's so sweet, she's so pretty"
              },
              {
                "time": 34.07,
                "text": "Does she mean you forgot about me?"
              },
              {
                "time": 38.12,
                "text": "Oh, I hope you're happy"
              },
              {
                "time": 42.25,
                "text": "But not like how you were with me"
              },
              {
                "time": 46.58,
                "text": "I'm selfish, I know, I can't let you go"
              },
              {
                "time": 50.83,
                "text": "So find someone great, but don't find no one better"
              },
              {
                "time": 55.09,
                "text": "I hope you're happy, but don't be happier"
              },
              {
                "time": 61.95,
                "text": "And do you tell her she's the most beautiful girl you've ever seen?"
              },
              {
                "time": 67.06,
                "text": "And promise three words you know you'll never mean"
              },
              {
                "time": 71.41,
                "text": "Remember when I believed"
              },
              {
                "time": 73.78,
                "text": "You meant it when you said it first to me?"
              },
              {
                "time": 78.67,
                "text": "And now I'm pickin' her apart"
              },
              {
                "time": 82.99,
                "text": "Like cuttin' her down make you miss my wretched heart"
              },
              {
                "time": 87.11,
                "text": "But she's beautiful, she looks kind"
              },
              {
                "time": 91.2,
                "text": "She probably gives you butterflies"
              },
              {
                "time": 95.62,
                "text": "I hope you're happy"
              },
              {
                "time": 99.89,
                "text": "But not like how you were with me"
              },
              {
                "time": 104.06,
                "text": "I'm selfish, I know, I can't let you go"
              },
              {
                "time": 108.52000000000001,
                "text": "So find someone great, but don't find no one better"
              },
              {
                "time": 112.83,
                "text": "I hope you're happy, I wish you all the best, really"
              },
              {
                "time": 121.15,
                "text": "Say you love her, baby,Year of Release: 202110345"
              }
            ]
          },
          {
            "title": "Memories",
            "artist": "Conan Gray",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Memories.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27360a89b781c62ffe2136e4396",
            "lyrics": [
              {
                "time": 0.67,
                "text": "One, two"
              },
              {
                "time": 2.33,
                "text": "It's been a couple months"
              },
              {
                "time": 5.56,
                "text": "That's just about enough time"
              },
              {
                "time": 9.67,
                "text": "For me to stop crying when I look at all the pictures"
              },
              {
                "time": 13.61,
                "text": "Now I kinda smile, I haven't felt that in a while"
              },
              {
                "time": 19.29,
                "text": "It's late, I hear the door"
              },
              {
                "time": 22.33,
                "text": "Bell ringing, and it's pouring"
              },
              {
                "time": 26.72,
                "text": "I open up that door, see your brown eyes at the entrance"
              },
              {
                "time": 30.57,
                "text": "You just wanna talk, and I can't turn away a wet dog"
              },
              {
                "time": 35.92,
                "text": "But please, don't ruin this for me"
              },
              {
                "time": 42.13,
                "text": "Please, don't make it harder than it already is"
              },
              {
                "time": 48.44,
                "text": "I'm trying to get over this"
              },
              {
                "time": 56.13,
                "text": "I wish that you would stay in my memories"
              },
              {
                "time": 60.49,
                "text": "But you show up today just to ruin things"
              },
              {
                "time": 64.4,
                "text": "I wanna put you in the past 'cause I'm traumatized"
              },
              {
                "time": 68.78999999999999,
                "text": "But you're not letting me do that, 'cause tonight"
              },
              {
                "time": 72.26,
                "text": "You're all drunk in my kitchen, curled in the fetal position"
              },
              {
                "time": 76.26,
                "text": "Too busy playing the victim to be listening to me when I say"
              },
              {
                "time": 82.53,
                "text": "\"I wish that you would stay in my memories\""
              },
              {
                "time": 86.44,
                "text": "In my memories, stay in my memories"
              },
              {
                "time": 91.6,
                "text": ""
              },
              {
                "time": 94.34,
                "text": "Now I can't say, \"Goodbye\""
              },
              {
                "time": 97.52000000000001,
                "text": "If you'll stay here the whole night"
              },
              {
                "time": 101.17,
                "text": "You see, it's hard to find an end to something that you keep beginning"
              },
              {
                "time": 105.47999999999999,
                "text": "Over, and over again"
              },
              {
                "time": 107.2,
                "text": "I promise that the ending always stays the same"
              },
              {
                "time": 110.44,
                "text": "So there's no good reason in make-believing"
              },
              {
                "time": 114.8,
                "text": "That we could ever exist again"
              },
              {
                "time": 118.67,
                "text": "I can't be your friend, can't be your lover"
              },
              {
                "time": 120.96,
                "text": "Can't be the reason we hold back each other from falling in love"
              },
              {
                "time": 124.97,
                "text": "With somebody other than me"
              },
              {
                "time": 128.68,
                "text": "I wish that you would stay in my memories"
              },
              {
                "time": 132.94,
                "text": "But you show up today just to ruin things"
              },
              {
                "time": 136.8,
                "text": "I wanna put you in the past 'cause I'm traumatized"
              },
              {
                "time": 141.13,
                "text": "But you're not letting me do that, 'cause tonight"
              },
              {
                "time": 144.5,
                "text": "You're all drunk in my kitchen, curled in the fetal position"
              },
              {
                "time": 148.63,
                "text": "Too busy playing the victim to be listening to me when I say"
              },
              {
                "time": 154.63,
                "text": "\"I wish that you would stay in my memories\""
              },
              {
                "time": 158.74,
                "text": "In my memories, stay in my memories"
              },
              {
                "time": 164.54,
                "text": "Since you came"
              },
              {
                "time": 168.51,
                "text": "I guess I'll let you stay"
              },
              {
                "time": 172.06,
                "text": "For as long as it takes"
              },
              {
                "time": 175.98,
                "text": "To grab yourYear of Release: 20227118"
              }
            ]
          },
          {
            "title": "deja vu",
            "artist": "Olivia Rodrigo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/deja vu.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
            "lyrics": [
              {
                "time": 10.74,
                "text": "Car rides to Malibu"
              },
              {
                "time": 15.09,
                "text": "Strawberry ice cream, one spoon for two"
              },
              {
                "time": 20.37,
                "text": "And tradin' jackets"
              },
              {
                "time": 23.88,
                "text": "Laughin' 'bout how small it looks on you"
              },
              {
                "time": 27.58,
                "text": "(Ha-ha, ha-ha, ha-ha, ha-ha-ha, ha-ha, ha-ha)"
              },
              {
                "time": 32.1,
                "text": "Watchin' reruns of Glee"
              },
              {
                "time": 36.43,
                "text": "Bein' annoyin', singin' in harmony"
              },
              {
                "time": 41.77,
                "text": "I bet she's braggin'"
              },
              {
                "time": 45.16,
                "text": "To all her friends, sayin' you're so unique, hm"
              },
              {
                "time": 51.66,
                "text": "So when you gonna tell her that we did that, too?"
              },
              {
                "time": 57.51,
                "text": "She thinks it's special, but it's all reused"
              },
              {
                "time": 62.74,
                "text": "That was our place, I found it first"
              },
              {
                "time": 65.32,
                "text": "I made the jokes you tell to her when she's with you"
              },
              {
                "time": 71.37,
                "text": "Do you get déjà vu when she's with you?"
              },
              {
                "time": 76.72,
                "text": "Do you get déjà vu? Ah, hm"
              },
              {
                "time": 82.15,
                "text": "Do you get déjà vu, huh?"
              },
              {
                "time": 86.32,
                "text": ""
              },
              {
                "time": 95.08,
                "text": "Do you call her, almost say my name?"
              },
              {
                "time": 99.83,
                "text": "'Cause let's be honest, we kinda do sound the same"
              },
              {
                "time": 105.09,
                "text": "Another actress"
              },
              {
                "time": 108.45,
                "text": "I hate to think that I was just your type"
              },
              {
                "time": 113.27000000000001,
                "text": ""
              },
              {
                "time": 115.75999999999999,
                "text": "And I bet that she knows Billy Joel"
              },
              {
                "time": 119.00999999999999,
                "text": "'Cause you played her \"Uptown Girl\""
              },
              {
                "time": 121.58,
                "text": "You're singin' it together"
              },
              {
                "time": 123.87,
                "text": "Now I bet you even tell her how you love her"
              },
              {
                "time": 129.7,
                "text": "In between the chorus and the verse (ooh) (I love you)"
              },
              {
                "time": 136.41,
                "text": "So when you gonna tell her that we did that, too?"
              },
              {
                "time": 142,
                "text": "She thinks it's special, but it's all reused"
              },
              {
                "time": 147.32,
                "text": "That was the show we talked about"
              },
              {
                "time": 150.19,
                "text": "Played you the song she's singing now when she's with you"
              },
              {
                "time": 156.26,
                "text": "Do you get déjà vu when she's with you?"
              },
              {
                "time": 161.62,
                "text": "Do youYear of Release: 202111742"
              }
            ]
          },
          {
            "title": "Until I Found You",
            "artist": "Stephen Sanchez",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Until I Found You.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2739522042f86d0bb0d4e9e3783",
            "lyrics": [
              {
                "time": 10.06,
                "text": "Georgia, wrap me up in all your-"
              },
              {
                "time": 16.71,
                "text": "I want you in my arms"
              },
              {
                "time": 22.24,
                "text": "Oh, let me hold you"
              },
              {
                "time": 27.22,
                "text": "I'll never let you go again like I did"
              },
              {
                "time": 33.38,
                "text": "Oh, I used to say"
              },
              {
                "time": 37.01,
                "text": "\"I would never fall in love again until I found her\""
              },
              {
                "time": 44.15,
                "text": "I said, \"I would never fall unless it's you I fall into\""
              },
              {
                "time": 51.38,
                "text": "I was lost within the darkness, but then I found her"
              },
              {
                "time": 58.13,
                "text": "I found you"
              },
              {
                "time": 64.53,
                "text": ""
              },
              {
                "time": 67.49,
                "text": "Georgia, pulled me in"
              },
              {
                "time": 72.15,
                "text": "I asked to love her once again"
              },
              {
                "time": 79.26,
                "text": "You fell, I caught you"
              },
              {
                "time": 84.41,
                "text": "I'll never let you go again like I did"
              },
              {
                "time": 90.48,
                "text": "Oh, I used to say"
              },
              {
                "time": 94.07,
                "text": "\"I would never fall in love again until I found her\""
              },
              {
                "time": 101.28999999999999,
                "text": "I said, \"I would never fall unless it's you I fall into\""
              },
              {
                "time": 108.31,
                "text": "I was lost within theYear of Release: 2021677418"
              }
            ]
          },
          {
            "title": "End of Beginning",
            "artist": "Djo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/End of Beginning.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273fddfffec51b4580acae727c1",
            "lyrics": [
              {
                "time": 4.08,
                "text": "Just one more tear to cry, one teardrop from my eye"
              },
              {
                "time": 12.35,
                "text": "You better save it for"
              },
              {
                "time": 16.19,
                "text": "The middle of the night when things aren't black and white"
              },
              {
                "time": 24.73,
                "text": "Enter, Troubadour"
              },
              {
                "time": 28.88,
                "text": "\"Remember 24?\""
              },
              {
                "time": 32.92,
                "text": ""
              },
              {
                "time": 37.73,
                "text": "And when I'm back in Chicago, I feel it"
              },
              {
                "time": 43.88,
                "text": "Another version of me, I was in it"
              },
              {
                "time": 49.85,
                "text": "I wave goodbye to the end of beginning"
              },
              {
                "time": 57.15,
                "text": ""
              },
              {
                "time": 61.13,
                "text": "This song has started now, and you're just finding out"
              },
              {
                "time": 69.38,
                "text": "Now isn't that a laugh?"
              },
              {
                "time": 73.17,
                "text": "A major sacrifice, but clueless at the time"
              },
              {
                "time": 81.75,
                "text": "Enter, Caroline"
              },
              {
                "time": 85.86,
                "text": "\"Just trust me, you'll be fine\""
              },
              {
                "time": 90.36,
                "text": "And when I'm back in Chicago, I feel it"
              },
              {
                "time": 96.36,
                "text": "Another version of me, I was in it"
              },
              {
                "time": 102.36,
                "text": "I wave goodbye to the end of beginning"
              },
              {
                "time": 106.72999999999999,
                "text": "(Goodbye, goodbye, goodbye, goodbye)"
              },
              {
                "time": 112.78999999999999,
                "text": "You take the man out of the city, not the city out the man"
              },
              {
                "time": 118.72999999999999,
                "text": "You take the man out of the city, not the city out theYear of Release: 20221,744946"
              }
            ]
          },
          {
            "title": "Someone To Stay",
            "artist": "Vancouver Sleep Clinic",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Someone To Stay.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273dabc6fe9dd3454884cf65071",
            "lyrics": [
              {
                "time": 4.4,
                "text": "You were alone, left out in the cold"
              },
              {
                "time": 8.62,
                "text": "Clinging to the ruin of your broken home"
              },
              {
                "time": 12.73,
                "text": "Too lost and hurting to carry your load"
              },
              {
                "time": 17.28,
                "text": "We all need someone to hold"
              },
              {
                "time": 22.23,
                "text": ""
              },
              {
                "time": 30.27,
                "text": "You've been fighting the memory, all on your own"
              },
              {
                "time": 34.85,
                "text": "Nothing worsens, nothing grows"
              },
              {
                "time": 39.59,
                "text": "I know how it feels being by yourself in the rain"
              },
              {
                "time": 43.63,
                "text": "We all need someone to stay"
              },
              {
                "time": 48.69,
                "text": ""
              },
              {
                "time": 52.77,
                "text": "We all need someone to stay"
              },
              {
                "time": 57.06,
                "text": "Hear the fallen and lonely, cry out"
              },
              {
                "time": 61.05,
                "text": "Will you fix me up? Will you show me hope?"
              },
              {
                "time": 65.73,
                "text": "At the end of the day you were helpless"
              },
              {
                "time": 69.85,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 79.03999999999999,
                "text": "You've drunk it down and you've spat it out"
              },
              {
                "time": 83.3,
                "text": "And nothing tastes like the things you had"
              },
              {
                "time": 87.56,
                "text": "So tear it off, why don't you let them go?"
              },
              {
                "time": 92.37,
                "text": "We all need someone to stay"
              },
              {
                "time": 97.45,
                "text": ""
              },
              {
                "time": 101.11,
                "text": "We all need someone to stay"
              },
              {
                "time": 105.38,
                "text": "Hear the fallen and lonely, cry out"
              },
              {
                "time": 109.45,
                "text": "Will you fix me up? Will you show me hope?"
              },
              {
                "time": 114.31,
                "text": "At the end of the day we're helpless"
              },
              {
                "time": 118.13,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 124.11,
                "text": ""
              },
              {
                "time": 127.11,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 133.34,
                "text": ""
              },
              {
                "time": 135.77,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 142.34,
                "text": ""
              },
              {
                "time": 149.79,
                "text": "You were alone, left out in the cold"
              },
              {
                "time": 154.09,
                "text": "Clinging to the ruin of your broken home"
              },
              {
                "time": 158.39,
                "text": "Hear the falling and lonely, cry out"
              },
              {
                "time": 162.32,
                "text": "Will you fix me up?Year of Release: 2016604251"
              }
            ]
          },
          {
            "title": "traitor",
            "artist": "Olivia Rodrigo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/traitor.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
            "lyrics": [
              {
                "time": 19.12,
                "text": "Brown guilty eyes and little white lies, yeah"
              },
              {
                "time": 23.58,
                "text": "I played dumb, but I always knew"
              },
              {
                "time": 28.49,
                "text": "That you talked to her, maybe did even worse"
              },
              {
                "time": 32.91,
                "text": "I kept quiet so I could keep you"
              },
              {
                "time": 37.34,
                "text": "And ain't it funny how you ran to her"
              },
              {
                "time": 42.86,
                "text": "The second that we called it quits?"
              },
              {
                "time": 47.16,
                "text": "And ain't it funny how you said you were friends?"
              },
              {
                "time": 52.29,
                "text": "Now it sure as hell don't look like it"
              },
              {
                "time": 56.92,
                "text": "You betrayed me"
              },
              {
                "time": 59.88,
                "text": "And I know that you'll never feel sorry for the way I hurt, yeah"
              },
              {
                "time": 67.08,
                "text": "You talked to her when we were together"
              },
              {
                "time": 71.46000000000001,
                "text": "Loved you at your worst, but that didn't matter"
              },
              {
                "time": 76.53,
                "text": "It took you two weeks to go off and date her"
              },
              {
                "time": 81.03999999999999,
                "text": "Guess you didn't cheat, but you're still a traitor"
              },
              {
                "time": 86.76,
                "text": ""
              },
              {
                "time": 90.34,
                "text": "Now you bring her around just to shut me down"
              },
              {
                "time": 95.27000000000001,
                "text": "Show her off like she's a new trophyㅤ"
              },
              {
                "time": 99.75,
                "text": "And I know if you were true, there's no damn way that you"
              },
              {
                "time": 104.78999999999999,
                "text": "Could fall in love with somebody that quickly"
              },
              {
                "time": 109.58,
                "text": "Ain't it funny? All the twisted games"
              },
              {
                "time": 114.53,
                "text": "All the questions you used to avoid"
              },
              {
                "time": 119.06,
                "text": "Ain't it funny? Remember I brought her up"
              },
              {
                "time": 124.1,
                "text": "And you told me I was paranoid?"
              },
              {
                "time": 128.57,
                "text": "You betrayed me"
              },
              {
                "time": 131.78,
                "text": "And I know that you'll never feel sorry for the way I hurt, yeah"
              },
              {
                "time": 139.01,
                "text": "You talked to her when we were together"
              },
              {
                "time": 143.57,
                "text": "Loved you at your worst, but that didn't matter"
              },
              {
                "time": 148.6,
                "text": "It took you two weeks to go off and date her"
              },
              {
                "time": 153.16,
                "text": "Guess you didn't cheat, but you're still a traitor"
              },
              {
                "time": 159.54,
                "text": "(Ah-ah-ah) God, I wish that you had thought this through"
              },
              {
                "time": 165.35,
                "text": "Before I went and fell in love with you"
              },
              {
                "time": 169.07,
                "text": "(Ah-ah-ah) when she's sleepin'Year of Release: 202111545"
              }
            ]
          },
          {
            "title": "Dandelions",
            "artist": "Ruth B.",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Dandelions.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27397e971f3e53475091dc8d707",
            "lyrics": [
              {
                "time": 12.23,
                "text": "Maybe, it's the way you say my name"
              },
              {
                "time": 18.39,
                "text": "Maybe, it's the way you play your game"
              },
              {
                "time": 23.21,
                "text": "But it's so good, I've never known anybody like you"
              },
              {
                "time": 29.36,
                "text": "But it's so good, I've never dreamed of nobody like you"
              },
              {
                "time": 36.05,
                "text": "And I've heard of a love that comes once in a lifetime"
              },
              {
                "time": 42.96,
                "text": "And I'm pretty sure that you are that love of mine"
              },
              {
                "time": 48.52,
                "text": "'Cause I'm in a field of dandelions"
              },
              {
                "time": 52.45,
                "text": "Wishing on every one that you'll be mine, mine"
              },
              {
                "time": 58.76,
                "text": ""
              },
              {
                "time": 60.83,
                "text": "And I see forever in your eyes"
              },
              {
                "time": 64.52,
                "text": "I feel okay when I see you smile, smile"
              },
              {
                "time": 73.03999999999999,
                "text": "Wishing on dandelions all of the time"
              },
              {
                "time": 76.2,
                "text": "Praying to God that one day you'll be mine"
              },
              {
                "time": 79.1,
                "text": "Wishing on dandelions all of the time, all of the time"
              },
              {
                "time": 86.21000000000001,
                "text": "I think that you are the one for me"
              },
              {
                "time": 92.02000000000001,
                "text": "'Cause it gets so hard to breathe"
              },
              {
                "time": 97.13,
                "text": "When you're looking at me, I've never felt so alive and free"
              },
              {
                "time": 103.49000000000001,
                "text": "When you're looking at me, I've never felt so happy"
              },
              {
                "time": 110.08,
                "text": "And I've heard of a love that comes once in a lifetime"
              },
              {
                "time": 116.57,
                "text": "And I'm pretty sure that you are that love of mine"
              },
              {
                "time": 122.45,
                "text": "'Cause I'm in a field of dandelions"
              },
              {
                "time": 126.1,
                "text": "Wishing on every one that you'll be mine, mine"
              },
              {
                "time": 134.63,
                "text": "And I see forever in your eyes"
              },
              {
                "time": 138.34,
                "text": "I feel okay, when I see you smile, smile"
              },
              {
                "time": 146.86,
                "text": "Wishing on dandelions all of the time"
              },
              {
                "time": 150.09,
                "text": "Praying to God that one day you'll be mine"
              },
              {
                "time": 153.07999999999998,
                "text": "Wishing on dandelions all of the time, all of the time"
              },
              {
                "time": 156.51,
                "text": ""
              },
              {
                "time": 159.8,
                "text": "Dandelion, into the wind you go"
              },
              {
                "time": 163.09,
                "text": "Won't you let myYear of Release: 20177,9216,086"
              }
            ]
          },
          {
            "title": "drunk text",
            "artist": "Henry Moodie",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/drunk text.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273db94c82db2d786cd9e03a538",
            "lyrics": [
              {
                "time": 0.49,
                "text": "5th of November"
              },
              {
                "time": 4.03,
                "text": "When I walked you home"
              },
              {
                "time": 8.15,
                "text": "That's when I nearly said it"
              },
              {
                "time": 10.64,
                "text": "But then said \"Forget it,\" and froze"
              },
              {
                "time": 15.88,
                "text": "Do you remember?"
              },
              {
                "time": 19.33,
                "text": "You probably don't"
              },
              {
                "time": 23.32,
                "text": "'Cause the sparks in the sky took a hold of your eyes while we spoke"
              },
              {
                "time": 31.44,
                "text": "Yesterday, drank way too much"
              },
              {
                "time": 35.1,
                "text": "And stayed up too late"
              },
              {
                "time": 37.38,
                "text": "Started to write what I wanna say"
              },
              {
                "time": 40.97,
                "text": "Deleted the message"
              },
              {
                "time": 42.72,
                "text": "But I still remember it said"
              },
              {
                "time": 46.43,
                "text": "I wish I was who you drunk texted at midnight"
              },
              {
                "time": 52.32,
                "text": "Wish I was the reason you stay up till 3"
              },
              {
                "time": 55.91,
                "text": "And you can't fall asleep"
              },
              {
                "time": 58.19,
                "text": "Waiting for me to reply"
              },
              {
                "time": 61.71,
                "text": "I wish I was more than just someone you walk by"
              },
              {
                "time": 67.53,
                "text": "Wish I wasn't scared to be honest and open"
              },
              {
                "time": 71.07,
                "text": "Instead of just hoping"
              },
              {
                "time": 73.25,
                "text": "You'd feel what I'm feeling inside"
              },
              {
                "time": 78.52,
                "text": "April the 7th"
              },
              {
                "time": 81.42,
                "text": "And nothing has changed"
              },
              {
                "time": 85.88,
                "text": "It's hard to get by"
              },
              {
                "time": 87.99,
                "text": "When you're still on my mind every day"
              },
              {
                "time": 93,
                "text": "Sometimes I question"
              },
              {
                "time": 96.53,
                "text": "If you feel the same?"
              },
              {
                "time": 101.16,
                "text": "Do we make stupid jokes?"
              },
              {
                "time": 103.06,
                "text": "Tryna hide that we're both too afraid to say"
              },
              {
                "time": 109.09,
                "text": "I wish I was who you drunk texted at midnight"
              },
              {
                "time": 114.82,
                "text": "Wish I was the reason you stay up till 3"
              },
              {
                "time": 118.28,
                "text": "And you can't fall asleep"
              },
              {
                "time": 120.58,
                "text": "Waiting for me to reply"
              },
              {
                "time": 124.46,
                "text": "I wish I was more than just someone you walk by"
              },
              {
                "time": 129.83,
                "text": "Wish I wasn't scared to be honest and open"
              },
              {
                "time": 133.94,
                "text": "Instead of just hoping"
              },
              {
                "time": 135.84,
                "text": "You'd feel what I'mYear of Release: 20231,358620"
              }
            ]
          },
          {
            "title": "Love In The Dark",
            "artist": "Adele",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Love In The Dark.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2737b9888dc365b8f957c63df14",
            "lyrics": [
              {
                "time": 19.63,
                "text": "Take your eyes off of me so I can leave"
              },
              {
                "time": 27.91,
                "text": "I'm far too ashamed to do it with you watching me"
              },
              {
                "time": 36.94,
                "text": "This is never ending, we have been here before"
              },
              {
                "time": 45.48,
                "text": "But I can't stay this time 'cause I don't love you anymore"
              },
              {
                "time": 53.6,
                "text": "Please, stay where you are"
              },
              {
                "time": 57.88,
                "text": "Don't come any closer"
              },
              {
                "time": 62.38,
                "text": "Don't try to change my mind"
              },
              {
                "time": 66.75,
                "text": "I'm being cruel to be kind"
              },
              {
                "time": 71.24,
                "text": "I can't love you in the dark"
              },
              {
                "time": 79.49,
                "text": "It feels like we're oceans apart"
              },
              {
                "time": 88.64,
                "text": "There is so much space between us"
              },
              {
                "time": 92.71000000000001,
                "text": "Baby, we're already defeated"
              },
              {
                "time": 97.19,
                "text": "Ah-yeah-yeah-yeah-yeah-yeah-yeah-yeah"
              },
              {
                "time": 101.55,
                "text": "Everything changed me"
              },
              {
                "time": 106.92,
                "text": "You have given me something that I can't live without"
              },
              {
                "time": 115.42,
                "text": "You mustn't underestimate that when you are in doubt"
              },
              {
                "time": 124.04,
                "text": "But I don't want to carry on like everything is fine"
              },
              {
                "time": 132.68,
                "text": "The longer we ignore it, all the more that we will fight"
              },
              {
                "time": 140.64,
                "text": "Please, don't fall apart"
              },
              {
                "time": 145.28,
                "text": "I can't face your breaking heart"
              },
              {
                "time": 149.54,
                "text": "I'm trying to be brave"
              },
              {
                "time": 154.04,
                "text": "Stop asking me to stay"
              },
              {
                "time": 158.29,
                "text": "I can't love you in the dark"
              },
              {
                "time": 166.69,
                "text": "It feels like we're oceans apart"
              },
              {
                "time": 175.95,
                "text": "There is so much space between us"
              },
              {
                "time": 180.14,
                "text": "Baby, we're already defeated"
              },
              {
                "time": 184.41,
                "text": "Ah-yeah-yeah-yeah-yeah-yeah-yeah-yeah"
              },
              {
                "time": 188.83,
                "text": "Everything changed me"
              },
              {
                "time": 193.56,
                "text": "We're not the only ones, I don't regret a thing"
              },
              {
                "time": 197.75,
                "text": "Every wordYear of Release: 2015395167"
              }
            ]
          },
          {
            "title": "Enchanted",
            "artist": "Taylor Swift",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Enchanted.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273e1bc852a04501952c765d5cd",
            "lyrics": [
              {
                "time": 13.34,
                "text": "There I was again tonight"
              },
              {
                "time": 16.32,
                "text": "Forcing laughter, faking smiles"
              },
              {
                "time": 19.27,
                "text": "Same old tired, lonely place"
              },
              {
                "time": 24.91,
                "text": "Walls of insincerity"
              },
              {
                "time": 28.03,
                "text": "Shifting eyes and vacancy"
              },
              {
                "time": 30.92,
                "text": "Vanished when I saw your face"
              },
              {
                "time": 34.23,
                "text": "All I can say is it was enchanting to meet you"
              },
              {
                "time": 44.19,
                "text": ""
              },
              {
                "time": 48.31,
                "text": "Your eyes whispered, \"Have we met?\""
              },
              {
                "time": 51.44,
                "text": "Across the room, your silhouette"
              },
              {
                "time": 54.28,
                "text": "Starts to make its way to me"
              },
              {
                "time": 60,
                "text": "The playful conversation starts"
              },
              {
                "time": 63.18,
                "text": "Counter all your quick remarks"
              },
              {
                "time": 65.89,
                "text": "Like passing notes in secrecy"
              },
              {
                "time": 70.85,
                "text": "And it was enchanting to meet you"
              },
              {
                "time": 81.14,
                "text": "All I can say is I was enchanted to meet you"
              },
              {
                "time": 90.98,
                "text": ""
              },
              {
                "time": 95.89,
                "text": "This night is sparkling, don't you let it go"
              },
              {
                "time": 102.03999999999999,
                "text": "I'm wonderstruck, blushing all the way home"
              },
              {
                "time": 107.81,
                "text": "I'll spend forever wondering if you knew"
              },
              {
                "time": 113.28999999999999,
                "text": "I was enchanted to meet you"
              },
              {
                "time": 119.52000000000001,
                "text": ""
              },
              {
                "time": 124.35,
                "text": "The lingering question kept me up"
              },
              {
                "time": 127.42,
                "text": "2 a.m., who do you love?"
              },
              {
                "time": 130.32,
                "text": "I wonder 'til I'm wide awake"
              },
              {
                "time": 136.04,
                "text": "And now I'm pacing back and forth"
              },
              {
                "time": 139.18,
                "text": "Wishing you were at my door"
              },
              {
                "time": 141.94,
                "text": "I'd open up and you would say"
              },
              {
                "time": 146.57999999999998,
                "text": "Hey, it was enchanting to meet you"
              },
              {
                "time": 155.52,
                "text": ""
              },
              {
                "time": 157.54,
                "text": "All I know is I was enchanted to meet you"
              },
              {
                "time": 168.44,
                "text": ""
              },
              {
                "time": 171.94,
                "text": "This night is sparkling, don't you let it go"
              },
              {
                "time": 178.09,
                "text": "I'm wonderstruck, blushing all the way home"
              },
              {
                "time": 184.09,
                "text": "I'll spend forever wondering if you knew..."
              },
              {
                "time": 193.44,
                "text": ""
              },
              {
                "time": 195.65,
                "text": "This night is flawless, don't you let it go"
              },
              {
                "time": 201.54,
                "text": "I'm wonderstruck, dancing around all alone"
              },
              {
                "time": 207.31,
                "text": "I'll spend forever wondering if you knew"
              },
              {
                "time": 213.03,
                "text": "I was enchanted to meet you"
              },
              {
                "time": 219.66,
                "text": ""
              },
              {
                "time": 239.06,
                "text": "This is me praying that"
              },
              {
                "time": 242.15,
                "text": "This was the very first page"
              },
              {
                "time": 245.05,
                "text": "Not where the story line ends"
              },
              {
                "time": 247.9,
                "text": "My thoughts will echo your name"
              },
              {
                "time": 251.06,
                "text": "Until I see you again"
              },
              {
                "time": 253.8,
                "text": "These are the words I held back"
              },
              {
                "time": 256.9,
                "text": "As I was leaving too soon"
              },
              {
                "time": 259.86,
                "text": "I was enchanted to meet you"
              },
              {
                "time": 265.28,
                "text": "Please don't be in1,555955"
              }
            ]
          },
          {
            "title": "18",
            "artist": "One Direction",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/18.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4",
            "lyrics": [
              {
                "time": 14.61,
                "text": "I got a heart, and I got a soul"
              },
              {
                "time": 22.78,
                "text": "Believe me, I will use them both"
              },
              {
                "time": 30,
                "text": "We made a start"
              },
              {
                "time": 33.86,
                "text": "Be it a false one, I know"
              },
              {
                "time": 38.15,
                "text": "Baby, I don't want to feel alone"
              },
              {
                "time": 46.15,
                "text": "So kiss me where I lay down"
              },
              {
                "time": 49.95,
                "text": "My hands pressed to your cheeks"
              },
              {
                "time": 54.08,
                "text": "A long way from the playground"
              },
              {
                "time": 58.32,
                "text": "I have loved you since we were 18"
              },
              {
                "time": 62.87,
                "text": ""
              },
              {
                "time": 66.32,
                "text": "Long before we both thought the same thing"
              },
              {
                "time": 70.93,
                "text": "To be loved and to be in love"
              },
              {
                "time": 74.28,
                "text": "All I can do is say that these arms"
              },
              {
                "time": 78.24,
                "text": "Are made for holding you, oh-oh"
              },
              {
                "time": 82.4,
                "text": "I wanna love like you made me feel"
              },
              {
                "time": 86.82,
                "text": "When we were 18"
              },
              {
                "time": 91.34,
                "text": ""
              },
              {
                "time": 96.03,
                "text": "We took a chance"
              },
              {
                "time": 99.78,
                "text": "God knows we tried"
              },
              {
                "time": 104.07,
                "text": "Yet all along, I knew we'd be fine"
              },
              {
                "time": 111.15,
                "text": "So pour me a drink, oh love"
              },
              {
                "time": 115.09,
                "text": "And let's split the night wide open"
              },
              {
                "time": 119.14,
                "text": "And we'll see everything we can"
              },
              {
                "time": 122.47,
                "text": "Living love in slow motion, motion, motion"
              },
              {
                "time": 127.56,
                "text": "So kiss me where I lay down"
              },
              {
                "time": 131.45,
                "text": "My hands pressed to your cheeks"
              },
              {
                "time": 135.33,
                "text": "A long way from the playground"
              },
              {
                "time": 139.65,
                "text": "I have loved you since we were 18"
              },
              {
                "time": 147.24,
                "text": "Long before we both thought the same thing"
              },
              {
                "time": 152.21,
                "text": "To be loved and to be in love"
              },
              {
                "time": 155.56,
                "text": "And all I can do is say that these arms"
              },
              {
                "time": 159.47,
                "text": "Are made for holding you, oh-oh-oh"
              },
              {
                "time": 163.11,
                "text": "And I wanna love like you made me feel"
              },
              {
                "time": 168.38,
                "text": "When we were 18"
              },
              {
                "time": 172.9,
                "text": ""
              },
              {
                "time": 176.05,
                "text": "When we were 18"
              },
              {
                "time": 181.51,
                "text": "Oh, Lord, when we were 18"
              },
              {
                "time": 185.93,
                "text": "Kiss me where I lay down"
              },
              {
                "time": 189.41,
                "text": "My hands pressed to yourYear of Release: 20142,1261,354"
              }
            ]
          },
          {
            "title": "You Are Enough",
            "artist": "Sleeping At Last",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/You Are Enough.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273e46541278af6c9ba6881cb7e",
            "lyrics": [
              {
                "time": 25.39,
                "text": "When we woke up, the world was figured out"
              },
              {
                "time": 29.41,
                "text": "Beyond the beauty we've dreamt about"
              },
              {
                "time": 33.3,
                "text": "This brilliant light is brighter than we've known"
              },
              {
                "time": 37.33,
                "text": "Without our darkness to prove it so"
              },
              {
                "time": 41.49,
                "text": "Still, we can't help but to examine it"
              },
              {
                "time": 45.36,
                "text": "To add our question marks to periods"
              },
              {
                "time": 49.82,
                "text": "At the foot of our bed, we found an envelope"
              },
              {
                "time": 56.13,
                "text": "You're enough, you're enough, you're enough, you are enough"
              },
              {
                "time": 61.75,
                "text": "These little words, somehow they're changing us"
              },
              {
                "time": 65.8,
                "text": "You're enough, you're enough, you are enough"
              },
              {
                "time": 69.81,
                "text": "So we let our shadows fall away like dust"
              },
              {
                "time": 75.36,
                "text": ""
              },
              {
                "time": 102.44,
                "text": "When we grew up, our shadows grew up too"
              },
              {
                "time": 106.4,
                "text": "But they're just old ghosts that we grow attached to"
              },
              {
                "time": 110.53999999999999,
                "text": "The tragic flaw is that they hide the truth"
              },
              {
                "time": 117.32,
                "text": "That you're enough, you're enough, you're enough"
              },
              {
                "time": 120.67,
                "text": "I promise you're enough, you're enough, you're enough"
              },
              {
                "time": 124.91,
                "text": "I promise you're enough, you're enough, you're enough, I promise you"
              },
              {
                "time": 131.61,
                "text": ""
              },
              {
                "time": 133.63,
                "text": "You're enough, you're enough, you're enough, you areYear of Release: 2013365152"
              }
            ]
          },
          {
            "title": "Iris",
            "artist": "The Goo Goo Dolls",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Iris.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273eda9478c39a21e1cdc6609ca",
            "lyrics": [
              {
                "time": 12,
                "text": "And I'd give up forever to touch you"
              },
              {
                "time": 16.36,
                "text": "'Cause I know that you feel me somehow"
              },
              {
                "time": 21.03,
                "text": "You're the closest to heaven that I'll ever be"
              },
              {
                "time": 25.86,
                "text": "And I don't want to go home right now"
              },
              {
                "time": 30.82,
                "text": "And all I can taste is this moment"
              },
              {
                "time": 35.65,
                "text": "And all I can breathe is your life"
              },
              {
                "time": 40.15,
                "text": "And sooner or later, it's over"
              },
              {
                "time": 44.58,
                "text": "I just don't wanna miss you tonight"
              },
              {
                "time": 49.17,
                "text": "And I don't want the world to see me"
              },
              {
                "time": 53.96,
                "text": "'Cause I don't think that they'd understand"
              },
              {
                "time": 58.87,
                "text": "When everything's made to be broken"
              },
              {
                "time": 63.36,
                "text": "I just want you to know who I am"
              },
              {
                "time": 69.28999999999999,
                "text": ""
              },
              {
                "time": 80.02,
                "text": "And you can't fight the tears that ain't coming"
              },
              {
                "time": 84.21000000000001,
                "text": "Or the moment of truth in your lies"
              },
              {
                "time": 89.45,
                "text": "When everything feels like the movies"
              },
              {
                "time": 93.94,
                "text": "Yeah, you bleed just to know, you're alive"
              },
              {
                "time": 98.78,
                "text": "And I don't want the world to see me"
              },
              {
                "time": 103.25,
                "text": "'Cause I don't think that they'd understand"
              },
              {
                "time": 108.69,
                "text": "When everything's made to be broken"
              },
              {
                "time": 112.72,
                "text": "I just want you to know who I am"
              },
              {
                "time": 118.7,
                "text": ""
              },
              {
                "time": 210.59,
                "text": "And I don't want the world to see me"
              },
              {
                "time": 215.32999999999998,
                "text": "'Cause I don't think that they'd understand"
              },
              {
                "time": 220.28,
                "text": "When everything's made to be broken"
              },
              {
                "time": 224.45,
                "text": "I just wantYear of Release: 1998906114"
              }
            ]
          },
          {
            "title": "Sekuat Hatimu",
            "artist": "Last Child",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Sekuat Hatimu.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273382b1b7f79e2e760b9ac188e",
            "lyrics": [
              {
                "time": 43.36,
                "text": "Ku mohon hentikan air matamu mama"
              },
              {
                "time": 48.88,
                "text": "Bila ternyata harus putus sekolahku"
              },
              {
                "time": 53.76,
                "text": "Dan ku pilih gaya hidup yang tiada"
              },
              {
                "time": 59.55,
                "text": "Pernah indah di matamu"
              },
              {
                "time": 65.13,
                "text": "Tak mampu ku mengampuni diriku mama"
              },
              {
                "time": 71.03999999999999,
                "text": "Bila ku cerna harunya arti DO'amu"
              },
              {
                "time": 76.3,
                "text": "Yang kau panjatkan untukku saat ku bawa diriku"
              },
              {
                "time": 81.98,
                "text": "Semakin dalam ku terjatuh"
              },
              {
                "time": 87.24,
                "text": "Bila ku tak pernah sanggup untuk bangkit dari"
              },
              {
                "time": 92.78999999999999,
                "text": "Kegagalan yang tak seharusnya kau sesali"
              },
              {
                "time": 98.33,
                "text": "Karena kenyataan hidup yang aku jalani"
              },
              {
                "time": 103.78,
                "text": "Tak seindah saat ku dengar engkau bernyanyi"
              },
              {
                "time": 109.21000000000001,
                "text": "Peluklah lelah jiwaku mama"
              },
              {
                "time": 114.25999999999999,
                "text": "Yang terluka dipecundangi dunia"
              },
              {
                "time": 119.45,
                "text": "Hanya kasihmu yang mampu lindungi lemah hatiku"
              },
              {
                "time": 125.76,
                "text": "Yang tak sekuat hati ... mu"
              },
              {
                "time": 134.76,
                "text": ""
              },
              {
                "time": 152.72,
                "text": "Bila ku tak pernah sanggup untuk bangkit dari"
              },
              {
                "time": 157.85,
                "text": "Kegagalan yang tak seharusnya kau sesali"
              },
              {
                "time": 163.63,
                "text": "Karena kenyataan hidup yang aku jalani"
              },
              {
                "time": 168.62,
                "text": "Tak seindah saat ku dengar engkau bernyanyi"
              },
              {
                "time": 174.24,
                "text": "Peluklah lelah jiwaku mama"
              },
              {
                "time": 179.3,
                "text": "Yang terluka dipecundangi dunia"
              },
              {
                "time": 185,
                "text": "Hanya kasihmu yang mampu lindungi lemah hatiku"
              },
              {
                "time": 190.71,
                "text": "Yang tak sekuat hati ... mu"
              },
              {
                "time": 202.02,
                "text": "Peluk hati kecil yang penuh dendam ini"
              },
              {
                "time": 207.23,
                "text": "Ajari tuk menghapusYear of Release: 2012838536"
              }
            ]
          },
          {
            "title": "Rahasia Hati",
            "artist": "Nidji",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Rahasia Hati.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2733d4e60ab546528ace91c22fb",
            "lyrics": [
              {
                "time": 4.36,
                "text": "Ku coba merangkai kata cinta"
              },
              {
                "time": 10.25,
                "text": ""
              },
              {
                "time": 15.1,
                "text": "Walaupun ku bukanlah pujangga yang bisa"
              },
              {
                "time": 22.59,
                "text": "Tuliskan kata-kata yang indah"
              },
              {
                "time": 30.46,
                "text": "Nyatanya tak ada nyali untuk ungkapkan"
              },
              {
                "time": 39.18,
                "text": "I wanna love you like the hurricane"
              },
              {
                "time": 46.47,
                "text": "I wanna love you like a mountain rain"
              },
              {
                "time": 53.32,
                "text": "So wild so pure"
              },
              {
                "time": 56.92,
                "text": "So strong and crazy for you"
              },
              {
                "time": 61.67,
                "text": "Andai matamu melihat aku"
              },
              {
                "time": 69.47,
                "text": "Terungkap semua isi hatiku"
              },
              {
                "time": 77.24,
                "text": "Alam sadarku alam mimpiku"
              },
              {
                "time": 81.47,
                "text": "Semua milikmu andai kau tau"
              },
              {
                "time": 85.21000000000001,
                "text": "Andai kau tau"
              },
              {
                "time": 88.16,
                "text": "Rahasia Cintaku"
              },
              {
                "time": 94.67,
                "text": ""
              },
              {
                "time": 100.28,
                "text": "Berdoa dan beranikan diri"
              },
              {
                "time": 107.75999999999999,
                "text": "Sebelum semua ini terlambat terjadi"
              },
              {
                "time": 116.36,
                "text": "I wanna love you like the hurricane"
              },
              {
                "time": 124.83,
                "text": "I wanna love you like a mountain rain"
              },
              {
                "time": 131.55,
                "text": "So wild so pure"
              },
              {
                "time": 135.01,
                "text": "So strong and crazy for you"
              },
              {
                "time": 139.69,
                "text": "Andai matamu melihat aku"
              },
              {
                "time": 147.04,
                "text": "Terungkap semua isi hatiku"
              },
              {
                "time": 155.19,
                "text": "Alam sadarku alam mimpiku"
              },
              {
                "time": 158.94,
                "text": "SemuaYear of Release: 2013283174"
              }
            ]
          },
          {
            "title": "Right Now",
            "artist": "One Direction",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Right Now.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2732f76b797c382bedcafdf45e1",
            "lyrics": [
              {
                "time": 8.97,
                "text": "Lights go down, and the night is calling to me, yeah"
              },
              {
                "time": 16.85,
                "text": "I hear voices singing songs in the street"
              },
              {
                "time": 23.56,
                "text": "And I know that we won't be going home for so long, for so long"
              },
              {
                "time": 31.3,
                "text": "But I know that I won't be on my own, yeah"
              },
              {
                "time": 38.58,
                "text": "I love this feeling and"
              },
              {
                "time": 40.34,
                "text": "Right now"
              },
              {
                "time": 42.2,
                "text": "I wish you were here with me (Oh-ooh)"
              },
              {
                "time": 47.57,
                "text": "'Cause right now"
              },
              {
                "time": 50.25,
                "text": "Everything is new to me (Oh-ooh)"
              },
              {
                "time": 56.32,
                "text": "You know I can't fight the feeling"
              },
              {
                "time": 60.5,
                "text": "And every night I feel it"
              },
              {
                "time": 64.15,
                "text": "Right now"
              },
              {
                "time": 66.31,
                "text": "I wish you were here with me (Oh-ooh)"
              },
              {
                "time": 72.87,
                "text": "Late night spaces"
              },
              {
                "time": 76.72,
                "text": "With all our friends, you and me, yeah"
              },
              {
                "time": 80.96000000000001,
                "text": "Love these faces"
              },
              {
                "time": 84.99,
                "text": "Just like how it used to be"
              },
              {
                "time": 89.39,
                "text": "And we won't be going home"
              },
              {
                "time": 93.58,
                "text": "For so long, for so long"
              },
              {
                "time": 95.4,
                "text": "But I know, I won't be on my own"
              },
              {
                "time": 101.53,
                "text": "On my own, I'm feeling like"
              },
              {
                "time": 104.12,
                "text": "Right now"
              },
              {
                "time": 106.21000000000001,
                "text": "I wish you were here with me (Oh-ooh)"
              },
              {
                "time": 111.78,
                "text": "'Cause right now"
              },
              {
                "time": 114.1,
                "text": "Everything is new to me (Oh-ooh)"
              },
              {
                "time": 120.35,
                "text": "You know I can't fight the feeling"
              },
              {
                "time": 124.55,
                "text": "And every night I feel it"
              },
              {
                "time": 128.16,
                "text": "Right now"
              },
              {
                "time": 130.15,
                "text": "I wish you were here with me (Oh-ooh)"
              },
              {
                "time": 136.57999999999998,
                "text": "And IYear of Release: 2013873588"
              }
            ]
          },
          {
            "title": "Diary Depresiku",
            "artist": "Last Child",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Diary Depresiku.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273c6954b8d6cb1637075223bcc",
            "lyrics": [
              {
                "time": 24.58,
                "text": "Malam ini, hujan turun lagi"
              },
              {
                "time": 31.91,
                "text": "Bersama kenangan yang ungkit luka di hati"
              },
              {
                "time": 39.44,
                "text": "Luka yang harusnya dapat terobati"
              },
              {
                "time": 46.42,
                "text": "Yang kuharap tiada pernah terjadi"
              },
              {
                "time": 53.61,
                "text": "Ku ingat saat ayah pergi, dan kami mulai kelaparan"
              },
              {
                "time": 60.46,
                "text": "Hal yang biasa buat aku hidup di jalanan"
              },
              {
                "time": 67.66,
                "text": "Di saat ku belum mengerti arti sebuah perceraian"
              },
              {
                "time": 75.25,
                "text": "Yang hancurkan semua hal indah yang dulu pernah aku miliki"
              },
              {
                "time": 85.61,
                "text": "Wajar bila saat ini ku iri pada kalian"
              },
              {
                "time": 92.37,
                "text": "Yang hidup bahagia berkat suasana indah dalam rumah"
              },
              {
                "time": 99.92,
                "text": "Hal yang selalu aku bandingkan dengan hidupku yang kelam"
              },
              {
                "time": 107.28999999999999,
                "text": "Tiada harga diri agar hidupku terus bertahan"
              },
              {
                "time": 114.78,
                "text": ""
              },
              {
                "time": 127.23,
                "text": "Mungkin sejenak dapat aku lupakan"
              },
              {
                "time": 133.62,
                "text": "Dengan minuman keras yang saat ini kugenggam"
              },
              {
                "time": 141.27,
                "text": "Atau menggoreskan kaca di lenganku"
              },
              {
                "time": 147.59,
                "text": "Apa pun 'kan kulakukan, ku ingin lupakan"
              },
              {
                "time": 155.2,
                "text": "Namun, bila ku mulai sadar dari sisa mabuk semalam"
              },
              {
                "time": 162.31,
                "text": "Perihnya luka ini s'makin dalam kurasakan"
              },
              {
                "time": 169.62,
                "text": "Di saat ku telah mengerti betapa indah dicintai"
              },
              {
                "time": 177.22,
                "text": "Hal yang tak pernah kudapatkan sejak aku hidup di jalanan"
              },
              {
                "time": 187.4,
                "text": "Wajar bila saat ini ku iri pada kalian"
              },
              {
                "time": 194.79,
                "text": "Yang hidup bahagia berkat suasana indah dalam rumah"
              },
              {
                "time": 201.56,
                "text": "Hal yang selalu aku890498"
              }
            ]
          },
          {
            "title": "Duka",
            "artist": "Last Child",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Duka.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2733e19058e3db31816a65baf39",
            "lyrics": [
              {
                "time": 21.94,
                "text": "Kau membunuhku dengan kepedihan ini"
              },
              {
                "time": 28.96,
                "text": "Kau hempaskanku ke dalam retaknya hati"
              },
              {
                "time": 36.27,
                "text": "Hingga air mata tak mampu 'tuk melukiskan perih"
              },
              {
                "time": 43.39,
                "text": "Yang kau ukir dalam hati ini"
              },
              {
                "time": 54.08,
                "text": "Kau hancurkan diriku saat engkau pergi"
              },
              {
                "time": 60.92,
                "text": "Setelah kau patahkan sayap ini"
              },
              {
                "time": 68.22,
                "text": "Hingga ku takkan bisa 'tuk terbang tinggi lagi"
              },
              {
                "time": 75.08,
                "text": "Dan mencari bintang yang dapat menggantikanmu"
              },
              {
                "time": 82.28,
                "text": "Sampai kini masih kucoba"
              },
              {
                "time": 85.9,
                "text": "'Tuk terjaga dari mimpiku"
              },
              {
                "time": 89.5,
                "text": "Yang buatku tak sadar bahwa kau bukan lagi milikku"
              },
              {
                "time": 96.46000000000001,
                "text": "Walau hati tak akan pernah"
              },
              {
                "time": 100.13,
                "text": "Dapat melupakan dirimu"
              },
              {
                "time": 103.66,
                "text": "Dan tiap tetes air mata yang jatuh, kuatkan rinduku"
              },
              {
                "time": 111.02000000000001,
                "text": "Pada indah bayangmu, canda tawamu"
              },
              {
                "time": 117.85,
                "text": "Pada indahnya duka dalam kenangan kita"
              },
              {
                "time": 131.32,
                "text": ""
              },
              {
                "time": 136.39,
                "text": ""
              },
              {
                "time": 139.35,
                "text": "Kau hancurkan diriku saat engkau pergi"
              },
              {
                "time": 146.38,
                "text": "Setelah kau patahkan sayap ini"
              },
              {
                "time": 153.47,
                "text": "Hingga ku takkan bisa 'tuk terbang tinggi lagi"
              },
              {
                "time": 160.66,
                "text": "Dan mencari bintang yang dapat menggantikanmu"
              },
              {
                "time": 167.77,
                "text": "Sampai kini masih kucoba (masih kucoba)"
              },
              {
                "time": 171.46,
                "text": "'Tuk terjaga dari mimpiku"
              },
              {
                "time": 174.82,
                "text": "Yang buatku tak sadar bahwa kau bukan lagi milikku"
              },
              {
                "time": 181.91,
                "text": "Walau hati tak akan pernah (tak akan pernah)"
              },
              {
                "time": 185.55,
                "text": "Dapat melupakan dirimu"
              },
              {
                "time": 188.94,
                "text": "Dan tiap tetes air mata yang jatuh, kuatkan rinduku"
              },
              {
                "time": 196.98,
                "text": "Pada indah bayangmu, candaYear of Release: 20162,0031,381"
              }
            ]
          },
          {
            "title": "Keras Kepala",
            "artist": "Meiska",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Keras Kepala.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273781bc09c9a335b823a8cf707",
            "lyrics": [
              {
                "time": 19.69,
                "text": "Mengapa terulang lagi kisah yang sama?"
              },
              {
                "time": 27.54,
                "text": "Jatuh di salah yang sama"
              },
              {
                "time": 35.59,
                "text": "S'lalu jatuh cinta padanya yang tak cinta"
              },
              {
                "time": 43.78,
                "text": "Namun, mengapa kupaksa?"
              },
              {
                "time": 50.88,
                "text": "Apa ini cinta atau hanya sekedar bayang?"
              },
              {
                "time": 58.89,
                "text": "Apa rasa ini hanya sementara saja?"
              },
              {
                "time": 69.91,
                "text": "Ku harus sadar diri, tak harusnya begini"
              },
              {
                "time": 78.63,
                "text": "Masih keras kepala aku mencintai"
              },
              {
                "time": 86.18,
                "text": "Saat kau t'lah bilang kita tak akan panjang"
              },
              {
                "time": 94.67,
                "text": "Harusnya dari dulu ku hilang (kerasnya kepalaku)"
              },
              {
                "time": 104.17,
                "text": "Ku pernah menjadi yang paling jatuh hati"
              },
              {
                "time": 111.71000000000001,
                "text": "Tak pantaskah ku dicintai? (Apa ini cinta?)"
              },
              {
                "time": 119.25,
                "text": "Apa ini cinta atau hanya sekedar bayang?"
              },
              {
                "time": 127.32,
                "text": "Apa rasa ini hanya sementara saja?"
              },
              {
                "time": 138.57,
                "text": "Ku harus sadar diri, tak harusnya begini"
              },
              {
                "time": 147.02,
                "text": "Masih keras kepala aku mencintai"
              },
              {
                "time": 154.76,
                "text": "Saat kau t'lah bilang kita tak akan panjang"
              },
              {
                "time": 163.19,
                "text": "Harusnya dari dulu ku hilang, wo-wo-woh"
              },
              {
                "time": 172.74,
                "text": "Aku pernah menjadi yang paling keras jatuh hati"
              },
              {
                "time": 180.8,
                "text": "Perjuangkan cinta tanpa henti"
              },
              {
                "time": 186.95,
                "text": "Namun, tak semua yang kuingini"
              },
              {
                "time": 193.56,
                "text": "Bisa kumiliki meski patah hati"
              },
              {
                "time": 208.11,
                "text": "Ku harus sadar diri, tak harusnya10938"
              }
            ]
          },
          {
            "title": "Bertaut",
            "artist": "Nadin Amizah",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Bertaut.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2732af8d850fa9388950b9320e7",
            "lyrics": [
              {
                "time": 21.38,
                "text": "Bun, hidup berjalan seperti bajingan"
              },
              {
                "time": 29.45,
                "text": ""
              },
              {
                "time": 31.8,
                "text": "Seperti landak yang tak punya teman"
              },
              {
                "time": 39.43,
                "text": ""
              },
              {
                "time": 42.44,
                "text": "Ia menggonggong bak suara hujan"
              },
              {
                "time": 52.5,
                "text": "Dan kau pangeranku, mengambil peran"
              },
              {
                "time": 60.55,
                "text": ""
              },
              {
                "time": 64.07,
                "text": "Bun, kalau saat hancur ku disayang"
              },
              {
                "time": 72.14,
                "text": ""
              },
              {
                "time": 74.27,
                "text": "Apalagi saat ku jadi juara"
              },
              {
                "time": 85.07,
                "text": "Saat tak tahu arah kau di sana"
              },
              {
                "time": 95.87,
                "text": "Menjadi gagah saat ku tak bisa"
              },
              {
                "time": 106.03,
                "text": "Sedikit kujelaskan tentangku dan kamu"
              },
              {
                "time": 111.6,
                "text": "Agar seisi dunia tahu"
              },
              {
                "time": 117.13,
                "text": "Keras kepalaku sama denganmu"
              },
              {
                "time": 122.3,
                "text": "Caraku marah, caraku tersenyum"
              },
              {
                "time": 127.72,
                "text": "Seperti detak jantung yang bertaut"
              },
              {
                "time": 133.03,
                "text": "Nyawaku nyala karena denganmu"
              },
              {
                "time": 138.35,
                "text": "Aku masih ada sampai di sini"
              },
              {
                "time": 143.75,
                "text": "Melihatmu kuat setengah mati"
              },
              {
                "time": 149.11,
                "text": "Seperti detak jantung yang bertaut"
              },
              {
                "time": 154.36,
                "text": "Nyawaku nyala karena denganmu"
              },
              {
                "time": 159.96,
                "text": ""
              },
              {
                "time": 170.78,
                "text": "Bun, aku masih tak mengerti banyak hal"
              },
              {
                "time": 179.13,
                "text": ""
              },
              {
                "time": 181.16,
                "text": "Semuanya berenang di kepala"
              },
              {
                "time": 188.29,
                "text": ""
              },
              {
                "time": 191.69,
                "text": "Dan kau dan semua yang kau tahu tentangnya"
              },
              {
                "time": 202.57,
                "text": "Menjadi jawab saat ku bertanya"
              },
              {
                "time": 212.75,
                "text": "Sedikit kujelaskan tentangku dan kamu"
              },
              {
                "time": 218.48,
                "text": "Agar seisi dunia tahu"
              },
              {
                "time": 223.74,
                "text": "Keras kepalaku sama denganmu"
              },
              {
                "time": 228.92000000000002,
                "text": "Caraku marah,Year of Release: 20204,5343,613"
              }
            ]
          },
          {
            "title": "Mati-Matian",
            "artist": "Mahalini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Mati-Matian.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273a053b3768be58a7117cc322b",
            "lyrics": [
              {
                "time": 19.35,
                "text": "Kita adalah dua insan penuh cinta"
              },
              {
                "time": 28.51,
                "text": "Di awal tercipta kisah kita"
              },
              {
                "time": 35.93,
                "text": "Manis tuturmu buatku terpana"
              },
              {
                "time": 46.53,
                "text": "Bagiku kau sempurna"
              },
              {
                "time": 52.75,
                "text": "Memang benar semua kata mereka"
              },
              {
                "time": 62.53,
                "text": "Benar ku t'lah dibutakan cinta"
              },
              {
                "time": 69.16,
                "text": "Tak hanya sekali kau khianati"
              },
              {
                "time": 77.11,
                "text": "Sudah, cukup ku tak tahan lagi"
              },
              {
                "time": 89.6,
                "text": "Mati-matian ku membelamu di depan mereka"
              },
              {
                "time": 97.86,
                "text": "Walau sakit, tetap kupercaya kau beda dari lainnya"
              },
              {
                "time": 106.38,
                "text": "Habis-habisan ku dibohongi, sayang ini tetap sama"
              },
              {
                "time": 114.9,
                "text": "Tuhan, ini cinta atau bodoh?"
              },
              {
                "time": 120.25,
                "text": "Habis pikir dengan sifatmu itu"
              },
              {
                "time": 126.55,
                "text": "Berulang kali kumaafkan"
              },
              {
                "time": 130.54,
                "text": "Berulang lagi kaulakukan"
              },
              {
                "time": 136.94,
                "text": "Satu-satunya kebanggaanku"
              },
              {
                "time": 143.54,
                "text": "Kini jadi rasa sakit terdalam"
              },
              {
                "time": 151.79,
                "text": "Mati-matian ku membelamu di depan mereka"
              },
              {
                "time": 158.95,
                "text": "Mati-matian ku membelamu di depan mereka"
              },
              {
                "time": 167.92000000000002,
                "text": "Walau sakit, tetap kupercaya kau beda dari lainnya"
              },
              {
                "time": 176.17000000000002,
                "text": "Habis-habisan ku dibohongi, sayang ini tetap sama"
              },
              {
                "time": 184.93,
                "text": "Tuhan,6618"
              }
            ]
          },
          {
            "title": "Masing Masing",
            "artist": "Ernie Zakri & Ade Govinda",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Masing Masing.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273b2854c3503911cc7625992e2",
            "lyrics": [
              {
                "time": 1.05,
                "text": "Tapi aku letih juga"
              },
              {
                "time": 8.15,
                "text": "Lebih baik kita masing-masing"
              },
              {
                "time": 16.75,
                "text": "Pernah sesayang itu, pernah"
              },
              {
                "time": 23.88,
                "text": "Pernah secinta itu, pernah"
              },
              {
                "time": 31.12,
                "text": "Pernah sedalam itu, tapi itu dulu"
              },
              {
                "time": 39.82,
                "text": "Sebelum ada hati lain"
              },
              {
                "time": 47.13,
                "text": "Pernah berjuang, itu pernah"
              },
              {
                "time": 54.28,
                "text": "Pernah terjatuh, juga pernah"
              },
              {
                "time": 61.33,
                "text": "Pernah bersama kita, tapi itu dulu"
              },
              {
                "time": 68.6,
                "text": "Pada akhirnya pisah juga"
              },
              {
                "time": 75.02,
                "text": "Aku tak kauanggap ada cerita"
              },
              {
                "time": 81.93,
                "text": "Aku tak kauanggap ada derita"
              },
              {
                "time": 89.18,
                "text": "Tapi kamu berlaku bagai pemilik ragaku"
              },
              {
                "time": 95.97,
                "text": "Tapi aku letih juga"
              },
              {
                "time": 102.95,
                "text": "Lebih baik kita masing-masing"
              },
              {
                "time": 115.28999999999999,
                "text": "Pernah sesakit ini, pernah"
              },
              {
                "time": 122.33,
                "text": "Tapi kamu yang paling sakit"
              },
              {
                "time": 129.57,
                "text": "Walau rasaku ini sakit tak berdarah"
              },
              {
                "time": 136.76,
                "text": "Apa rasanya jadi aku?"
              },
              {
                "time": 142.95,
                "text": "Aku tak kauanggap ada cerita"
              },
              {
                "time": 150.13,
                "text": "Aku tak kauanggap ada derita"
              },
              {
                "time": 157.26,
                "text": "Tapi kamu berlaku bagai274181"
              }
            ]
          },
          {
            "title": "Bawa Dia Kembali",
            "artist": "Mahalini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Bawa Dia Kembali.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736f713eb92ebf7ca05a562542",
            "lyrics": [
              {
                "time": 6.88,
                "text": "Malam ini, aku menanti"
              },
              {
                "time": 13.62,
                "text": "Kedatanganmu, mengisi sepiku"
              },
              {
                "time": 20.72,
                "text": "Lama terasa waktu bergulir"
              },
              {
                "time": 27.65,
                "text": "Kar'na dirimu tak bersamaku"
              },
              {
                "time": 37.75,
                "text": "Oh, Tuhan, tolonglah, bawa dia kembali"
              },
              {
                "time": 44.31,
                "text": "Bersamaku di sini, menjagaku selalu"
              },
              {
                "time": 51.95,
                "text": "Dengarlah doaku yang tak pernah meminta"
              },
              {
                "time": 58.68,
                "text": "Bawa dia kembali bersama walau hanya sesaat"
              },
              {
                "time": 68.77,
                "text": ""
              },
              {
                "time": 73.94,
                "text": "Masih terasa hembus nafasmu"
              },
              {
                "time": 80.47,
                "text": "Saat ku gundah, kaulipur laraku"
              },
              {
                "time": 88.05,
                "text": "Kini terasa semakin dalam"
              },
              {
                "time": 94.8,
                "text": "Rasa rinduku pada dirimu"
              },
              {
                "time": 101.22,
                "text": "Oh, Tuhan, tolonglah, bawa dia kembali"
              },
              {
                "time": 108.06,
                "text": "Bersamaku di sini, menjagaku selalu"
              },
              {
                "time": 115.47,
                "text": "Dengarlah doaku yang tak pernah meminta"
              },
              {
                "time": 122.05,
                "text": "Bawa dia kembali bersama walau hanya sesaat, yeah-yeah-hey"
              },
              {
                "time": 137.46,
                "text": "Tuhan, tolong, dengar doaku"
              },
              {
                "time": 140.71,
                "text": "Bawa dia kembali padaku (kembali padaku) oh-uh"
              },
              {
                "time": 150.78,
                "text": "Oh, Tuhan, tolonglah, bawa dia kembali"
              },
              {
                "time": 157.32999999999998,
                "text": "Bersamaku di sini menjagaku selalu"
              },
              {
                "time": 164.6,
                "text": "Dengarlah doaku yang tak pernah meminta"
              },
              {
                "time": 171.47,
                "text": "(Bawa diaYear of Release: 20161,050591"
              }
            ]
          },
          {
            "title": "Aku Yang Jatuh Cinta",
            "artist": "Dudy Oris",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Aku Yang Jatuh Cinta.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736dabfe1ad020adcd7b6c2108",
            "lyrics": [
              {
                "time": 12.96,
                "text": "Bukan 'ku tanpa alasan"
              },
              {
                "time": 18.38,
                "text": "Berulang ingin bertemu"
              },
              {
                "time": 24.06,
                "text": "Aku punya perasaan"
              },
              {
                "time": 29.49,
                "text": "Nampaknya kau tak mengerti"
              },
              {
                "time": 35.47,
                "text": "Tahukah dirimu?"
              },
              {
                "time": 38.85,
                "text": "Tahukah hatimu?"
              },
              {
                "time": 41.38,
                "text": "Berulang kuketuk"
              },
              {
                "time": 43.94,
                "text": "Aku mencintamu"
              },
              {
                "time": 47.22,
                "text": "Tapi dirimu tak pernah sadari"
              },
              {
                "time": 52.32,
                "text": "Aku yang jatuh cinta"
              },
              {
                "time": 61.44,
                "text": ""
              },
              {
                "time": 64.68,
                "text": "Aku selalu menemani"
              },
              {
                "time": 69.47,
                "text": "Saat kau rapuh dan jatuh"
              },
              {
                "time": 74.95,
                "text": "Namun saat kau bahagia"
              },
              {
                "time": 80.16,
                "text": "Nampaknya 'ku terlupakan"
              },
              {
                "time": 85.75,
                "text": "Tahukah dirimu?"
              },
              {
                "time": 88.94,
                "text": "Tahukah hatimu?"
              },
              {
                "time": 91.5,
                "text": "Berulang kuketuk"
              },
              {
                "time": 94.36,
                "text": "Aku mencintamu"
              },
              {
                "time": 97.61,
                "text": "Tapi dirimu tak pernah sadari"
              },
              {
                "time": 102.67,
                "text": "Aku yang jatuh cinta"
              },
              {
                "time": 111.63,
                "text": "(Haruskah kau kuberi kesempatan?)"
              },
              {
                "time": 116.88,
                "text": "Ingin aku jadi kekasih yang baik"
              },
              {
                "time": 122.11,
                "text": "Berikan aku kesempatan"
              },
              {
                "time": 127.26,
                "text": ""
              },
              {
                "time": 130.95,
                "text": "Tahukah dirimu?"
              },
              {
                "time": 134.02,
                "text": "TahukahYear of Release: 2021498282"
              }
            ]
          },
          {
            "title": "Kisah Tanpa Dirimu",
            "artist": "Anggis Devaki",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Kisah Tanpa Dirimu.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273876476b0244c1943097100ff",
            "lyrics": [
              {
                "time": 8.72,
                "text": "Ah"
              },
              {
                "time": 17.42,
                "text": "Dari caramu bicara, telah buatku percaya"
              },
              {
                "time": 25.24,
                "text": "Bahwa cinta itu ada, ku pantas 'tuk dapatkannya"
              },
              {
                "time": 33.08,
                "text": "Namun kini t'lah berbeda, kau bukan orang yang sama"
              },
              {
                "time": 40.94,
                "text": "Ku besar hati mencoba, hapuskan pilu yang ada"
              },
              {
                "time": 48.88,
                "text": "Hancurnya aku"
              },
              {
                "time": 56.04,
                "text": "Ternyata kau tak cinta"
              },
              {
                "time": 62.47,
                "text": ""
              },
              {
                "time": 67.75,
                "text": "Kau tinggalkan aku"
              },
              {
                "time": 71.5,
                "text": "Teganya hatimu"
              },
              {
                "time": 75.39,
                "text": "Kau lupakan aku"
              },
              {
                "time": 78.85,
                "text": "Seolah ku tak pernah ada di hatimu"
              },
              {
                "time": 85.84,
                "text": "Akankah ku mampu?"
              },
              {
                "time": 89.81,
                "text": "Menjalani kisah tanpa dirimu"
              },
              {
                "time": 98.33,
                "text": "Namun kini kau t'lah berbeda (berbeda)"
              },
              {
                "time": 103.66,
                "text": "Kau bukan orang yang sama"
              },
              {
                "time": 106.55,
                "text": "Ku besar hati mencoba (mencoba)"
              },
              {
                "time": 111.55,
                "text": "Hapuskan pilu yang ada"
              },
              {
                "time": 114.7,
                "text": "Hancur, hancurnya aku"
              },
              {
                "time": 122.96,
                "text": "Ternyata, kau tak cinta"
              },
              {
                "time": 130,
                "text": "Kau tinggalkan aku (tinggalkan aku)"
              },
              {
                "time": 134.59,
                "text": "Teganya hatimu (oh teganya)"
              },
              {
                "time": 138.36,
                "text": "Kau lupakan aku"
              },
              {
                "time": 141.38,
                "text": "Seolah ku tak pernah ada di hatimu"
              },
              {
                "time": 148.27,
                "text": "Akankah ku mampu?"
              },
              {
                "time": 151.92000000000002,
                "text": "Menjalani kisah tanpa dirimu"
              },
              {
                "time": 160.82,
                "text": "Semua yang t'lah ku jalani"
              },
              {
                "time": 167.57,
                "text": "Kini tak berarti"
              },
              {
                "time": 171.46,
                "text": "Kau sia-siakanYear of Release: 202413783"
              }
            ]
          },
          {
            "title": "Dia Masa Lalumu, Aku Masa Depanmu",
            "artist": "Vionita",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Dia Masa Lalumu, Aku Masa Depanmu.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27374384f1bbafdb90349d13f76",
            "lyrics": [
              {
                "time": 19.94,
                "text": "Aku tak tahu harus gimana lagi"
              },
              {
                "time": 23.8,
                "text": "Untuk mencoba buatmu senyum lagi"
              },
              {
                "time": 27.74,
                "text": "Semuanya kucoba"
              },
              {
                "time": 31.52,
                "text": "Tapi tetap tak bisa"
              },
              {
                "time": 35.37,
                "text": "Aku tahu dia hancurkan hatimu"
              },
              {
                "time": 39.11,
                "text": "Dan membuatmu tak bisa utuh lagi"
              },
              {
                "time": 42.93,
                "text": "Tapi aku berbeda"
              },
              {
                "time": 46.62,
                "text": "Beriku kesempatan"
              },
              {
                "time": 49.73,
                "text": "Tetapi sabarku juga ada batasnya"
              },
              {
                "time": 57.21,
                "text": "Sebaiknya ku bisa menyerah juga"
              },
              {
                "time": 64.74,
                "text": "Dia masa lalumu"
              },
              {
                "time": 68.78999999999999,
                "text": "Aku masa depanmu"
              },
              {
                "time": 72.5,
                "text": "Dia hancurkan kamu"
              },
              {
                "time": 76.28,
                "text": "Kususun kembali hatimu"
              },
              {
                "time": 80.08,
                "text": "Tapi mengapa kamu"
              },
              {
                "time": 84.35,
                "text": "Masih terpenjara bayangnya?"
              },
              {
                "time": 88.24,
                "text": "Aku sungguh cinta"
              },
              {
                "time": 92.09,
                "text": "Tapi mungkin kamu yang bodoh"
              },
              {
                "time": 101.84,
                "text": "Ho-oh"
              },
              {
                "time": 103.81,
                "text": "Aku tahu dia hancurkan hatimu"
              },
              {
                "time": 107.69,
                "text": "Dan membuatmu tak bisa utuh lagi"
              },
              {
                "time": 111.45,
                "text": "Tapi aku berbeda"
              },
              {
                "time": 115.22,
                "text": "Beriku kesempatan"
              },
              {
                "time": 118.32,
                "text": "Tetapi sabarku juga ada batasnya"
              },
              {
                "time": 126.04,
                "text": "Sebaiknya aku bisa menyerah juga"
              },
              {
                "time": 133.39,
                "text": "Dia masa lalumu"
              },
              {
                "time": 137.04,
                "text": "Aku masa depanmu"
              },
              {
                "time": 140.88,
                "text": "Dia hancurkan kamu"
              },
              {
                "time": 144.74,
                "text": "Kususun kembali hatimu"
              },
              {
                "time": 148.64,
                "text": "Tapi mengapa kamu"
              },
              {
                "time": 152.99,
                "text": "Masih terpenjara bayangnya?"
              },
              {
                "time": 157,
                "text": "Aku sungguhYear of Release: 20214812"
              }
            ]
          },
          {
            "title": "Janji Setia",
            "artist": "Tiara Andini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Janji Setia.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273937d621f0025409ee44285d1",
            "lyrics": [
              {
                "time": 15.81,
                "text": "Kini aku mengerti, semua ini terjadi"
              },
              {
                "time": 23.33,
                "text": "Tak dipungkiri, hanya kamu yang kumiliki"
              },
              {
                "time": 31.07,
                "text": "Bumi di kala sunyi, kamu takkan sendiri"
              },
              {
                "time": 38.45,
                "text": "Aku di sini menantimu kembali"
              },
              {
                "time": 46.12,
                "text": "Andai saja ku bisa"
              },
              {
                "time": 50.22,
                "text": "Genggam tanganmu"
              },
              {
                "time": 53.38,
                "text": "Takkan ada kata rindu"
              },
              {
                "time": 57.59,
                "text": "Di dalam hatiku"
              },
              {
                "time": 63.7,
                "text": "Tahukah dirimu betapa diriku"
              },
              {
                "time": 72.13,
                "text": "Merindukan hadirmu ada di sini?"
              },
              {
                "time": 78.76,
                "text": "Percayalah, Kasih"
              },
              {
                "time": 83.86,
                "text": "Jarak dan waktu tak mampu menghapus"
              },
              {
                "time": 90.89,
                "text": "Janji setia menjaga hati"
              },
              {
                "time": 98.42,
                "text": "(Hu-uh-uh)"
              },
              {
                "time": 102.47999999999999,
                "text": "Andai saja ku bisa"
              },
              {
                "time": 106.47999999999999,
                "text": "Genggam tanganmu"
              },
              {
                "time": 109.75999999999999,
                "text": "Takkan ada kata rindu"
              },
              {
                "time": 113.63,
                "text": "Di dalam hatiku, oh-oh"
              },
              {
                "time": 119.93,
                "text": "Tahukah dirimu betapa diriku"
              },
              {
                "time": 128.24,
                "text": "Merindukan hadirmu ada di sini?"
              },
              {
                "time": 135.07,
                "text": "Percayalah, Kasih"
              },
              {
                "time": 140.25,
                "text": "Jarak dan waktu tak mampu menghapus (janganlah kauhapus)"
              },
              {
                "time": 147.3,
                "text": "Janji setia menjaga hati"
              },
              {
                "time": 153.07999999999998,
                "text": "Hujan turun mewakili hati"
              },
              {
                "time": 160.53,
                "text": "Terpa angin gambarkan resahku, ho-oh"
              },
              {
                "time": 167.96,
                "text": "Namun, kini pelangi (dan kini pelangi)"
              },
              {
                "time": 175.4,
                "text": "Datang menyinari kita"
              },
              {
                "time": 179.97,
                "text": "(Tahukah dirimuYear of Release: 2021335"
              }
            ]
          },
          {
            "title": "Tanpa Cinta",
            "artist": "Yovie & Nuno",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Tanpa Cinta.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2730b43cd27d3f8ab7e3b9069a8",
            "lyrics": [
              {
                "time": 15.83,
                "text": "Aku mencintaimu tanpa syarat"
              },
              {
                "time": 23.06,
                "text": "Aku rela menunggu sangat lama"
              },
              {
                "time": 29.95,
                "text": "Katamu suatu saat aku pasti"
              },
              {
                "time": 36.16,
                "text": "Jadi cintamu, satu cintamu"
              },
              {
                "time": 45,
                "text": "Aku ingin kau menerima seluruh hatiku"
              },
              {
                "time": 53.86,
                "text": "Aku ingin kau mengerti, di jiwaku hanya kamu"
              },
              {
                "time": 60.8,
                "text": "Namun bila kau tak bisa menerima aku"
              },
              {
                "time": 67.89,
                "text": "Lebih baik ku hidup tanpa cinta"
              },
              {
                "time": 74.26,
                "text": ""
              },
              {
                "time": 79.26,
                "text": "Haruskah ku bersabar tanpa batas"
              },
              {
                "time": 86.48,
                "text": "Aku masih ingat semua janjimu"
              },
              {
                "time": 93.37,
                "text": "Namun setalah kamu mengenal dia"
              },
              {
                "time": 99.92,
                "text": "Kau berubah, kau tak sama"
              },
              {
                "time": 108.72,
                "text": "Aku ingin kau menerima seluruh hatiku"
              },
              {
                "time": 117.37,
                "text": "Aku ingin kau mengerti, di jiwaku hanya kamu"
              },
              {
                "time": 124.46,
                "text": "Namun bila kau tak bisa menerima aku"
              },
              {
                "time": 131.45,
                "text": "Lebih baik ku hidup tanpa cinta"
              },
              {
                "time": 140.36,
                "text": "Bodohkah diriku yang teralu setia padamu"
              },
              {
                "time": 154.51,
                "text": "Disaat kau tak sungguh sungguh"
              },
              {
                "time": 159.96,
                "text": "Mencintai aku (mencintai aku)"
              },
              {
                "time": 163.68,
                "text": "Menginginkan aku (menginginkan aku)"
              },
              {
                "time": 168.06,
                "text": "Ohh"
              },
              {
                "time": 169.55,
                "text": "(Aku ingin kau menerima seluruh hatiku)"
              },
              {
                "time": 172.32999999999998,
                "text": ""
              },
              {
                "time": 177.63,
                "text": "(Aku ingin kau mengerti, di jiwaku hanya kamu)"
              },
              {
                "time": 184.74,
                "text": "Namun bilaYear of Release: 2014459267"
              }
            ]
          },
          {
            "title": "Tanpa Pesan Terakhir",
            "artist": "Seventeen",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Tanpa Pesan Terakhir.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273687ee7cccc410bb76f8bad42",
            "lyrics": [
              {
                "time": 19.07,
                "text": "Hidup terlalu singkat untuk cerita"
              },
              {
                "time": 28.31,
                "text": "Tentang kau dan aku"
              },
              {
                "time": 32.76,
                "text": "Kau pergi tanpa pesan terakhir dariku"
              },
              {
                "time": 42.58,
                "text": "Yang menyertaimu"
              },
              {
                "time": 46.79,
                "text": "Kau s'lalu kukenang"
              },
              {
                "time": 54.47,
                "text": "Saat"
              },
              {
                "time": 59.7,
                "text": "Kaulangkahkan kakimu 'tuk tinggalkanku"
              },
              {
                "time": 67.93,
                "text": "Dan kau pergi jauh"
              },
              {
                "time": 71.41,
                "text": "Untuk selamanya"
              },
              {
                "time": 75.61,
                "text": "Hingga"
              },
              {
                "time": 81.08,
                "text": "Bayangmu pun tak mampu kulihat lagi"
              },
              {
                "time": 89.1,
                "text": "Kini kau t'lah pergi jauh"
              },
              {
                "time": 93.45,
                "text": "Untuk selamanya"
              },
              {
                "time": 100.85,
                "text": "Ada yang hilang dalam hari-hariku"
              },
              {
                "time": 110.15,
                "text": "Saat tak bersamamu"
              },
              {
                "time": 114.35,
                "text": "Kau s'lalu kukenang"
              },
              {
                "time": 121.58,
                "text": "Dan s'lalu kukenang, wo-oh"
              },
              {
                "time": 128.92,
                "text": "Saat"
              },
              {
                "time": 134.52,
                "text": "Kaulangkahkan kakimu 'tuk tinggalkanku"
              },
              {
                "time": 142.53,
                "text": "Dan kau pergi jauh"
              },
              {
                "time": 146.07999999999998,
                "text": "Untuk selamanya"
              },
              {
                "time": 150.53,
                "text": "Hingga"
              },
              {
                "time": 155.9,
                "text": "Bayangmu pun tak mampu kulihat lagi"
              },
              {
                "time": 163.82,
                "text": "Kini kau t'lah pergi jauh"
              },
              {
                "time": 167.93,
                "text": "Untuk selamanya, oh-oh, oh-oh-oh"
              },
              {
                "time": 178.07999999999998,
                "text": ""
              },
              {
                "time": 203.78,
                "text": "Saat"
              },
              {
                "time": 209.37,
                "text": "Kaulangkahkan kakimuYear of Release: 20101,284349"
              }
            ]
          },
          {
            "title": "Pesan Terakhir",
            "artist": "Lyodra",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Pesan Terakhir.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273d00e5994b61f1d93dafe9221",
            "lyrics": [
              {
                "time": 17.03,
                "text": "T'lah kucoba t'rus bertahan"
              },
              {
                "time": 25.27,
                "text": "Tentang cinta yang kurasa"
              },
              {
                "time": 33.27,
                "text": "Ku mencinta, kau tak cinta"
              },
              {
                "time": 41.25,
                "text": "Tak sanggup ku terus bertahan"
              },
              {
                "time": 48.36,
                "text": "Sadar ku tak berhak untuk terus memaksamu"
              },
              {
                "time": 56.46,
                "text": "Memaksamu mencintaiku sepenuh hati"
              },
              {
                "time": 64.25,
                "text": "Aku 'kan berusaha untuk melupakanmu"
              },
              {
                "time": 72.76,
                "text": "Tapi terimalah permintaan terakhirku"
              },
              {
                "time": 81.74,
                "text": ""
              },
              {
                "time": 85.22,
                "text": "(Genggam tanganku) Genggam tanganku, sayang"
              },
              {
                "time": 90.28999999999999,
                "text": "Dekat denganku, peluk diriku"
              },
              {
                "time": 94.03,
                "text": "Berdiri tegak di depan aku"
              },
              {
                "time": 98.15,
                "text": "Cium keningku 'tuk yang terakhir"
              },
              {
                "time": 101.94,
                "text": "Ku 'kan menghilang jauh darimu"
              },
              {
                "time": 106.08,
                "text": "Tak terlihat sehelai rambut pun"
              },
              {
                "time": 110.13,
                "text": "Tapi di mana nanti kau terluka"
              },
              {
                "time": 114.42,
                "text": "Cari aku, ku ada untukmu, ho-oh"
              },
              {
                "time": 125.51,
                "text": ""
              },
              {
                "time": 128.74,
                "text": "Ku tak membencimu"
              },
              {
                "time": 133.2,
                "text": "Kuharap kau pun begitu, ha-ah (kuharap begitu), yeah, yeay"
              },
              {
                "time": 145.07999999999998,
                "text": "Tak ingin kau jauh"
              },
              {
                "time": 149.07,
                "text": "Tapi takdir menginginkan kita 'tuk berpisah"
              },
              {
                "time": 162.42000000000002,
                "text": "Genggam tanganku, sayang"
              },
              {
                "time": 166.03,
                "text": "Dekat denganku, peluk diriku"
              },
              {
                "time": 170.12,
                "text": "Berdiri tegak di depan aku"
              },
              {
                "time": 174.11,
                "text": "Cium keningku 'tuk yang terakhir"
              },
              {
                "time": 177.99,
                "text": "Ku 'kan menghilang jauh darimu"
              },
              {
                "time": 182.21,
                "text": "Tak terlihat sehelai rambut pun"
              },
              {
                "time": 186.13,
                "text": "Tapi di mana nanti kau terluka"
              },
              {
                "time": 190.47,
                "text": "Cari aku, ku ada untukmu"
              },
              {
                "time": 198.75,
                "text": "(Genggam tanganku,Year of Release: 2021635416"
              }
            ]
          },
          {
            "title": "Ku Ingin Pisah",
            "artist": "Nabila Taqiyyah",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Ku Ingin Pisah.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273b7044a4b1d903117ab7594b1",
            "lyrics": [
              {
                "time": 11.26,
                "text": "Sampai kapan ku harus menunggu?"
              },
              {
                "time": 16.23,
                "text": ""
              },
              {
                "time": 23.66,
                "text": "Kisah kita seperti yang dulu"
              },
              {
                "time": 31.23,
                "text": "Kar'na kini ku merasa sendiri"
              },
              {
                "time": 42.14,
                "text": "Aku tanya, \"Kapan ada waktu?\""
              },
              {
                "time": 48.04,
                "text": "Tak kudengar sedikit jawabmu"
              },
              {
                "time": 55.42,
                "text": "Salahkah aku bila mulai meragu?"
              },
              {
                "time": 66.28,
                "text": "Hanya pilu"
              },
              {
                "time": 69.28,
                "text": "Bukan lagi rindu dirimu"
              },
              {
                "time": 75.1,
                "text": "Hm-mm"
              },
              {
                "time": 77.94,
                "text": "Ku lelah"
              },
              {
                "time": 81.1,
                "text": "Kurasa cukup di sini"
              },
              {
                "time": 86.97,
                "text": "Kau berubah, tak peduli"
              },
              {
                "time": 92.86,
                "text": "Dulu indah, kini cinta pergi sudah"
              },
              {
                "time": 98.28999999999999,
                "text": ""
              },
              {
                "time": 101.97,
                "text": "Ku menyerah"
              },
              {
                "time": 105.47,
                "text": "Tak seperti dulu lagi"
              },
              {
                "time": 111.53,
                "text": "Habis air mata ini"
              },
              {
                "time": 117.5,
                "text": "Tapi, maaf, bila ku ingin pisah"
              },
              {
                "time": 121.89,
                "text": ""
              },
              {
                "time": 124.23,
                "text": "Ho-oh-oh-oh"
              },
              {
                "time": 126.8,
                "text": "T'lah kucoba semua cara"
              },
              {
                "time": 132.63,
                "text": "Untuk pertahankan kita"
              },
              {
                "time": 137.63,
                "text": "Tapi tak bisa semuanya kupaksa (semuanya kupaksa)"
              },
              {
                "time": 145.04,
                "text": "Pergi, janganlah kembali (janganlah kembali)"
              },
              {
                "time": 150.92000000000002,
                "text": ""
              },
              {
                "time": 161.45,
                "text": "Oh, tapi, maaf, bila ku ingin pisah"
              },
              {
                "time": 166.18,
                "text": ""
              },
              {
                "time": 175.71,
                "text": "Ho-oh-uh-oh"
              },
              {
                "time": 177.96,
                "text": "KuYear of Release: 2023313"
              }
            ]
          },
          {
            "title": "Bohongi Hati",
            "artist": "Mahalini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Bohongi Hati.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736f713eb92ebf7ca05a562542",
            "lyrics": [
              {
                "time": 0.54,
                "text": "Aku tersiksa melihat semuanya berubah"
              },
              {
                "time": 11.24,
                "text": "Mengapa kau tak mau tahu?"
              },
              {
                "time": 18.34,
                "text": "Bagaimana hati ini tanpamu?"
              },
              {
                "time": 25.54,
                "text": "Cintamu?"
              },
              {
                "time": 29.28,
                "text": "Oh, di mana aku bisa temui dirimu?"
              },
              {
                "time": 44.14,
                "text": "Yang dulu cinta dan anggap aku ada"
              },
              {
                "time": 52.68,
                "text": ""
              },
              {
                "time": 57.01,
                "text": "Jika kauminta aku menjauh"
              },
              {
                "time": 64.27,
                "text": "Hilang dari seluruh memori indahmu"
              },
              {
                "time": 71.53,
                "text": "'Kan kulakukan semua"
              },
              {
                "time": 75.12,
                "text": "Walau tak mungkin sanggup bohongi hatiku"
              },
              {
                "time": 84.74,
                "text": "Ha-ah-ah-ah"
              },
              {
                "time": 90.56,
                "text": "Ha-ah-ha-wo-ho-oh"
              },
              {
                "time": 95.27000000000001,
                "text": "Di mana aku bisa temui dirimu? Ha-ah"
              },
              {
                "time": 109.69,
                "text": "Yang dulu cinta dan anggap aku ada"
              },
              {
                "time": 117.88,
                "text": "(Yang dulu cinta dan anggap aku ada) ho-oh"
              },
              {
                "time": 122.12,
                "text": "Jika kau meminta aku menjauh"
              },
              {
                "time": 129.62,
                "text": "Hilang dari seluruh memori indahmu"
              },
              {
                "time": 136.99,
                "text": "'Kan kulakukan semua"
              },
              {
                "time": 140.68,
                "text": "Walau tak mungkin sanggup bohongi hatiku"
              },
              {
                "time": 151.4,
                "text": "Saat ku rindu, kucoba tak rindu"
              },
              {
                "time": 158.8,
                "text": "Demi bahagiamu yang tak membutuhkanku"
              },
              {
                "time": 166.16,
                "text": "Entah sampai di mana"
              },
              {
                "time": 169.63,
                "text": "Sanggup ku 'kan bertahan 'tuk bisa tanpamu"
              },
              {
                "time": 175.96,
                "text": "Ya, tak mungkin kau menemukan yang sama lagi"
              },
              {
                "time": 182.12,
                "text": "Tulus hati s'perti yang aku miliki"
              },
              {
                "time": 189.35,
                "text": "Oh-wo-oh"
              },
              {
                "time": 191.55,
                "text": "JikaYear of Release: 20235710"
              }
            ]
          },
          {
            "title": "Sisa Rasa",
            "artist": "Mahalini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Sisa Rasa.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736f713eb92ebf7ca05a562542",
            "lyrics": [
              {
                "time": 8.79,
                "text": "Ha-ah-ah-ah"
              },
              {
                "time": 16.77,
                "text": "Melihatmu bahagia, satu hal yang terindah"
              },
              {
                "time": 24.68,
                "text": "Anug'rah cinta yang pernah kupunya"
              },
              {
                "time": 32.28,
                "text": "Kau buatku percaya ketulusan cinta"
              },
              {
                "time": 40.2,
                "text": "Seakan kisah sempurna 'kan tiba"
              },
              {
                "time": 48.13,
                "text": "Masih jelas teringat pelukanmu yang hangat"
              },
              {
                "time": 56.07,
                "text": "Seakan semua tak mungkin menghilang"
              },
              {
                "time": 63.96,
                "text": "Kini hanya kenangan yang telah kau tinggalkan"
              },
              {
                "time": 71.56,
                "text": "Tak tersisa lagi waktu bersama"
              },
              {
                "time": 79.51,
                "text": "Mengapa masih ada"
              },
              {
                "time": 83.44,
                "text": "Sisa rasa di dada"
              },
              {
                "time": 87.52,
                "text": "Di saat kau pergi begitu saja?"
              },
              {
                "time": 95.27000000000001,
                "text": "Mampukah ku bertahan"
              },
              {
                "time": 99.21000000000001,
                "text": "Tanpa hadirmu, sayang?"
              },
              {
                "time": 103.05,
                "text": "Tuhan, sampaikan rindu untuknya (rindu untuknya)"
              },
              {
                "time": 111.28,
                "text": "Masih jelas teringat (jelas teringat) pelukanmu yang hangat"
              },
              {
                "time": 119.33,
                "text": "Seakan semua tak mungkin menghilang (menghilang)"
              },
              {
                "time": 126.89,
                "text": "Kini hanya kenangan yang t'lah kau tinggalkan"
              },
              {
                "time": 135.05,
                "text": "Tak tersisa lagi waktu bersama (waktu bersama)"
              },
              {
                "time": 142.56,
                "text": "Mengapa masih ada"
              },
              {
                "time": 146.31,
                "text": "Sisa rasa di dada"
              },
              {
                "time": 150.38,
                "text": "Di saat kau pergi begitu saja? (Begitu saja)"
              },
              {
                "time": 158.17000000000002,
                "text": "Mampukah ku bertahan"
              },
              {
                "time": 162.29,
                "text": "Tanpa hadirmu, sayang?"
              },
              {
                "time": 165.81,
                "text": "Tuhan, sampaikan rindu untuknya"
              },
              {
                "time": 173,
                "text": "(Masih tersimpan)Year of Release: 20213,2222,358"
              }
            ]
          },
          {
            "title": "Tak Segampang Itu",
            "artist": "Anggi Marito",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Tak Segampang Itu.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2732844c4e4e984ea408ab7fd6f",
            "lyrics": [
              {
                "time": 16.02,
                "text": "Waktu demi waktu, hari demi hari"
              },
              {
                "time": 25.88,
                "text": "Sadar ku t'lah sendiri"
              },
              {
                "time": 30.9,
                "text": "Kau t'lah pergi jauh, tinggalkan diriku"
              },
              {
                "time": 40.06,
                "text": "Ternyata ku rindu"
              },
              {
                "time": 46.05,
                "text": "Senyuman yang s'lalu membungkus hati yang terluka"
              },
              {
                "time": 54.95,
                "text": "Di depan mereka"
              },
              {
                "time": 58.65,
                "text": "Tuhan, masih pantaskah ku 'tuk bersamanya?"
              },
              {
                "time": 66.59,
                "text": "Kar'na hati ini inginkannya"
              },
              {
                "time": 71.92,
                "text": "Tak segampang itu ku mencari penggantimu"
              },
              {
                "time": 79.32,
                "text": "Tak segampang itu ku menemukan sosok seperti dirimu, Cinta"
              },
              {
                "time": 89.73,
                "text": "Kau tahu betapa besar cinta yang kutanamkan padamu"
              },
              {
                "time": 97.58,
                "text": "Mengapa kau memilih untuk berpisah?"
              },
              {
                "time": 107.03,
                "text": "Ho-oh"
              },
              {
                "time": 108.7,
                "text": "Terlalu besar kutaruh harapan pada dirimu"
              },
              {
                "time": 116.02000000000001,
                "text": "Itu alasanku, lama tanpa dirimu, oh-oh"
              },
              {
                "time": 123.43,
                "text": "Mereka yang bilang, ku akan dapat lebih darimu"
              },
              {
                "time": 129.08,
                "text": "Tak mungkin, semua itu tak mudah"
              },
              {
                "time": 135.17,
                "text": "Oh-oh-oh (ku mencari penggantimu)"
              },
              {
                "time": 142.25,
                "text": "Tak segampang itu ku menemukan sosok seperti dirimu, oh,Year of Release: 20226715"
              }
            ]
          },
          {
            "title": "Tak Dianggap",
            "artist": "Lyodra",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Tak Dianggap.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273ca3cda6e80ce9df0f98de7cb",
            "lyrics": [
              {
                "time": 16.2,
                "text": "Aku selalu t'rus berusaha"
              },
              {
                "time": 23.04,
                "text": "Sabar yang aku bisa"
              },
              {
                "time": 28.7,
                "text": "Menjadi pengertian"
              },
              {
                "time": 34.27,
                "text": "Sakit pun selalu kusimpan"
              },
              {
                "time": 40.56,
                "text": "Jadi yang terbaik untukmu"
              },
              {
                "time": 42.57,
                "text": "Apa itu tak cukup?"
              },
              {
                "time": 44.67,
                "text": "Senyum yang kuberi s'lama ini"
              },
              {
                "time": 54.23,
                "text": "Palsu, itu bukan aku"
              },
              {
                "time": 61.4,
                "text": "Kututupi semuanya"
              },
              {
                "time": 63.03,
                "text": "Agar kita baik-baik saja"
              },
              {
                "time": 65.8,
                "text": "Tapi kini sudah tak mampu"
              },
              {
                "time": 69.53,
                "text": "Dengan caramu itu"
              },
              {
                "time": 71.24,
                "text": "Sikapmu seakan-akan"
              },
              {
                "time": 75.14,
                "text": "Menyuruh diriku pergi"
              },
              {
                "time": 79.64,
                "text": "Tapi perkataanmu seolah"
              },
              {
                "time": 84.61,
                "text": "Aku penting bagimu"
              },
              {
                "time": 88.76,
                "text": "Sebenarnya aku siapa?"
              },
              {
                "time": 92.19,
                "text": "Tak dianggap tapi ada"
              },
              {
                "time": 97.06,
                "text": "Bersamamu, ku terluka"
              },
              {
                "time": 102.99000000000001,
                "text": "Melepaskanmu, aku lebih terluka"
              },
              {
                "time": 104.67,
                "text": "Lelah bertahan denganmu"
              },
              {
                "time": 111.95,
                "text": "Namun, terlalu sayang untuk melepasmu"
              },
              {
                "time": 115.88,
                "text": "Biar, biar kujalani sampai melepasmu"
              },
              {
                "time": 120.95,
                "text": "Tiada lagi sedih bagiku, oh-oh-oh"
              },
              {
                "time": 132.12,
                "text": "SikapmuYear of Release: 20234811"
              }
            ]
          },
          {
            "title": "Sial",
            "artist": "Mahalini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Sial.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736f713eb92ebf7ca05a562542",
            "lyrics": [
              {
                "time": 13.52,
                "text": "Sampai saat ini tak terpikir olehku"
              },
              {
                "time": 21.67,
                "text": "Aku pernah beri rasa pada orang sepertimu"
              },
              {
                "time": 29.56,
                "text": "Seandainya sejak awal tak kuyakinkan diriku"
              },
              {
                "time": 37.64,
                "text": "Tutur kata yang sempurna, tak sebaik yang kukira"
              },
              {
                "time": 45.46,
                "text": "Andai ku tahu semua akan sia-sia"
              },
              {
                "time": 53.41,
                "text": "Takkan kut'rima cinta sesaatmu"
              },
              {
                "time": 60.86,
                "text": "Bagaimana dengan aku terlanjur mencintaimu?"
              },
              {
                "time": 68.99,
                "text": "Yang datang beri harapan, lalu pergi dan menghilang"
              },
              {
                "time": 76.76,
                "text": "Tak terpikirkan olehmu, hatiku hancur kar'namu"
              },
              {
                "time": 84.75,
                "text": "Tanpa sedikit alasan, pergi tanpa berpamitan"
              },
              {
                "time": 93.43,
                "text": "Takkan kut'rima cinta sesaatmu"
              },
              {
                "time": 101.53999999999999,
                "text": "Seandainya sejak awal tak kuyakinkan diriku"
              },
              {
                "time": 108.9,
                "text": "Tutur kata yang sempurna, tak sebaik yang kukira"
              },
              {
                "time": 117.47999999999999,
                "text": "Andai ku tahu semua akan sia-sia"
              },
              {
                "time": 124.74,
                "text": "Takkan kut'rima cinta sesaatmu"
              },
              {
                "time": 132.79,
                "text": "Bagaimana dengan aku terlanjur mencintaimu?"
              },
              {
                "time": 140.93,
                "text": "Yang datang beri harapan, lalu pergi dan menghilang"
              },
              {
                "time": 148.88,
                "text": "Tak terpikirkan olehmu, hatiku hancur kar'namu"
              },
              {
                "time": 156.91,
                "text": "Tanpa sedikit alasan, pergi tanpa berpamitan"
              },
              {
                "time": 165.46,
                "text": "Takkan kut'rima cinta sesaatmu"
              },
              {
                "time": 170.55,
                "text": "Sial-sialnya ku bertemuYear of Release: 20236916"
              }
            ]
          },
          {
            "title": "Bukan Cinta Biasa",
            "artist": "Afgan",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Bukan Cinta Biasa.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273daa3a5d2478cc796925f7c90",
            "lyrics": [
              {
                "time": 12.69,
                "text": "Kali ini kusadari"
              },
              {
                "time": 26.43,
                "text": "Aku telah jatuh cinta"
              },
              {
                "time": 33.48,
                "text": "Dari hatiku terdalam"
              },
              {
                "time": 39.76,
                "text": "Sungguh, aku cinta padamu, ho-oh"
              },
              {
                "time": 48.63,
                "text": "Cintaku bukanlah cinta biasa"
              },
              {
                "time": 60.68,
                "text": "Jika kamu yang memiliki"
              },
              {
                "time": 66.37,
                "text": "Dan kamu yang temaniku seumur hidupku, oh"
              },
              {
                "time": 77.76,
                "text": "T'rimalah pengakuanku"
              },
              {
                "time": 90.07,
                "text": "Percayalah kepadaku"
              },
              {
                "time": 96.46000000000001,
                "text": "Semua ini kulakukan"
              },
              {
                "time": 103.35,
                "text": "Karena kamu memang untukku"
              },
              {
                "time": 112.37,
                "text": "Cintaku bukanlah cinta biasa"
              },
              {
                "time": 120.02,
                "text": "Jika kamu yang memiliki"
              },
              {
                "time": 126.09,
                "text": "Dan kamu yang temaniku seumur hidupku, oh"
              },
              {
                "time": 138.54,
                "text": "Seumur hidupku"
              },
              {
                "time": 145.96,
                "text": "Uh-oh, uh-oh, uh-oh-oh"
              },
              {
                "time": 164.84,
                "text": "Hu-uh"
              },
              {
                "time": 168.18,
                "text": "Cintaku bukanlah cinta biasa"
              },
              {
                "time": 177.73,
                "text": "Jika kamu yangYear of Release: 2009384207"
              }
            ]
          },
          {
            "title": "Somebody's Pleasure",
            "artist": "Aziz Hedra",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Somebody's Pleasure.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273dfa72d72dd91d9b28dedf9e9",
            "lyrics": [
              {
                "time": 7.22,
                "text": "I've been so busy, ignoring, and hiding"
              },
              {
                "time": 13.62,
                "text": "About what my heart actually say"
              },
              {
                "time": 18.87,
                "text": ""
              },
              {
                "time": 23.44,
                "text": "Stay awake while I'm drowning on my thoughts"
              },
              {
                "time": 29.98,
                "text": "Sometimes a happiness is just a happiness"
              },
              {
                "time": 36.11,
                "text": ""
              },
              {
                "time": 41.34,
                "text": "I've never been enjoyin' my serenity"
              },
              {
                "time": 46.78,
                "text": "Even if I've got a lot of company"
              },
              {
                "time": 51.94,
                "text": "That makes me happy"
              },
              {
                "time": 55.74,
                "text": "Soul try to figure it out"
              },
              {
                "time": 59.99,
                "text": "From where I've been escapin'"
              },
              {
                "time": 64.69,
                "text": "Running to end all the sin"
              },
              {
                "time": 68.85,
                "text": "Get away from the pressure"
              },
              {
                "time": 72.34,
                "text": "Wondering to get a love that is so pure"
              },
              {
                "time": 80.91,
                "text": "Gotta have to always make sure"
              },
              {
                "time": 84.83,
                "text": "That I'm not just somebody's pleasure"
              },
              {
                "time": 89.26,
                "text": "I always pretending and lying"
              },
              {
                "time": 95.65,
                "text": "Like I'm used to feel empty"
              },
              {
                "time": 98.05,
                "text": "'Cause all I got is unhappy"
              },
              {
                "time": 102.4,
                "text": "Happiness, can't I get happiness?"
              },
              {
                "time": 107.06,
                "text": "I've never been enjoyin' my serenity"
              },
              {
                "time": 112.2,
                "text": "Even if I've got a lot of company"
              },
              {
                "time": 117.78999999999999,
                "text": "That makes me happy"
              },
              {
                "time": 121.46,
                "text": "Soul try to figure it out"
              },
              {
                "time": 125.68,
                "text": "From where I've been escapin'"
              },
              {
                "time": 130.28,
                "text": "Running to end all the sin"
              },
              {
                "time": 134.32,
                "text": "Get away from the pressure"
              },
              {
                "time": 138.02,
                "text": "Wondering to get a love that is so pure"
              },
              {
                "time": 146.57,
                "text": "Gotta have to always make sure"
              },
              {
                "time": 150.36,
                "text": "That I'm not just somebody's pleasure"
              },
              {
                "time": 157.77,
                "text": ""
              },
              {
                "time": 163.34,
                "text": "It was in a blink of an eye"
              },
              {
                "time": 167.16,
                "text": "FindYear of Release: 20231,170344"
              }
            ]
          },
          {
            "title": "About You",
            "artist": "The 1975",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/About You.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c",
            "lyrics": [
              {
                "time": 44.67,
                "text": "I know a place"
              },
              {
                "time": 54.53,
                "text": "It's somewhere I go when I need to remember your face"
              },
              {
                "time": 64,
                "text": "We get married in our heads"
              },
              {
                "time": 74.53,
                "text": "Something to do while we try to recall how we met"
              },
              {
                "time": 84,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 89.12,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 94.13,
                "text": "Do you think I have forgotten"
              },
              {
                "time": 99.24000000000001,
                "text": "About you?"
              },
              {
                "time": 104.24000000000001,
                "text": "You and I (don't let go) were alive (don't let go)"
              },
              {
                "time": 114.50999999999999,
                "text": "With nothing to do, I could lay and just look in your eyes"
              },
              {
                "time": 124.66,
                "text": "Wait (don't let go) and pretend (don't let go)"
              },
              {
                "time": 134.69,
                "text": "Hold on and hope that we'll find our way back in the end"
              },
              {
                "time": 144.26,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 149.2,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 154.17000000000002,
                "text": "Do you think I have forgotten"
              },
              {
                "time": 159.16,
                "text": "About you?"
              },
              {
                "time": 164.18,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 169.04,
                "text": "Do you think I have forgotten?"
              },
              {
                "time": 174.12,
                "text": "Do you think I have forgotten"
              },
              {
                "time": 179.12,
                "text": "About you?"
              },
              {
                "time": 184.48,
                "text": "There was something 'bout you that now I can't remember"
              },
              {
                "time": 189.67,
                "text": "It's the same damn thing that made my heart surrender"
              },
              {
                "time": 194.44,
                "text": "AndYear of Release: 20221,276598"
              }
            ]
          },
          {
            "title": "Line Without a Hook",
            "artist": "Ricky Montgomery",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Line Without a Hook.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27367ee332af483acd134fd6fd0",
            "lyrics": [
              {
                "time": 0.54,
                "text": "I don't really give a damn about the way you touch me"
              },
              {
                "time": 2.49,
                "text": "When we're alone"
              },
              {
                "time": 5.55,
                "text": "You can hold my hand if no one's home"
              },
              {
                "time": 9.55,
                "text": "Do you like it when I'm away?"
              },
              {
                "time": 12.71,
                "text": "If I went and hurt my body"
              },
              {
                "time": 14.19,
                "text": "Baby, would you love me the same?"
              },
              {
                "time": 16.23,
                "text": "I can feel all my bones coming back, and I'm craving motion"
              },
              {
                "time": 20.59,
                "text": "Mama never really learned how to live by herself"
              },
              {
                "time": 24.35,
                "text": "It's a curse, and it's growing"
              },
              {
                "time": 28.03,
                "text": "You're a pond and I'm an ocean, oh"
              },
              {
                "time": 32.31,
                "text": "All my emotions feel like explosions when you are around"
              },
              {
                "time": 40.72,
                "text": "And I've found a way to kill the sound, oh"
              },
              {
                "time": 47.29,
                "text": "Oh, baby, I am a wreck when I'm without you"
              },
              {
                "time": 52.88,
                "text": "I need you here to stay"
              },
              {
                "time": 55.86,
                "text": "I broke all my bones that day I found you"
              },
              {
                "time": 60.14,
                "text": "Crying at the lake"
              },
              {
                "time": 62.72,
                "text": "Was it something I said to make you feel like you're a burden?"
              },
              {
                "time": 69.55,
                "text": "Oh, and if I could take it all back"
              },
              {
                "time": 75.21000000000001,
                "text": "I swear that I would pull you from the tide"
              },
              {
                "time": 83.89,
                "text": "Oh, whoa, whoa, whoa!"
              },
              {
                "time": 86.96000000000001,
                "text": "I said no (I said no), I said no (I said no)"
              },
              {
                "time": 89.19,
                "text": "Listen close, it's a no"
              },
              {
                "time": 93.85,
                "text": "The wind is a-pounding on my back"
              },
              {
                "time": 96.38,
                "text": "And I've found hope in a heart attack"
              },
              {
                "time": 100.22999999999999,
                "text": "Oh, at last, it is past"
              },
              {
                "time": 103.55,
                "text": "Now I've got it, and you can't have it"
              },
              {
                "time": 108.06,
                "text": "Baby, I am a wreck when I'm without you"
              },
              {
                "time": 114.32,
                "text": "I need you here to stay"
              },
              {
                "time": 116.65,
                "text": "I broke all my bones that day I found you"
              },
              {
                "time": 121.26,
                "text": "Crying at the lake"
              },
              {
                "time": 124.03,
                "text": "Was it something I said to make you feel like you're a burden?"
              },
              {
                "time": 130.98,
                "text": "Oh, and if I could take it all back"
              },
              {
                "time": 137.24,
                "text": "I swear that I would pull you from the tide"
              },
              {
                "time": 144.07999999999998,
                "text": ""
              },
              {
                "time": 147.1,
                "text": "Darling, when I'm fast asleep"
              },
              {
                "time": 151.13,
                "text": "I've seen this person watching me"
              },
              {
                "time": 154.74,
                "text": "Saying, \"Is it worth it? Is it worth it?"
              },
              {
                "time": 158.48,
                "text": "Tell me, is it worth it?\", Oh"
              },
              {
                "time": 170.84,
                "text": ""
              },
              {
                "time": 175.36,
                "text": "'Cause there is something and there is nothing"
              },
              {
                "time": 180.13,
                "text": "There isYear of Release: 20166217"
              }
            ]
          },
          {
            "title": "The Night We Met",
            "artist": "Lord Huron",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/The Night We Met.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2731fa318e90c9d4ddc6b480853",
            "lyrics": [
              {
                "time": 31.06,
                "text": "I am not the only traveler"
              },
              {
                "time": 38.05,
                "text": "Who has not repaid his debt"
              },
              {
                "time": 44.33,
                "text": "I've been searching for a trail to follow again"
              },
              {
                "time": 51.35,
                "text": "Take me back to the night we met"
              },
              {
                "time": 56.8,
                "text": ""
              },
              {
                "time": 58.94,
                "text": "And then I can tell myself"
              },
              {
                "time": 65.9,
                "text": "What the hell I'm supposed to do"
              },
              {
                "time": 73.36,
                "text": "And then I can tell myself"
              },
              {
                "time": 80.57,
                "text": "Not to ride along with you"
              },
              {
                "time": 87.61,
                "text": "I had all and then most of you"
              },
              {
                "time": 90.48,
                "text": "Some and now none of you"
              },
              {
                "time": 95.05,
                "text": "Take me back to the night we met"
              },
              {
                "time": 102.11,
                "text": "I don't know what I'm supposed to do"
              },
              {
                "time": 104.93,
                "text": "Haunted by the ghost of you"
              },
              {
                "time": 109.21000000000001,
                "text": "Oh, take me back to the night we met"
              },
              {
                "time": 114.65,
                "text": ""
              },
              {
                "time": 116.77000000000001,
                "text": "When the night was full of terror"
              },
              {
                "time": 123.99,
                "text": "And your eyes were filled with tears"
              },
              {
                "time": 131.29,
                "text": "When you had not touched me yet"
              },
              {
                "time": 138.09,
                "text": "Oh! Take me back to the nightYear of Release: 201558576"
              }
            ]
          },
          {
            "title": "The Cut That Always Bleeds",
            "artist": "Conan Gray",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/The Cut That Always Bleeds.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43",
            "lyrics": [
              {
                "time": 2.96,
                "text": "I don't love you anymore"
              },
              {
                "time": 6.03,
                "text": "A pretty line that I adore"
              },
              {
                "time": 10.04,
                "text": "Five words that I've heard before"
              },
              {
                "time": 16.84,
                "text": "'Cause you keep me on a rope"
              },
              {
                "time": 20.32,
                "text": "And tied a noose around my throat"
              },
              {
                "time": 24.17,
                "text": "You're gone, then back at my door"
              },
              {
                "time": 30.78,
                "text": "'Cause if you're gonna leave, better leave, better do it fast"
              },
              {
                "time": 35.3,
                "text": "Can't live a little longer sitting on your lap"
              },
              {
                "time": 39.05,
                "text": "'Cause you know what you're doin' when you're comin' back"
              },
              {
                "time": 42.7,
                "text": "And I don't wanna have another heart attack"
              },
              {
                "time": 46.17,
                "text": "Oh, I can't be your lover on a leash"
              },
              {
                "time": 55.06,
                "text": "Every other week, when you please"
              },
              {
                "time": 60.07,
                "text": "Oh, I can't be the kiss that you don't need"
              },
              {
                "time": 69.17,
                "text": "The lie between your teeth"
              },
              {
                "time": 72.53,
                "text": "The cut that always bleeds"
              },
              {
                "time": 76.3,
                "text": "(Ah-ah-ah)"
              },
              {
                "time": 80.03,
                "text": "The cut that always bleeds"
              },
              {
                "time": 83.7,
                "text": "(Ah-ah-ah)"
              },
              {
                "time": 88.12,
                "text": "Say you love somebody new"
              },
              {
                "time": 91.23,
                "text": "Then beat my heart to black and blue"
              },
              {
                "time": 95.24000000000001,
                "text": "Then they leave, and it's me you come back to (Ah-ah)"
              },
              {
                "time": 102.34,
                "text": "To say you loved me all along"
              },
              {
                "time": 105.31,
                "text": "And kiss the bruises 'til they're gone"
              },
              {
                "time": 109.25999999999999,
                "text": "Bittersweet, 'cause I can't breathe inside your arms"
              },
              {
                "time": 116.08,
                "text": "'Cause if you're gonna leave, better leave, better do it fast"
              },
              {
                "time": 120.26,
                "text": "Can't live another minute bleedin' from my back"
              },
              {
                "time": 123.99,
                "text": "'Cause I don't have another one for you to stab"
              },
              {
                "time": 127.27,
                "text": "And I don't wanna have another heart attack"
              },
              {
                "time": 130.65,
                "text": "Oh, I can't be your lover on a leash"
              },
              {
                "time": 139.68,
                "text": "Every other week, when you please"
              },
              {
                "time": 144.44,
                "text": "Oh, I can't be the kiss that you don't need"
              },
              {
                "time": 153.52,
                "text": "TheYear of Release: 2020296131"
              }
            ]
          },
          {
            "title": "Car's Outside",
            "artist": "James Arthur",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Car's Outside.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273dc16d839ab77c64bdbeb3660",
            "lyrics": [
              {
                "time": 6.64,
                "text": "I'm packin' my bags that I didn't unpack the last time"
              },
              {
                "time": 12.61,
                "text": "I'm sayin', \"See you again,\" so many times, it's becoming my tagline"
              },
              {
                "time": 19.49,
                "text": "But you know the truth, I'd rather hold you"
              },
              {
                "time": 22.65,
                "text": "Than try to catch this flight"
              },
              {
                "time": 25.82,
                "text": "So many things I'd rather say"
              },
              {
                "time": 27.82,
                "text": "But for now, it's goodbye"
              },
              {
                "time": 32.84,
                "text": "You say I'm always leavin'"
              },
              {
                "time": 38.98,
                "text": "You, when you're sleepin' alone"
              },
              {
                "time": 43.94,
                "text": "But the, the car's outside"
              },
              {
                "time": 47.28,
                "text": "But I don't wanna go tonight"
              },
              {
                "time": 51.94,
                "text": "I'm not gettin' in the Addison Lee"
              },
              {
                "time": 57.24,
                "text": "Unless you pack your bags"
              },
              {
                "time": 60.89,
                "text": "You're comin' with me"
              },
              {
                "time": 65.6,
                "text": "I'm tired of lovin' from afar"
              },
              {
                "time": 68.85,
                "text": "And never being where you are"
              },
              {
                "time": 72.24,
                "text": "Close the windows, lock the doors"
              },
              {
                "time": 75.11,
                "text": "Don't wanna leave you anymore"
              },
              {
                "time": 79.53,
                "text": "Oh-oh, ah"
              },
              {
                "time": 83.46000000000001,
                "text": "I'm starin' at the same four walls in a different hotel"
              },
              {
                "time": 90.05,
                "text": "It's an unfamiliar feelin' but I know it so well"
              },
              {
                "time": 95.75,
                "text": "Oh, but you know the truth, I'd rather hold you"
              },
              {
                "time": 99.4,
                "text": "Than this mobile in my hand"
              },
              {
                "time": 102.56,
                "text": "But I guess it'll do, 'cause for you"
              },
              {
                "time": 105.1,
                "text": "I would run up my phone bill"
              },
              {
                "time": 109.19,
                "text": "You say I'm always leavin'"
              },
              {
                "time": 115.56,
                "text": "You, when you need me the most"
              },
              {
                "time": 120.88,
                "text": "But the, the car's outside"
              },
              {
                "time": 124.07,
                "text": "But I don't wanna go tonight"
              },
              {
                "time": 128.72,
                "text": "I'm not gettin' in the Addison Lee"
              },
              {
                "time": 133.92,
                "text": "Unless you pack your bags"
              },
              {
                "time": 137.87,
                "text": "You're comin' with me"
              },
              {
                "time": 142.16,
                "text": "I'm tired of lovin' from afar"
              },
              {
                "time": 145.45,
                "text": "And never being where you are"
              },
              {
                "time": 149.06,
                "text": "Close the windows, lock the doors"
              },
              {
                "time": 152.01,
                "text": "Don't wanna leave you anymore"
              },
              {
                "time": 154.66,
                "text": "Ooh-ooh, ah"
              },
              {
                "time": 157.88,
                "text": "Ooh-ooh, ah"
              },
              {
                "time": 160.96,
                "text": "Ooh-ooh, ah"
              },
              {
                "time": 164.75,
                "text": "Don't wanna leave you anymore"
              },
              {
                "time": 167.93,
                "text": "Oh, darling, all of the city lights"
              },
              {
                "time": 171.04,
                "text": "Never shine as bright as your eyes"
              },
              {
                "time": 174.2,
                "text": "I would trade them all for a minute more"
              },
              {
                "time": 177.48,
                "text": "But theYear of Release: 20198536"
              }
            ]
          },
          {
            "title": "Memories",
            "artist": "Conan Gray",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Memories.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27360a89b781c62ffe2136e4396",
            "lyrics": [
              {
                "time": 0.67,
                "text": "One, two"
              },
              {
                "time": 2.33,
                "text": "It's been a couple months"
              },
              {
                "time": 5.56,
                "text": "That's just about enough time"
              },
              {
                "time": 9.67,
                "text": "For me to stop crying when I look at all the pictures"
              },
              {
                "time": 13.61,
                "text": "Now I kinda smile, I haven't felt that in a while"
              },
              {
                "time": 19.29,
                "text": "It's late, I hear the door"
              },
              {
                "time": 22.33,
                "text": "Bell ringing, and it's pouring"
              },
              {
                "time": 26.72,
                "text": "I open up that door, see your brown eyes at the entrance"
              },
              {
                "time": 30.57,
                "text": "You just wanna talk, and I can't turn away a wet dog"
              },
              {
                "time": 35.92,
                "text": "But please, don't ruin this for me"
              },
              {
                "time": 42.13,
                "text": "Please, don't make it harder than it already is"
              },
              {
                "time": 48.44,
                "text": "I'm trying to get over this"
              },
              {
                "time": 56.13,
                "text": "I wish that you would stay in my memories"
              },
              {
                "time": 60.49,
                "text": "But you show up today just to ruin things"
              },
              {
                "time": 64.4,
                "text": "I wanna put you in the past 'cause I'm traumatized"
              },
              {
                "time": 68.78999999999999,
                "text": "But you're not letting me do that, 'cause tonight"
              },
              {
                "time": 72.26,
                "text": "You're all drunk in my kitchen, curled in the fetal position"
              },
              {
                "time": 76.26,
                "text": "Too busy playing the victim to be listening to me when I say"
              },
              {
                "time": 82.53,
                "text": "\"I wish that you would stay in my memories\""
              },
              {
                "time": 86.44,
                "text": "In my memories, stay in my memories"
              },
              {
                "time": 91.6,
                "text": ""
              },
              {
                "time": 94.34,
                "text": "Now I can't say, \"Goodbye\""
              },
              {
                "time": 97.52000000000001,
                "text": "If you'll stay here the whole night"
              },
              {
                "time": 101.17,
                "text": "You see, it's hard to find an end to something that you keep beginning"
              },
              {
                "time": 105.47999999999999,
                "text": "Over, and over again"
              },
              {
                "time": 107.2,
                "text": "I promise that the ending always stays the same"
              },
              {
                "time": 110.44,
                "text": "So there's no good reason in make-believing"
              },
              {
                "time": 114.8,
                "text": "That we could ever exist again"
              },
              {
                "time": 118.67,
                "text": "I can't be your friend, can't be your lover"
              },
              {
                "time": 120.96,
                "text": "Can't be the reason we hold back each other from falling in love"
              },
              {
                "time": 124.97,
                "text": "With somebody other than me"
              },
              {
                "time": 128.68,
                "text": "I wish that you would stay in my memories"
              },
              {
                "time": 132.94,
                "text": "But you show up today just to ruin things"
              },
              {
                "time": 136.8,
                "text": "I wanna put you in the past 'cause I'm traumatized"
              },
              {
                "time": 141.13,
                "text": "But you're not letting me do that, 'cause tonight"
              },
              {
                "time": 144.5,
                "text": "You're all drunk in my kitchen, curled in the fetal position"
              },
              {
                "time": 148.63,
                "text": "Too busy playing the victim to be listening to me when I say"
              },
              {
                "time": 154.63,
                "text": "\"I wish that you would stay in my memories\""
              },
              {
                "time": 158.74,
                "text": "In my memories, stay in my memories"
              },
              {
                "time": 164.54,
                "text": "Since you came"
              },
              {
                "time": 168.51,
                "text": "I guess I'll let you stay"
              },
              {
                "time": 172.06,
                "text": "For as long as it takes"
              },
              {
                "time": 175.98,
                "text": "To grab yourYear of Release: 20227118"
              }
            ]
          },
          {
            "title": "No Surprises",
            "artist": "Radiohead",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/No Surprises.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
            "lyrics": [
              {
                "time": 25.65,
                "text": "A heart that's full up like a landfill"
              },
              {
                "time": 35.22,
                "text": "A job that slowly kills you"
              },
              {
                "time": 41.51,
                "text": "Bruises that won't heal"
              },
              {
                "time": 48.37,
                "text": ""
              },
              {
                "time": 51.62,
                "text": "You look so tired, unhappy"
              },
              {
                "time": 57.69,
                "text": "Bring down the government"
              },
              {
                "time": 64.17,
                "text": "They don't, they don't speak for us"
              },
              {
                "time": 74.41,
                "text": ""
              },
              {
                "time": 76.75,
                "text": "I'll take a quiet life"
              },
              {
                "time": 82.34,
                "text": "A handshake of carbon monoxide"
              },
              {
                "time": 88.91,
                "text": "No alarms and no surprises"
              },
              {
                "time": 95.25,
                "text": "No alarms and no surprises"
              },
              {
                "time": 101.3,
                "text": "No alarms and no surprises"
              },
              {
                "time": 107.68,
                "text": "Silent"
              },
              {
                "time": 114.06,
                "text": "Silent"
              },
              {
                "time": 120.88,
                "text": "This is my final fit"
              },
              {
                "time": 126.04,
                "text": "My final bellyache with"
              },
              {
                "time": 133.48,
                "text": "No alarms and no surprises"
              },
              {
                "time": 139.52,
                "text": "No alarms and no surprises"
              },
              {
                "time": 145.55,
                "text": "No alarmsYear of Release: 1997338120"
              }
            ]
          },
          {
            "title": "Until I Found You",
            "artist": "Stephen Sanchez",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Until I Found You.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2739522042f86d0bb0d4e9e3783",
            "lyrics": [
              {
                "time": 10.06,
                "text": "Georgia, wrap me up in all your-"
              },
              {
                "time": 16.71,
                "text": "I want you in my arms"
              },
              {
                "time": 22.24,
                "text": "Oh, let me hold you"
              },
              {
                "time": 27.22,
                "text": "I'll never let you go again like I did"
              },
              {
                "time": 33.38,
                "text": "Oh, I used to say"
              },
              {
                "time": 37.01,
                "text": "\"I would never fall in love again until I found her\""
              },
              {
                "time": 44.15,
                "text": "I said, \"I would never fall unless it's you I fall into\""
              },
              {
                "time": 51.38,
                "text": "I was lost within the darkness, but then I found her"
              },
              {
                "time": 58.13,
                "text": "I found you"
              },
              {
                "time": 64.53,
                "text": ""
              },
              {
                "time": 67.49,
                "text": "Georgia, pulled me in"
              },
              {
                "time": 72.15,
                "text": "I asked to love her once again"
              },
              {
                "time": 79.26,
                "text": "You fell, I caught you"
              },
              {
                "time": 84.41,
                "text": "I'll never let you go again like I did"
              },
              {
                "time": 90.48,
                "text": "Oh, I used to say"
              },
              {
                "time": 94.07,
                "text": "\"I would never fall in love again until I found her\""
              },
              {
                "time": 101.28999999999999,
                "text": "I said, \"I would never fall unless it's you I fall into\""
              },
              {
                "time": 108.31,
                "text": "I was lost within theYear of Release: 2021677418"
              }
            ]
          },
          {
            "title": "happier",
            "artist": "Olivia Rodrigo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/happier.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
            "lyrics": [
              {
                "time": 4.64,
                "text": "We broke up a month ago"
              },
              {
                "time": 8.57,
                "text": "Your friends aren't mine, you know, I know"
              },
              {
                "time": 12.56,
                "text": "You've moved on, found someone new"
              },
              {
                "time": 16.16,
                "text": "One more girl who brings out the better in you"
              },
              {
                "time": 21.11,
                "text": "And I thought my heart was detached"
              },
              {
                "time": 25.44,
                "text": "From all the sunlight of our past"
              },
              {
                "time": 29.72,
                "text": "But she's so sweet, she's so pretty"
              },
              {
                "time": 34.07,
                "text": "Does she mean you forgot about me?"
              },
              {
                "time": 38.12,
                "text": "Oh, I hope you're happy"
              },
              {
                "time": 42.25,
                "text": "But not like how you were with me"
              },
              {
                "time": 46.58,
                "text": "I'm selfish, I know, I can't let you go"
              },
              {
                "time": 50.83,
                "text": "So find someone great, but don't find no one better"
              },
              {
                "time": 55.09,
                "text": "I hope you're happy, but don't be happier"
              },
              {
                "time": 61.95,
                "text": "And do you tell her she's the most beautiful girl you've ever seen?"
              },
              {
                "time": 67.06,
                "text": "And promise three words you know you'll never mean"
              },
              {
                "time": 71.41,
                "text": "Remember when I believed"
              },
              {
                "time": 73.78,
                "text": "You meant it when you said it first to me?"
              },
              {
                "time": 78.67,
                "text": "And now I'm pickin' her apart"
              },
              {
                "time": 82.99,
                "text": "Like cuttin' her down make you miss my wretched heart"
              },
              {
                "time": 87.11,
                "text": "But she's beautiful, she looks kind"
              },
              {
                "time": 91.2,
                "text": "She probably gives you butterflies"
              },
              {
                "time": 95.62,
                "text": "I hope you're happy"
              },
              {
                "time": 99.89,
                "text": "But not like how you were with me"
              },
              {
                "time": 104.06,
                "text": "I'm selfish, I know, I can't let you go"
              },
              {
                "time": 108.52000000000001,
                "text": "So find someone great, but don't find no one better"
              },
              {
                "time": 112.83,
                "text": "I hope you're happy, I wish you all the best, really"
              },
              {
                "time": 121.15,
                "text": "Say you love her, baby,Year of Release: 202110345"
              }
            ]
          },
          {
            "title": "Romantic Homicide",
            "artist": "d4vd",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Romantic Homicide.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273bd1a52b3d5903ee01c216da0",
            "lyrics": [
              {
                "time": 15.83,
                "text": "I'm scared"
              },
              {
                "time": 17.92,
                "text": ""
              },
              {
                "time": 21.65,
                "text": "It feels like you don't care"
              },
              {
                "time": 26.11,
                "text": ""
              },
              {
                "time": 28.83,
                "text": "Enlighten me, my dear"
              },
              {
                "time": 33.48,
                "text": ""
              },
              {
                "time": 36.33,
                "text": "Why am I still here?"
              },
              {
                "time": 40.75,
                "text": ""
              },
              {
                "time": 43.34,
                "text": "I don't mean to be complacent with the decisions you made"
              },
              {
                "time": 51.81,
                "text": "But why?"
              },
              {
                "time": 56.1,
                "text": "Mm"
              },
              {
                "time": 58.52,
                "text": "In the back of my mind"
              },
              {
                "time": 62.12,
                "text": "You died"
              },
              {
                "time": 65.23,
                "text": "And I didn't even cry"
              },
              {
                "time": 68.7,
                "text": "No, not a single tear"
              },
              {
                "time": 72.48,
                "text": "And I'm sick of waiting patiently for someone that won't even arrive"
              },
              {
                "time": 84.17,
                "text": ""
              },
              {
                "time": 89.08,
                "text": "Whoa"
              },
              {
                "time": 97.95,
                "text": ""
              },
              {
                "time": 102.25999999999999,
                "text": "In the backYear of Release: 20221,455168"
              }
            ]
          },
          {
            "title": "traitor",
            "artist": "Olivia Rodrigo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/traitor.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
            "lyrics": [
              {
                "time": 19.12,
                "text": "Brown guilty eyes and little white lies, yeah"
              },
              {
                "time": 23.58,
                "text": "I played dumb, but I always knew"
              },
              {
                "time": 28.49,
                "text": "That you talked to her, maybe did even worse"
              },
              {
                "time": 32.91,
                "text": "I kept quiet so I could keep you"
              },
              {
                "time": 37.34,
                "text": "And ain't it funny how you ran to her"
              },
              {
                "time": 42.86,
                "text": "The second that we called it quits?"
              },
              {
                "time": 47.16,
                "text": "And ain't it funny how you said you were friends?"
              },
              {
                "time": 52.29,
                "text": "Now it sure as hell don't look like it"
              },
              {
                "time": 56.92,
                "text": "You betrayed me"
              },
              {
                "time": 59.88,
                "text": "And I know that you'll never feel sorry for the way I hurt, yeah"
              },
              {
                "time": 67.08,
                "text": "You talked to her when we were together"
              },
              {
                "time": 71.46000000000001,
                "text": "Loved you at your worst, but that didn't matter"
              },
              {
                "time": 76.53,
                "text": "It took you two weeks to go off and date her"
              },
              {
                "time": 81.03999999999999,
                "text": "Guess you didn't cheat, but you're still a traitor"
              },
              {
                "time": 86.76,
                "text": ""
              },
              {
                "time": 90.34,
                "text": "Now you bring her around just to shut me down"
              },
              {
                "time": 95.27000000000001,
                "text": "Show her off like she's a new trophyㅤ"
              },
              {
                "time": 99.75,
                "text": "And I know if you were true, there's no damn way that you"
              },
              {
                "time": 104.78999999999999,
                "text": "Could fall in love with somebody that quickly"
              },
              {
                "time": 109.58,
                "text": "Ain't it funny? All the twisted games"
              },
              {
                "time": 114.53,
                "text": "All the questions you used to avoid"
              },
              {
                "time": 119.06,
                "text": "Ain't it funny? Remember I brought her up"
              },
              {
                "time": 124.1,
                "text": "And you told me I was paranoid?"
              },
              {
                "time": 128.57,
                "text": "You betrayed me"
              },
              {
                "time": 131.78,
                "text": "And I know that you'll never feel sorry for the way I hurt, yeah"
              },
              {
                "time": 139.01,
                "text": "You talked to her when we were together"
              },
              {
                "time": 143.57,
                "text": "Loved you at your worst, but that didn't matter"
              },
              {
                "time": 148.6,
                "text": "It took you two weeks to go off and date her"
              },
              {
                "time": 153.16,
                "text": "Guess you didn't cheat, but you're still a traitor"
              },
              {
                "time": 159.54,
                "text": "(Ah-ah-ah) God, I wish that you had thought this through"
              },
              {
                "time": 165.35,
                "text": "Before I went and fell in love with you"
              },
              {
                "time": 169.07,
                "text": "(Ah-ah-ah) when she's sleepin'Year of Release: 202111545"
              }
            ]
          },
          {
            "title": "deja vu",
            "artist": "Olivia Rodrigo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/deja vu.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
            "lyrics": [
              {
                "time": 10.74,
                "text": "Car rides to Malibu"
              },
              {
                "time": 15.09,
                "text": "Strawberry ice cream, one spoon for two"
              },
              {
                "time": 20.37,
                "text": "And tradin' jackets"
              },
              {
                "time": 23.88,
                "text": "Laughin' 'bout how small it looks on you"
              },
              {
                "time": 27.58,
                "text": "(Ha-ha, ha-ha, ha-ha, ha-ha-ha, ha-ha, ha-ha)"
              },
              {
                "time": 32.1,
                "text": "Watchin' reruns of Glee"
              },
              {
                "time": 36.43,
                "text": "Bein' annoyin', singin' in harmony"
              },
              {
                "time": 41.77,
                "text": "I bet she's braggin'"
              },
              {
                "time": 45.16,
                "text": "To all her friends, sayin' you're so unique, hm"
              },
              {
                "time": 51.66,
                "text": "So when you gonna tell her that we did that, too?"
              },
              {
                "time": 57.51,
                "text": "She thinks it's special, but it's all reused"
              },
              {
                "time": 62.74,
                "text": "That was our place, I found it first"
              },
              {
                "time": 65.32,
                "text": "I made the jokes you tell to her when she's with you"
              },
              {
                "time": 71.37,
                "text": "Do you get déjà vu when she's with you?"
              },
              {
                "time": 76.72,
                "text": "Do you get déjà vu? Ah, hm"
              },
              {
                "time": 82.15,
                "text": "Do you get déjà vu, huh?"
              },
              {
                "time": 86.32,
                "text": ""
              },
              {
                "time": 95.08,
                "text": "Do you call her, almost say my name?"
              },
              {
                "time": 99.83,
                "text": "'Cause let's be honest, we kinda do sound the same"
              },
              {
                "time": 105.09,
                "text": "Another actress"
              },
              {
                "time": 108.45,
                "text": "I hate to think that I was just your type"
              },
              {
                "time": 113.27000000000001,
                "text": ""
              },
              {
                "time": 115.75999999999999,
                "text": "And I bet that she knows Billy Joel"
              },
              {
                "time": 119.00999999999999,
                "text": "'Cause you played her \"Uptown Girl\""
              },
              {
                "time": 121.58,
                "text": "You're singin' it together"
              },
              {
                "time": 123.87,
                "text": "Now I bet you even tell her how you love her"
              },
              {
                "time": 129.7,
                "text": "In between the chorus and the verse (ooh) (I love you)"
              },
              {
                "time": 136.41,
                "text": "So when you gonna tell her that we did that, too?"
              },
              {
                "time": 142,
                "text": "She thinks it's special, but it's all reused"
              },
              {
                "time": 147.32,
                "text": "That was the show we talked about"
              },
              {
                "time": 150.19,
                "text": "Played you the song she's singing now when she's with you"
              },
              {
                "time": 156.26,
                "text": "Do you get déjà vu when she's with you?"
              },
              {
                "time": 161.62,
                "text": "Do youYear of Release: 202111742"
              }
            ]
          },
          {
            "title": "Someone To Stay",
            "artist": "Vancouver Sleep Clinic",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Someone To Stay.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273dabc6fe9dd3454884cf65071",
            "lyrics": [
              {
                "time": 4.4,
                "text": "You were alone, left out in the cold"
              },
              {
                "time": 8.62,
                "text": "Clinging to the ruin of your broken home"
              },
              {
                "time": 12.73,
                "text": "Too lost and hurting to carry your load"
              },
              {
                "time": 17.28,
                "text": "We all need someone to hold"
              },
              {
                "time": 22.23,
                "text": ""
              },
              {
                "time": 30.27,
                "text": "You've been fighting the memory, all on your own"
              },
              {
                "time": 34.85,
                "text": "Nothing worsens, nothing grows"
              },
              {
                "time": 39.59,
                "text": "I know how it feels being by yourself in the rain"
              },
              {
                "time": 43.63,
                "text": "We all need someone to stay"
              },
              {
                "time": 48.69,
                "text": ""
              },
              {
                "time": 52.77,
                "text": "We all need someone to stay"
              },
              {
                "time": 57.06,
                "text": "Hear the fallen and lonely, cry out"
              },
              {
                "time": 61.05,
                "text": "Will you fix me up? Will you show me hope?"
              },
              {
                "time": 65.73,
                "text": "At the end of the day you were helpless"
              },
              {
                "time": 69.85,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 79.03999999999999,
                "text": "You've drunk it down and you've spat it out"
              },
              {
                "time": 83.3,
                "text": "And nothing tastes like the things you had"
              },
              {
                "time": 87.56,
                "text": "So tear it off, why don't you let them go?"
              },
              {
                "time": 92.37,
                "text": "We all need someone to stay"
              },
              {
                "time": 97.45,
                "text": ""
              },
              {
                "time": 101.11,
                "text": "We all need someone to stay"
              },
              {
                "time": 105.38,
                "text": "Hear the fallen and lonely, cry out"
              },
              {
                "time": 109.45,
                "text": "Will you fix me up? Will you show me hope?"
              },
              {
                "time": 114.31,
                "text": "At the end of the day we're helpless"
              },
              {
                "time": 118.13,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 124.11,
                "text": ""
              },
              {
                "time": 127.11,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 133.34,
                "text": ""
              },
              {
                "time": 135.77,
                "text": "Can you keep me close? Can you love me most?"
              },
              {
                "time": 142.34,
                "text": ""
              },
              {
                "time": 149.79,
                "text": "You were alone, left out in the cold"
              },
              {
                "time": 154.09,
                "text": "Clinging to the ruin of your broken home"
              },
              {
                "time": 158.39,
                "text": "Hear the falling and lonely, cry out"
              },
              {
                "time": 162.32,
                "text": "Will you fix me up?Year of Release: 2016604251"
              }
            ]
          },
          {
            "title": "End of Beginning",
            "artist": "Djo",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/End of Beginning.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273fddfffec51b4580acae727c1",
            "lyrics": [
              {
                "time": 4.08,
                "text": "Just one more tear to cry, one teardrop from my eye"
              },
              {
                "time": 12.35,
                "text": "You better save it for"
              },
              {
                "time": 16.19,
                "text": "The middle of the night when things aren't black and white"
              },
              {
                "time": 24.73,
                "text": "Enter, Troubadour"
              },
              {
                "time": 28.88,
                "text": "\"Remember 24?\""
              },
              {
                "time": 32.92,
                "text": ""
              },
              {
                "time": 37.73,
                "text": "And when I'm back in Chicago, I feel it"
              },
              {
                "time": 43.88,
                "text": "Another version of me, I was in it"
              },
              {
                "time": 49.85,
                "text": "I wave goodbye to the end of beginning"
              },
              {
                "time": 57.15,
                "text": ""
              },
              {
                "time": 61.13,
                "text": "This song has started now, and you're just finding out"
              },
              {
                "time": 69.38,
                "text": "Now isn't that a laugh?"
              },
              {
                "time": 73.17,
                "text": "A major sacrifice, but clueless at the time"
              },
              {
                "time": 81.75,
                "text": "Enter, Caroline"
              },
              {
                "time": 85.86,
                "text": "\"Just trust me, you'll be fine\""
              },
              {
                "time": 90.36,
                "text": "And when I'm back in Chicago, I feel it"
              },
              {
                "time": 96.36,
                "text": "Another version of me, I was in it"
              },
              {
                "time": 102.36,
                "text": "I wave goodbye to the end of beginning"
              },
              {
                "time": 106.72999999999999,
                "text": "(Goodbye, goodbye, goodbye, goodbye)"
              },
              {
                "time": 112.78999999999999,
                "text": "You take the man out of the city, not the city out the man"
              },
              {
                "time": 118.72999999999999,
                "text": "You take the man out of the city, not the city out theYear of Release: 20221,744946"
              }
            ]
          },
          {
            "title": "Dandelions",
            "artist": "Ruth B.",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Dandelions.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27397e971f3e53475091dc8d707",
            "lyrics": [
              {
                "time": 12.23,
                "text": "Maybe, it's the way you say my name"
              },
              {
                "time": 18.39,
                "text": "Maybe, it's the way you play your game"
              },
              {
                "time": 23.21,
                "text": "But it's so good, I've never known anybody like you"
              },
              {
                "time": 29.36,
                "text": "But it's so good, I've never dreamed of nobody like you"
              },
              {
                "time": 36.05,
                "text": "And I've heard of a love that comes once in a lifetime"
              },
              {
                "time": 42.96,
                "text": "And I'm pretty sure that you are that love of mine"
              },
              {
                "time": 48.52,
                "text": "'Cause I'm in a field of dandelions"
              },
              {
                "time": 52.45,
                "text": "Wishing on every one that you'll be mine, mine"
              },
              {
                "time": 58.76,
                "text": ""
              },
              {
                "time": 60.83,
                "text": "And I see forever in your eyes"
              },
              {
                "time": 64.52,
                "text": "I feel okay when I see you smile, smile"
              },
              {
                "time": 73.03999999999999,
                "text": "Wishing on dandelions all of the time"
              },
              {
                "time": 76.2,
                "text": "Praying to God that one day you'll be mine"
              },
              {
                "time": 79.1,
                "text": "Wishing on dandelions all of the time, all of the time"
              },
              {
                "time": 86.21000000000001,
                "text": "I think that you are the one for me"
              },
              {
                "time": 92.02000000000001,
                "text": "'Cause it gets so hard to breathe"
              },
              {
                "time": 97.13,
                "text": "When you're looking at me, I've never felt so alive and free"
              },
              {
                "time": 103.49000000000001,
                "text": "When you're looking at me, I've never felt so happy"
              },
              {
                "time": 110.08,
                "text": "And I've heard of a love that comes once in a lifetime"
              },
              {
                "time": 116.57,
                "text": "And I'm pretty sure that you are that love of mine"
              },
              {
                "time": 122.45,
                "text": "'Cause I'm in a field of dandelions"
              },
              {
                "time": 126.1,
                "text": "Wishing on every one that you'll be mine, mine"
              },
              {
                "time": 134.63,
                "text": "And I see forever in your eyes"
              },
              {
                "time": 138.34,
                "text": "I feel okay, when I see you smile, smile"
              },
              {
                "time": 146.86,
                "text": "Wishing on dandelions all of the time"
              },
              {
                "time": 150.09,
                "text": "Praying to God that one day you'll be mine"
              },
              {
                "time": 153.07999999999998,
                "text": "Wishing on dandelions all of the time, all of the time"
              },
              {
                "time": 156.51,
                "text": ""
              },
              {
                "time": 159.8,
                "text": "Dandelion, into the wind you go"
              },
              {
                "time": 163.09,
                "text": "Won't you let myYear of Release: 20177,9216,086"
              }
            ]
          },
          {
            "title": "drunk text",
            "artist": "Henry Moodie",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/drunk text.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273db94c82db2d786cd9e03a538",
            "lyrics": [
              {
                "time": 0.49,
                "text": "5th of November"
              },
              {
                "time": 4.03,
                "text": "When I walked you home"
              },
              {
                "time": 8.15,
                "text": "That's when I nearly said it"
              },
              {
                "time": 10.64,
                "text": "But then said \"Forget it,\" and froze"
              },
              {
                "time": 15.88,
                "text": "Do you remember?"
              },
              {
                "time": 19.33,
                "text": "You probably don't"
              },
              {
                "time": 23.32,
                "text": "'Cause the sparks in the sky took a hold of your eyes while we spoke"
              },
              {
                "time": 31.44,
                "text": "Yesterday, drank way too much"
              },
              {
                "time": 35.1,
                "text": "And stayed up too late"
              },
              {
                "time": 37.38,
                "text": "Started to write what I wanna say"
              },
              {
                "time": 40.97,
                "text": "Deleted the message"
              },
              {
                "time": 42.72,
                "text": "But I still remember it said"
              },
              {
                "time": 46.43,
                "text": "I wish I was who you drunk texted at midnight"
              },
              {
                "time": 52.32,
                "text": "Wish I was the reason you stay up till 3"
              },
              {
                "time": 55.91,
                "text": "And you can't fall asleep"
              },
              {
                "time": 58.19,
                "text": "Waiting for me to reply"
              },
              {
                "time": 61.71,
                "text": "I wish I was more than just someone you walk by"
              },
              {
                "time": 67.53,
                "text": "Wish I wasn't scared to be honest and open"
              },
              {
                "time": 71.07,
                "text": "Instead of just hoping"
              },
              {
                "time": 73.25,
                "text": "You'd feel what I'm feeling inside"
              },
              {
                "time": 78.52,
                "text": "April the 7th"
              },
              {
                "time": 81.42,
                "text": "And nothing has changed"
              },
              {
                "time": 85.88,
                "text": "It's hard to get by"
              },
              {
                "time": 87.99,
                "text": "When you're still on my mind every day"
              },
              {
                "time": 93,
                "text": "Sometimes I question"
              },
              {
                "time": 96.53,
                "text": "If you feel the same?"
              },
              {
                "time": 101.16,
                "text": "Do we make stupid jokes?"
              },
              {
                "time": 103.06,
                "text": "Tryna hide that we're both too afraid to say"
              },
              {
                "time": 109.09,
                "text": "I wish I was who you drunk texted at midnight"
              },
              {
                "time": 114.82,
                "text": "Wish I was the reason you stay up till 3"
              },
              {
                "time": 118.28,
                "text": "And you can't fall asleep"
              },
              {
                "time": 120.58,
                "text": "Waiting for me to reply"
              },
              {
                "time": 124.46,
                "text": "I wish I was more than just someone you walk by"
              },
              {
                "time": 129.83,
                "text": "Wish I wasn't scared to be honest and open"
              },
              {
                "time": 133.94,
                "text": "Instead of just hoping"
              },
              {
                "time": 135.84,
                "text": "You'd feel what I'mYear of Release: 20231,358620"
              }
            ]
          },
          {
            "title": "Enchanted",
            "artist": "Taylor Swift",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Enchanted.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273e1bc852a04501952c765d5cd",
            "lyrics": [
              {
                "time": 13.34,
                "text": "There I was again tonight"
              },
              {
                "time": 16.32,
                "text": "Forcing laughter, faking smiles"
              },
              {
                "time": 19.27,
                "text": "Same old tired, lonely place"
              },
              {
                "time": 24.91,
                "text": "Walls of insincerity"
              },
              {
                "time": 28.03,
                "text": "Shifting eyes and vacancy"
              },
              {
                "time": 30.92,
                "text": "Vanished when I saw your face"
              },
              {
                "time": 34.23,
                "text": "All I can say is it was enchanting to meet you"
              },
              {
                "time": 44.19,
                "text": ""
              },
              {
                "time": 48.31,
                "text": "Your eyes whispered, \"Have we met?\""
              },
              {
                "time": 51.44,
                "text": "Across the room, your silhouette"
              },
              {
                "time": 54.28,
                "text": "Starts to make its way to me"
              },
              {
                "time": 60,
                "text": "The playful conversation starts"
              },
              {
                "time": 63.18,
                "text": "Counter all your quick remarks"
              },
              {
                "time": 65.89,
                "text": "Like passing notes in secrecy"
              },
              {
                "time": 70.85,
                "text": "And it was enchanting to meet you"
              },
              {
                "time": 81.14,
                "text": "All I can say is I was enchanted to meet you"
              },
              {
                "time": 90.98,
                "text": ""
              },
              {
                "time": 95.89,
                "text": "This night is sparkling, don't you let it go"
              },
              {
                "time": 102.03999999999999,
                "text": "I'm wonderstruck, blushing all the way home"
              },
              {
                "time": 107.81,
                "text": "I'll spend forever wondering if you knew"
              },
              {
                "time": 113.28999999999999,
                "text": "I was enchanted to meet you"
              },
              {
                "time": 119.52000000000001,
                "text": ""
              },
              {
                "time": 124.35,
                "text": "The lingering question kept me up"
              },
              {
                "time": 127.42,
                "text": "2 a.m., who do you love?"
              },
              {
                "time": 130.32,
                "text": "I wonder 'til I'm wide awake"
              },
              {
                "time": 136.04,
                "text": "And now I'm pacing back and forth"
              },
              {
                "time": 139.18,
                "text": "Wishing you were at my door"
              },
              {
                "time": 141.94,
                "text": "I'd open up and you would say"
              },
              {
                "time": 146.57999999999998,
                "text": "Hey, it was enchanting to meet you"
              },
              {
                "time": 155.52,
                "text": ""
              },
              {
                "time": 157.54,
                "text": "All I know is I was enchanted to meet you"
              },
              {
                "time": 168.44,
                "text": ""
              },
              {
                "time": 171.94,
                "text": "This night is sparkling, don't you let it go"
              },
              {
                "time": 178.09,
                "text": "I'm wonderstruck, blushing all the way home"
              },
              {
                "time": 184.09,
                "text": "I'll spend forever wondering if you knew..."
              },
              {
                "time": 193.44,
                "text": ""
              },
              {
                "time": 195.65,
                "text": "This night is flawless, don't you let it go"
              },
              {
                "time": 201.54,
                "text": "I'm wonderstruck, dancing around all alone"
              },
              {
                "time": 207.31,
                "text": "I'll spend forever wondering if you knew"
              },
              {
                "time": 213.03,
                "text": "I was enchanted to meet you"
              },
              {
                "time": 219.66,
                "text": ""
              },
              {
                "time": 239.06,
                "text": "This is me praying that"
              },
              {
                "time": 242.15,
                "text": "This was the very first page"
              },
              {
                "time": 245.05,
                "text": "Not where the story line ends"
              },
              {
                "time": 247.9,
                "text": "My thoughts will echo your name"
              },
              {
                "time": 251.06,
                "text": "Until I see you again"
              },
              {
                "time": 253.8,
                "text": "These are the words I held back"
              },
              {
                "time": 256.9,
                "text": "As I was leaving too soon"
              },
              {
                "time": 259.86,
                "text": "I was enchanted to meet you"
              },
              {
                "time": 265.28,
                "text": "Please don't be in1,555955"
              }
            ]
          },
          {
            "title": "Love In The Dark",
            "artist": "Adele",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Love In The Dark.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2737b9888dc365b8f957c63df14",
            "lyrics": [
              {
                "time": 19.63,
                "text": "Take your eyes off of me so I can leave"
              },
              {
                "time": 27.91,
                "text": "I'm far too ashamed to do it with you watching me"
              },
              {
                "time": 36.94,
                "text": "This is never ending, we have been here before"
              },
              {
                "time": 45.48,
                "text": "But I can't stay this time 'cause I don't love you anymore"
              },
              {
                "time": 53.6,
                "text": "Please, stay where you are"
              },
              {
                "time": 57.88,
                "text": "Don't come any closer"
              },
              {
                "time": 62.38,
                "text": "Don't try to change my mind"
              },
              {
                "time": 66.75,
                "text": "I'm being cruel to be kind"
              },
              {
                "time": 71.24,
                "text": "I can't love you in the dark"
              },
              {
                "time": 79.49,
                "text": "It feels like we're oceans apart"
              },
              {
                "time": 88.64,
                "text": "There is so much space between us"
              },
              {
                "time": 92.71000000000001,
                "text": "Baby, we're already defeated"
              },
              {
                "time": 97.19,
                "text": "Ah-yeah-yeah-yeah-yeah-yeah-yeah-yeah"
              },
              {
                "time": 101.55,
                "text": "Everything changed me"
              },
              {
                "time": 106.92,
                "text": "You have given me something that I can't live without"
              },
              {
                "time": 115.42,
                "text": "You mustn't underestimate that when you are in doubt"
              },
              {
                "time": 124.04,
                "text": "But I don't want to carry on like everything is fine"
              },
              {
                "time": 132.68,
                "text": "The longer we ignore it, all the more that we will fight"
              },
              {
                "time": 140.64,
                "text": "Please, don't fall apart"
              },
              {
                "time": 145.28,
                "text": "I can't face your breaking heart"
              },
              {
                "time": 149.54,
                "text": "I'm trying to be brave"
              },
              {
                "time": 154.04,
                "text": "Stop asking me to stay"
              },
              {
                "time": 158.29,
                "text": "I can't love you in the dark"
              },
              {
                "time": 166.69,
                "text": "It feels like we're oceans apart"
              },
              {
                "time": 175.95,
                "text": "There is so much space between us"
              },
              {
                "time": 180.14,
                "text": "Baby, we're already defeated"
              },
              {
                "time": 184.41,
                "text": "Ah-yeah-yeah-yeah-yeah-yeah-yeah-yeah"
              },
              {
                "time": 188.83,
                "text": "Everything changed me"
              },
              {
                "time": 193.56,
                "text": "We're not the only ones, I don't regret a thing"
              },
              {
                "time": 197.75,
                "text": "Every wordYear of Release: 2015395167"
              }
            ]
          },
          {
            "title": "Right Now",
            "artist": "One Direction",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Right Now.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2732f76b797c382bedcafdf45e1",
            "lyrics": [
              {
                "time": 8.97,
                "text": "Lights go down, and the night is calling to me, yeah"
              },
              {
                "time": 16.85,
                "text": "I hear voices singing songs in the street"
              },
              {
                "time": 23.56,
                "text": "And I know that we won't be going home for so long, for so long"
              },
              {
                "time": 31.3,
                "text": "But I know that I won't be on my own, yeah"
              },
              {
                "time": 38.58,
                "text": "I love this feeling and"
              },
              {
                "time": 40.34,
                "text": "Right now"
              },
              {
                "time": 42.2,
                "text": "I wish you were here with me (Oh-ooh)"
              },
              {
                "time": 47.57,
                "text": "'Cause right now"
              },
              {
                "time": 50.25,
                "text": "Everything is new to me (Oh-ooh)"
              },
              {
                "time": 56.32,
                "text": "You know I can't fight the feeling"
              },
              {
                "time": 60.5,
                "text": "And every night I feel it"
              },
              {
                "time": 64.15,
                "text": "Right now"
              },
              {
                "time": 66.31,
                "text": "I wish you were here with me (Oh-ooh)"
              },
              {
                "time": 72.87,
                "text": "Late night spaces"
              },
              {
                "time": 76.72,
                "text": "With all our friends, you and me, yeah"
              },
              {
                "time": 80.96000000000001,
                "text": "Love these faces"
              },
              {
                "time": 84.99,
                "text": "Just like how it used to be"
              },
              {
                "time": 89.39,
                "text": "And we won't be going home"
              },
              {
                "time": 93.58,
                "text": "For so long, for so long"
              },
              {
                "time": 95.4,
                "text": "But I know, I won't be on my own"
              },
              {
                "time": 101.53,
                "text": "On my own, I'm feeling like"
              },
              {
                "time": 104.12,
                "text": "Right now"
              },
              {
                "time": 106.21000000000001,
                "text": "I wish you were here with me (Oh-ooh)"
              },
              {
                "time": 111.78,
                "text": "'Cause right now"
              },
              {
                "time": 114.1,
                "text": "Everything is new to me (Oh-ooh)"
              },
              {
                "time": 120.35,
                "text": "You know I can't fight the feeling"
              },
              {
                "time": 124.55,
                "text": "And every night I feel it"
              },
              {
                "time": 128.16,
                "text": "Right now"
              },
              {
                "time": 130.15,
                "text": "I wish you were here with me (Oh-ooh)"
              },
              {
                "time": 136.57999999999998,
                "text": "And IYear of Release: 2013873588"
              }
            ]
          },
          {
            "title": "Iris",
            "artist": "The Goo Goo Dolls",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Iris.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273eda9478c39a21e1cdc6609ca",
            "lyrics": [
              {
                "time": 12,
                "text": "And I'd give up forever to touch you"
              },
              {
                "time": 16.36,
                "text": "'Cause I know that you feel me somehow"
              },
              {
                "time": 21.03,
                "text": "You're the closest to heaven that I'll ever be"
              },
              {
                "time": 25.86,
                "text": "And I don't want to go home right now"
              },
              {
                "time": 30.82,
                "text": "And all I can taste is this moment"
              },
              {
                "time": 35.65,
                "text": "And all I can breathe is your life"
              },
              {
                "time": 40.15,
                "text": "And sooner or later, it's over"
              },
              {
                "time": 44.58,
                "text": "I just don't wanna miss you tonight"
              },
              {
                "time": 49.17,
                "text": "And I don't want the world to see me"
              },
              {
                "time": 53.96,
                "text": "'Cause I don't think that they'd understand"
              },
              {
                "time": 58.87,
                "text": "When everything's made to be broken"
              },
              {
                "time": 63.36,
                "text": "I just want you to know who I am"
              },
              {
                "time": 69.28999999999999,
                "text": ""
              },
              {
                "time": 80.02,
                "text": "And you can't fight the tears that ain't coming"
              },
              {
                "time": 84.21000000000001,
                "text": "Or the moment of truth in your lies"
              },
              {
                "time": 89.45,
                "text": "When everything feels like the movies"
              },
              {
                "time": 93.94,
                "text": "Yeah, you bleed just to know, you're alive"
              },
              {
                "time": 98.78,
                "text": "And I don't want the world to see me"
              },
              {
                "time": 103.25,
                "text": "'Cause I don't think that they'd understand"
              },
              {
                "time": 108.69,
                "text": "When everything's made to be broken"
              },
              {
                "time": 112.72,
                "text": "I just want you to know who I am"
              },
              {
                "time": 118.7,
                "text": ""
              },
              {
                "time": 210.59,
                "text": "And I don't want the world to see me"
              },
              {
                "time": 215.32999999999998,
                "text": "'Cause I don't think that they'd understand"
              },
              {
                "time": 220.28,
                "text": "When everything's made to be broken"
              },
              {
                "time": 224.45,
                "text": "I just wantYear of Release: 1998906114"
              }
            ]
          },
          {
            "title": "18",
            "artist": "One Direction",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/18.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4",
            "lyrics": [
              {
                "time": 14.61,
                "text": "I got a heart, and I got a soul"
              },
              {
                "time": 22.78,
                "text": "Believe me, I will use them both"
              },
              {
                "time": 30,
                "text": "We made a start"
              },
              {
                "time": 33.86,
                "text": "Be it a false one, I know"
              },
              {
                "time": 38.15,
                "text": "Baby, I don't want to feel alone"
              },
              {
                "time": 46.15,
                "text": "So kiss me where I lay down"
              },
              {
                "time": 49.95,
                "text": "My hands pressed to your cheeks"
              },
              {
                "time": 54.08,
                "text": "A long way from the playground"
              },
              {
                "time": 58.32,
                "text": "I have loved you since we were 18"
              },
              {
                "time": 62.87,
                "text": ""
              },
              {
                "time": 66.32,
                "text": "Long before we both thought the same thing"
              },
              {
                "time": 70.93,
                "text": "To be loved and to be in love"
              },
              {
                "time": 74.28,
                "text": "All I can do is say that these arms"
              },
              {
                "time": 78.24,
                "text": "Are made for holding you, oh-oh"
              },
              {
                "time": 82.4,
                "text": "I wanna love like you made me feel"
              },
              {
                "time": 86.82,
                "text": "When we were 18"
              },
              {
                "time": 91.34,
                "text": ""
              },
              {
                "time": 96.03,
                "text": "We took a chance"
              },
              {
                "time": 99.78,
                "text": "God knows we tried"
              },
              {
                "time": 104.07,
                "text": "Yet all along, I knew we'd be fine"
              },
              {
                "time": 111.15,
                "text": "So pour me a drink, oh love"
              },
              {
                "time": 115.09,
                "text": "And let's split the night wide open"
              },
              {
                "time": 119.14,
                "text": "And we'll see everything we can"
              },
              {
                "time": 122.47,
                "text": "Living love in slow motion, motion, motion"
              },
              {
                "time": 127.56,
                "text": "So kiss me where I lay down"
              },
              {
                "time": 131.45,
                "text": "My hands pressed to your cheeks"
              },
              {
                "time": 135.33,
                "text": "A long way from the playground"
              },
              {
                "time": 139.65,
                "text": "I have loved you since we were 18"
              },
              {
                "time": 147.24,
                "text": "Long before we both thought the same thing"
              },
              {
                "time": 152.21,
                "text": "To be loved and to be in love"
              },
              {
                "time": 155.56,
                "text": "And all I can do is say that these arms"
              },
              {
                "time": 159.47,
                "text": "Are made for holding you, oh-oh-oh"
              },
              {
                "time": 163.11,
                "text": "And I wanna love like you made me feel"
              },
              {
                "time": 168.38,
                "text": "When we were 18"
              },
              {
                "time": 172.9,
                "text": ""
              },
              {
                "time": 176.05,
                "text": "When we were 18"
              },
              {
                "time": 181.51,
                "text": "Oh, Lord, when we were 18"
              },
              {
                "time": 185.93,
                "text": "Kiss me where I lay down"
              },
              {
                "time": 189.41,
                "text": "My hands pressed to yourYear of Release: 20142,1261,354"
              }
            ]
          },
          {
            "title": "You Are Enough",
            "artist": "Sleeping At Last",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/You Are Enough.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273e46541278af6c9ba6881cb7e",
            "lyrics": [
              {
                "time": 25.39,
                "text": "When we woke up, the world was figured out"
              },
              {
                "time": 29.41,
                "text": "Beyond the beauty we've dreamt about"
              },
              {
                "time": 33.3,
                "text": "This brilliant light is brighter than we've known"
              },
              {
                "time": 37.33,
                "text": "Without our darkness to prove it so"
              },
              {
                "time": 41.49,
                "text": "Still, we can't help but to examine it"
              },
              {
                "time": 45.36,
                "text": "To add our question marks to periods"
              },
              {
                "time": 49.82,
                "text": "At the foot of our bed, we found an envelope"
              },
              {
                "time": 56.13,
                "text": "You're enough, you're enough, you're enough, you are enough"
              },
              {
                "time": 61.75,
                "text": "These little words, somehow they're changing us"
              },
              {
                "time": 65.8,
                "text": "You're enough, you're enough, you are enough"
              },
              {
                "time": 69.81,
                "text": "So we let our shadows fall away like dust"
              },
              {
                "time": 75.36,
                "text": ""
              },
              {
                "time": 102.44,
                "text": "When we grew up, our shadows grew up too"
              },
              {
                "time": 106.4,
                "text": "But they're just old ghosts that we grow attached to"
              },
              {
                "time": 110.53999999999999,
                "text": "The tragic flaw is that they hide the truth"
              },
              {
                "time": 117.32,
                "text": "That you're enough, you're enough, you're enough"
              },
              {
                "time": 120.67,
                "text": "I promise you're enough, you're enough, you're enough"
              },
              {
                "time": 124.91,
                "text": "I promise you're enough, you're enough, you're enough, I promise you"
              },
              {
                "time": 131.61,
                "text": ""
              },
              {
                "time": 133.63,
                "text": "You're enough, you're enough, you're enough, you areYear of Release: 2013365152"
              }
            ]
          },
          {
            "title": "Diary Depresiku",
            "artist": "Last Child",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Diary Depresiku.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273c6954b8d6cb1637075223bcc",
            "lyrics": [
              {
                "time": 24.58,
                "text": "Malam ini, hujan turun lagi"
              },
              {
                "time": 31.91,
                "text": "Bersama kenangan yang ungkit luka di hati"
              },
              {
                "time": 39.44,
                "text": "Luka yang harusnya dapat terobati"
              },
              {
                "time": 46.42,
                "text": "Yang kuharap tiada pernah terjadi"
              },
              {
                "time": 53.61,
                "text": "Ku ingat saat ayah pergi, dan kami mulai kelaparan"
              },
              {
                "time": 60.46,
                "text": "Hal yang biasa buat aku hidup di jalanan"
              },
              {
                "time": 67.66,
                "text": "Di saat ku belum mengerti arti sebuah perceraian"
              },
              {
                "time": 75.25,
                "text": "Yang hancurkan semua hal indah yang dulu pernah aku miliki"
              },
              {
                "time": 85.61,
                "text": "Wajar bila saat ini ku iri pada kalian"
              },
              {
                "time": 92.37,
                "text": "Yang hidup bahagia berkat suasana indah dalam rumah"
              },
              {
                "time": 99.92,
                "text": "Hal yang selalu aku bandingkan dengan hidupku yang kelam"
              },
              {
                "time": 107.28999999999999,
                "text": "Tiada harga diri agar hidupku terus bertahan"
              },
              {
                "time": 114.78,
                "text": ""
              },
              {
                "time": 127.23,
                "text": "Mungkin sejenak dapat aku lupakan"
              },
              {
                "time": 133.62,
                "text": "Dengan minuman keras yang saat ini kugenggam"
              },
              {
                "time": 141.27,
                "text": "Atau menggoreskan kaca di lenganku"
              },
              {
                "time": 147.59,
                "text": "Apa pun 'kan kulakukan, ku ingin lupakan"
              },
              {
                "time": 155.2,
                "text": "Namun, bila ku mulai sadar dari sisa mabuk semalam"
              },
              {
                "time": 162.31,
                "text": "Perihnya luka ini s'makin dalam kurasakan"
              },
              {
                "time": 169.62,
                "text": "Di saat ku telah mengerti betapa indah dicintai"
              },
              {
                "time": 177.22,
                "text": "Hal yang tak pernah kudapatkan sejak aku hidup di jalanan"
              },
              {
                "time": 187.4,
                "text": "Wajar bila saat ini ku iri pada kalian"
              },
              {
                "time": 194.79,
                "text": "Yang hidup bahagia berkat suasana indah dalam rumah"
              },
              {
                "time": 201.56,
                "text": "Hal yang selalu aku890498"
              }
            ]
          },
          {
            "title": "Sekuat Hatimu",
            "artist": "Last Child",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Sekuat Hatimu.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273382b1b7f79e2e760b9ac188e",
            "lyrics": [
              {
                "time": 43.36,
                "text": "Ku mohon hentikan air matamu mama"
              },
              {
                "time": 48.88,
                "text": "Bila ternyata harus putus sekolahku"
              },
              {
                "time": 53.76,
                "text": "Dan ku pilih gaya hidup yang tiada"
              },
              {
                "time": 59.55,
                "text": "Pernah indah di matamu"
              },
              {
                "time": 65.13,
                "text": "Tak mampu ku mengampuni diriku mama"
              },
              {
                "time": 71.03999999999999,
                "text": "Bila ku cerna harunya arti DO'amu"
              },
              {
                "time": 76.3,
                "text": "Yang kau panjatkan untukku saat ku bawa diriku"
              },
              {
                "time": 81.98,
                "text": "Semakin dalam ku terjatuh"
              },
              {
                "time": 87.24,
                "text": "Bila ku tak pernah sanggup untuk bangkit dari"
              },
              {
                "time": 92.78999999999999,
                "text": "Kegagalan yang tak seharusnya kau sesali"
              },
              {
                "time": 98.33,
                "text": "Karena kenyataan hidup yang aku jalani"
              },
              {
                "time": 103.78,
                "text": "Tak seindah saat ku dengar engkau bernyanyi"
              },
              {
                "time": 109.21000000000001,
                "text": "Peluklah lelah jiwaku mama"
              },
              {
                "time": 114.25999999999999,
                "text": "Yang terluka dipecundangi dunia"
              },
              {
                "time": 119.45,
                "text": "Hanya kasihmu yang mampu lindungi lemah hatiku"
              },
              {
                "time": 125.76,
                "text": "Yang tak sekuat hati ... mu"
              },
              {
                "time": 134.76,
                "text": ""
              },
              {
                "time": 152.72,
                "text": "Bila ku tak pernah sanggup untuk bangkit dari"
              },
              {
                "time": 157.85,
                "text": "Kegagalan yang tak seharusnya kau sesali"
              },
              {
                "time": 163.63,
                "text": "Karena kenyataan hidup yang aku jalani"
              },
              {
                "time": 168.62,
                "text": "Tak seindah saat ku dengar engkau bernyanyi"
              },
              {
                "time": 174.24,
                "text": "Peluklah lelah jiwaku mama"
              },
              {
                "time": 179.3,
                "text": "Yang terluka dipecundangi dunia"
              },
              {
                "time": 185,
                "text": "Hanya kasihmu yang mampu lindungi lemah hatiku"
              },
              {
                "time": 190.71,
                "text": "Yang tak sekuat hati ... mu"
              },
              {
                "time": 202.02,
                "text": "Peluk hati kecil yang penuh dendam ini"
              },
              {
                "time": 207.23,
                "text": "Ajari tuk menghapusYear of Release: 2012838536"
              }
            ]
          },
          {
            "title": "Rahasia Hati",
            "artist": "Nidji",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Rahasia Hati.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2733d4e60ab546528ace91c22fb",
            "lyrics": [
              {
                "time": 4.36,
                "text": "Ku coba merangkai kata cinta"
              },
              {
                "time": 10.25,
                "text": ""
              },
              {
                "time": 15.1,
                "text": "Walaupun ku bukanlah pujangga yang bisa"
              },
              {
                "time": 22.59,
                "text": "Tuliskan kata-kata yang indah"
              },
              {
                "time": 30.46,
                "text": "Nyatanya tak ada nyali untuk ungkapkan"
              },
              {
                "time": 39.18,
                "text": "I wanna love you like the hurricane"
              },
              {
                "time": 46.47,
                "text": "I wanna love you like a mountain rain"
              },
              {
                "time": 53.32,
                "text": "So wild so pure"
              },
              {
                "time": 56.92,
                "text": "So strong and crazy for you"
              },
              {
                "time": 61.67,
                "text": "Andai matamu melihat aku"
              },
              {
                "time": 69.47,
                "text": "Terungkap semua isi hatiku"
              },
              {
                "time": 77.24,
                "text": "Alam sadarku alam mimpiku"
              },
              {
                "time": 81.47,
                "text": "Semua milikmu andai kau tau"
              },
              {
                "time": 85.21000000000001,
                "text": "Andai kau tau"
              },
              {
                "time": 88.16,
                "text": "Rahasia Cintaku"
              },
              {
                "time": 94.67,
                "text": ""
              },
              {
                "time": 100.28,
                "text": "Berdoa dan beranikan diri"
              },
              {
                "time": 107.75999999999999,
                "text": "Sebelum semua ini terlambat terjadi"
              },
              {
                "time": 116.36,
                "text": "I wanna love you like the hurricane"
              },
              {
                "time": 124.83,
                "text": "I wanna love you like a mountain rain"
              },
              {
                "time": 131.55,
                "text": "So wild so pure"
              },
              {
                "time": 135.01,
                "text": "So strong and crazy for you"
              },
              {
                "time": 139.69,
                "text": "Andai matamu melihat aku"
              },
              {
                "time": 147.04,
                "text": "Terungkap semua isi hatiku"
              },
              {
                "time": 155.19,
                "text": "Alam sadarku alam mimpiku"
              },
              {
                "time": 158.94,
                "text": "SemuaYear of Release: 2013283174"
              }
            ]
          },
          {
            "title": "Keras Kepala",
            "artist": "Meiska",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Keras Kepala.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273781bc09c9a335b823a8cf707",
            "lyrics": [
              {
                "time": 19.69,
                "text": "Mengapa terulang lagi kisah yang sama?"
              },
              {
                "time": 27.54,
                "text": "Jatuh di salah yang sama"
              },
              {
                "time": 35.59,
                "text": "S'lalu jatuh cinta padanya yang tak cinta"
              },
              {
                "time": 43.78,
                "text": "Namun, mengapa kupaksa?"
              },
              {
                "time": 50.88,
                "text": "Apa ini cinta atau hanya sekedar bayang?"
              },
              {
                "time": 58.89,
                "text": "Apa rasa ini hanya sementara saja?"
              },
              {
                "time": 69.91,
                "text": "Ku harus sadar diri, tak harusnya begini"
              },
              {
                "time": 78.63,
                "text": "Masih keras kepala aku mencintai"
              },
              {
                "time": 86.18,
                "text": "Saat kau t'lah bilang kita tak akan panjang"
              },
              {
                "time": 94.67,
                "text": "Harusnya dari dulu ku hilang (kerasnya kepalaku)"
              },
              {
                "time": 104.17,
                "text": "Ku pernah menjadi yang paling jatuh hati"
              },
              {
                "time": 111.71000000000001,
                "text": "Tak pantaskah ku dicintai? (Apa ini cinta?)"
              },
              {
                "time": 119.25,
                "text": "Apa ini cinta atau hanya sekedar bayang?"
              },
              {
                "time": 127.32,
                "text": "Apa rasa ini hanya sementara saja?"
              },
              {
                "time": 138.57,
                "text": "Ku harus sadar diri, tak harusnya begini"
              },
              {
                "time": 147.02,
                "text": "Masih keras kepala aku mencintai"
              },
              {
                "time": 154.76,
                "text": "Saat kau t'lah bilang kita tak akan panjang"
              },
              {
                "time": 163.19,
                "text": "Harusnya dari dulu ku hilang, wo-wo-woh"
              },
              {
                "time": 172.74,
                "text": "Aku pernah menjadi yang paling keras jatuh hati"
              },
              {
                "time": 180.8,
                "text": "Perjuangkan cinta tanpa henti"
              },
              {
                "time": 186.95,
                "text": "Namun, tak semua yang kuingini"
              },
              {
                "time": 193.56,
                "text": "Bisa kumiliki meski patah hati"
              },
              {
                "time": 208.11,
                "text": "Ku harus sadar diri, tak harusnya10938"
              }
            ]
          },
          {
            "title": "Duka",
            "artist": "Last Child",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Duka.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2733e19058e3db31816a65baf39",
            "lyrics": [
              {
                "time": 21.94,
                "text": "Kau membunuhku dengan kepedihan ini"
              },
              {
                "time": 28.96,
                "text": "Kau hempaskanku ke dalam retaknya hati"
              },
              {
                "time": 36.27,
                "text": "Hingga air mata tak mampu 'tuk melukiskan perih"
              },
              {
                "time": 43.39,
                "text": "Yang kau ukir dalam hati ini"
              },
              {
                "time": 54.08,
                "text": "Kau hancurkan diriku saat engkau pergi"
              },
              {
                "time": 60.92,
                "text": "Setelah kau patahkan sayap ini"
              },
              {
                "time": 68.22,
                "text": "Hingga ku takkan bisa 'tuk terbang tinggi lagi"
              },
              {
                "time": 75.08,
                "text": "Dan mencari bintang yang dapat menggantikanmu"
              },
              {
                "time": 82.28,
                "text": "Sampai kini masih kucoba"
              },
              {
                "time": 85.9,
                "text": "'Tuk terjaga dari mimpiku"
              },
              {
                "time": 89.5,
                "text": "Yang buatku tak sadar bahwa kau bukan lagi milikku"
              },
              {
                "time": 96.46000000000001,
                "text": "Walau hati tak akan pernah"
              },
              {
                "time": 100.13,
                "text": "Dapat melupakan dirimu"
              },
              {
                "time": 103.66,
                "text": "Dan tiap tetes air mata yang jatuh, kuatkan rinduku"
              },
              {
                "time": 111.02000000000001,
                "text": "Pada indah bayangmu, canda tawamu"
              },
              {
                "time": 117.85,
                "text": "Pada indahnya duka dalam kenangan kita"
              },
              {
                "time": 131.32,
                "text": ""
              },
              {
                "time": 136.39,
                "text": ""
              },
              {
                "time": 139.35,
                "text": "Kau hancurkan diriku saat engkau pergi"
              },
              {
                "time": 146.38,
                "text": "Setelah kau patahkan sayap ini"
              },
              {
                "time": 153.47,
                "text": "Hingga ku takkan bisa 'tuk terbang tinggi lagi"
              },
              {
                "time": 160.66,
                "text": "Dan mencari bintang yang dapat menggantikanmu"
              },
              {
                "time": 167.77,
                "text": "Sampai kini masih kucoba (masih kucoba)"
              },
              {
                "time": 171.46,
                "text": "'Tuk terjaga dari mimpiku"
              },
              {
                "time": 174.82,
                "text": "Yang buatku tak sadar bahwa kau bukan lagi milikku"
              },
              {
                "time": 181.91,
                "text": "Walau hati tak akan pernah (tak akan pernah)"
              },
              {
                "time": 185.55,
                "text": "Dapat melupakan dirimu"
              },
              {
                "time": 188.94,
                "text": "Dan tiap tetes air mata yang jatuh, kuatkan rinduku"
              },
              {
                "time": 196.98,
                "text": "Pada indah bayangmu, candaYear of Release: 20162,0031,381"
              }
            ]
          },
          {
            "title": "Mati-Matian",
            "artist": "Mahalini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Mati-Matian.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273a053b3768be58a7117cc322b",
            "lyrics": [
              {
                "time": 19.35,
                "text": "Kita adalah dua insan penuh cinta"
              },
              {
                "time": 28.51,
                "text": "Di awal tercipta kisah kita"
              },
              {
                "time": 35.93,
                "text": "Manis tuturmu buatku terpana"
              },
              {
                "time": 46.53,
                "text": "Bagiku kau sempurna"
              },
              {
                "time": 52.75,
                "text": "Memang benar semua kata mereka"
              },
              {
                "time": 62.53,
                "text": "Benar ku t'lah dibutakan cinta"
              },
              {
                "time": 69.16,
                "text": "Tak hanya sekali kau khianati"
              },
              {
                "time": 77.11,
                "text": "Sudah, cukup ku tak tahan lagi"
              },
              {
                "time": 89.6,
                "text": "Mati-matian ku membelamu di depan mereka"
              },
              {
                "time": 97.86,
                "text": "Walau sakit, tetap kupercaya kau beda dari lainnya"
              },
              {
                "time": 106.38,
                "text": "Habis-habisan ku dibohongi, sayang ini tetap sama"
              },
              {
                "time": 114.9,
                "text": "Tuhan, ini cinta atau bodoh?"
              },
              {
                "time": 120.25,
                "text": "Habis pikir dengan sifatmu itu"
              },
              {
                "time": 126.55,
                "text": "Berulang kali kumaafkan"
              },
              {
                "time": 130.54,
                "text": "Berulang lagi kaulakukan"
              },
              {
                "time": 136.94,
                "text": "Satu-satunya kebanggaanku"
              },
              {
                "time": 143.54,
                "text": "Kini jadi rasa sakit terdalam"
              },
              {
                "time": 151.79,
                "text": "Mati-matian ku membelamu di depan mereka"
              },
              {
                "time": 158.95,
                "text": "Mati-matian ku membelamu di depan mereka"
              },
              {
                "time": 167.92000000000002,
                "text": "Walau sakit, tetap kupercaya kau beda dari lainnya"
              },
              {
                "time": 176.17000000000002,
                "text": "Habis-habisan ku dibohongi, sayang ini tetap sama"
              },
              {
                "time": 184.93,
                "text": "Tuhan,6618"
              }
            ]
          },
          {
            "title": "Masing Masing",
            "artist": "Ernie Zakri & Ade Govinda",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Masing Masing.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273b2854c3503911cc7625992e2",
            "lyrics": [
              {
                "time": 1.05,
                "text": "Tapi aku letih juga"
              },
              {
                "time": 8.15,
                "text": "Lebih baik kita masing-masing"
              },
              {
                "time": 16.75,
                "text": "Pernah sesayang itu, pernah"
              },
              {
                "time": 23.88,
                "text": "Pernah secinta itu, pernah"
              },
              {
                "time": 31.12,
                "text": "Pernah sedalam itu, tapi itu dulu"
              },
              {
                "time": 39.82,
                "text": "Sebelum ada hati lain"
              },
              {
                "time": 47.13,
                "text": "Pernah berjuang, itu pernah"
              },
              {
                "time": 54.28,
                "text": "Pernah terjatuh, juga pernah"
              },
              {
                "time": 61.33,
                "text": "Pernah bersama kita, tapi itu dulu"
              },
              {
                "time": 68.6,
                "text": "Pada akhirnya pisah juga"
              },
              {
                "time": 75.02,
                "text": "Aku tak kauanggap ada cerita"
              },
              {
                "time": 81.93,
                "text": "Aku tak kauanggap ada derita"
              },
              {
                "time": 89.18,
                "text": "Tapi kamu berlaku bagai pemilik ragaku"
              },
              {
                "time": 95.97,
                "text": "Tapi aku letih juga"
              },
              {
                "time": 102.95,
                "text": "Lebih baik kita masing-masing"
              },
              {
                "time": 115.28999999999999,
                "text": "Pernah sesakit ini, pernah"
              },
              {
                "time": 122.33,
                "text": "Tapi kamu yang paling sakit"
              },
              {
                "time": 129.57,
                "text": "Walau rasaku ini sakit tak berdarah"
              },
              {
                "time": 136.76,
                "text": "Apa rasanya jadi aku?"
              },
              {
                "time": 142.95,
                "text": "Aku tak kauanggap ada cerita"
              },
              {
                "time": 150.13,
                "text": "Aku tak kauanggap ada derita"
              },
              {
                "time": 157.26,
                "text": "Tapi kamu berlaku bagai274181"
              }
            ]
          },
          {
            "title": "Bertaut",
            "artist": "Nadin Amizah",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Bertaut.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2732af8d850fa9388950b9320e7",
            "lyrics": [
              {
                "time": 21.38,
                "text": "Bun, hidup berjalan seperti bajingan"
              },
              {
                "time": 29.45,
                "text": ""
              },
              {
                "time": 31.8,
                "text": "Seperti landak yang tak punya teman"
              },
              {
                "time": 39.43,
                "text": ""
              },
              {
                "time": 42.44,
                "text": "Ia menggonggong bak suara hujan"
              },
              {
                "time": 52.5,
                "text": "Dan kau pangeranku, mengambil peran"
              },
              {
                "time": 60.55,
                "text": ""
              },
              {
                "time": 64.07,
                "text": "Bun, kalau saat hancur ku disayang"
              },
              {
                "time": 72.14,
                "text": ""
              },
              {
                "time": 74.27,
                "text": "Apalagi saat ku jadi juara"
              },
              {
                "time": 85.07,
                "text": "Saat tak tahu arah kau di sana"
              },
              {
                "time": 95.87,
                "text": "Menjadi gagah saat ku tak bisa"
              },
              {
                "time": 106.03,
                "text": "Sedikit kujelaskan tentangku dan kamu"
              },
              {
                "time": 111.6,
                "text": "Agar seisi dunia tahu"
              },
              {
                "time": 117.13,
                "text": "Keras kepalaku sama denganmu"
              },
              {
                "time": 122.3,
                "text": "Caraku marah, caraku tersenyum"
              },
              {
                "time": 127.72,
                "text": "Seperti detak jantung yang bertaut"
              },
              {
                "time": 133.03,
                "text": "Nyawaku nyala karena denganmu"
              },
              {
                "time": 138.35,
                "text": "Aku masih ada sampai di sini"
              },
              {
                "time": 143.75,
                "text": "Melihatmu kuat setengah mati"
              },
              {
                "time": 149.11,
                "text": "Seperti detak jantung yang bertaut"
              },
              {
                "time": 154.36,
                "text": "Nyawaku nyala karena denganmu"
              },
              {
                "time": 159.96,
                "text": ""
              },
              {
                "time": 170.78,
                "text": "Bun, aku masih tak mengerti banyak hal"
              },
              {
                "time": 179.13,
                "text": ""
              },
              {
                "time": 181.16,
                "text": "Semuanya berenang di kepala"
              },
              {
                "time": 188.29,
                "text": ""
              },
              {
                "time": 191.69,
                "text": "Dan kau dan semua yang kau tahu tentangnya"
              },
              {
                "time": 202.57,
                "text": "Menjadi jawab saat ku bertanya"
              },
              {
                "time": 212.75,
                "text": "Sedikit kujelaskan tentangku dan kamu"
              },
              {
                "time": 218.48,
                "text": "Agar seisi dunia tahu"
              },
              {
                "time": 223.74,
                "text": "Keras kepalaku sama denganmu"
              },
              {
                "time": 228.92000000000002,
                "text": "Caraku marah,Year of Release: 20204,5343,613"
              }
            ]
          },
          {
            "title": "Bawa Dia Kembali",
            "artist": "Mahalini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Bawa Dia Kembali.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736f713eb92ebf7ca05a562542",
            "lyrics": [
              {
                "time": 6.88,
                "text": "Malam ini, aku menanti"
              },
              {
                "time": 13.62,
                "text": "Kedatanganmu, mengisi sepiku"
              },
              {
                "time": 20.72,
                "text": "Lama terasa waktu bergulir"
              },
              {
                "time": 27.65,
                "text": "Kar'na dirimu tak bersamaku"
              },
              {
                "time": 37.75,
                "text": "Oh, Tuhan, tolonglah, bawa dia kembali"
              },
              {
                "time": 44.31,
                "text": "Bersamaku di sini, menjagaku selalu"
              },
              {
                "time": 51.95,
                "text": "Dengarlah doaku yang tak pernah meminta"
              },
              {
                "time": 58.68,
                "text": "Bawa dia kembali bersama walau hanya sesaat"
              },
              {
                "time": 68.77,
                "text": ""
              },
              {
                "time": 73.94,
                "text": "Masih terasa hembus nafasmu"
              },
              {
                "time": 80.47,
                "text": "Saat ku gundah, kaulipur laraku"
              },
              {
                "time": 88.05,
                "text": "Kini terasa semakin dalam"
              },
              {
                "time": 94.8,
                "text": "Rasa rinduku pada dirimu"
              },
              {
                "time": 101.22,
                "text": "Oh, Tuhan, tolonglah, bawa dia kembali"
              },
              {
                "time": 108.06,
                "text": "Bersamaku di sini, menjagaku selalu"
              },
              {
                "time": 115.47,
                "text": "Dengarlah doaku yang tak pernah meminta"
              },
              {
                "time": 122.05,
                "text": "Bawa dia kembali bersama walau hanya sesaat, yeah-yeah-hey"
              },
              {
                "time": 137.46,
                "text": "Tuhan, tolong, dengar doaku"
              },
              {
                "time": 140.71,
                "text": "Bawa dia kembali padaku (kembali padaku) oh-uh"
              },
              {
                "time": 150.78,
                "text": "Oh, Tuhan, tolonglah, bawa dia kembali"
              },
              {
                "time": 157.32999999999998,
                "text": "Bersamaku di sini menjagaku selalu"
              },
              {
                "time": 164.6,
                "text": "Dengarlah doaku yang tak pernah meminta"
              },
              {
                "time": 171.47,
                "text": "(Bawa diaYear of Release: 20161,050591"
              }
            ]
          },
          {
            "title": "Kisah Tanpa Dirimu",
            "artist": "Anggis Devaki",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Kisah Tanpa Dirimu.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273876476b0244c1943097100ff",
            "lyrics": [
              {
                "time": 8.72,
                "text": "Ah"
              },
              {
                "time": 17.42,
                "text": "Dari caramu bicara, telah buatku percaya"
              },
              {
                "time": 25.24,
                "text": "Bahwa cinta itu ada, ku pantas 'tuk dapatkannya"
              },
              {
                "time": 33.08,
                "text": "Namun kini t'lah berbeda, kau bukan orang yang sama"
              },
              {
                "time": 40.94,
                "text": "Ku besar hati mencoba, hapuskan pilu yang ada"
              },
              {
                "time": 48.88,
                "text": "Hancurnya aku"
              },
              {
                "time": 56.04,
                "text": "Ternyata kau tak cinta"
              },
              {
                "time": 62.47,
                "text": ""
              },
              {
                "time": 67.75,
                "text": "Kau tinggalkan aku"
              },
              {
                "time": 71.5,
                "text": "Teganya hatimu"
              },
              {
                "time": 75.39,
                "text": "Kau lupakan aku"
              },
              {
                "time": 78.85,
                "text": "Seolah ku tak pernah ada di hatimu"
              },
              {
                "time": 85.84,
                "text": "Akankah ku mampu?"
              },
              {
                "time": 89.81,
                "text": "Menjalani kisah tanpa dirimu"
              },
              {
                "time": 98.33,
                "text": "Namun kini kau t'lah berbeda (berbeda)"
              },
              {
                "time": 103.66,
                "text": "Kau bukan orang yang sama"
              },
              {
                "time": 106.55,
                "text": "Ku besar hati mencoba (mencoba)"
              },
              {
                "time": 111.55,
                "text": "Hapuskan pilu yang ada"
              },
              {
                "time": 114.7,
                "text": "Hancur, hancurnya aku"
              },
              {
                "time": 122.96,
                "text": "Ternyata, kau tak cinta"
              },
              {
                "time": 130,
                "text": "Kau tinggalkan aku (tinggalkan aku)"
              },
              {
                "time": 134.59,
                "text": "Teganya hatimu (oh teganya)"
              },
              {
                "time": 138.36,
                "text": "Kau lupakan aku"
              },
              {
                "time": 141.38,
                "text": "Seolah ku tak pernah ada di hatimu"
              },
              {
                "time": 148.27,
                "text": "Akankah ku mampu?"
              },
              {
                "time": 151.92000000000002,
                "text": "Menjalani kisah tanpa dirimu"
              },
              {
                "time": 160.82,
                "text": "Semua yang t'lah ku jalani"
              },
              {
                "time": 167.57,
                "text": "Kini tak berarti"
              },
              {
                "time": 171.46,
                "text": "Kau sia-siakanYear of Release: 202413783"
              }
            ]
          },
          {
            "title": "Aku Yang Jatuh Cinta",
            "artist": "Dudy Oris",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Aku Yang Jatuh Cinta.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736dabfe1ad020adcd7b6c2108",
            "lyrics": [
              {
                "time": 12.96,
                "text": "Bukan 'ku tanpa alasan"
              },
              {
                "time": 18.38,
                "text": "Berulang ingin bertemu"
              },
              {
                "time": 24.06,
                "text": "Aku punya perasaan"
              },
              {
                "time": 29.49,
                "text": "Nampaknya kau tak mengerti"
              },
              {
                "time": 35.47,
                "text": "Tahukah dirimu?"
              },
              {
                "time": 38.85,
                "text": "Tahukah hatimu?"
              },
              {
                "time": 41.38,
                "text": "Berulang kuketuk"
              },
              {
                "time": 43.94,
                "text": "Aku mencintamu"
              },
              {
                "time": 47.22,
                "text": "Tapi dirimu tak pernah sadari"
              },
              {
                "time": 52.32,
                "text": "Aku yang jatuh cinta"
              },
              {
                "time": 61.44,
                "text": ""
              },
              {
                "time": 64.68,
                "text": "Aku selalu menemani"
              },
              {
                "time": 69.47,
                "text": "Saat kau rapuh dan jatuh"
              },
              {
                "time": 74.95,
                "text": "Namun saat kau bahagia"
              },
              {
                "time": 80.16,
                "text": "Nampaknya 'ku terlupakan"
              },
              {
                "time": 85.75,
                "text": "Tahukah dirimu?"
              },
              {
                "time": 88.94,
                "text": "Tahukah hatimu?"
              },
              {
                "time": 91.5,
                "text": "Berulang kuketuk"
              },
              {
                "time": 94.36,
                "text": "Aku mencintamu"
              },
              {
                "time": 97.61,
                "text": "Tapi dirimu tak pernah sadari"
              },
              {
                "time": 102.67,
                "text": "Aku yang jatuh cinta"
              },
              {
                "time": 111.63,
                "text": "(Haruskah kau kuberi kesempatan?)"
              },
              {
                "time": 116.88,
                "text": "Ingin aku jadi kekasih yang baik"
              },
              {
                "time": 122.11,
                "text": "Berikan aku kesempatan"
              },
              {
                "time": 127.26,
                "text": ""
              },
              {
                "time": 130.95,
                "text": "Tahukah dirimu?"
              },
              {
                "time": 134.02,
                "text": "TahukahYear of Release: 2021498282"
              }
            ]
          },
          {
            "title": "Dia Masa Lalumu, Aku Masa Depanmu",
            "artist": "Vionita",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Dia Masa Lalumu, Aku Masa Depanmu.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b27374384f1bbafdb90349d13f76",
            "lyrics": [
              {
                "time": 19.94,
                "text": "Aku tak tahu harus gimana lagi"
              },
              {
                "time": 23.8,
                "text": "Untuk mencoba buatmu senyum lagi"
              },
              {
                "time": 27.74,
                "text": "Semuanya kucoba"
              },
              {
                "time": 31.52,
                "text": "Tapi tetap tak bisa"
              },
              {
                "time": 35.37,
                "text": "Aku tahu dia hancurkan hatimu"
              },
              {
                "time": 39.11,
                "text": "Dan membuatmu tak bisa utuh lagi"
              },
              {
                "time": 42.93,
                "text": "Tapi aku berbeda"
              },
              {
                "time": 46.62,
                "text": "Beriku kesempatan"
              },
              {
                "time": 49.73,
                "text": "Tetapi sabarku juga ada batasnya"
              },
              {
                "time": 57.21,
                "text": "Sebaiknya ku bisa menyerah juga"
              },
              {
                "time": 64.74,
                "text": "Dia masa lalumu"
              },
              {
                "time": 68.78999999999999,
                "text": "Aku masa depanmu"
              },
              {
                "time": 72.5,
                "text": "Dia hancurkan kamu"
              },
              {
                "time": 76.28,
                "text": "Kususun kembali hatimu"
              },
              {
                "time": 80.08,
                "text": "Tapi mengapa kamu"
              },
              {
                "time": 84.35,
                "text": "Masih terpenjara bayangnya?"
              },
              {
                "time": 88.24,
                "text": "Aku sungguh cinta"
              },
              {
                "time": 92.09,
                "text": "Tapi mungkin kamu yang bodoh"
              },
              {
                "time": 101.84,
                "text": "Ho-oh"
              },
              {
                "time": 103.81,
                "text": "Aku tahu dia hancurkan hatimu"
              },
              {
                "time": 107.69,
                "text": "Dan membuatmu tak bisa utuh lagi"
              },
              {
                "time": 111.45,
                "text": "Tapi aku berbeda"
              },
              {
                "time": 115.22,
                "text": "Beriku kesempatan"
              },
              {
                "time": 118.32,
                "text": "Tetapi sabarku juga ada batasnya"
              },
              {
                "time": 126.04,
                "text": "Sebaiknya aku bisa menyerah juga"
              },
              {
                "time": 133.39,
                "text": "Dia masa lalumu"
              },
              {
                "time": 137.04,
                "text": "Aku masa depanmu"
              },
              {
                "time": 140.88,
                "text": "Dia hancurkan kamu"
              },
              {
                "time": 144.74,
                "text": "Kususun kembali hatimu"
              },
              {
                "time": 148.64,
                "text": "Tapi mengapa kamu"
              },
              {
                "time": 152.99,
                "text": "Masih terpenjara bayangnya?"
              },
              {
                "time": 157,
                "text": "Aku sungguhYear of Release: 20214812"
              }
            ]
          },
          {
            "title": "Tanpa Pesan Terakhir",
            "artist": "Seventeen",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Tanpa Pesan Terakhir.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273687ee7cccc410bb76f8bad42",
            "lyrics": [
              {
                "time": 19.07,
                "text": "Hidup terlalu singkat untuk cerita"
              },
              {
                "time": 28.31,
                "text": "Tentang kau dan aku"
              },
              {
                "time": 32.76,
                "text": "Kau pergi tanpa pesan terakhir dariku"
              },
              {
                "time": 42.58,
                "text": "Yang menyertaimu"
              },
              {
                "time": 46.79,
                "text": "Kau s'lalu kukenang"
              },
              {
                "time": 54.47,
                "text": "Saat"
              },
              {
                "time": 59.7,
                "text": "Kaulangkahkan kakimu 'tuk tinggalkanku"
              },
              {
                "time": 67.93,
                "text": "Dan kau pergi jauh"
              },
              {
                "time": 71.41,
                "text": "Untuk selamanya"
              },
              {
                "time": 75.61,
                "text": "Hingga"
              },
              {
                "time": 81.08,
                "text": "Bayangmu pun tak mampu kulihat lagi"
              },
              {
                "time": 89.1,
                "text": "Kini kau t'lah pergi jauh"
              },
              {
                "time": 93.45,
                "text": "Untuk selamanya"
              },
              {
                "time": 100.85,
                "text": "Ada yang hilang dalam hari-hariku"
              },
              {
                "time": 110.15,
                "text": "Saat tak bersamamu"
              },
              {
                "time": 114.35,
                "text": "Kau s'lalu kukenang"
              },
              {
                "time": 121.58,
                "text": "Dan s'lalu kukenang, wo-oh"
              },
              {
                "time": 128.92,
                "text": "Saat"
              },
              {
                "time": 134.52,
                "text": "Kaulangkahkan kakimu 'tuk tinggalkanku"
              },
              {
                "time": 142.53,
                "text": "Dan kau pergi jauh"
              },
              {
                "time": 146.07999999999998,
                "text": "Untuk selamanya"
              },
              {
                "time": 150.53,
                "text": "Hingga"
              },
              {
                "time": 155.9,
                "text": "Bayangmu pun tak mampu kulihat lagi"
              },
              {
                "time": 163.82,
                "text": "Kini kau t'lah pergi jauh"
              },
              {
                "time": 167.93,
                "text": "Untuk selamanya, oh-oh, oh-oh-oh"
              },
              {
                "time": 178.07999999999998,
                "text": ""
              },
              {
                "time": 203.78,
                "text": "Saat"
              },
              {
                "time": 209.37,
                "text": "Kaulangkahkan kakimuYear of Release: 20101,284349"
              }
            ]
          },
          {
            "title": "Janji Setia",
            "artist": "Tiara Andini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Janji Setia.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273937d621f0025409ee44285d1",
            "lyrics": [
              {
                "time": 15.81,
                "text": "Kini aku mengerti, semua ini terjadi"
              },
              {
                "time": 23.33,
                "text": "Tak dipungkiri, hanya kamu yang kumiliki"
              },
              {
                "time": 31.07,
                "text": "Bumi di kala sunyi, kamu takkan sendiri"
              },
              {
                "time": 38.45,
                "text": "Aku di sini menantimu kembali"
              },
              {
                "time": 46.12,
                "text": "Andai saja ku bisa"
              },
              {
                "time": 50.22,
                "text": "Genggam tanganmu"
              },
              {
                "time": 53.38,
                "text": "Takkan ada kata rindu"
              },
              {
                "time": 57.59,
                "text": "Di dalam hatiku"
              },
              {
                "time": 63.7,
                "text": "Tahukah dirimu betapa diriku"
              },
              {
                "time": 72.13,
                "text": "Merindukan hadirmu ada di sini?"
              },
              {
                "time": 78.76,
                "text": "Percayalah, Kasih"
              },
              {
                "time": 83.86,
                "text": "Jarak dan waktu tak mampu menghapus"
              },
              {
                "time": 90.89,
                "text": "Janji setia menjaga hati"
              },
              {
                "time": 98.42,
                "text": "(Hu-uh-uh)"
              },
              {
                "time": 102.47999999999999,
                "text": "Andai saja ku bisa"
              },
              {
                "time": 106.47999999999999,
                "text": "Genggam tanganmu"
              },
              {
                "time": 109.75999999999999,
                "text": "Takkan ada kata rindu"
              },
              {
                "time": 113.63,
                "text": "Di dalam hatiku, oh-oh"
              },
              {
                "time": 119.93,
                "text": "Tahukah dirimu betapa diriku"
              },
              {
                "time": 128.24,
                "text": "Merindukan hadirmu ada di sini?"
              },
              {
                "time": 135.07,
                "text": "Percayalah, Kasih"
              },
              {
                "time": 140.25,
                "text": "Jarak dan waktu tak mampu menghapus (janganlah kauhapus)"
              },
              {
                "time": 147.3,
                "text": "Janji setia menjaga hati"
              },
              {
                "time": 153.07999999999998,
                "text": "Hujan turun mewakili hati"
              },
              {
                "time": 160.53,
                "text": "Terpa angin gambarkan resahku, ho-oh"
              },
              {
                "time": 167.96,
                "text": "Namun, kini pelangi (dan kini pelangi)"
              },
              {
                "time": 175.4,
                "text": "Datang menyinari kita"
              },
              {
                "time": 179.97,
                "text": "(Tahukah dirimuYear of Release: 2021335"
              }
            ]
          },
          {
            "title": "Tanpa Cinta",
            "artist": "Yovie & Nuno",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Tanpa Cinta.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2730b43cd27d3f8ab7e3b9069a8",
            "lyrics": [
              {
                "time": 15.83,
                "text": "Aku mencintaimu tanpa syarat"
              },
              {
                "time": 23.06,
                "text": "Aku rela menunggu sangat lama"
              },
              {
                "time": 29.95,
                "text": "Katamu suatu saat aku pasti"
              },
              {
                "time": 36.16,
                "text": "Jadi cintamu, satu cintamu"
              },
              {
                "time": 45,
                "text": "Aku ingin kau menerima seluruh hatiku"
              },
              {
                "time": 53.86,
                "text": "Aku ingin kau mengerti, di jiwaku hanya kamu"
              },
              {
                "time": 60.8,
                "text": "Namun bila kau tak bisa menerima aku"
              },
              {
                "time": 67.89,
                "text": "Lebih baik ku hidup tanpa cinta"
              },
              {
                "time": 74.26,
                "text": ""
              },
              {
                "time": 79.26,
                "text": "Haruskah ku bersabar tanpa batas"
              },
              {
                "time": 86.48,
                "text": "Aku masih ingat semua janjimu"
              },
              {
                "time": 93.37,
                "text": "Namun setalah kamu mengenal dia"
              },
              {
                "time": 99.92,
                "text": "Kau berubah, kau tak sama"
              },
              {
                "time": 108.72,
                "text": "Aku ingin kau menerima seluruh hatiku"
              },
              {
                "time": 117.37,
                "text": "Aku ingin kau mengerti, di jiwaku hanya kamu"
              },
              {
                "time": 124.46,
                "text": "Namun bila kau tak bisa menerima aku"
              },
              {
                "time": 131.45,
                "text": "Lebih baik ku hidup tanpa cinta"
              },
              {
                "time": 140.36,
                "text": "Bodohkah diriku yang teralu setia padamu"
              },
              {
                "time": 154.51,
                "text": "Disaat kau tak sungguh sungguh"
              },
              {
                "time": 159.96,
                "text": "Mencintai aku (mencintai aku)"
              },
              {
                "time": 163.68,
                "text": "Menginginkan aku (menginginkan aku)"
              },
              {
                "time": 168.06,
                "text": "Ohh"
              },
              {
                "time": 169.55,
                "text": "(Aku ingin kau menerima seluruh hatiku)"
              },
              {
                "time": 172.32999999999998,
                "text": ""
              },
              {
                "time": 177.63,
                "text": "(Aku ingin kau mengerti, di jiwaku hanya kamu)"
              },
              {
                "time": 184.74,
                "text": "Namun bilaYear of Release: 2014459267"
              }
            ]
          },
          {
            "title": "Ku Ingin Pisah",
            "artist": "Nabila Taqiyyah",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Ku Ingin Pisah.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273b7044a4b1d903117ab7594b1",
            "lyrics": [
              {
                "time": 11.26,
                "text": "Sampai kapan ku harus menunggu?"
              },
              {
                "time": 16.23,
                "text": ""
              },
              {
                "time": 23.66,
                "text": "Kisah kita seperti yang dulu"
              },
              {
                "time": 31.23,
                "text": "Kar'na kini ku merasa sendiri"
              },
              {
                "time": 42.14,
                "text": "Aku tanya, \"Kapan ada waktu?\""
              },
              {
                "time": 48.04,
                "text": "Tak kudengar sedikit jawabmu"
              },
              {
                "time": 55.42,
                "text": "Salahkah aku bila mulai meragu?"
              },
              {
                "time": 66.28,
                "text": "Hanya pilu"
              },
              {
                "time": 69.28,
                "text": "Bukan lagi rindu dirimu"
              },
              {
                "time": 75.1,
                "text": "Hm-mm"
              },
              {
                "time": 77.94,
                "text": "Ku lelah"
              },
              {
                "time": 81.1,
                "text": "Kurasa cukup di sini"
              },
              {
                "time": 86.97,
                "text": "Kau berubah, tak peduli"
              },
              {
                "time": 92.86,
                "text": "Dulu indah, kini cinta pergi sudah"
              },
              {
                "time": 98.28999999999999,
                "text": ""
              },
              {
                "time": 101.97,
                "text": "Ku menyerah"
              },
              {
                "time": 105.47,
                "text": "Tak seperti dulu lagi"
              },
              {
                "time": 111.53,
                "text": "Habis air mata ini"
              },
              {
                "time": 117.5,
                "text": "Tapi, maaf, bila ku ingin pisah"
              },
              {
                "time": 121.89,
                "text": ""
              },
              {
                "time": 124.23,
                "text": "Ho-oh-oh-oh"
              },
              {
                "time": 126.8,
                "text": "T'lah kucoba semua cara"
              },
              {
                "time": 132.63,
                "text": "Untuk pertahankan kita"
              },
              {
                "time": 137.63,
                "text": "Tapi tak bisa semuanya kupaksa (semuanya kupaksa)"
              },
              {
                "time": 145.04,
                "text": "Pergi, janganlah kembali (janganlah kembali)"
              },
              {
                "time": 150.92000000000002,
                "text": ""
              },
              {
                "time": 161.45,
                "text": "Oh, tapi, maaf, bila ku ingin pisah"
              },
              {
                "time": 166.18,
                "text": ""
              },
              {
                "time": 175.71,
                "text": "Ho-oh-uh-oh"
              },
              {
                "time": 177.96,
                "text": "KuYear of Release: 2023313"
              }
            ]
          },
          {
            "title": "Bohongi Hati",
            "artist": "Mahalini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Bohongi Hati.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736f713eb92ebf7ca05a562542",
            "lyrics": [
              {
                "time": 0.54,
                "text": "Aku tersiksa melihat semuanya berubah"
              },
              {
                "time": 11.24,
                "text": "Mengapa kau tak mau tahu?"
              },
              {
                "time": 18.34,
                "text": "Bagaimana hati ini tanpamu?"
              },
              {
                "time": 25.54,
                "text": "Cintamu?"
              },
              {
                "time": 29.28,
                "text": "Oh, di mana aku bisa temui dirimu?"
              },
              {
                "time": 44.14,
                "text": "Yang dulu cinta dan anggap aku ada"
              },
              {
                "time": 52.68,
                "text": ""
              },
              {
                "time": 57.01,
                "text": "Jika kauminta aku menjauh"
              },
              {
                "time": 64.27,
                "text": "Hilang dari seluruh memori indahmu"
              },
              {
                "time": 71.53,
                "text": "'Kan kulakukan semua"
              },
              {
                "time": 75.12,
                "text": "Walau tak mungkin sanggup bohongi hatiku"
              },
              {
                "time": 84.74,
                "text": "Ha-ah-ah-ah"
              },
              {
                "time": 90.56,
                "text": "Ha-ah-ha-wo-ho-oh"
              },
              {
                "time": 95.27000000000001,
                "text": "Di mana aku bisa temui dirimu? Ha-ah"
              },
              {
                "time": 109.69,
                "text": "Yang dulu cinta dan anggap aku ada"
              },
              {
                "time": 117.88,
                "text": "(Yang dulu cinta dan anggap aku ada) ho-oh"
              },
              {
                "time": 122.12,
                "text": "Jika kau meminta aku menjauh"
              },
              {
                "time": 129.62,
                "text": "Hilang dari seluruh memori indahmu"
              },
              {
                "time": 136.99,
                "text": "'Kan kulakukan semua"
              },
              {
                "time": 140.68,
                "text": "Walau tak mungkin sanggup bohongi hatiku"
              },
              {
                "time": 151.4,
                "text": "Saat ku rindu, kucoba tak rindu"
              },
              {
                "time": 158.8,
                "text": "Demi bahagiamu yang tak membutuhkanku"
              },
              {
                "time": 166.16,
                "text": "Entah sampai di mana"
              },
              {
                "time": 169.63,
                "text": "Sanggup ku 'kan bertahan 'tuk bisa tanpamu"
              },
              {
                "time": 175.96,
                "text": "Ya, tak mungkin kau menemukan yang sama lagi"
              },
              {
                "time": 182.12,
                "text": "Tulus hati s'perti yang aku miliki"
              },
              {
                "time": 189.35,
                "text": "Oh-wo-oh"
              },
              {
                "time": 191.55,
                "text": "JikaYear of Release: 20235710"
              }
            ]
          },
          {
            "title": "Tak Segampang Itu",
            "artist": "Anggi Marito",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Tak Segampang Itu.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2732844c4e4e984ea408ab7fd6f",
            "lyrics": [
              {
                "time": 16.02,
                "text": "Waktu demi waktu, hari demi hari"
              },
              {
                "time": 25.88,
                "text": "Sadar ku t'lah sendiri"
              },
              {
                "time": 30.9,
                "text": "Kau t'lah pergi jauh, tinggalkan diriku"
              },
              {
                "time": 40.06,
                "text": "Ternyata ku rindu"
              },
              {
                "time": 46.05,
                "text": "Senyuman yang s'lalu membungkus hati yang terluka"
              },
              {
                "time": 54.95,
                "text": "Di depan mereka"
              },
              {
                "time": 58.65,
                "text": "Tuhan, masih pantaskah ku 'tuk bersamanya?"
              },
              {
                "time": 66.59,
                "text": "Kar'na hati ini inginkannya"
              },
              {
                "time": 71.92,
                "text": "Tak segampang itu ku mencari penggantimu"
              },
              {
                "time": 79.32,
                "text": "Tak segampang itu ku menemukan sosok seperti dirimu, Cinta"
              },
              {
                "time": 89.73,
                "text": "Kau tahu betapa besar cinta yang kutanamkan padamu"
              },
              {
                "time": 97.58,
                "text": "Mengapa kau memilih untuk berpisah?"
              },
              {
                "time": 107.03,
                "text": "Ho-oh"
              },
              {
                "time": 108.7,
                "text": "Terlalu besar kutaruh harapan pada dirimu"
              },
              {
                "time": 116.02000000000001,
                "text": "Itu alasanku, lama tanpa dirimu, oh-oh"
              },
              {
                "time": 123.43,
                "text": "Mereka yang bilang, ku akan dapat lebih darimu"
              },
              {
                "time": 129.08,
                "text": "Tak mungkin, semua itu tak mudah"
              },
              {
                "time": 135.17,
                "text": "Oh-oh-oh (ku mencari penggantimu)"
              },
              {
                "time": 142.25,
                "text": "Tak segampang itu ku menemukan sosok seperti dirimu, oh,Year of Release: 20226715"
              }
            ]
          },
          {
            "title": "Pesan Terakhir",
            "artist": "Lyodra",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Pesan Terakhir.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273d00e5994b61f1d93dafe9221",
            "lyrics": [
              {
                "time": 17.03,
                "text": "T'lah kucoba t'rus bertahan"
              },
              {
                "time": 25.27,
                "text": "Tentang cinta yang kurasa"
              },
              {
                "time": 33.27,
                "text": "Ku mencinta, kau tak cinta"
              },
              {
                "time": 41.25,
                "text": "Tak sanggup ku terus bertahan"
              },
              {
                "time": 48.36,
                "text": "Sadar ku tak berhak untuk terus memaksamu"
              },
              {
                "time": 56.46,
                "text": "Memaksamu mencintaiku sepenuh hati"
              },
              {
                "time": 64.25,
                "text": "Aku 'kan berusaha untuk melupakanmu"
              },
              {
                "time": 72.76,
                "text": "Tapi terimalah permintaan terakhirku"
              },
              {
                "time": 81.74,
                "text": ""
              },
              {
                "time": 85.22,
                "text": "(Genggam tanganku) Genggam tanganku, sayang"
              },
              {
                "time": 90.28999999999999,
                "text": "Dekat denganku, peluk diriku"
              },
              {
                "time": 94.03,
                "text": "Berdiri tegak di depan aku"
              },
              {
                "time": 98.15,
                "text": "Cium keningku 'tuk yang terakhir"
              },
              {
                "time": 101.94,
                "text": "Ku 'kan menghilang jauh darimu"
              },
              {
                "time": 106.08,
                "text": "Tak terlihat sehelai rambut pun"
              },
              {
                "time": 110.13,
                "text": "Tapi di mana nanti kau terluka"
              },
              {
                "time": 114.42,
                "text": "Cari aku, ku ada untukmu, ho-oh"
              },
              {
                "time": 125.51,
                "text": ""
              },
              {
                "time": 128.74,
                "text": "Ku tak membencimu"
              },
              {
                "time": 133.2,
                "text": "Kuharap kau pun begitu, ha-ah (kuharap begitu), yeah, yeay"
              },
              {
                "time": 145.07999999999998,
                "text": "Tak ingin kau jauh"
              },
              {
                "time": 149.07,
                "text": "Tapi takdir menginginkan kita 'tuk berpisah"
              },
              {
                "time": 162.42000000000002,
                "text": "Genggam tanganku, sayang"
              },
              {
                "time": 166.03,
                "text": "Dekat denganku, peluk diriku"
              },
              {
                "time": 170.12,
                "text": "Berdiri tegak di depan aku"
              },
              {
                "time": 174.11,
                "text": "Cium keningku 'tuk yang terakhir"
              },
              {
                "time": 177.99,
                "text": "Ku 'kan menghilang jauh darimu"
              },
              {
                "time": 182.21,
                "text": "Tak terlihat sehelai rambut pun"
              },
              {
                "time": 186.13,
                "text": "Tapi di mana nanti kau terluka"
              },
              {
                "time": 190.47,
                "text": "Cari aku, ku ada untukmu"
              },
              {
                "time": 198.75,
                "text": "(Genggam tanganku,Year of Release: 2021635416"
              }
            ]
          },
          {
            "title": "Sial",
            "artist": "Mahalini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Sial.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736f713eb92ebf7ca05a562542",
            "lyrics": [
              {
                "time": 13.52,
                "text": "Sampai saat ini tak terpikir olehku"
              },
              {
                "time": 21.67,
                "text": "Aku pernah beri rasa pada orang sepertimu"
              },
              {
                "time": 29.56,
                "text": "Seandainya sejak awal tak kuyakinkan diriku"
              },
              {
                "time": 37.64,
                "text": "Tutur kata yang sempurna, tak sebaik yang kukira"
              },
              {
                "time": 45.46,
                "text": "Andai ku tahu semua akan sia-sia"
              },
              {
                "time": 53.41,
                "text": "Takkan kut'rima cinta sesaatmu"
              },
              {
                "time": 60.86,
                "text": "Bagaimana dengan aku terlanjur mencintaimu?"
              },
              {
                "time": 68.99,
                "text": "Yang datang beri harapan, lalu pergi dan menghilang"
              },
              {
                "time": 76.76,
                "text": "Tak terpikirkan olehmu, hatiku hancur kar'namu"
              },
              {
                "time": 84.75,
                "text": "Tanpa sedikit alasan, pergi tanpa berpamitan"
              },
              {
                "time": 93.43,
                "text": "Takkan kut'rima cinta sesaatmu"
              },
              {
                "time": 101.53999999999999,
                "text": "Seandainya sejak awal tak kuyakinkan diriku"
              },
              {
                "time": 108.9,
                "text": "Tutur kata yang sempurna, tak sebaik yang kukira"
              },
              {
                "time": 117.47999999999999,
                "text": "Andai ku tahu semua akan sia-sia"
              },
              {
                "time": 124.74,
                "text": "Takkan kut'rima cinta sesaatmu"
              },
              {
                "time": 132.79,
                "text": "Bagaimana dengan aku terlanjur mencintaimu?"
              },
              {
                "time": 140.93,
                "text": "Yang datang beri harapan, lalu pergi dan menghilang"
              },
              {
                "time": 148.88,
                "text": "Tak terpikirkan olehmu, hatiku hancur kar'namu"
              },
              {
                "time": 156.91,
                "text": "Tanpa sedikit alasan, pergi tanpa berpamitan"
              },
              {
                "time": 165.46,
                "text": "Takkan kut'rima cinta sesaatmu"
              },
              {
                "time": 170.55,
                "text": "Sial-sialnya ku bertemuYear of Release: 20236916"
              }
            ]
          },
          {
            "title": "Bukan Cinta Biasa",
            "artist": "Afgan",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Bukan Cinta Biasa.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273daa3a5d2478cc796925f7c90",
            "lyrics": [
              {
                "time": 12.69,
                "text": "Kali ini kusadari"
              },
              {
                "time": 26.43,
                "text": "Aku telah jatuh cinta"
              },
              {
                "time": 33.48,
                "text": "Dari hatiku terdalam"
              },
              {
                "time": 39.76,
                "text": "Sungguh, aku cinta padamu, ho-oh"
              },
              {
                "time": 48.63,
                "text": "Cintaku bukanlah cinta biasa"
              },
              {
                "time": 60.68,
                "text": "Jika kamu yang memiliki"
              },
              {
                "time": 66.37,
                "text": "Dan kamu yang temaniku seumur hidupku, oh"
              },
              {
                "time": 77.76,
                "text": "T'rimalah pengakuanku"
              },
              {
                "time": 90.07,
                "text": "Percayalah kepadaku"
              },
              {
                "time": 96.46000000000001,
                "text": "Semua ini kulakukan"
              },
              {
                "time": 103.35,
                "text": "Karena kamu memang untukku"
              },
              {
                "time": 112.37,
                "text": "Cintaku bukanlah cinta biasa"
              },
              {
                "time": 120.02,
                "text": "Jika kamu yang memiliki"
              },
              {
                "time": 126.09,
                "text": "Dan kamu yang temaniku seumur hidupku, oh"
              },
              {
                "time": 138.54,
                "text": "Seumur hidupku"
              },
              {
                "time": 145.96,
                "text": "Uh-oh, uh-oh, uh-oh-oh"
              },
              {
                "time": 164.84,
                "text": "Hu-uh"
              },
              {
                "time": 168.18,
                "text": "Cintaku bukanlah cinta biasa"
              },
              {
                "time": 177.73,
                "text": "Jika kamu yangYear of Release: 2009384207"
              }
            ]
          },
          {
            "title": "Somebody's Pleasure",
            "artist": "Aziz Hedra",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Somebody's Pleasure.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273dfa72d72dd91d9b28dedf9e9",
            "lyrics": [
              {
                "time": 7.22,
                "text": "I've been so busy, ignoring, and hiding"
              },
              {
                "time": 13.62,
                "text": "About what my heart actually say"
              },
              {
                "time": 18.87,
                "text": ""
              },
              {
                "time": 23.44,
                "text": "Stay awake while I'm drowning on my thoughts"
              },
              {
                "time": 29.98,
                "text": "Sometimes a happiness is just a happiness"
              },
              {
                "time": 36.11,
                "text": ""
              },
              {
                "time": 41.34,
                "text": "I've never been enjoyin' my serenity"
              },
              {
                "time": 46.78,
                "text": "Even if I've got a lot of company"
              },
              {
                "time": 51.94,
                "text": "That makes me happy"
              },
              {
                "time": 55.74,
                "text": "Soul try to figure it out"
              },
              {
                "time": 59.99,
                "text": "From where I've been escapin'"
              },
              {
                "time": 64.69,
                "text": "Running to end all the sin"
              },
              {
                "time": 68.85,
                "text": "Get away from the pressure"
              },
              {
                "time": 72.34,
                "text": "Wondering to get a love that is so pure"
              },
              {
                "time": 80.91,
                "text": "Gotta have to always make sure"
              },
              {
                "time": 84.83,
                "text": "That I'm not just somebody's pleasure"
              },
              {
                "time": 89.26,
                "text": "I always pretending and lying"
              },
              {
                "time": 95.65,
                "text": "Like I'm used to feel empty"
              },
              {
                "time": 98.05,
                "text": "'Cause all I got is unhappy"
              },
              {
                "time": 102.4,
                "text": "Happiness, can't I get happiness?"
              },
              {
                "time": 107.06,
                "text": "I've never been enjoyin' my serenity"
              },
              {
                "time": 112.2,
                "text": "Even if I've got a lot of company"
              },
              {
                "time": 117.78999999999999,
                "text": "That makes me happy"
              },
              {
                "time": 121.46,
                "text": "Soul try to figure it out"
              },
              {
                "time": 125.68,
                "text": "From where I've been escapin'"
              },
              {
                "time": 130.28,
                "text": "Running to end all the sin"
              },
              {
                "time": 134.32,
                "text": "Get away from the pressure"
              },
              {
                "time": 138.02,
                "text": "Wondering to get a love that is so pure"
              },
              {
                "time": 146.57,
                "text": "Gotta have to always make sure"
              },
              {
                "time": 150.36,
                "text": "That I'm not just somebody's pleasure"
              },
              {
                "time": 157.77,
                "text": ""
              },
              {
                "time": 163.34,
                "text": "It was in a blink of an eye"
              },
              {
                "time": 167.16,
                "text": "FindYear of Release: 20231,170344"
              }
            ]
          },
          {
            "title": "Sisa Rasa",
            "artist": "Mahalini",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Sisa Rasa.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736f713eb92ebf7ca05a562542",
            "lyrics": [
              {
                "time": 8.79,
                "text": "Ha-ah-ah-ah"
              },
              {
                "time": 16.77,
                "text": "Melihatmu bahagia, satu hal yang terindah"
              },
              {
                "time": 24.68,
                "text": "Anug'rah cinta yang pernah kupunya"
              },
              {
                "time": 32.28,
                "text": "Kau buatku percaya ketulusan cinta"
              },
              {
                "time": 40.2,
                "text": "Seakan kisah sempurna 'kan tiba"
              },
              {
                "time": 48.13,
                "text": "Masih jelas teringat pelukanmu yang hangat"
              },
              {
                "time": 56.07,
                "text": "Seakan semua tak mungkin menghilang"
              },
              {
                "time": 63.96,
                "text": "Kini hanya kenangan yang telah kau tinggalkan"
              },
              {
                "time": 71.56,
                "text": "Tak tersisa lagi waktu bersama"
              },
              {
                "time": 79.51,
                "text": "Mengapa masih ada"
              },
              {
                "time": 83.44,
                "text": "Sisa rasa di dada"
              },
              {
                "time": 87.52,
                "text": "Di saat kau pergi begitu saja?"
              },
              {
                "time": 95.27000000000001,
                "text": "Mampukah ku bertahan"
              },
              {
                "time": 99.21000000000001,
                "text": "Tanpa hadirmu, sayang?"
              },
              {
                "time": 103.05,
                "text": "Tuhan, sampaikan rindu untuknya (rindu untuknya)"
              },
              {
                "time": 111.28,
                "text": "Masih jelas teringat (jelas teringat) pelukanmu yang hangat"
              },
              {
                "time": 119.33,
                "text": "Seakan semua tak mungkin menghilang (menghilang)"
              },
              {
                "time": 126.89,
                "text": "Kini hanya kenangan yang t'lah kau tinggalkan"
              },
              {
                "time": 135.05,
                "text": "Tak tersisa lagi waktu bersama (waktu bersama)"
              },
              {
                "time": 142.56,
                "text": "Mengapa masih ada"
              },
              {
                "time": 146.31,
                "text": "Sisa rasa di dada"
              },
              {
                "time": 150.38,
                "text": "Di saat kau pergi begitu saja? (Begitu saja)"
              },
              {
                "time": 158.17000000000002,
                "text": "Mampukah ku bertahan"
              },
              {
                "time": 162.29,
                "text": "Tanpa hadirmu, sayang?"
              },
              {
                "time": 165.81,
                "text": "Tuhan, sampaikan rindu untuknya"
              },
              {
                "time": 173,
                "text": "(Masih tersimpan)Year of Release: 20213,2222,358"
              }
            ]
          },
          {
            "title": "Tak Dianggap",
            "artist": "Lyodra",
            "source": "https://raw.githubusercontent.com/SatzzDev/Datas/main/songs/Tak Dianggap.mp3",
            "cover": "https://i.scdn.co/image/ab67616d0000b273ca3cda6e80ce9df0f98de7cb",
            "lyrics": [
              {
                "time": 16.2,
                "text": "Aku selalu t'rus berusaha"
              },
              {
                "time": 23.04,
                "text": "Sabar yang aku bisa"
              },
              {
                "time": 28.7,
                "text": "Menjadi pengertian"
              },
              {
                "time": 34.27,
                "text": "Sakit pun selalu kusimpan"
              },
              {
                "time": 40.56,
                "text": "Jadi yang terbaik untukmu"
              },
              {
                "time": 42.57,
                "text": "Apa itu tak cukup?"
              },
              {
                "time": 44.67,
                "text": "Senyum yang kuberi s'lama ini"
              },
              {
                "time": 54.23,
                "text": "Palsu, itu bukan aku"
              },
              {
                "time": 61.4,
                "text": "Kututupi semuanya"
              },
              {
                "time": 63.03,
                "text": "Agar kita baik-baik saja"
              },
              {
                "time": 65.8,
                "text": "Tapi kini sudah tak mampu"
              },
              {
                "time": 69.53,
                "text": "Dengan caramu itu"
              },
              {
                "time": 71.24,
                "text": "Sikapmu seakan-akan"
              },
              {
                "time": 75.14,
                "text": "Menyuruh diriku pergi"
              },
              {
                "time": 79.64,
                "text": "Tapi perkataanmu seolah"
              },
              {
                "time": 84.61,
                "text": "Aku penting bagimu"
              },
              {
                "time": 88.76,
                "text": "Sebenarnya aku siapa?"
              },
              {
                "time": 92.19,
                "text": "Tak dianggap tapi ada"
              },
              {
                "time": 97.06,
                "text": "Bersamamu, ku terluka"
              },
              {
                "time": 102.99000000000001,
                "text": "Melepaskanmu, aku lebih terluka"
              },
              {
                "time": 104.67,
                "text": "Lelah bertahan denganmu"
              },
              {
                "time": 111.95,
                "text": "Namun, terlalu sayang untuk melepasmu"
              },
              {
                "time": 115.88,
                "text": "Biar, biar kujalani sampai melepasmu"
              },
              {
                "time": 120.95,
                "text": "Tiada lagi sedih bagiku, oh-oh-oh"
              },
              {
                "time": 132.12,
                "text": "SikapmuYear of Release: 20234811"
              }
            ]
          }
        ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
