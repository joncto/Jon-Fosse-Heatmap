var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HeatMapAllLanguages_1 = new ol.format.GeoJSON();
var features_HeatMapAllLanguages_1 = format_HeatMapAllLanguages_1.readFeatures(json_HeatMapAllLanguages_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeatMapAllLanguages_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeatMapAllLanguages_1.addFeatures(features_HeatMapAllLanguages_1);
var lyr_HeatMapAllLanguages_1 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_HeatMapAllLanguages_1, 
                radius: 3 * 2,
                gradient: ['#ffee37', '#fb6a4a', '#c6001a'],
                blur: 15,
                shadow: 250,
                title: 'HeatMap - All Languages'
            });

lyr_OSMStandard_0.setVisible(true);lyr_HeatMapAllLanguages_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HeatMapAllLanguages_1];
