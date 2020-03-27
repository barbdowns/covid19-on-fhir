Package.describe({
    name: 'symptomatic:covid19-on-fhir',
    version: '0.3.0',
    summary: 'COVID19 Hackathon',
    git: 'https://github.com/symptomatic/covid19-hackathon',
    documentation: 'README.md'
});
  

Package.onUse(function(api) {
    api.versionsFrom('1.4');
    
    api.use('meteor-base@1.4.0');
    api.use('ecmascript@0.13.0');
    api.use('react-meteor-data@0.2.15');
    api.use('session');
    api.use('mongo');
    api.use('http');
    api.use('fourseven:scss');

    api.use('browser-policy@1.1.0')

    api.use('clinical:hl7-fhir-data-infrastructure@6.2.0')

    api.addFiles('lib/TestingMethods.js');
    api.addFiles('server/ProxyMethods.js', 'server');
    api.addFiles('server/BrowserPolicies.js', 'server');

    api.addFiles('geodata/illinois-epa-toxic-inventory-sites.geojson', 'client', {isAsset: true});
    
    api.mainModule('index.jsx', 'client');
});

Npm.depends({
    "google-map-react":"1.0.1"
  });