document.addEventListener('DOMContentLoaded', function () {
    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");

    // use the compiled the template
    /*var userDataHTML = userTemplate({
        username: 'lindani',
        firstName: 'Lindani',
        lastName: 'Pani',
        email: 'lindani@pani.com'
    });*/
    var userData = { users: [
        {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
        {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
        {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
      ]};

     // compile the template
     var userDataHTML = userTemplate(userData);
     userDataElem.innerHTML = userDataHTML;
});