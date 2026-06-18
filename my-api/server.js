const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // allows requests from your frontend
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get("/quote", (req, res) => {
    res.json(
  { quote: "You have power over your mind — not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { quote: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
  { quote: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius" },
  { quote: "It is not death that a man should fear, but he should fear never beginning to live.", author: "Marcus Aurelius" },
  { quote: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius" },
  { quote: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
  { quote: "You could leave life right now. Let that determine what you do and say and think.", author: "Marcus Aurelius" },
  { quote: "In the morning when you rise unwillingly, let this thought be present: I am rising to the work of a human being.", author: "Marcus Aurelius" },
  { quote: "When you are offended at any man’s fault, turn to yourself and study your own failings. Then you will forget your anger.", author: "Marcus Aurelius" },
  { quote: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius" },
  { quote: "We are more often frightened than hurt; and we suffer more in imagination than in reality.", author: "Seneca" },
  { quote: "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.", author: "Seneca" },
  { quote: "As is a tale, so is life: not how long it is, but how good it is, is what matters.", author: "Seneca" },
  { quote: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
  { quote: "Begin at once to live, and count each separate day as a separate life.", author: "Seneca" },
  { quote: "True happiness is to enjoy the present without anxious dependence upon the future.", author: "Seneca" },
  { quote: "If a man knows not to which port he sails, no wind is favorable.", author: "Seneca" },
  { quote: "No man was ever wise by chance.", author: "Seneca" },
  { quote: "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.", author: "Seneca" },
  { quote: "Associate with people who are likely to improve you.", author: "Seneca" },
  { quote: "It’s not what happens to you, but how you react to it that matters.", author: "Epictetus" },
  { quote: "No man is free who is not master of himself.", author: "Epictetus" },
  { quote: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" },
  { quote: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus" },
  { quote: "Don’t explain your philosophy. Embody it.", author: "Epictetus" },
  { quote: "The key is to keep company only with people who uplift you, whose presence calls forth your best.", author: "Epictetus" },
  { quote: "Circumstances don’t make the man, they only reveal him to himself.", author: "Epictetus" },
  { quote: "It is the nature of the wise to resist pleasures, but the foolish to be a slave to them.", author: "Epictetus" },
  { quote: "The greater the difficulty, the more glory in surmounting it.", author: "Epictetus" },
  { quote: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.", author: "Epictetus" },
  { quote: "Better to trip with the feet than with the tongue.", author: "Zeno of Citium" },
  { quote: "We have two ears and one mouth; so we should listen more than we say.", author: "Zeno of Citium" },
  { quote: "Well-being is realized by small steps, but is truly no small thing.", author: "Zeno of Citium" },
  { quote: "The goal of life is living in agreement with Nature.", author: "Zeno of Citium" },
  { quote: "Man conquers the world by conquering himself.", author: "Zeno of Citium" },
  { quote: "A bad feeling is merely a commotion of the mind repugnant to reason, and against nature.", author: "Zeno of Citium" },
  { quote: "Let philosophy direct your life, and disorder will never overtake you.", author: "Chrysippus" },
  { quote: "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.", author: "Epictetus" },
  { quote: "Men are disturbed not by things, but by the views which they take of things.", author: "Epictetus" },
  { quote: "The whole future lies in uncertainty: live immediately.", author: "Seneca" },
  { quote: "Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.", author: "Epictetus" },
  { quote: "It is impossible for a man to learn what he thinks he already knows.", author: "Epictetus" },
  { quote: "Make the best use of what is in your power, and take the rest as it happens.", author: "Epictetus" },
  { quote: "He who laughs at himself never runs out of things to laugh at.", author: "Epictetus" },
  { quote: "Only the educated are free.", author: "Epictetus" },
  { quote: "If you want to improve, be content to be thought foolish and stupid.", author: "Epictetus" },
  { quote: "No great thing is created suddenly.", author: "Epictetus" },
  { quote: "Control your passions lest they take vengeance on you.", author: "Epictetus" },
  { quote: "We are not given a short life but we make it short, and we are not ill-supplied but wasteful of it.", author: "Seneca" },
  { quote: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca" },
  { quote: "A gem cannot be polished without friction, nor a man perfected without trials.", author: "Seneca" },
  { quote: "A good character, when established, is not easily overthrown.", author: "Seneca" },
  { quote: "Enjoy present pleasures in such a way as not to injure future ones.", author: "Seneca" },
  { quote: "He suffers more than necessary, who suffers before it is necessary.", author: "Seneca" },
  { quote: "To bear trials with a calm mind robs misfortune of its strength and burden.", author: "Seneca" },
  { quote: "No man is more unhappy than he who never faces adversity. For he is not permitted to prove himself.", author: "Seneca" },
  { quote: "The mind that is anxious about future events is miserable.", author: "Seneca" },
  { quote: "He who is brave is free.", author: "Seneca" },
  { quote: "While we wait for life, life passes.", author: "Seneca" },
  { quote: "We must indulge the mind and from time to time allow it the leisure which is its food and strength.", author: "Seneca" },
  { quote: "Wherever there is a human being, there is an opportunity for kindness.", author: "Seneca" },
  { quote: "Nothing, to my way of thinking, is a better proof of a well-ordered mind than a man’s ability to stop just where he is and pass some time in his own company.", author: "Seneca" },
  { quote: "Hang on to your youthful enthusiasms — you will be able to use them better when you are older.", author: "Seneca" },
  { quote: "Time discovers truth.", author: "Seneca" },
  { quote: "He who fears death will never do anything worth of a man who is alive.", author: "Seneca" },
  { quote: "Sometimes even to live is an act of courage.", author: "Seneca" },
  { quote: "Every new beginning comes from some other beginning’s end.", author: "Seneca" },
  { quote: "To be even-minded is the greatest virtue.", author: "Heraclitus" },
  { quote: "Character is destiny.", author: "Heraclitus" },
  { quote: "The only wealth which you will keep forever is the wealth you have given away.", author: "Marcus Aurelius" },
  { quote: "Be tolerant with others and strict with yourself.", author: "Marcus Aurelius" },
  { quote: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius" },
  { quote: "Confine yourself to the present.", author: "Marcus Aurelius" },
  { quote: "Receive without pride, let go without attachment.", author: "Marcus Aurelius" },
  { quote: "A man’s worth is no greater than his ambitions.", author: "Marcus Aurelius" },
  { quote: "Nowhere can man find a quieter or more untroubled retreat than in his own soul.", author: "Marcus Aurelius" },
  { quote: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", author: "Marcus Aurelius" },
  { quote: "To love only what happens, what was destined. No greater harmony.", author: "Marcus Aurelius" },
  { quote: "Reject your sense of injury and the injury itself disappears.", author: "Marcus Aurelius" },
  { quote: "Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.", author: "Marcus Aurelius" },
  { quote: "The universe is change; our life is what our thoughts make it.", author: "Marcus Aurelius" },
  { quote: "A man should be upright, not kept upright.", author: "Marcus Aurelius" },
  { quote: "If anyone can show me that what I think or do is not right, I will happily change, for I seek the truth.", author: "Marcus Aurelius" },
  { quote: "Be content to seem what you really are.", author: "Marcus Aurelius" },
  { quote: "Whatever anyone does or says, I must be emerald and keep my color.", author: "Marcus Aurelius" },
  { quote: "Be like the rock that the waves keep crashing over. It stands unmoved and the raging of the sea falls still around it.", author: "Marcus Aurelius" },
  { quote: "A rational being can turn every obstacle into material for his own progress.", author: "Marcus Aurelius" },
  { quote: "The art of living is more like wrestling than dancing.", author: "Marcus Aurelius" },
  { quote: "The secret of all victory lies in the organization of the non-obvious.", author: "Marcus Aurelius" },
  { quote: "Remember that very little is needed to make a happy life.", author: "Marcus Aurelius" },
  { quote: "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look.", author: "Marcus Aurelius" },
  { quote: "To understand the true quality of people, you must look into their minds, examine their pursuits, and study their desires.", author: "Marcus Aurelius" },
  { quote: "He who lives in harmony with himself lives in harmony with the universe.", author: "Marcus Aurelius" },
  { quote: "If someone is able to show me that what I think or do is not right, I will happily change, for I seek the truth, by which no one was ever truly harmed.", author: "Marcus Aurelius" },
  { quote: "Stop whatever you’re doing for a moment and ask yourself: Am I afraid of death because I won’t be able to do this anymore?", author: "Marcus Aurelius" },
  { quote: "What we do now echoes in eternity.", author: "Marcus Aurelius" }
);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});