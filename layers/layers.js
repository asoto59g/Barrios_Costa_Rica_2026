var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_LneadeCosta125mil_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "RE_120104",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Línea de Costa 1:25mil',
                            popuplayertitle: 'Línea de Costa 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LneadeCosta125mil_1, 0]);
var lyr_AccidentesCosterosyMarinos125mil_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "accidentescosterosmarinos_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Accidentes Costeros y Marinos 1:25mil',
                            popuplayertitle: 'Accidentes Costeros y Marinos 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AccidentesCosterosyMarinos125mil_2, 0]);
var lyr_CauceyDrenaje125mil_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "caucedrenaje_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Cauce y Drenaje 1:25mil',
                            popuplayertitle: 'Cauce y Drenaje 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CauceyDrenaje125mil_3, 0]);
var lyr_Contorno125mil_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "contorno_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Contorno 1:25mil',
                            popuplayertitle: 'Contorno 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Contorno125mil_4, 0]);
var lyr_Edificaciones125mil_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ec140101_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Edificaciones 1:25mil',
                            popuplayertitle: 'Edificaciones 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Edificaciones125mil_5, 0]);
var lyr_InfraestructuraFerroviaria125mil_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "infraestructuraferroviaria_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Infraestructura Ferroviaria 1:25mil',
                            popuplayertitle: 'Infraestructura Ferroviaria 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_InfraestructuraFerroviaria125mil_6, 0]);
var lyr_InfraestructuraVial2_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "infraestructuravial2_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Infraestructura Vial 2',
                            popuplayertitle: 'Infraestructura Vial 2',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_InfraestructuraVial2_7, 0]);
var lyr_InfraestructuraVial1_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "infraestructuravial_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Infraestructura Vial 1',
                            popuplayertitle: 'Infraestructura Vial 1',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_InfraestructuraVial1_8, 0]);
var lyr_Muelle125mil_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "muelle_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Muelle 1:25mil',
                            popuplayertitle: 'Muelle 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Muelle125mil_9, 0]);
var lyr_ObrasPblicasyOtrasFacilidadesI125mil_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "obraspublicas1_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Obras Públicas y Otras Facilidades I 1:25mil',
                            popuplayertitle: 'Obras Públicas y Otras Facilidades I 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ObrasPblicasyOtrasFacilidadesI125mil_10, 0]);
var lyr_ObrasPblicasyOtrasFacilidadesII125mil_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "obraspublicas2_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Obras Públicas y Otras Facilidades II 1:25mil',
                            popuplayertitle: 'Obras Públicas y Otras Facilidades II 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ObrasPblicasyOtrasFacilidadesII125mil_11, 0]);
var lyr_ObrasPblicasyOtrasFacilidadesIII125mil_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "obraspublicas3_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Obras Públicas y Otras Facilidades III 1:25mil',
                            popuplayertitle: 'Obras Públicas y Otras Facilidades III 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ObrasPblicasyOtrasFacilidadesIII125mil_12, 0]);
var lyr_OtrosCuerposdeAguaII125mil_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "otroscuerposdeagua2_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Otros Cuerpos de Agua II 1:25mil',
                            popuplayertitle: 'Otros Cuerpos de Agua II 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OtrosCuerposdeAguaII125mil_13, 0]);
var lyr_PistadeAterrizaje125mil_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "pistadeaterrizaje_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Pista de Aterrizaje 1:25mil',
                            popuplayertitle: 'Pista de Aterrizaje 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PistadeAterrizaje125mil_14, 0]);
var lyr_TransporteFerroviario125mil_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "transporteferroviario_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Transporte Ferroviario 1:25mil',
                            popuplayertitle: 'Transporte Ferroviario 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TransporteFerroviario125mil_15, 0]);
var lyr_TransporteTerrestre125mil_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_25/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "transporteterrestre_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Transporte Terrestre 1:25mil',
                            popuplayertitle: 'Transporte Terrestre 1:25mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TransporteTerrestre125mil_16, 0]);
var lyr_Hidrografa15mil_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_5/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "hidrografia_5000",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Hidrografía 1:5mil',
                            popuplayertitle: 'Hidrografía 1:5mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Hidrografa15mil_17, 0]);
var lyr_LneadeCosta15mil_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_5/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "linea_costa_5000",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Línea de Costa 1:5mil',
                            popuplayertitle: 'Línea de Costa 1:5mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LneadeCosta15mil_18, 0]);
