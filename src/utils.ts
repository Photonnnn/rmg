import { IntInfoTag, InterchangeInfo } from "./Station/Station";

export type ID = string;
export interface BranchInfo {
    left: [string, ID] | [], 
    right: [string, ID] | []
}
export type Name = [string, string];
export enum DirectionLong {left, right};
export enum NeighbourPl {parents, children};
export interface StationInfo {
    branch: BranchInfo;
    parents: ID[];
    children: ID[];
    interchange?: any;
    transfer?: StationTransfer;
    [propName: string]: any;
}
interface StationTransfer {
    type: string;
    tick_direc: 'r' | 'l';
    paid_area: boolean;
    osi_names: Name[];
    info: InterchangeInfo[][];
}
export interface StationInfoDict {
    [index: string]: StationInfo;
}
export interface RMGParam {
    stn_list: StationInfoDict;
    [propName: string]: any;
}

export interface LineEntry {
    id: string;
    name: {
        en: string;
        [x: string]: string;
    };
    colour: string;
    fg?: string;
}

export interface CityEntry {
    id: string;
    country: string;
    name: {
        en: string;
        [x: string]: string;
    }
}

export function putParams(instance: RMGParam) {
    localStorage.setItem('rmgParam', JSON.stringify(instance));
}

export function getParams() {
    return JSON.parse(localStorage.rmgParam) as RMGParam;
}

export function setParams(key: string, data: any) {
    let param = getParams();
    param[key] = data;
    putParams(param);
}

export function test(svgEl) {
    var [svgW, svgH] = svgEl.attr('viewBox').split(' ').slice(2);

    var canvas = <HTMLCanvasElement> $('canvas')[0];
    $('canvas').attr({
        width: svgW*2.5, height:svgH*2.5
    });
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // bypass Chrome min font size (to be improved)

    svgEl.find('.rmg-name__gzmtr--en.rmg-name__gzmtr--station, .rmg-name__en.rmg-name__mtr--station, .rmg-name__zh.IntName').each((_,el) => {
        $(el).attr('font-size', '10px');
    });

    svgEl.find('.rmg-name__gzmtr--en.rmg-name__gzmtr--int').each((_,el) => {
        $(el).attr('font-size', '8px');
    });

    svgEl.find('.rmg-name__gzmtr--en.rmg-name__gzmtr--int-small, .rmg-name__en.IntName').each((_,el) => {
        $(el).attr('font-size', '7px');
    });

    svgEl.find('text:not([font-size]), tspan:not([font-size])').each((_,el) => {
        $(el).attr('font-size', window.getComputedStyle(el).fontSize);
    });

    svgEl.find('text, tspan').each((_,el) => {
        var elStyle = window.getComputedStyle(el);
        $(el).attr({
            'font-family': elStyle.getPropertyValue('font-family'), 
            'fill': elStyle.getPropertyValue('fill'), 
            'alignment-baseline': elStyle.getPropertyValue('alignment-baseline'), 
            'dominant-baseline': elStyle.getPropertyValue('dominant-baseline'),
            'text-anchor': elStyle.getPropertyValue('text-anchor')
        }).removeAttr('class');
    });

    svgEl.find('#strip, #dest_strip').each((_,el) => {
        var elStyle = window.getComputedStyle(el);
        $(el).attr({
            'stroke-width': elStyle.getPropertyValue('stroke-width')
        });
    });

    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, svgW*2.5, svgH*2.5);
        saveAs(
            (<HTMLCanvasElement>$('canvas')[0]).toDataURL('image/png'), 
            'rmg_export'
        );
    }
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgEl[0].outerHTML)));
}

function saveAs(uri: string, filename: string) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);

    } else {
        window.open(uri);
    }
}

export function getTxtBoxDim(elem: SVGGraphicsElement, svg: string) {
    let svgNode = $('#' + svg)[0] as Element as SVGSVGElement;
    let bcr = elem.getBoundingClientRect();
    let pt = svgNode.createSVGPoint();
    let ctm = svgNode.getScreenCTM();
    pt.x = bcr.left;
    pt.y = bcr.top;
    let pos = pt.matrixTransform(ctm.inverse());
    return {x:pos.x, y:pos.y, width:bcr.width, height:bcr.height};
}

export function joinIntName(names: Name, dy1, dy2): [JQuery<HTMLElement>, number, number] {
    var [nameZH, nameEN] = names.map(txt => txt.split(/\\/g));
    var res = $('<text>').addClass('rmg-name__zh IntName').text(nameZH[0]);
    for (let i=1; i<nameZH.length; i++) {
        res = res.append(
            $('<tspan>', {'x':0, 'dy':dy1, 'dominant-baseline': 'central'}).text(nameZH[i])
        );
    }
    var btwGap = (nameZH.length == 1) ? 9 : 9;
    res = res.append(
        $('<tspan>', {
            'x':0, 'dy':btwGap, 'class': 'rmg-name__en IntName'
        }).text(nameEN[0])
    );
    for (let i=1; i<nameEN.length; i++) {
        res = res.append(
            $('<tspan>', {
                'x':0, 'dy':dy2, 'class': 'rmg-name__en IntName'
            }).text(nameEN[i])
        );
    }
    return [res, nameZH.length, nameEN.length];
}

