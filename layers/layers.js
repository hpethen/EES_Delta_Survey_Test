var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_EgyptianGovernorates_1 = new ol.format.GeoJSON();
var features_EgyptianGovernorates_1 = format_EgyptianGovernorates_1.readFeatures(json_EgyptianGovernorates_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EgyptianGovernorates_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EgyptianGovernorates_1.addFeatures(features_EgyptianGovernorates_1);
var lyr_EgyptianGovernorates_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EgyptianGovernorates_1, 
                style: style_EgyptianGovernorates_1,
                popuplayertitle: "Egyptian Governorates",
                interactive: true,
                    title: '<img src="styles/legend/EgyptianGovernorates_1.png" /> Egyptian Governorates'
                });
var format_EESDeltaSurveySites_2 = new ol.format.GeoJSON();
var features_EESDeltaSurveySites_2 = format_EESDeltaSurveySites_2.readFeatures(json_EESDeltaSurveySites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EESDeltaSurveySites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EESDeltaSurveySites_2.addFeatures(features_EESDeltaSurveySites_2);
var lyr_EESDeltaSurveySites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EESDeltaSurveySites_2, 
                style: style_EESDeltaSurveySites_2,
                popuplayertitle: "EES Delta Survey Sites",
                interactive: true,
                    title: '<img src="styles/legend/EESDeltaSurveySites_2.png" /> EES Delta Survey Sites'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_EgyptianGovernorates_1.setVisible(true);lyr_EESDeltaSurveySites_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_EgyptianGovernorates_1,lyr_EESDeltaSurveySites_2];
