const calculateSlope = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);

const isSlopePositive = (slope) => slope > 0;

const isSlopeLessThanOne = (slope) => Math.abs(slope) < 1;

const isXDecreasing = (delX) => delX < 0;

const isYDecreasing = (delY) => delY < 0;


function handlePositiveSlopeLessThanOne(x1, y1, x2, y2) {
  let table = createTable();
  const delY = y2 - y1;
  const delX = x2 - x1;

  let decisionParameter = 2 * delY - delX;
  let decisionParameterFormula = `2*${delY} - ${delX}`
  let nextX = x1;
  let nextY = y1;

  while (nextX !== x2 || nextY !== y2) {
    let tr = document.createElement("tr");
    tr.appendChild(createTableData(`${decisionParameterFormula} = ${decisionParameter}`));

    if (decisionParameter >= 0) {
      nextY = isXDecreasing(delX) ? nextY - 1 : nextY + 1;
      decisionParameterFormula = `${decisionParameter} + 2 * ${delY} - 2 * ${delX}`;
      decisionParameter = decisionParameter + 2 * delY - 2 * delX;
      
    } else {
        decisionParameterFormula = `${decisionParameter} + 2 * ${delY}`;
      decisionParameter = decisionParameter + 2 * delY;
      
    }
    nextX = isXDecreasing(delX) ? nextX - 1 : nextX + 1;
    tr.appendChild(createTableData(nextX));
    tr.appendChild(createTableData(nextY));
    table.appendChild(tr);
  }
  showResult(table);
}


function handlePositiveSlopeGreaterThanOne(x1, y1, x2, y2) {
    let table = createTable();
    const delY = y2 - y1;
    const delX = x2 - x1;
  
    let decisionParameter = 2 * delX - delY;
    let decisionParameterFormula = `2*${delX} - ${delY}`
    let nextX = x1;
    let nextY = y1;
  
    while (nextX !== x2 || nextY !== y2) {
      let tr = document.createElement("tr");
      tr.appendChild(createTableData(`${decisionParameterFormula} = ${decisionParameter}`));
  
      if (decisionParameter >= 0) {
        nextX = isYDecreasing(delY) ? nextX - 1 : nextX + 1;
        decisionParameterFormula = `${decisionParameter} + 2 * ${delX} - 2 * ${delY}`;
        decisionParameter = decisionParameter + 2 * delX - 2 * delY;
        
      } else {
          decisionParameterFormula = `${decisionParameter} + 2 * ${delX}`;
        decisionParameter = decisionParameter + 2 * delX;
        
      }
      nextY = isXDecreasing(delY) ? nextY - 1 : nextY + 1;
      tr.appendChild(createTableData(nextX));
      tr.appendChild(createTableData(nextY));
      table.appendChild(tr);
    }
    showResult(table);
  }
  

  function handleNegativeSlopeLessThanOne(x1, y1, x2, y2){
    let table = createTable();
  const delY = y2 - y1;
  const delX = x2 - x1;

  let decisionParameter = - 2 * delY + delX;
  let decisionParameterFormula = `- 2*${delY} + ${delX}`
  let nextX = x1;
  let nextY = y1;

  while (nextX !== x2 || nextY !== y2) {
    let tr = document.createElement("tr");
    tr.appendChild(createTableData(`${decisionParameterFormula} = ${decisionParameter}`));

    if (decisionParameter >= 0) {
      nextY = isXDecreasing(delX) ? nextY + 1 : nextY - 1;
      decisionParameterFormula = `${decisionParameter} - 2 * ${delY} + 2 * ${delX}`;
      decisionParameter = decisionParameter - 2 * delY + 2 * delX;
      
    } else {
        decisionParameterFormula = `${decisionParameter} - 2 * ${delY}`;
      decisionParameter = decisionParameter - 2 * delY;
      
    }
    nextX = isXDecreasing(delX) ? nextX - 1 : nextX + 1;
    tr.appendChild(createTableData(nextX));
    tr.appendChild(createTableData(nextY));
    table.appendChild(tr);
  }
  showResult(table);
  }

  function handleNegativeSlopeGreaterThanOne(x1, y1, x2, y2) {
    let table = createTable();
    const delY = y2 - y1;
    const delX = x2 - x1;
  
    let decisionParameter = -2 * delX + delY;
    let decisionParameterFormula = `-2*${delX} + ${delY}`
    let nextX = x1;
    let nextY = y1;
  
    while (nextX !== x2 || nextY !== y2) {
      let tr = document.createElement("tr");
      tr.appendChild(createTableData(`${decisionParameterFormula} = ${decisionParameter}`));
  
      if (decisionParameter >= 0) {
        nextX = isYDecreasing(delY) ? nextX + 1 : nextX - 1;
        decisionParameterFormula = `${decisionParameter} - 2 * ${delX} + 2 * ${delY}`;
        decisionParameter = decisionParameter + 2 * delX - 2 * delY;
        
      } else {
          decisionParameterFormula = `${decisionParameter} - 2 * ${delX}`;
        decisionParameter = decisionParameter - 2 * delX;
        
      }
      nextY = isXDecreasing(delY) ? nextY - 1 : nextY + 1;
      tr.appendChild(createTableData(nextX));
      tr.appendChild(createTableData(nextY));
      table.appendChild(tr);
    }
    showResult(table);
  }
  

function handleButtonClick() {
  const x1 = parseInt(document.getElementById("x1").value);
  const y1 = parseInt(document.getElementById("y1").value);
  const x2 = parseInt(document.getElementById("x2").value);
  const y2 = parseInt(document.getElementById("y2").value);

  const slope = calculateSlope(x1, y1, x2, y2);

  document.getElementById('info').innerHTML = `<p> slope = ${slope}</p>`;

  if (isSlopePositive(slope) && isSlopeLessThanOne(slope)) {
    handlePositiveSlopeLessThanOne(x1, y1, x2, y2);
  }else if(isSlopePositive(slope) && !isSlopeLessThanOne(slope)){
      handlePositiveSlopeGreaterThanOne(x1, y1, x2, y2);
  }else if(!isSlopePositive(slope) && isSlopeLessThanOne(slope)){
      handleNegativeSlopeLessThanOne(x1, y1, x2, y2);
  }else if(!isSlopePositive(slope) && !isSlopeLessThanOne(slope)){
      handleNegativeSlopeGreaterThanOne(x1, y1, x2, y2);
  }
}

document.getElementById("btn").onclick = handleButtonClick;
