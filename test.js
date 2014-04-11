function keys(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){  
		result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}

function test(key) {
  console.log(key);
  return "hello";
}

function create() {
  var svgContainer = 
    d3.select("body")
    .append("svg")
    .attr("width", 559)
    .attr("height",528);

  var map = 
    svgContainer.append("image")
    .attr("width", 559)
    .attr("height",528)
    .attr("xlink:href", "map.png");

  var text = svgContainer.append("p");


    //<image width="559" height="528"  style="position: absolute;"></image>
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var val = data[key];
      x = val['coordX'];
      y = val['coordY'];
      console.log(x);

      oldSize = val["class size 2012-2013"];
      newSize = val["class size 2013-2014"];
     
      if (oldSize < newSize) {
        svgContainer.append("circle")
        .attr("id", key+1)
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", newSize)
        .attr("fill-opacity", 0.7)
        .style("fill", "red");
  
        svgContainer.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", oldSize)
        .attr("fill-opacity", 0.8)
        .attr("name", key)
        .attr("onmouseover", "document.getElementById(\"keyname\").textContent = this.attributes['name'].textContent")
        .style("fill", "beige")
        .append("svg:title").text("hello");

      } else {
        svgContainer.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", oldSize)
        .attr("fill-opacity", 0.8)
        .style("fill", "green");

        svgContainer.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", newSize)
        .attr("fill-opacity", 0.8)
        .attr("name", key)
        .attr("onmouseover", "document.getElementById(\"keyname\").textContent = this.attributes['name'].textContent")
        .style("fill", "beige");
      }

            
      
    }
  }

}

var data = 

