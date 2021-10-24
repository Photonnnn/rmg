const params = {
    style: 'mtr',
    svg_height: 300,
    svg_width: 1200,
    svg_dest_width: 1000,
    show_outer: true,
    padding: 4.20352796096724,
    y_pc: 40,
    strip_pc: 90,
    branch_spacing: 45,
    theme: ['hongkong', 'isl', '#0071CE', '#fff'],
    direction: 'r',
    current_stn_idx: 'eats',
    platform_num: '1',
    txt_bg_gap: 15,
    txt_flip: false,
    stn_list: {
        linestart: {
            parents: [],
            children: ['qvhm'],
            name: ['路綫左端', 'LEFT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
        },
        l1mz: {
            parents: ['f9r3'],
            children: ['iwf6'],
            name: ['杏花邨', 'Heng Fa Chuen'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '16',
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['柴灣', 'Chai Wan'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '17',
        },
        '7ut6': {
            branch: { left: [], right: [] },
            parents: ['vsdm'],
            children: ['f9r3'],
            name: ['西灣河', 'Sai Wan Ho'],
            change_type: 'none',
            num: '14',
        },
        f9r3: {
            branch: { left: [], right: [] },
            parents: ['7ut6'],
            children: ['l1mz'],
            name: ['筲箕灣', 'Shau Kei Wan'],
            change_type: 'none',
            num: '15',
        },
        vsdm: {
            branch: { left: [], right: [] },
            parents: ['i1bw'],
            children: ['7ut6'],
            name: ['太古', 'Tai Koo'],
            change_type: 'none',
            num: '13',
        },
        i1bw: {
            branch: { left: [], right: [] },
            parents: ['xe64'],
            children: ['vsdm'],
            name: ['鰂魚涌', 'Quarry Bay'],
            change_type: 'none',
            num: '12',
        },
        xe64: {
            branch: { left: [], right: [] },
            parents: ['9yva'],
            children: ['i1bw'],
            name: ['北角', 'North Point'],
            change_type: 'int2',
            num: '11',
            interchange: [[['hongkong', 'tkl', '#A35EB5', '#fff', '將軍澳綫', 'Tseung Kwan O Line']]],
        },
        '9yva': {
            branch: { left: [], right: [] },
            parents: ['pdpl'],
            children: ['xe64'],
            name: ['炮台山', 'Fortress Hill'],
            change_type: 'none',
            num: '10',
        },
        pdpl: {
            branch: { left: [], right: [] },
            parents: ['d157'],
            children: ['9yva'],
            name: ['天后', 'Tin Hau'],
            change_type: 'none',
            num: '09',
        },
        d157: {
            branch: { left: [], right: [] },
            parents: ['4oo6'],
            children: ['pdpl'],
            name: ['銅鑼灣', 'Causeway Bay'],
            change_type: 'none',
            num: '08',
        },
        '4oo6': {
            branch: { left: [], right: [] },
            parents: ['ocmo'],
            children: ['d157'],
            name: ['灣仔', 'Wan Chai'],
            change_type: 'none',
            num: '07',
        },
        ocmo: {
            branch: { left: [], right: [] },
            parents: ['ggt8'],
            children: ['4oo6'],
            name: ['金鐘', 'Admiralty'],
            change_type: 'int2',
            num: '06',
            interchange: [[['hongkong', 'sile', '#B6BD00', '#fff', '南港島綫', 'South Island Line']]],
        },
        ggt8: {
            branch: { left: [], right: [] },
            parents: ['ttr8'],
            children: ['ocmo'],
            name: ['中環', 'Central'],
            change_type: 'osi22_pr',
            num: '05',
            interchange: [
                [['hongkong', 'twl', '#E2231A', '#fff', '荃灣綫', 'Tsuen Wan Line']],
                [
                    ['香港', 'Hong Kong'],
                    ['hongkong', 'tcl', '#F38B00', '#fff', '東涌綫', 'Tung Chung Line'],
                    ['hongkong', 'ael', '#007078', '#fff', '機場快綫', 'Airport Express'],
                ],
            ],
        },
        ttr8: {
            branch: { left: [], right: [] },
            parents: ['eats'],
            children: ['ggt8'],
            name: ['上環', 'Sheung Wan'],
            change_type: 'none',
            num: '04',
        },
        eats: {
            branch: { left: [], right: [] },
            parents: ['q0jw'],
            children: ['ttr8'],
            name: ['西營盤', 'Sai Ying Pun'],
            change_type: 'none',
            num: '03',
        },
        q0jw: {
            branch: { left: [], right: [] },
            parents: ['qvhm'],
            children: ['eats'],
            name: ['香港大學', 'HKU'],
            change_type: 'none',
            num: '02',
        },
        qvhm: {
            branch: { left: [], right: [] },
            parents: ['linestart'],
            children: ['q0jw'],
            name: ['堅尼地城', 'Kennedy Town'],
            change_type: 'none',
            num: '01',
        },
    },
    line_name: ['港島綫', 'Island Line'],
    dest_legacy: false,
    char_form: 'trad',
    psd_num: 1,
    line_num: 'IS',
    info_panel_type: 'gz_1',
};

export default params;
