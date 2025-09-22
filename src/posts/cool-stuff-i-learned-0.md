# Cool stuff I learned [0]

_18-04-2019 · 2 min read_
**Period:** 2019/04/07 → 2019/04/13

As a way to help me measure my progress as a software developer, I decided to write weekly posts summarizing the coolest new things I’ve learned. Brief comments on what it is and how it helped me.

## Ruby

- **`group_by(&:itself)`** — groups recurring elements and returns a hash. I used this in a HackerRank challenge to count how many times certain strings appeared in an array.

## Rails

- **`I18n.l`** — helps localize content to the desired language (I was only using `I18n.t`). With it I adapted dates to Brazilian format `dd/mm/yyyy`.
- **`kaminari`** — gem for pagination; made our billing system’s pagination much easier by adding a few lines in controllers/views. I’ll try to implement pagination manually later to learn its secrets.
- **`scope`** — extracts commonly used queries and makes them available to the class. Great for DRYing code; helped fix my bad habit of querying in controllers.

## Programming

- **HackerRank Challenges** — site full of coding challenges to sharpen skills and prep for interviews. Many subjects and languages; I’m doing as many as I can as part of my 2019 plan.
