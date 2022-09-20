function JSSProsAndCons() {
  return (
    <div>
      <h3>Pro's:</h3>
      <ul>
        <li>Not global styling</li>
        <li>Given unique ID to avoid naming collisions</li>
        <li>Pass props or conditions to give styling to that condition</li>
        <li>Makes conditional rendering significantly easier</li>
      </ul>
      <h3>Con's:</h3>
      <ul>
        <li>More complicated to write</li>
        <li>Not the recommended version</li>
        <li>Verbose </li>
      </ul>
    </div>
  );
}

export default JSSProsAndCons;
