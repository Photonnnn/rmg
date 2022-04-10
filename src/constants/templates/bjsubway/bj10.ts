const param = {
    style: 'shmetro',
    svg_height: 600,
    padding: 7,
    y_pc: 40,
    branch_spacing: 45,
    theme: ['beijing', 'bj10', '#0092BC', '#fff'],
    direction: 'r',
    current_stn_idx: 'a5aj',
    platform_num: '',
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
            loop_pivot: false,
        },
        lineend: {
            parents: ['5sy2'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '46',
            secondaryName: false,
            loop_pivot: false,
        },
        l1mz: {
            parents: ['linestart'],
            children: ['iwf6'],
            name: ['巴沟', 'Bαgou'],
            branch: { left: [], right: [] },
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[], [['beijing', 'xjl', '#D22630', '#fff', '西郊线', 'Xijiao Line']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
            loop_pivot: false,
        },
        iwf6: {
            children: ['wr1s'],
            parents: ['l1mz'],
            name: ['苏州街', 'Suzhou Jie'],
            branch: { left: [], right: [] },
            num: '02',
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            secondaryName: false,
            loop_pivot: false,
        },
        wr1s: {
            name: ['海淀黄庄', 'Hαidiαn Huαngzhuαng'],
            secondaryName: false,
            num: '03',
            services: ['local'],
            parents: ['iwf6'],
            children: ['ki6z'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj4', '#008C95', '#fff', '4号线', 'Line 4']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        ki6z: {
            name: ['知春里', 'Zhichunli'],
            secondaryName: false,
            num: '04',
            services: ['local'],
            parents: ['wr1s'],
            children: ['ho8p'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        ho8p: {
            name: ['知春路', 'Zhichun Lu'],
            secondaryName: false,
            num: '05',
            services: ['local'],
            parents: ['ki6z'],
            children: ['m58g'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj13', '#F4DA40', '#fff', '13号线', 'Line 13']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        m58g: {
            name: ['西土城', 'Xitucheng'],
            secondaryName: false,
            num: '06',
            services: ['local'],
            parents: ['ho8p'],
            children: ['xpn8'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        xpn8: {
            name: ['牡丹园', 'Mudαnyuαn'],
            secondaryName: false,
            num: '07',
            services: ['local'],
            parents: ['m58g'],
            children: ['dln8'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj19', '#D6ABC1', '#fff', '19号线', 'Line 19']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        dln8: {
            name: ['健德门', 'Jiαndemen'],
            secondaryName: false,
            num: '08',
            services: ['local'],
            parents: ['xpn8'],
            children: ['o8bf'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        o8bf: {
            name: ['北土城', 'Beitucheng'],
            secondaryName: false,
            num: '09',
            services: ['local'],
            parents: ['dln8'],
            children: ['brdj'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj8', '#009B77', '#fff', '8号线', 'Line 8']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        brdj: {
            name: ['安贞门', 'Anzhenmen'],
            secondaryName: false,
            num: '10',
            services: ['local'],
            parents: ['o8bf'],
            children: ['a5aj'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        a5aj: {
            name: ['惠新西街南口', 'Huixin Xijie Nαnkou'],
            secondaryName: false,
            num: '11',
            services: ['local'],
            parents: ['brdj'],
            children: ['zfmr'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj5', '#AA0061', '#fff', '5号线', 'Line 5']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        zfmr: {
            name: ['芍药居', 'Shαoyαoju'],
            secondaryName: false,
            num: '12',
            services: ['local'],
            parents: ['a5aj'],
            children: ['8aaw'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj13', '#F4DA40', '#fff', '13号线', 'Line 13']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        '8aaw': {
            name: ['太阳宫', 'Tαiyαnggong'],
            secondaryName: false,
            num: '13',
            services: ['local'],
            parents: ['zfmr'],
            children: ['ydvu'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        ydvu: {
            name: ['三元桥', 'Sαnyuαnqiαo'],
            secondaryName: false,
            num: '14',
            services: ['local'],
            parents: ['8aaw'],
            children: ['vr7b'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'cae', '#A192B2', '#fff', '首都机场线', 'Capital Airport Express']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        vr7b: {
            name: ['亮马桥', 'Liαngmαqiαo'],
            secondaryName: false,
            num: '15',
            services: ['local'],
            parents: ['ydvu'],
            children: ['zirf'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        zirf: {
            name: ['农业展览馆', 'Nongye Zhαnlαnguαn\\(Agricultural Exhibition Center)['],
            secondaryName: false,
            num: '16',
            services: ['local'],
            parents: ['vr7b'],
            children: ['umoc'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        umoc: {
            name: ['团结湖', 'Tuαnjiehu'],
            secondaryName: false,
            num: '17',
            services: ['local'],
            parents: ['zirf'],
            children: ['zu3d'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        zu3d: {
            name: ['呼家楼', 'Hujiαlou'],
            secondaryName: false,
            num: '18',
            services: ['local'],
            parents: ['umoc'],
            children: ['jvv4'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj6', '#B58500', '#fff', '6号线', 'Line 6']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        jvv4: {
            name: ['金台夕照', 'Jintαi Xizhαo'],
            secondaryName: false,
            num: '19',
            services: ['local'],
            parents: ['zu3d'],
            children: ['or24'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        or24: {
            name: ['国贸', 'Guomαo'],
            secondaryName: false,
            num: '20',
            services: ['local'],
            parents: ['jvv4'],
            children: ['4jed'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj1', '#A4343A', '#fff', '1号线', 'Line 1']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: true,
        },
        '4jed': {
            name: ['双井', 'Shuαngjing'],
            secondaryName: false,
            num: '21',
            services: ['local'],
            parents: ['or24'],
            children: ['ivhb'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj7', '#FFC56E', '#fff', '7号线', 'Line 7']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        ivhb: {
            name: ['劲松', 'Jingsong'],
            secondaryName: false,
            num: '22',
            services: ['local'],
            parents: ['4jed'],
            children: ['ddmv'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        ddmv: {
            name: ['潘家园', 'Pαnjiαyuαn'],
            secondaryName: false,
            num: '23',
            services: ['local'],
            parents: ['ivhb'],
            children: ['iviw'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        iviw: {
            name: ['十里河', 'Shilihe'],
            secondaryName: false,
            num: '24',
            services: ['local'],
            parents: ['ddmv'],
            children: ['e1oo'],
            branch: { left: [], right: [] },
            transfer: {
                info: [
                    [
                        ['beijing', 'bj14', '#CA9A8E', '#fff', '14号线', 'Line 14'],
                        ['beijing', 'bj17', '#00A9A9', '#fff', '17号线', 'Line 17'],
                    ],
                ],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        e1oo: {
            name: ['分钟寺', 'Fenzhongsi'],
            secondaryName: false,
            num: '25',
            services: ['local'],
            parents: ['iviw'],
            children: ['ryq5'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        ryq5: {
            name: ['成寿寺', 'Chengshousi'],
            secondaryName: false,
            num: '26',
            services: ['local'],
            parents: ['e1oo'],
            children: ['vsjf'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        vsjf: {
            name: ['宋家庄', 'Songjiαzhuαng'],
            secondaryName: false,
            num: '27',
            services: ['local'],
            parents: ['ryq5'],
            children: ['3e31'],
            branch: { left: [], right: [] },
            transfer: {
                info: [
                    [
                        ['beijing', 'bj5', '#AA0061', '#fff', '5号线', 'Line 5'],
                        ['beijing', 'yzl', '#D0006F', '#fff', '亦庄线', 'Yizhuang Line'],
                    ],
                ],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        '3e31': {
            name: ['石榴庄', 'Shiliuzhuαng'],
            secondaryName: false,
            num: '28',
            services: ['local'],
            parents: ['vsjf'],
            children: ['y4y5'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        y4y5: {
            name: ['大红门', 'Dαhongmen'],
            secondaryName: false,
            num: '29',
            services: ['local'],
            parents: ['3e31'],
            children: ['m1yi'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        m1yi: {
            name: ['角门东', 'Jiαomendong'],
            secondaryName: false,
            num: '30',
            services: ['local'],
            parents: ['y4y5'],
            children: ['1rsb'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        '1rsb': {
            name: ['角门西', 'Jiαomenxi'],
            secondaryName: false,
            num: '31',
            services: ['local'],
            parents: ['m1yi'],
            children: ['e9sh'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj4', '#008C95', '#fff', '4号线', 'Line 4']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        e9sh: {
            name: ['草桥', 'Cαoqiαo'],
            secondaryName: false,
            num: '32',
            services: ['local'],
            parents: ['1rsb'],
            children: ['ef1u'],
            branch: { left: [], right: [] },
            transfer: {
                info: [
                    [
                        ['beijing', 'bj19', '#D6ABC1', '#fff', '19号线', 'Line 19'],
                        ['beijing', 'dae', '#0049A5', '#fff', '大兴机场线', 'Daxing Airport Express'],
                    ],
                ],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        ef1u: {
            name: ['纪家庙', 'Jijiαmiαo'],
            secondaryName: false,
            num: '33',
            services: ['local'],
            parents: ['e9sh'],
            children: ['u56c'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        u56c: {
            name: ['首经贸', 'Shoujingmαo\\(Capital Univ. of\\Economics & Business)'],
            secondaryName: false,
            num: '34',
            services: ['local'],
            parents: ['ef1u'],
            children: ['ej4f'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'yfl', '#D86018', '#fff', '房山线', 'Fangshan Line']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: true,
        },
        ej4f: {
            name: ['丰台站', 'Fengtɑi Zhɑn\\(Fengtai Railway Station)'],
            secondaryName: false,
            num: '35',
            services: ['local'],
            parents: ['u56c'],
            children: ['zq2p'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        zq2p: {
            name: ['泥洼', 'Niwα'],
            secondaryName: false,
            num: '36',
            services: ['local'],
            parents: ['ej4f'],
            children: ['wmkp'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        wmkp: {
            name: ['西局', 'Xiju'],
            secondaryName: false,
            num: '37',
            services: ['local'],
            parents: ['zq2p'],
            children: ['qppt'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj14', '#CA9A8E', '#fff', '14号线', 'Line 14']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        qppt: {
            name: ['六里桥', 'Liuliqiαo'],
            secondaryName: false,
            num: '38',
            services: ['local'],
            parents: ['wmkp'],
            children: ['t7p2'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj9', '#97D700', '#fff', '9号线', 'Line 9']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        t7p2: {
            name: ['莲花桥', 'Liαnhuαqiαo'],
            secondaryName: false,
            num: '39',
            services: ['local'],
            parents: ['qppt'],
            children: ['yd1q'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        yd1q: {
            name: ['公主坟', 'Gongzhufen'],
            secondaryName: false,
            num: '40',
            services: ['local'],
            parents: ['t7p2'],
            children: ['8b25'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj1', '#A4343A', '#fff', '1号线', 'Line 1']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        '8b25': {
            name: ['西钓鱼台', 'Xidiαoyutαi'],
            secondaryName: false,
            num: '41',
            services: ['local'],
            parents: ['yd1q'],
            children: ['5dz8'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        '5dz8': {
            name: ['慈寿寺', 'Cishousi'],
            secondaryName: false,
            num: '42',
            services: ['local'],
            parents: ['8b25'],
            children: ['gwtx'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj6', '#B58500', '#fff', '6号线', 'Line 6']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
            loop_pivot: false,
        },
        gwtx: {
            name: ['车道沟', 'Chedαogou'],
            secondaryName: false,
            num: '43',
            services: ['local'],
            parents: ['5dz8'],
            children: ['1yud'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        '1yud': {
            name: ['长春桥', 'Chαngchunqiαo'],
            secondaryName: false,
            num: '44',
            services: ['local'],
            parents: ['gwtx'],
            children: ['5sy2'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
        '5sy2': {
            name: ['火器营', 'Huoqiying'],
            secondaryName: false,
            num: '45',
            services: ['local'],
            parents: ['1yud'],
            children: ['lineend'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
            loop_pivot: false,
        },
    },
    line_name: ['10号线', 'Line 10'],
    psd_num: '1',
    line_num: '6',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: ['内环方向', 'Clockwise Direction'] },
    svgWidth: { destination: 2000, runin: 2000, railmap: 2500, indoor: 4000 },
    notesGZMTR: [],
    namePosMTR: { isStagger: true, isFlip: false },
    coline: [],
    loop: true,
    loop_info: { bank: true, left_and_right_factor: 0, bottom_factor: 23 },
};

export default param;
