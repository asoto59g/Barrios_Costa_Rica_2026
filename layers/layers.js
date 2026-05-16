var wms_layers = [];


        var lyr_DarkMatternolabels_0 = new ol.layer.Tile({
            'title': 'Dark Matter [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googlesatellitehybrid_2 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positronretina_3 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_barrios_match_multipass_4 = new ol.format.GeoJSON();
var features_barrios_match_multipass_4 = format_barrios_match_multipass_4.readFeatures(json_barrios_match_multipass_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrios_match_multipass_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrios_match_multipass_4.addFeatures(features_barrios_match_multipass_4);
var lyr_barrios_match_multipass_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barrios_match_multipass_4, 
                style: style_barrios_match_multipass_4,
                popuplayertitle: 'barrios_match_multipass',
                interactive: true,
                title: '<img src="styles/legend/barrios_match_multipass_4.png" /> barrios_match_multipass'
            });

lyr_DarkMatternolabels_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_googlesatellitehybrid_2.setVisible(true);lyr_Positronretina_3.setVisible(true);lyr_barrios_match_multipass_4.setVisible(true);
var layersList = [lyr_DarkMatternolabels_0,lyr_OSMStandard_1,lyr_googlesatellitehybrid_2,lyr_Positronretina_3,lyr_barrios_match_multipass_4];
lyr_barrios_match_multipass_4.set('fieldAliases', {'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'barrio': 'barrio', 'place': 'place', 'lat': 'lat', 'lon': 'lon', 'match_id': 'match_id', 'barrio_final': 'barrio_final', 'match_place': 'match_place', 'match_dist': 'match_dist', 'match_pass': 'match_pass', });
lyr_barrios_match_multipass_4.set('fieldImages', {'provincia': 'TextEdit', 'canton': 'TextEdit', 'distrito': 'TextEdit', 'barrio': 'TextEdit', 'place': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'match_id': 'Range', 'barrio_final': 'TextEdit', 'match_place': 'TextEdit', 'match_dist': 'TextEdit', 'match_pass': 'TextEdit', });
lyr_barrios_match_multipass_4.set('fieldLabels', {'provincia': 'inline label - always visible', 'canton': 'inline label - always visible', 'distrito': 'inline label - always visible', 'barrio': 'inline label - always visible', 'place': 'inline label - always visible', 'lat': 'inline label - always visible', 'lon': 'inline label - always visible', 'match_id': 'inline label - always visible', 'barrio_final': 'inline label - always visible', 'match_place': 'inline label - always visible', 'match_dist': 'inline label - always visible', 'match_pass': 'inline label - always visible', });
lyr_barrios_match_multipass_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});