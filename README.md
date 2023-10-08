# Shuggaloaf's Simple NPC Generator

**A Simple, System Agnostic<sup>1</sup> NPC Generator for use in Foundry VTT.**

I find that 95% of the time that I need a random NPC is during gameplay. I need that info quickly. I don't have time to stop the game for several minutes while I set options to create an NPC actor. And for most of those NPCs, I don't really want/need an actor anyway, they'll be forgotten 5 minutes after the players speak to them. I mostly just need a quick name, and a vague description, so I can keep the game going. If the NPC becomes impactful, I can make a more "permanent" NPC after the session.

### What this module IS

I developed SNG to generate simple, street-level NPCs quickly. This is mainly for those NPCs players meet on the street, in a tavern, or wherever that you probably won't use again. And the ones you do use again, you won't need elaborate backstories or info for them.

The barkeep. The shopkeep. The NPC your player asks for directions but they have to know their name. I'm not saying one of those NPCs may not develop into an NPC with more depth, but at that point you are probably best served by other modules or by writing out an NPC to your specifications.

### What this module IS NOT

There are other NPC Generators out there that offer much more robust features, including even creating an actor for you. My generator is not meant to compete with those. To me, those work great for pre-game use when you're creating more impactful NPCs. This mod however is not meant for that purpose.

<hr/>

### How It Works

As the name would imply - it's simple! 

1. Import the macro from the module's compendium.
2. When the macro is clicked, it opens a dialog with options for several (not all) races/genders. 

Here is a sample of how the macro works:

**COMMON:**<br>
<img src="https://raw.githubusercontent.com/Shuggaloaf/ShuggaloafStorage/main/img/commonEx.gif" width="65%"/>

**UNCOMMON:**<br>
<img src="https://raw.githubusercontent.com/Shuggaloaf/ShuggaloafStorage/main/img/uncommonEx.gif" width="65%"/>

**PROFESSIONS:**<br>
The Professions button is to generate a few more options in case you didn't like the one generated with the NPC. 
<br><img src="https://raw.githubusercontent.com/Shuggaloaf/ShuggaloafStorage/main/img/profEx.gif" width="20%"/>


<hr/>

### LATEST UPDATE (v4.0)

* A brand new look;
* Several new features (see below);
* Greatly expands many of the existing NPC characteristics lists.
* Adds rarity/weighting to several characteristics
<br>(Note these newly added features only work with FVTT v10+)

<h4>THEMES</h4>
<p> A total of 10 Color Themes have been add, each with 2 versions for the chat message: a vivid coloring and a more subdued coloring. Giving a total of 20 different options.<br><br><i>Below are 2 examples of the new themes. Red in subdued and vivid styles, and the same for blue:</i></p>
<img src="https://raw.githubusercontent.com/Shuggaloaf/ShuggaloafStorage/main/img/themeExamples.jpg" width="80%"/>


<h4>SAVE GENERATED NPCS TO A JOURNAL</h4>
<p>Provides the option to save all generated NPCs to a Journal Entry. By default this is ON. The default Journal Name can also be changed to whatever you want. Note that this is an all of nothing setting. If you typically generate many NPCs before deciding on one, you may want to turn this off, or remember to edit the journal to remove the unused entries.<br><br><i>Here is an example showing how the 4 NPCs generated above would look in the journal. Each NPCs gets their own page to make it easier to add notes later:</i></p>
<img src="https://raw.githubusercontent.com/Shuggaloaf/ShuggaloafStorage/main/img/journalExample.JPG" width="50%"/>

<h4>CONSOLIDATION OF MACROS</h4>
<p>Previously there were 2 macros: 1 for Common races only and 1 for both common and uncommon. This has now been consolidated into just 1 macro with the option to select which generator you'd like to use.</p>

(All options above are configurable from within the macro itself in the "Options" section)

<h4>CHARACTERISTIC WEIGHTING</h4>
<p>Some of the characteristics lists are now weighted, meaning that more rare characteristics will not have an equal chance of showing up as more common characteristics. Some of these newly weighted categories include: Height; Uniquities (formerly known as "quirks"); and Eye Color. <br>Skin Tone has been reworked so that races such as Dragonborn and Lizardfolk are scaled, Goblins and Half-Orcs have greenish/gray tones and Tieflings have red tones. <br>Additionally an issue with facial hair being generated for females has been corrected - except for Dwarves. Certain races (Lizardfolk, Elves, Dragonborn and Goblin) will also no longer have facial hair.</p>

<hr/>

&nbsp;

To be honest I'm not a coder and I just made this for my personal use. So there may be bugs, or better ways of doing things. The mod isn't fancy, there are few bells and whistles, but it gets the job done quickly and without a lot of fuss. 

Speaking of modules, you are probably like myself - way too many modules installed. If you'd like to, you may delete/disable the module after importing the macro. Once that is imported into your game, it will remain. (Of course if you do so, you will have to manually check for updates) 


&nbsp; 

<sup><sup>1</sup> System Agnostic does not mean all inclusive for every system. It means it should work with any FVTT system. I'd be happy to add additional races if lists are provided. </sup>


# Misc.

#### To Do List

1. Need to create name tables for the following:<br>
    Done! - ~~Dragonborn~~<br>
    Done! - ~~Orc (created, need to implement)~~<br>
    Done! - ~~Tiefling~~<br>
    Done! (for now...) - ~~Others? (Goblin, etc.)~~<br>


#### Need Help:
1. I would like to add a non-intrusive button within the chat message that when clicked would add the NPC info to a specific Journal Entry. Currently (as of version 4.0.11), NPCs can be saved to a journal on an all-or-nothing basis but I would prefer a more on-demand approach. 
2. Although I don't want actor creation to be a focus, I could see a case for a button within the chat message that when clicked would create an actor from the chat data. Just for those times when the NPC does become more of a "regular". I do not believe this would be difficult, but need to look into it. Anyone willing to submit an example of code to do so, feel free to open an issue.

# &nbsp;
&nbsp;
&nbsp;
* Included Icons were created on game-icons.net
