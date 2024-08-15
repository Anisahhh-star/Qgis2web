var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_adm_cimahi2008_1 = new ol.format.GeoJSON();
var features_adm_cimahi2008_1 = format_adm_cimahi2008_1.readFeatures(json_adm_cimahi2008_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_cimahi2008_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_cimahi2008_1.addFeatures(features_adm_cimahi2008_1);
var lyr_adm_cimahi2008_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_cimahi2008_1, 
                style: style_adm_cimahi2008_1,
                popuplayertitle: "adm_cimahi2008",
                interactive: true,
                title: '<img src="styles/legend/adm_cimahi2008_1.png" /> adm_cimahi2008'
            });
var format_PetaVektorBaros_2 = new ol.format.GeoJSON();
var features_PetaVektorBaros_2 = format_PetaVektorBaros_2.readFeatures(json_PetaVektorBaros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaVektorBaros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaVektorBaros_2.addFeatures(features_PetaVektorBaros_2);
var lyr_PetaVektorBaros_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaVektorBaros_2, 
                style: style_PetaVektorBaros_2,
                popuplayertitle: "Peta Vektor Baros",
                interactive: true,
                title: '<img src="styles/legend/PetaVektorBaros_2.png" /> Peta Vektor Baros'
            });
var format_Buffering200m_3 = new ol.format.GeoJSON();
var features_Buffering200m_3 = format_Buffering200m_3.readFeatures(json_Buffering200m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffering200m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffering200m_3.addFeatures(features_Buffering200m_3);
var lyr_Buffering200m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffering200m_3, 
                style: style_Buffering200m_3,
                popuplayertitle: "Buffering 200m",
                interactive: true,
                title: '<img src="styles/legend/Buffering200m_3.png" /> Buffering 200m'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_adm_cimahi2008_1.setVisible(true);lyr_PetaVektorBaros_2.setVisible(true);lyr_Buffering200m_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_adm_cimahi2008_1,lyr_PetaVektorBaros_2,lyr_Buffering200m_3];
lyr_adm_cimahi2008_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_PetaVektorBaros_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffering200m_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_adm_cimahi2008_1.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'CIMAHI_ADM': '', 'CIMAHI_A_1': '', 'KECAMATAN': '', 'KELURAHAN': '', 'RW': '', 'RT': '', });
lyr_PetaVektorBaros_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffering200m_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_adm_cimahi2008_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_PetaVektorBaros_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffering200m_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffering200m_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});