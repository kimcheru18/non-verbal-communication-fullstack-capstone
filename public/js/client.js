// step 1. Defining global variables

//1. User loads page
//  a. nav options
//        -Reflect takes user to existing SOP, Values, Beliefs and Goals
//        -Create takes user to edit page for SOP
//        -Review takes user to questions that they answered where they can edit answers including values and beliefs
//2. User has option to sign in, create new account or continue to create SOP
//3. User selects 'Let's get started'
//4. User enters answer in answer fields
//5. User clicks Save and Contiue.
//6. Once user has answered all questions, they have the option to create SOP free-style or use template
//7. If using template, user can alter text when finished filling in blank fields
//8. User clicks Save once finished writing SOP




var loggedInUser = "";
//var communicationCardTemplate = [
//    {
//    category: 'food',
//    subcategory: 'breakfast',
//    card: 'eggs',
//    image: 'eggs'
//    },
//    {
//        category: 'household',
//        subcategory: 'bedroom',
//        card: 'bed',
//        image: 'bed'
//    }
//];
var cardArray = [
    //Card 1
    {
        categoryName: 'Clothing',
        subcategoryName: '',
        image: '/icon-images/clothing-icons/bag.png',
        itemName: 'purse'
    },

    //Card 2
    {
        categoryName: 'Clothing',
        subcategoryName: '',
        image: '/icon-images/clothing-icons/belt.png',
        itemName: 'belt'
    },

    //Card 3
    {
        categoryName: 'Clothing',
        subcategoryName: '',
        image: '/icon-images/clothing-icons/dress-1.png',
        itemName: 'dress'
    },

    //Card 4
    {
        categoryName: 'Clothing',
        subcategoryName: '',
        image: '/icon-images/clothing-icons/blazer.png',
        itemName: 'jacket'
    },

    //Card 5
    {
        categoryName: 'Household',
        subcategoryName: 'Bedroom',
        image: '/icon-images/household-icons/bed-1.png',
        itemName: 'bed'
    },

    //Card 6
    {
        categoryName: 'Household',
        subcategoryName: 'Bedroom',
        image: '/icon-images/household-icons/chest-of-drawers-1.png',
        itemName: 'chest of drawers'
    },

    //Card 7
    {
        categoryName: 'Household',
        subcategoryName: 'Living Room',
        image: '/icon-images/household-icons/armchair-1.png',
        itemName: 'armchair'
    },

    //Card 8
    {
        categoryName: 'Household',
        subcategoryName: 'Living Room',
        image: '/icon-images/household-icons/couch-1.png',
        itemName: 'couch'
    }
];


// step 2. Defining functions

function displayCards(cardArray) {
    buildTheHtmlOutput = "";
    //    $.each(cardArray, function (cardArrayKey, cardArrayValue) {
    //        buildTheHtmlOutput += "<div id = "
    //        display - selected - card " >";
    //        buildTheHtmlOutput += "<h2 > cardArrayValue.categoryName </h2>";
    //        buildTheHtmlOutput += "<h3> cardArrayValue.subcategoryName < /h3>";
    //        buildTheHtmlOutput += "<div id = "
    //        card - image " > cardArrayValue.image < /div>";
    //        buildTheHtmlOutput += "<h4> cardArrayValue.itemName </h4>";
    //        buildTheHtmlOutput += "</div>";
    //    });
    //
    //    $("#create-your-card-here").html(buildTheHtmlOutput);
}




//function displayUpdatedStatement(username) {
//    let retrieveUserSop = {};
//    $.ajax({
//            type: 'GET',
//            url: '/statements/' + username,
//            dataType: 'json',
//            contentType: 'application/json'
//        })
//        .done(function (result) {
//            if ((!result) || (result != undefined) || (result != "")) {
//                retrieveUserSop = result;
//            }
//        })
//        .fail(function (jqXHR, error, errorThrown) {
//            console.log(jqXHR);
//            console.log(error);
//            console.log(errorThrown);
//        });
//    return retrieveUserSop;
//}

// step 3. dynamically created layout to display home screen
$(document).ready(function () {

    $('.ui.dropdown').dropdown();
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#logout-wrapper').hide();
    $('#account-options').show();
    $('#site-info').show();
});


