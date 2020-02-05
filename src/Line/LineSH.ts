import { RMGLine } from './Line';
import { RMGStationSH, IntStationSH, station_id } from '../Station/StationSH';
import { RMGStation } from '../Station/Station';

import { ID, Name, StationInfo, RMGParam } from '../utils';

export class RMGLineSH extends RMGLine {
    constructor(param) {
        super(param);
    }

    _initStnInstance(stnId: ID, stnInfo: StationInfo): RMGStation {
        switch (stnInfo.change_type) {
            case 'int2':
                return new IntStationSH(stnId, stnInfo);
            default:
                return new RMGStationSH(stnId, stnInfo);
        }
    }

    // draw the line in railmap
    drawLine() {
        $('.rmg-line').removeClass('rmg-line__mtr').addClass('rmg-line__shmetro');

        this.branches.map(branch => {
            var lineMainStns = branch.filter(stnId => this.stations[stnId].state >= 0);
            var linePassStns = branch.filter(stnId => this.stations[stnId].state <= 0);

            if (lineMainStns.length === 1) {
                linePassStns = branch;
            }

            if (lineMainStns.filter(stnId => linePassStns.indexOf(stnId) !== -1).length == 0 && lineMainStns.length) {
                // if two set disjoint
                if (linePassStns[0] === branch[0]) {
                    // -1 -1 1 1
                    linePassStns.push(lineMainStns[0]);
                } else if (lineMainStns[0] === branch[0] && lineMainStns[lineMainStns.length - 1] === branch[branch.length - 1] && linePassStns.length) {
                    linePassStns = branch;
                    lineMainStns = [];
                } else {
                    // 1 1 -1 -1
                    linePassStns.unshift(lineMainStns[lineMainStns.length - 1]);
                }
            }

            // stretch the main line
            var path = this._linePath(lineMainStns)
            var paths = path.match(/[\d.]+/g)
            path = `M ${paths[0]},${paths[1]} H ${Number(paths[2]) + 30}`

            // draw the main line
            $('#line_main').append($('<path>', { d: path }));

            // stretch the pass line
            var path = this._linePath(linePassStns)
            var paths = path.match(/[\d.]+/g)
            path = `M ${Number(paths[0]) - 30},${paths[1]} H ${paths[2]}`

            // draw the pass line
            $('#line_pass').append($('<path>', { d: path }));
        });

        $('#line_main').html($('#line_main').html());
        $('#line_pass').html($('#line_pass').html());
    }

    fillThemeColour() {
        super.fillThemeColour();

        // this will add the stroke of the circle
        // however the stroke path is defined in index.html
        // which made changing station style strange
        $('path#' + station_id).attr('stroke', this._themeColour);

        // pass stroke should be added somewhere else
        // but I can't figure it out
        $('path#stn_sh_pass').attr('stroke', '#aaa');

        // the last decoration line
        $('#line_shmetro_left_use').attr('fill', this._themeColour)
    }

    drawDestInfo() {
        $('#station_info_shmetro > #platform > text').text(this._platformNum);

        let validDest: ID[] = this[this._direction + 'ValidDests'];

        var [destNameZH, destNameEN] = [0, 1].map(idx => {
            return validDest.map(stnId => this.stations[stnId].name[idx].replace(/\\/g, ' ')).join('/');
        })

        var bcr = $('#station_info_shmetro > g:last-child')[0].getBoundingClientRect();
        var flagLength = 160 + 150 + bcr.width + 45 + 50;
        console.log("flagLength: " + flagLength)



        // arrow
        var isLeft = (this._direction == 'r') ? 1 : -1;
        var arrowX = (this._svgDestWidth - isLeft * flagLength) / 20;
        var arrowRotate = 90 * (1 - isLeft);
        $('#station_info_shmetro > #arrow_left_use').attr('transform', `translate(${arrowX},135)rotate(${arrowRotate})`);

        // not in use now
        var platformNumX = arrowX + isLeft * (160 + 50 + 75);
        $('#station_info_shmetro > #platform').attr('transform', `translate(${platformNumX},130)`);

        // list the destination text
        // Todo: fix svg_dest_width*0.8, this has only been tested on 1000 width
        if (this._direction === 'l') {
            var txtAnchor = 'end';
            var destNameX = this._svgDestWidth * 0.8;
        } else {
            var txtAnchor = 'start';
            var destNameX = this._svgDestWidth * 0.2;
        }
        $('#station_info_shmetro > g:last-child').attr({
            transform: `translate(${destNameX},135)`,
            'text-anchor': txtAnchor
        });

        // for each left valid destinations, get the name from id
        var destinations_zh = "", destinations_en = ""
        this.lValidDests.forEach(stn => {
            destinations_zh += this.stations[stn].name[0]
            destinations_en += this.stations[stn].name[1]
        });
        $('#station_info_shmetro > #dest_text > text:first-child').text(`往${destinations_zh}`)
        $('#station_info_shmetro > #dest_text > text:last-child').text(`To ${destinations_en}`)

        // the last decoration line
        $('#line_shmetro_left_use').attr({
            transform: `translate(0,220)`,
        })
    }

    updateStnNameBg() {
        $('#current_bg').hide();  // fix the mysterious black rect
    }

}
