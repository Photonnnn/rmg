import React, { useState } from 'react';
import { Box, HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { InterchangeInfo, MonoColour, Theme } from '../../../constants/constants';
import RmgFields, { RmgFieldsField } from '../../common/rmg-fields';
import { MdAdd, MdContentCopy, MdDelete } from 'react-icons/md';
import RmgLabel from '../../common/rmg-label';
import ColourModal from '../../modal/colour-modal/colour-modal';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../redux';
import ThemeButton from '../theme-button';

interface InterchangeCardProps {
    interchangeList: InterchangeInfo[];
    onAdd?: (info: InterchangeInfo) => void;
    onDelete?: (index: number) => void;
    onUpdate?: (index: number, info: InterchangeInfo) => void;
}

export default function InterchangeCard(props: InterchangeCardProps) {
    const { interchangeList, onAdd, onDelete, onUpdate } = props;

    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const theme = useAppSelector(state => state.param.theme);

    const cardBg = useColorModeValue('gray.50', 'gray.700');

    const interchangeFields: RmgFieldsField[][] = interchangeList.map((it, i) => [
        {
            type: 'input',
            label: t('InterchangeCard.zhName'),
            value: it[4],
            minW: '80px',
            onChange: val => onUpdate?.(i, [it[0], it[1], it[2], it[3], val, it[5]]),
        },
        {
            type: 'input',
            label: t('InterchangeCard.enName'),
            value: it[5],
            minW: '80px',
            onChange: val => onUpdate?.(i, [it[0], it[1], it[2], it[3], it[4], val]),
        },
    ]);

    return (
        <Box bg={cardBg} boxShadow="lg" p={1} w="100%">
            {interchangeList.length === 0 && (
                <HStack spacing={0.5}>
                    <Text as="i" flex={1} align="center" fontSize="md" colorScheme="gray">
                        {t('InterchangeCard.noInterchanges')}
                    </Text>

                    <IconButton
                        size="sm"
                        variant="ghost"
                        aria-label="Add interchange"
                        onClick={() => onAdd?.([theme[0], '', '#aaaaaa', MonoColour.white, '', ''])}
                        icon={<MdAdd />}
                    />
                </HStack>
            )}

            {interchangeList.map((it, i) => (
                <HStack key={i} spacing={0.5}>
                    <RmgLabel label={t('InterchangeCard.colour')} minW="40px" noLabel={i !== 0}>
                        <ThemeButton
                            theme={[it[0], it[1], it[2], it[3]]}
                            onClick={() => {
                                setIsModalOpen(true);
                                setSelectedIndex(i);
                            }}
                        />
                    </RmgLabel>

                    <RmgFields fields={interchangeFields[i]} noLabel={i !== 0} />

                    {onAdd && i === interchangeFields.length - 1 ? (
                        <IconButton
                            size="sm"
                            variant="ghost"
                            aria-label="Copy interchange"
                            onClick={() => onAdd?.(interchangeList.slice(-1)[0])} // duplicate last leg
                            icon={<MdContentCopy />}
                        />
                    ) : (
                        <Box minW={8} />
                    )}

                    {onDelete && (
                        <IconButton
                            size="sm"
                            variant="ghost"
                            aria-label="Delete interchange"
                            onClick={() => onDelete?.(i)}
                            icon={<MdDelete />}
                        />
                    )}
                </HStack>
            ))}

            <ColourModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultTheme={interchangeList[selectedIndex]?.slice(0, 4) as Theme}
                onUpdate={theme =>
                    onUpdate?.(selectedIndex, [
                        ...theme,
                        interchangeList[selectedIndex][4],
                        interchangeList[selectedIndex][5],
                    ])
                }
            />
        </Box>
    );
}