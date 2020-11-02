import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import _ from 'lodash';
import moment from 'moment';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
  createData(5, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  props.data.map((x) => {
    x.hora = moment(x.fecha).format('HH:mm:ss');
  })
  console.log(props.data);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Lastest Values</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            {props.data.length &&
              Object.keys(props.data[0]).map((x, y) => {
                if (y >= 1) {
                  return (
                    <TableCell style={{fontWeight: 'bold'}} align={"left"}>{x.toUpperCase()}</TableCell>
                  )
                }
              }
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.location}</TableCell>
              <TableCell align="left">{row.voltage}</TableCell>
              <TableCell align="left">{row.corriente}</TableCell>
              <TableCell align="left">{row.nivel}</TableCell>
              <TableCell align="left">{row.ph}</TableCell>
              <TableCell align="left">{moment(row.fecha).format('YYYY-MM-DD')}</TableCell>
              <TableCell align="left">{row.hora}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}

/*

x.fecha = moment(x.fecha).format('HH:mm:ss');
                if (y >= 1) {
                  return (
                    <TableCell align="left">{x.toUpperCase()}</TableCell>
                  )
                }

*/