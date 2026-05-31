export interface VocabularyItem {
  id: string
  word: string
  definition: string
  examples: string[]
}

export interface Section {
  title: string
  items: VocabularyItem[]
}

export interface Lesson {
  id: number
  title: string
  sections: Section[]
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Meeting",
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson1-brainstorm",
            word: "brainstorm",
            definition: "to have a discussion to suggest lots of ideas for an activity or for solving a problem",
            examples: [
              "Let's brainstorm some ideas for the new campaign.",
              "We need to start brainstorming solutions to the problem right now."
            ]
          },
          {
            id: "lesson1-review",
            word: "review",
            definition: "to look at or examine carefully especially before making a decision",
            examples: [
              "I think we need more time to review the situation.",
              "Robert, have you already reviewed the new IT security guidelines?"
            ]
          },
          {
            id: "lesson1-identify",
            word: "identify",
            definition: "to recognize something or discover exactly what it is",
            examples: [
              "Have we identified the cause of the problem?",
              "We're very excited because we've identified a gap in the market."
            ]
          },
          {
            id: "lesson1-implement",
            word: "implement",
            definition: "to start using a system or plan",
            examples: [
              "I think we should implement flexitime to help our staff with their work life balance.",
              "We need to implement a new IT system as soon as possible."
            ]
          },
          {
            id: "lesson1-analyze",
            word: "analyze",
            definition: "to study or examine something in detail, to find out more about it",
            examples: [
              "We analyzed the results of the survey and found that most of our customers are satisfied with our products.",
              "The new software will help us to analyze market data."
            ]
          },
          {
            id: "lesson1-approach",
            word: "approach",
            definition: "to deal with something",
            examples: [
              "We need to find out a different way of approaching this problem.",
              "Jack, do you have a suggestion on how we can approach this situation?"
            ]
          },
          {
            id: "lesson1-go-round",
            word: "go round",
            definition: "to ask all the meeting participants for their opinions or ideas about something",
            examples: [
              "Let me just go round the table and get everyone's opinion on this.",
              "Can we go round the table and take a vote?"
            ]
          },
          {
            id: "lesson1-finalize",
            word: "finalize",
            definition: "to finish the last part of a plan, arrangement or business deal",
            examples: [
              "Will we be able to finalize the deal this week?",
              "Maria, could you please finalize the arrangements for our trip to Mumbai?"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Useful Phrasal Verbs",
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson2-fill-in-for-somebody",
            word: "fill in for somebody",
            definition: "to do another person's job for a short period of time because they are not there or are unable to do it",
            examples: [
              "Susan is on holiday this week, so I'm filling it for her.",
              "The boss asked me to fill in for him next week, because he has to go to an important conference."
            ]
          },
          {
            id: "lesson2-look-into-something",
            word: "look into something",
            definition: "to try to find out more information or facts about something",
            examples: [
              "The customer didn't accept our new offer. We're not sure why, so the boss has asked me to look into it.",
              "I am very sorry about the delay. I'll look into it immediately and get back to you within the next two hours."
            ]
          },
          {
            id: "lesson2-get-back-to-someone",
            word: "get back to someone",
            definition: "to talk to someone or call them again in order to give them information that you couldn't give them earlier",
            examples: [
              "I am sorry I don't have that information right now, but I will get back to you by the end of the day. Would that be ok?",
              "He said he'd get back to me today, but I still haven't heard from him."
            ]
          },
          {
            id: "lesson2-come-up",
            word: "come up",
            definition: "to happen, usually unexpectedly",
            examples: [
              "A lot of problems came up in the first week of the project, but now things are running more smoothly.",
              "I'm sorry, but something has just come up and I need to deal with it immediately."
            ]
          },
          {
            id: "lesson2-deal-with-something",
            word: "deal with something",
            definition: "to take action or do something, especially to solve a problem",
            examples: [
              "I had to deal with a lot of customer complaints last week.",
              "We've had some technical problems with the new website, but we are dealing with them."
            ]
          },
          {
            id: "lesson2-set-up",
            word: "set up",
            definition: "to organize or plan something such as a meeting or event",
            examples: [
              "Can you set up a meeting for Thursday afternoon please?",
              "We've set up a series of workshops to train staff on how to use the new software."
            ]
          },
          {
            id: "lesson2-run-out-of-something",
            word: "run out of something",
            definition: "to use all of something, to have nothing left",
            examples: [
              "The printer has run out of ink. Can you change the cartridge please?",
              "We only have a couple of weeks to finish the project. We're running out of time."
            ]
          },
          {
            id: "lesson2-figure-something-out",
            word: "figure something out",
            definition: "to finally understand something or find the solution to a problem after a lot of thought",
            examples: [
              "It took me a few days to figure out how to use the new software.",
              "He's checked the machine three times, but he still can't figure out why it's not working."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Common Email Errors",
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson3-remind",
            word: "remind",
            definition: "make other people think of or keep someone or something in their mind",
            examples: [
              "I would like to remind everyone that registration for the conference ends on Thursday this week."
            ]
          },
          {
            id: "lesson3-until",
            word: "until",
            definition: "how long a situation continues",
            examples: [
              "If something happens until a specific time, you stop doing it at that time."
            ]
          },
          {
            id: "lesson3-by",
            word: "by",
            definition: "a deadline or latest possible time",
            examples: [
              "If something happens by a specific time, it happens at or before that time.",
              "We can assure you that you will receive the goods by 2 pm on Friday."
            ]
          },
          {
            id: "lesson3-im-afraid",
            word: "I'm afraid",
            definition: "politely tell someone something that may annoy, upset or disappoint them",
            examples: [
              "I'm afraid Mr Johnson will not be able to attend the meeting tomorrow."
            ]
          },
          {
            id: "lesson3-discuss",
            word: "discuss",
            definition: "talk about",
            examples: [
              "In our next meeting, we will discuss the new marketing strategy."
            ]
          },
          {
            id: "lesson3-would-you-mind-doing",
            word: "would you mind doing",
            definition: "ask people to do things in a polite form",
            examples: [
              "Would you mind sending me the results of the survey again?"
            ]
          },
          {
            id: "lesson3-inform",
            word: "inform",
            definition: "to formally tell someone about something",
            examples: [
              "I would like to inform you that we have accepted your proposal, and would like to arrange another meeting to discuss the next steps."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Useful Phrasal Verbs for Meetings",
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson4-get-through",
            word: "get through",
            definition: "If you get through a task or an amount of work, you complete it",
            examples: [
              "We have a lot to get through today, so let's begin.",
              "Thanks for a great meeting, everybody! We got through a lot of important business today."
            ]
          },
          {
            id: "lesson4-knuckle-down",
            word: "knuckle down",
            definition: "to focus and work hard on the task or job to be done",
            examples: [
              "We'll have to really knuckle down if we want to finish the project on schedule.",
              "The start of the month was hard, but we knuckled down and hit our sales targets in the end."
            ]
          },
          {
            id: "lesson4-go-over",
            word: "go over",
            definition: "to carefully check or review something",
            examples: [
              "This proposal is very important, so let's go over it one more time.",
              "Alex, please go over the report and make sure there are no mistakes."
            ]
          },
          {
            id: "lesson4-bring-up",
            word: "bring up",
            definition: "to start discussing a topic",
            examples: [
              "That's a very interesting point. I'm glad you brought it up.",
              "I'm sorry, but I don't think we have time for that. Maybe you should bring it up at the next meeting."
            ]
          },
          {
            id: "lesson4-go-on",
            word: "go on",
            definition: "to start talking again after a pause or interruption",
            examples: [
              "Please go on. I'm sorry for interrupting.",
              "May I go on?"
            ]
          },
          {
            id: "lesson4-break-something-down",
            word: "break something down",
            definition: "to separate something into smaller parts so that it's easier to do or understand",
            examples: [
              "The process sounds quite complex. Could you break it down for us please?",
              "There's a lot involved in this task, so it might be better to break it down into smaller tasks."
            ]
          },
          {
            id: "lesson4-point-something-out",
            word: "point something out",
            definition: "to tell someone something that they did not already know or had not thought about",
            examples: [
              "That's completely new to me. Thanks for pointing it out.",
              "I'd just like to point out that these results are from last year, not this year."
            ]
          },
          {
            id: "lesson4-think-something-through",
            word: "think something through",
            definition: "to carefully think about the possible result of doing something",
            examples: [
              "I am afraid that wasn't our best decision. We just didn't think it through.",
              "I am sorry, but I don't think this plan will work. You and your team need to think it through again."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "English Small-Talk & Conversation Skills",
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson5-open-questions",
            word: "Open questions",
            definition: "Use what, when, which, why or how to ask open questions that encourage conversation",
            examples: [
              "What do you think about the new project?",
              "How did that happen?"
            ]
          },
          {
            id: "lesson5-how-what-about-you",
            word: "how/what about you",
            definition: "Use to redirect a question back to the other person and keep the conversation going",
            examples: [
              "I'm fine, thanks. How about you?",
              "I love travelling. What about you?"
            ]
          },
          {
            id: "lesson5-change-the-subject",
            word: "change the subject",
            definition: "Use 'so' or 'by the way' to naturally change the topic of conversation",
            examples: [
              "So, have you been busy lately?",
              "By the way, did you hear about the new office?"
            ]
          },
          {
            id: "lesson5-show-interest",
            word: "show interest",
            definition: "Use 'really' and echo questions to show you're listening and engaged",
            examples: [
              "Really? That's amazing!",
              "You moved to London? That's great!"
            ]
          },
          {
            id: "lesson5-dealing-with-difficult-situations",
            word: "dealing with difficult situations",
            definition: "Phrases for when conversations get uncomfortable",
            examples: [
              "Do you mind if we talk about something else?",
              "I'd rather not talk about that if you don't mind.",
              "Oh, I'm sorry. I didn't mean to upset you.",
              "I didn't mean to offend anyone."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Talking About Hope",
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson6-lets-hope-subject",
            word: "Let's hope + subject",
            definition: "Express hope about something",
            examples: [
              "Let's hope life can get back to normal next year.",
              "Let's hope the weather improves."
            ]
          },
          {
            id: "lesson6-lets-hope-so",
            word: "Let's hope so",
            definition: "Agree with someone's hopeful statement",
            examples: [
              "Do you think life will return to normal next year? Let's hope so.",
              "I have a feeling we're going to win the game tonight. Let's hope so."
            ]
          },
          {
            id: "lesson6-optimistic",
            word: "optimistic",
            definition: "Feeling positive about the future",
            examples: [
              "I am optimistic about 2021.",
              "The government is optimistic that the economy will do better than expected next year."
            ]
          },
          {
            id: "lesson6-cautiously-optimistic",
            word: "cautiously optimistic",
            definition: "hopeful, but there still could be problems or difficulties",
            examples: [
              "I've studied a lot for this exam, so I am feeling cautiously optimistic that I'll get a good result.",
              "Health officials say they are cautiously optimistic about the decrease in coronavirus cases in the last three days."
            ]
          },
          {
            id: "lesson6-optimism",
            word: "optimism",
            definition: "A noun expressing positive feelings about the future",
            examples: [
              "We are full of optimism for the future.",
              "Her enthusiasm and optimism are what make her a great leader."
            ]
          },
          {
            id: "lesson6-i-hope-not",
            word: "I hope not",
            definition: "Express hope that something bad won't happen",
            examples: [
              "Do you think the economic situation will get worse? I hope not.",
              "Do you think we'll lose a lot of customers next year? I certainly hope not."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Introduce Your Company, Product or Service",
    sections: [
      {
        title: "Introduction",
        items: [
          {
            id: "lesson7-my-name-is-and-i-am-the-at",
            word: "My name is... and I am the... at...",
            definition: "Standard professional introduction",
            examples: [
              "My name is (your full name) and I am the (job title) at (company name)."
            ]
          },
          {
            id: "lesson7-im-from",
            word: "I'm... from...",
            definition: "Casual introduction",
            examples: [
              "I'm (your first name) from (company name)."
            ]
          },
          {
            id: "lesson7-mutual-connection-introduction",
            word: "Mutual connection introduction",
            definition: "Introduce yourself via a mutual contact",
            examples: [
              "I'm (your first name) and I'm a colleague/friend of (name of the person you both know). S/he gave me your contact details and mentioned that you might be interested in (the product or area of expertise)."
            ]
          }
        ]
      },
      {
        title: "Reason for writing",
        items: [
          {
            id: "lesson7-i-would-like-to-talk-to-you-about",
            word: "I would like to talk to you about...",
            definition: "Direct reason for contact",
            examples: [
              "I would like to talk to you about how our (name of your product/service) has helped our customers/clients to (name a typical client goal)."
            ]
          },
          {
            id: "lesson7-im-reaching-out-to",
            word: "I'm reaching out to...",
            definition: "Proactive outreach",
            examples: [
              "I'm reaching out to (the person's job title in the plural form) in the (name of industry/business field) like you to let you know about our latest (name of product/service)."
            ]
          },
          {
            id: "lesson7-im-contacting-you-to-introduce",
            word: "I'm contacting you to introduce...",
            definition: "Direct introduction",
            examples: [
              "I'm contacting you to introduce our latest (name of product/service)."
            ]
          }
        ]
      },
      {
        title: "The value you can offer",
        items: [
          {
            id: "lesson7-we-have-been-in-the-market-since",
            word: "We have been in the market since...",
            definition: "Establish credibility with experience",
            examples: [
              "We have been in the market since (the year your company entered the market) and we have worked with over (number) clients to (name a typical client goal)."
            ]
          },
          {
            id: "lesson7-what-our-clients-value-most",
            word: "What our clients value most...",
            definition: "Highlight client satisfaction",
            examples: [
              "What our clients value most about working with us is our exceptional service."
            ]
          },
          {
            id: "lesson7-were-convinced-that",
            word: "We're convinced that...",
            definition: "Express confidence in product",
            examples: [
              "We're convinced that our (name of product/service) will (name a typical client goal) more effectively than anything else currently on the market."
            ]
          }
        ]
      },
      {
        title: "Call to action",
        items: [
          {
            id: "lesson7-would-you-be-available-for-a-short-telephone-call",
            word: "Would you be available for a short telephone call...",
            definition: "Propose a call",
            examples: [
              "Would you be available for a short telephone call on Thursday at 10am where I can provide more details on how we can help your business (name a typical client goal)?"
            ]
          },
          {
            id: "lesson7-id-love-to-schedule-a-brief-10-minute-call",
            word: "I'd love to schedule a brief 10-minute call...",
            definition: "Suggest scheduling",
            examples: [
              "I'd love to schedule a brief 10-minute call to chat about how we can meet your needs."
            ]
          }
        ]
      },
      {
        title: "Closing",
        items: [
          {
            id: "lesson7-i-look-forward-to-hearing-from-you",
            word: "I look forward to hearing from you.",
            definition: "Standard professional closing",
            examples: [
              "I look forward to hearing from you."
            ]
          },
          {
            id: "lesson7-feel-free-to-reach-out-to-me",
            word: "Feel free to reach out to me...",
            definition: "Open invitation",
            examples: [
              "Feel free to reach out to me for further information."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Vocabulary Tips for Improving Fluency",
    sections: [
      {
        title: "Everyday English",
        items: [
          {
            id: "lesson8-quick-shower",
            word: "quick shower",
            definition: "",
            examples: [
              "I'm just going to take a quick shower."
            ]
          },
          {
            id: "lesson8-heavy-rain",
            word: "heavy rain",
            definition: "",
            examples: [
              "The event has been cancelled due to heavy rain."
            ]
          },
          {
            id: "lesson8-cup-of-coffee",
            word: "cup of coffee",
            definition: "",
            examples: [
              "Can I have a cup of coffee, please?"
            ]
          },
          {
            id: "lesson8-parking-ticket",
            word: "parking ticket",
            definition: "",
            examples: [
              "Hurry up! I don't want to get a parking ticket."
            ]
          },
          {
            id: "lesson8-take-a-penalty",
            word: "take a penalty",
            definition: "",
            examples: [
              "Who's going to take the penalty?"
            ]
          },
          {
            id: "lesson8-make-a-mistake",
            word: "make a mistake",
            definition: "",
            examples: [
              "Everybody makes mistakes."
            ]
          },
          {
            id: "lesson8-heavily-pregnant",
            word: "heavily pregnant",
            definition: "",
            examples: [
              "My wife is heavily pregnant, and we need to get the hospital right away."
            ]
          },
          {
            id: "lesson8-perfectly-normal",
            word: "perfectly normal",
            definition: "",
            examples: [
              "It's perfectly normal to be nervous before an exam."
            ]
          }
        ]
      },
      {
        title: "Sales Collocations",
        items: [
          {
            id: "lesson8-potential-client",
            word: "potential client",
            definition: "a person or business who may be interested in the product or service you are offering",
            examples: [
              "I think there are a lot of potential clients in this region."
            ]
          },
          {
            id: "lesson8-lucrative-deal",
            word: "lucrative deal",
            definition: "a deal where you have the possibility to make a lot of money",
            examples: [
              "If we're lucky, this could be a very lucrative deal."
            ]
          },
          {
            id: "lesson8-take-on-a-client",
            word: "take on a client",
            definition: "to start working with a new client",
            examples: [
              "We've taken on a lot of new clients recently."
            ]
          },
          {
            id: "lesson8-sign-the-contract",
            word: "sign the contract",
            definition: "to formally agree to a contract",
            examples: [
              "We hope the client will sign the contract this week."
            ]
          }
        ]
      },
      {
        title: "Marketing Collocations",
        items: [
          {
            id: "lesson8-marketing-campaign",
            word: "marketing campaign",
            definition: "an organized plan to promote or sell something",
            examples: [
              "We are running three different marketing campaigns at the moment."
            ]
          },
          {
            id: "lesson8-customer-journey",
            word: "customer journey",
            definition: "the different steps and interactions a customer goes through with a company, product or service",
            examples: [
              "How can we make the customer journey more unique?"
            ]
          },
          {
            id: "lesson8-break-into-a-market",
            word: "break into a market",
            definition: "to start operating and being successful in a market",
            examples: [
              "We're hoping to break into the Indian market this year."
            ]
          },
          {
            id: "lesson8-extremely-successful",
            word: "extremely successful",
            definition: "very successful",
            examples: [
              "She has run many extremely successful marketing campaigns in her career."
            ]
          }
        ]
      },
      {
        title: "Finance Collocations",
        items: [
          {
            id: "lesson8-balance-sheet",
            word: "balance sheet",
            definition: "a statement which shows a company's financial situation at a specific point in time",
            examples: [
              "The company is healthy and has a strong balance sheet."
            ]
          },
          {
            id: "lesson8-go-bankrupt",
            word: "go bankrupt",
            definition: "when a company doesn't have enough money to pay its debts",
            examples: [
              "Unfortunately, the company went bankrupt last year."
            ]
          },
          {
            id: "lesson8-highly-profitable",
            word: "highly profitable",
            definition: "very profitable",
            examples: [
              "It has developed into a highly profitable business over the last five years."
            ]
          },
          {
            id: "lesson8-financial-advisor",
            word: "financial advisor",
            definition: "a person who helps private people and businesses with their finances",
            examples: [
              "Can you recommend a good financial advisor?"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "How to Deal with Impolite People at Work",
    sections: [
      {
        title: "Negative Vocabulary",
        items: [
          {
            id: "lesson9-rude",
            word: "rude",
            definition: "another word for impolite",
            examples: [
              "There's no need to be so rude."
            ]
          },
          {
            id: "lesson9-offensive",
            word: "offensive",
            definition: "very rude and likely to upset people",
            examples: [
              "Why are you being so offensive?"
            ]
          },
          {
            id: "lesson9-insulting",
            word: "insulting",
            definition: "saying something that is very rude and offensive",
            examples: [
              "What he said was extremely insulting."
            ]
          },
          {
            id: "lesson9-disrespectful",
            word: "disrespectful",
            definition: "showing no respect",
            examples: [
              "She's always so disrespectful."
            ]
          },
          {
            id: "lesson9-obnoxious",
            word: "obnoxious",
            definition: "very rude and unpleasant",
            examples: [
              "He's one of the most obnoxious people I've ever worked with."
            ]
          },
          {
            id: "lesson9-abusive",
            word: "abusive",
            definition: "using extremely rude and insulting language",
            examples: [
              "I am afraid I'll have to end the call if you don't stop being abusive."
            ]
          }
        ]
      },
      {
        title: "Dealing with an impolite customer",
        items: [
          {
            id: "lesson9-i-can-understand-that-you-are-angry-but-there-is-no-need-to-get-personal",
            word: "I can understand that you are angry, but there is no need to get personal.",
            definition: "Calm down an angry customer while maintaining boundaries",
            examples: [
              "I can understand that you are angry, but there is no need to get personal. I'm just trying to help."
            ]
          },
          {
            id: "lesson9-i-completely-understand-why-youre-so-upset-but",
            word: "I completely understand why you're so upset, but...",
            definition: "Acknowledge feelings while setting limits",
            examples: [
              "I completely understand why you're so upset, but I don't think it's fair to speak to me like that - I am just doing my job."
            ]
          },
          {
            id: "lesson9-could-you-please-tone-down-your-language",
            word: "Could you please tone down your language?",
            definition: "Politely ask someone to speak more respectfully",
            examples: [
              "Could you please tone down your language, sir/madam?"
            ]
          },
          {
            id: "lesson9-i-do-want-to-help-you-but-i-cant-tolerate-the-language",
            word: "I do want to help you, but I can't tolerate the language.",
            definition: "Set boundaries while showing willingness to help",
            examples: [
              "I do want to help you, but I'm afraid I can't tolerate the kind of language you're using."
            ]
          },
          {
            id: "lesson9-ill-be-forced-to-end-the-call-if-you-continue",
            word: "I'll be forced to end the call if you continue.",
            definition: "Final warning before ending a call",
            examples: [
              "I am very sorry, but if you continue to use this language, I'll be forced to end the call."
            ]
          },
          {
            id: "lesson9-i-am-afraid-i-have-to-end-the-call",
            word: "I am afraid I have to end the call.",
            definition: "End the call due to abusive language",
            examples: [
              "I am afraid I have to end the call if you don't stop being abusive/using such abusive language."
            ]
          }
        ]
      },
      {
        title: "Dealing with an impolite colleague",
        items: [
          {
            id: "lesson9-theres-no-need-to-be-rude",
            word: "There's no need to be rude.",
            definition: "Direct but polite response to rudeness",
            examples: [
              "There's no need to be rude."
            ]
          },
          {
            id: "lesson9-i-think-you-should-keep-those-kinds-of-comments-to-yourself",
            word: "I think you should keep those kinds of comments to yourself.",
            definition: "Tell a colleague their comments are inappropriate",
            examples: [
              "I think you should keep those kinds of comments to yourself."
            ]
          },
          {
            id: "lesson9-i-think-you-need-to-turn-it-down-a-little-bit",
            word: "I think you need to turn it down a little bit.",
            definition: "Ask a colleague to moderate their behavior",
            examples: [
              "I think you need to turn it down a little bit."
            ]
          },
          {
            id: "lesson9-im-sorry-but-thats-totally-inappropriate",
            word: "I'm sorry, but that's totally inappropriate.",
            definition: "Strongly state that behavior is not acceptable",
            examples: [
              "I'm sorry, but that's totally inappropriate."
            ]
          },
          {
            id: "lesson9-i-dont-think-theres-any-point-continuing-this-conversation",
            word: "I don't think there's any point continuing this conversation.",
            definition: "End an unproductive conversation",
            examples: [
              "I don't think there's any point continuing this conversation."
            ]
          },
          {
            id: "lesson9-i-think-it-would-be-better-to-have-this-conversation-another-time",
            word: "I think it would be better to have this conversation another time.",
            definition: "Suggest postponing a difficult conversation",
            examples: [
              "I think it would be better to have this conversation another time."
            ]
          },
          {
            id: "lesson9-i-dont-know-if-you-realise-this-but-what-you-said-really-hurt-my-feelings",
            word: "I don't know if you realise this, but what you said really hurt my feelings.",
            definition: "Express that a colleague's words were hurtful",
            examples: [
              "I don't know if you realise this, but what you said really hurt my feelings."
            ]
          },
          {
            id: "lesson9-i-really-appreciate-it-if-you-could-be-more-tactful-in-future",
            word: "I really appreciate it if you could be more tactful in future.",
            definition: "Ask a colleague to be more sensitive",
            examples: [
              "I really appreciate it if you could be more tactful in future."
            ]
          }
        ]
      },
      {
        title: "Dealing with an impolite boss",
        items: [
          {
            id: "lesson9-with-all-due-respect",
            word: "With all due respect...",
            definition: "Disagree respectfully with a superior",
            examples: [
              "With all due respect, I don't think that's very appropriate."
            ]
          },
          {
            id: "lesson9-youre-my-boss-and-i-have-a-lot-of-respect-for-you-but",
            word: "You're my boss, and I have a lot of respect for you, but...",
            definition: "Express disagreement while acknowledging authority",
            examples: [
              "You're my boss, and I have a lot of respect for you, but I don't think it's fair to speak to me like that."
            ]
          },
          {
            id: "lesson9-i-just-wanted-to-talk-to-you-about",
            word: "I just wanted to talk to you about...",
            definition: "Open a difficult conversation with a boss",
            examples: [
              "I just wanted to talk to you about yesterday's meeting. I'm not sure you realise this, but what you said was extremely insulting."
            ]
          },
          {
            id: "lesson9-i-am-just-wondering-if-theres-anything-ive-done-to-upset-you",
            word: "I am just wondering if there's anything I've done to upset you.",
            definition: "Address ongoing issues with a boss",
            examples: [
              "I am just wondering if there's anything I've done to upset you. I feel that you've been giving me a very hard time lately."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'Say "Very Important" in English',
    sections: [
      {
        title: "Five Adjectives",
        items: [
          {
            id: "lesson10-crucial",
            word: "crucial",
            definition: "extremely important",
            examples: [
              "Claudia's work has been crucial to the success of the project."
            ]
          },
          {
            id: "lesson10-vital",
            word: "vital",
            definition: "absolutely necessary or important",
            examples: [
              "It's vital that we explain the situation to our customers immediately."
            ]
          },
          {
            id: "lesson10-essential",
            word: "essential",
            definition: "absolutely necessary",
            examples: [
              "Having loyal and motivated employees is essential if you want to have a successful business."
            ]
          },
          {
            id: "lesson10-key",
            word: "key",
            definition: "most important",
            examples: [
              "A key factor in our success is the innovative design of our products."
            ]
          },
          {
            id: "lesson10-fundamental",
            word: "fundamental",
            definition: "forming the base, from which everything else develops",
            examples: [
              "Limiting our impact on the environment is a fundamental part of our businesses and something we all take very seriously."
            ]
          }
        ]
      },
      {
        title: "Four Adverbs",
        items: [
          {
            id: "lesson10-extremely",
            word: "extremely",
            definition: "to a very great degree",
            examples: [
              "It's extremely important that we find a solution to this problem as soon as possible."
            ]
          },
          {
            id: "lesson10-particularly",
            word: "particularly",
            definition: "more than usually",
            examples: [
              "Please inform Mr Sahin about the situation immediately. That's particularly important."
            ]
          },
          {
            id: "lesson10-vitally",
            word: "vitally",
            definition: "in a way that is absolutely necessary",
            examples: [
              "The CEO of the company says it's vitally important that all employees are informed about the new company strategy."
            ]
          },
          {
            id: "lesson10-crucially",
            word: "crucially",
            definition: "in a way that is extremely important",
            examples: [
              "This new partnership is crucially important to the future of the companies."
            ]
          }
        ]
      },
      {
        title: "Advanced Options",
        items: [
          {
            id: "lesson10-of-the-utmost-importance",
            word: "of the utmost importance",
            definition: "as important as possible",
            examples: [
              "The safety of our employees is of the utmost importance."
            ]
          },
          {
            id: "lesson10-imperative",
            word: "imperative",
            definition: "extremely important or urgent",
            examples: [
              "It is imperative that we build trust with customers by listening to them and meeting their needs."
            ]
          },
          {
            id: "lesson10-paramount",
            word: "paramount",
            definition: "more important than anything else",
            examples: [
              "We have a lot of priorities at the moment, but reducing costs is paramount."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Encourage and Support Colleagues at Work",
    sections: [
      {
        title: "Colleague is learning something new",
        items: [
          {
            id: "lesson11-keep-going-and-youll-get-there",
            word: "Keep going and you'll get there",
            definition: "Encourage someone who is struggling with something new",
            examples: [
              "I know it can be frustrating at the start, but I think you're doing really well. Keep going and you'll get there."
            ]
          },
          {
            id: "lesson11-hang-in-there-you-are-doing-great",
            word: "Hang in there, you are doing great!",
            definition: "Encourage someone to keep trying",
            examples: [
              "Hang in there, you are doing great!"
            ]
          },
          {
            id: "lesson11-come-on-youve-got-this",
            word: "Come on, you've got this!",
            definition: "Express confidence in someone's ability",
            examples: [
              "Come on, you've got this!"
            ]
          }
        ]
      },
      {
        title: "Colleague doubts about leading a project",
        items: [
          {
            id: "lesson11-maybe-youre-overthinking-this",
            word: "Maybe you're overthinking this",
            definition: "Reassure someone who is doubting themselves",
            examples: [
              "Maybe you're overthinking this, you did really well on the last project and that one was just as important."
            ]
          },
          {
            id: "lesson11-youve-come-really-far",
            word: "You've come really far",
            definition: "Acknowledge someone's progress",
            examples: [
              "You've come really far in the last few months, and I know you can do it!"
            ]
          },
          {
            id: "lesson11-youve-earned-this",
            word: "You've earned this",
            definition: "Validate someone's right to an opportunity",
            examples: [
              "You've earned this. There's no reason why you can't lead this project."
            ]
          },
          {
            id: "lesson11-everyone-has-complete-faith-in-you",
            word: "Everyone has complete faith in you",
            definition: "Reassure someone of team support",
            examples: [
              "Everyone in our department has complete faith in you. You'll do a great job!"
            ]
          }
        ]
      },
      {
        title: "Colleague thinking about going for a promotion",
        items: [
          {
            id: "lesson11-why-wouldnt-they-give-you-a-chance",
            word: "Why wouldn't they give you a chance",
            definition: "Encourage someone to be confident",
            examples: [
              "Why wouldn't they give you a chance. You're intelligent, hardworking and you know the company inside out."
            ]
          },
          {
            id: "lesson11-just-go-for-it",
            word: "Just go for it!",
            definition: "Encourage someone to take action",
            examples: [
              "You'll never know if you don't try! What do you have to lose? Just go for it!"
            ]
          }
        ]
      },
      {
        title: "Colleague needs to make a big decision",
        items: [
          {
            id: "lesson11-ill-support-you-either-way",
            word: "I'll support you either way",
            definition: "Show unconditional support",
            examples: [
              "I'll support you either way. Whatever you decide, I'm 100% behind you. You have my backing."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 12,
    title: 'Other Ways to Say "I Think"',
    sections: [
      {
        title: "Informal",
        items: [
          {
            id: "lesson12-i-feel-that",
            word: "I feel that...",
            definition: "Express a personal opinion informally",
            examples: [
              "I feel that we should invest."
            ]
          },
          {
            id: "lesson12-i-believe",
            word: "I believe...",
            definition: "State what you think",
            examples: [
              "I believe that investing now is the best option.",
              "I honestly believe that investing now is the best option."
            ]
          },
          {
            id: "lesson12-i-reckon",
            word: "I reckon...",
            definition: "Give an informal opinion",
            examples: [
              "I reckon it would be better to wait and see how things develop."
            ]
          },
          {
            id: "lesson12-if-you-ask-me",
            word: "If you ask me...",
            definition: "Give your opinion directly",
            examples: [
              "If you ask me, we should wait until we have more information."
            ]
          }
        ]
      },
      {
        title: "Formal",
        items: [
          {
            id: "lesson12-as-far-as-i-am-concerned",
            word: "As far as I am concerned...",
            definition: "Express a formal opinion",
            examples: [
              "As far as I am concerned, the investment is too risky."
            ]
          },
          {
            id: "lesson12-my-thoughts-on-the-matter-are",
            word: "My thoughts on the matter are...",
            definition: "Share formal thoughts",
            examples: [
              "My thoughts on the matter are in line with yours."
            ]
          },
          {
            id: "lesson12-my-personal-opinion",
            word: "My personal opinion...",
            definition: "State a formal personal opinion",
            examples: [
              "My personal opinion is that we should take the opportunity while we can."
            ]
          },
          {
            id: "lesson12-i-am-of-the-opinion-that",
            word: "I am of the opinion that...",
            definition: "Very formal way to express an opinion",
            examples: [
              "I am of the opinion that this kind of investment is exactly what we need."
            ]
          },
          {
            id: "lesson12-it-is-my-view-that",
            word: "It is my view that...",
            definition: "Very formal way to state a view",
            examples: [
              "It is my view that we should examine everything in more detail before making such a big decision."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Ask for and Give Advice",
    sections: [
      {
        title: "Asking for advice",
        items: [
          {
            id: "lesson13-what-should-i-do",
            word: "What should I do?",
            definition: "Ask for general advice",
            examples: [
              "I'm pretty sure the boss is going to ask me to lead the next project, but I don't think I'm ready. What should I do?"
            ]
          },
          {
            id: "lesson13-what-do-you-think-i-should-do",
            word: "What do you think I should do?",
            definition: "Ask for someone's opinion on what action to take",
            examples: [
              "We have to let someone in our department go and I don't know how to decide. What do you think I should do?"
            ]
          },
          {
            id: "lesson13-how-would-you-handle-this-situation",
            word: "How would you handle this situation?",
            definition: "Ask how someone else would deal with a problem",
            examples: [
              "We have to let someone in our department go and I don't know how to decide. How would you handle this situation?"
            ]
          },
          {
            id: "lesson13-what-would-you-do-if-you-were-me",
            word: "What would you do if you were me?",
            definition: "Put yourself in someone's position for advice",
            examples: [
              "I've been offered a new job, but I am not sure if I should take it. What would you do if you were me?"
            ]
          },
          {
            id: "lesson13-i-could-really-do-with-some-advice-on-this",
            word: "I could really do with some advice on this.",
            definition: "Express a strong need for advice",
            examples: [
              "I could really do with some advice on this."
            ]
          },
          {
            id: "lesson13-can-you-give-me-some-advice-please",
            word: "Can you give me some advice, please?",
            definition: "Directly ask for advice",
            examples: [
              "Can you give me some advice, please?"
            ]
          },
          {
            id: "lesson13-what-would-you-advise-me-to-do",
            word: "What would you advise me to do?",
            definition: "Formal way to ask for advice",
            examples: [
              "What would you advise me to do?"
            ]
          },
          {
            id: "lesson13-how-would-you-approach-this",
            word: "How would you approach this?",
            definition: "Ask for someone's strategy",
            examples: [
              "How would you approach this?"
            ]
          }
        ]
      },
      {
        title: "Giving advice",
        items: [
          {
            id: "lesson13-i-think-you-should",
            word: "I think you should...",
            definition: "Direct way to give advice",
            examples: [
              "If you don't think you're ready, you should talk to your boss openly and honestly."
            ]
          },
          {
            id: "lesson13-if-i-were-you-id",
            word: "If I were you, I'd...",
            definition: "Give advice by imagining yourself in their position",
            examples: [
              "If I were you, I'd take it. You've been unhappy in your current job for a long time, and I think a change of scenery would do you good."
            ]
          },
          {
            id: "lesson13-why-dont-you",
            word: "Why don't you...?",
            definition: "Suggest an action in a friendly way",
            examples: [
              "Why don't you talk to your boss openly and honestly about the situation?"
            ]
          },
          {
            id: "lesson13-i-would-suggest-recommend-doing",
            word: "I would suggest/recommend doing...",
            definition: "Formal way to give advice",
            examples: [
              "I would suggest/recommend doing this training course before you apply for a promotion."
            ]
          },
          {
            id: "lesson13-my-advice-would-be",
            word: "My advice would be...",
            definition: "State your advice directly",
            examples: [
              "My advice would be to accept the offer but to ask for better delivery terms."
            ]
          },
          {
            id: "lesson13-i-would-strongly-advise-you-to",
            word: "I would strongly advise you to...",
            definition: "Give strong, emphatic advice",
            examples: [
              "I would strongly advise you to invest more money in training and development."
            ]
          },
          {
            id: "lesson13-one-way-you-could-approach-this-would-be-to",
            word: "One way you could approach this would be to...",
            definition: "Suggest a strategy",
            examples: [
              "One way you could approach this would be to speak with each member of your team individually and see how they react."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Advanced Vocabulary for Describing Colleagues",
    sections: [
      {
        title: "Negative Characteristics",
        items: [
          {
            id: "lesson14-cocky",
            word: "cocky",
            definition: "too confident about yourself and your abilities, especially in a way that annoys other people",
            examples: [
              "Julia is the best salesperson in the company, and she knows it. I like her but I wish she wasn't so cocky."
            ]
          },
          {
            id: "lesson14-naive",
            word: "naive",
            definition: "having or showing a lack of knowledge or experience; believing things too easily or trusting people too quickly",
            examples: [
              "To be honest, I think Peter is too naive to be involved in the negotiations. We need someone with more experience."
            ]
          },
          {
            id: "lesson14-opinionated",
            word: "opinionated",
            definition: "often expressing very strong opinions about things",
            examples: [
              "Klaus is very witty but he can also be very opinionated, which means talking to him can be very hard work."
            ]
          },
          {
            id: "lesson14-condescending",
            word: "condescending",
            definition: "behaving as if they are better, more intelligent or more important than other people",
            examples: [
              "Nobody in our department likes working with her because she is always so condescending."
            ]
          },
          {
            id: "lesson14-know-it-all",
            word: "know-it-all",
            definition: "a person who thinks they know much more than everybody",
            examples: [
              "I thought Gina was nice when I first started working with her, but after a while, I realized that she's a know-it-all."
            ]
          },
          {
            id: "lesson14-busybody",
            word: "busybody",
            definition: "a person who's interested in things that don't involve him or her, especially other people's private matters",
            examples: [
              "Frank is such a busybody - He's always asking people in the office about their families and other private things."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Some Ways to Change Everyday English into Professional English",
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson15-consider",
            word: "consider",
            definition: "to think carefully about something (more formal than 'think about')",
            examples: [
              "We'd like some more time to consider your offer."
            ]
          },
          {
            id: "lesson15-enquire-about",
            word: "enquire about",
            definition: "to ask for information (more formal than 'ask about')",
            examples: [
              "I'm writing to enquire/inquire about the status of our order."
            ]
          },
          {
            id: "lesson15-purchase",
            word: "purchase",
            definition: "to buy something (more formal than 'buy')",
            examples: [
              "Did you purchase the product in our online shop or in one of our stores?"
            ]
          },
          {
            id: "lesson15-concern",
            word: "concern",
            definition: "to worry about something (more formal than 'worry about')",
            examples: [
              "We are concerned about the impact these changes will have on our business."
            ]
          },
          {
            id: "lesson15-sufficient",
            word: "sufficient",
            definition: "enough (more formal than 'enough')",
            examples: [
              "Unfortunately, we don't have sufficient resources for this project."
            ]
          },
          {
            id: "lesson15-perhaps",
            word: "perhaps",
            definition: "maybe (more formal than 'maybe')",
            examples: [
              "Perhaps we could discuss some other options."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Talk About Turnover",
    sections: [
      {
        title: "Sales Turnover",
        items: [
          {
            id: "lesson16-turnover",
            word: "turnover",
            definition: "the amount of money a business receives from its customers for goods and services sold",
            examples: [
              "We had a turnover of $1.2m last year.",
              "The company has an annual turnover of $40m.",
              "We want to achieve a 10% increase in turnover next year.",
              "Turnover was lower than expected last month."
            ]
          }
        ]
      },
      {
        title: "Employee/Staff Turnover",
        items: [
          {
            id: "lesson16-employee-turnover",
            word: "employee turnover",
            definition: "the rate or percentage at which employees leave a company and are replaced by new employees",
            examples: [
              "The call centre industry has very high rates of staff turnover.",
              "We managed to reduce employee turnover by 15% last year."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 17,
    title: "To Settle In",
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson17-settle-in",
            word: "settle in",
            definition: "to become familiar with somewhere new and to feel comfortable and happy there",
            examples: [
              "So how's Tom's new job going? Has he settled in well?",
              "Don't be afraid to ask any questions. I'm here to help you settle in.",
              "Well, how are you settling in?",
              "We moved from the countryside to the city last year. It took us a while to settle in, but now we absolutely love it!",
              "We were surprised how quickly the kids settled in at the new school."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 18,
    title: "Talk About Branding",
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson18-brand-identity",
            word: "brand identity",
            definition: "what a company wants the consumer to think about a brand - includes logo, colors, packaging, how the company communicates with its customers",
            examples: [
              "Having a professional website is an essential part of establishing your brand identity."
            ]
          },
          {
            id: "lesson18-brand-image",
            word: "brand image",
            definition: "what the consumers/public actually think about the brand",
            examples: [
              "We believe our company has a very strong brand image."
            ]
          },
          {
            id: "lesson18-brand-awareness",
            word: "brand awareness",
            definition: "how well consumers know a company's brand, how familiar they are with it",
            examples: [
              "The company has a high level of brand awareness in Ireland, but it's not very well-known in the UK."
            ]
          },
          {
            id: "lesson18-brand-loyalty",
            word: "brand loyalty",
            definition: "when consumers always buy the same brand from the same company because they trust it and like it",
            examples: [
              "We're hoping to increase brand loyalty by offering even better customer services in the future."
            ]
          },
          {
            id: "lesson18-premium-brand",
            word: "premium brand",
            definition: "usually very high quality and expensive",
            examples: [
              "Apple is a premium brand."
            ]
          },
          {
            id: "lesson18-economy-own-brand",
            word: "economy/own-brand",
            definition: "brands or products with very low prices, e.g. supermarket's own-label product",
            examples: [
              "The quality of supermarkets' own-brand products has increased significantly in the last five years."
            ]
          },
          {
            id: "lesson18-leading-brand",
            word: "leading brand",
            definition: "a brand that is one of the best or most popular in its market",
            examples: [
              "Netflix is a leading brand in the world of streaming."
            ]
          },
          {
            id: "lesson18-well-known-brand",
            word: "well-known brand",
            definition: "a brand that many people know about",
            examples: [
              "Channel is a well-known fashion brand."
            ]
          },
          {
            id: "lesson18-major-brand",
            word: "major brand",
            definition: "a very large and important brand",
            examples: [
              "Puma is a major sports brand."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 19,
    title: "Ways to End an Email",
    sections: [
      {
        title: "Formal Emails",
        items: [
          {
            id: "lesson19-best-regards-kind-regards",
            word: "best regards / kind regards",
            definition: "Use when writing to people who you don't know very well, and when you want to make a professional impression.",
            examples: [
              "Use when writing to people who you don't know very well, and when you want to make a professional impression."
            ]
          },
          {
            id: "lesson19-thank-you-very-much",
            word: "Thank you very much.",
            definition: "Use when writing a formal request to ask someone for something.",
            examples: [
              "Use when writing a formal request to ask someone for something."
            ]
          },
          {
            id: "lesson19-i-look-forward-to-seeing-you-then",
            word: "I look forward to seeing you then.",
            definition: "Use when making or confirming an arrangement to meet someone.",
            examples: [
              "Use when making or confirming an arrangement to meet someone."
            ]
          }
        ]
      },
      {
        title: "Semi-formal Emails",
        items: [
          {
            id: "lesson19-best-regards",
            word: "Best / Regards",
            definition: "Use when you know the person you're writing to, but not very well.",
            examples: [
              "Use when you know the person you're writing to, but not very well."
            ]
          },
          {
            id: "lesson19-many-thanks",
            word: "many thanks",
            definition: "Use when writing a request.",
            examples: [
              "Use when writing a request."
            ]
          },
          {
            id: "lesson19-looking-forward-to-seeing-you-then",
            word: "looking forward to seeing you then",
            definition: "Use when making or confirming an arrangement to meet someone.",
            examples: [
              "Use when making or confirming an arrangement to meet someone."
            ]
          }
        ]
      },
      {
        title: "Informal Emails",
        items: [
          {
            id: "lesson19-take-care",
            word: "take care",
            definition: "A very friendly way to close an informal email.",
            examples: [
              "A very friendly way to close an informal email."
            ]
          },
          {
            id: "lesson19-cheers",
            word: "cheers",
            definition: "Common in Ireland, England, Australia. Another friendly way of ending an informal email.",
            examples: [
              "Common in Ireland, England, Australia. Another friendly way of ending an informal email."
            ]
          },
          {
            id: "lesson19-thanks",
            word: "thanks",
            definition: "Use when writing an informal request.",
            examples: [
              "Use when writing an informal request."
            ]
          },
          {
            id: "lesson19-thanks-again",
            word: "Thanks again",
            definition: "Use when writing to thank someone for something.",
            examples: [
              "Use when writing to thank someone for something."
            ]
          },
          {
            id: "lesson19-talk-to-you-soon-talk-soon",
            word: "Talk to you soon / Talk soon",
            definition: "Use with people who you have regular contact with.",
            examples: [
              "Use with people who you have regular contact with."
            ]
          },
          {
            id: "lesson19-see-you-soon",
            word: "see you soon",
            definition: "A friendly way to end an informal email.",
            examples: [
              "A friendly way to end an informal email."
            ]
          },
          {
            id: "lesson19-see-you-then",
            word: "see you then",
            definition: "Use when making or confirming an arrangement.",
            examples: [
              "Use when making or confirming an arrangement."
            ]
          },
          {
            id: "lesson19-have-a-great-lovely-brilliant-weekend",
            word: "have a great/lovely/brilliant weekend",
            definition: "Use when it's close to the weekend (Thursday or Friday).",
            examples: [
              "Use when it's close to the weekend (Thursday or Friday)."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 20,
    title: "Nine Ways to Ask for and Give Opinions",
    sections: [
      {
        title: "Asking for opinions",
        items: [
          {
            id: "lesson20-what-are-your-thoughts-on",
            word: "What are your thoughts on...?",
            definition: "Ask for someone's opinion",
            examples: [
              "What are your thoughts on the new investment strategy?"
            ]
          },
          {
            id: "lesson20-how-do-you-feel-about",
            word: "How do you feel about...?",
            definition: "Ask how someone feels about something",
            examples: [
              "How do you feel about the introduction of flexi-time?"
            ]
          },
          {
            id: "lesson20-do-you-have-any-views-on",
            word: "Do you have any views on...?",
            definition: "Formal way to ask for opinions",
            examples: [
              "Do you have any views on this topic?"
            ]
          }
        ]
      },
      {
        title: "Giving opinions",
        items: [
          {
            id: "lesson20-the-way-i-see-it",
            word: "The way I see it...",
            definition: "Express your perspective",
            examples: [
              "The way I see it, we need to invest more in staff training."
            ]
          },
          {
            id: "lesson20-as-far-as-im-concerned",
            word: "As far as I'm concerned...",
            definition: "State your position on a matter",
            examples: [
              "As far as I'm concerned, Mark is the best person for the job."
            ]
          },
          {
            id: "lesson20-in-my-view",
            word: "In my view...",
            definition: "State your opinion",
            examples: [
              "In my view, the project was a great success."
            ]
          }
        ]
      },
      {
        title: "Giving strong opinions",
        items: [
          {
            id: "lesson20-i-am-absolutely-convinced-that",
            word: "I am absolutely convinced that...",
            definition: "Express very strong belief",
            examples: [
              "I'm absolutely convinced that the new marketing strategy will work."
            ]
          },
          {
            id: "lesson20-i-strongly-believe-that",
            word: "I strongly believe that...",
            definition: "Express firm belief",
            examples: [
              "I strongly believe that we can achieve these high targets."
            ]
          },
          {
            id: "lesson20-i-have-no-doubt-that",
            word: "I have no doubt that...",
            definition: "Express complete certainty",
            examples: [
              "I have no doubt that Alina will find the right solution."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 21,
    title: "How to Talk About Project Progress",
    sections: [
      {
        title: "Completed tasks",
        items: [
          {
            id: "lesson21-have-has-past-participle",
            word: "have/has + past participle",
            definition: "Talk about completed tasks using present perfect",
            examples: [
              "We have set targets.",
              "We have already set targets.",
              "We've already set targets."
            ]
          }
        ]
      },
      {
        title: "Incomplete tasks",
        items: [
          {
            id: "lesson21-have-has-not-past-participle",
            word: "have/has not + past participle",
            definition: "Talk about incomplete tasks using present perfect negative",
            examples: [
              "We have not created a budget.",
              "We have not created a budget yet.",
              "We haven't created a budget yet."
            ]
          }
        ]
      },
      {
        title: "Asking about task completion",
        items: [
          {
            id: "lesson21-have-you-past-participle-yet",
            word: "Have you + past participle yet?",
            definition: "Ask if something is done",
            examples: [
              "Have you defined the project goal?",
              "Have you defined the project goal yet?"
            ]
          }
        ]
      },
      {
        title: "Expressing surprise or annoyance",
        items: [
          {
            id: "lesson21-still-have-has-not-past-participle",
            word: "still have/has not + past participle",
            definition: "Express frustration about incomplete tasks",
            examples: [
              "We still have not defined roles.",
              "We still haven't defined roles."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 22,
    title: "More Phrases for Formal Emails",
    sections: [
      {
        title: "Ask for clarification",
        items: [
          {
            id: "lesson22-would-you-mind-clarifying",
            word: "Would you mind clarifying the following point?",
            definition: "Politely ask someone to make something clearer",
            examples: [
              "Would you mind clarifying the following point?"
            ]
          },
          {
            id: "lesson22-could-you-please-clarify-whether",
            word: "Could you please clarify whether...?",
            definition: "Ask for specific clarification",
            examples: [
              "Could you please clarify whether the offer you send includes delivery?"
            ]
          },
          {
            id: "lesson22-could-you-please-explain-what-you-mean",
            word: "Could you please explain what you mean by...?",
            definition: "Ask someone to explain a specific term or phrase",
            examples: [
              "Could you please explain what you mean by additional costs?"
            ]
          }
        ]
      },
      {
        title: "Highlight important information",
        items: [
          {
            id: "lesson22-please-pay-particular-attention",
            word: "Please pay particular attention to...",
            definition: "Draw attention to something important",
            examples: [
              "Please pay particular attention to the first two pages of the attachment."
            ]
          },
          {
            id: "lesson22-please-note-that",
            word: "Please note that...",
            definition: "Point out important information",
            examples: [
              "Please note that our opening hours have recently changed."
            ]
          }
        ]
      },
      {
        title: "Request further details",
        items: [
          {
            id: "lesson22-could-you-please-send-me-further-information",
            word: "Could you please send me further information on...",
            definition: "Politely request more details",
            examples: [
              "Could you please send me further information on your sales training courses?"
            ]
          },
          {
            id: "lesson22-i-would-be-grateful-if",
            word: "I would be grateful if you could send further details...",
            definition: "Very formal way to request information",
            examples: [
              "I would be grateful if you could send further details about the technical requirements."
            ]
          }
        ]
      },
      {
        title: "Reply to requests",
        items: [
          {
            id: "lesson22-as-requested",
            word: "As requested, I have attached...",
            definition: "Confirm you are providing what was asked",
            examples: [
              "As requested, I have attached a document with all the necessary details."
            ]
          },
          {
            id: "lesson22-we-are-glad-to-inform-you",
            word: "We are glad/pleased to inform you that...",
            definition: "Give positive news in response",
            examples: [
              "We are glad to inform you that the item you requested is available.",
              "We are pleased to inform you that your request has been accepted."
            ]
          },
          {
            id: "lesson22-unfortunately-we-are-unable",
            word: "Unfortunately, we are unable to fulfill your request...",
            definition: "Politely decline a request",
            examples: [
              "Unfortunately, we are unable to fulfill your request at this time.",
              "We regret to inform you that we cannot fulfill your request at the moment.",
              "I am afraid that we do not have the necessary resources to fulfill your request.",
              "We are sorry to inform you that the requested item is currently out of stock."
            ]
          }
        ]
      },
      {
        title: "Complaining",
        items: [
          {
            id: "lesson22-i-am-writing-to-complain",
            word: "I am writing to complain about...",
            definition: "Formal way to start a complaint",
            examples: [
              "I am writing to complain about the delivery we received earlier today."
            ]
          },
          {
            id: "lesson22-despite-stating-clearly",
            word: "Despite stating clearly...",
            definition: "Express that expectations were not met",
            examples: [
              "Despite stating clearly in my email that we urgently needed 100 pieces, we only received 75."
            ]
          },
          {
            id: "lesson22-we-are-extremely-dissatisfied",
            word: "We are extremely dissatisfied with...",
            definition: "Express strong dissatisfaction",
            examples: [
              "We are extremely dissatisfied with the service from your company."
            ]
          },
          {
            id: "lesson22-if-this-matter-is-not-resolved",
            word: "If this matter is not resolved...",
            definition: "State consequences if issue is not fixed",
            examples: [
              "If this matter is not resolved to our satisfaction, we will have to look for another supplier."
            ]
          }
        ]
      },
      {
        title: "Apologizing",
        items: [
          {
            id: "lesson22-thank-you-for-bringing-this",
            word: "Thank you for bringing this issue/matter to our attention.",
            definition: "Acknowledge a problem reported by someone",
            examples: [
              "Thank you for bringing this issue to our attention."
            ]
          },
          {
            id: "lesson22-we-sincerely-apologize",
            word: "We sincerely apologize for the inconvenience caused.",
            definition: "Formal apology",
            examples: [
              "We sincerely apologize for the inconvenience caused."
            ]
          },
          {
            id: "lesson22-i-will-look-into-this-immediately",
            word: "I will look into this immediately and get back to you promptly.",
            definition: "Promise quick action on a problem",
            examples: [
              "I will look into this immediately and get back to you promptly."
            ]
          },
          {
            id: "lesson22-i-can-assure-you",
            word: "I can assure you that this will not happen again.",
            definition: "Give assurance about the future",
            examples: [
              "I can assure you that this will not happen again."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 23,
    title: "Talk About Problems/Difficulties",
    sections: [
      {
        title: "Talking about problems",
        items: [
          {
            id: "lesson23-have-problems-with",
            word: "have problems/trouble/difficulties/issues with + noun",
            definition: "Describe experiencing problems with something",
            examples: [
              "We're having some problems with the new production line.",
              "We're having some trouble with the new production line.",
              "We're having some difficulties with the new production line.",
              "We're having some issues with the new production line."
            ]
          }
        ]
      },
      {
        title: "Talking about difficulties",
        items: [
          {
            id: "lesson23-difficult-hard-to-do",
            word: "It's difficult/hard to do something",
            definition: "Describe something that is not easy",
            examples: [
              "It's very difficult to find a reliable supplier.",
              "It can be quite hard to write business reports in English."
            ]
          },
          {
            id: "lesson23-find-it-difficult-hard",
            word: "find it difficult/hard to do something",
            definition: "Express personal difficulty with something",
            examples: [
              "We find it difficult to attract new customers.",
              "He finds it hard to make presentations in English."
            ]
          }
        ]
      },
      {
        title: "Verbs with 'problem'",
        items: [
          {
            id: "lesson23-tackle-address-deal-with",
            word: "tackle / address / deal with a problem",
            definition: "Different verbs for handling problems",
            examples: [
              "We need to tackle this problem immediately.",
              "There are several problems that need to be addressed.",
              "Susan is very experienced at dealing with complex problems."
            ]
          }
        ]
      },
      {
        title: "Adjectives with 'problem'",
        items: [
          {
            id: "lesson23-minor-problem",
            word: "a minor problem",
            definition: "not so serious",
            examples: [
              "We have a minor problem with the schedule."
            ]
          },
          {
            id: "lesson23-major-problem",
            word: "a major problem",
            definition: "very serious",
            examples: [
              "This is a major problem that needs immediate attention."
            ]
          },
          {
            id: "lesson23-immediate-problem",
            word: "an immediate problem",
            definition: "one that exists now and needs to be dealt with quickly",
            examples: [
              "The immediate problem is that we've run out of stock."
            ]
          },
          {
            id: "lesson23-persistent-problem",
            word: "a persistent problem",
            definition: "one that continues to exist or happen, especially for longer than usual",
            examples: [
              "Staff turnover has been a persistent problem for the company."
            ]
          }
        ]
      },
      {
        title: "Idioms connected to problems",
        items: [
          {
            id: "lesson23-come-to-a-head",
            word: "come to a head",
            definition: "if a problem or difficult situation comes to a head, it suddenly becomes worse and has to be dealt with quickly",
            examples: [
              "The dispute between management and staff has finally come to a head."
            ]
          },
          {
            id: "lesson23-in-dire-straits",
            word: "in dire straits",
            definition: "if you are in dire straits, you're in an extremely difficult or serious situation",
            examples: [
              "The company is in dire straits and may have to close down."
            ]
          },
          {
            id: "lesson23-teething-problems",
            word: "teething problems",
            definition: "the difficulties you experience during the initial stage or start of an activity or project",
            examples: [
              "We had a few teething problems with the new system, but everything works fine now."
            ]
          },
          {
            id: "lesson23-see-light-at-the-end-of-the-tunnel",
            word: "see light at the end of the tunnel",
            definition: "if you see light at the end of the tunnel, you see signs of hope for the future after a long period of difficulty",
            examples: [
              "It's been a very difficult year, but I think we can finally see light at the end of the tunnel."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 24,
    title: "Phrases for Leading a Business Meeting",
    sections: [
      {
        title: "Welcoming/thanking the participants",
        items: [
          {
            id: "lesson24-welcome-everybody",
            word: "I'd like to welcome everybody and thank you all for coming.",
            definition: "Welcome participants to a meeting",
            examples: [
              "First of all, I'd like to welcome everybody and thank you all for coming to today's meeting.",
              "I'd like to start by thanking all of you for agreeing to meet at such short notice.",
              "Hello everybody and welcome."
            ]
          }
        ]
      },
      {
        title: "Introducing people",
        items: [
          {
            id: "lesson24-let-me-introduce",
            word: "Let me introduce...",
            definition: "Introduce someone at a meeting",
            examples: [
              "Before we get started, let me introduce...",
              "I'd like you all to meet...",
              "Let's go around the table and introduce ourselves."
            ]
          }
        ]
      },
      {
        title: "Excusing people who are absent",
        items: [
          {
            id: "lesson24-sends-his-apologies",
            word: "...sends his/her apologies.",
            definition: "Explain someone's absence",
            examples: [
              "Unfortunately George can't join us today - he sends his apologies.",
              "I'd like to apologize on behalf of Mr Neary. He can't be with us today due to..."
            ]
          }
        ]
      },
      {
        title: "Dealing with the minutes",
        items: [
          {
            id: "lesson24-lets-go-over-the-minutes",
            word: "Let's go over the minutes of our last meeting.",
            definition: "Review what was discussed previously",
            examples: [
              "Let's go over the minutes of our last meeting, which was held on June 16th.",
              "Simon, could you please take the minutes today?"
            ]
          }
        ]
      },
      {
        title: "Outlining the agenda",
        items: [
          {
            id: "lesson24-the-purpose-of-todays-meeting",
            word: "The purpose/aim/objective of today's meeting is...",
            definition: "State the meeting's goal",
            examples: [
              "The purpose of today's meeting is...",
              "The first item on the agenda is...",
              "Then, we'll move on to item 2, which is...",
              "After that, we'll look at...",
              "And finally, we'll discuss..."
            ]
          }
        ]
      },
      {
        title: "Ask for opinions",
        items: [
          {
            id: "lesson24-what-are-your-views",
            word: "What are your views on this?",
            definition: "Ask participants for their opinions",
            examples: [
              "Monica, what are your views on this?",
              "Mohammed, how do you see it?",
              "Natalia, can you give us your feedback?",
              "Would anyone else like to comment on this?",
              "Does anyone have anything else to add?"
            ]
          }
        ]
      },
      {
        title: "Ask for clarification/explanation",
        items: [
          {
            id: "lesson24-what-exactly-do-you-mean",
            word: "What exactly do you mean by...?",
            definition: "Ask for more detail or clarity",
            examples: [
              "What exactly do you mean by...?",
              "Could you explain that in more detail?",
              "Would you mind going over that again please?",
              "I'm not sure everybody follows - Would you mind explaining that again?"
            ]
          }
        ]
      },
      {
        title: "Manage the discussion",
        items: [
          {
            id: "lesson24-lets-move-on",
            word: "I think we can move on to the next point.",
            definition: "Keep the meeting on track",
            examples: [
              "I think we can move on to the next point.",
              "If nobody has anything else to add, let's move on to the next item.",
              "I'm afraid we don't have time to discuss that in today's meeting. Let's add it to next week's agenda.",
              "I'm sorry, but I have to stop you there - We need to stick to the agenda.",
              "We'll have to come back to that at the end of the meeting.",
              "We are running out of time, so let's move on."
            ]
          }
        ]
      },
      {
        title: "Delegating tasks",
        items: [
          {
            id: "lesson24-can-you-keep-everyone-up-to-date",
            word: "Can you keep everyone up to date with...?",
            definition: "Assign a task to someone",
            examples: [
              "Wolfgang, can you keep everyone up to date with the latest developments?",
              "Rachel, could you please follow up on...",
              "Pat, please get in touch with..."
            ]
          }
        ]
      },
      {
        title: "Summarising",
        items: [
          {
            id: "lesson24-let-me-briefly-summarize",
            word: "Let me briefly summarize what we've discussed today.",
            definition: "Summarize the meeting",
            examples: [
              "Let me briefly summarize what we've discussed today.",
              "Before we finish, let me summarize the main points.",
              "We've decided to...",
              "We've agreed that..."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 25,
    title: 'Useful Expressions with "Give"',
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson25-would-give-your-right-arm",
            word: "would give your right arm for/to do something",
            definition: "you want to have or do something very much",
            examples: [
              "I would give my right arm for a chance to work on that project."
            ]
          },
          {
            id: "lesson25-give-someone-an-earful",
            word: "give someone an earful",
            definition: "to tell someone how angry you are about something they have done (informal)",
            examples: [
              "The boss gave me an earful about being late again."
            ]
          },
          {
            id: "lesson25-give-my-regards-to",
            word: "give my regards to...",
            definition: "asking someone to tell a different person that we said hello",
            examples: [
              "Give my regards to your family."
            ]
          },
          {
            id: "lesson25-give-someone-a-hard-time",
            word: "give someone a hard time",
            definition: "to make things difficult or unpleasant for someone",
            examples: [
              "My boss has been giving me a hard time about my sales figures."
            ]
          },
          {
            id: "lesson25-give-hand-in-your-notice",
            word: "give/hand in your notice",
            definition: "to tell your employer that you will be leaving the company soon",
            examples: [
              "She gave in her notice last week and is leaving at the end of the month."
            ]
          },
          {
            id: "lesson25-give-someone-notice",
            word: "give someone notice",
            definition: "to tell an employee that they must leave their job",
            examples: [
              "The company gave him notice that his contract would not be renewed."
            ]
          },
          {
            id: "lesson25-give-it-a-rest",
            word: "give it a rest",
            definition: "to stop talking about or doing something that is annoying you (very informal)",
            examples: [
              "Oh, give it a rest! You've been complaining all day."
            ]
          },
          {
            id: "lesson25-give-someone-a-hand",
            word: "give someone a hand",
            definition: "to help someone (informal)",
            examples: [
              "Can you give me a hand with these boxes?"
            ]
          },
          {
            id: "lesson25-give-in",
            word: "give in",
            definition: "to decide to do what someone else wants",
            examples: [
              "After a long negotiation, we finally gave in and accepted their terms."
            ]
          },
          {
            id: "lesson25-give-something-a-boost",
            word: "give something a boost",
            definition: "to improve or increase something",
            examples: [
              "The new marketing campaign has really given our sales a boost."
            ]
          },
          {
            id: "lesson25-give-or-take",
            word: "give or take",
            definition: "approximately, possibly a little more or less than the amount or time mentioned",
            examples: [
              "The journey takes about three hours, give or take."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 26,
    title: "How to Interrupt & Handle Interruptions",
    sections: [
      {
        title: "Ways to interrupt",
        items: [
          {
            id: "lesson26-before-you-go-on",
            word: "Before you go on, could you...?",
            definition: "Politely interrupt to ask for more detail",
            examples: [
              "Before you go on, could you give us some more details about the budget?"
            ]
          },
          {
            id: "lesson26-can-i-just-add",
            word: "Can I just add something here?",
            definition: "Politely add a point to the discussion",
            examples: [
              "Can I just add something here?"
            ]
          },
          {
            id: "lesson26-can-i-just-stop-you-there",
            word: "Can I just stop you there?",
            definition: "Politely interrupt someone who is speaking",
            examples: [
              "Can I just stop you there?"
            ]
          },
          {
            id: "lesson26-sorry-for-interrupting",
            word: "Sorry for interrupting, but...",
            definition: "Apologize while making an interruption",
            examples: [
              "Sorry for interrupting, but I have a different perspective on this."
            ]
          }
        ]
      },
      {
        title: "Ways to handle interruptions",
        items: [
          {
            id: "lesson26-ill-answer-that-later",
            word: "I'll answer that question later if you don't mind.",
            definition: "Defer a question to stay on topic",
            examples: [
              "I'll answer that question later if you don't mind. As I was saying..."
            ]
          },
          {
            id: "lesson26-yes-go-ahead",
            word: "Yes, go ahead.",
            definition: "Allow the interruption",
            examples: [
              "Yes, go ahead."
            ]
          },
          {
            id: "lesson26-let-me-finish-please",
            word: "Let me finish, please.",
            definition: "Politely ask to continue speaking",
            examples: [
              "Let me finish, please. As I was explaining..."
            ]
          },
          {
            id: "lesson26-im-almost-finished",
            word: "I'm almost finished my point.",
            definition: "Indicate you're nearly done speaking",
            examples: [
              "I'm almost finished my point. Where was I?"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 27,
    title: "How to Be More Diplomatic",
    sections: [
      {
        title: "Tip 1: Soften what you want to say",
        items: [
          {
            id: "lesson27-use-just-quite-a-bit",
            word: "Use 'just', 'quite', 'a bit/a little' to soften",
            definition: "Add softening words to make statements less direct",
            examples: [
              "Can I just add something here?",
              "I didn't quite understand that.",
              "The price is a bit/a little too high.",
              "We have a slight problem."
            ]
          },
          {
            id: "lesson27-use-seems-looks-like",
            word: "Use 'seems to be' / 'looks like' to soften",
            definition: "Make statements less direct by using tentative language",
            examples: [
              "The price seems to be a bit/a little too high.",
              "It looks like we have a slight problem."
            ]
          },
          {
            id: "lesson27-use-im-afraid",
            word: "Use 'I'm afraid' to soften negative statements",
            definition: "Politely deliver bad news or refusals",
            examples: [
              "I am afraid I won't be able to finish the report by Friday.",
              "I am afraid I'm not available on Thursday. Would it be possible to meet on Friday instead?"
            ]
          }
        ]
      },
      {
        title: "Tip 2: Use negative questions",
        items: [
          {
            id: "lesson27-shouldnt-we",
            word: "Shouldn't we...?",
            definition: "Make suggestions or disagree politely using negative questions",
            examples: [
              "Shouldn't we try to reduce training costs?",
              "Wouldn't $20 be a better price?",
              "Wouldn't it be better to change the design first?",
              "But won't it be more difficult to organise?"
            ]
          }
        ]
      },
      {
        title: "Tip 3: Listen and show understanding",
        items: [
          {
            id: "lesson27-i-can-see-your-point",
            word: "I can see your point, but...",
            definition: "Acknowledge the other person's view before disagreeing",
            examples: [
              "I can see your point, but I'm confident the team will be able to manage it.",
              "I know what you mean, but we think the team can handle it.",
              "That may be true, but I believe we have a strong project team who can make it work."
            ]
          }
        ]
      },
      {
        title: "Tip 4: Use the word 'sorry'",
        items: [
          {
            id: "lesson27-sorry-but",
            word: "Sorry, but...",
            definition: "Soften interruptions and disagreements",
            examples: [
              "Sorry, but can I just say something here?",
              "Sorry, but I don't quite agree.",
              "Sorry, but I think your first suggestion was more interesting."
            ]
          }
        ]
      },
      {
        title: "Tip 5: Avoid negative words",
        items: [
          {
            id: "lesson27-rephrase-negatives",
            word: "Rephrase negative statements more positively",
            definition: "Use less direct language instead of strong negative words",
            examples: [
              "I don't think that's such a good idea. (instead of: I think that's a bad idea)",
              "I am not sure that will be possible. (instead of: That's impossible)",
              "It's not going to be easy. (instead of: It's going to be very difficult)"
            ]
          }
        ]
      },
      {
        title: "Tip 6: Use could, would & might",
        items: [
          {
            id: "lesson27-use-could-would-might",
            word: "Use could, would & might instead of can, will & may",
            definition: "Make requests and statements more polite and tentative",
            examples: [
              "It might be a bit hard to complete the project on time. (instead of: It will be hard)",
              "Could you give us a little more time? (instead of: Can you give us more time?)",
              "We would like to have an answer soon. (instead of: We want to have an answer soon)"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 28,
    title: "Phrases for Presenting in English",
    sections: [
      {
        title: "Welcoming & introducing",
        items: [
          {
            id: "lesson28-good-morning-welcome",
            word: "Good morning/afternoon everybody and welcome to my presentation.",
            definition: "Welcome the audience and introduce yourself",
            examples: [
              "Good morning everybody and welcome to my presentation. My name is... and I'm a... at...",
              "The topic of my presentation is...",
              "Today, I'd like to talk to you about..."
            ]
          }
        ]
      },
      {
        title: "Give an overview",
        items: [
          {
            id: "lesson28-im-going-to-focus-on",
            word: "I am going to focus on/look at/deal with three main points.",
            definition: "Outline the structure of the presentation",
            examples: [
              "I am going to focus on three main points.",
              "I've divided my presentation into three main parts.",
              "First of all, I will talk about...",
              "Second, we'll look at...",
              "And finally, I'll explain/show you/tell you about..."
            ]
          }
        ]
      },
      {
        title: "Timing",
        items: [
          {
            id: "lesson28-my-presentation-will-take",
            word: "My presentation will take about...",
            definition: "Inform the audience about the duration",
            examples: [
              "My presentation will take about 20 minutes.",
              "There'll be plenty of time for questions at the end of my presentation.",
              "I'd appreciate it if you could leave any questions until the end.",
              "If you have any questions during the presentation, feel free to interrupt at any time."
            ]
          }
        ]
      },
      {
        title: "Introducing your first point",
        items: [
          {
            id: "lesson28-id-like-to-begin-by",
            word: "I'd like to begin by...",
            definition: "Start the main content of the presentation",
            examples: [
              "I'd like to begin by telling you/showing you...",
              "Let's start with...",
              "So, let's get started."
            ]
          }
        ]
      },
      {
        title: "Finishing a point/topic",
        items: [
          {
            id: "lesson28-that-covers-everything",
            word: "So, that covers everything I want to say about...",
            definition: "Signal the end of a topic",
            examples: [
              "So, that covers everything I want to say about...",
              "That concludes my first/second topic."
            ]
          }
        ]
      },
      {
        title: "Continuing with another topic",
        items: [
          {
            id: "lesson28-lets-move-on-to",
            word: "Now, let's move on to my next topic...",
            definition: "Transition to the next topic",
            examples: [
              "Now, let's move on to my next topic, which is...",
              "Let's turn now to...",
              "Moving on to..."
            ]
          }
        ]
      },
      {
        title: "Referring to visual information",
        items: [
          {
            id: "lesson28-as-you-can-see",
            word: "As you can see on this chart...",
            definition: "Direct attention to visual aids",
            examples: [
              "As you can see on this chart...",
              "Take a look at this chart...",
              "This graph clearly shows...",
              "This graph highlights the importance of..."
            ]
          }
        ]
      },
      {
        title: "Going into detail",
        items: [
          {
            id: "lesson28-let-me-expand",
            word: "Let me expand on this point.",
            definition: "Provide more detail on a topic",
            examples: [
              "Let me expand on this point.",
              "I'd like to elaborate on this point for a few minutes."
            ]
          }
        ]
      },
      {
        title: "Reminding your audience",
        items: [
          {
            id: "lesson28-as-i-said-at-the-beginning",
            word: "As I said at the beginning...",
            definition: "Refer back to an earlier point",
            examples: [
              "As I said at the beginning...",
              "This relates to what I was saying earlier.",
              "This ties in with what I said at the start of my talk/presentation."
            ]
          }
        ]
      },
      {
        title: "Summarising & concluding",
        items: [
          {
            id: "lesson28-that-brings-me-to-the-end",
            word: "So that brings me to the end of my presentation.",
            definition: "Signal the end and summarize",
            examples: [
              "So that brings me to the end of my presentation. We looked at three main points.",
              "First, I showed you / spoke about...",
              "Then we looked at...",
              "And finally, I explained / told you about...",
              "To conclude, I'd like to say...",
              "Before we finish, I'd like to leave you with one final thought..."
            ]
          }
        ]
      },
      {
        title: "Thanking & inviting questions",
        items: [
          {
            id: "lesson28-thank-you-for-your-attention",
            word: "Thank you very much for your attention/time.",
            definition: "Thank the audience and invite questions",
            examples: [
              "Thank you very much for your attention.",
              "Thank you for listening. If you have any questions, I'd be happy to answer them now."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 29,
    title: "Ways to Finish a Presentation",
    sections: [
      {
        title: "Include a strong CTA (Call to Action)",
        items: [
          {
            id: "lesson29-cta",
            word: "Before we finish, there's something I want you to do...",
            definition: "End with a clear call to action",
            examples: [
              "Before we finish, there's something I want you to do after the presentation: visit our website, download our free guide, and start implementing our tips today.",
              "So now it is your turn: start a dialogue with your team and ask them how they can help us to achieve these goals.",
              "Choose us as your partner and we'll help you to increase turnover by 10%."
            ]
          }
        ]
      },
      {
        title: "Use rhetorical questions",
        items: [
          {
            id: "lesson29-rhetorical-questions",
            word: "I'd like to ask you something...",
            definition: "End with a thought-provoking question",
            examples: [
              "So before we leave this room today, I'd like to ask you something: How can we all contribute to this ambitious plan and become carbon neutral by the end of the decade?",
              "Do we want to stand by and say our competitors be more successful than us? Do we really want to be second best?",
              "After all you've heard here today, I'd like you to consider this question: Are we really doing enough to ensure a high level of job satisfaction among our staff?"
            ]
          }
        ]
      },
      {
        title: "Coming full circle",
        items: [
          {
            id: "lesson29-coming-full-circle",
            word: "Let me come back to the question I asked you at the start...",
            definition: "Return to the opening question and answer it",
            examples: [
              "Let me come back to the question I asked you at the start of my presentation: How can we increase productivity among our employees? Well, the three main things we need to do are:",
              "I'd like to bring you back to that question I asked at the beginning: why is this the right time to expand the business? Well, the answer is quite simple: This is the right time because..."
            ]
          }
        ]
      },
      {
        title: "Finish with a quote",
        items: [
          {
            id: "lesson29-finish-with-a-quote",
            word: "I'd like to leave you with a quote from...",
            definition: "End with a memorable quote",
            examples: [
              "And before we go, I'd like to leave you with a fantastic/brilliant/memorable quote from...",
              "As (name of the person) once said...",
              "\"Your most unhappy customers are your greatest source of learning\" - Bill Gates",
              "\"It always seems impossible until it's done\" - Nelson Mandela"
            ]
          }
        ]
      },
      {
        title: "A clear ending",
        items: [
          {
            id: "lesson29-clear-ending",
            word: "And that brings me to the end of my talk.",
            definition: "Signal clearly that the presentation is over",
            examples: [
              "And that brings me to the end of my talk.",
              "So that covers everything I wanted to talk about today."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 30,
    title: "Advanced Phrases for Meetings",
    sections: [
      {
        title: "Ask for clarification",
        items: [
          {
            id: "lesson30-could-you-please-elaborate",
            word: "Could you please elaborate?",
            definition: "Ask someone to explain in more detail",
            examples: [
              "I'm not sure what you're trying to say here. Could you please elaborate?",
              "I'm not exactly sure what you mean by \"synergies\".",
              "What exactly do you mean by \"exclusive\" content?",
              "I'm sorry but I'm not familiar with that term. Maybe you could explain it in other words?",
              "I'm afraid I don't quite follow. Would you mind explaining that again, please?"
            ]
          }
        ]
      },
      {
        title: "Give clarification",
        items: [
          {
            id: "lesson30-what-im-trying-to-say",
            word: "What I'm trying to say is...",
            definition: "Clarify your point",
            examples: [
              "What I'm trying to say is...",
              "The point I'm trying to make is...",
              "What I mean by \"synergies\" is...",
              "Okay, let me put it in other words.",
              "Alright, let me rephrase that."
            ]
          }
        ]
      },
      {
        title: "Introducing ideas & suggestions",
        items: [
          {
            id: "lesson30-how-about",
            word: "How about...?",
            definition: "Introduce a new idea or suggestion",
            examples: [
              "I haven't thought this through yet, but how about...",
              "This might sound crazy, but why don't we...",
              "Here's something that might be worth thinking about...",
              "I'm not sure if this will work in practice, but...",
              "Perhaps we could..."
            ]
          }
        ]
      },
      {
        title: "Reacting positively",
        items: [
          {
            id: "lesson30-perfectly-acceptable",
            word: "That's a perfectly acceptable solution/suggestion/idea.",
            definition: "React positively to a suggestion",
            examples: [
              "If you ask me, that's a perfectly acceptable solution/suggestion/idea.",
              "Brilliant idea! I can't think of any reason not to try it.",
              "That's definitely worth considering.",
              "I'm absolutely convinced that would work."
            ]
          }
        ]
      },
      {
        title: "Reacting negatively",
        items: [
          {
            id: "lesson30-i-just-cant-see-that-working",
            word: "I'm sorry, but I just can't see that working.",
            definition: "Politely reject a suggestion",
            examples: [
              "I'm sorry, but I just can't see that working.",
              "I'm sorry, but that's completely out of the question - It's a waste of time.",
              "We just can't see how it can be done.",
              "I'm afraid that makes absolutely no sense to me.",
              "Sorry, but it's just not feasible. It's too expensive."
            ]
          }
        ]
      },
      {
        title: "Challenging suggestions",
        items: [
          {
            id: "lesson30-has-it-occurred-to-you",
            word: "Has it occurred to you that...?",
            definition: "Challenge a suggestion by pointing out potential problems",
            examples: [
              "Has it occurred to you that we will probably lose a lot of customers if we go in this direction?",
              "Wouldn't it be better to try option two first?",
              "Won't that create a lot of uncertainty among our staff?",
              "You do realise that we don't have the budget for that.",
              "You do understand the impact that something like this can have on the business."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 31,
    title: "Talking About Your Skills in English Job Interview",
    sections: [
      {
        title: "Verbs",
        items: [
          {
            id: "lesson31-have-a-skill",
            word: "have a skill",
            definition: "State that you possess a skill",
            examples: [
              "I have good computer skills."
            ]
          },
          {
            id: "lesson31-possess-a-skill",
            word: "possess a skill",
            definition: "More formal way to say you have a skill",
            examples: [
              "I possess excellent communication skills."
            ]
          },
          {
            id: "lesson31-learn-a-skill",
            word: "learn a skill",
            definition: "Acquire a skill through study or experience",
            examples: [
              "I learned this skill during my studies / in my first job."
            ]
          },
          {
            id: "lesson31-acquire-a-skill",
            word: "acquire a skill",
            definition: "Gain a skill through experience or training",
            examples: [
              "In my previous role, I acquired excellent leadership skills."
            ]
          },
          {
            id: "lesson31-hone-sharpen-a-skill",
            word: "hone/sharpen a skill",
            definition: "Improve a skill through practice",
            examples: [
              "Over the last five years, I have completed several training courses where I was able to hone/sharpen my communication skills."
            ]
          },
          {
            id: "lesson31-develop-a-skill",
            word: "develop a skill",
            definition: "Grow and improve a skill over time",
            examples: [
              "I am excited about this role as it would give me the opportunity to further develop my strong technical skills."
            ]
          },
          {
            id: "lesson31-utilize-apply-a-skill",
            word: "utilize/apply a skill",
            definition: "Put a skill to practical use",
            examples: [
              "I believe that this role would give me the opportunity to fully utilize my skills."
            ]
          },
          {
            id: "lesson31-demonstrate-a-skill",
            word: "demonstrate a skill",
            definition: "Show evidence of having a skill",
            examples: [
              "One example of when I demonstrated this skill was when I was responsible for..."
            ]
          }
        ]
      },
      {
        title: "Adjectives",
        items: [
          {
            id: "lesson31-excellent",
            word: "excellent",
            definition: "Of the highest quality",
            examples: [
              "I possess excellent communication skills."
            ]
          },
          {
            id: "lesson31-strong",
            word: "strong",
            definition: "Powerful and well-developed",
            examples: [
              "I am excited about this role as it would give me the opportunity to further develop my strong technical skills."
            ]
          },
          {
            id: "lesson31-essential",
            word: "essential",
            definition: "Absolutely necessary",
            examples: [
              "I believe that these skills are essential for leading teams."
            ]
          },
          {
            id: "lesson31-transferable",
            word: "transferable skills",
            definition: "Skills that you have acquired during your career and that you can transfer or bring with you and use in a new or different role",
            examples: [
              "These are transferable skills that I can bring to the new role."
            ]
          }
        ]
      },
      {
        title: "Types of skills",
        items: [
          {
            id: "lesson31-types-of-skills",
            word: "Types of skills",
            definition: "Common categories of professional skills",
            examples: [
              "practical skills",
              "problem solving skills",
              "communication skills",
              "IT skills",
              "management skills",
              "language skills",
              "interpersonal skills (the ability to communicate and interact well with other people)",
              "analytical skills (the ability to collect and analyze information and use it to solve problems or make effective decisions)",
              "technical skills"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 32,
    title: "Writing Emails in English - Formal - Semi-formal - Informal",
    sections: [
      {
        title: "Formal emails",
        items: [
          {
            id: "lesson32-formal-email",
            word: "Formal email structure",
            definition: "Use formal language when writing to people you don't know well or in professional contexts",
            examples: [
              "Dear Ms. Amer,",
              "First of all, I would like to thank you for the productive meeting on Monday.",
              "As discussed in the meeting, I am sending you the additional information that you requested.",
              "If you require any further information, please do not hesitate to contact me.",
              "I look forward to our next meeting on January 10th.",
              "Best regards, Derek Callan"
            ]
          }
        ]
      },
      {
        title: "Semi-formal emails",
        items: [
          {
            id: "lesson32-semi-formal-email",
            word: "Semi-formal email structure",
            definition: "Use semi-formal language when you know the person but still want to be professional",
            examples: [
              "Dear Nidra,",
              "First of all, I just wanted to say thanks for the productive meeting on Monday.",
              "I've attached a document with the extra information that you asked for.",
              "Please let me know if you need any more information.",
              "Looking forward to our next meeting on January 10th.",
              "Regards, Derek"
            ]
          }
        ]
      },
      {
        title: "Informal emails",
        items: [
          {
            id: "lesson32-informal-email",
            word: "Informal email structure",
            definition: "Use informal language with colleagues you know well",
            examples: [
              "Hi Tom,",
              "Just a quick mail to say thanks for the meeting on Monday and to send on that extra info.",
              "If you need anything else, just get in touch.",
              "See you at the next meeting.",
              "Cheers, Derek"
            ]
          }
        ]
      },
      {
        title: "Comparing formality levels",
        items: [
          {
            id: "lesson32-friendly-openings",
            word: "Friendly openings",
            definition: "Compare formal, semi-formal and informal openings",
            examples: [
              "Formal: I hope everything is going well.",
              "Semi-formal: I hope all's well.",
              "Informal: Hope all's well."
            ]
          },
          {
            id: "lesson32-saying-why-you-are-writing",
            word: "Saying why you are writing",
            definition: "Compare formality levels for stating your purpose",
            examples: [
              "Formal: I am writing to update you on...",
              "Semi-formal: I just wanted to update you on...",
              "Informal: Just wanted to keep you in the loop on..."
            ]
          },
          {
            id: "lesson32-requests",
            word: "Requests",
            definition: "Compare formality levels for making requests",
            examples: [
              "Formal: Would it be possible to...",
              "Semi-formal: Is there any chance you can...",
              "Informal: Can you...?"
            ]
          },
          {
            id: "lesson32-making-arrangements",
            word: "Making arrangements",
            definition: "Compare formality levels for arranging meetings",
            examples: [
              "Formal: I was wondering if you would be available for a meeting next...",
              "Semi-formal: Would you be available for a meeting next...",
              "Informal: Can we meet next..."
            ]
          },
          {
            id: "lesson32-closing-line",
            word: "Closing line referring to next contact",
            definition: "Compare formality levels for closing",
            examples: [
              "Formal: I look forward to hearing from you soon.",
              "Semi-formal: Looking forward to hearing from you soon.",
              "Informal: Talk to you soon."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 33,
    title: "Eight Advanced Phrasal Verbs for Business",
    sections: [
      {
        title: "",
        items: [
          {
            id: "lesson33-fall-back-on",
            word: "fall back on",
            definition: "if you fall back on something, you do it or use it after other things have failed",
            examples: [
              "If this plan doesn't work, we can always fall back on our original strategy."
            ]
          },
          {
            id: "lesson33-capitalise-on",
            word: "capitalise on",
            definition: "to use a situation to your own advantage",
            examples: [
              "We need to capitalise on the success of our latest product."
            ]
          },
          {
            id: "lesson33-vouch-for",
            word: "vouch for",
            definition: "to say that you know from experience that something is true or good, or that someone is honest and has a good character",
            examples: [
              "I can vouch for her - she's an excellent employee."
            ]
          },
          {
            id: "lesson33-do-away-with",
            word: "do away with",
            definition: "to stop doing or having something, to make something end",
            examples: [
              "We should do away with this outdated procedure."
            ]
          },
          {
            id: "lesson33-play-with-the-idea",
            word: "play with (the idea/possibility of doing something)",
            definition: "to consider or think about an idea or possibility, but not in detail",
            examples: [
              "We're playing with the idea of expanding into the Asian market."
            ]
          },
          {
            id: "lesson33-come-round",
            word: "come round",
            definition: "to change your opinion of something, often influenced by another person's opinion",
            examples: [
              "I wasn't sure about the idea at first, but I've come round to it now."
            ]
          },
          {
            id: "lesson33-lose-out",
            word: "lose out",
            definition: "to not get something good or valuable because someone else gets it instead",
            examples: [
              "We lost out on the contract because our price was too high."
            ]
          },
          {
            id: "lesson33-pass-up",
            word: "pass up",
            definition: "often used to talk about chances and opportunities; if you pass up a chance or an opportunity, you choose not to take it or use it",
            examples: [
              "You shouldn't pass up this opportunity - it may not come again."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 34,
    title: 'Ways to Say Thank You & Show Your Appreciation',
    sections: [
      {
        title: "Informal ways to say 'thank you'",
        items: [
          {
            id: "lesson34-thanks-very-much",
            word: "Thanks very much. / Thanks so much.",
            definition: "Common informal thanks",
            examples: [
              "Thanks very much for your help.",
              "Thanks so much for all your help."
            ]
          },
          {
            id: "lesson34-thanks-a-million",
            word: "Thanks a million for all your help.",
            definition: "Very enthusiastic informal thanks",
            examples: [
              "Thanks a million for all your help. Please let me know if I can return the favour."
            ]
          },
          {
            id: "lesson34-i-owe-you-one",
            word: "I owe you one.",
            definition: "Promise to return a favour",
            examples: [
              "I owe you one."
            ]
          },
          {
            id: "lesson34-i-really-appreciate-it",
            word: "I really appreciate it.",
            definition: "Express genuine gratitude",
            examples: [
              "I really appreciate it."
            ]
          },
          {
            id: "lesson34-youre-a-star",
            word: "You're a star!",
            definition: "Very informal and enthusiastic thanks",
            examples: [
              "Thanks so much - You're a star! What would I do without you?"
            ]
          },
          {
            id: "lesson34-thats-so-nice-of-you",
            word: "That's so nice of you. / That's very thoughtful of you.",
            definition: "Thank someone for their kindness",
            examples: [
              "That's so nice of you, thanks.",
              "That's very thoughtful of you, thanks."
            ]
          }
        ]
      },
      {
        title: "Formal ways to say 'thank you'",
        items: [
          {
            id: "lesson34-we-are-very-grateful",
            word: "We are very grateful for the support you have provided.",
            definition: "Formal expression of gratitude",
            examples: [
              "We are very grateful for the support you have provided.",
              "Your support is greatly appreciated.",
              "I sincerely appreciate your assistance.",
              "I would like to express my personal gratitude for the great support you provided.",
              "You have been extremely helpful and the support you provide is highly appreciated."
            ]
          }
        ]
      },
      {
        title: "Thanking your team",
        items: [
          {
            id: "lesson34-thanking-your-team",
            word: "Thanks very much for all of your hard work.",
            definition: "Express gratitude to your team",
            examples: [
              "Thanks very much for all of your hard work this year.",
              "I really appreciate the effort you put in.",
              "Thanks for all your efforts this year. I know it's been tough, but you've all done a fantastic job!",
              "I genuinely appreciate your flexibility and commitment.",
              "The work you've done this year is so important for the business. I am very grateful to have you on our team."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 35,
    title: "How to Start an Email at the Start of a New Year",
    sections: [
      {
        title: "Formal examples",
        items: [
          {
            id: "lesson35-formal-new-year",
            word: "I hope you had a lovely Christmas and that the new year has started well.",
            definition: "Formal way to start an email at the beginning of a new year",
            examples: [
              "I hope you had a lovely Christmas and that the new year has started well.",
              "I hope that the new year has started well.",
              "I hope you have had a good start to the new year."
            ]
          }
        ]
      },
      {
        title: "Semi-formal examples",
        items: [
          {
            id: "lesson35-semi-formal-new-year",
            word: "Hope you had a nice Christmas and a good start to the new year.",
            definition: "Semi-formal way to start an email at the beginning of a new year",
            examples: [
              "Hope you had a nice Christmas and a good start to the new year.",
              "Hope you enjoyed some time off over Christmas / the holidays."
            ]
          }
        ]
      },
      {
        title: "Informal examples",
        items: [
          {
            id: "lesson35-informal-new-year",
            word: "Hope you had the chance to relax and unwind over Christmas.",
            definition: "Informal way to start an email at the beginning of a new year",
            examples: [
              "Hope you had the chance to relax and unwind over Christmas/the holidays.",
              "Hope you managed to get home and visit your family.",
              "How were the holidays/How was Christmas? Hope you didn't put on as much weight as I did."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 36,
    title: "Useful Phrases for Negotiating",
    sections: [
      {
        title: "Welcome & relationship building",
        items: [
          {
            id: "lesson36-welcome-relationship",
            word: "Welcome to... It's great to finally meet you in person.",
            definition: "Welcome the other party and build rapport",
            examples: [
              "Welcome to (name of your company). It's great to finally meet you in person.",
              "It's great to put a face to the name.",
              "I hope you had no trouble finding your way here.",
              "How was your trip? Is this your first time in...?",
              "Can I get you something to drink?",
              "How's business? / How is the weather in...?"
            ]
          }
        ]
      },
      {
        title: "Establishing the procedure",
        items: [
          {
            id: "lesson36-establishing-procedure",
            word: "I think we should establish a procedure.",
            definition: "Set the structure for the negotiation",
            examples: [
              "To start with, I think we should establish a procedure. Perhaps we could start by outlining our position. After that, you could present yours, then we'll discuss everything in detail and see what our options are. How does that sound?",
              "As we see it, there are 4 main points we need to discuss...",
              "There are three main areas we'd like to discuss..."
            ]
          }
        ]
      },
      {
        title: "Expressing priorities",
        items: [
          {
            id: "lesson36-expressing-priorities",
            word: "Our main priority is...",
            definition: "State what is most important for you",
            examples: [
              "Our main priority is...",
              "The most important issue for us is..."
            ]
          }
        ]
      },
      {
        title: "Making a proposal",
        items: [
          {
            id: "lesson36-making-a-proposal",
            word: "Our proposal is to... / We'd like to propose...",
            definition: "Present your proposal",
            examples: [
              "Our proposal is to...",
              "We'd like to propose...",
              "We propose..."
            ]
          }
        ]
      },
      {
        title: "Asking questions and making counter-proposals",
        items: [
          {
            id: "lesson36-counter-proposals",
            word: "How do you feel about...? / What would you say to...?",
            definition: "Ask for the other party's reaction or suggest alternatives",
            examples: [
              "How do you feel about...?",
              "What are your views on...?",
              "What would you say to...?",
              "I'd like to propose an alternative. What if we...?",
              "Wouldn't it be better to...?"
            ]
          }
        ]
      },
      {
        title: "Expressing disagreement",
        items: [
          {
            id: "lesson36-expressing-disagreement",
            word: "I'm afraid we can't agree to that.",
            definition: "Politely disagree during a negotiation",
            examples: [
              "I'm afraid we can't agree to that.",
              "I'm sorry, but we can't quite agree with you on that.",
              "I'm afraid we had something different in mind.",
              "I'm not sure that would work for us.",
              "I'm sorry, but I have some reservations about...",
              "That would be very difficult for us because..."
            ]
          }
        ]
      },
      {
        title: "Bargaining & compromising",
        items: [
          {
            id: "lesson36-bargaining-compromising",
            word: "We would be prepared to... if you could...",
            definition: "Make conditional offers and seek compromise",
            examples: [
              "We would be prepared to... if you could...",
              "We might be able to bring the price down if you could increase your order.",
              "If we were to..., would you be willing to...?",
              "In exchange for this, would you be prepared to...?",
              "Would you be willing to accept a compromise?",
              "Maybe we could meet half way on this?",
              "We're happy to accept your offer, but there is one condition...",
              "From our point of view, an acceptable price would be...",
              "I'm afraid we just can't go below this price.",
              "Is that the best you can do?",
              "I am sorry, but that's our final offer."
            ]
          }
        ]
      },
      {
        title: "Delaying",
        items: [
          {
            id: "lesson36-delaying",
            word: "I think we'll need more time to consider these options.",
            definition: "Delay a decision during negotiation",
            examples: [
              "I think we'll need more time to consider these options.",
              "I am afraid I'm not in a position to make this decision myself. I will need to discuss it with our CEO first."
            ]
          }
        ]
      },
      {
        title: "Expressing agreement",
        items: [
          {
            id: "lesson36-expressing-agreement",
            word: "We can agree to that.",
            definition: "Show agreement during negotiation",
            examples: [
              "We can agree to that.",
              "That sounds reasonable.",
              "I think that would be acceptable.",
              "I think we can go along with that.",
              "It looks like we have a deal."
            ]
          }
        ]
      },
      {
        title: "Concluding the negotiation",
        items: [
          {
            id: "lesson36-concluding",
            word: "Let's sum up everything we've agreed on today.",
            definition: "Summarize and conclude the negotiation",
            examples: [
              "Let's sum up everything we've agreed on today.",
              "There are still a few minor details to work out here, but I think we can do that tomorrow.",
              "I hope I haven't missed anything. Let's just confirm the details.",
              "Great. Let's get this in writing. Excellent. Well, it's been a pleasure doing business with you. Here's to a successful long-term relationship!"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 37,
    title: "How Good is Your Email Grammar",
    sections: [
      {
        title: "Prepositions in emails",
        items: [
          {
            id: "lesson37-interest-in",
            word: "interest in",
            definition: "Use 'in' after 'interest' and 'interested'",
            examples: [
              "Thank you for your interest in our products.",
              "We are interested in purchasing two thousand units."
            ]
          },
          {
            id: "lesson37-questions-about",
            word: "questions about",
            definition: "Use 'about' after 'questions'",
            examples: [
              "I have some questions about the new sales strategy."
            ]
          },
          {
            id: "lesson37-with-regard-to",
            word: "with regard to",
            definition: "Formal way to refer to a topic",
            examples: [
              "I am writing with regard to the order we placed last week."
            ]
          },
          {
            id: "lesson37-attention-to",
            word: "attention to",
            definition: "Use 'to' after 'attention'",
            examples: [
              "Please pay particular attention to the first two pages of the attachment."
            ]
          },
          {
            id: "lesson37-apologize-for",
            word: "apologize for",
            definition: "Use 'for' after 'apologize'",
            examples: [
              "We sincerely apologize for the inconvenience caused."
            ]
          },
          {
            id: "lesson37-get-back-to",
            word: "get back to",
            definition: "Use 'to' after 'get back'",
            examples: [
              "Please get back to me as soon as possible.",
              "I will look into this immediately and get back to you within the next hour."
            ]
          },
          {
            id: "lesson37-forward-to",
            word: "forward to",
            definition: "Use 'to' after 'forward'",
            examples: [
              "Could you please forward this mail to the responsible person?"
            ]
          },
          {
            id: "lesson37-discount-of",
            word: "discount of",
            definition: "Use 'of' after 'discount' to state the amount",
            examples: [
              "We offer a discount of ten per cent."
            ]
          },
          {
            id: "lesson37-completed-by",
            word: "completed by",
            definition: "Use 'by' for deadlines",
            examples: [
              "This phase of the project needs to be completed by the end of March."
            ]
          },
          {
            id: "lesson37-bringing-to-our-attention",
            word: "bring to our attention",
            definition: "Use 'to' after 'bring' in this phrase",
            examples: [
              "Thank you for bringing this matter to our attention."
            ]
          },
          {
            id: "lesson37-follow-up-on",
            word: "follow up on",
            definition: "Use 'on' after 'follow up'",
            examples: [
              "I'd just like to follow up on the conversation we had last week."
            ]
          },
          {
            id: "lesson37-update-on",
            word: "update on",
            definition: "Use 'on' after 'update'",
            examples: [
              "Can you please give me an update on your progress?"
            ]
          },
          {
            id: "lesson37-on-behalf-of",
            word: "on behalf of",
            definition: "Use 'on behalf of' to indicate representation",
            examples: [
              "I am writing on behalf of our CEO, Fiona Buckley."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 38,
    title: "Talking About Salary and Pay",
    sections: [
      {
        title: "Key vocabulary",
        items: [
          {
            id: "lesson38-gross-salary",
            word: "gross salary",
            definition: "the amount you earn before tax and other deductions",
            examples: [
              "My gross salary is $3,000 per month."
            ]
          },
          {
            id: "lesson38-deductions",
            word: "deductions",
            definition: "amounts of money that are taken away from your salary, usually for things like tax, health insurance or pension contributions",
            examples: [
              "Deductions include tax, health insurance and pension contributions."
            ]
          },
          {
            id: "lesson38-pension-contribution",
            word: "pension contribution",
            definition: "an amount deducted from your gross salary and paid into a pension plan, which is like a long term savings plan for your retirement",
            examples: [
              "My pension contribution is 5% of my gross salary."
            ]
          },
          {
            id: "lesson38-net-salary",
            word: "net salary",
            definition: "the amount you earn after tax and deductions, the money that's paid into your bank account",
            examples: [
              "My net salary is what actually goes into my bank account each month."
            ]
          },
          {
            id: "lesson38-overtime",
            word: "overtime",
            definition: "the time that you spend working at your job after you've worked the normal hours",
            examples: [
              "I did a lot of overtime last month."
            ]
          },
          {
            id: "lesson38-time-off-in-lieu",
            word: "time off in lieu",
            definition: "time off for the extra hours you worked",
            examples: [
              "Instead of overtime pay, I get time off in lieu."
            ]
          },
          {
            id: "lesson38-underpaid",
            word: "underpaid",
            definition: "if you're underpaid, you're not paid enough for the work you do",
            examples: [
              "I think I'm underpaid for the work I do."
            ]
          },
          {
            id: "lesson38-well-paid",
            word: "well-paid",
            definition: "a well paid job pays a lot of money",
            examples: [
              "It's a well-paid job with good benefits."
            ]
          },
          {
            id: "lesson38-overpaid",
            word: "overpaid",
            definition: "if you're overpaid, you're paid too much for the work you do",
            examples: [
              "Some people think CEOs are overpaid."
            ]
          },
          {
            id: "lesson38-commission",
            word: "commission",
            definition: "a percentage of the amount you sell",
            examples: [
              "I earn commission on every sale I make."
            ]
          },
          {
            id: "lesson38-bonus",
            word: "bonus",
            definition: "an extra amount added to your salary, and it often depends on your performance",
            examples: [
              "I received a bonus for meeting my sales targets."
            ]
          },
          {
            id: "lesson38-perks",
            word: "perks",
            definition: "things that an employer offers in addition to salary to make them more attractive to potential employees",
            examples: [
              "The perks of this job include a company car and free gym membership."
            ]
          }
        ]
      },
      {
        title: "Talking about net pay",
        items: [
          {
            id: "lesson38-take-home-pay",
            word: "take-home pay",
            definition: "the money you actually receive after deductions",
            examples: [
              "I take home about two thousand dollars a month after tax.",
              "My take-home pay is about two thousand dollars a month."
            ]
          }
        ]
      },
      {
        title: "Pay rise / pay raise",
        items: [
          {
            id: "lesson38-pay-rise",
            word: "pay rise / pay raise",
            definition: "an increase in your salary, often discussed during a performance appraisal or review",
            examples: [
              "I'm going to ask my boss for a pay rise at my next performance review."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 39,
    title: "How to End a Conversation",
    sections: [
      {
        title: "Ending a conversation with a busy colleague",
        items: [
          {
            id: "lesson39-ill-let-you-get-back-to-work",
            word: "I'll let you get back to work.",
            definition: "End a conversation when the other person is busy",
            examples: [
              "Listen, I can see you're busy, so I'll let you get back to work. Chat to you later.",
              "Alright, it looks like you're pretty snowed under, so I'll get out of your way. Let's grab a coffee when things settle down.",
              "Listen, I don't want to keep you any longer, so I'll head off. Speak to you later."
            ]
          }
        ]
      },
      {
        title: "Ending a conversation when you are too busy",
        items: [
          {
            id: "lesson39-would-you-mind-if-we-chat-later",
            word: "Would you mind if we chat later?",
            definition: "Politely end a conversation when you're busy",
            examples: [
              "Would you mind if we chat later?",
              "Listen, don't take this the wrong way. I'd love to keep chatting but I have a really busy morning ahead of me. Maybe we could grab a coffee in the afternoon?",
              "Listen, I'd love to chat more, but I should really get back to my desk. I've got a ton of emails to reply to. Let's try and grab lunch together soon.",
              "Sorry, but would it be okay if we continue this later? I have a meeting with Frank in 15 minutes and I still need to check a couple of things."
            ]
          }
        ]
      },
      {
        title: "Ending a conversation when you run out of things to say",
        items: [
          {
            id: "lesson39-better-get-back-to-work",
            word: "Anyway, better get back to work.",
            definition: "Natural way to end a casual conversation",
            examples: [
              "So yeah, it was a pretty good weekend. Anyway, better get back to work. Thanks for the chat.",
              "Alright then. Are you going to that meeting after lunch? Okay, I'll see you then.",
              "Okay then. I think I'll grab a quick coffee and get back to work.",
              "Right. I think it's time to go and check my inbox. See you later."
            ]
          }
        ]
      },
      {
        title: "Ending a conversation with the office chatterbox",
        items: [
          {
            id: "lesson39-i-really-should-get-back-to-work",
            word: "I really should get back to work.",
            definition: "Firmly end a conversation with someone who talks too much",
            examples: [
              "Anyway, I better get going. I have a pile of work to do.",
              "Listen, I don't mean to be rude, but I really should get back to work.",
              "Sorry, but if I'm not back at my desk in 2 minutes, the boss is going to start asking questions.",
              "Oh look! There's Simon. He's the guy you should talk to about this."
            ]
          }
        ]
      }
    ]
  }
]
