function checkGeneration() {
  var dob = document.getElementById("dob").value;
  var result = document.getElementById("result");

  // Check if the DOB is entered
  if (!dob) {
    result.innerHTML = "<p>Please enter your date of birth.</p>";
    return;
  }

  // Convert DOB to Date object
  var birthDate = new Date(dob);
  var currentDate = new Date();

  // Calculate age
  var age = currentDate.getFullYear() - birthDate.getFullYear();
  var monthDifference = currentDate.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Determine Generation and Characteristics based on DOB
  var generation = "";
  var traits = "";
  var funnyLine = "";

  if (birthDate >= new Date("2013-01-01")) {
    generation = "Generation Alpha (Gen Alpha)";
    traits = `
        <ul>
          <li>Born after 2013, digital natives from birth</li>
          <li>Extremely tech-savvy and connected</li>
          <li>Raised with smart devices and AI</li>
          <li>Highly aware of sustainability and climate change</li>
          <li>Focus on education, creativity, and problem-solving</li>
        </ul>`;
        funnyLine = `
      <ul>
        <li>"📱 Born into tech world – iPads before toys"</li>
        <li>🎙️ Alexa & Siri are their besties</li>
        <li>🧠 Learn from YouTube before school</li>
        <li>👉 “Alexa, mera homework kar do!</li>
      </ul>`
  } else if (
    birthDate >= new Date("1997-01-01") &&
    birthDate <= new Date("2012-12-31")
  ) {
    generation = "Generation Z (Gen Z)";
    traits = `
        <ul>
          <li>Digital natives, born with the internet</li>
          <li>Social media experts (TikTok, Instagram)</li>
          <li>Mental health awareness is high</li>
          <li>Love short-form content (reels, memes)</li>
          <li>Entrepreneurial and independent learners</li>
        </ul>`;
        funnyLine = `
      <ul>
        <li>🎬 TikTok is their language</li>
        <li>😂 Speak fluent memes</li>
        <li>⚡ Battery 10% = Panic mode!</li>
        <li>👉 “Battery 10% aur panic 100%!</li>
      </ul>`;
  } else if (
    birthDate >= new Date("1981-01-01") &&
    birthDate <= new Date("1996-12-31")
  ) {
    generation = "Millennials (Gen Y)";
    traits = `
        <ul>
          <li>Tech-savvy, grew up with computers</li>
          <li>Value work-life balance</li>
          <li>Love experiences over material things</li>
          <li>Socially and environmentally conscious</li>
          <li>Grew up with transition from dial-up to smartphones</li>
        </ul>`;
        funnyLine = `
      <ul>
        <li>💾 Saw floppy disks and now use cloud</li>
        <li>🎧 From Walkman to Spotify</li>
        <li>😅 Adulting is hard!</li>
        <li>"👉 Hum ne floppy bhi dekhi hai, aur cloud bhi!</li>
        <li>Bachpan mein apne papers ki tension lete thay, ab apne bachon ke report cards dekh kar ‘Agar is baar fail huay toh tumhara Wi-Fi band kar dunga!’</li>
      </ul>`;
  } else if (
    birthDate >= new Date("1965-01-01") &&
    birthDate <= new Date("1980-12-31")
  ) {
    generation = "Generation X (Gen X)";
    traits = `
        <ul>
          <li>Latchkey kids: independent upbringing</li>
          <li>Tech-savvy but not obsessed</li>
          <li>Cynical and pragmatic mindset</li>
          <li>Work hard, play hard attitude</li>
          <li>Highly entrepreneurial</li>
        </ul>`;
        funnyLine = `
      <ul>
        <li>📺 Grew up with black & white TV</li>
        <li>🎮 Played real outdoor games</li>
        <li>🔁 From letters to emails</li>
        <li>👉 Hamare time mein remote se nahi, uth ke TV band karte thay!</li>
      </ul>`;
  } else if (
    birthDate >= new Date("1946-01-01") &&
    birthDate <= new Date("1964-12-31")
  ) {
    generation = "Baby Boomers";
    traits = `
        <ul>
          <li>Grew up post-WWII in growing economies</li>
          <li>Value traditional family structures</li>
          <li>Strong work ethic</li>
          <li>Less tech-savvy</li>
          <li>Prefer stability and loyalty in jobs</li>
        </ul>`;
        funnyLine = `
      <ul>
        <li>📻 Lived through radio & record players</li>
        <li>🏠 Strong family values</li>
        <li>✉️ Wrote letters, not texts</li>
        <li>👉 Hamare zamane mein Google nahi, abbu hotay thay!</li>
      </ul>`
  } else if (
    birthDate >= new Date("1928-01-01") &&
    birthDate <= new Date("1945-12-31")
  ) {
    generation = "Silent Generation";
    traits = `
        <ul>
          <li>Disciplined and conservative</li>
          <li>Experienced war/post-war times</li>
          <li>Value hard work and respect</li>
          <li>Less inclined towards modern technology</li>
          <li>Focused on saving, not spending</li>
        </ul>`;
        funnyLine = `
      <ul>
        <li>Lived through major world events</li>
        <li>🕊️ Value peace & simplicity</li>
        <li>📚 Encyclopedias were Google!</li>
        <li>👉 Hamare Google ka naam tha: 'Kitab Ghar'!</li>
      </ul>`
  } else {
    generation = "Unknown Generation";
    traits = "<p>Data not available.</p>";
    funnyLine = "👉 “I think ghalat generation main ghus gaye aap 😜😂... Ye wala section Gen Alpha ka hai!”";
  }

  result.innerHTML = `
      <h3><strong>${generation}</strong></h3>
      <h4>Age: ${age} years</h4>
      <h4>Characteristics:</h4>
      ${traits}
      <p style="font-style: italic; color: #888;">${funnyLine}</p>
    `;
}
