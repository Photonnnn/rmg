import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ParamContext } from '../../context';
import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    Icon,
    ListItemText,
    ListItemSecondaryAction,
    Switch,
    Collapse,
    makeStyles,
    createStyles,
    TextField,
    Grid,
    Button,
} from '@material-ui/core';
import { Name } from '../../types';

const useStyles = makeStyles(theme =>
    createStyles({
        divider: {
            margin: theme.spacing(0, 2),
        },
        nested: {
            paddingLeft: theme.spacing(5),
        },
        grid: {
            paddingLeft: theme.spacing(8),
            paddingBottom: theme.spacing(1),
            paddingRight: theme.spacing(2),
            '& .MuiFormControl-root': {
                width: '100%',
            },
        },
    })
);

const DesignListMTR = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    const { dispatch } = React.useContext(ParamContext);

    return (
        <>
            <ListItem>
                <ListItemIcon>
                    <Icon>text_rotation_none</Icon>
                </ListItemIcon>
                <ListItemText primary={t('design.txtFlip.text')} />
                <Divider orientation="vertical" flexItem className={classes.divider} />
                <Button variant="outlined" color="primary" onClick={() => dispatch({ type: 'SET_TEXT_FLIP' })}>
                    {t('design.txtFlip.flip')}
                </Button>
            </ListItem>
            <Divider />
            <CustomiseDest />
        </>
    );
};

export default DesignListMTR;

const CustomiseDest = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const { param, dispatch } = React.useContext(ParamContext);
    const [open, setOpen] = React.useState(
        param.customiseMTRDest.isLegacy || param.customiseMTRDest.terminal !== false
    );

    const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let terminal =
            param.customiseMTRDest.terminal !== false
                ? (param.customiseMTRDest.terminal.map((val, i) => (i === index ? event.target.value : val)) as Name)
                : false;
        dispatch({ type: 'SET_TERMINAL_OVERRIDE', terminal });
    };

    return React.useMemo(
        () => (
            <>
                <ListItem button onClick={() => setOpen(prevOpen => !prevOpen)}>
                    <ListItemIcon>
                        <Icon>text_fields</Icon>
                    </ListItemIcon>
                    <ListItemText primary={t('design.MTRDest.button')} />
                    {open ? <Icon color="action">expand_less</Icon> : <Icon color="action">expand_more</Icon>}
                </ListItem>
                <Collapse in={open}>
                    <List component="div" disablePadding>
                        <ListItem className={classes.nested}>
                            <ListItemText primary={t('design.MTRDest.legacy')} />
                            <ListItemSecondaryAction>
                                <Switch
                                    edge="end"
                                    onChange={(_, checked) => dispatch({ type: 'SET_DEST_LEGACY', isLegacy: checked })}
                                    checked={param.customiseMTRDest.isLegacy}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem className={classes.nested}>
                            <ListItemText
                                primary={t('design.MTRDest.terminal')}
                                secondary={
                                    param.customiseMTRDest.terminal === false
                                        ? ''
                                        : param.customiseMTRDest.terminal.join()
                                }
                            />
                            <ListItemSecondaryAction>
                                <Switch
                                    edge="end"
                                    checked={param.customiseMTRDest.terminal !== false}
                                    onChange={(_, checked) =>
                                        dispatch({
                                            type: 'SET_TERMINAL_OVERRIDE',
                                            terminal: checked ? ['', ''] : false,
                                        })
                                    }
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Collapse in={param.customiseMTRDest.terminal !== false} unmountOnExit>
                            <Grid
                                container
                                spacing={1}
                                justify="center"
                                alignItems="flex-start"
                                className={classes.grid}
                            >
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label={t('design.MTRDest.zh')}
                                        value={param.customiseMTRDest.terminal[0] || ''}
                                        onChange={handleChange(0)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label={t('design.MTRDest.en')}
                                        value={param.customiseMTRDest.terminal[1] || ''}
                                        onChange={handleChange(1)}
                                    />
                                </Grid>
                            </Grid>
                        </Collapse>
                    </List>
                </Collapse>
            </>
        ),
        [JSON.stringify(param.customiseMTRDest), open, classes.nested, classes.grid]
    );
};