//****ALL LOGIN REGISTER PAGES*****
$(document).on("click", '#landing-page-login', function () {
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#nav-about').show();
    $('#account-options').hide();
    $('#login-register-wrapper').show();
});


$(document).on("click", '#landing-page-register', function () {
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#dropdown').hide();
    $('#account-options').hide();
    $('#register-user-wrapper').show();
});


$(document).on("click", '#register-account', function () {
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#nav-about').show();
    $('#login').show();
});


$(document).on("submit", '#go-to-login-page', function () {
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#nav-about').show();
    $('#account-options').hide();
    $('#login-register-wrapper').show();
});


$(document).on("submit", '#login-account-button', function (event) {
    event.preventDefault();
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#logout').show();
    $('#navigation-options').show();
    $('#nav-new-category').show();
    $('#add-new-category').show();
});


$(document).on("submit", '#go-to-register-page-button', function (event) {
    event.preventDefault();
    $('.hide-everything').hide();
    $('#register-user-wrapper').show();
    $('#navigation').show();
    $('#nav-about').show();
});



//*****ALL NAV OPTION PAGES*****

$(document).on("click", '#nav-about', function (event) {
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#logout-wrapper').show();
    $('#account-options').hide();
    $('#site-info').show();
});


$(document).on("click", '#display-cards', function () {

    $('.hide-everything').hide();
    $('#navigation').show();
    $('#account-options').hide();
    $('#logout-wrapper').show();
    $('#card-display-wrapper').show();
    $('#clothing-cat').show();
    $('#household-cat').show();
    $('#bedroom-subcat').show();
    $('#living-room-subcat').show();
});


$(document).on("click", '#display-clothing', function () {

    $('.hide-everything').hide();
    $('#navigation').show();
    $('#account-options').hide();
    $('#logout-wrapper').show();
    $('#card-display-wrapper').show();
    $('#clothing-cat').show();
    $('#household-cat').hide();
    $('#bedroom-subcat').hide();
    $('#living-room-subcat').hide();
});


$(document).on("click", '#display-household', function () {

    $('.hide-everything').hide();
    $('#navigation').show();
    $('#account-options').hide();
    $('#logout-wrapper').show();
    $('#card-display-wrapper').show();
    $('#clothing-cat').hide();
    $('#household-cat').show();
});


$(document).on("click", '#add-new-card', function () {
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#account-options').hide();
    $('#logout-wrapper').show();
    $('#add-card-main').show();

    $('#cat-subcat-select').show();
    $('#add-category').hide();
    $('#select-subcat').show();
    $('#add-subcategory').hide();

    $('#example-card-display-wrapper').show();
    $('#ex-card-category').show();
    $('#ex-card-subcat-wrapper').show();
    $('#ex-card-subcat').show();
    $('#ex-image').hide();
    $('#ex-card').show();
    $('#blank-image').show();
    $('#ex-item').show();
});









//****BELOW - NEED TO BE DELETED, JUST FOR EXAMPLE***
$(document).on("click", '#nav-armchair', function () {


    $('.hide-everything').hide();
    $('#navigation').show();
    $('#account-options').hide();
    $('#logout-wrapper').show();
    $('#card-display-wrapper').show();
    $('#clothing-cat').hide();
    $('#bedroom-subcat').hide();
    $('#living-room-subcat').show();
    $('#card8').hide();
});


$(document).on("click", '#nav-bed', function () {


    $('.hide-everything').hide();
    $('#navigation').show();
    $('#account-options').hide();
    $('#logout-wrapper').show();
    $('#card-display-wrapper').show();
    $('#clothing-cat').hide();
    $('#bedroom-subcat').show();
    $('#living-room-subcat').hide();
    $('#card6').hide();
});

$(document).on("click", '#nav-belt', function () {


    $('.hide-everything').hide();
    $('#navigation').show();
    $('#account-options').hide();
    $('#logout-wrapper').show();
    $('#card-display-wrapper').show();
    $('#clothing-cat').show();
    $('#household-cat').hide();
    $('#bedroom-subcat').hide();
    $('#living-room-subcat').hide();
    $('#card1').hide();
    $('#card3').hide();
    $('#card4').hide();
});
//****ABOVE - NEED TO BE DELETED, JUST FOR EXAMPLE***


