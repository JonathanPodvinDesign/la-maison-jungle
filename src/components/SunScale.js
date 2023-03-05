function CareScale(props) {
  const SunValue = props.SunValue;
  const SunRange = [1, 2, 3];

  return (
    <div>
      {SunRange.map((rangeElem) =>
        SunValue >= rangeElem ? <span key={rangeElem.tostring}>☀️</span> : null
      )}
    </div>
  );
}

export default CareScale;
