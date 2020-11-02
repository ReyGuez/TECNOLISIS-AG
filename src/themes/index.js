import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#6bf3f5',
            main: '#0cb8cf',
            dark: '#008f92',
            contrastText: '#fff',
        }
    },
    status: {
        danger: 'orange',
    },
});

export default theme;