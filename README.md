# Shuggaloaf's Simple NPC Generator

# UPDATED
I will work on updating the readme more later, but for now there's a few big changes:
1. Uncommon races have been added. Dragonborn, Tiefling, Goliath, Half-Orc, Goblin and Lizardfolk
2. Bye Bye Tables. If you downloaded version 1.4.1 and prior, you may delete all the tables that were imported. All data is now within the macros themselves. 
3. Yes Macro*s*. I recognize that some folks do not play with uncommon races in their games and as such may not want/need them. So there is a macro for Common + Uncommon Races (`Simple NPC Generator`) and another for Common Only (`Simple NPC Generator (co)`). **ONLY IMPORT AND USE ONE OF THEM** 

<hr>
A Simple, System Agnostic NPC Generator for use in Foundry VTT.

There are other NPC Generators out there that offer much more robust features, including even creating an actor for you. My generator is not meant to compete with those. To me, those work great for pre-game use when you're creating more impactful NPCs

So why did I make this? Because I find that 95% of the time that I need a random NPC is during gameplay. I need that info quickly. I don't have time to stop the game for several minutes while I set options to create an NPC actor. And for most of those NPCs, I don't really want/need an actor anyway, they'll be forgotten 5 minutes after the players speak to them. I mostly just need a quick name, and a vague description, so I can keep the game going. If the NPC becomes impactful, I can make a more "permanent" NPC after the session.

To be honest I've never created a module before (even though this barely qualifies) and I just made this for my personal use. so there may be bugs, or better ways of doing things (that I'm open to learning). The mod isn't fancy, there are few bells and whistles, but it gets the job done quickly and without a lot of fuss. 

Speaking of modules, you are probably like myself - way too many modules installed. If you'd like to, you may delete/disable the module after importing the macro and tables. Once those are imported into your game, they will remain. Of course you will have to check this Github repo to see if there are updates, but I do not expect there to be many. 

&nbsp;

The macro opens a dialog with options for several (not all) races/sexes. Here is a sample of how the macro works:

<img src="https://raw.githubusercontent.com/Shuggaloaf/Simple_NPC_Generator/main/media/Capture-04.gif" width="50%"/>

&nbsp;

Note: The "Professions" and "Quirks" buttons are to generate a few more options in case you didn't like the ones generated with the name/race/sex. 

# To Do List
Note: These may be added at some point but I am in little hurry to do so. If anyone would like to provide me a list of names, or better yet, a JSON export of a FVTT table already setup for names, I'd gladly accept them and appreciate the help.

1. Need to create name tables for the following:
    Done! - ~~Dragonborn~~
    Done! - ~~Orc (created, need to implement)~~
    Done! - ~~Tiefling~~
    Done! (for now...) - ~~Others? (Goblin, etc.)~~

2. Although I don't want actor creation to be a focus, I could see a case for a non-intrusive button within the chat message that when clicked would create an actor. Just for those times when the NPC does become more of a "regular". I do not believe this would be difficult, but need to look into it. Anyone willing to submit an example of code to do so, feel free to open an issue. 

3. Name and characteristic lists were scoured from all over the place and most combine numerous sources. Some tables have thousands of entries. As such there are bound to be errors/oddities that I haven't caught yet. Please open an issue if you notice anything. 
