/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-US': {
        translation: {
            FACTS: [
                'Vodka.',
                'Tequilla. turn up',
                'wine, fancy or 2 buck chucks would work',
                'Rum',
                'Beer',
                'a beer and chug some 40s',
                'Whiskey',
                'champagne',
                'a Bloody mary',
                'water',
                'Moonshine',
                'Gin and juice',
                'Bourbon',
                "Henney",
                "Sangria",
                "cider",
                "Absinthe",
                "something creamy, may I suggest a white russian",
                "Baileys or Kahlua",
                "screwdriver",
                "jaeger",
                "soju",
                "sake",
                "something blue",
                "a long island",
                "a martini",
                "brandy",
                "malt liquor",
                "wine cooler",
                "a dark and stormy",
                "mulled wine",
                "nothing"


            ],
            SKILL_NAME: 'Drinkname',
            GET_FACT_MESSAGE: "You should drink  ",
            HELP_MESSAGE: 'You can say drink. Ask for a type of drink. Or... you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },

};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'Drink': function () {
        // this.emit(':tell','vodka');

        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function () {
      const speechOutput = this.t('HELP_MESSAGE');
      const reprompt = this.t('HELP_MESSAGE');
      this.emit(':ask', speechOutput, reprompt);
        }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
