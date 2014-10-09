var tour = {
    transporter: {
        sides: ['joe/files/0000.jpg', 'joe/files/0001.jpg','joe/files/0002.jpg','joe/files/0003.jpg', 'joe/files/0005.jpg',  'joe/files/0006.jpg'],
        autorotate: 0.15,
        infobox: '<b>Compound </b><br>Where do you want to go?',
        touch: true,
        gyro: true,
         hotspots: [
        { type: 'nav', face: 0, x: 1280.0, y: 528.0, name:'Arisas Room', value: 'Room1' },
            
       ]
    },
    Room1: {
        infobox: '<b>Arisas Room</b> <br> Arisa Lives Here Call 070x xxx xxx to get in touch',
        sides: ['joe/files/2/0001.jpg', 'joe/files/2/0002.jpg', 'joe/files/2/0003.jpg', 'joe/files/2/0004.jpg', 'joe/files/2/0005.jpg', 'joe/files/2/0006.jpg' ],
        hotspots: [
            { type: 'nav', face: 2, x: 100, y: 400, name:'Go Out ', value: 'transporter' },
              ]
    },
    arcade: {
        infobox: '<b>Arcade</b><br>Somewhere in Japan',
        sides: ['example/19/0000.jpg', 'example/19/0001.jpg', 'example/19/0002.jpg', 'example/19/0003.jpg', 'example/19/0004.jpg', 'example/19/0005.jpg'],
        hotspots: [
            { type: 'nav', face: 0, x: 500, y: 500, name:'Beam Me Up', value: 'transporter' },
            { type: 'nav', face: 3, x: 250, y: 450, name:'Photo Studio', value: 'studio' },
        ]
    },
    studio: {
        infobox: '<b>Photo Studio</b>',
        sides: ['example/20/0000.jpg', 'example/20/0001.jpg', 'example/20/0002.jpg', 'example/20/0003.jpg', 'example/20/0004.jpg', 'example/20/0005.jpg'],
        hotspots: [
            { type: 'nav', face: 1, x: 1000, y: 500, name:'Beam Me Up', value: 'transporter' },
            { type: 'nav', face: 3, x: 350, y: 850, name:'Back to Arcade', value: 'arcade' },
        ]
    },
    archives: {
        infobox: '<b>The Archives</b><br>In the basement',
        sides: ['example/14/0000.jpg', 'example/14/0001.jpg', 'example/14/0002.jpg', 'example/14/0003.jpg', 'example/14/0004.jpg', 'example/14/0005.jpg'],
        hotspots: [
            { type: 'nav', face: 3, x: 400, y: 500, name:'Beam Me Up', value: 'transporter' },
            { type: 'link', face: 5, x: 0, y: 100, name:'You\'ve found the configuration script!', value: 'example/tour.js' },
        ]
    },
    hall: {
        infobox: '<b>Concert Hall</b>',
        sides: ['example/17/0000.jpg', 'example/17/0001.jpg', 'example/17/0002.jpg', 'example/17/0003.jpg', 'example/17/0004.jpg', 'example/17/0005.jpg'],
        hotspots: [
            { type: 'nav', face: 3, x: 400, y: 500, name:'Beam Me Up', value: 'transporter' },
            { type: 'nav', face: 3, x: 650, y: 600, name:'Exit to the Lounge', value: 'lounge' },
        ]
    },
    lounge: {
        infobox: '<b>Lounge</b>',
        sides: ['example/27/0000.jpg', 'example/27/0001.jpg', 'example/27/0002.jpg', 'example/27/0003.jpg', 'example/27/0004.jpg', 'example/27/0005.jpg'],
        hotspots: [
            { type: 'nav', face: 3, x: 400, y: 500, name:'Beam Me Up', value: 'transporter' },
            { type: 'nav', face: 0, x: 980, y: 500, name:'Back to the Concert Hall', value: 'hall' },

        ]
    },
    hut: {
        infobox: '<b>Japanese Hut</b><br>Please take off your shoes',
        sides: ['example/18/0000.jpg', 'example/18/0001.jpg', 'example/18/0002.jpg', 'example/18/0003.jpg', 'example/18/0004.jpg', 'example/18/0005.jpg'],
        hotspots: [
            { type: 'nav', face: 3, x: 400, y: 500, name:'Beam Me Up', value: 'transporter' },
        ]
    },
    ruins: {
        infobox: '<b>Abandoned House</b>',
        sides: ['example/24/0000.jpg', 'example/24/0001.jpg', 'example/24/0002.jpg', 'example/24/0003.jpg', 'example/24/0004.jpg', 'example/24/0005.jpg'],
        hotspots: [
            { type: 'nav', face: 1, x: 0, y: 500, name:'Beam Me Up', value: 'transporter' },
            { type: 'nav', face: 4, x: 200, y: 1000, name:'Climb the Stairs', value: 'wtf' },
        ]
    },
    wtf: {
        infobox: 'WTF?',
        autorotate:.5,
        sides: ['joe/11/0000.jpg', 'example/11/0001.jpg', 'example/11/0002.jpg', 'example/11/0003.jpg', 'example/11/0004.jpg', 'example/11/0005.jpg'],
        hotspots: [
            { type: 'nav', face: 1, x: 0, y: 500, name:'GET OUTTA HERE!', value: 'transporter' },
        ]
    }
};

$('#pano').leanorama(tour.transporter).on('leanoramaHotspotClick', function(e, hotspot) {
    if (hotspot.type == 'nav') $(this).trigger('leanoramaRefresh', tour[hotspot.value]);
});