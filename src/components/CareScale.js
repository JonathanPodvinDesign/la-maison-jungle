function CareScale(props) {
  const scaleValue = props.scaleValue;
  const range = [1, 2, 3];

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.tostring}>☀️</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