$(document).on("click", '#add-item-button', function () {
    const cardItem = $('#add-item input').val();

    $('.hide-everything').hide();
    $('#navigation').show();
    $('#account-options').hide();
    $('#logout-wrapper').show();
    $('#add-card-main').show();

    $('#example-card-display-wrapper').show();
    $('#ex-card-category').show();
    $('#ex-card-subcat-wrapper').show();
    $('#ex-card-subcat').show();
    $('#ex-card').show();
    $('#ex-image').hide();
    $('#blank-image').show();
    $('#ex-card h4').html(cardItem);
    $('#cat-subcat-select').show();
    $('#add-category').hide();
    $('#select-subcat').show();
    $('#add-subcategory').hide();
});




//*****HOW DO YOU DO THIS????*****
$(document).on("click", '#add-category-dropdown', function () {
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#logout-wrapper').show();
    $('#dropdown').show();
    $('#add-card-main').show();
    $('#add-dropdown-categories').show();
    $('#cat-subcat-select').show();
    $('#add-category').show();
});





$(document).on("click", '#add-category-button', function (event) {
    event.preventDefault();
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#logout-wrapper').show();
    $('#dropdown').show();
    $('#add-card-main').show();

    $('#add-category-input').hide();
    $('#category-displayed').show();
});




$(document).on("click", '#category-displayed button', function (event) {
    event.preventDefault();
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#logout-wrapper').show();
    $('#dropdown').show();
    $('#add-new-card-main').show();

    $('#new-dropdown-categories').hide();
    $('#add-subcategory-display-wrapper').hide();
    $('#category-displayed button').hide();
    $('#subcategory-select-add').show();
    $('#new-newdropdown-categories').show();
});




$(document).on("click", '#new-subcategory-dropdown', function (event) {
    event.preventDefault();
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#logout-wrapper').show();
    $('#dropdown').show();
    $('#add-new-card-main').show();

    $('#add-subcategory-display-wrapper').show();
    $('#add-subcategory-input').show();
    $('#subcategory-displayed').hide();
});



$(document).on("click", '#add-subcategory-button', function (event) {
    event.preventDefault();
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#logout-wrapper').show();
    $('#dropdown').show();
    $('#add-new-card-main').show();

    $('#add-subcategory-display-wrapper').show();
    $('#add-subcategory-input').hide();
    $('#subcategory-displayed').show();
});




$(document).on("click", '#subcategory-displayed button', function (event) {
    event.preventDefault();
    $('.hide-everything').hide();
    $('#navigation').show();
    $('#logout-wrapper').show();
    $('#dropdown').show();
    $('#add-new-card-main').show();
    $('#item-select-add').show();

    $('#new-dropdown-subcategories').hide();
    $('#add-subcategory-display-wrapper').show();
    $('#subcategory-displayed').show();
    $('#item-displayed').hide();
});





//$(document).on("submit", '#add-category-button', function (event) {
//    event.preventDefault();
//    const newCategory = $('#add-category-input').val();
//
//    if (newCategory == '' && event.which == 13) {
//        alert('Please add a new category')
//    } else if (!(newCategory == '') && event.which == 13) {
//        $('#nav-link').html("");
//        $('#nav-link, #category-title').append(newCategory.toUpperCase());
//        $('.hide-everything').hide();
//        $('#nav-new-category').show();
//        $('#dropdown').show();
//        $('#add-new-category').show();
//        $('#add-category-item').hide();
//        $('#add-card-item').hide();
//        $('#icon-selection-wrapper').hide();
//        $('#add-subcategory-item').show();
//        $('#add-subcategory-input').focus();
//    }
//});


//$(document).on("click", '#add-subcategory-input', function () {
//    const newSubcategory = $('#add-subcategory-input').val();
//
//    if (newSubcategory == '' && event.which == 13) {
//        alert('Please add a new subcategory')
//    } else if (!(newSubcategory == '') && event.which == 13) {
//        $('#subcategory-title').append(newSubcategory.toLowerCase());
//        $('.hide-everything').hide();
//        $('#nav-new-category').show();
//        $('#dropdown').show();
//        $('#add-new-category').show();
//        $('#add-category-item').hide();
//        $('#add-subcategory-item').hide();
//        $('#add-card-item').show();
//        $('#add-card-input').focus();
//    }
//});



