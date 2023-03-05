function WaterScale(props) {
  const WaterValue = props.WaterValue;
  const WaterRange = [1, 2, 3];

  return (
    <div>
      {WaterRange.map((rangeElem) =>
        WaterValue >= rangeElem ? (
          <span key={rangeElem.toString}>💧</span>
        ) : null
      )}
    </div>
  );
}

export default WaterScale;