lyr_EgyptianGovernorates_1.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'adm1_code': 'adm1_code', 'diss_me': 'diss_me', 'iso_3166_2': 'iso_3166_2', 'wikipedia': 'wikipedia', 'iso_a2': 'iso_a2', 'adm0_sr': 'adm0_sr', 'name': 'name', 'name_alt': 'name_alt', 'name_local': 'name_local', 'type': 'type', 'type_en': 'type_en', 'code_local': 'code_local', 'code_hasc': 'code_hasc', 'note': 'note', 'hasc_maybe': 'hasc_maybe', 'region': 'region', 'region_cod': 'region_cod', 'provnum_ne': 'provnum_ne', 'gadm_level': 'gadm_level', 'check_me': 'check_me', 'datarank': 'datarank', 'abbrev': 'abbrev', 'postal': 'postal', 'area_sqkm': 'Area in square km', 'sameascity': 'sameascity', 'labelrank': 'labelrank', 'name_len': 'name_len', 'mapcolor9': 'mapcolor9', 'mapcolor13': 'mapcolor13', 'fips': 'fips', 'fips_alt': 'fips_alt', 'woe_id': 'woe_id', 'woe_label': 'woe_label', 'woe_name': 'woe_name', 'latitude': 'Latitude', 'longitude': 'Longitude', 'sov_a3': 'sov_a3', 'adm0_a3': 'adm0_a3', 'adm0_label': 'adm0_label', 'admin': 'admin', 'geonunit': 'geonunit', 'gu_a3': 'gu_a3', 'gn_id': 'gn_id', 'gn_name': 'Geonames name', 'gns_id': 'gns_id', 'gns_name': 'gns_name', 'gn_level': 'gn_level', 'gn_region': 'gn_region', 'gn_a1_code': 'gn_a1_code', 'region_sub': 'region_sub', 'sub_code': 'sub_code', 'gns_level': 'gns_level', 'gns_lang': 'gns_lang', 'gns_adm1': 'gns_adm1', 'gns_region': 'gns_region', 'min_label': 'min_label', 'max_label': 'max_label', 'min_zoom': 'min_zoom', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'ne_id': 'ne_id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'X': 'X', 'Y': 'Y', 'X_DecimalD': 'X in Decimal Degrees', 'Y_DecimalD': 'Y in Decimal Degrees', });
lyr_EESDeltaSurveySites_2.set('fieldAliases', {'Name': 'Site name', 'Arabic': 'Name in Arabic', 'Romanised': 'Romanised', 'Other_Name': 'Alternative names', 'EES_Number': 'EES Delta Survey Number', 'SCA_Regist': 'SCA Register Number', 'Descriptio': 'Description', 'Project_we': 'Project website', 'Further_re': 'Further reading', 'Appears_on': 'Appears on the following maps and satellite images', 'Additional': 'Additional reading', 'Image_Capt': 'Image caption', 'Image_path': 'Image_path', });
lyr_EgyptianGovernorates_1.set('fieldImages', {'featurecla': 'Hidden', 'scalerank': 'Hidden', 'adm1_code': 'Hidden', 'diss_me': 'Hidden', 'iso_3166_2': 'Hidden', 'wikipedia': 'Hidden', 'iso_a2': 'Hidden', 'adm0_sr': 'Hidden', 'name': 'TextEdit', 'name_alt': 'TextEdit', 'name_local': 'Hidden', 'type': 'Hidden', 'type_en': 'Hidden', 'code_local': 'Hidden', 'code_hasc': 'Hidden', 'note': 'Hidden', 'hasc_maybe': 'Hidden', 'region': 'Hidden', 'region_cod': 'Hidden', 'provnum_ne': 'Hidden', 'gadm_level': 'Hidden', 'check_me': 'Hidden', 'datarank': 'Hidden', 'abbrev': 'Hidden', 'postal': 'Hidden', 'area_sqkm': 'Range', 'sameascity': 'Hidden', 'labelrank': 'Hidden', 'name_len': 'Hidden', 'mapcolor9': 'Hidden', 'mapcolor13': 'Hidden', 'fips': 'Hidden', 'fips_alt': 'Hidden', 'woe_id': 'Hidden', 'woe_label': 'Hidden', 'woe_name': 'Hidden', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'sov_a3': 'Hidden', 'adm0_a3': 'Hidden', 'adm0_label': 'Hidden', 'admin': 'Hidden', 'geonunit': 'Hidden', 'gu_a3': 'Hidden', 'gn_id': 'Hidden', 'gn_name': 'TextEdit', 'gns_id': 'Hidden', 'gns_name': 'TextEdit', 'gn_level': 'Hidden', 'gn_region': 'Hidden', 'gn_a1_code': 'Hidden', 'region_sub': 'Hidden', 'sub_code': 'Hidden', 'gns_level': 'Hidden', 'gns_lang': 'Hidden', 'gns_adm1': 'Hidden', 'gns_region': 'Hidden', 'min_label': 'Hidden', 'max_label': 'Hidden', 'min_zoom': 'Hidden', 'wikidataid': 'Hidden', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'ne_id': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'X': 'TextEdit', 'Y': 'TextEdit', 'X_DecimalD': 'TextEdit', 'Y_DecimalD': 'TextEdit', });
lyr_EESDeltaSurveySites_2.set('fieldImages', {'Name': 'TextEdit', 'Arabic': 'TextEdit', 'Romanised': 'Hidden', 'Other_Name': 'TextEdit', 'EES_Number': 'Range', 'SCA_Regist': 'TextEdit', 'Descriptio': 'TextEdit', 'Project_we': 'TextEdit', 'Further_re': 'TextEdit', 'Appears_on': 'TextEdit', 'Additional': 'TextEdit', 'Image_Capt': 'TextEdit', 'Image_path': 'ExternalResource', });
lyr_EgyptianGovernorates_1.set('fieldLabels', {'name': 'inline label - always visible', 'name_alt': 'inline label - visible with data', 'area_sqkm': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'gn_name': 'inline label - visible with data', 'gns_name': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'X_DecimalD': 'inline label - visible with data', 'Y_DecimalD': 'inline label - visible with data', });
lyr_EESDeltaSurveySites_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Arabic': 'inline label - visible with data', 'Other_Name': 'inline label - visible with data', 'EES_Number': 'inline label - visible with data', 'SCA_Regist': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', 'Project_we': 'inline label - visible with data', 'Further_re': 'inline label - visible with data', 'Appears_on': 'inline label - visible with data', 'Additional': 'inline label - visible with data', 'Image_Capt': 'inline label - visible with data', 'Image_path': 'no label', });
lyr_EESDeltaSurveySites_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});