//$(document).on("click", '#add-card-input', function () {
//    const newCard = $('#add-card-input').val();
//
//    if (newCard == '' && event.which == 13) {
//        alert('Please add a new card')
//    } else if (!(newCard == '') && event.which == 13) {
//        $('#card-title').append(newCard.toLowerCase());
//        $('.hide-everything').hide();
//        $('#nav-new-category').show();
//        $('#dropdown').show();
//        $('#add-new-category').show();
//        $('#add-category-item').hide();
//        $('#add-subcategory-item').hide();
//        $('#add-card-item').hide();
//        $('#icon-selection-wrapper').show();
//        $('#icon-search').focus();
//    }
//});

//$('#icon-search').keypress(function (event) {
//
//
//    if (!(addIcon == '') && event.which == 13) {
//
//
//        $('.hide-everything').hide();
//        $('#nav-new-category').show();
//        $('#dropdown').show();
//        $('#add-new-category').show();
//        $('#add-content-wrapper').hide();
//        $('#card-added').show();
//    }
//});




//$('.login-account').click(function () {
//
//    const inputUname = $('.signin-username').val();
//    const inputPw = $('.signin-password').val();
//
//    if ((!inputUname) || (inputUname.length < 1) || (inputUname.indexOf(' ') > 0)) {
//        alert('Please enter a valid username');
//    } else if ((!inputPw) || (inputPw.length < 1) || (inputPw.indexOf(' ') > 0)) {
//        alert('Invalid password');
//    } else {
//        const unamePwObject = {
//            username: inputUname,
//            password: inputPw
//        };
//        user = inputUname;
//        $.ajax({
//                type: "POST",
//                url: "/users/signin",
//                dataType: 'json',
//                data: JSON.stringify(unamePwObject),
//                contentType: 'application/json'
//            })
//            .done(function (result) {
//                loggedInUser = result;
//                $('.hide-everything').hide();
//                $('.logout-account').show();
//                $('#finalLoggedinUser').val(loggedInUser);
//
//
//
//
//                $.ajax({
//                        type: 'GET',
//                        url: '/statements/' + loggedInUser,
//                        dataType: 'json',
//                        contentType: 'application/json'
//                    })
//                    .done(function (result) {
//                        let retrieveUserSop = {};
//                        if ((!result) || (result != undefined) || (result != "")) {
//                            retrieveUserSop = result;
//                        }
//
//                        if (retrieveUserSop != "") {
//                            //display final page with statement
//
//                            $('.create-text').html(retrieveUserSop.body);
//                            $('.updated-sop-id').val(retrieveUserSop._id);
//                            $('.purpose p').html(retrieveUserSop.body);
//                            $('.my-goals').html(retrieveUserSop.goals);
//
//                            let valuesArray = retrieveUserSop.values.split(",");
//                            $('.values ul').html("");
//                            for (let i = 0; i < valuesArray.length; i++) {
//                                $('.values ul').append("<li>" + valuesArray[i] + "</li>");
//                            }
//
//                            let beliefsArray = retrieveUserSop.beliefs.split(",");
//                            $('.beliefs ul').html("");
//                            for (let j = 0; j < beliefsArray.length; j++) {
//                                $('.beliefs ul').append("<li>" + beliefsArray[j] + "</li>");
//                            }
//
//                            let goalsArray = retrieveUserSop.goals.split(",");
//                            $('.goals ul').html("");
//                            for (let k = 0; k < goalsArray.length; k++) {
//                                $('.goals ul').append("<li>" + goalsArray[k] + "</li>");
//                            }
//
//                            $('.navigate-options').show();
//                            $('.hide-nav-create').hide();
//                            $('.hide-nav-review').hide();
//                            $('.hide-nav-revise').show();
//                            $('.logout-account').show();
//                            $('#completed-sop').show();
//                            $('#values-beliefs-goals').show();
//                            $('.hide-review-answers').hide();
//                            $('.hide-questions').hide();
//                            $('.template-sop').hide();
//
//                        } else {
//                            $('#sop-description-info').show();
//                            $('.hide-nav-review').show();
//                            $('.hide-nav-revise').hide();
//                        }
//                    })
//                    .fail(function (jqXHR, error, errorThrown) {
//                        console.log(jqXHR);
//                        console.log(error);
//                        console.log(errorThrown);
//                    });
//            })
//            .fail(function (jqXHR, error, errorThrown) {
//                console.log(jqXHR);
//                console.log(error);
//                console.log(errorThrown);
//                alert('Invalid username and password combination. Please check your username and password and try again.');
//            });
//    };
//});






