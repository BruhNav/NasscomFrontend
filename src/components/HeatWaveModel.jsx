import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import {images} from '../assets'

function createData(CityName, score1, score2, score3, score4) {
  return { CityName, score1, score2, score3, score4 }
}

const rows = [
    createData('MSE', "1.1 ± 0.05", "1.3 ± 0.07", "0.8 ± 0.06", "1.2±0.07")
]

const { arcImg } = images

const HeatWaveModel = () => {


  return (
    <div className='flex flex-col justify-center items-center mt-8'>
        <div className='flex flex-col justify-center items-center mt-12'>
            <div className='font-bold text-text text-5xl'>
                DEPLOYED MODEL: <span className='text-cta mt-2'>Federated Conv-1D</span>
            </div>
            <div className='mt-12'>
                <img width={'600rems'} src={arcImg} />
            </div>
        </div>
        <div className='mt-12 border-2 border-'>
            <TableContainer >
                <Table sx={{minWidth:700}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Models</TableCell>
                            <TableCell align='right'>Conv-1D Federated</TableCell>
                            <TableCell align='right'>Conv-1D Centralized</TableCell>
                            <TableCell align='right'>Conv-2D Federated</TableCell>
                            <TableCell align='right'>Conv-2D Centralized</TableCell>
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
                            <TableCell align='right'>{row.score1}</TableCell>
                            <TableCell align='right'>{row.score2}</TableCell>
                            <TableCell align='right'>{row.score3}</TableCell>
                            <TableCell align='right'>{row.score4}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div className='mt-2 mb-12 text-cta'>*The ± symbol signifies the variation of MSE among all the 5 cities</div>
    </div>
  )
}

export default HeatWaveModel