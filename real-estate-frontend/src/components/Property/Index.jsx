import React from 'react';
import House from './House/Index'
import Apartment from './Apartment/Index';
import Land from './Land/Index';
import Building from './Building/Index';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';


import './Index.scss';
import { useEffect } from 'react';


function Property() {
    useEffect(() => {
        const element = document.getElementById("osennya");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []); // Пустой массив зависимостей означает, что этот эффект выполнится только один раз при монтировании

    return (
        

            <Container maxWidth='xl'>
                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '8px 0px 20px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >

                    <Typography
                        variant='h1'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            margin: '0px 20px',
                            color: '#002B3D',
                            borderRadius: "30px",
                            borderBottom: '10px solid #290000',
                            padding: '6px 20px',
                        }}
                        fullWidth >
                        Лето
                    </Typography>
                    <House />
                </Container>
                
                
                <Container
                    maxWidth="xl"
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #D3DEEE',
                        margin: '40px auto',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    
                    
                    <Typography
                        variant='h2'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            alignSelf: 'center',
                            justifySelf: 'center',
                            margin: '0px 20px 20px 20px',
                            color: '#002B3D',
                            borderRadius: "30px",
                            borderBottom: '10px solid #290000',
                            padding: '6px 30px'
                        }}>
                        
                        Осень
                
                    </Typography>
                    <Apartment />
                </Container>
               
               
                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '40px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                    <Typography
                        variant='h3'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            color: '#002B3D',
                            borderRadius: "30px",
                            margin: '0px 20px 20px 20px',
                            borderBottom: '10px solid #290000',
                            padding: '6px 30px',
                        }}
                        fullWidth >
                        Зима
                    </Typography>
                    <Land />
                    </Container>
                    

                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '40px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            color: '#002B3D',
                            borderRadius: "30px",
                            margin: '0px 20px 20px 20px',
                            borderBottom: '10px solid #290000',
                            padding: '6px 30px',
                        }}
                        fullWidth >
                        Весна
                    </Typography>
                    <Building />

                </Container>
            </Container>

       

      
    )
}

export default Property;