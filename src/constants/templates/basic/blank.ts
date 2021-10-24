const params = {
    style: 'mtr',
    svg_height: 300,
    svg_width: 800,
    svg_dest_width: 1000,
    show_outer: true,
    padding: 8.750201061605276,
    y_pc: 40,
    strip_pc: 90,
    branch_spacing: 45,
    theme: ['hongkong', 'twl', '#E2231A', '#fff'],
    direction: 'r',
    current_stn_idx: 'l1mz',
    platform_num: '2',
    txt_bg_gap: 15,
    txt_flip: false,
    stn_list: {
        linestart: {
            parents: [],
            children: ['l1mz'],
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
            parents: ['iwf6'],
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
            parents: ['linestart'],
            children: ['iwf6'],
            name: ['荃灣', 'Tsuen Wan'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '02',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['中環', 'Central'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '01',
            interchange: [[]],
            transfer: { type: 'none', tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            usage: '',
            facility: '',
        },
    },
    line_name: ['荃灣綫', 'Tsuen Wan Line'],
    dest_legacy: false,
    char_form: 'trad',
    psd_num: 1,
    line_num: 'TW',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
};

export default params;
