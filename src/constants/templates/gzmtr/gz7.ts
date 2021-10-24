const params = {
    style: 'gzmtr',
    svg_height: 300,
    svg_width: 1000,
    svg_dest_width: 1000,
    show_outer: true,
    padding: 8.750201061605276,
    y_pc: 40,
    strip_pc: 90,
    branch_spacing: 45,
    theme: ['guangzhou', 'gz7', '#97D700', '#fff'],
    direction: 'l',
    current_stn_idx: 'ei9t',
    platform_num: '4',
    txt_bg_gap: 15,
    txt_flip: false,
    stn_list: {
        linestart: {
            parents: [],
            children: ['iwf6'],
            name: ['路綫左端', 'LEFT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        lineend: {
            parents: ['ei9t'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        l1mz: {
            parents: ['iwf6'],
            children: ['lyqw'],
            name: ['石壁', 'Shibi'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '02',
            interchange: [[]],
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz2', '#00629B', '#fff', '2号线', 'Line 2']]],
            },
            services: ['local'],
            usage: '',
            facility: '',
        },
        iwf6: {
            children: ['l1mz'],
            parents: ['linestart'],
            name: ['广州南站', 'Guangzhou South\\Railway Station'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '01',
            interchange: [[]],
            transfer: {
                type: 'int2',
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['guangzhou', 'gz2', '#00629B', '#fff', '2号线', 'Line 2']]],
            },
            services: ['local'],
            usage: '',
            facility: '',
        },
        ei9t: {
            parents: ['qbbb'],
            children: ['lineend'],
            branch: { left: [], right: [] },
            name: ['大学城南', 'Higher Education\\Mega Center S.'],
            change_type: 'none',
            num: '09',
            interchange: [[]],
            services: ['local'],
            facility: '',
            transfer: {
                info: [[['guangzhou', 'gz4', '#00843D', '#fff', '4号线', 'Line 4']]],
                type: 'int2',
                osi_names: [],
                paid_area: true,
                tick_direc: 'r',
            },
            usage: '',
        },
        qbbb: {
            parents: ['tgp4'],
            children: ['ei9t'],
            branch: { left: [], right: [] },
            name: ['板桥', 'Banqiao'],
            change_type: 'none',
            num: '08',
            interchange: [[]],
            services: ['local'],
            facility: '',
            transfer: { info: [[]], type: 'none', osi_names: [], paid_area: true, tick_direc: 'r' },
            usage: '',
        },
        tgp4: {
            parents: ['su3g'],
            children: ['qbbb'],
            branch: { left: [], right: [] },
            name: ['员岗', 'Yuangang'],
            change_type: 'none',
            num: '07',
            interchange: [[]],
            services: ['local'],
            facility: '',
            transfer: { info: [[]], type: 'none', osi_names: [], paid_area: true, tick_direc: 'r' },
            usage: '',
        },
        su3g: {
            parents: ['dre1'],
            children: ['tgp4'],
            branch: { left: [], right: [] },
            name: ['南村万博', 'Nancun Wanbo'],
            change_type: 'none',
            num: '06',
            interchange: [[]],
            services: ['local'],
            facility: '',
            transfer: { info: [[]], type: 'none', osi_names: [], paid_area: true, tick_direc: 'r' },
            usage: '',
        },
        dre1: {
            parents: ['9v64'],
            children: ['su3g'],
            branch: { left: [], right: [] },
            name: ['汉溪长隆', 'Hanxi Changlong'],
            change_type: 'none',
            num: '05',
            interchange: [[]],
            services: ['local'],
            facility: '',
            transfer: {
                info: [[['guangzhou', 'gz3', '#ECA154', '#000', '3号线', 'Line 3']]],
                type: 'int2',
                osi_names: [],
                paid_area: true,
                tick_direc: 'r',
            },
            usage: '',
        },
        '9v64': {
            parents: ['lyqw'],
            children: ['dre1'],
            branch: { left: [], right: [] },
            name: ['钟村', 'Zhongcun'],
            change_type: 'none',
            num: '04',
            interchange: [[]],
            services: ['local'],
            facility: '',
            transfer: { info: [[]], type: 'none', osi_names: [], paid_area: true, tick_direc: 'r' },
            usage: '',
        },
        lyqw: {
            parents: ['l1mz'],
            children: ['9v64'],
            branch: { left: [], right: [] },
            name: ['谢村', 'Xiecun'],
            change_type: 'none',
            num: '03',
            interchange: [[]],
            services: ['local'],
            facility: '',
            transfer: { info: [[]], type: 'none', osi_names: [], paid_area: true, tick_direc: 'r' },
            usage: '',
        },
    },
    line_name: ['7号线', 'Line 7'],
    dest_legacy: false,
    char_form: 'trad',
    psd_num: '10',
    line_num: '7',
    info_panel_type: 'gz1421',
    direction_gz_x: 35.78,
    direction_gz_y: 78.8,
};

export default params;
