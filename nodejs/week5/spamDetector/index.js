const FORBIDENWORD = ["Viagra", "Offer", "Free", ""];
class Email {
  constructor(subject, body) {
    this.subject = subject;
    this.body = body;
  }
}
class SpamDetector {
  isSpam(email) {
    if (
      this.uppercaseChecker(email) ||
      this.spamWordChecker(email) ||
      this.subjectChecker(email)
    ) {
      return true;
    }
    return false;
  }

  uppercaseChecker(text) {
    let uppers = 0;
    for (const character in text.body) {
      if (
        text.body.charAt(character) ===
        text.body.charAt(character).toUpperCase()
      ) {
        uppers++;
      }
    }
    const pct = (uppers / text.body.length) * 100;
    return pct > 60 ? true : false;
  }

  spamWordChecker(text) {
    const spamList = ["Viagra", "Offer", "Free", "Business", "Proposal"];
    const wordList = text.body.split(" ");
    return spamList.some(item => {
      return wordList.includes(item);
    });
  }

  subjectChecker(text) {
    return text.subject === "Hello";
  }
}

const emailFromOldFriend = new Email(
  "Hello old friend",
  "Long time no see, when should we hang out Viagra ??"
);
// const emailFromOldFriend = new Email(
//   "Hello old friend",
//   "Long TIME no SEE, when SHOULD WE HANG out AGAIN??"
// );
const spamDetector = new SpamDetector();
console.log(spamDetector.isSpam(emailFromOldFriend)); // false
