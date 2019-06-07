/**
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * author: Ida Naderian
 * 
 * program will create note and save it
 */

 const notes = [];
 const ERROR = {
    NOTFIND : "Note is not in list"
 }

 function addNote(id, content){
    notes.push({
        content: content,
        id: id
    });
 }

 function getNoteFromId(id){
     const note = notes.filter(item => item.id === id);
     if (!Array.isArray(note) || !note.length){
         return ERROR.NOTFIND;
     }
     return note;
 }

 function getAllNotes(){
    return notes;
 }

 function logOutNotesFormatted(){
     for(note of notes){
        console.log(`The note with ${note.id}, has the following note text: ${note.note}`);
     }
 }

 addNote(1, "Hello It's a first note");
 addNote(2, "Goodmorning It's a second note");
 addNote(3, "Have a good day, It's my last note");
 addNote(1, "Hello It's a first note");

 console.log(getNoteFromId(0));
