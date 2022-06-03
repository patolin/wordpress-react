import {Box, Button, Collapsible, Layer} from 'grommet'
import { FormClose } from 'grommet-icons';
const AppSidebar = (props) => {
    return (!props.show || props.size !== 'small') ? (
        <Collapsible direction='horizontal' open={props.show}>
            <Box 
                flex
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
            >
                app sidebar
            </Box>
        </Collapsible>
    ) : (
        <Layer>
            <Box
                background='light-2'
                tag='header'
                justify='end'
                align='center'
                direction='row'
            >
                <Button
                    icon={<FormClose />}
                    onClick={props.switchSidebarHandle}
                />
            </Box>
            <Box 
                flex
                width='full'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
            >
                app sidebar
            </Box>
        </Layer>
    );
}

export default AppSidebar;

    