export function getIntBoxGZ(intInfo: InterchangeInfo, state) {
    let bg = intInfo[IntInfoTag.colour];
    let fg = intInfo[IntInfoTag.fg];
    let names = [
        intInfo[IntInfoTag.nameZH], 
        intInfo[IntInfoTag.nameEN]
    ];
    let nameZHs = names[0].match(/[\d]+|[\D]+/g) || [''];
    let intNameSplitOk = false;
    if (nameZHs.length == 2) {
        if (!isNaN(Number(nameZHs[0])) && isNaN(Number(nameZHs[1]))) {
            intNameSplitOk = true;
        }
    }
    let boxEl = $('<g>')
        .append(
            $('<use>', { 
                'xlink:href': '#intbox_gz', 
                fill: state===-1 ? '#aaa' : bg
            })
        )
        .append(
            $('<text>', { y: 8.5, class: 'rmg-name__zh rmg-name__gzmtr--int' })
                .append($('<tspan>', { 'font-size':'16px', 'dominant-baseline': 'central' }).text(intNameSplitOk ? nameZHs[0] : ''))
                .append($('<tspan>', { dy:-1, 'dominant-baseline': 'central' }).text(intNameSplitOk ? nameZHs[1] : nameZHs.join('')))
        )
        .append(
            $('<text>', { 
                y: 19.5, 
                class: 'rmg-name__en'
            })
                .addClass(names[1].length > 10 ? 'rmg-name__gzmtr--int-small' : 'rmg-name__gzmtr--int')
                .text(names[1])
        );
    if (fg === '#fff' || state === -1) {
        $(boxEl).find('text').addClass('rmg-name__gzmtr--white-fg');
    }

    return boxEl;
}

export function getRandomId() {
    return Math.floor(Math.random() * Math.pow(36, 4)).toString(36).padStart(4, '0');
}

export function getNameFromId(stnId: ID) {
    let numsZH = [
        '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', 
        '日', '月', '金', '木', '水', '火', '土', 
        '竹', '戈', '十', '大', '中', '一', '弓', 
        '人', '心', '手', '口', 
        '尸', '廿', '山', '女', '田', '難', '卜', '重'
    ];
    let numsEN = [
        'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 
        'Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf',
        'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 
        'Oscar', 'Papa', 'Quebec', 'Romeo', 
        'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu'
    ];
    return [
        stnId.split('').map(char => numsZH[parseInt(char, 36)]).join(''), 
        stnId.split('').map(char => numsEN[parseInt(char, 36)]).join(' ')
    ];
}

export function describeParams(param: RMGParam) {
    return `Number of stations: ${Object.keys(param.stn_list).length-2}
            ${Object.entries(param.stn_list).map(x => ['linestart','lineend'].includes(x[0]) ? '' : x[1].name.join(' - ')).join('<br>').trim().replace(/\\/,' ')}`;
}

export function countryCode2Emoji(code: string): string {
    var chars = code.toUpperCase().split('');
    if (code.length == 2) {
        return chars.map(char => String.fromCodePoint((char.codePointAt(0)+127397))).join('');
    } else {
        return '\u{1f3f4}' + chars.map(char => String.fromCodePoint((char.codePointAt(0)+917536))).join('') + '\u{e007f}';
    }
}

export function rgb2Hex(rgb: string) {
    let hex = rgb.match(/[\d]+/g)
        .map(dec => Number(dec).toString(16).padStart(2,'0'))
        .join('');
    switch (hex) {
        case '000000': return '#000';
        case 'ffffff': return '#fff';
        default: return '#' + hex;
    }
}