{"CLEVELAND ELEMENTARY SCHOOL": {"lat": 37.8039239, "class size 2012-2013": "24.87", "lng": -122.2439064, "class size 2013-2014": "27.47", "coordY": 207.67390633616122, "coordX": 175.98745245559016}, "PERALTA ELEMENTARY SCHOOL": {"lat": 37.849687, "class size 2012-2013": "27.6", "lng": -122.258845, "class size 2013-2014": "27.55", "coordY": 39.005591349800454, "coordX": 132.35799895508643}, "BURCKHALTER ELEMENTARY SCHOOL": {"lat": 37.7757739, "class size 2012-2013": "24.12", "lng": -122.1665858, "class size 2013-2014": "25.19", "coordY": 311.4259044933329, "coordX": 401.80884952980165}, "GLOBAL FAMILY SCHOOL": {"lat": 37.7795876, "class size 2012-2013": "23.69", "lng": -122.2132268, "class size 2013-2014": "23.07", "coordY": 297.3698122953874, "coordX": 265.58983699059286}, "ACORN WOODLAND ELEMENTARY SCHOOL": {"lat": 37.7528862, "class size 2012-2013": "19.04", "lng": -122.1869131, "class size 2013-2014": "22.97", "coordY": 395.78272894169555, "coordX": 342.44123876698586}, "BELLA VISTA ELEMENTARY SCHOOL": {"lat": 37.800184, "class size 2012-2013": "25.51", "lng": -122.2373489, "class size 2013-2014": "26.06", "coordY": 221.45799507178782, "coordX": 195.13918965517087}, "MANZANITA COMMUNITY SCHOOL": {"lat": 37.79172, "class size 2012-2013": "19.25", "lng": -122.224852, "class size 2013-2014": "19.42", "coordY": 252.6536225105998, "coordX": 231.63745036573096}, "FRUITVALE ELEMENTARY SCHOOL": {"lat": 37.7962748, "class size 2012-2013": "23.29", "lng": -122.2138705, "class size 2013-2014": "20.71", "coordY": 235.8660700698774, "coordX": 263.70985632184306}, "SEQUOIA ELEMENTARY SCHOOL": {"lat": 37.8025078, "class size 2012-2013": "23.82", "lng": -122.2110795, "class size 2013-2014": "23.93", "coordY": 212.89320312445133, "coordX": 271.8612095088917}, "REDWOOD HEIGHTS ELEMENTARY SCHOOL": {"lat": 37.7974594, "class size 2012-2013": "27.4", "lng": -122.1861713, "class size 2013-2014": "27.54", "coordY": 231.50000907459588, "coordX": 344.6077288401315}, "FUTURES ELEMENTARY SCHOOL": {"lat": 37.7611287, "class size 2012-2013": "23.32", "lng": -122.1920065, "class size 2013-2014": "21.28", "coordY": 365.4034804581954, "coordX": 327.5655303030158}, "GLENVIEW ELEMENTARY SCHOOL": {"lat": 37.805891, "class size 2012-2013": "28.12", "lng": -122.219759, "class size 2013-2014": "28.2", "coordY": 200.42379778997585, "coordX": 246.51199059562254}, "CROCKER HIGHLANDS ELEMENTARY SCHOOL": {"lat": 37.811037, "class size 2012-2013": "22.74", "lng": -122.2272755, "class size 2013-2014": "24.08", "coordY": 181.4572691037821, "coordX": 224.55941222569214}, "THORNHILL ELEMENTARY SCHOOL": {"lat": 37.8361686, "class size 2012-2013": "26.22", "lng": -122.2115974, "class size 2013-2014": "25.51", "coordY": 88.83013884138029, "coordX": 270.34863845349423}, "GREENLEAF ELEMENTARY SCHOOL": {"lat": 37.7641761, "class size 2012-2013": "22.23", "lng": -122.1947286, "class size 2013-2014": "23.23", "coordY": 354.17172773407094, "coordX": 319.6154054336331}, "HILLCREST ELEMENTARY SCHOOL": {"lat": 37.8404373, "class size 2012-2013": "23.21", "lng": -122.2324035, "class size 2013-2014": "22.8", "coordY": 73.0970605275908, "coordX": 209.58265151514087}, "RISE COMMUNITY SCHOOL": {"lat": 37.75163730000001, "class size 2012-2013": "25.07", "lng": -122.1797196, "class size 2013-2014": "24.91", "coordY": 400.38577940340156, "coordX": 363.4504681295762}, "JOAQUIN MILLER ELEMENTARY SCHOOL": {"lat": 37.8188008, "class size 2012-2013": "26.61", "lng": -122.2015136, "class size 2013-2014": "26.31", "coordY": 152.84235744152727, "coordX": 299.7992351097229}, "ESPERANZA": {"lat": 37.7375034, "class size 2012-2013": "19.72", "lng": -122.1735198, "class size 2013-2014": "22.77", "coordY": 452.4788652561425, "coordX": 381.5575120167368}, "BRIDGES ACADEMY": {"lat": 37.7674704, "class size 2012-2013": "18.88", "lng": -122.2069466, "class size 2013-2014": "19.09", "coordY": 342.02997968685395, "coordX": 283.9316959247802}, "LA ESCUELITA ELEMENTARY SCHOOL": {"lat": 37.7962861, "class size 2012-2013": "20.19", "lng": -122.258668, "class size 2013-2014": "23.6", "coordY": 235.82442184324836, "coordX": 132.8749425287356}, "MANZANITA SEED": {"lat": 37.79172, "class size 2012-2013": "19.25", "lng": -122.224852, "class size 2013-2014": "19.42", "coordY": 252.6536225105998, "coordX": 231.63745036573096}, "HOOVER ELEMENTARY SCHOOL": {"lat": 37.823272, "class size 2012-2013": "25.86", "lng": -122.27426, "class size 2013-2014": "25.25", "coordY": 136.36292816405762, "coordX": 87.33717868339123}, "LAUREL ELEMENTARY SCHOOL": {"lat": 37.7929054, "class size 2012-2013": "23.05", "lng": -122.1964101, "class size 2013-2014": "24.82", "coordY": 248.28461296829312, "coordX": 314.7044414838207}, "LAFAYETTE ELEMENTARY SCHOOL": {"lat": 37.810223, "class size 2012-2013": "25.11", "lng": -122.2794106, "class size 2013-2014": "23.82", "coordY": 184.45741569347135, "coordX": 72.29441274815527}, "LINCOLN ELEMENTARY SCHOOL": {"lat": 37.7999805, "class size 2012-2013": "24.06", "lng": -122.2671588, "class size 2013-2014": "25.61", "coordY": 222.20803171922975, "coordX": 108.07683803551559}, "GARFIELD ELEMENTARY SCHOOL": {"lat": 37.7867291, "class size 2012-2013": "19.93", "lng": -122.235829, "class size 2013-2014": "21.44", "coordY": 271.0485016438898, "coordX": 199.57818704285597}, "CHABOT ELEMENTARY SCHOOL": {"lat": 37.8505437, "class size 2012-2013": "24.59", "lng": -122.2409115, "class size 2013-2014": "25.32", "coordY": 35.848066063078235, "coordX": 184.73431295717057}, "SANKOFA ACADEMY": {"lat": 37.84717759999999, "class size 2012-2013": "22.38", "lng": -122.2644698, "class size 2013-2014": "24.27", "coordY": 48.25444620511662, "coordX": 115.93029153604891}, "PARKER ELEMENTARY SCHOOL": {"lat": 37.7654645, "class size 2012-2013": "18.67", "lng": -122.1655563, "class size 2013-2014": "18", "coordY": 349.4230927633541, "coordX": 404.8155919540065}, "REACH ACADEMY": {"lat": 37.7463428, "class size 2012-2013": "23.74", "lng": -122.1615707, "class size 2013-2014": "24.93", "coordY": 419.8996321296658, "coordX": 416.455876175553}, "MELROSE LEADERSHIP ACADEMY": {"lat": 37.780226, "class size 2012-2013": "23.22", "lng": -122.1976, "class size 2013-2014": "21.03", "coordY": 295.01687177590253, "coordX": 311.22923719959925}, "ALLENDALE ELEMENTARY SCHOOL": {"lat": 37.7885972, "class size 2012-2013": "24.82", "lng": -122.204787, "class size 2013-2014": "26.48", "coordY": 264.1632757910673, "coordX": 290.23899164055524}, "MONTCLAIR ELEMENTARY": {"lat": 37.8309947, "class size 2012-2013": "25.32", "lng": -122.2130084, "class size 2013-2014": "25.1", "coordY": 107.89949810481163, "coordX": 266.22769278994923}, "PIEDMONT AVENUE ELEMENTARY SCHOOL": {"lat": 37.8287814, "class size 2012-2013": "25.6", "lng": -122.2486803, "class size 2013-2014": "27.68", "coordY": 116.05702199544574, "coordX": 162.0448709508776}, "HORACE MANN ELEMENTARY SCHOOL": {"lat": 37.7736394, "class size 2012-2013": "20.47", "lng": -122.2023331, "class size 2013-2014": "19.63", "coordY": 319.29299650278665, "coordX": 297.4058155694762}, "NEW HIGHLAND ACADEMY": {"lat": 37.75163730000001, "class size 2012-2013": "19.27", "lng": -122.1797196, "class size 2013-2014": "20.21", "coordY": 400.38577940340156, "coordX": 363.4504681295762}, "KAISER ELEMENTARY SCHOOL": {"lat": 37.8534934, "class size 2012-2013": "23.23", "lng": -122.2319551, "class size 2013-2014": "23.26", "coordY": 24.976404643410557, "coordX": 210.89224190179624}, "ENCOMPASS ACADEMY": {"lat": 37.7528862, "class size 2012-2013": "26.79", "lng": -122.1869131, "class size 2013-2014": "26.13", "coordY": 395.78272894169555, "coordX": 342.44123876698586}, "CARL B. MUNCK ELEMENTARY SCHOOL": {"lat": 37.79522, "class size 2012-2013": "26.81", "lng": -122.174062, "class size 2013-2014": "25.17", "coordY": 239.7537293116544, "coordX": 379.9739707418835}, "GRASS VALLEY ELEMENTARY SCHOOL": {"lat": 37.7531662, "class size 2012-2013": "21.05", "lng": -122.124953, "class size 2013-2014": "28.19", "coordY": 394.7507374857674, "coordX": 523.4009874608009}, "FRANKLIN ELEMENTARY SCHOOL": {"lat": 37.793433, "class size 2012-2013": "23.29", "lng": -122.248715, "class size 2013-2014": "21.56", "coordY": 246.34004621065486, "coordX": 161.94352664575595}, "MARKHAM ELEMENTARY SCHOOL": {"lat": 37.7653407, "class size 2012-2013": "18.17", "lng": -122.1785765, "class size 2013-2014": "22.05", "coordY": 349.8793804142091, "coordX": 366.78898902819753}, "HOWARD ELEMENTARY SCHOOL": {"lat": 37.7629948, "class size 2012-2013": "29.01", "lng": -122.1516636, "class size 2013-2014": "25.99", "coordY": 358.52562597289653, "coordX": 445.390405433629}, "BROOKFIELD ELEMENTARY SCHOOL": {"lat": 37.7339079, "class size 2012-2013": "18.46", "lng": -122.1891046, "class size 2013-2014": "21.37", "coordY": 465.73074125523203, "coordX": 336.0407763845553}, "EMERSON ELEMENTARY SCHOOL": {"lat": 37.8343895, "class size 2012-2013": "23.89", "lng": -122.2573072, "class size 2013-2014": "25.54", "coordY": 95.38733883858905, "coordX": 136.8492748171383}}


