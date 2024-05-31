// Datos imaginarios
const data = [
    { category: 'Categoría 1', value: 25 },
    { category: 'Categoría 2', value: 15 },
    { category: 'Categoría 3', value: 35 },
    { category: 'Categoría 4', value: 20 },
  ];
  
  // Establecer las dimensiones del gráfico
  const width = 400;
  const height = 300;
  
  // Crear una escala lineal para el eje y
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height, 0]);
  
  // Crear una escala de bandas para el eje x
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.category))
    .range([0, width])
    .padding(0.1);
  
  // Crear el SVG
  const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  
  // Crear las barras
  svg.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.category))
    .attr('y', d => yScale(d.value))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d.value));
  
  // Crear el eje y
  svg.append('g')
    .call(d3.axisLeft(yScale));
  
  // Crear el eje x
  svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));