export function updateParam() {
    var param = getParams();

    // Version 0.10
    if (!('line_name' in param)) {
        param.line_name = ['路線名', 'Name of Line'];
    }
    if (!('dest_legacy' in param)) {
        param.dest_legacy = false;
    }

    // Version 0.11
    if (!('char_form' in param)) {
        param.char_form = (region => {switch (region) {
            case 'KR': return 'trad';
            case 'TC': return 'tw';
            case 'SC': return 'cn';
            case 'JP': return 'jp';
        }})(param.fontZH[0].split(' ').reverse()[0])
    }
    delete param.fontZH;
    delete param.fontEN;
    delete param.weightZH;
    delete param.weightEN;

    // Version 0.12
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        // if (['linestart', 'lineend'].includes(stnId)) {continue;}
        // if ('transfer' in stnInfo) {
        //     delete param.stn_list[stnId].interchange;
        //     switch (stnInfo.change_type) {
        //         case 'int2':
        //             param.stn_list[stnId].interchange = [[stnInfo.transfer[1]]];
        //             break;
        //         case 'int3_l':
        //         case 'int3_r':
        //             param.stn_list[stnId].interchange = [stnInfo.transfer.slice(1,3)];
        //             break;
        //         case 'osi11_pl':
        //         case 'osi11_pr':
        //         case 'osi11_ul':
        //         case 'osi11_ur':
        //             param.stn_list[stnId].interchange = [[], stnInfo.transfer.slice(0,2)];
        //             break;
        //         case 'osi12_pl':
        //         case 'osi12_pr':
        //         case 'osi12_ul':
        //         case 'osi12_ur':
        //             param.stn_list[stnId].interchange = [[], stnInfo.transfer];
        //             break;
        //     }
        // }
        // delete param.stn_list[stnId].transfer;
        
        if (!('branch' in stnInfo)) {
            param.stn_list[stnId].branch = { left:[], right:[] };
            if (stnInfo.children.length == 2) {
                param.stn_list[stnId].branch.right = ['through', stnInfo.children[1]];
            } else {
                param.stn_list[stnId].branch.right = [];
            }
            if (stnInfo.parents.length == 2) {
                param.stn_list[stnId].branch.left = ['through', stnInfo.parents[1]];
            } else {
                param.stn_list[stnId].branch.left = [];
            }
        }
    }

    // Version 1.2
    if (!('psd_num' in param)) {
        param.psd_num = 1;
    }
    if (!('line_num' in param)) {
        param.line_num = 1;
    }
    delete param.style;
    if (param.theme.length == 3) {
        param.theme.push('#fff');
    }
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (['linestart', 'lineend'].includes(stnId)) {continue;}
        if (!('num' in stnInfo)) {
            param.stn_list[stnId].num = '00';
        }
    }

    // Version 1.3
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if ('interchange' in stnInfo) {
            stnInfo.interchange.map(arr => {
                arr.map(intInfo => {
                    if (intInfo.length == 5) {
                        intInfo.splice(3,0,'#fff');
                    }
                });
            });
        }
    }

    // Version 1.4
    if (!('info_panel_type' in param)) {
        param.info_panel_type = 'panasonic';
    }

    // Version 1.5
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (stnInfo.change_type === 'osi22_end_p') {
            param.stn_list[stnId].change_type = 'osi22_pr';
        }
        if (stnInfo.change_type === 'osi22_end_u') {
            param.stn_list[stnId].change_type = 'osi22_ur';
        }
    }

   // Version 2.1
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (!('interchange' in stnInfo)) {
            param.stn_list[stnId].interchange = [[]];
        }
    }

    // Version 2.2
    if (param.info_panel_type === 'gz_1') {
        param.info_panel_type = 'gz28';
    }

    // Version 2.3
    if (param.info_panel_type === 'panasonic') {
        param.info_panel_type = 'gz28';
    }
    if (param.info_panel_type === 'gz_2') {
        param.info_panel_type = 'gzgf';
    }
    if (param.info_panel_type === 'gz_3') {
        param.info_panel_type = 'gz3';
    }
    if (!('direction_gz_x' in param)) {
        param.direction_gz_x = 50;
    }
    if (!('direction_gz_y' in param)) {
        param.direction_gz_y = 70;
    }

    // Version 2.6
    for (let [stnId, stnInfo] of Object.entries(param.stn_list)) {
        if (!('transfer' in param)) {
            param.stn_list[stnId].transfer = {
                type: stnInfo.change_type.split('_')[0], 
                tick_direc: (stnInfo.change_type === 'none' || stnInfo.change_type === 'int2') ? 'r' : stnInfo.change_type.split('_')[1].split('').slice().reverse()[0], 
                paid_area: (stnInfo.change_type.indexOf('osi')!==-1) ? stnInfo.change_type.split('_')[1][0]==='p' : true, 
                osi_names: (stnInfo.change_type.indexOf('osi')!==-1) ? [stnInfo.interchange[1][0]] : [], 
                info: (stnInfo.interchange.length === 2) ? [stnInfo.interchange[0], stnInfo.interchange[1].slice(1)] : stnInfo.interchange
            }
        }
    }
    putParams(param);
}


const langFallback = (lang: string) => {
    switch (lang) {
        case 'en': return ['en'];
        case 'zh-Hans': return ['zh-Hans', 'zh', 'en'];
        case 'zh-HK': return ['zh-HK', 'zh-Hant', 'zh', 'en'];
        default: return [lang, 'en'];
    }
}

export const getTransText = (obj: {[index: string]: string}, lang: string) => {
    return obj[langFallback(lang).find(l => obj[l])];
}