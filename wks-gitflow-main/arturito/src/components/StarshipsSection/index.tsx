import Table from '../Table';
import useSWR from 'swr';
import { swGet } from '../../utils/fetcher';


const columns= [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
    },
    {
        title: 'Manufacturer',
        dataIndex: 'manufacturer',
        key: 'manufacturer',
    },
    {
        title: 'Passengers',
        dataIndex: 'passengers',
        key: 'passengers',
    },
    {
        title: 'Films',
        dataIndex: 'films',
        key: 'films',
        render: (films: string[]) => films.length,
    }
]

const Startships = () => {
    const { error, data } = useSWR('/starships', swGet)

    if (error) {
        return <div className="px-2">Oh oh!</div>;
    }
    if (!data) {
        return <div className="px-2">Loading...</div>;
    }
    
    return (
        <Table columns={ columns } data= { data.results } />
    )
}

export default Startships