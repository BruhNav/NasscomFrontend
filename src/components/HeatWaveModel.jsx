import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent,  DialogTitle } from '@mui/material'
import {images} from '../assets'

function createData(CityName, score1, score2, score3, score4) {
  return { CityName, score1, score2, score3, score4 }
}

const rows = [
    createData('MSE', "1.1 ± 0.05", "1.2±0.07", "0.8 ± 0.06","1.3 ± 0.07" )
]

const { arcImg } = images

const HeatWaveModel = () => {

	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

  return (
    <div className='flex flex-col justify-center items-center mt-8'>
        <div className='font-bold text-text text-5xl'>
            DEPLOYED MODEL: <span className='text-cta mt-2'>Federated Conv-1D</span>
        </div>
        <div className='mt-12 border-2 border-'>
            <TableContainer >
                <Table sx={{minWidth:1000, height: 125}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Models</TableCell>
                            <TableCell align='center'>Conv-1D Federated (Model 1)</TableCell>
                            <TableCell align='center'>Conv-2D Centralized (Model 1)</TableCell>
                            <TableCell align='center'>Conv-2D Federated</TableCell>
                            <TableCell align='center'>Conv-1D Centralized</TableCell>
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
                            <TableCell align='center'>{row.score1}</TableCell>
                            <TableCell align='center'>{row.score2}</TableCell>
                            <TableCell align='center'>{row.score3}</TableCell>
                            <TableCell align='center'>{row.score4}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div className='mt-2 text-cta'>*The ± symbol signifies the variation of MSE among all the 5 cities</div>
        <button onClick={handleClickOpen} className='bg-cta text-white font-semibold w-56 h-12 text-lg rounded mt-8'>Show Architecture</button>



				<Dialog
					open={open}
					onClose={handleClose}
				>
					<DialogTitle>
						<div className='text-cta font-bold text-center text-xl'>Federated Conv-1D Architecture</div> 
					</DialogTitle>
					<DialogContent>
					<img width={'600rems'} src={arcImg} />
					</DialogContent>
					<DialogActions>
						<button className='place-self-center m-2 bg-cta text-white w-14 h-8 rounded' onClick={handleClose}>Close</button>
					</DialogActions>
				</Dialog>
    </div>
  )
}

export default HeatWaveModel