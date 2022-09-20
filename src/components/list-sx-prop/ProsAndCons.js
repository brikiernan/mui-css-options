function SXProsAndCons() {
  return (
    <div>
      <h3>Pro's:</h3>
      <ul>
        <li>Can specify any valid CSS using this prop</li>
        <li>Reusable</li>
        <li>Use for "one-time" styling</li>
        <li>No boilerplate code (requires less code)</li>
        <li>Reusable</li>
      </ul>
      <h3>Con's:</h3>
      <ul>
        <li>More code</li>
        <li>No custom class name on the DOM</li>
        <li>Can be considered "inline" styling </li>
        <li>Not abstract</li>
      </ul>
    </div>
  );
}

export default SXProsAndCons;
//div is a box component
//h3 should be a typography component- on this I would make it an h3
//UL is going to be a list compoentn
//LI is going to be a list item
