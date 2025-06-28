const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const logo = document.querySelector(".logo-container1");
    requestAnimationFrame(() => {
      logo.classList.add("logo-container", "show");
    });
  }, 1000);

  document.querySelector("#command").focus();
});
document.addEventListener("keydown", (e) => {
  const input = document.querySelector("#command");

  if (e.ctrlKey || e.altKey || e.metaKey) return;

  if (document.activeElement !== input) {
    e.preventDefault();
    input.focus();

    if (e.key.length === 1) {
      input.value += e.key;
    } else if (e.key === "Backspace") {
      input.value = input.value.slice(0, -1);
    } else if (e.key === "Enter") {
      input.form?.dispatchEvent(new Event("submit"));
    }
  }
});

const previews = {
  // HTML Topics
  "<html>, <head>, <body>": ``,

  "Headings & Paragraphs": `<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph with some text.</p>`,

  "Divs & Spans": `<div class="box">
  <span>Inline text</span>
</div>`,

  "Forms & Inputs": `<form>
  <input type="text" placeholder="Your name">
  <input type="email" placeholder="Email">
</form>`,

  Buttons: `<button type="submit">Submit</button>`,

  Lists: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>`,

  "Links & Anchors": `<a href="https://arunneupane.netlify.app">Visit Website</a>`,

  Images: `<img src="logo.png" alt="Logo" width="200">`,

  Tables: `<table>
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Alice</td><td>22</td></tr>
</table>`,

  "Semantic Tags": `<header>Site Header</header>
<section>Main Content</section>
<footer>Footer Info</footer>`,

  "Meta Tags": `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,

  // CSS Topics
  Selectors: `h1 {
  color: blue;
}

.container > .item {
  background: #eee;
}`,

  "Box Model": `.box {
  margin: 10px;
  border: 1px solid #000;
  padding: 20px;
}`,

  "Display & Position": `.box {
  display: flex;
  position: absolute;
  top: 10px;
  left: 10px;
}`,

  "Colors & Backgrounds": `.card {
  background: linear-gradient(#fff, #ccc);
  color: #333;
}`,

  Typography: `p {
  font-family: 'Arial';
  font-size: 16px;
  line-height: 1.5;
}`,

  Flexbox: `.container {
  display: flex;
  justify-content: space-between;
}`,

  "CSS Grid": `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}`,

  "Transitions & Animations": `.btn {
  transition: background 0.3s;
}

.btn:hover {
  background: black;
}`,

  "Media Queries": `@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}`,

  "Z-index & Stacking": `.modal {
  position: absolute;
  z-index: 1000;
}`,

  "CSS Variables": `:root {
  --main-color: #4CAF50;
}

.button {
  background: var(--main-color);
}`,

  // JavaScript Topics
  Variables: `let name = "BMC";
const year = 2025;`,

  "Data Types": `let str = "text";
let num = 123;
let bool = true;
let obj = { key: "value" };
let arr = [1, 2, 3];`,

  Functions: `function greet(name) {
  return "Hello " + name;
}`,

  Conditionals: `if (score > 80) {
  console.log("Excellent");
} else {
  console.log("Keep improving!");
}`,

  Loops: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,

  "Array Methods": `const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);`,

  Objects: `const user = {
  name: "Alice",
  age: 22
};

const { name } = user;`,

  "DOM Manipulation": `document.getElementById("title").textContent = "Updated!";`,

  Events: `document.querySelector("button")
  .addEventListener("click", () => alert("Clicked!"));`,

  "ES6 Features": `const greet = (name) => \`Hello \${name}\`;
const nums = [1, 2];
const all = [...nums, 3];`,

  "Async JavaScript": `async function load() {
  const res = await fetch('/api');
  const data = await res.json();
}`,

  Modules: `// greet.js
export function greet(name) {
  return \`Hi \${name}\`;
}

// main.js
import { greet } from './greet.js';`,
};

