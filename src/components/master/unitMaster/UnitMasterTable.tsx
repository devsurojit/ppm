import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface UnitMasterTableProps{

}

import { FC } from 'react'
import { ButtonFieldInput, CommonLoading, FlexCenter, NoContentPage } from '@/common';
import { Edit } from '@mui/icons-material';

interface UnitMasterTableProps {
    unitDatas: any
    handleEditData: any
    loading: boolean
}

const UnitMasterTable: FC<UnitMasterTableProps> = ({unitDatas, handleEditData, loading}) => {

  const headerCls=`text-white font-extrabold text-md`
    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead className='bg-gradient-to-tr from-indigo-500 via-purple-400 to-blue-500'>
              <TableRow className={`text-white font-bold`}>
                <TableCell className={headerCls}>Serial No.</TableCell>
                <TableCell className={headerCls} align='center'>Unit</TableCell>
                <TableCell className={headerCls} align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { loading ? 
              <FlexCenter className='w-full h-[50vh]'>
                <CommonLoading imgHeight={90} loadSpaceBetween={5} loadingTextCls='text-3xl font-bold'/>
                </FlexCenter>
             : unitDatas && unitDatas?.length > 0 ? unitDatas.map((data: any) => (
                <TableRow
                  key={data.Id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.Id}
                  </TableCell>
                  <TableCell component="th" scope="row" align='center'>
                    {data.Unit_Name}
                  </TableCell>
                  <TableCell component="th" scope="row" align='right'>
                    <ButtonFieldInput name={`edit`} buttonextracls={`capitalize`} 
                    variant={`outlined`}
                    startIcon={<Edit />} handleClick={()=>handleEditData(data)} 
                    />
                  </TableCell>
                </TableRow>
              )) : (loading || (!unitDatas && unitDatas.length === 0)) &&
              <NoContentPage mainCls={`h-[50vh] w-full`} />
             }
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default UnitMasterTable