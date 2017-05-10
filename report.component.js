var content = {
    title: 'Test Summary',
    candidate: {
        name: 'Uttam Pratap',
        role: 'AL1',
        email: 'upratap@sapient.com',
        phone: '9693098182'
    },

    stats: {
        testDate: "25/04/2017",
        testTime: "10:54",
        tabsSwitch: 3,
        totalDistractedTime: 5,
        totalTimeTaken: 30,
        score: {
            MO: 70,
            MM: 100
        },

    },
    questions: [{
            question: "When a class B can extend another class A, we say that?",
            options: [
                'A is the superclass and B is the subclass',
                'B is the superclass and A is the subclass',
                'Both A and B are the superclass',
                'Both A and B are the subclass'
            ],
            correctOption: 2,
            answer: 3,
            timeTaken: 30
        },
        {
            question: "When a class B can extend another class A, we say that?",
            options: [
                'A is the superclass and B is the subclass',
                'B is the superclass and A is the subclass',
                'Both A and B are the superclass',
                'Both A and B are the subclass'
            ],
            correctOption: 1,
            answer: 1,
            timeTaken: 40
        },
        {
            question: "When a class B can extend another class A, we say that?",
            options: [
                'A is the superclass and B is the subclass',
                'B is the superclass and A is the subclass',
                'Both A and B are the superclass',
                'Both A and B are the subclass'
            ],
            correctOption: 4,
            answer: 2,
            timeTaken: 40
        }
    ]
}

Handlebars.registerHelper('increment', function(index) {
    return parseInt(index) + 1
});

Handlebars.registerHelper('toUpper', function(str) {
    return str.toUpperCase();
});
Handlebars.registerHelper('toSentenceCase', function(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
});

var sourceTemplate = document.getElementById('template').innerHTML,
    compiledTemplate = Handlebars.compile(sourceTemplate),
    resultTemplate = compiledTemplate(content);


document.querySelector('.container').innerHTML = resultTemplate;