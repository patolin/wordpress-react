import { Box, Button, Heading, Image } from 'grommet';
import { Menu } from 'grommet-icons';
import Logo from './assets/pato_400x400.png';

const AppBar = (props) => { 

   
    return (
        <Box
            tag='header'
            direction='row'
            align='center'
            justify='between'
            background='brand'
            pad={{ left: 'medium', right:'small', vertical: 'medium'}}
            elevation='medium'
            style={{ zIndex: '1'}}
            {...props}
        >
            <Image  width="100" src={Logo} />
            <Heading level='3' margin='none'>
                
                Mi blog personal<br/>
                { props.children }
            </Heading>
            <Button 
                icon={<Menu />} 
                onClick={props.switchSidebarHandle} 
            />
        </Box>
    )
};

export default AppBar