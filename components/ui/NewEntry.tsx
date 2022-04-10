import { ChangeEvent, useState } from 'react';
import { Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Box } from '@mui/system';

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false);

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        setInputValue( event.target.value );
    }

    const onSave = () => {
        if( inputValue.length <= 1 ) return;

        console.log(inputValue)
    }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>

        {
            isAdding ? (
                <>
                    <TextField 
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1}}
                        //placeholder='Nueva Entrada'
                        autoFocus
                        multiline
                        label='Nueva Entrada'
                        helperText={ inputValue.length <= 1 && touched && 'Ingrese un valor' }
                        error={ inputValue.length <= 1 && touched }
                        value={ inputValue }
                        onChange={ onTextFieldChanged }
                        onBlur={ () => setTouched( true ) }
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button 
                            variant='text'
                            onClick={() => setIsAdding(false)}
                        >
                            Cancelar
                        </Button>
                        <Button 
                            variant='outlined'
                            color='secondary'
                            endIcon={ <SaveOutlinedIcon/> }
                            onClick={ onSave }
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            ) : (
                <Button
                    startIcon={ <AddIcon /> }
                    fullWidth
                    variant='outlined'
                    onClick={() => setIsAdding(true)}
                >
                    Agregar Tarea
                </Button>
            )
        }
    </Box>
  )
}