//
//$('.register-account').click(function (event) {
//    event.preventDefault();
//
//    const uname = $('.register-username').val();
//    const pw = $('.register-password').val();
//    const confirmPw = $('.register-confirm-password').val();
//
//    if (uname == "") {
//        alert('Please specify username');
//    } else if ((pw !== confirmPw) || (pw == "")) {
//        alert('Passwords must match and not be empty!');
//    } else {
//        const newUserObject = {
//            username: uname,
//            password: pw
//        };
//
//        $.ajax({
//                type: 'POST',
//                url: '/users/create',
//                dataType: 'json',
//                data: JSON.stringify(newUserObject),
//                contentType: 'application/json'
//            })
//            .done(function (result) {
//                alert('Thanks for signing up! You may now sign in with your username and password.');
//
//                $('.hide-everything').hide();
//                $('#sop-description-info').show();
//                $('#login-sop').show();
//            })
//            .fail(function (jqXHR, error, errorThrown) {
//                console.log(jqXHR);
//                console.log(error);
//                console.log(errorThrown);
//            });
//    };
//
//});



//$('.start-button').click(function () {
//    if (!(loggedInUser)) {
//        alert('Please login or register');
//    } else {
//        $('.logged-in-username').val(loggedInUser);
//        $('.hide-everything').hide();
//        $('.logout-account').show();
//        $('#questions').show();
//        $('.get-started-instructions').show();
//        $('.answer-questions').show();
//        $('.enter-value-belief').show();
//    };
//});



//$('.save-answers-button').click(function (event) {
//    event.preventDefault();
//    let answer1 = $('.js-answer1').val();
//    let answer2 = $('.js-answer2').val();
//    let answer3 = $('.js-answer3').val();
//    let answer4 = $('.js-answer4').val();
//    let answer5 = $('.js-answer5').val();
//    let answer6 = $('.js-answer6').val();
//    let sopLoggedInUser = $('.logged-in-username').val();
//
//    if ((answer1 == "") || (answer2 == "") || (answer3 == "") || (answer4 == "") || (answer5 == "") || (answer6 == "")) {
//        alert("Please complete each field");
//        return;
//    } else {
//
//        $('.js-completed-sop1').val(answer1);
//        $('.js-completed-sop2').val(answer2);
//        $('.js-completed-sop3').val(answer3);
//        $('.js-completed-sop4').val(answer4);
//        $('#finalValues').val(answer5);
//        $('#finalBeliefs').val(answer6);
//
//
//        usersAnswers.push(answer1, answer2, answer3, answer4, answer5, answer6, sopLoggedInUser);
//
//        for (let i = 0; i < usersAnswers.length; i++) {
//            $('.js-connect-answer' + (i + 1)).text(usersAnswers[i]);
//        };
//
//        $('.js-connect-answer5').html("");
//        $('#values-beliefs-goals .values ul').html("");
//
//        let valuesArray = answer5.split(",");
//        for (let j = 0; j < valuesArray.length; j++) {
//            $('#values-beliefs-goals .values ul').append("<li>" + valuesArray[j] + "</li>");
//            $('.js-connect-answer5').append("<li>" + valuesArray[j] + "</li>");
//        };
//
//
//        $('.js-connect-answer6').html("");
//        $('#values-beliefs-goals .beliefs ul').html("");
//
//        let beliefsArray = answer6.split(",");
//        for (let h = 0; h < beliefsArray.length; h++) {
//            $('#values-beliefs-goals .beliefs ul').append("<li>" + beliefsArray[h] + "</li>");
//            $('.js-connect-answer6').append("<li>" + beliefsArray[h] + "</li>");
//        };
//
//        $('.hide-everything').hide();
//        $('.logout-account').show();
//        $('#review').show();
//    };
//});







