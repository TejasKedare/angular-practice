let op = {
  a: 'hell',

  // 👇 Regular function — has its own 'this'
  b: function () {
    // 'this' refers to the object that called the function (here, 'op')
    console.log(this.a); // ✅ Output: 'hell'
  },

  // 👇 Arrow function — does NOT have its own 'this'
  c: () => {
    // 'this' is taken from the surrounding (lexical) scope, 
    // not from the object 'op'. 
    // Since this code runs in global scope, 'this' is 'undefined' (in strict mode).
    console.log(this.a); // ❌ Output: undefined
  }
};

// Calling the regular function as a method of 'op'
op.b(); // 'this' → 'op' → logs 'hell'

// Calling the arrow function as a method of 'op'
op.c(); // 'this' → outer (global/module) scope → logs undefined


// ABSTRACT CLASS
// abstract class Vehicle {
//   abstract start(): void; // must be defined by child
//   stop(): void {
//     console.log("Vehicle stopped");
//   }
// }

// class Car extends Vehicle {
//   start(): void {
//     console.log("Car started with a key");
//   }
// }

// class Bike extends Vehicle {
//   start(): void {
//     console.log("Bike started with a kick");
//   }
// }


// you have a vanilla JS project or a script (like a chart, animation, or utility) that you want to use inside Angular.

// Steps:

// 1. Copy the JS files (e.g., myLib.js) into your Angular project — usually inside src/assets/js/.

// 2. Add the file path in angular.json under "scripts":

// "scripts": [
//   "src/assets/js/myLib.js"
// ]


// 3. Restart your Angular server (ng serve).

// 4. Use the global variable (if any) in your component:

// declare var myLib: any;

// ngOnInit() {
//   myLib.doSomething();
// }


// Angular generates the following in the dist/ folder
// | Type                       | Example File          | Purpose                                                  |
// | -------------------------- | --------------------- | -------------------------------------------------------- |
// | HTML                   | `index.html`          | Main entry point of the app. It loads the JS bundles.    |
// | Main JS bundle         | `main.abc123.js`      | Compiled TypeScript → JavaScript (your app logic).       |
// | Runtime JS             | `runtime.abc123.js`   | Loads and links all bundles (main, vendor, polyfills, etc.), Manages lazy-loaded modules                    |
// | Polyfills JS           | `polyfills.abc123.js` | Compatibility code for older browsers.                   |
// | Vendor JS              | `vendor.abc123.js`    | External libraries like Angular core, RxJS, etc.         |
// | CSS                    | `styles.abc123.css`   | Your global or component styles.                         |
// | Assets folder          | `/assets/...`         | Images, icons, fonts, etc.                               |
// | Favicon                | `favicon.ico`         | App icon used in browser tabs.                           |
// | Source maps (optional) | `main.abc123.js.map`  | Help debug the minified code (usually disabled in prod). |
