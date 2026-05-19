var size = 0;
var placement = 'point';

var style_barrios_con_division_21 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px 'Open Sans', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    // Compatibilidad de nombres de campo (qgis2web puede exportar como name/Name/NAME)
    var nombre = feature.get("name") || feature.get("Name") || feature.get("NAME");
    if (nombre !== null && nombre !== undefined) {
        labelText = String(nombre);
    }

    // Ubicar punto y etiqueta en el centro del polígono (interior point) o en la geometría original
    var geom = feature.getGeometry();
    var pointGeom = geom;
    if (geom) {
        var type = geom.getType();
        if (type === 'Polygon' || type === 'MultiPolygon') {
            pointGeom = geom.getInteriorPoint();
        }
    }

    var style = [ new ol.style.Style({
        geometry: pointGeom,
        image: new ol.style.Circle({radius: 3 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.6}), fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