document.addEventListener("DOMContentLoaded", startPreview);
function startPreview() {
  const topicSpans = document.querySelectorAll(".section-block .topic");
  const previewBox = document.getElementById("preview-box");

  if (isMobile) {
    previewBox.textContent = "Tap on a topic to see its usage/code here.";
  }

  topicSpans.forEach((span) => {
    span.addEventListener("mouseenter", () => {
      previewBox.classList.remove("dimmed");
      const text = span.textContent.trim();
      const preview = previews[text] || "// No preview available";

      // Clear previous content and cancel existing typeEffect
      previewBox.textContent = "";
      if (previewBox._typeEffectTimeouts) {
        previewBox._typeEffectTimeouts.forEach((timeout) =>
          clearTimeout(timeout)
        );
      }

      // Run new typewriter effect and store its timeouts to allow cancelling
      previewBox._typeEffectTimeouts = [];
      let i = 0;
      function type() {
        if (i < preview.length) {
          previewBox.textContent += preview.charAt(i++);
          const timeout = setTimeout(type, 20);
          previewBox._typeEffectTimeouts.push(timeout);
        }
      }
      type();
    });

    span.addEventListener("mouseleave", () => {
      // Cancel ongoing typewriter animation
      if (previewBox._typeEffectTimeouts) {
        previewBox._typeEffectTimeouts.forEach((timeout) =>
          clearTimeout(timeout)
        );
      }
      previewBox._typeEffectTimeouts = [];

      previewBox.classList.add("dimmed");
    });
  });
}

let reactjsBlockHTML = "";
let htmlBlockHTML = "";
let cssBlockHTML = "";
let jsBlockHTML = "";

window.onload = () => {
  const blocks = document.querySelectorAll(".section-block");
  reactjsBlockHTML = blocks[0]?.outerHTML || "";
  htmlBlockHTML = blocks[1]?.outerHTML || "";
  cssBlockHTML = blocks[2]?.outerHTML || "";
  jsBlockHTML = blocks[3]?.outerHTML || "";
};

const allCommands = [
  "help",
  "clear",
  "cls",
  "show react",
  "show html",
  "show css",
  "show js",
  "about",
  "motivate",
  "time",
  "whoami",
  "joke",
  "logo",
  "ascii",
  "club",
  "bmcit",
];
let tabSuggestions = [];
let tabIndex = 0;

