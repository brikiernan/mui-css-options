function JSSProsAndCons() {
  return (
    <div>
      <h3>Pro's:</h3>
      <ul>
        <li>
          Abstract all styling components and package them into a new component
        </li>
        <li>Reusable </li>
        <li>Pure CSS, no different syntax</li>
        <li>Dynamic styling by using props</li>
      </ul>
      <h3>Con's:</h3>
      <ul>
        <li>
          Polluting the React DOM- this library adds any levels of nesting{' '}
        </li>
        <li>Debugging can get tedious </li>
        <li>Workarounds are required </li>
        <li>Unusual way to write styles</li>
      </ul>
    </div>
  );
}

export default JSSProsAndCons;
