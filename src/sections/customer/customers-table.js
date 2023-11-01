import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 600 }}>
          <Table>
            <TableHead style={{}}>
              <TableRow >
              
                <TableCell style={{fontSize:18,backgroundColor:'#32a87d'}} sx={{textAlign:'center'}}>
                  نام واحد 
                </TableCell>
                <TableCell style={{fontSize:18,backgroundColor:'#32a87d'}} sx={{textAlign:'center'}}>
                   روز قبل
                </TableCell>
                <TableCell style={{fontSize:18,backgroundColor:'#32a87d'}} sx={{textAlign:'center'}}>
                   دو روز قبل
                </TableCell>
                <TableCell style={{fontSize:18,backgroundColor:'#32a87d'}} sx={{textAlign:'center'}}>
                   هفته قبل
                </TableCell>
                <TableCell style={{fontSize:18,backgroundColor:'#32a87d'}} sx={{textAlign:'center'}}>
                 ماه قبل
                </TableCell>

                <TableCell style={{fontSize:18,backgroundColor:'#32a87d'}} sx={{textAlign:'center'}}>
                 3 ماه قبل
                </TableCell>

                <TableCell style={{fontSize:18,backgroundColor:'#32a87d'}} sx={{textAlign:'center'}}>
                  6 ماه قبل
                </TableCell>

                <TableCell style={{fontSize:18,backgroundColor:'#32a87d'}} sx={{textAlign:'center'}}>
                 یکسال  قبل
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer,index) => {
                //const isSelected = selected.includes(customer.id);
               // const createdAt = format(customer.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                     key={index}
                    // selected={isSelected}
                  >
                 
                    <TableCell style={{backgroundColor:'#a8def7'}}>
                     
                       
                        <Typography style={{fontSize:15,justifyContent:'center',alignItems:'center'}} sx={{textAlign:'center',fontWeight:'bold'}}>
                          {customer.UnitTitle}
                        </Typography>
                     
                    </TableCell >
                    <TableCell style={{fontSize:15,backgroundColor:'#dab1fa'}} sx={{textAlign:'center',fontWeight:'bold'}} >
                      {customer.Counter}
                    </TableCell>
                    <TableCell style={{fontSize:15,backgroundColor:'#fab1df'}} sx={{textAlign:'center',fontWeight:'bold'}}>
                      {customer.Counter2}
                    </TableCell>
                    <TableCell style={{fontSize:15,backgroundColor:'#b2f578'}} sx={{textAlign:'center',fontWeight:'bold'}}>
                      {customer.Counter7}
                    </TableCell>
                    <TableCell style={{fontSize:15,backgroundColor:'#f5d078'}} sx={{textAlign:'center',fontWeight:'bold'}}>
                    {customer.Counter30}
                    </TableCell>

                    <TableCell style={{fontSize:15,backgroundColor:'#f58169'}} sx={{textAlign:'center',fontWeight:'bold'}}>
                    {customer.Counter90}
                    </TableCell>

                    <TableCell style={{fontSize:15,backgroundColor:'#f5909f'}} sx={{textAlign:'center',fontWeight:'bold'}}>
                    {customer.Counter180}
                    </TableCell>

                    <TableCell style={{fontSize:15,backgroundColor:'#c6c3f7'}} sx={{textAlign:'center',fontWeight:'bold'}}>
                    {customer.Counter360}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      {/* <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