let commandHistory = [];
let historyIndex = -1;
function handleCommand(e) {
  goFullscreen();
  const input = e.target;
  const output = document.getElementById("terminal-output");
  const value = input.value.trim().toLowerCase();

  if (e.key === "Tab") {
    e.preventDefault();

    // Generate or cycle through suggestions
    if (!tabSuggestions.length) {
      tabSuggestions = allCommands.filter((cmd) => cmd.startsWith(value));
      tabIndex = 0;
    } else {
      tabIndex = (tabIndex + 1) % tabSuggestions.length;
    }

    if (tabSuggestions.length > 0) {
      input.value = tabSuggestions[tabIndex];
    }

    return;
  }

  if (e.key !== "Tab") {
    tabSuggestions = [];
    tabIndex = 0;
  }

  if (e.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      input.value = commandHistory[historyIndex];
    }
    return;
  } else if (e.key === "ArrowDown") {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      input.value = commandHistory[historyIndex];
    } else {
      input.value = "";
      historyIndex = commandHistory.length;
    }
    return;
  }

  if (e.key === "Enter") {
    const cmd = e.target.value.trim().toLowerCase();
    if (cmd) {
      commandHistory.push(cmd);
      historyIndex = commandHistory.length; // reset index
    }

    const output = document.getElementById("terminal-output");

    if (cmd === "clear" || cmd === "cls") {
      output.innerHTML = "";
    } else if (cmd === "help") {
      output.insertAdjacentHTML(
        "beforeend",
        `
                            <div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> help</div>
                            <div class='section-block fade-in'>
                              <h2>Help</h2>
                              <ul>
                                <li>clear/cls – clears the terminal</li>
                                <li>help – shows available commands</li>
                                <li>show react – show what is React.js </li>
                                <li>show html – show HTML topics</li>
                                <li>show css – show CSS topics</li>
                                <li>show js – show JavaScript topics</li>
                                <li>show quiz – show quiz on these topics</li>
                                <li>about – learn about this bootcamp</li>
                                <li>motivate – get a motivational quote</li>
                                <li>time – shows current time</li>
                                <li>whoami – tells you who you are</li>
                                <li>joke – get a programming joke</li>
                                <li>show logo – show BMCIt Club logo</li>
                                <li>press tab – runs through all commands</li>
                                <li>sudo rm -rf / – Deletes everything (not recommended!)</li>
                              </ul>
                              <ul>
                                <li>Navigation : </li>
                                <li> Open html - Open html practice page</li>
                                <li> Open css - Open css practice page</li>
                                <li> Open js - Open js practice page</li>
                                <li> Open quiz - Open quiz page</li>
                                <li> Open resources - Open resources page</li>
                              </ul>
                            </div>`
      );
    } else if (
      cmd === "bmcit" ||
      cmd === "logo" ||
      cmd === "ascii" ||
      cmd === "bmcitclub" ||
      cmd === "show logo" ||
      cmd === "club" ||
      cmd === "show bmcit" ||
      cmd === "show bmcit club" ||
      cmd === "show logo"
    ) {
      const asciiLogo = `
                        <pre class="ascii-art fade-in">
                                  ____  __  __  ____ ___ _____ 
                                 | __ )|  \\/  |/ ___|_ _|_   _|
                                 |  _ \\| |\\/| | |    | |  | |  
                                 | |_) | |  | | |___ | |  | |  
                                 |____/|_|  |_|\\____|___| |_|  
                                                            
                                      ........................                                      
                                    .....:-=*#########+=:.....  ..                                  
                              .....:*###*+:..+*.@@%#*+:.=*####=......  .                            
                         ......-*##=-#%%-....#@...=@:.......:--*##+.....                            
                         ...=##=:..%%:.:.   .+@:..*@.    .%@*=#@+.-*#*:..                           
                       ..:*#+:*@:.=@:. .... .=@=..%@.    =@-  .::.*@--*#+......                     
                   ....-#*-...*@@+.%@=:=%%...:=:..==.....-@*.....#@:....=#+.....                    
                 ....:#*:*%=:.=@-%@::++=..-=+*######*+=-:..+%@%:#@::%%....=#*.....                  
                 ...*#:...%@%@@@:.*:.-+##*+-..........:=+*##=:.*#.*@=..=+...+#=....                 
              ....-#+.#@#..#@=....-##+:....:+###*#*=:.......-*#*:.*@-:@@:.:%%.##...                 
              ...*#--@::@@@%-@::##+.....+#*#############=.......*#+.+@*.+@@=...+#-...               
            ....*#:+@%.%*.=@:.##:.....*#####****###########*:.....=#+.#@@..*%...-#=...              
            ...#*....+@@+*%:*#-..+*::*####+=*###*-::::::-+*##*. ....+#-=@::%%....:#+....            
            ..*#...  ..-%*-#+..+##--#####*+#######.. .:==+++==:......:#*-+*-......-#=...            
          ...+#....    ..=#-.=###=-#####+.+#######-. .*###########+-...+#:...   ...-#-....          
          ..-#-.       .=#-:*###=:####+...:*#####=.. ...-+*##########+..+#:..    ...**..            
  ..........#*:::::::::=#:-####*.=##*:.    ..-=:..         ..=****#####=.+#-:::::::::#+............ 
.:=========+############+-#####=.=*=..                     ..:*###==*###+.#############===========-.
..######################:*####*.....                       .=######*+####-:#######################:.
..-####################--###*:*####*:..                    .*#######-####*.*#####################+..
...*###################:+###=#######*:.                    .:*#####*+#####.+#####################:. 
  ..##*:=+####+####+*##.+###=*######*..                     ..:-=-...+####:=*-=:#-=-#+--=#-+-###-...
  ..=#*:=+*-+#=#*:#=*##.:###*=*####*..                          ..*#=.*###:-#*-++-#+=+--+==#=+#*..  
  ..##*:--*--*+-*--:*##..+#####+....                            ..*##-=###.-*:--#--:#+::=#---###:...
...*###################:..*#####=..                             .-###+.*#*.+#####################...
..-####################-...+#####+..                            .+###*.*#=.*#####################+..
..*####################*..:*=*####*...                   ........*####:=#::#######################:.
.=*********#############=..*#*:*###*.. ....            ..=#####*-#####:...*############************.
 ...........#*-------=-+#:..*##+.-*+..-*###*-..        .-#######+*###*...+#----------#+.............
         ...-#-. ..=*-..+#:.:####+:..=#######=.        .:#######+*###+..=#:..#**....*#....          
            .**...-*+*...+#:.:*#####*+#######=.......--..:*###*=+###*..=#:..*.-  ..-#-..            
            ..#*....:#*-..-#=..*#####=+#####+:-=**#####-...=++*####*:.*#...==+. ..:#+...            
            ..:#+....=++=:..##:.=*#####+---*#########*..:+########=.=#+...+*:....:#+...             
             ...#*.....+#-=..:#*..=*##############*-.:*########*=.-##....+*=....:#+..               
             ....##:.. .*=*....-##-..-*#######*-.=**########+:..+#*...=*++.....-#=....              
              ....=#=....:-%-:....+##=............::::.......+##-....=+==.....*#:...                
                 ..:#*.....-**-.:....=##*+-...... .....:=+##*-.....+=-=:....-#+...                  
                 ....-#+....-..++=-......:=+*#########*=-:......:+#==:....-#*:...                   
                    ...=#*:.....:#*++==:....................%.:#*.-.....-##:.....                   
                      ...-##-......-*-#-+%*:::.+.:.::.--*==#:=.......:+#*:...                       
                         ...+##-........-:+-++:+%:%#=#*:#=.... ...:+##-...                          
                         ......+##*-........      .=+. ........=###-......                          
                            .......=####+-...............-*###*-......                              
                                   .....:-+*###########*=-:......                                   
                                    ... .....   ....
                        </pre>`;
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div>${asciiLogo}`
      );
    } else if (cmd === "time") {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div>
                         <div class="fade-in" style='margin-top: 0.5rem;'>🕒 Current time is <strong>${timeString}</strong></div>`
      );
    } else if (cmd === "whoami") {
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div>
                         <div class="fade-in" style='margin-top: 0.5rem; color: #66ffcc;'>💻 You are a future React dev, dawg!</div>`
      );
    } else if (cmd === "joke") {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why do Java developers wear glasses? Because they don’t see sharp.",
        "Debugging: Being the detective in a crime movie where you are also the murderer.",
        "There are 10 types of people in the world: those who understand binary and those who don’t.",
        "I told my computer I needed a break, and it said: 'Why? You barely function as it is.'",
        "How many programmers does it take to change a light bulb? None. That’s a hardware problem.",
        "I changed my password to 'incorrect' so whenever I forget it, the computer says 'Your password is incorrect.'",
        "Why did the developer go broke? Because he used up all his cache.",
        "To understand what recursion is, you must first understand recursion.",
        "I would tell you a joke about UDP, but you might not get it.",
        "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
        "In a world without fences and walls, who needs Gates and Windows?",
        "Real programmers count from 0.",
        "Why do Python developers not wear glasses? Because they can clearly see 'self'.",
        "404 joke not found.",
        "Why did the programmer quit his job? Because he didn't get arrays.",
        "My code doesn’t always work, but when it does, I don’t know why.",
        "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
        "Knock knock. Who's there? *very long pause* Java.",
        "Why do front-end developers eat lunch alone? Because they don’t know how to join tables.",
      ];

      const joke = jokes[Math.floor(Math.random() * jokes.length)];
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div>
                         <div class="fade-in" style='color:#ffcc00; margin-top: 0.5rem;'>😂 ${joke}</div>`
      );
    } else if (cmd === "open html") {
      window.location.href = "./pages/practice-html.html";
    } else if (cmd === "open css") {
      window.location.href = "./pages/practice-css.html";
    } else if (cmd === "open js") {
      window.location.href = "./pages/practice-js.html";
    } else if (cmd === "open quiz") {
      window.location.href = "./pages/quiz.html";
    } else if (cmd === "open resources" || cmd === "open resource") {
      window.location.href = "./pages/reference.html";
    } else if (cmd === "show html") {
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div>`
      );
      appendContentWithFade(output, htmlBlockHTML);
    } else if (cmd === "reactjs" || cmd === "show react") {
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div>`
      );
      appendContentWithFade(output, reactjsBlockHTML);
    } else if (cmd === "show css") {
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div>`
      );
      appendContentWithFade(output, cssBlockHTML);
    } else if (cmd === "show js") {
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div>`
      );
      appendContentWithFade(output, jsBlockHTML);
    } else if (cmd === "about") {
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> about</div>
                        <div class='section-block fade-in'>
                          <h2>About BMCIt Club</h2>
                          <p>BMCIt Club is a student-led tech group at Bhairahawa Multiple Campus, committed to hands-on learning, collaboration, and growth.</p>
                          <p>This Pre-React Bootcamp sets the stage for our in-depth 7-Day React Training with expert mentors.</p>
                        </div>`
      );
    } else if (cmd === "motivate") {
      const quotes = [
        "“Code is like humor. When you have to explain it, it’s bad.”",
        "“First, solve the problem. Then, write the code.”",
        "“Experience is the name everyone gives to their mistakes.”",
        "“Learning never exhausts the mind.”",
        "“The best way to learn is by doing.”",
        "“Every great developer you know once struggled to understand the basics.”",
        "“Don’t worry about being great. Just be consistent.”",
        "“You don’t have to be perfect. You just have to start.”",
        "“React won’t learn itself — but you can absolutely learn it.”",
        "“Debugging is like being the detective in a crime movie where you are also the murderer.”",
        "“Dream in code, build in reality.”",
        "“One step at a time is still progress.”",
        "“You are only one bug fix away from greatness.”",
        "“The journey from beginner to expert is made of tiny, consistent steps.”",
        "“Failure is just a stepping stone to cleaner code.”",
        "“Believe in your logic — even when the syntax says otherwise.”",
        "“Today’s confusion is tomorrow’s clarity.”",
        "“Push through the errors. Compile your growth.”",
        "“Your future self is already proud of you for not giving up.”",
        "“Write code that makes you proud — even if no one else sees it.”",
      ];

      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div><div class="fade-in" style='margin: 1rem 0; color: #66ff99;'>${quote}</div>`
      );
    } else if (
      cmd === "quote" ||
      cmd === "quotes" ||
      cmd === "programming quotes"
    ) {
      const programmingQuotes = [
        "“Talk is cheap. Show me the code.” – Linus Torvalds",
        "“Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson",
        "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
        "“Simplicity is the soul of efficiency.” – Austin Freeman",
        "“First, solve the problem. Then, write the code.” – John Johnson",
        "“Good code is its own best documentation.” – Steve McConnell",
        "“Walking on water and developing software from a specification are easy if both are frozen.” – Edward V. Berard",
        "“Software is a great combination of artistry and engineering.” – Bill Gates",
        "“Programming isn't about what you know; it's about what you can figure out.” – Chris Pine",
        "“Before software can be reusable it first has to be usable.” – Ralph Johnson",
        "“Programs are meant to be read by humans and only incidentally for computers to execute.” – Donald Knuth",
        "“Simplicity is prerequisite for reliability.” – Edsger W. Dijkstra",
        "“Code never lies, comments sometimes do.” – Ron Jeffries",
        "“The best way to get a project done faster is to start sooner.” – Jim Highsmith",
        "“You can’t have great software without a great team.” – Joel Spolsky",
        "“Debugging is twice as hard as writing the code in the first place.” – Brian Kernighan",
        "“Computers are good at following instructions, but not at reading your mind.” – Donald Knuth",
        "“Controlling complexity is the essence of computer programming.” – Brian Kernighan",
        "“It’s not a bug – it’s an undocumented feature.” – Anonymous",
        "“The most disastrous thing that you can ever learn is your first programming language.” – Alan Kay",
      ];

      const programmingQuote =
        programmingQuotes[Math.floor(Math.random() * programmingQuotes.length)];
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div><div class="fade-in" style='margin: 1rem 0; color: #66ff99;'>${programmingQuote}</div>`
      );
    } else if (cmd === "sudo rm -rf /") {
      goFullscreen();
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div>`
      );

      const lines = [
        "[sudo] password for bmcit: ********",
        "Warning: This operation will remove all files and directories recursively!",
        "Deleting /bin...",
        "Deleting /boot...",
        "Deleting /dev...",
        "Deleting /etc...",
        "Deleting /home...",
        "Deleting /lib...",
        "Deleting /mnt...",
        "Deleting /opt...",
        "Deleting /proc...",
        "Deleting /root...",
        "Deleting /sbin...",
        "Deleting /srv...",
        "Deleting /sys...",
        "Deleting /tmp...",
        "Deleting /usr...",
        "Deleting /var...",
        "Deleting /... complete",
        "",
        "Segmentation fault (core dumped)",
        "bash: command not found",
        "_",
      ];

      let delay = 0;
      lines.forEach((line, index) => {
        setTimeout(() => {
          const div = document.createElement("div");
          div.className = "terminal-line fade-in";
          div.textContent = line;
          output.appendChild(div);
          output.scrollTop = output.scrollHeight;
        }, delay);
        delay += 300;
      });

      // Freeze input after the 'crash'
      setTimeout(() => {
        const inputField = document.querySelector("#command");
        inputField.disabled = true;
        inputField.placeholder = "system failure...";
        inputField.style.color = "#ff0000";
      }, delay + 500);

      // After fake deletion ends
      setTimeout(() => {
        // Clear terminal
        output.innerHTML = "";

        // Style terminal
        output.style.backgroundColor = "black";
        output.style.color = "#ff4444";
        output.style.fontFamily = "'Courier New', monospace";
        output.style.textAlign = "center";

        // Hide other elements
        document.querySelector(".terminal-line").style.display = "none";
        document.querySelector(".preview-container").style.display = "none";
        document.querySelector("footer").style.display = "none";

        // Disable input
        const inputField = document.querySelector("#command");
        inputField.disabled = true;
        inputField.placeholder = "SYSTEM HALTED";
        inputField.style.color = "#ff4444";

        // Define multiple error messages
        const errorMessages = [
          `
   .... NO! ...                  ... MNO! ...
   ..... MNO!! ...................... MNNOO! ...
 ..... MMNO! ......................... MNNOO!! .
.... MNOONNOO!   MMMMMMMMMMPPPOII!   MNNO!!!! .
 ... !O! NNO! MMMMMMMMMMMMMPPPOOOII!! NO! ....
    ...... ! MMMMMMMMMMMMMPPPPOOOOIII! ! ...
   ........ MMMMMMMMMMMMPPPPPOOOOOOII!! .....
   ........ MMMMMOOOOOOPPPPPPPPOOOOMII! ...  
    ....... MMMMM..    OPPMMP    .,OMI! ....
     ...... MMMM::   o.,OPMP,.o   ::I!! ...
         .... NNM:::.,,OOPM!P,.::::!! ....
          .. MMNNNNNOOOOPMO!!IIPPO!!O! .....
         ... MMMMMNNNNOO:!!:!!IPPPPOO! ....
           .. MMMMMNNOOMMNNIIIPPPOO!! ......
          ...... MMMONNMMNNNIIIOO!..........
       ....... MN MOMMMNNNIIIIIO! OO ..........
    ......... MNO! IiiiiiiiiiiiI OOOO ...........
  ...... NNN.MNO! . O!!!!!!!!!O . OONO NO! ........
   .... MNNNNNO! ...OOOOOOOOOOO .  MMNNON!........
   ...... MNNNNO! .. PPPPPPPPP .. MMNON!........
      ...... OO! ................. ON! .......
         ................................

    CRITICAL SYSTEM FAULT
    FILESYSTEM CORRUPTED — KERNEL PANIC
    `,
          `
          
    [!!] ERROR CODE: 0x7EF — MEMORY DUMP INITIATED
    SYSTEM UNSTABLE. RETRYING... RETRY FAILED.
    SEGMENTATION FAULT. STACK TRACE LOST.
    `,
          `
    
System Error
    *  *    
     *  ****
****        
            
* *         
   *        
     *      
    *  *    
          * 
            
 *          
        ** *
    > Unhandled exception at 0x00007FF9A1B2C3D4
    > Stack overflow detected
    > Attempting to recover...
    > Recovery failed: System halted
    `,
          `
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    █ SYSTEM BREACH DETECTED █
    > Access violation @ 0x004F29
    > Dumping volatile memory...
    > OVERFLOW DETECTED: SHUTTING DOWN
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    `,
          `
    !!! FATAL ERROR !!!
    /usr/bin/bash: command not found
    CPU Exception: Divide by zero
    Kernel module "safe_exit" not responding
    Recovering... ERROR: Recovery failed
    `,
          `
    SYSTEM FAILURE — CORE DUMPED
    ███▓▒░░ X_X ░░▒▓███
    This machine has encountered an unrecoverable problem.
    Press Ctrl+Alt+Del to cry.
    `,
          `
    
 __              _   __              _   _______   _______     _______   _______   _______   _______   _______  
/  / .-.   ____.'_| /  / .-.   _____\ | | ._ _. | |__   _.'   | ._ _. | |_  ___ \ |_  ___ \ /  ____ \ |_  ___ \ 
| /_/ _ \ |___. '.  | /_/ _ \ \______ | | \ v / |  __>  >_    | \ v / |  /  \_/ |  /  \_/ | | /___/ |  /  \_/ | 
\___.'/_|      '._| \___.'/_|       /_| |_/   \_| |_______\   |_/   \_| |_/'.__.' |_/'.__.' \_______/ |_/'.__.' 
                                                                                                                
                                                                                                                

    `,
          `
    ██████╗ ██████╗ ███████╗███████╗██████╗ ███████╗
    ██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗██╔════╝
    ██████╔╝██████╔╝█████╗  █████╗
    ██║  ██║█████╗  ██║██╔══╝  ██╔══██╗██╔══╝
    ██║  ██║██╔══██╗███████╗███████╗██████╔╝███████╗
    ╚═╝  ╚═╝╚═╝  ╚═╝  ╚══════╝╚═════╝ ╚══════╝
    SYSTEM CRASHED  
    Please contact support at *******@bmcit.edu.np
    `,
        ];

        // Add each error message every 2 seconds
        errorMessages.forEach((msg, i) => {
          setTimeout(() => {
            const glitchBlock = document.createElement("pre");
            glitchBlock.className = "glitch-error";
            glitchBlock.textContent = msg;
            output.style.maxHeight = "95vh";
            output.appendChild(glitchBlock);
            output.scrollTop = output.scrollHeight;
          }, i * 2000); // stagger by 2s
        });
      }, delay + 1200);
    } else {
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt fade-in'>bmcit@prep:~$</span> ${cmd}</div>`
      );
      output.insertAdjacentHTML(
        "beforeend",
        `<div class="fade-in" style='margin: 1rem 0; color: #777;'>Command not recognized. Try 'help'</div>`
      );
    }

    e.target.value = "";
    output.scrollTop = output.scrollHeight;
    startPreview();
  }
}
function appendContentWithFade(output, html) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("fade-in");
  wrapper.innerHTML = html;
  output.appendChild(wrapper);
}
function goFullscreen() {
  const elem = document.documentElement; // whole page

  if (!isMobile) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      // Safari
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      // IE11
      elem.msRequestFullscreen();
    }
  }
}
