// This section has been updated with v13-compatible code patterns
async function saveNpcAsActor(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const currentDateTime = new Date().toLocaleString();
    const folderPath = GenActorFolder.split('/');
    let parentFolder = null;

    // Check if the parent folder exists, and create it if necessary
    for (const folderName of folderPath) {
        if (!folderName) continue; // Skip empty folder names
        
        let existingFolder = game.folders.find(folder => 
            folder.name === folderName && 
            folder.type === 'Actor' && 
            (parentFolder ? folder.parent === parentFolder.id : folder.parent === null)
        );
        
        if (!existingFolder) {
            existingFolder = await Folder.create({
                name: folderName,
                type: 'Actor',
                parent: parentFolder ? parentFolder.id : null
            });
        }
        parentFolder = existingFolder;
    }

    // Updated actor data structure for v13
    let actorData = {
        name: button.dataset.name,
        type: 'npc',
        folder: parentFolder ? parentFolder.id : null,
        system: { // Note: using 'system' instead of 'data' in v13
            abilities: { 
                str: { value: 10 }, 
                dex: { value: 10 }, 
                con: { value: 10 }, 
                int: { value: 10 }, 
                wis: { value: 10 }, 
                cha: { value: 10 } 
            },
            attributes: {
                ac: { value: 10 },
                hp: { value: 10, max: 10 },
                init: { value: 0 },
                movement: { walk: 30 }, // Updated from speed to movement.walk in v13
            },
            details: {                
                type: {
                    value: "humanoid",
                    subtype: button.dataset.race
                },                
                biography: {
                    value: `
                        <p><strong>Gender:</strong> ${button.dataset.gender}</p>
                        <p><strong>Profession:</strong> ${button.dataset.profession}</p>
                        <p><strong>Build:</strong> ${button.dataset.height} and ${button.dataset.build}</p>
                        <p><strong>Skin Tone:</strong> ${button.dataset.tone}</p>
                        <p><strong>Complexion:</strong> ${button.dataset.comp}</p>
                        <p><strong>Eyes:</strong> ${button.dataset.eyecolor}, ${button.dataset.eyeshape}</p>
                        <p><strong>Hair:</strong> ${button.dataset.hair}</p>
                        <p><strong>Facial Hair:</strong> ${button.dataset.facialhair}</p>
                        <p><strong>Demeanor:</strong> ${button.dataset.demeanor}</p>
                        <p><strong>Optional Activity:</strong> ${button.dataset.activities}</p><br><br>
                        <p style="font-size: small;">Generated on: ${currentDateTime}</p>
                    `
                }
            }
        },
        prototypeToken: { // Updated from token to prototypeToken in v13
            name: button.dataset.name,
            displayName: CONST.TOKEN_DISPLAY_MODES.HOVER, // Updated to use constant in v13
            actorLink: true,
            disposition: CONST.TOKEN_DISPOSITIONS.HOSTILE, // Updated to use constant in v13
            sight: {
                enabled: true
            }
        }
    };

    let actor = await Actor.create(actorData);

    if (actor) {
        // Updated flags path structure for v13 if needed
        await actor.update({
            [`flags.tidy5e-sheet.eyes`]: `${button.dataset.eyecolor}, ${button.dataset.eyeshape}`,
            [`flags.tidy5e-sheet.gender`]: button.dataset.gender,
            [`flags.tidy5e-sheet.height`]: button.dataset.height,
            [`flags.tidy5e-sheet.weight`]: button.dataset.build,
            [`flags.tidy5e-sheet.skin`]: `${button.dataset.tone}, ${button.dataset.comp}`,
            [`flags.tidy5e-sheet.hair`]: button.dataset.hair
        });

        ui.notifications.info(`${button.dataset.name} has been created as an Actor.`);
        button.remove();
    }
}

async function saveNpcAsJournalEntry(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const name = button.dataset.name;

    const GenJournalFolder = JournalFolder;
    const GenJournalSubFolder = JournalSubFolder;

    if (GenJournalSubFolder && !GenJournalFolder) {
        ui.notifications.error("Parent folder must be specified if a subfolder is provided.");
        return;
    }

    const journalFolderPath = (GenJournalFolder + '/' + GenJournalSubFolder).split('/').filter(Boolean);
    let parentFolder = null;

    for (const folderName of journalFolderPath) {
        let existingFolder = game.folders.find(folder => 
            folder.name === folderName && 
            folder.type === 'JournalEntry' && 
            (parentFolder ? folder.parent === parentFolder.id : folder.parent === null)
        );

        if (!existingFolder) {
            existingFolder = await Folder.create({
                name: folderName,
                type: 'JournalEntry',
                parent: parentFolder ? parentFolder.id : null
            });
        }

        parentFolder = existingFolder;
    }

    // Updated JournalEntry structure for v13
    // In v13, JournalEntries use pages, so we create an entry with a single page
    const journalEntryData = {
        name: name,
        folder: parentFolder ? parentFolder.id : null
    };

    const journalContent = `
        <p><strong>Race:</strong> ${button.dataset.race}</p>
        <p><strong>Gender:</strong> ${button.dataset.gender}</p>
        <p><strong>Profession:</strong> ${button.dataset.profession}</p>
        <p><strong>Build:</strong> ${button.dataset.height} and ${button.dataset.build}</p>
        <p><strong>Skin Tone:</strong> ${button.dataset.tone}</p>
        <p><strong>Complexion:</strong> ${button.dataset.comp}</p>
        <p><strong>Eyes:</strong> ${button.dataset.eyecolor}, ${button.dataset.eyeshape}</p>
        <p><strong>Hair:</strong> ${button.dataset.hair}</p>
        <p><strong>Facial Hair:</strong> ${button.dataset.facialhair}</p>
        <p><strong>Uniquity:</strong> ${button.dataset.descriptors}</p>
        <p><strong>Demeanor:</strong> ${button.dataset.demeanor}</p>
        <p><strong>Optional Activity:</strong> ${button.dataset.activities}</p>
        <p style="font-size: small;">Generated on: ${new Date().toLocaleString()}</p>
    `;

    // Create the journal entry and its initial page
    const journalEntry = await JournalEntry.create(journalEntryData);
    
    if (journalEntry) {
        await journalEntry.createEmbeddedDocuments("JournalEntryPage", [{
            name: name,
            type: "text",
            text: {
                content: journalContent,
                format: CONST.JOURNAL_ENTRY_PAGE_FORMATS.HTML
            }
        }]);
        
        ui.notifications.info(`${name} has been saved as a Journal Entry.`);
        button.remove();
    }
}

async function saveNpcToCollectiveJournal(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const name = button.dataset.name;

    let txtJournal = txtContentCore.replace(styleContent, "").replace("color:#FFFFFF; text-shadow: 1px 1px 2px black;", "").replace("color:white;", "").replace(hOutline, ""); 
    
    // Get or create the master journal
    let journalObj = game.journal.find(jnl => jnl.name == txtJournalName);
    if (!journalObj) {
        ui.notifications.info("NPC Journal not found. Creating...");
        journalObj = await JournalEntry.create({name: txtJournalName});
    }
    
    // Create a new page in the journal for this NPC
    await journalObj.createEmbeddedDocuments("JournalEntryPage", [{
        name: name,
        type: "text",
        text: {
            content: txtJournal,
            format: CONST.JOURNAL_ENTRY_PAGE_FORMATS.HTML
        }
    }]);
    
    if (journalObj) {
        ui.notifications.info(`${name} has been added to ` + txtJournalName);
        button.remove();
    }
}
