import {Box, Card, CardBody, CardFooter, CardHeader, Grid} from 'grommet'
import { useApi } from '../hooks/useApi';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const AppBodyPostSingle = (props) => {
    let { postSlug } = useParams();
    const { data, error, loading } = useApi(props.apiEndpoints.apiBase+'/posts?slug='+postSlug);
    
    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error !== "") {
        return <p>{error}</p>;
    }

    if (data.length==1) {
        const post=data[0];
        return (
            <>
                <Box pad="small" gap="medium" width="full" key={post.id}>
                        <Card pad="small" background="light-4" gap="medium" >
                            <CardHeader><h2 dangerouslySetInnerHTML={{__html: post.title.rendered}} /></CardHeader>
                            <CardBody><div dangerouslySetInnerHTML={{__html: post.content.rendered}} /></CardBody>
                            <CardFooter><Link to="/" >Volver</Link></CardFooter>
                        </Card>
                    </Box>
            </>
        );
    } else {
        return (<p>No hay datos</p>);
    }
};

export default AppBodyPostSingle;