/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"howler.js",
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Voegel',
                            symbolName: 'Voegel',
                            display: 'block',
                            type: 'rect',
                            rect: ['1901', '285', '2754', '483', 'auto', 'auto']
                        },
                        {
                            id: 'parallax',
                            symbolName: 'parallax',
                            type: 'rect',
                            rect: ['-9343', '-68', '33544', '1543', 'auto', 'auto']
                        },
                        {
                            id: 'vogelGruppe',
                            symbolName: 'vogelGruppe',
                            display: 'block',
                            type: 'rect',
                            rect: ['2162', '254', '433', '145', 'auto', 'auto']
                        },
                        {
                            id: 'grattecielstadt',
                            symbolName: 'gratteciel',
                            display: 'block',
                            type: 'rect',
                            rect: ['158', '901', '625', '569', 'auto', 'auto'],
                            transform: [[],[],[],['1.50655','1.50655']]
                        },
                        {
                            id: 'sportstadt',
                            symbolName: 'sport',
                            display: 'block',
                            type: 'rect',
                            rect: ['0', '0', '956', '759', 'auto', 'auto']
                        },
                        {
                            id: 'autostadt',
                            symbolName: 'autostadt',
                            display: 'block',
                            type: 'rect',
                            rect: ['0', '752', '982', '785', 'auto', 'auto']
                        },
                        {
                            id: 'palaststadt',
                            symbolName: 'palaststadt',
                            display: 'block',
                            type: 'rect',
                            rect: ['0', '0', '1123', '818', 'auto', 'auto']
                        },
                        {
                            id: 'Ebene1out',
                            symbolName: 'Ebene1out',
                            type: 'rect',
                            rect: ['0', '13', '23544', '1536', 'auto', 'auto']
                        },
                        {
                            id: 'neuKnopf',
                            symbolName: 'neuKnopf',
                            type: 'rect',
                            rect: ['12584', '865', '12880', '487', 'auto', 'auto']
                        },
                        {
                            id: 'titre',
                            symbolName: 'titre',
                            display: 'block',
                            type: 'rect',
                            rect: ['525', '598', '902', '170', 'auto', 'auto']
                        },
                        {
                            id: 'textes',
                            symbolName: 'textes',
                            type: 'rect',
                            rect: ['-482px', '179px', '4292', '400', 'auto', 'auto']
                        },
                        {
                            id: 'eglise',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"eglise.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'muezzin',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"muezzin.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'walkloop1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"walkloop1.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'tram1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"tram1.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'villevivante1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"villevivante1.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'ville1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"ville1.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2048', '1536', 'auto', 'auto'],
                            overflow: 'scroll',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 40066,
                    autoPlay: false,
                    data: [
                        [
                            "eid576",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Voegel}",
                            'block',
                            'block'
                        ],
                        [
                            "eid253",
                            "display",
                            0,
                            0,
                            "linear",
                            "${grattecielstadt}",
                            'block',
                            'block'
                        ],
                        [
                            "eid575",
                            "display",
                            0,
                            0,
                            "linear",
                            "${vogelGruppe}",
                            'block',
                            'block'
                        ],
                        [
                            "eid254",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${autostadt}",
                            'block',
                            'block'
                        ],
                        [
                            "eid351",
                            "display",
                            0,
                            0,
                            "linear",
                            "${titre}",
                            'block',
                            'block'
                        ],
                        [
                            "eid584",
                            "left",
                            119,
                            0,
                            "linear",
                            "${textes}",
                            '-482px',
                            '-482px'
                        ],
                        [
                            "eid252",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${sportstadt}",
                            'block',
                            'block'
                        ],
                        [
                            "eid585",
                            "top",
                            119,
                            0,
                            "linear",
                            "${textes}",
                            '179px',
                            '179px'
                        ],
                        [
                            "eid316",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${palaststadt}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "Ebene1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 768, '6144', '768', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panoa_05',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panoa_05.png', '0px', '0px']
                            },
                            {
                                rect: [1024, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panoa_06',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panoa_06.png', '0px', '0px']
                            },
                            {
                                rect: [2048, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panoa_07',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panoa_07.png', '0px', '0px']
                            },
                            {
                                rect: [3072, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panoa_08',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panoa_08.png', '0px', '0px']
                            },
                            {
                                rect: [4096, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panob_05',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panob_05.png', '0px', '0px']
                            },
                            {
                                rect: [5120, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panob_06',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panob_06.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: [6144, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panob_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panob_07.png', '0px', '0px']
                        },
                        {
                            rect: [7168, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panob_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panob_08.png', '0px', '0px']
                        },
                        {
                            rect: [7168, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panob_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panob_04.png', '0px', '0px']
                        },
                        {
                            rect: [8192, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_05.png', '0px', '0px']
                        },
                        {
                            rect: [9216, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_06.png', '0px', '0px']
                        },
                        {
                            rect: [10240, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_07.png', '0px', '0px']
                        },
                        {
                            rect: [11264, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_08.png', '0px', '0px']
                        },
                        {
                            rect: [11264, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_04.png', '0px', '0px']
                        },
                        {
                            rect: [10240, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_03',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_03.png', '0px', '0px']
                        },
                        {
                            rect: [6144, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panob_03',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panob_03.png', '0px', '0px']
                        },
                        {
                            rect: [12287, 0, '8185', '1536', 'auto', 'auto'],
                            id: 'Group5',
                            type: 'group',
                            c: [
                            {
                                rect: [1, 768, '1024px', '768px', 'auto', 'auto'],
                                id: 'panod_05',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panod_05.png', '0px', '0px']
                            },
                            {
                                rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panod_01',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panod_01.png', '0px', '0px']
                            },
                            {
                                rect: [1025, '0', '7160', '1536', 'auto', 'auto'],
                                id: 'Group4',
                                type: 'group',
                                c: [
                                {
                                    rect: [0, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_06',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_06.png', '0px', '0px']
                                },
                                {
                                    rect: [1024, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_07',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_07.png', '0px', '0px']
                                },
                                {
                                    rect: [2048, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_08',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_08.png', '0px', '0px']
                                },
                                {
                                    rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_02',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_02.png', '0px', '0px']
                                },
                                {
                                    rect: [1024, 0, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_03',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_03.png', '0px', '0px']
                                },
                                {
                                    rect: [2048, 0, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_04',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_04.png', '0px', '0px']
                                },
                                {
                                    rect: [3072, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panoe_05',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panoe_05.png', '0px', '0px']
                                },
                                {
                                    rect: [4089, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panoe_06',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panoe_06.png', '0px', '0px']
                                },
                                {
                                    rect: [5113, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panoe_07',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panoe_07.png', '0px', '0px']
                                },
                                {
                                    rect: [6136, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panoe_08',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panoe_08.png', '0px', '0px']
                                },
                                {
                                    rect: [6136, 0, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panoe_04',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panoe_04.png', '0px', '0px']
                                }]
                            }]
                        },
                        {
                            rect: [20472, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panof_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panof_05.png', '0px', '0px']
                        },
                        {
                            rect: [21495, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panof_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panof_06.png', '0px', '0px']
                        },
                        {
                            rect: [22519, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panof_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panof_07.png', '0px', '0px']
                        },
                        {
                            rect: [20472, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panof_01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panof_01.png', '0px', '0px']
                        },
                        {
                            rect: [22606, 768, '6144', '768', 'auto', 'auto'],
                            id: 'GroupCopy',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panoa_05Copy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panoa_05.png', '0px', '0px']
                            },
                            {
                                rect: [1024, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panoa_06Copy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panoa_06.png', '0px', '0px']
                            },
                            {
                                rect: [2048, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panoa_07Copy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panoa_07.png', '0px', '0px']
                            },
                            {
                                rect: [3072, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panoa_08Copy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panoa_08.png', '0px', '0px']
                            },
                            {
                                rect: [4096, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panob_05Copy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panob_05.png', '0px', '0px']
                            },
                            {
                                rect: [5120, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panob_06Copy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panob_06.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: [28750, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panob_07Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panob_07.png', '0px', '0px']
                        },
                        {
                            rect: [29774, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panob_08Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panob_08.png', '0px', '0px']
                        },
                        {
                            rect: [29774, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panob_04Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panob_04.png', '0px', '0px']
                        },
                        {
                            rect: [30798, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_05Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_05.png', '0px', '0px']
                        },
                        {
                            rect: [31822, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_06Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_06.png', '0px', '0px']
                        },
                        {
                            rect: [32846, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_07Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_07.png', '0px', '0px']
                        },
                        {
                            rect: [33870, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_08Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_08.png', '0px', '0px']
                        },
                        {
                            rect: [33870, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_04Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_04.png', '0px', '0px']
                        },
                        {
                            rect: [32846, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoc_03Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoc_03.png', '0px', '0px']
                        },
                        {
                            rect: [28750, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panob_03Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panob_03.png', '0px', '0px']
                        },
                        {
                            rect: [34893, 0, '8185', '1536', 'auto', 'auto'],
                            id: 'Group5Copy',
                            type: 'group',
                            c: [
                            {
                                rect: [1, 768, '1024px', '768px', 'auto', 'auto'],
                                id: 'panod_05Copy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panod_05.png', '0px', '0px']
                            },
                            {
                                rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                                id: 'panod_01Copy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/panod_01.png', '0px', '0px']
                            },
                            {
                                rect: [1025, '0', '7160', '1536', 'auto', 'auto'],
                                id: 'Group4Copy',
                                type: 'group',
                                c: [
                                {
                                    rect: [0, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_06Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_06.png', '0px', '0px']
                                },
                                {
                                    rect: [1024, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_07Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_07.png', '0px', '0px']
                                },
                                {
                                    rect: [2048, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_08Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_08.png', '0px', '0px']
                                },
                                {
                                    rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_02Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_02.png', '0px', '0px']
                                },
                                {
                                    rect: [1024, 0, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_03Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_03.png', '0px', '0px']
                                },
                                {
                                    rect: [2048, 0, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panod_04Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panod_04.png', '0px', '0px']
                                },
                                {
                                    rect: [3072, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panoe_05Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panoe_05.png', '0px', '0px']
                                },
                                {
                                    rect: [4089, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panoe_06Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panoe_06.png', '0px', '0px']
                                },
                                {
                                    rect: [5113, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panoe_07Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panoe_07.png', '0px', '0px']
                                },
                                {
                                    rect: [6136, 768, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panoe_08Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panoe_08.png', '0px', '0px']
                                },
                                {
                                    rect: [6136, 0, '1024px', '768px', 'auto', 'auto'],
                                    id: 'panoe_04Copy',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/panoe_04.png', '0px', '0px']
                                }]
                            }]
                        },
                        {
                            rect: [43078, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panof_05Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panof_05.png', '0px', '0px']
                        },
                        {
                            rect: [43078, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panof_01Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panof_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'montagne3copie2',
                            rect: [21730, 1235, '1951px', '1066px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-5', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/montagne3copie.png', '0px', '0px']
                        },
                        {
                            rect: [44418, 952, '2038px', '732px', 'auto', 'auto'],
                            id: 'montagne13',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/montagne1.png', '0px', '0px']
                        },
                        {
                            rect: [44683, 863, '349px', '881px', 'auto', 'auto'],
                            id: 'tour1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tour1.png', '0px', '0px']
                        },
                        {
                            rect: [45368, 1196, '1951px', '1066px', 'auto', 'auto'],
                            id: 'montagne3copie3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/montagne3copie.png', '0px', '0px']
                        },
                        {
                            rect: [43847, 1018, '1360px', '761px', 'auto', 'auto'],
                            id: 'montagne6copie',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/montagne6copie.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'montagne1',
                            rect: [-1836, 1224, '2038px', '732px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-169', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/montagne1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'montagne6copie2',
                            rect: [-3806, 1271, '1360px', '761px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-190', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/montagne6copie.png', '0px', '0px']
                        },
                        {
                            rect: [-4612, '831', 2150, 1172, 'auto', 'auto'],
                            id: 'startmontain1',
                            symbolName: 'startmontain1',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'montagne3copie',
                            rect: [-3269, 1065, '1951px', '1066px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-25', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/montagne3copie.png', '0px', '0px']
                        },
                        {
                            rect: [2129, -199, 25110, 1425, 'auto', 'auto'],
                            id: 'Fumee_1',
                            symbolName: 'Fumee_1',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 23544, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ebene2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [1, 769, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraa_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraa_05.png', '0px', '0px']
                        },
                        {
                            rect: [1025, 769, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraa_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraa_06.png', '0px', '0px']
                        },
                        {
                            rect: [2049, 769, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraa_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraa_07.png', '0px', '0px']
                        },
                        {
                            rect: [3073, 769, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraa_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraa_08.png', '0px', '0px']
                        },
                        {
                            rect: [1, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraa_01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraa_01.png', '0px', '0px']
                        },
                        {
                            rect: [1025, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraa_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraa_02.png', '0px', '0px']
                        },
                        {
                            rect: [3073, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraa_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraa_04.png', '0px', '0px']
                        },
                        {
                            rect: [4097, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorab_01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorab_01.png', '0px', '0px']
                        },
                        {
                            rect: [4097, 769, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorab_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorab_05.png', '0px', '0px']
                        },
                        {
                            rect: [5120, 769, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorab_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorab_06.png', '0px', '0px']
                        },
                        {
                            rect: [6144, 769, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorab_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorab_07.png', '0px', '0px']
                        },
                        {
                            rect: [7168, 769, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorab_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorab_08.png', '0px', '0px']
                        },
                        {
                            rect: [5120, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorab_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorab_02.png', '0px', '0px']
                        },
                        {
                            rect: [6144, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorab_03',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorab_03.png', '0px', '0px']
                        },
                        {
                            rect: [7168, 1, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorab_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorab_04.png', '0px', '0px']
                        },
                        {
                            rect: [8192, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorac_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorac_05.png', '0px', '0px']
                        },
                        {
                            rect: [9216, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorac_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorac_06.png', '0px', '0px']
                        },
                        {
                            rect: [10240, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorac_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorac_07.png', '0px', '0px']
                        },
                        {
                            rect: [11264, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorac_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorac_08.png', '0px', '0px']
                        },
                        {
                            rect: [8192, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorac_01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorac_01.png', '0px', '0px']
                        },
                        {
                            rect: [9216, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorac_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorac_02.png', '0px', '0px']
                        },
                        {
                            rect: [11264, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorac_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorac_04.png', '0px', '0px']
                        },
                        {
                            rect: [12288, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorad_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorad_05.png', '0px', '0px']
                        },
                        {
                            rect: [13311, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorad_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorad_06.png', '0px', '0px']
                        },
                        {
                            rect: [14335, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorad_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorad_07.png', '0px', '0px']
                        },
                        {
                            rect: [15359, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorad_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorad_08.png', '0px', '0px']
                        },
                        {
                            rect: [12288, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorad_01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorad_01.png', '0px', '0px']
                        },
                        {
                            rect: [16383, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorae_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorae_05.png', '0px', '0px']
                        },
                        {
                            rect: [17407, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorae_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorae_06.png', '0px', '0px']
                        },
                        {
                            rect: [18430, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorae_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorae_07.png', '0px', '0px']
                        },
                        {
                            rect: [19454, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorae_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorae_08.png', '0px', '0px']
                        },
                        {
                            rect: [17407, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorae_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorae_02.png', '0px', '0px']
                        },
                        {
                            rect: [18430, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorae_03',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorae_03.png', '0px', '0px']
                        },
                        {
                            rect: [19454, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorae_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorae_04.png', '0px', '0px']
                        },
                        {
                            rect: [20478, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraf_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraf_05.png', '0px', '0px']
                        },
                        {
                            rect: [21502, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraf_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraf_06.png', '0px', '0px']
                        },
                        {
                            rect: [22526, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraf_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraf_07.png', '0px', '0px']
                        },
                        {
                            rect: [23550, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraf_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraf_08.png', '0px', '0px']
                        },
                        {
                            rect: [24574, 775, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorag_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorag_05.png', '0px', '0px']
                        },
                        {
                            rect: [21502, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraf_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraf_02.png', '0px', '0px']
                        },
                        {
                            rect: [23550, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoraf_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoraf_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'montagne3copie',
                            rect: [24713, 1131, '1951px', '1066px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-9', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/montagne3copie.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'montagne1',
                            rect: [25376, 980, '2038px', 848, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['13', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/montagne1.png', '0px', '0px']
                        },
                        {
                            rect: [-1360, 1077, '2038px', '732px', 'auto', 'auto'],
                            id: 'montagne12',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/montagne1.png', '0px', '0px']
                        },
                        {
                            rect: [16383, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorae_01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorae_01.png', '0px', '0px']
                        },
                        {
                            rect: [15359, 7, '1024px', '768px', 'auto', 'auto'],
                            id: 'panorad_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panorad_04.png', '0px', '0px']
                        },
                        {
                            rect: [9174, 1013, '212px', 338, 'auto', 'auto'],
                            id: 'boutonsport2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/boutonsport.png', '0px', '0px']
                        },
                        {
                            rect: [20045, 829, 181, 226, 'auto', 'auto'],
                            id: 'boutonpalast',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/boutonpalast.png', '0px', '0px']
                        },
                        {
                            rect: [-3903, 897, '2038px', '732px', 'auto', 'auto'],
                            id: 'montagne13',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/montagne1.png', '0px', '0px']
                        },
                        {
                            rect: [-2746, 1066, '1951px', '1066px', 'auto', 'auto'],
                            id: 'montagne3copie2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/montagne3copie.png', '0px', '0px']
                        },
                        {
                            rect: [-4744, 771, 2177, 1590, 'auto', 'auto'],
                            id: 'startmontain2',
                            symbolName: 'startmontain2',
                            type: 'rect'
                        },
                        {
                            rect: [-2508, 1364, 1161, 120, 'auto', 'auto'],
                            id: 'terrainfoot',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/terrainfoot.png', '0px', '0px']
                        },
                        {
                            rect: [5623, 999, '400px', '400px', 'auto', 'auto'],
                            id: 'boutongratteciel',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/boutonhochhaus_ok.png', '0px', '0px']
                        },
                        {
                            rect: [11529, 1124, '366px', '265px', 'auto', 'auto'],
                            id: 'blauestrasse',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/blauestrasse.png', '0px', '0px']
                        },
                        {
                            rect: [23334, 7, 1088, 900, 'auto', 'auto'],
                            id: 'FumeeGrandeUsine',
                            symbolName: 'FumeeGrandeUsine',
                            type: 'rect'
                        },
                        {
                            rect: [15836, 99, 344, 461, 'auto', 'auto'],
                            id: 'fumee8',
                            opacity: '0.24479166291109',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee8.gif', '0px', '0px']
                        },
                        {
                            rect: [15836, 0, 353, 550, 'auto', 'auto'],
                            id: 'fumee9',
                            opacity: '0.13008130081301',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee9.gif', '0px', '0px']
                        },
                        {
                            rect: [15785, -170, 2350, 756, 'auto', 'auto'],
                            id: 'FumeeEbeneZwei',
                            symbolName: 'FumeeEbeneZwei',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 25598, 1543]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Ebene3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramaa_013',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramaa_01.png', '0px', '0px']
                        },
                        {
                            rect: [1024, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramaa_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramaa_02.png', '0px', '0px']
                        },
                        {
                            rect: [2048, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramaa_03',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramaa_03.png', '0px', '0px']
                        },
                        {
                            rect: [3072, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramaa_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramaa_04.png', '0px', '0px']
                        },
                        {
                            rect: [0, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramaa_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramaa_05.png', '0px', '0px']
                        },
                        {
                            rect: [1024, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramaa_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramaa_06.png', '0px', '0px']
                        },
                        {
                            rect: [2048, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramaa_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramaa_07.png', '0px', '0px']
                        },
                        {
                            rect: [3072, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramaa_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramaa_08.png', '0px', '0px']
                        },
                        {
                            rect: [4096, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramab_01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramab_01.png', '0px', '0px']
                        },
                        {
                            rect: [5120, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramab_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramab_02.png', '0px', '0px']
                        },
                        {
                            rect: [6144, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramab_03',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramab_03.png', '0px', '0px']
                        },
                        {
                            rect: [7168, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramab_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramab_04.png', '0px', '0px']
                        },
                        {
                            rect: [4096, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramab_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramab_05.png', '0px', '0px']
                        },
                        {
                            rect: [5120, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramab_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramab_06.png', '0px', '0px']
                        },
                        {
                            rect: [6144, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramab_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramab_07.png', '0px', '0px']
                        },
                        {
                            rect: [7168, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramab_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramab_08.png', '0px', '0px']
                        },
                        {
                            rect: [8192, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramac_01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramac_01.png', '0px', '0px']
                        },
                        {
                            rect: [9216, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramac_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramac_02.png', '0px', '0px']
                        },
                        {
                            rect: [10240, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramac_03',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramac_03.png', '0px', '0px']
                        },
                        {
                            rect: [11264, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramac_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramac_04.png', '0px', '0px']
                        },
                        {
                            rect: [8192, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramac_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramac_05.png', '0px', '0px']
                        },
                        {
                            rect: [9216, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramac_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramac_06.png', '0px', '0px']
                        },
                        {
                            rect: [10240, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramac_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramac_07.png', '0px', '0px']
                        },
                        {
                            rect: [11264, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramac_08',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramac_08.png', '0px', '0px']
                        },
                        {
                            rect: [12288, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramad_01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramad_01.png', '0px', '0px']
                        },
                        {
                            rect: [13312, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramad_02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramad_02.png', '0px', '0px']
                        },
                        {
                            rect: [14336, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramad_03',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramad_03.png', '0px', '0px']
                        },
                        {
                            rect: [12288, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramad_05',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramad_05.png', '0px', '0px']
                        },
                        {
                            rect: [13312, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramad_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramad_06.png', '0px', '0px']
                        },
                        {
                            rect: [14336, 768, '1024px', '768px', 'auto', 'auto'],
                            id: 'panoramad_07',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/panoramad_07.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'montagne5',
                            rect: [-2609, -380, '3256px', '2550px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-329', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/montagne5.png', '0px', '0px']
                        },
                        {
                            rect: [-3805, 694, '1951px', '1066px', 'auto', 'auto'],
                            id: 'montagne3copie',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/montagne3copie.png', '0px', '0px']
                        },
                        {
                            rect: ['-4420', '951', 1360, 761, 'auto', 'auto'],
                            id: 'startmontain3',
                            symbolName: 'startmontain3',
                            type: 'rect'
                        },
                        {
                            rect: [-1625, 951, 233, 176, 'auto', 'auto'],
                            id: 'maisons4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/maisons4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 15361, 1537]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "parallax": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [14528, 'auto', 15361, 1537, 'auto', -72],
                            id: 'Ebene3',
                            symbolName: 'Ebene3',
                            opacity: '1',
                            type: 'rect'
                        },
                        {
                            rect: [14586, 'auto', 25598, 1543, 'auto', -78],
                            id: 'Ebene2',
                            symbolName: 'Ebene2',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 33544, 1543]
                        }
                    }
                },
                timeline: {
                    duration: 40000,
                    autoPlay: false,
                    data: [
                        [
                            "eid160",
                            "left",
                            0,
                            40000,
                            "linear",
                            "${Ebene2}",
                            '14586px',
                            '-16255px'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            40000,
                            "linear",
                            "${Ebene3}",
                            '14528px',
                            '-4501px'
                        ]
                    ]
                }
            },
            "gratteciel": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: [0, 0, '625px', '569px', 'auto', 'auto'],
                            id: 'gratteciel',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/gratteciel.gif', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            rect: ['21', '481', '320px', '45px', 'auto', 'auto'],
                            source: ['media/cigales.mp3'],
                            id: 'cigalesaudio',
                            type: 'audio',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 625, 569]
                        }
                    }
                },
                timeline: {
                    duration: 6531,
                    autoPlay: false,
                    data: [
                        [
                            "eid381",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${gratteciel}",
                            'none',
                            'none'
                        ],
                            [ "eid175", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${cigalesaudio}', [] ] ]
                    ]
                }
            },
            "sport": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0', '0', '1347', '897', 'auto', 'auto'],
                            id: 'sport',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/sport.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '956', '759']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid314",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${sport}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "autostadt": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: [0, -88, 1362, 873, 'auto', 'auto'],
                            id: 'autos',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/autos.gif', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            rect: ['42', '38', '320px', '45px', 'auto', 'auto'],
                            source: ['media/auto.mp3'],
                            id: 'auto',
                            type: 'audio',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 982, 785]
                        }
                    }
                },
                timeline: {
                    duration: 17032,
                    autoPlay: false,
                    data: [
                        [
                            "eid319",
                            "display",
                            0,
                            0,
                            "linear",
                            "${autos}",
                            'none',
                            'none'
                        ],
                            [ "eid210", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${auto}', [] ] ]
                    ]
                }
            },
            "palaststadt": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 1123, 818, 'auto', 'auto'],
                            type: 'image',
                            id: 'palaststadt',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/palast.gif', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            rect: ['27', '36', '320px', '45px', 'auto', 'auto'],
                            source: ['media/palast.mp3'],
                            id: 'palast2',
                            type: 'audio',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1123, 818]
                        }
                    }
                },
                timeline: {
                    duration: 28029,
                    autoPlay: false,
                    data: [
                        [
                            "eid317",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${palaststadt}",
                            'none',
                            'none'
                        ],
                            [ "eid223", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${palast2}', [] ] ]
                    ]
                }
            },
            "Ebene1out": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [4363, 'auto', 23544, 1536, 'auto', 0],
                            id: 'Ebene1in',
                            symbolName: 'Ebene1',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 23544, 1536]
                        }
                    }
                },
                timeline: {
                    duration: 40000,
                    autoPlay: false,
                    data: [
                        [
                            "eid272",
                            "bottom",
                            0,
                            0,
                            "linear",
                            "${Ebene1in}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid274",
                            "left",
                            0,
                            40000,
                            "linear",
                            "${Ebene1in}",
                            '4363px',
                            '-44534px'
                        ]
                    ]
                }
            },
            "Knoepfe": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-1549, 221, 124, 255, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['26', 0, 0], [0, 0], ['1', '1.1102', 1], ['50%', '50%']],
                            opacity: '0',
                            id: 'RectangleGratteciel',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(203,24,230,1.00)']
                        },
                        {
                            rect: [1885, 216, '116px', 212, 'auto', 'auto'],
                            opacity: '0',
                            id: 'RectangleSport',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(188,217,26,1.00)']
                        },
                        {
                            rect: [4229, 349, 311, 135, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['4', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            opacity: '0',
                            id: 'RectangleAuto',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(35,20,231,1.00)']
                        },
                        {
                            rect: [12737, 0, '143px', '175px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'RectanglePalast',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(14,230,159,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 12880, 487]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "startmontain3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [316, 0, '1360px', '761px', 'auto', 'auto'],
                            id: 'montain3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/montagne6copie.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1360, 761]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid328",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${montain3}",
                            '316px',
                            '23px'
                        ]
                    ]
                }
            },
            "startmontain1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['13', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'montain1',
                            type: 'image',
                            rect: [219, 220, '2038px', '732px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/montagne1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2150, 1172]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid336",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${montain1}",
                            '219px',
                            '-147px'
                        ]
                    ]
                }
            },
            "startmontain2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-197', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'montain2',
                            type: 'image',
                            rect: [113, 262, '1951px', '1066px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/montagne3copie.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2177, 1590]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid343",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${montain2}",
                            '113px',
                            '-248px'
                        ]
                    ]
                }
            },
            "neuKnopf": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 12880, 487, 'auto', 'auto'],
                            id: 'Knoepfe',
                            symbolName: 'Knoepfe',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 12880, 487]
                        }
                    }
                },
                timeline: {
                    duration: 34000,
                    autoPlay: true,
                    data: [
                        [
                            "eid346",
                            "left",
                            0,
                            34000,
                            "linear",
                            "${Knoepfe}",
                            '0px',
                            '-26222px'
                        ]
                    ]
                }
            },
            "FEDORA": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '713', '168', 'auto', 'auto'],
                            id: 'FEDORA',
                            type: 'group',
                            c: [
                            {
                                rect: ['9', '7', '700', '153', 'auto', 'auto'],
                                id: 'fedoraB',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/fedoraB.gif', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '713', '170']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "titre": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 713, 170, 'auto', 'auto'],
                            opacity: '0',
                            id: 'FEDORA',
                            symbolName: 'FEDORA',
                            display: 'block',
                            type: 'rect'
                        },
                        {
                            rect: [696, 7, 206, 151, 'auto', 'auto'],
                            opacity: '0',
                            id: 'S',
                            symbolName: 'S',
                            display: 'block',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 902, 170]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "titre_fin": 6000
                    },
                    data: [
                        [
                            "eid151",
                            "opacity",
                            2220,
                            1780,
                            "easeInOutQuad",
                            "${S}",
                            '0',
                            '1'
                        ],
                        [
                            "eid356",
                            "opacity",
                            6000,
                            2000,
                            "easeOutQuad",
                            "${S}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S}",
                            'block',
                            'block'
                        ],
                        [
                            "eid350",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${FEDORA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid147",
                            "opacity",
                            0,
                            1500,
                            "easeInOutQuad",
                            "${FEDORA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid357",
                            "opacity",
                            6000,
                            2000,
                            "easeOutQuad",
                            "${FEDORA}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "S": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 1, 206, 150, 'auto', 'auto'],
                            id: 'S',
                            type: 'group',
                            c: [
                            {
                                rect: [0, -1, 206, 147, 'auto', 'auto'],
                                id: 'sA',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/sA.gif', '0px', '0px']
                            },
                            {
                                rect: [2, 0, 200, 150, 'auto', 'auto'],
                                id: 'sB',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/sB2.gif', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 206, 151]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1340', '91', '3180px', '200px', 'auto', 'auto'],
                            id: 'intro1',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro1.png', '0px', '0px']
                        },
                        {
                            rect: ['1937', '164', '3180px', '200px', 'auto', 'auto'],
                            id: 'intro2',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro2.png', '0px', '0px']
                        },
                        {
                            rect: ['2973', '423', '3180px', '200px', 'auto', 'auto'],
                            id: 'intro3',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro3.png', '0px', '0px']
                        },
                        {
                            rect: ['3598', '500', '3180px', '200px', 'auto', 'auto'],
                            id: 'intro4',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro4.png', '0px', '0px']
                        },
                        {
                            rect: ['5114', '197', '3180px', '200px', 'auto', 'auto'],
                            id: 'intro5',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro5.png', '0px', '0px']
                        },
                        {
                            rect: ['6212', '9', '3180px', '200px', 'auto', 'auto'],
                            id: 'intro7',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro7.png', '0px', '0px']
                        },
                        {
                            rect: ['6833', '141', '3180px', '200px', 'auto', 'auto'],
                            id: 'intro8',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro8.png', '0px', '0px']
                        },
                        {
                            rect: ['8630', '-82', '3180px', '200px', 'auto', 'auto'],
                            id: 'intro9',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro9.png', '0px', '0px']
                        },
                        {
                            rect: ['9406', '50', '3180px', '200px', 'auto', 'auto'],
                            id: 'intro10',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro10.png', '0px', '0px']
                        },
                        {
                            rect: ['10472', '235', '3180px', '200px', 'auto', 'auto'],
                            id: 'intro11',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro11.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '4292', '400']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "textes": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '4292', '400', 'auto', 'auto'],
                            id: 'text3',
                            symbolName: 'text',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '4292', '400']
                        }
                    }
                },
                timeline: {
                    duration: 14015,
                    autoPlay: false,
                    data: [
                        [
                            "eid374",
                            "left",
                            0,
                            14015,
                            "easeOutQuad",
                            "${text3}",
                            '0px',
                            '-12492px'
                        ]
                    ]
                }
            },
            "FumeeEbeneZwei": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [2100, 466, 250, 281, 'auto', 'auto'],
                            id: 'fumeeEbene2333',
                            opacity: '0.26807037898438',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee8.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2350, 756]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "FumeeGrandeUsine": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fumeeEbeneE',
                            opacity: '0.13357469197211',
                            rect: [654, 0, 334, 534, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fumee9.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'fumeeEbeneD',
                            opacity: '0.12893800813008',
                            rect: [22, 334, 225, 467, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fumee2.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'fumeeEbeneC',
                            opacity: '0.2163681402439',
                            rect: [309, 580, 127, 320, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fumee8.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'fumeeEbeneB',
                            opacity: '0.12230055894309',
                            rect: [0, 334, 280, 473, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fumee8.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'fumeeEbeneA',
                            opacity: '0.1869918699187',
                            rect: [850, 534, 238, 252, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fumee9.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1088, 900]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Fumee_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 572, 258, 467, 'auto', 'auto'],
                            id: 'fumee3',
                            opacity: '0.26184578252033',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee82.gif', '0px', '0px']
                        },
                        {
                            rect: [649, 669, '417px', '756px', 'auto', 'auto'],
                            id: 'fumee5',
                            opacity: '0.34924415165816',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee82.gif', '0px', '0px']
                        },
                        {
                            rect: [503, 607, '417px', '756px', 'auto', 'auto'],
                            id: 'fumee4a',
                            opacity: '0.27610518292683',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee92.gif', '0px', '0px']
                        },
                        {
                            rect: [510, 629, '417px', '756px', 'auto', 'auto'],
                            id: 'fumee4b',
                            opacity: '0.29065040650407',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee82.gif', '0px', '0px']
                        },
                        {
                            rect: [22567, 385, 354, 672, 'auto', 'auto'],
                            id: 'fumee85',
                            opacity: '0.28534679878049',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee82.gif', '0px', '0px']
                        },
                        {
                            rect: [24693, 402, '417px', '756px', 'auto', 'auto'],
                            id: 'fumee88',
                            opacity: '0.26197281504065',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee82.gif', '0px', '0px']
                        },
                        {
                            rect: [1615, 314, '417px', '756px', 'auto', 'auto'],
                            id: 'fumee1',
                            opacity: '0.17517783147533',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee12.gif', '0px', '0px']
                        },
                        {
                            rect: [24736, 591, 306, 573, 'auto', 'auto'],
                            id: 'fumee24',
                            opacity: '0.17727388211382',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee22.gif', '0px', '0px']
                        },
                        {
                            rect: [1604, 461, 428, 630, 'auto', 'auto'],
                            id: 'fumee8',
                            opacity: '0.3325393800813',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fumee8.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 25110, 1425]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Voegel": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'oiseaux',
                            symbolName: 'oiseauxEbene3',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.65', '0.65', 1], ['50%', '50%']],
                            rect: [-171, -51, 2754, 483, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2754, 483]
                        }
                    }
                },
                timeline: {
                    duration: 40000,
                    autoPlay: true,
                    data: [
                        [
                            "eid464",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${oiseaux}",
                            '-171px',
                            '-9795px'
                        ],
                        [
                            "eid495",
                            "left",
                            15000,
                            10000,
                            "linear",
                            "${oiseaux}",
                            '-171px',
                            '-9795px'
                        ],
                        [
                            "eid496",
                            "left",
                            30000,
                            10000,
                            "linear",
                            "${oiseaux}",
                            '-171px',
                            '-9795px'
                        ],
                            [ "eid555", "trigger", 15000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${oiseaux}', [0] ] ],
                            [ "eid556", "trigger", 30000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${oiseaux}', [0] ] ]
                    ]
                }
            },
            "oiseauxEbene3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 302, '194px', '181px', 'auto', 'auto'],
                            id: 'oiseau1',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oiseau1.gif', '0px', '0px']
                        },
                        {
                            rect: [136, 237, '194px', '181px', 'auto', 'auto'],
                            id: 'oiseau2',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oiseau2.gif', '0px', '0px']
                        },
                        {
                            rect: [1693, 0, '194px', '181px', 'auto', 'auto'],
                            id: 'oiseau3',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oiseau3.gif', '0px', '0px']
                        },
                        {
                            rect: [2137, 77, '194px', '181px', 'auto', 'auto'],
                            id: 'oiseau4',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oiseau4.gif', '0px', '0px']
                        },
                        {
                            rect: [3405, -145, '194px', '181px', 'auto', 'auto'],
                            id: 'oiseau6',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oiseau6.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 2754, 483]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid459",
                            "top",
                            0,
                            17,
                            "linear",
                            "${oiseau4}",
                            '77px',
                            '152px'
                        ],
                        [
                            "eid461",
                            "top",
                            17,
                            1880,
                            "linear",
                            "${oiseau4}",
                            '152px',
                            '14px'
                        ],
                        [
                            "eid462",
                            "top",
                            1897,
                            1103,
                            "linear",
                            "${oiseau4}",
                            '14px',
                            '77px'
                        ],
                        [
                            "eid458",
                            "left",
                            0,
                            17,
                            "linear",
                            "${oiseau4}",
                            '2137px',
                            '1809px'
                        ],
                        [
                            "eid460",
                            "left",
                            17,
                            2983,
                            "linear",
                            "${oiseau4}",
                            '1809px',
                            '1274px'
                        ]
                    ]
                }
            },
            "vogelGruppe": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.76', '0.76']],
                            id: 'oiseauxGroupe',
                            symbolName: 'oiseauxGroupe_1',
                            opacity: '1',
                            rect: ['2593', '28', '570', '191', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '433', '145']
                        }
                    }
                },
                timeline: {
                    duration: 40066,
                    autoPlay: true,
                    data: [
                        [
                            "eid568",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${oiseauxGroupe}",
                            '2593px',
                            '-2934px'
                        ],
                        [
                            "eid580",
                            "left",
                            20099,
                            5000,
                            "linear",
                            "${oiseauxGroupe}",
                            '2593px',
                            '-2934px'
                        ],
                        [
                            "eid581",
                            "left",
                            31891,
                            5000,
                            "linear",
                            "${oiseauxGroupe}",
                            '2593px',
                            '-2934px'
                        ],
                            [ "eid572", "trigger", 20099, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${oiseauxGroupe}', [0] ] ],
                            [ "eid582", "trigger", 31891, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${oiseauxGroupe}', [0] ] ]
                    ]
                }
            },
            "oiseauxGroupe_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [150, 2, '194px', '181px', 'auto', 'auto'],
                            id: 'oiseau13',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oiseau12.gif', '0px', '0px']
                        },
                        {
                            rect: [13, -17, '194px', '181px', 'auto', 'auto'],
                            id: 'oiseau22',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oiseau22.gif', '0px', '0px']
                        },
                        {
                            rect: [-39, -70, '194px', '181px', 'auto', 'auto'],
                            id: 'oiseau32',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oiseau32.gif', '0px', '0px']
                        },
                        {
                            rect: [415, -36, '194px', '181px', 'auto', 'auto'],
                            id: 'oiseau42',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oiseau42.gif', '0px', '0px']
                        },
                        {
                            rect: [232, 46, '194px', '181px', 'auto', 'auto'],
                            id: 'oiseau62',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/oiseau62.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 570, 191]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid443",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${oiseau62}",
                            '46px',
                            '130px'
                        ],
                        [
                            "eid449",
                            "top",
                            1500,
                            1750,
                            "linear",
                            "${oiseau62}",
                            '130px',
                            '-19px'
                        ],
                        [
                            "eid500",
                            "top",
                            3250,
                            1750,
                            "linear",
                            "${oiseau62}",
                            '-19px',
                            '46px'
                        ],
                        [
                            "eid430",
                            "left",
                            0,
                            2500,
                            "linear",
                            "${oiseau42}",
                            '415px',
                            '159px'
                        ],
                        [
                            "eid433",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${oiseau42}",
                            '159px',
                            '-102px'
                        ],
                        [
                            "eid445",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${oiseau32}",
                            '-70px',
                            '48px'
                        ],
                        [
                            "eid448",
                            "top",
                            1500,
                            1750,
                            "linear",
                            "${oiseau32}",
                            '48px',
                            '-93px'
                        ],
                        [
                            "eid501",
                            "top",
                            3250,
                            1750,
                            "linear",
                            "${oiseau32}",
                            '-93px',
                            '-70px'
                        ],
                        [
                            "eid446",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${oiseau32}",
                            '-39px',
                            '-205px'
                        ],
                        [
                            "eid454",
                            "left",
                            1500,
                            3500,
                            "linear",
                            "${oiseau32}",
                            '-205px',
                            '-602px'
                        ],
                        [
                            "eid441",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${oiseau22}",
                            '-17px',
                            '103px'
                        ],
                        [
                            "eid447",
                            "top",
                            1500,
                            1750,
                            "linear",
                            "${oiseau22}",
                            '103px',
                            '-190px'
                        ],
                        [
                            "eid502",
                            "top",
                            3250,
                            1750,
                            "linear",
                            "${oiseau22}",
                            '-190px',
                            '19px'
                        ],
                        [
                            "eid427",
                            "top",
                            0,
                            2500,
                            "linear",
                            "${oiseau13}",
                            '2px',
                            '106px'
                        ],
                        [
                            "eid432",
                            "top",
                            2500,
                            1250,
                            "linear",
                            "${oiseau13}",
                            '106px',
                            '-123px'
                        ],
                        [
                            "eid504",
                            "top",
                            3750,
                            1250,
                            "linear",
                            "${oiseau13}",
                            '-123px',
                            '2px'
                        ],
                        [
                            "eid429",
                            "top",
                            0,
                            2500,
                            "linear",
                            "${oiseau42}",
                            '-36px',
                            '68px'
                        ],
                        [
                            "eid431",
                            "top",
                            2500,
                            1250,
                            "linear",
                            "${oiseau42}",
                            '68px',
                            '-110px'
                        ],
                        [
                            "eid503",
                            "top",
                            3750,
                            1250,
                            "linear",
                            "${oiseau42}",
                            '-110px',
                            '-36px'
                        ],
                        [
                            "eid444",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${oiseau62}",
                            '232px',
                            '66px'
                        ],
                        [
                            "eid453",
                            "left",
                            1500,
                            3500,
                            "linear",
                            "${oiseau62}",
                            '66px',
                            '-402px'
                        ],
                        [
                            "eid428",
                            "left",
                            0,
                            2500,
                            "linear",
                            "${oiseau13}",
                            '150px',
                            '-103px'
                        ],
                        [
                            "eid434",
                            "left",
                            2500,
                            2500,
                            "linear",
                            "${oiseau13}",
                            '-103px',
                            '-301px'
                        ],
                        [
                            "eid442",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${oiseau22}",
                            '13px',
                            '-153px'
                        ],
                        [
                            "eid455",
                            "left",
                            1500,
                            3500,
                            "linear",
                            "${oiseau22}",
                            '-153px',
                            '-502px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("MARION");
