const params = {
    style: 'shmetro',
    svg_height: 400,
    padding: 3,
    y_pc: 40,
    branch_spacing: 45,
    theme: ['shanghai', 'sh1', '#e4002b', '#fff'],
    direction: 'l',
    current_stn_idx: 'kaxg',
    platform_num: '',
    stn_list: {
        linestart: {
            parents: [],
            children: ['9cyo'],
            name: ['路綫左端', 'LEFT END'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            num: '00',
            facility: '',
            secondaryName: false,
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            num: '00',
            facility: '',
            secondaryName: false,
        },
        l1mz: {
            parents: ['qzjx'],
            children: ['iwf6'],
            name: ['外环路', 'Waihuanlu'],
            branch: {
                left: [],
                right: [],
            },
            num: '02',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['莘庄', 'Xinzhuang'],
            branch: {
                left: [],
                right: [],
            },
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shanghai', 'sh5', '#ac4fc6', '#fff', '5号线', 'Line 5']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        jsat: {
            parents: ['srpy'],
            children: ['qzjx'],
            branch: {
                left: [],
                right: [],
            },
            name: ['锦江乐园', 'JinJiang Park'],
            num: '00',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        srpy: {
            parents: ['x9gu'],
            children: ['jsat'],
            branch: {
                left: [],
                right: [],
            },
            name: ['上海南站', 'Shanghai South Railway Station'],
            num: '00',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['shanghai', 'sh3', '#ffd100', '#000', '3号线', 'Line 3'],
                        ['shanghai', 'sh15', '#a4bcc2', '#fff', '15号线', 'Line 15'],
                    ],
                    [],
                    [['shanghai', 'pjl', '#999999', '#fff', '金山铁路', 'Jingshan Railway']],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        x9gu: {
            parents: ['k9k5'],
            children: ['srpy'],
            branch: {
                left: [],
                right: [],
            },
            name: ['漕宝路', 'Caobao Road'],
            num: '00',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shanghai', 'sh12', '#007b5f', '#fff', '12号线', 'Line 12']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        k9k5: {
            parents: ['j2kn'],
            children: ['x9gu'],
            branch: {
                left: [],
                right: [],
            },
            name: ['上海体育馆', 'Shanghai Indoor Stadium'],
            num: '00',
            services: ['local'],
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['shanghai', 'sh4', '#5f259f', '#fff', '4号线', 'Line 4']]],
            },
            facility: '',
            secondaryName: false,
        },
        j2kn: {
            parents: ['lcgp'],
            children: ['k9k5'],
            branch: {
                left: [],
                right: [],
            },
            name: ['徐家汇', 'Xujiahui'],
            num: '00',
            services: ['local'],
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['shanghai', 'sh9', '#71c5e8', '#000', '9号线', 'Line 9'],
                        ['shanghai', 'sh11', '#76232f', '#fff', '11号线', 'Line 11'],
                    ],
                ],
            },
            facility: '',
            secondaryName: false,
        },
        kaxg: {
            parents: ['7x7k'],
            children: ['wbtv'],
            branch: {
                left: [],
                right: [],
            },
            name: ['人民广场', "People's Square"],
            num: '00',
            services: ['local'],
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['shanghai', 'sh2', '#97d700', '#000', '2号线', 'Line 2'],
                        ['shanghai', 'sh8', '#00a3e0', '#fff', '8号线', 'Line 8'],
                    ],
                ],
            },
            facility: '',
            secondaryName: false,
        },
        sd6y: {
            parents: ['1fdr'],
            children: ['qnbj'],
            branch: {
                left: [],
                right: [],
            },
            name: ['上海火车站', 'Shanghai Railway Station'],
            num: '00',
            services: ['local'],
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [['車站名', 'Stn Name']],
                info: [
                    [],
                    [
                        ['shanghai', 'sh3', '#ffd100', '#000', '3号线', 'Line 3'],
                        ['shanghai', 'sh4', '#5f259f', '#fff', '4号线', 'Line 4'],
                    ],
                ],
            },
            facility: '',
            secondaryName: false,
        },
        '9cyo': {
            parents: ['linestart'],
            children: ['8hte'],
            branch: {
                left: [],
                right: [],
            },
            name: ['富锦路', 'Fujin Road'],
            num: '00',
            services: ['local'],
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            facility: '',
            secondaryName: false,
        },
        hhar: {
            children: ['qgae'],
            parents: ['nhrh'],
            branch: {
                left: [],
                right: [],
            },
            name: ['通河新村', 'Tonghe Xincun'],
            num: '00',
            services: ['local'],
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            facility: '',
            secondaryName: false,
        },
        jjh7: {
            children: ['h3vs'],
            parents: ['wbtv'],
            branch: {
                left: [],
                right: [],
            },
            name: ['陕西南路', 'South Shaanxi Road'],
            num: '00',
            services: ['local'],
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['shanghai', 'sh10', '#c1a7e2', '#000', '10号线', 'Line 10'],
                        ['shanghai', 'sh12', '#007b5f', '#fff', '12号线', 'Line 12'],
                    ],
                ],
            },
            facility: '',
            secondaryName: false,
        },
        '7x7k': {
            children: ['kaxg'],
            parents: ['qnbj'],
            branch: {
                left: [],
                right: [],
            },
            name: ['新闸路', 'XinZha Road'],
            num: '00',
            services: ['local'],
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            facility: '',
            secondaryName: false,
        },
        qnbj: {
            name: ['汉中路', 'Hanzhong Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['sd6y'],
            children: ['7x7k'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [
                    [
                        ['shanghai', 'sh12', '#007b5f', '#fff', '12号线', 'Line 12'],
                        ['shanghai', 'sh13', '#EF95CF', '#000', '13号线', 'Line 13'],
                    ],
                ],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '1fdr': {
            name: ['中山北路', 'North Zhongshan Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['wai3'],
            children: ['sd6y'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        lcgp: {
            name: ['衡山路', 'Hengshan Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['h3vs'],
            children: ['j2kn'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        wbtv: {
            name: ['一大会址·黄陂南路', 'Site of the First CPC National\\Congress · South Huangpi Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['kaxg'],
            children: ['jjh7'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['shanghai', 'sh14', '#827A04', '#fff', '14号线', 'Line 14']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        wai3: {
            name: ['延长路', 'Yanchang Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['naz0'],
            children: ['1fdr'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        naz0: {
            name: ['上海马戏城', 'Shanghai Circus World'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['y6id'],
            children: ['wai3'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        y6id: {
            name: ['汶水路', 'Wenshui Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['ekdv'],
            children: ['naz0'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        exax: {
            name: ['共富新村', 'Gongfu Xincun'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['yrlx'],
            children: ['nhrh'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        qzjx: {
            name: ['莲花路', 'Lianhua Road '],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['jsat'],
            children: ['l1mz'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '8hte': {
            name: ['友谊西路', 'West Youyi Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['9cyo'],
            children: ['yrlx'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        yrlx: {
            name: ['宝安公路', "Bao'an Highway"],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['8hte'],
            children: ['exax'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        nhrh: {
            name: ['呼兰路', 'Hulan Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['exax'],
            children: ['hhar'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['shanghai', 'sh18', '#D6A461', '#000', '18号线', 'Line 18']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        qgae: {
            name: ['共康路', 'Gongkang Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['hhar'],
            children: ['ekdv'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        ekdv: {
            name: ['彭浦新村', 'Pengpu Xincun'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['qgae'],
            children: ['y6id'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        h3vs: {
            name: ['常熟路', 'Changshu Road'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['jjh7'],
            children: ['lcgp'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['shanghai', 'sh7', '#FF6900', '#000', '7号线', 'Line 7']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
    },
    line_name: ['1号线', 'Line 1'],
    psd_num: '1',
    line_num: '01',
    info_panel_type: 'sh',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: {
        isLegacy: false,
        terminal: false,
    },
    svgWidth: {
        destination: 1600,
        runin: 1200,
        railmap: 2000,
        indoor: 3500,
    },
    notesGZMTR: [],
    namePosMTR: {
        isStagger: true,
        isFlip: false,
    },
};

export default params;