//$('.save-completed-button').click(function (event) {
//
//    event.preventDefault();
//    let createSopFreeStyle = $('.create-text').val();
//    let createGoals = $('.my-goals').val();
//    let sopId = $('.updated-sop-id').val();
//
//    if (createSopFreeStyle == "") {
//        alert("Please create Statement of Purpose");
//        return;
//    } else if (createGoals != "") {
//        usersCompletedSop.push(createSopFreeStyle);
//
//        $('#completed-sop .purpose p').html(createSopFreeStyle);
//
//        $('.hide-everything').hide();
//        $('.navigate-options').show();
//        $('.logout-account').show();
//        $('#completed-sop').show();
//        $('#values-beliefs-goals').show();
//        $('#finalSopBody').val(createSopFreeStyle);
//    } else {
//        usersCompletedSop.push(createSopFreeStyle);
//
//        $('#completed-sop .purpose p').html(createSopFreeStyle);
//
//        $('.hide-everything').hide();
//        $('.navigate-options').show();
//        $('.logout-account').show();
//        $('#completed-sop').show();
//        $('#create-goals').show();
//        $('#finalSopBody').val(createSopFreeStyle);
//    }
//
//    const userIdObject = {
//        body: createSopFreeStyle
//    }
//
//    $.ajax({
//            type: 'PUT',
//            url: '/statements/' + sopId,
//            dataType: 'json',
//            data: JSON.stringify(userIdObject),
//            contentType: 'application/json'
//        })
//        .done(function (result) {})
//        .fail(function (jqXHR, error, errorThrown) {
//            console.log(jqXHR);
//            console.log(error);
//            console.log(errorThrown);
//        });
//});


//
//$('.save-completed-template-button').click(function (event) {
//
//    event.preventDefault();
//    let createSopSentence1 = $('.js-completed-sop1').val();
//    let createSopSentence2 = $('.js-completed-sop2').val();
//    let createSopSentence3 = $('.js-completed-sop3').val();
//    let createSopSentence4 = $('.js-completed-sop4').val();
//    if ((createSopSentence1 == "") || (createSopSentence2 == "") || (createSopSentence3 == "") || (createSopSentence4 == "")) {
//        alert("Please create Statement of Purpose");
//        return;
//    } else {
//        let createSopTemplate = "It is my purpose to " + createSopSentence1 + ". I will grow and develop my " + createSopSentence2 + ". The people that are most important to me are " + createSopSentence3 + ". I will strive to " + createSopSentence4 + ".";
//
//
//        $('#completed-sop .purpose p').html("");
//        $('#completed-sop .purpose p').append("<p>" + createSopTemplate + "</p>");
//
//        $('#finalSopBody').val(createSopTemplate);
//    }
//
//    $('.hide-everything').hide();
//    $('.logout-account').show();
//    $('.navigate-options').show();
//    $('#completed-sop').show();
//    $('#create-goals').show();
//});




//$('.save-goals-button').click(function () {
//    let user = $('#finalLoggedinUser').val();
//    let body = $('#finalSopBody').val();
//    let values = $('#finalValues').val();
//    let beliefs = $('#finalBeliefs').val();
//    let goals = $('.my-goals').val();
//    if (goals == "") {
//        alert("Please create goals");
//        return;
//    } else {
//        $('#values-beliefs-goals .goals ul').html("");
//        let goalsArray = goals.split(",");
//        for (let k = 0; k < goalsArray.length; k++) {
//            $('#values-beliefs-goals .goals ul').append("<li>" + goalsArray[k] + "</li>");
//        };
//        $('.hide-everything').hide();
//        $('.navigate-options').show();
//        $('.logout-account').show();
//        $('#completed-sop').show();
//        $('#values-beliefs-goals').show();
//
//        const userStatementObject = {
//            user: user,
//            body: body,
//            values: values,
//            beliefs: beliefs,
//            goals: goals
//        }
//
//        $.ajax({
//                type: 'POST',
//                url: '/statements/create',
//                dataType: 'json',
//                data: JSON.stringify(userStatementObject),
//                contentType: 'application/json'
//            })
//            .done(function (result) {
//
//            })
//            .fail(function (jqXHR, error, errorThrown) {
//                console.log(jqXHR);
//                console.log(error);
//                console.log(errorThrown);
//            });
//        displayUpdatedStatement(user);
//    }
//});



$('#logout').click(function () {
    window.location.reload();
});
