var tour = {
    transporter: {
        sides: ['joe/files/0000.jpg', 'joe/files/0001.jpg','joe/files/0002.jpg','joe/files/0003.jpg', 'joe/files/0005.jpg',  'joe/files/0006.jpg'],
        autorotate: 0.15,
        infobox: '<b>Compound </b><br>Where do you want to go?',
        touch: true,
        gyro: true,
         hotspots: [
        { type: 'nav', face: 0, x: 1280.0, y: 528.0, name:'Arisas Room', value: 'Room1' },
          {type: 'nav', face: 1, x: 1000.0, y: 500.0, name:'Go to Hall', value: 'AH' },
          {type: 'nav', face: 1, x: 800.0, y: 450.0, name:'Go to Lecture Rooms', value: 'LR' },  
       {type: 'nav', face: 1, x: 600.0, y: 400.0, name:'Go to the Mess Hall', value: 'Mess' }, 
       ]
    },
    Room1: {
        infobox: '<b>Arisas Room</b> <br> Arisa Lives Here Call 070x xxx xxx to get in touch',
        sides: ['joe/files/2/0001.jpg', 'joe/files/2/0002.jpg', 'joe/files/2/0003.jpg', 'joe/files/2/0004.jpg', 'joe/files/2/0005.jpg', 'joe/files/2/0006.jpg' ],
        hotspots: [
            { type: 'nav', face: 2, x: 100, y: 400, name:'Go Out ', value: 'transporter' },
              ]
    },
    AH: {
        infobox: '<b>AH </b> <br> Our Hall',
        sides: ['joe/files/ah/01.jpg', 'joe/files/ah/02.jpg', 'joe/files/ah/03.jpg', 'joe/files/ah/04.jpg', 'joe/files/ah/05.jpg', 'joe/files/ah/06.jpg' ],
        hotspots: [
            { type: 'nav', face: 2, x: 100, y: 400, name:'Compound ', value: 'transporter' },
              ]
    },
    LR: {
        infobox: '<b>Lecture Rooms </b> <br> Our Lecture Rooms',
        sides: ['joe/files/lr/01.jpg', 'joe/files/lr/02.jpg', 'joe/files/lr/03.jpg', 'joe/files/lr/04.jpg', 'joe/files/lr/05.jpg', 'joe/files/lr/06.jpg' ],
        hotspots: [
            { type: 'nav', face: 2, x: 100, y: 400, name:'Compound ', value: 'transporter' },
              ]
    },
    Mess: {
        infobox: '<b>Mess </b> <br> Where we eat!',
        sides: ['joe/files/mess/01.jpg', 'joe/files/mess/02.jpg', 'joe/files/mess/03.jpg', 'joe/files/mess/04.jpg', 'joe/files/mess/05.jpg', 'joe/files/mess/06.jpg' ],
        hotspots: [
            { type: 'nav', face: 2, x: 100, y: 400, name:'Compound ', value: 'transporter' },
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