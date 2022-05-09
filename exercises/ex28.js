/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
    yourName: "Guilherme",
    numberOfFriends: 123,
    messages: ["Hello", "Good Morning", "Good Afternoon", "Good evening"],

    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
    },

    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index,1);
    },

    addFriend: function addFriend() {
        facebookProfile.numberOfFriends++;
    },

    removeFriend: function removeFriend() {
        facebookProfile.numberOfFriends--;
    }

}

facebookProfile.postMessage("teste");
facebookProfile.deleteMessage(1);
facebookProfile.addFriend();
facebookProfile.removeFriend();
console.log(facebookProfile);