const params = {
    style: 'mtr',
    svg_height: 450,
    padding: 8.750201061605276,
    y_pc: 40,
    branch_spacing: 45,
    theme: ['beijing', 'bj9', '#97D700', '#fff'],
    direction: 'r',
    current_stn_idx: 'l1mz',
    platform_num: '2',
    stn_list: {
        linestart: {
            parents: [],
            children: ['l1mz'],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        lineend: {
            parents: ['q0df'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '14',
            secondaryName: false,
        },
        l1mz: {
            parents: ['linestart'],
            children: ['iwf6'],
            name: ['国家图书馆', 'National Library'],
            branch: { left: [], right: [] },
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['beijing', 'bj4', '#008C95', '#fff', '4号线/大兴线', 'Line 4/DAXING Line'],
                        ['beijing', 'bj16', '#6BA539', '#fff', '16号线', 'Line 16'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['zc6u'],
            parents: ['l1mz'],
            name: ['白石桥南', 'Baishiqiao Nan(S)'],
            branch: { left: [], right: [] },
            num: '02',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['beijing', 'bj6', '#B58500', '#fff', '6号线', 'Line 6']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        zc6u: {
            name: ['白堆子', 'Baiduizi'],
            secondaryName: false,
            num: '03',
            services: ['local'],
            parents: ['iwf6'],
            children: ['sg4v'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        sg4v: {
            name: ['军事博物馆', 'Military Museum'],
            secondaryName: false,
            num: '04',
            services: ['local'],
            parents: ['zc6u'],
            children: ['imno'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj1', '#A4343A', '#fff', '1号线', 'Line 1']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        imno: {
            name: ['北京西站', 'Beijing West Railway Station'],
            secondaryName: false,
            num: '05',
            services: ['local'],
            parents: ['sg4v'],
            children: ['ljca'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj7', '#FFC56E', '#fff', '7号线', 'Line 7']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        ljca: {
            name: ['六里桥东', 'Liuliqiao Dong(E)'],
            secondaryName: false,
            num: '06',
            services: ['local'],
            parents: ['imno'],
            children: ['ljvo'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        ljvo: {
            name: ['六里桥', 'Liuliqiao'],
            secondaryName: false,
            num: '07',
            services: ['local'],
            parents: ['ljca'],
            children: ['2mu4'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj10', '#0092BC', '#fff', '10号线', 'Line 10']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        '2mu4': {
            name: ['七里庄', 'Qilizhuang'],
            secondaryName: false,
            num: '08',
            services: ['local'],
            parents: ['ljvo'],
            children: ['exyx'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj14', '#CA9A8E', '#fff', '14号线', 'Line 14']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        exyx: {
            name: ['丰台东大街', 'Fengtai Dongdajie'],
            secondaryName: false,
            num: '09',
            services: ['local'],
            parents: ['2mu4'],
            children: ['dkvo'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        dkvo: {
            name: ['丰台南路', 'Fengtai Nanlu'],
            secondaryName: false,
            num: '10',
            services: ['local'],
            parents: ['exyx'],
            children: ['v3sw'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        v3sw: {
            name: ['科怡路', 'Keyi Lu'],
            secondaryName: false,
            num: '11',
            services: ['local'],
            parents: ['dkvo'],
            children: ['my8f'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        my8f: {
            name: ['丰台科技园', 'Fengtai Science Park'],
            secondaryName: false,
            num: '12',
            services: ['local'],
            parents: ['v3sw'],
            children: ['q0df'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        q0df: {
            name: ['郭公庄', 'Guogongzhuang'],
            secondaryName: false,
            num: '13',
            services: ['local'],
            parents: ['my8f'],
            children: ['lineend'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'yfl', '#D86018', '#fff', '房山线', 'Fangshan Line']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
    },
    line_name: ['9号线', 'Line 9'],
    psd_num: '1',
    line_num: '9',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: false },
    svgWidth: { destination: 2000, runin: 2000, railmap: 2000, indoor: 2000 },
    notesGZMTR: [],
    namePosMTR: { isStagger: true, isFlip: false },
};

export default params;
