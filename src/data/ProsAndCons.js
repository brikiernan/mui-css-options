export const ProsAndCons = [
    {
Pros: {
    SX: ["Can specify any valid CSS using this prop","Reusable", "Use for 'one-time' styling", "No boilerplate code (requires less code)"], 
    Components: ["Abstract all styling components and package them into a new component", "Reusable", "Pure CSS, no different syntax", "Dynamic styling by using props"],
    Theme: ["ThemeProvider allows overridden stlyes to be applied to specific sections", "We can create themes and export them anywhere within the provider", "Makes conditional rendering significantly easier", "Reusable" ],
    JSS: ["Not global styling", "Given unique ID to avoid naming collisions", "Pass props or conditions to give styling to that condition", "Makes conditional rendering significantly easier" ], 

    },

Cons:{
    SX: ["More code", "No custom class name on the DOM", "Can be considered 'inline' styling", "Not Abstract"],
    Components: ["Polluting the React DOM- this library adds many levels of nesting", "Debugging can get tedious", "Workarounds are required", "Unusual way to write styles"],
    Theme: [" Overriding them theme requires knowledge of theme override syntax", "More complicated to write", "Verbose"], 
    JSS: [""]
    }
}
];