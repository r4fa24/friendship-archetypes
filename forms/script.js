document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const answers = Array.from(formData.values());

  const count = {
    listen_advice: 0,
    share_story: 0,
    crack_joke: 0,
    check_in_later: 0
  };

  answers.forEach(answer => {
    if (count[answer] !== undefined) {
      count[answer]++;
    }
  });

  let resultType = '';
  let max = 0;
  for (let type in count) {
    if (count[type] > max) {
      max = count[type];
      resultType = type;
    }
  }

  const resultDescriptions = {
    listen_advice: "🪨 <strong>The Anchor</strong><br>Keeps you grounded, listens well — the steady presence you rely on.",
    share_story: "🔥 <strong>The Spark</strong><br>Brings energy, hype, and encouragement — the one who lifts the mood.",
    crack_joke: "🎭 <strong>The Joker</strong><br>Lightens things up with humor and memes; makes hard times easier.",
    check_in_later: "🐺 <strong>The Lone Wolf</strong><br>Independent, chill, loyal but low-key — values space and honesty."
  };

  document.getElementById('result').innerHTML = resultDescriptions[resultType] || "Please answer all the questions!";
});
