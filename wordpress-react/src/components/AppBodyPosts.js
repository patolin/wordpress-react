import {Box, Card, CardBody, CardFooter, CardHeader, Grid} from 'grommet'
import { useApi } from '../hooks/useApi';

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom"


 
const AppBodyPosts = (props) => {
        const { data, error, loading } = useApi(props.apiEndpoints.apiBase+'/posts/');
        
        if (loading) {
            return <p>Cargando...</p>;
        }
    
        if (error !== "") {
            return <p>{error}</p>;
        }
        
     
        return (
            
                <Box flex align='left'>
                    <h1>{props.title}</h1>
                    <Grid gap="medium" columns={{ count: 'fit', size: 'medium'}}>
                    {data.map((post, index) => (
                        <Box pad="small" gap="medium" width="full" key={post.id}>
                            <Card pad="small" background="light-4" gap="medium" >
                                <CardHeader><h2 dangerouslySetInnerHTML={{__html: post.title.rendered}} /></CardHeader>
                                <CardBody><div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} /></CardBody>
                                <CardFooter><Link to={post.link.replace('https://patolin.com/', '/')} >Leer más</Link></CardFooter>
                            </Card>
                        </Box>
                    ))}
                    </Grid>
                </Box>
            
        );
        
        
    
}

AppBodyPosts.defaultProps = {
    title: 'Blog content',
    defaultWidth: 8,
}

export default AppBodyPosts;