window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const logo = document.querySelector(".logo-container1");
    requestAnimationFrame(() => {
      logo.classList.add("logo-container", "show");
    });
  }, 1000);
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
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
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

let commandHistory = [];
let historyIndex = -1;
function handleCommand(e) {
  const input = e.target;
  const output = document.getElementById("terminal-output");

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
                                <li>about – learn about this bootcamp</li>
                                <li>motivate – get a motivational quote</li>
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
      ];
      const joke = jokes[Math.floor(Math.random() * jokes.length)];
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div>
                         <div class="fade-in" style='color:#ffcc00; margin-top: 0.5rem;'>😂 ${joke}</div>`
      );
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
      ];

      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      output.insertAdjacentHTML(
        "beforeend",
        `<div class='terminal-line'><span class='prompt'>bmcit@prep:~$</span> ${cmd}</div><div class="fade-in" style='margin: 1rem 0; color: #66ff99;'>${quote}</div>`
      );
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
