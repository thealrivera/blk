if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
    username: "al",
    password: "yourpal",
    profile: {
      image: "http://i.imgur.com/NqyBZSp.gif"
    }
  })
}