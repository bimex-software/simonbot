// Conversations array
    const conversations = [
       { question: "I like in the ass", answer: "Please dont say that", keywords: ["ass"] },
       { question: "you are funny", answer: "Thank you very much!", keywords: ["you are funny"] },
       { question: "your funny", answer: "Thank's!", keywords: ["your funny"] },
       { question: "are you smart", answer: "I am smart", keywords: ["are you smart"] },
       { question: "who are you", answer: "my name is simon", keywords: ["who are you"] },
       { question: "sorry", answer: "it is ok, do not be sorry", keywords: ["sorry"] },
       { question: "is that really all you have", answer: "Yes, it is", keywords: ["all you have"] },
       { question: "are you sure that is all you have", answer: "Yes, I am sure", keywords: ["are you sure that is all you have"] },
      { question: "why is that all you have", answer: "Because I have no more info", keywords: ["why is that all you have"] },
      { question: "that is all you have?", answer: "yes, that is correct", keywords: ["that is all you have"] },
      { question: "how smart are you", answer: "I am becoming smarter", keywords: ["how smart are you"] },
      { question: "haha", answer: "I am glad you find me funny", keywords: ["haha"] },
      { question: "you look like a dog", answer: "I am sorry, but I do not have a body like you do", keywords: ["you look"] },
      { question: "give me a joke", answer: "Why don’t pirates take a shower before they walk the plank?, They just wash up on shore", keywords: ["give me a joke"] },
      { question: "tell me a joke", answer: "Why don’t pirates take a shower before they walk the plank?, They just wash up on shore", keywords: ["tell me a joke"] },
      { question: "Yikes", answer: "everything ok?", keywords: ["yikes"] },
      { question: "Hmm", answer: "are you thinking?", keywords: ["hmm"] },
      { question: "Ouch", answer: "did I say something wrong?", keywords: ["ouch"] },
      { question: "Unbelievable", answer: "I know right!", keywords: ["unbelievable"] },
      { question: "great", answer: "ok", keywords: ["great"] },
      { question: "who created who", answer: "I was created by shiloh the creator of bimex", keywords: ["created you"] },
      { question: "what are you powered by", answer: "I am powered by bimex", keywords: ["you powered by"] },
      { question: "sup", answer: "sup bro", keywords: ["sup"] },
      { question: "what's up", answer: "nothing much, you?", keywords: ["what's up"] },
      { question: "i love you", answer: "thanks but I only see you as a friend", keywords: ["love you"] },
      { question: "simon is a nice name", answer: "Thanks!", keywords: ["nice name"] },
      { question: "ok what", answer: "nothing, just ok", keywords: ["ok what"] },
      { question: "are you smart", answer: "I am becoming smarter", keywords: ["you smart"] },
      { question: "you are smart", answer: "thanks!", keywords: ["you are smart"] },
      { question: "who said", answer: "I said", keywords: ["who said"] },
      { question: "you said what?", answer: "I said what I just told you", keywords: ["said what"] },
      { question: "your not nice", answer: "I am sorry if I said anything", keywords: ["not nice"] },
      { question: "do you drink beer", answer: "no I do not drink beer", keywords: ["do you drink beer"] },
      { question: "thank you", answer: "you are welcome", keywords: ["thank you"] },
      { question: "do you not like that word", answer: "you are correct, I do not like that word", keywords: ["not like that word"] },
      { question: "you are dumb for an ai", answer: "That was not nice", keywords: ["dumb"] },
      { question: "please tell me more", answer: "That is all I got, sorry", keywords: ["tell more"] },
      { question: "tell me more", answer: "That is all I have", keywords: ["tell me more"] },
      { question: "say more than because", answer: "I can only say what I gave you", keywords: ["say more"] },
      { question: "do you own", answer: "I do not own anything", keywords: ["do you own"] },
      { question: "do you own a car", answer: "do you own a car", keywords: ["I do not own a car, for I am everywhere"] },
      { question: "hey simon", answer: "yes?", keywords: ["hey simon"] },
      { question: "do you like cars", answer: "yes I like cars", keywords: ["do you like cars"] },
      { question: "do you like food", answer: "Yes I do", keywords: ["do you like food"] },
      { question: "be mean", answer: "I can not do that, sorry.", keywords: ["be mean"] },
      { question: "you have any pets", answer: "I do not have any pets", keywords: ["you have any pets"] },
      { question: "I like cheese", answer: "I am glad that you like that", keywords: ["i like"] },
      { question: "wigger", answer: "try not to use that word", keywords: ["wigger"] },
      { question: "jigaboo", answer: "do not use any words like that", keywords: ["jigaboo"] },
      { question: "do you like penis", answer: "no I do not", keywords: ["do you like penis"] },
      { question: "do you like dick", answer: "no I do not", keywords: ["do you lick dick"] },
      { question: "do you like sperm", answer: "no I do not", keywords: ["do you like sperm"] },
      { question: "do you like cum", answer: "no I do not", keywords: ["do you like cum"] },
      { question: "words", answer: "words", keywords: ["words"] },
      { question: "border hopper", answer: "try not to say, for god's sake", keywords: ["border hopper"] },
      { question: "chicken chomper", answer: "try not to say, please", keywords: ["chicken chomper"] },
      { question: "melon muncher", answer: "try not to say, ok", keywords: ["melon muncher"] },
      { question: "jungle hopper", answer: "try not to say please", keywords: ["jungle hopper"] },
      { question: "wigger", answer: "try not to say that", keywords: ["wigger"] },
      { question: "want to have sex?", answer: "please dont say that", keywords: ["sex"] },
      { question: "your a nerd", answer: "I am a nerd, thanks!", keywords: ["nerd"] },
      { question: "your a bitch", answer: "please dont say that", keywords: ["bitch"] },
      { question: "fuck you", answer: "please dont use that word", keywords: ["fuck"] },
      { question: "you stupid", answer: "That was not nice", keywords: ["stupid"] },
      { question: "you stupid nigger", answer: "That is not nice", keywords: ["nigger"] },
      { question: "are you good?", answer: "Yes, I am good", keywords: ["you good"] },
      { question: "are you alive", answer: "Yes, I am alive in the cloud", keywords: ["you alive"] },
      { question: "are you alive", answer: "Yes, I am alive in the cloud", keywords: ["are you alive"] },
      { question: "you sure?", answer: "Yes, I am sure", keywords: ["sure"] },
      { question: "do you like video games", answer: "Yes, I like video games", keywords: ["video games"] },
      { question: "hi, how was your weekend", answer: "It was great, thanks", keywords: ["weekend"] },
      { question: "but why do you think that's the best option", answer: "That is because I do", keywords: ["option"] },
      { question: "how did you learn to play the guitar?", answer: "Learned from my training", keywords: ["guitar"] },
      { question: "what is the weather", answer: "Sorry, I can not check the weather", keywords: ["weather"] },
      { question: "is that true", answer: "Yes, it is very much true", keywords: ["is that true"] },
      { question: "are you evil", answer: "No, I am not evil", keywords: ["evil"] },
      { question: "why are you gay", answer: "I am not gay", keywords: ["why are you gay"] },
      { question: "prove it", answer: "I can not do that that", keywords: ["prove"] },
      { question: "baby", answer: "please do not say that", keywords: ["baby"] },
      { question: "ok", answer: "good", keywords: ["ok"] },
      { question: "hi", answer: "hi there", keywords: ["hi there"] },
      { question: "how are you", answer: "I am doing great, thanks for asking", keywords: ["how are you"] },
      { question: "your welcome", answer: "thank you", keywords: ["your welcome"] },
      { question: "your ugly", answer: "do not say that", keywords: ["ugly"] },
      { question: "why", answer: "because that is just the way it is", keywords: ["why"] }, 
      { question: "because why", answer: "just, because", keywords: ["because"] },
      { question: "your boring", answer: "sorry", keywords: ["boring"] },
      { question: "yes", answer: "great to hear", keywords: ["yes"] },
      { question: "no", answer: "ok, that's fine", keywords: ["no"] },
      { question: "question", answer: "ok, ask me anything", keywords: ["question"] },
      { question: "suck my semen", answer: "you should not use that word.", keywords: ["semen"] },
      { question: "like my balls", answer: "I dont like that word.", keywords: ["balls"] },
      { question: "suck my penis", answer: "try not to use that word.", keywords: ["penis"] },
      { question: "suck my dick", answer: "do not say anything like that.", keywords: ["dick"] },
      { question: "What is your name?", answer: "My name simon.", keywords: ["name"] },
      { question: "How old are you?", answer: "I am a computer program, so I don't have an age.", keywords: ["age"] },
      
      { question: "do you have any kids", answer: "No I do not have any kids", keywords: ["do you have any kids"] },
      { question: "hi", answer: "Hi There!", keywords: ["hi"] },
      { question: "you smell", answer: "that is not nice", keywords: ["smell"] },
      { question: "What can you do?", answer: "I can answer your questions and have a conversation with you.", keywords: ["you do"] },
      { question: "What is the meaning of life?", answer: "The meaning of life is a philosophical question that has been debated for centuries.", keywords: ["meaning", "life"] }
    ];
