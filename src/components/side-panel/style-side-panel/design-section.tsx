import React, { useState } from 'react';
import { Box, Button, Heading, HStack } from '@chakra-ui/react';
import { useAppSelector } from '../../../redux';
import ThemeButton from '../theme-button';
import ColourModal from '../../modal/colour-modal/colour-modal';
import { useDispatch } from 'react-redux';
import {
    customiseDestinationName,
    flipStationNames,
    setDirection,
    setLineName,
    setLineNum,
    setPanelType,
    setPlatform,
    setPsdNum,
    setTheme,
    staggerStationNames,
    toggleLineNameBeforeDestination,
} from '../../../redux/param/action';
import RmgButtonGroup from '../../common/rmg-button-group';
import { PanelTypeGZMTR, PanelTypeShmetro, RmgStyle, ShortDirection } from '../../../constants/constants';
import { MdSwapVert } from 'react-icons/md';
import GZMTRNoteSection from './gzmtr-note-section';
import { RmgFields, RmgFieldsField, RmgLabel } from '@railmapgen/rmg-components';
import { useTranslation } from 'react-i18next';

export default function DesignSection() {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const {
        style,
        theme,
        line_name: lineName,
        line_num: lineNum,
        direction,
        platform_num: platformNum,
        psd_num: psdNum,
        namePosMTR,
        customiseMTRDest,
        info_panel_type,
    } = useAppSelector(state => state.param);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const fields1: RmgFieldsField[] = [
        {
            type: 'input',
            label: t('StyleSidePanel.design.zhLineName'),
            value: lineName[0],
            onChange: value => dispatch(setLineName([value, lineName[1]])),
        },
        {
            type: 'input',
            label: t('StyleSidePanel.design.enLineName'),
            value: lineName[1],
            onChange: value => dispatch(setLineName([lineName[0], value])),
        },
        {
            type: 'input',
            label: t('StyleSidePanel.design.lineNum'),
            value: lineNum,
            onChange: value => dispatch(setLineNum(value)),
            hidden: ![RmgStyle.GZMTR].includes(style),
        },
    ];

    const directionSelections = [
        {
            label: t('StyleSidePanel.design.left'),
            value: ShortDirection.left,
        },
        {
            label: t('StyleSidePanel.design.right'),
            value: ShortDirection.right,
        },
    ];

    const panelTypeGZMTROptions = Object.values(PanelTypeGZMTR).reduce<Record<string, string>>(
        (acc, cur) => ({
            ...acc,
            [cur]: t('StyleSidePanel.design.' + cur),
        }),
        {}
    );

    const panelTypeSHMetroOptions = Object.values(PanelTypeShmetro).reduce<Record<string, string>>(
        (acc, cur) => ({
            ...acc,
            [cur]: t('StyleSidePanel.design.' + cur),
        }),
        {}
    );

    const fields2: RmgFieldsField[] = [
        {
            type: 'custom',
            label: t('StyleSidePanel.design.direction'),
            component: (
                <RmgButtonGroup
                    selections={directionSelections}
                    defaultValue={direction}
                    onChange={nextDirection => dispatch(setDirection(nextDirection))}
                />
            ),
            minW: 'full',
            oneLine: true,
        },
        {
            type: 'input',
            label: t('StyleSidePanel.design.platformNum'),
            value: platformNum || '',
            onChange: value => dispatch(setPlatform(value)),
        },
        {
            type: 'input',
            label: t('StyleSidePanel.design.psdNum'),
            value: psdNum,
            onChange: value => dispatch(setPsdNum(value)),
            hidden: ![RmgStyle.GZMTR].includes(style),
        },
        {
            type: 'select',
            label: t('StyleSidePanel.design.panelType'),
            value: info_panel_type,
            options: style === RmgStyle.GZMTR ? panelTypeGZMTROptions : panelTypeSHMetroOptions,
            onChange: value => dispatch(setPanelType(value as PanelTypeGZMTR | PanelTypeShmetro)),
            hidden: ![RmgStyle.GZMTR, RmgStyle.SHMetro].includes(style),
        },
    ];

    const staggerNameSelections = [
        {
            label: t('StyleSidePanel.design.alternatively'),
            value: true,
        },
        {
            label: t('StyleSidePanel.design.onOneSide'),
            value: false,
        },
    ];

    const mtrSpecifiedFields: RmgFieldsField[] = [
        {
            type: 'custom',
            label: t('StyleSidePanel.design.nameDisplay'),
            component: (
                <HStack>
                    <RmgButtonGroup
                        selections={staggerNameSelections}
                        defaultValue={namePosMTR.isStagger}
                        onChange={value => dispatch(staggerStationNames(value))}
                    />
                    <Button
                        size="xs"
                        variant="ghost"
                        leftIcon={<MdSwapVert />}
                        onClick={() => dispatch(flipStationNames())}
                    >
                        {t('StyleSidePanel.design.flip')}
                    </Button>
                </HStack>
            ),
            minW: 'full',
            hidden: ![RmgStyle.MTR].includes(style),
        },
        {
            type: 'switch',
            label: t('StyleSidePanel.design.legacyDestination'),
            isChecked: customiseMTRDest.isLegacy,
            onChange: checked => dispatch(toggleLineNameBeforeDestination(checked)),
            hidden: ![RmgStyle.MTR].includes(style),
            minW: 'full',
            oneLine: true,
        },
        {
            type: 'switch',
            label: t('StyleSidePanel.design.overrideTerminal'),
            isChecked: customiseMTRDest.terminal !== false,
            onChange: checked => dispatch(customiseDestinationName(checked ? ['', ''] : false)),
            hidden: ![RmgStyle.MTR].includes(style),
            minW: 'full',
            oneLine: true,
        },
        {
            type: 'input',
            label: t('StyleSidePanel.design.terminalZhName'),
            value: customiseMTRDest.terminal ? customiseMTRDest.terminal[0] : '',
            placeholder: '機場及博覽館',
            onChange: value =>
                dispatch(
                    customiseDestinationName([value, customiseMTRDest.terminal ? customiseMTRDest.terminal[1] : ''])
                ),
            hidden: ![RmgStyle.MTR].includes(style) || customiseMTRDest.terminal === false,
        },
        {
            type: 'input',
            label: t('StyleSidePanel.design.terminalEnName'),
            value: customiseMTRDest.terminal ? customiseMTRDest.terminal[1] : '',
            placeholder: 'Airport and AsiaWorld-Expo',
            onChange: value =>
                dispatch(
                    customiseDestinationName([customiseMTRDest.terminal ? customiseMTRDest.terminal[0] : '', value])
                ),
            hidden: ![RmgStyle.MTR].includes(style) || customiseMTRDest.terminal === false,
        },
    ];

    return (
        <Box p={1}>
            <Heading as="h5" size="sm">
                {t('StyleSidePanel.design.title')}
            </Heading>

            <HStack spacing={0.5}>
                <RmgLabel label="Colour">
                    <ThemeButton theme={theme} onClick={() => setIsModalOpen(true)} />
                </RmgLabel>

                <RmgFields fields={fields1} />
            </HStack>

            <RmgFields fields={[...fields2, ...mtrSpecifiedFields]} />

            <ColourModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultTheme={theme}
                onUpdate={nextTheme => dispatch(setTheme(nextTheme))}
            />
        </Box>
    );
}
