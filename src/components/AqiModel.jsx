import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import {images} from '../assets'

function createData(CityName, score1, score2, score3, score4) {
  return { CityName, score1, score2, score3, score4 }
}

const rows = [
    createData('City', 1.2, 1.3, 1.4, 1.5),
]

const { arcImg2 } = images

const AqiModel = () => {


  return (
    <div className='flex flex-col justify-center items-center mt-8'>
        <div className='flex flex-col justify-center items-center mt-12'>
            <div className='font-bold text-text text-5xl'>
                DEPLOYED MODEL: <span className='text-cta mt-2'>Multiheaded Conv-1D</span>
            </div>
            <div className='mt-12'>
                <img width={'948rems'} src={arcImg2} />
            </div>
        </div>
        <div className='my-12 border-2 border-'>
            <TableContainer >
                <Table sx={{minWidth:700, maxWidth:800}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Models</TableCell>
                            <TableCell align='center'>Multiheaded Conv-1D</TableCell>
                            <TableCell align='center'>CNN + LSTM</TableCell>
                            <TableCell align='center'>Mullti-variate CNN <div>(with single output)</div></TableCell>
                            <TableCell align='center'>Multi-variate CNN <div>(with multi step output)</div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component='th' scope='row'>
                                {row.CityName}
                            </TableCell>
                            <TableCell align='center'>6.08</TableCell>
                            <TableCell align='center'>9.7</TableCell>
                            <TableCell align='center'>8.9</TableCell>
                            <TableCell align='center'>7.34</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </div>
  )
}

export default AqiModel