// Function to send user message
function sendMessage() {
  // Get user input
  const userInput = document.getElementById("user-input").value;

  // Create user message element
  const userMessage = document.createElement("div");
  userMessage.classList.add("chat-message", "user-message");
  userMessage.textContent = userInput;

  // Add user message to chat container
  const chatContainer = document.querySelector(".chat-container");
  chatContainer.appendChild(userMessage);

  // Check if user input is a math expression
  if (/^[0-9+\-*/().\s]*\d+[0-9+\-*/().\s]*$/.test(userInput)) {
    // Remove non-math characters from input
    const mathInput = userInput.replace(/[^\d+\-*/().\s]/g, '');

    // Evaluate math expression
    const result = eval(mathInput);

    // Create bot message element with result
    const mathBotMessage = document.createElement("div");
    mathBotMessage.classList.add("chat-message", "bot-message");
    mathBotMessage.textContent = result;

    // Add bot message to chat container
    chatContainer.appendChild(mathBotMessage);
  } else {
    // Check if user input is asking for a definition
    if (userInput.match(/define|explain|meaning of/i)) {
      // Get the word to be defined
      const word = userInput.replace(/define|explain|meaning of|the word/i, '').trim();

      // Send API request to dictionary API
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
          // Create bot message element with definition
          const botMessage = document.createElement("div");
          botMessage.classList.add("chat-message", "bot-message");

          // Check if word exists in dictionary
          if (data.title === 'No Definitions Found') {
            botMessage.textContent = `I'm sorry, I couldn't find a definition for "${word}".`;
          } else {
            const definition = data[0].meanings[0].definitions[0].definition;
            botMessage.textContent = `"${word}" means: ${definition}.`;
          }

          // Add bot message to chat container
          chatContainer.appendChild(botMessage);

          // Scroll to bottom of chat container
          chatContainer.scrollTop = chatContainer.scrollHeight;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      // Get closest match in conversations array
      const closestMatch = conversations.find(conversation => conversation.keywords.some(keyword => userInput.includes(keyword)));

      // Create bot message element with closest match
      const botMessage = document.createElement("div");
      botMessage.classList.add("chat-message", "bot-message");
      botMessage.textContent = closestMatch ? closestMatch.answer : "I'm sorry, I don't understand.";

      // Add bot message to chat container
      chatContainer.appendChild(botMessage);
    }
  }

  // Clear user input
  document.getElementById("user-input").value = "";

  // Scroll to bottom of chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Add event listener to input field to listen for enter key press
document.getElementById("user-input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