var lyr_Delimitacinterritorial201715mil_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_5/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "delimitacion2017_5k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Delimitación territorial 2017 1:5mil',
                            popuplayertitle: 'Delimitación territorial 2017 1:5mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Delimitacinterritorial201715mil_19, 0]);
var lyr_LneadeCosta15mil_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geos.snitcr.go.cr/be/IGN_5/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "linea_costa_5000",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Línea de Costa 1:5mil',
                            popuplayertitle: 'Línea de Costa 1:5mil',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LneadeCosta15mil_20, 0]);
var jsonSource_barrios_con_division_21 = new ol.source.Vector({
    attributions: ' ',
    url: 'layers/barrios_con_division.geojson',
    format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
    })
});
var lyr_barrios_con_division_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barrios_con_division_21, 
                style: style_barrios_con_division_21,
                popuplayertitle: 'barrios_con_division',
                interactive: true,
                title: '<img src="styles/legend/barrios_con_division_21.png" /> barrios_con_division'
            });
var group_MapaCatastral = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mapa Catastral'});
var group_Cartografia5k = new ol.layer.Group({
                                layers: [lyr_Hidrografa15mil_17,lyr_LneadeCosta15mil_18,lyr_Delimitacinterritorial201715mil_19,lyr_LneadeCosta15mil_20,],
                                fold: 'close',
                                title: 'Cartografia 5k'});
var group_Cartografia25k = new ol.layer.Group({
                                layers: [lyr_LneadeCosta125mil_1,lyr_AccidentesCosterosyMarinos125mil_2,lyr_CauceyDrenaje125mil_3,lyr_Contorno125mil_4,lyr_Edificaciones125mil_5,lyr_InfraestructuraFerroviaria125mil_6,lyr_InfraestructuraVial2_7,lyr_InfraestructuraVial1_8,lyr_Muelle125mil_9,lyr_ObrasPblicasyOtrasFacilidadesI125mil_10,lyr_ObrasPblicasyOtrasFacilidadesII125mil_11,lyr_ObrasPblicasyOtrasFacilidadesIII125mil_12,lyr_OtrosCuerposdeAguaII125mil_13,lyr_PistadeAterrizaje125mil_14,lyr_TransporteFerroviario125mil_15,lyr_TransporteTerrestre125mil_16,],
                                fold: 'close',
                                title: 'Cartografia 25k'});
var group_Mosaicosdehojas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mosaicos de hojas'});
var group_Ortofotos = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ortofotos'});

lyr_googlesatellitehybrid_0.setVisible(false);lyr_LneadeCosta125mil_1.setVisible(true);lyr_AccidentesCosterosyMarinos125mil_2.setVisible(true);lyr_CauceyDrenaje125mil_3.setVisible(true);lyr_Contorno125mil_4.setVisible(true);lyr_Edificaciones125mil_5.setVisible(true);lyr_InfraestructuraFerroviaria125mil_6.setVisible(true);lyr_InfraestructuraVial2_7.setVisible(true);lyr_InfraestructuraVial1_8.setVisible(true);lyr_Muelle125mil_9.setVisible(true);lyr_ObrasPblicasyOtrasFacilidadesI125mil_10.setVisible(true);lyr_ObrasPblicasyOtrasFacilidadesII125mil_11.setVisible(true);lyr_ObrasPblicasyOtrasFacilidadesIII125mil_12.setVisible(true);lyr_OtrosCuerposdeAguaII125mil_13.setVisible(true);lyr_PistadeAterrizaje125mil_14.setVisible(true);lyr_TransporteFerroviario125mil_15.setVisible(true);lyr_TransporteTerrestre125mil_16.setVisible(true);lyr_Hidrografa15mil_17.setVisible(true);lyr_LneadeCosta15mil_18.setVisible(true);lyr_Delimitacinterritorial201715mil_19.setVisible(true);lyr_LneadeCosta15mil_20.setVisible(true);lyr_barrios_con_division_21.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,group_Cartografia25k,group_Cartografia5k,lyr_barrios_con_division_21];
lyr_barrios_con_division_21.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'all_tags': 'all_tags', 'Provincia': 'Provincia', 'Canton': 'Canton', 'Distrito': 'Distrito', 'x': 'x', 'y': 'y', });
lyr_barrios_con_division_21.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'all_tags': 'KeyValue', 'Provincia': 'TextEdit', 'Canton': 'TextEdit', 'Distrito': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_barrios_con_division_21.set('fieldLabels', {'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'name': 'inline label - always visible', 'all_tags': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Canton': 'inline label - always visible', 'Distrito': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_barrios_con_division_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
